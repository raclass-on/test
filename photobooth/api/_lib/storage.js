import { mkdir, readdir, readFile, rm, stat as fsStat, writeFile } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'
import { BlobNotFoundError, del, get, head, list, put } from '@vercel/blob'

// 사진은 비공개(private) Vercel Blob 저장소에 두고, 항상 우리 함수를 거쳐서만 내려보냄.
// 저장소를 프로젝트에 연결하면 BLOB_STORE_ID(+ 요청마다 오는 OIDC 토큰) 또는 BLOB_READ_WRITE_TOKEN이 생김.
// 둘 다 없으면(로컬 개발) .blob-dev 폴더를 대신 사용
const ACCESS = 'private'
const useBlob = Boolean(process.env.BLOB_STORE_ID || process.env.BLOB_READ_WRITE_TOKEN)

export class StorageNotConfigured extends Error {}

function local() {
  if (process.env.VERCEL) throw new StorageNotConfigured('Vercel Blob 저장소가 프로젝트에 연결되지 않았어요')
  return join(process.cwd(), '.blob-dev')
}

export async function save(pathname, bytes, contentType) {
  if (useBlob) {
    await put(pathname, bytes, { access: ACCESS, contentType, addRandomSuffix: false, allowOverwrite: false })
    return
  }
  const file = join(local(), pathname)
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, bytes, { flag: 'wx' })
  await writeFile(`${file}.type`, contentType)
}

// → { contentType, size } | null
export async function stat(pathname) {
  if (useBlob) {
    try {
      const blob = await head(pathname)
      return { contentType: blob.contentType, size: blob.size }
    } catch (err) {
      if (err instanceof BlobNotFoundError) return null
      throw err
    }
  }
  const file = join(local(), pathname)
  try {
    const [{ size }, contentType] = await Promise.all([fsStat(file), readFile(`${file}.type`, 'utf8')])
    return { contentType, size }
  } catch {
    return null
  }
}

// → { status, body, headers } | null. range는 'bytes=0-99' 형식 그대로 전달
export async function read(pathname, range) {
  if (useBlob) {
    const result = await get(pathname, { access: ACCESS, ...(range && { headers: { range } }) })
    if (!result) return null
    const headers = { 'content-type': result.blob.contentType }
    for (const name of ['content-length', 'content-range']) {
      const value = result.headers.get(name)
      if (value) headers[name] = value
    }
    return { status: headers['content-range'] ? 206 : 200, body: result.stream, headers }
  }
  const info = await stat(pathname)
  if (!info) return null
  const bytes = await readFile(join(local(), pathname))
  const m = /^bytes=(\d*)-(\d*)$/.exec(range ?? '')
  if (m && (m[1] || m[2])) {
    const start = m[1] ? Number(m[1]) : bytes.length - Number(m[2])
    const end = Math.min(m[1] && m[2] ? Number(m[2]) : bytes.length - 1, bytes.length - 1)
    const part = bytes.subarray(start, end + 1)
    return {
      status: 206,
      body: part,
      headers: {
        'content-type': info.contentType,
        'content-length': String(part.length),
        'content-range': `bytes ${start}-${end}/${bytes.length}`,
      },
    }
  }
  return { status: 200, body: bytes, headers: { 'content-type': info.contentType, 'content-length': String(bytes.length) } }
}

export async function listPaths(prefix) {
  if (useBlob) {
    const paths = []
    let cursor
    do {
      const page = await list({ prefix, cursor })
      paths.push(...page.blobs.map((b) => b.pathname))
      cursor = page.hasMore ? page.cursor : undefined
    } while (cursor)
    return paths
  }
  const root = local()
  const walk = async (dir) => {
    const entries = await readdir(dir, { withFileTypes: true }).catch(() => [])
    const nested = await Promise.all(
      entries.map((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [relative(root, join(dir, e.name))])),
    )
    return nested.flat()
  }
  return (await walk(root)).filter((p) => p.startsWith(prefix) && !p.endsWith('.type'))
}

export async function remove(pathnames) {
  if (!pathnames.length) return
  if (useBlob) {
    await del(pathnames)
    return
  }
  const root = local()
  await Promise.all(pathnames.flatMap((p) => [rm(join(root, p), { force: true }), rm(join(root, `${p}.type`), { force: true })]))
}
