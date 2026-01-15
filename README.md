# 🌟 Daily Vibe - 오늘의 우주 메시지

MBTI × 띠 × 별자리로 알아보는 오늘의 운세 카드 앱

## ✨ 주요 기능

- **3중 조합 운세**: MBTI + 띠 + 별자리 조합으로 맞춤 운세
- **힙한 네온 카드**: 인스타 공유용 예쁜 운세 카드 이미지
- **행운 번호**: 매일 바뀌는 로또 행운 번호
- **완전 자동화**: 서버가 알아서 운세 생성

## 🚀 빠른 시작 (5분 배포)

### 1. Vercel 배포 (가장 쉬움)

1. [Vercel](https://vercel.com) 가입 (GitHub 연동)
2. 이 프로젝트를 GitHub에 업로드
3. Vercel에서 "Import Project" 클릭
4. GitHub 저장소 선택
5. 환경변수 설정:
   - `ANTHROPIC_API_KEY`: Claude API 키 (선택사항)
6. Deploy 클릭!

### 2. 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# http://localhost:3000 에서 확인
```

## 📁 프로젝트 구조

```
daily-vibe/
├── src/
│   ├── app/
│   │   ├── page.js          # 메인 페이지
│   │   ├── layout.js        # 레이아웃
│   │   ├── globals.css      # 스타일
│   │   └── api/fortune/     # 운세 API
│   ├── components/
│   │   ├── InputForm.js     # 입력 폼
│   │   ├── FortuneCard.js   # 운세 카드
│   │   └── ShareButton.js   # 공유 버튼
│   └── utils/
│       ├── fortuneGenerator.js
│       └── cardGenerator.js
├── package.json
└── tailwind.config.js
```

## 💰 수익화 계획

### Phase 1: MVP (현재)
- 무료 운세 카드 생성
- 이미지 저장 & 공유

### Phase 2: 광고 추가
- Google AdSense 연동
- 배너 광고 (카드 하단)
- 전면 광고 (하루 1회)

### Phase 3: 프리미엄 구독
- 프리미엄 템플릿 10종
- 워터마크 제거
- 고화질 다운로드
- 월 4,900원

## 🛠 기술 스택

- **프레임워크**: Next.js 14
- **스타일링**: Tailwind CSS
- **이미지 생성**: html-to-image
- **AI**: Claude API (선택)
- **배포**: Vercel

## 📱 반응형 디자인

- 모바일 최적화 (Instagram 공유용)
- 데스크탑 지원

## 🔒 환경변수

```env
# .env.local
ANTHROPIC_API_KEY=your_api_key_here  # 선택사항
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

⚠️ API 키 없이도 동작합니다! (로컬 운세 생성)

## 📄 라이선스

MIT License

---

Made with 💜 by Daily Vibe Team
