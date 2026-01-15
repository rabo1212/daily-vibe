import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { mbti, zodiacAnimal, zodiacSign } = await request.json();

    // Claude API 호출을 위한 프롬프트 생성
    const prompt = `당신은 유쾌하고 영감을 주는 운세 전문가입니다. 
다음 조합에 대한 오늘의 운세를 작성해주세요:

- MBTI: ${mbti}
- 띠: ${zodiacAnimal.label}
- 별자리: ${zodiacSign.label}

다음 JSON 형식으로만 응답해주세요 (다른 텍스트 없이):
{
  "message": "2-3문장의 오늘의 운세 메시지. 구체적이고 긍정적이며 실용적인 조언을 포함",
  "loveScore": 1-5 사이의 숫자,
  "moneyScore": 1-5 사이의 숫자,
  "workScore": 1-5 사이의 숫자,
  "luckyColor": "#XXXXXX 형식의 색상코드 (밝고 예쁜 색상)",
  "luckyNumbers": [1-45 사이의 서로 다른 숫자 6개 배열, 오름차순]
}

MBTI 성격 특성과 띠, 별자리의 특성을 조합하여 개인화된 운세를 작성해주세요.`;

    // Anthropic API 키가 있으면 Claude API 호출
    if (process.env.ANTHROPIC_API_KEY) {
      try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.ANTHROPIC_API_KEY,
            'anthropic-version': '2023-06-01',
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 500,
            messages: [
              {
                role: 'user',
                content: prompt,
              },
            ],
          }),
        });

        const data = await response.json();
        
        if (data.content && data.content[0] && data.content[0].text) {
          const fortuneText = data.content[0].text;
          // JSON 파싱 시도
          const jsonMatch = fortuneText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            const fortune = JSON.parse(jsonMatch[0]);
            return NextResponse.json(fortune);
          }
        }
      } catch (apiError) {
        console.error('Claude API error:', apiError);
        // API 실패 시 폴백으로 진행
      }
    }

    // API 키가 없거나 실패 시 로컬 생성
    const fortune = generateLocalFortune(mbti, zodiacAnimal, zodiacSign);
    return NextResponse.json(fortune);

  } catch (error) {
    console.error('Fortune API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate fortune' },
      { status: 500 }
    );
  }
}

// 로컬 운세 생성 함수 (API 없이도 동작)
function generateLocalFortune(mbti, zodiacAnimal, zodiacSign) {
  // MBTI별 기본 메시지
  const mbtiMessages = {
    INTJ: "전략적인 당신에게 오늘은 큰 그림을 그릴 좋은 날입니다.",
    INTP: "호기심 가득한 당신, 오늘 새로운 지식이 영감을 줄 거예요.",
    ENTJ: "리더십이 빛나는 날! 주저하지 말고 앞장서세요.",
    ENTP: "창의적인 아이디어가 샘솟는 날입니다. 기록해두세요!",
    INFJ: "직감이 강해지는 날, 내면의 목소리에 귀 기울여보세요.",
    INFP: "감성이 풍부해지는 날, 창작 활동에 좋은 에너지가 흐릅니다.",
    ENFJ: "주변 사람들에게 따뜻한 영향력을 줄 수 있는 날이에요.",
    ENFP: "열정이 넘치는 날! 새로운 사람들과의 만남이 행운을 가져옵니다.",
    ISTJ: "꼼꼼함이 빛을 발하는 날, 중요한 일을 처리하기 좋습니다.",
    ISFJ: "배려심이 좋은 결과로 돌아오는 날이에요.",
    ESTJ: "실행력이 뛰어난 날! 계획을 행동으로 옮기세요.",
    ESFJ: "사람들과의 조화가 행운을 부르는 날입니다.",
    ISTP: "분석력이 최고조인 날, 문제 해결에 탁월한 능력을 발휘합니다.",
    ISFP: "예술적 감각이 빛나는 날, 아름다운 것에 둘러싸여 보세요.",
    ESTP: "모험을 즐기기 좋은 날! 새로운 도전이 기다립니다.",
    ESFP: "즐거움이 가득한 날, 주변에 긍정 에너지를 퍼뜨리세요.",
  };

  // 띠별 추가 메시지
  const animalBonus = {
    rat: "재치있는 판단이 돈을 부릅니다.",
    ox: "꾸준한 노력이 결실을 맺는 시기입니다.",
    tiger: "용기있는 결정이 필요한 순간이 올 거예요.",
    rabbit: "부드러운 접근이 좋은 결과를 가져옵니다.",
    dragon: "큰 행운이 찾아오는 기운이 느껴집니다.",
    snake: "지혜로운 선택이 빛을 발하는 날이에요.",
    horse: "활동적인 하루가 될 것 같아요, 밖으로 나가보세요!",
    sheep: "예술적 감성을 발휘하기 좋은 날입니다.",
    monkey: "재치와 유머가 인기를 끌 거예요.",
    rooster: "자신감이 성공의 열쇠가 됩니다.",
    dog: "성실함이 인정받는 하루가 될 거예요.",
    pig: "풍요로운 에너지가 가득한 날입니다.",
  };

  // 기본 메시지 조합
  const baseMessage = mbtiMessages[mbti] || "오늘 하루도 좋은 일이 가득하길!";
  const bonusMessage = animalBonus[zodiacAnimal.value] || "";
  
  const message = `${baseMessage} ${bonusMessage}`;

  // 점수 랜덤 생성 (각 조합에 따라 약간의 편향)
  const getScore = () => Math.floor(Math.random() * 3) + 3; // 3-5 사이

  // 행운 번호 생성
  const luckyNumbers = [];
  while (luckyNumbers.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    if (!luckyNumbers.includes(num)) {
      luckyNumbers.push(num);
    }
  }
  luckyNumbers.sort((a, b) => a - b);

  // 행운 색상 (네온 컬러 팔레트)
  const colors = [
    '#FF006E', // 핫핑크
    '#00F5FF', // 시안
    '#B565F0', // 퍼플
    '#F0F000', // 옐로우
    '#00FF88', // 민트
    '#FF6B6B', // 코랄
    '#7B68EE', // 슬레이트블루
    '#FFD700', // 골드
  ];
  const luckyColor = colors[Math.floor(Math.random() * colors.length)];

  return {
    message,
    loveScore: getScore(),
    moneyScore: getScore(),
    workScore: getScore(),
    luckyNumbers,
    luckyColor,
  };
}
