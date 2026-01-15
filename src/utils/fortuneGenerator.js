// MBTI 성격 특성
export const MBTI_TRAITS = {
  INTJ: { name: '전략가', energy: '분석적', strength: '전략', weakness: '감정표현' },
  INTP: { name: '논리술사', energy: '호기심', strength: '분석', weakness: '실행력' },
  ENTJ: { name: '통솔자', energy: '리더십', strength: '결단력', weakness: '융통성' },
  ENTP: { name: '변론가', energy: '창의적', strength: '아이디어', weakness: '지속성' },
  INFJ: { name: '옹호자', energy: '직관적', strength: '통찰력', weakness: '과민' },
  INFP: { name: '중재자', energy: '이상적', strength: '공감', weakness: '현실감' },
  ENFJ: { name: '선도자', energy: '카리스마', strength: '영향력', weakness: '자기희생' },
  ENFP: { name: '활동가', energy: '열정적', strength: '영감', weakness: '집중력' },
  ISTJ: { name: '현실주의자', energy: '신중한', strength: '책임감', weakness: '유연성' },
  ISFJ: { name: '수호자', energy: '헌신적', strength: '배려', weakness: '거절' },
  ESTJ: { name: '경영자', energy: '실용적', strength: '조직력', weakness: '감정이해' },
  ESFJ: { name: '집정관', energy: '사교적', strength: '조화', weakness: '비판수용' },
  ISTP: { name: '장인', energy: '관찰자', strength: '문제해결', weakness: '약속' },
  ISFP: { name: '모험가', energy: '예술적', strength: '감성', weakness: '계획성' },
  ESTP: { name: '사업가', energy: '도전적', strength: '적응력', weakness: '인내심' },
  ESFP: { name: '연예인', energy: '즉흥적', strength: '긍정', weakness: '진지함' },
};

// 띠 특성
export const ZODIAC_ANIMAL_TRAITS = {
  rat: { element: '수', trait: '재치', luck: '지혜로운 결정' },
  ox: { element: '토', trait: '성실', luck: '꾸준한 노력' },
  tiger: { element: '목', trait: '용맹', luck: '용기있는 도전' },
  rabbit: { element: '목', trait: '온화', luck: '평화로운 관계' },
  dragon: { element: '토', trait: '권위', luck: '큰 행운' },
  snake: { element: '화', trait: '지혜', luck: '현명한 판단' },
  horse: { element: '화', trait: '활동', luck: '새로운 시작' },
  sheep: { element: '토', trait: '예술', luck: '창작의 영감' },
  monkey: { element: '금', trait: '영리', luck: '기발한 해결책' },
  rooster: { element: '금', trait: '자신감', luck: '자기 표현' },
  dog: { element: '토', trait: '충직', luck: '신뢰 관계' },
  pig: { element: '수', trait: '풍요', luck: '물질적 행운' },
};

// 별자리 특성
export const ZODIAC_SIGN_TRAITS = {
  aries: { element: '불', trait: '열정', ruling: '화성' },
  taurus: { element: '땅', trait: '안정', ruling: '금성' },
  gemini: { element: '바람', trait: '소통', ruling: '수성' },
  cancer: { element: '물', trait: '감성', ruling: '달' },
  leo: { element: '불', trait: '자신감', ruling: '태양' },
  virgo: { element: '땅', trait: '분석', ruling: '수성' },
  libra: { element: '바람', trait: '균형', ruling: '금성' },
  scorpio: { element: '물', trait: '깊이', ruling: '명왕성' },
  sagittarius: { element: '불', trait: '탐험', ruling: '목성' },
  capricorn: { element: '땅', trait: '성취', ruling: '토성' },
  aquarius: { element: '바람', trait: '혁신', ruling: '천왕성' },
  pisces: { element: '물', trait: '직관', ruling: '해왕성' },
};

// 운세 조합 생성
export function generateFortuneText(mbti, zodiacAnimal, zodiacSign) {
  const mbtiTrait = MBTI_TRAITS[mbti];
  const animalTrait = ZODIAC_ANIMAL_TRAITS[zodiacAnimal];
  const signTrait = ZODIAC_SIGN_TRAITS[zodiacSign];

  // 조합에 따른 메시지 생성 로직
  const templates = [
    `${mbtiTrait.name}의 ${mbtiTrait.energy} 에너지와 ${animalTrait.trait}이 만나 ${animalTrait.luck}이 기대됩니다. ${signTrait.ruling}의 기운이 당신의 ${mbtiTrait.strength}을 더욱 빛나게 할 거예요.`,
    `오늘은 ${signTrait.trait}의 기운이 강해지는 날. ${mbtiTrait.energy} 성향의 당신에게 ${animalTrait.luck}의 기회가 찾아옵니다.`,
    `${animalTrait.element} 기운과 ${signTrait.element} 기운이 조화를 이루는 날입니다. ${mbtiTrait.name}답게 ${mbtiTrait.strength}을 발휘해보세요.`,
  ];

  return templates[Math.floor(Math.random() * templates.length)];
}
