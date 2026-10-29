# 오늘의 네컷 📸

태블릿(또는 노트북) 하나로 운영하는 네컷 사진 부스 웹앱입니다.

1. **촬영** — 4초 카운트다운으로 한 장씩, 총 4장. 다 찍은 뒤 마음에 안 드는 컷만 다시 찍을 수 있어요.
2. **꾸미기**
   - **프레임**: 2×2 그리드 / 1×4 스트립, 배경 12종 (블랙·화이트·핑크·스카이·라임·데이지·체커·도트·홀로그램·별밤·하트·필름)
   - **스티커**: 최근 · 추천 · 말풍선 · 배지 · 글자(직접 입력 가능) · 이모지 · 데코 · 아이콘
     한 손가락으로 이동, 두 손가락이나 모서리 손잡이로 크기·회전, × 로 삭제, "모두 지우기"
   - **필터**: 기본 · 소프트 1 · 소프트 2 · 라이트 · 쿨 · 흑백
3. **저장**
   - **QR 코드**: 사진(+영상)을 서버에 올리고 QR을 띄움 → 각자 휴대폰 카메라로 찍어서 저장
   - **사진 저장 / 영상 저장**: 부스 기기에 바로 저장. 영상은 촬영하는 4초 동안 녹화된 움직이는 네컷
   - 상단 아이콘: 처음으로 · 인쇄(4×6 인화지) · 인스타그램 공유

## 실행 (개발)

```bash
cd photobooth
npm install
npm run dev
```

`http://localhost:5173` 에서 열립니다. 개발 서버에서도 QR 업로드·다운로드 페이지가 그대로 동작합니다
(`@netlify/vite-plugin`이 Netlify Functions와 Blobs를 흉내 냄). 단, 휴대폰으로 QR을 찍으려면 아래처럼 배포해야 합니다.

## 배포 (Netlify, 무료 요금제로 충분)

QR로 사진을 받으려면 인터넷 주소가 필요하고, 카메라는 **https** 주소에서만 켜집니다.

### GitHub 저장소로 연결

1. [Netlify](https://app.netlify.com) → **Add new project → Import an existing project** → 이 저장소 선택
2. **Base directory** 에 `photobooth` 입력 (나머지 빌드 설정은 `netlify.toml`에서 자동으로 읽음)
3. Deploy. 사진 저장소(Netlify Blobs)는 따로 설정할 필요가 없습니다.

### 또는 명령어로

```bash
npm install -g netlify-cli
cd photobooth
netlify deploy --build --prod
```

### 설정

| 항목 | 위치 | 기본값 |
| --- | --- | --- |
| 부스 이름 (프레임 하단 글씨) | `src/config.js` 의 `BRAND`, `BRAND_SMALL` | 오늘의 네컷 |
| 카운트다운 초 / 촬영 장수 | `src/config.js` | 4초 / 4장 |
| 사진 보관 기간 | Netlify 환경변수 `PHOTO_RETENTION_DAYS` (Functions 범위) | 7일 |

## 태블릿에서 부스로 쓰기

1. 크롬(갤럭시 탭) / 사파리(아이패드)에서 배포된 https 주소를 열고 카메라를 허용
2. 브라우저 메뉴 → **홈 화면에 추가** 하면 주소창 없이 전체화면 앱처럼 실행됩니다
3. 촬영 중에는 화면이 꺼지지 않도록 되어 있습니다 (지원 브라우저 한정)

## QR 저장은 이렇게 동작해요

- QR 버튼 → 완성 사진(JPEG)과 영상(MP4/WebM)을 `/api/upload` 로 업로드 → `https://<주소>/s/<id>` QR 표시
- 휴대폰에서 열면 사진/영상 미리보기와 **저장하기** 버튼
  - 아이폰: 공유 시트의 ‘이미지 저장’ → 사진 앱에 바로 저장
  - 안드로이드: 다운로드 → 갤러리의 ‘Download’ 앨범
  - 카카오톡 안에서 열면 외부 브라우저로 여는 버튼 표시
- 주소의 id는 추측할 수 없는 난수이고, 보관 기간이 지나면 열리지 않으며 매일 새벽 3시(KST)에 자동 삭제됩니다.

## 구조

```
photobooth/
├─ index.html / share.html      부스 앱 / QR로 열리는 저장 페이지
├─ netlify.toml                 빌드 설정, /s/* → share.html
├─ netlify/
│  ├─ functions/upload.mjs      POST /api/upload, /api/upload/:id/video
│  ├─ functions/files.mjs       GET  /api/share/:id, /api/file/:id/:kind
│  ├─ functions/cleanup.mjs     보관 기간 지난 파일 매일 삭제
│  └─ lib/booth.mjs             공통 (저장소, id, 파일 형식 검사)
└─ src/
   ├─ components/               Home · Shoot · Editor · 패널 · 스티커 레이어 · QR 모달
   ├─ lib/                      레이아웃, 프레임, 필터, 스티커(SVG), 합성·영상 렌더링
   └─ share/                    저장 페이지
```
