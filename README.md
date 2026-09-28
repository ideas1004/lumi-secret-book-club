# Lumi’s Secret Book Club

Bilingual club website and journal, hosted on Vercel.

- Website: https://lumi-secret-book-club.vercel.app
- Journal: https://lumi-secret-book-club.vercel.app/journal
- Writing studio: https://lumi-secret-book-club.vercel.app/studio

## 글 발행하기

1. 글쓰기 공간에서 연결한 Sanity 계정으로 로그인합니다.
2. 저널 / Journal에서 새 문서를 만듭니다.
3. 제목과 본문을 작성하고, 원하면 사진을 추가합니다. 초안은 자동 저장됩니다.
4. 영어 번역 / English 탭에서 영어 내용을 별도로 입력할 수 있습니다.
5. 발행 정보 / Details에서 날짜와 기록 종류를 설정합니다.
6. Publish를 누르면 저널 목록과 글별 주소에 공개됩니다. 사이트 재배포는 필요 없습니다.

영어 번역이 없는 글은 원문을 보여줍니다. 날짜는 정렬용이며 예약 발행 기능은 아닙니다. 공개한 글의 본문과 사진은 누구나 볼 수 있습니다. 초안은 공개 목록에서 제외됩니다.

## Development

Node.js 22.12+; `npm ci`, then `npm run build`. Static output is in `dist/`.
Sanity project `b8hapo09`, public dataset `production`. Public queries use the published perspective and no API token. Studio requires a project member account. Production CORS origin is the exact Vercel domain, with credentials enabled for Studio.

GitHub main pushes deploy through Vercel. Never commit API tokens or .env files.
