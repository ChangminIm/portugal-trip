# 포르투갈 여행 일정 (2026.7.1–7.13)

모바일 친화 반응형 여행 일정 웹페이지입니다. `index.html` 한 파일이면 됩니다.

## GitHub Pages로 배포하기 (둘 중 택1)

### 방법 A — 웹 업로드 (가장 쉬움, git 불필요)
1. github.com → **New repository** → 이름 예: `portugal-trip` → **Public** → Create.
2. 새 repo 화면에서 **uploading an existing file** 클릭 → `index.html` 드래그 → **Commit changes**.
3. repo의 **Settings → Pages** → *Build and deployment*에서 **Source: Deploy from a branch**,
   **Branch: `main` / `/ (root)`** 선택 → Save.
4. 1~2분 뒤 상단에 주소가 떠요: `https://<내아이디>.github.io/portugal-trip/`
   → 폰 브라우저에 그 주소만 입력하면 끝.

### 방법 B — git CLI
```bash
git clone https://github.com/<내아이디>/portugal-trip.git
cp index.html portugal-trip/ && cd portugal-trip
git add index.html && git commit -m "add itinerary" && git push
# 이후 Settings → Pages 에서 main / root 활성화
```

## 메모
- 지도/후기/예약 링크는 전부 구글 경유라 어느 브라우저에서도 열립니다.
- 폰트(Fraunces·Inter)는 인터넷 연결 시 로드되며, 오프라인이면 기본 폰트로 보입니다.
