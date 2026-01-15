// 카드 템플릿 정의
export const CARD_TEMPLATES = {
  neonCyber: {
    name: '네온 사이버',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accent: '#ff006e',
    secondary: '#00f5ff',
    textColor: '#ffffff',
  },
  purpleDream: {
    name: '퍼플 드림',
    background: 'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
    accent: '#b565f0',
    secondary: '#f0f000',
    textColor: '#ffffff',
  },
  goldLuxury: {
    name: '골드 럭셔리',
    background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)',
    accent: '#ffd700',
    secondary: '#ffffff',
    textColor: '#ffffff',
  },
  mintFresh: {
    name: '민트 프레시',
    background: 'linear-gradient(135deg, #e0f7fa 0%, #80deea 100%)',
    accent: '#00bcd4',
    secondary: '#009688',
    textColor: '#004d40',
  },
  retroWave: {
    name: '레트로 웨이브',
    background: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 50%, #48dbfb 100%)',
    accent: '#ff006e',
    secondary: '#5f27cd',
    textColor: '#ffffff',
  },
  darkMood: {
    name: '다크 무드',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
    accent: '#00ff88',
    secondary: '#ff006e',
    textColor: '#ffffff',
  },
  coralSunset: {
    name: '코랄 선셋',
    background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fdfbfb 100%)',
    accent: '#ff6b6b',
    secondary: '#ee5a24',
    textColor: '#2d3436',
  },
  blueOcean: {
    name: '블루 오션',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    accent: '#00f5ff',
    secondary: '#ffffff',
    textColor: '#ffffff',
  },
  roseGold: {
    name: '로즈골드',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    accent: '#b76e79',
    secondary: '#c9a959',
    textColor: '#5d4e37',
  },
  galaxy: {
    name: '갤럭시',
    background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
    accent: '#00f5ff',
    secondary: '#b565f0',
    textColor: '#ffffff',
  },
};

// 캔버스로 카드 이미지 생성 (서버사이드용)
export async function generateCardImage(fortune, userInfo, template = 'neonCyber') {
  // 이 함수는 서버에서 Canvas를 사용해 이미지를 생성할 때 사용
  // 클라이언트에서는 html-to-image 라이브러리 사용
  
  const cardTemplate = CARD_TEMPLATES[template] || CARD_TEMPLATES.neonCyber;
  
  return {
    template: cardTemplate,
    fortune,
    userInfo,
  };
}

// 날짜 포맷팅
export function formatDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dayName = dayNames[date.getDay()];
  
  return {
    full: `${year}.${month}.${day}`,
    dayName,
    formatted: `${year}.${month}.${day} ${dayName}`,
  };
}

// 별점 렌더링 헬퍼
export function renderStarRating(score, maxScore = 5) {
  const filled = '★'.repeat(score);
  const empty = '☆'.repeat(maxScore - score);
  return filled + empty;
}
