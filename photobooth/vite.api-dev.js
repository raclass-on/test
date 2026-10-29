import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

// 개발 서버(npm run dev)에서 vercel.json 리라이트와 api/ 함수를 Vercel처럼 실행
function compile(source) {
  const names = []
  const pattern = source.replace(/:(\w+)/g, (_, name) => {
    names.push(name)
    return '([^/]+)'
  })
  return { regex: new RegExp(`^${pattern}/?$`), names }
}

function rewrite(rules, pathname) {
  for (const rule of rules) {
    const m = rule.regex.exec(pathname)
    if (!m) continue
    return rule.names.reduce((dest, name, i) => dest.replaceAll(`:${name}`, encodeURIComponent(m[i + 1])), rule.destination)
  }
  return null
}

async function toRequest(req, url) {
  const chunks = []
  if (req.method !== 'GET' && req.method !== 'HEAD') for await (const c of req) chunks.push(c)
  return new Request(url, {
    method: req.method,
    headers: Object.entries(req.headers).filter(([, v]) => typeof v === 'string'),
    body: chunks.length ? Buffer.concat(chunks) : undefined,
  })
}

export default function vercelApiDev() {
  return {
    name: 'vercel-api-dev',
    apply: 'serve',
    configureServer(server) {
      const root = server.config.root
      const config = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8'))
      const rules = config.rewrites.map((r) => ({ ...compile(r.source), destination: r.destination }))

      server.middlewares.use(async (req, res, next) => {
        try {
          const original = new URL(req.url, 'http://localhost')
          const target = rewrite(rules, original.pathname)
          const url = new URL(target ?? original.pathname + original.search, original)
          if (target) for (const [k, v] of original.searchParams) if (!url.searchParams.has(k)) url.searchParams.set(k, v)

          const file = join(root, `${url.pathname}.js`)
          if (!url.pathname.startsWith('/api/') || !existsSync(file)) {
            if (target) req.url = url.pathname + url.search
            return next()
          }
          const mod = await server.ssrLoadModule(file)
          const handler = mod[req.method] ?? (req.method === 'HEAD' ? mod.GET : null)
          const response = handler
            ? await handler(await toRequest(req, url))
            : Response.json({ error: 'method_not_allowed' }, { status: 405 })
          res.statusCode = response.status
          response.headers.forEach((v, k) => res.setHeader(k, v))
          res.end(req.method === 'HEAD' ? undefined : Buffer.from(await response.arrayBuffer()))
        } catch (err) {
          next(err)
        }
      })
    },
  }
}
