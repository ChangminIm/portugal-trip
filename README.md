# 2026년 포르투갈 여행 (2026.7.1–7.13)

리스본 · 마데이라 · 포르투 모바일 친화 반응형 여행 일정 웹앱입니다.

🌐 **배포 주소:** https://changminim.github.io/portugal-trip/

## 기능
- 🗓 13일 일정 · 항공/숙소/예약/파두 정보, 펼치기·편집(이 기기에 저장)
- ⏱ **D-Day 카운터** + 포르투갈/한국 **실시간 두 시간대 시계**
- ☀️ 도시별 **7월 날씨** 요약 · 💶 **€→₩ 환율 변환기**(환율 직접 수정)
- ✅ **예약 체크리스트 진행률 바**(체크 상태 저장)
- 📍 오늘 일정 자동 펼침·강조 · 🗺 하루 동선 한눈에(구글맵)
- 🏛 **장소 상세 페이지**: 장소명 탭 → 사진(위키백과 자동)+한국어 설명+팁+지도/후기/예약. 해시 라우팅이라 **링크 공유 가능**, 뒤로가기 지원
- 🧳 **준비물 체크리스트**: 일정 맞춤(아쿠아슈즈·방한·와인포장 등) 그룹별 체크 + 진행률
- 💶 **예상 비용**(2인 기준) · 환율 연동
- 🌙 다크모드 · 🖨 인쇄/PDF 저장
- 📲 **PWA**: 홈 화면 설치(안드로이드 자동 / **아이폰 공유→홈화면 추가 안내**) + **오프라인** 동작(위키 사진도 본 것은 캐시)
- 🔤 본문/제목 폰트: **나눔스퀘어 ExtraBold**(woff2 셀프호스팅, 오프라인 OK)

## 구성 파일
```
index.html        본문(HTML+CSS+JS 한 파일)
manifest.json     PWA 설치 정보
sw.js             오프라인 캐시 서비스워커
fonts/            나눔스퀘어 woff2 (R/B/EB)
icon-192/512.png  앱 아이콘
```
> `nanum-all_new/`(폰트 원본·zip)은 `.gitignore`로 배포에서 제외됩니다. 배포엔 `fonts/`의 woff2만 사용해요.

## 수정·재배포
파일을 고친 뒤 이 폴더에서:
```bash
git add . && git commit -m "수정 내용" && git push
```
1~2분 뒤 사이트에 자동 반영됩니다. (서비스워커 캐시 버전은 `sw.js`의 `CACHE` 값을 올리면 강제 갱신)

## 폰트 재생성(참고)
나눔스퀘어 TTF → woff2 변환:
```python
from fontTools.ttLib import TTFont   # pip install fonttools brotli
for s,o in [("NanumSquareR.ttf","NanumSquareR.woff2"),
            ("NanumSquareB.ttf","NanumSquareB.woff2"),
            ("NanumSquareEB.ttf","NanumSquareEB.woff2")]:
    f=TTFont(s); f.flavor="woff2"; f.save("fonts/"+o)
```

## 메모
- 지도/후기/예약 링크는 전부 구글 경유라 어느 브라우저에서도 열립니다.
- 7월 포르투갈은 한국보다 **8시간 느림**(서머타임). 환율은 출발 전 현재 값으로 수정하세요.
