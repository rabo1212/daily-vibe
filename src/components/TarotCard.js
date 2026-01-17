'use client';

import { useState, useEffect } from 'react';

// 타로 카드 데이터 (키워드별 분류)
const TAROT_CARDS = {
  love: [
    { id: 'love_04', keyword: '사랑', message: '당신의 진심이 상대방에게 전해질 거예요.' },
    { id: 'love_06', keyword: '인연', message: '운명적인 만남이 기다리고 있어요.' },
    { id: 'love_08', keyword: '인연', message: '과거의 인연이 새로운 모습으로 돌아올 수 있어요.' },
    { id: 'love_10', keyword: '설렘', message: '설레는 감정을 즐기세요, 좋은 징조예요.' },
  ],
  money: [
    { id: 'money_02', keyword: '재물', message: '예상치 못한 곳에서 금전적 행운이 찾아와요.' },
    { id: 'money_04', keyword: '풍요', message: '풍요로운 에너지가 당신을 감싸고 있어요.' },
    { id: 'money_06', keyword: '성공', message: '당신의 노력이 빛을 발할 때가 왔어요.' },
    { id: 'money_08', keyword: '기회', message: '새로운 기회의 문이 열리고 있어요.' },
    { id: 'money_10', keyword: '투자', message: '신중한 투자가 좋은 결과를 가져올 거예요.' },
  ],
  work: [
    { id: 'work_02', keyword: '업무', message: '집중력이 높아지는 시기, 중요한 일을 처리하세요.' },
    { id: 'work_04', keyword: '성취', message: '스스로를 믿으세요, 큰 성취가 기다려요.' },
    { id: 'work_06', keyword: '협력', message: '팀워크가 빛을 발하는 시기예요.' },
    { id: 'work_08', keyword: '리더십', message: '앞장서서 이끌어가세요, 모두가 따를 거예요.' },
    { id: 'work_09', keyword: '창의', message: '창의적인 아이디어가 샘솟는 시기예요.' },
    { id: 'work_10', keyword: '창의', message: '새로운 시도가 좋은 결과로 이어질 거예요.' },
  ],
  health: [
    { id: 'health_01', keyword: '건강', message: '건강에 좋은 에너지가 흐르고 있어요.' },
    { id: 'health_02', keyword: '건강', message: '몸과 마음의 균형을 찾는 시기예요.' },
    { id: 'health_03', keyword: '휴식', message: '충분한 휴식이 필요해요, 자신을 돌보세요.' },
    { id: 'health_04', keyword: '휴식', message: '쉬어가는 것도 앞으로 나아가는 거예요.' },
    { id: 'health_05', keyword: '치유', message: '마음의 상처가 치유되는 시기예요.' },
  ],
  luck: [
    { id: 'luck_01', keyword: '행운', message: '행운의 별이 당신을 비추고 있어요!' },
    { id: 'luck_02', keyword: '행운', message: '오늘은 특별히 운이 좋은 날이에요.' },
    { id: 'luck_03', keyword: '행운', message: '소원을 빌어보세요, 이루어질 거예요.' },
    { id: 'luck_04', keyword: '희망', message: '희망을 잃지 마세요, 좋은 일이 생겨요.' },
    { id: 'luck_05', keyword: '희망', message: '어둠 뒤에 밝은 빛이 기다리고 있어요.' },
  ],
  wisdom: [
    { id: 'wisdom_01', keyword: '지혜', message: '지혜로운 선택이 좋은 결과를 가져와요.' },
    { id: 'wisdom_02', keyword: '지혜', message: '배움의 기회가 찾아올 거예요.' },
    { id: 'wisdom_03', keyword: '직감', message: '직감을 믿으세요, 답을 알고 있어요.' },
    { id: 'wisdom_04', keyword: '직감', message: '내면의 목소리에 귀 기울여보세요.' },
    { id: 'wisdom_05', keyword: '통찰', message: '깊은 통찰력으로 문제를 해결할 수 있어요.' },
  ],
};

// 운세 점수에 따라 카테고리 선택
function selectCategory(fortune) {
  const scores = {
    love: fortune.loveScore,
    money: fortune.moneyScore,
    work: fortune.workScore,
  };
  
  // 가장 높은 점수의 카테고리 찾기
  const maxCategory = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  
  // 랜덤 요소 추가
  const categories = ['love', 'money', 'work', 'health', 'luck', 'wisdom'];
  const random = Math.random();
  
  if (random < 0.5) {
    return maxCategory; // 50% 확률로 최고 점수 카테고리
  } else if (random < 0.8) {
    return 'luck'; // 30% 확률로 행운
  } else {
    return categories[Math.floor(Math.random() * categories.length)]; // 20% 랜덤
  }
}

// 랜덤 카드 선택
function getRandomCard(fortune) {
  const category = selectCategory(fortune);
  const cards = TAROT_CARDS[category];
  return cards[Math.floor(Math.random() * cards.length)];
}

export default function TarotCard({ fortune, onClose }) {
  const [stage, setStage] = useState('ad'); // 바로 광고 단계로 시작
  const [adCountdown, setAdCountdown] = useState(5);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  // 광고 카운트다운
  useEffect(() => {
    if (stage === 'ad' && adCountdown > 0) {
      const timer = setTimeout(() => setAdCountdown(adCountdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (stage === 'ad' && adCountdown === 0) {
      setStage('flip');
      // 카드 선택
      setSelectedCard(getRandomCard(fortune));
      // 1초 후 카드 뒤집기
      setTimeout(() => {
        setIsFlipped(true);
        setStage('reveal');
      }, 1000);
    }
  }, [stage, adCountdown, fortune]);

  const handleDownload = async () => {
    if (!selectedCard) return;
    
    // 카드 이미지 다운로드
    const link = document.createElement('a');
    link.href = `/tarot-cards/${selectedCard.id}.webp`;
    link.download = `daily-vibe-tarot-${selectedCard.id}.webp`;
    link.click();
  };

  return (
    <div className="mt-6">
      {/* 광고 단계 */}
      {stage === 'ad' && (
        <div className="bg-black/80 rounded-lg p-6 text-center">
          <p className="text-white/60 text-sm mb-2">광고 후 카드가 공개됩니다</p>
          
          {/* 광고 영역 (AdSense 승인 후 교체) */}
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-8 mb-4 border border-white/10">
            <p className="text-white/40 text-sm">광고 영역</p>
            <p className="text-white/60 text-xs mt-2">(AdSense 승인 후 자동 표시)</p>
          </div>
          
          <div className="text-3xl font-display font-bold text-neon-pink">
            {adCountdown}
          </div>
          <p className="text-white/40 text-sm mt-2">잠시만 기다려주세요...</p>
        </div>
      )}

      {/* 카드 뒤집기 단계 */}
      {(stage === 'flip' || stage === 'reveal') && selectedCard && (
        <div className="space-y-4">
          {/* 카드 */}
          <div className="flex justify-center perspective-1000">
            <div
              className={`relative w-64 h-80 transition-transform duration-1000 transform-style-3d ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* 카드 뒷면 - 예쁜 그라데이션 + 별 디자인 */}
              <div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 border-2 border-purple-400 flex items-center justify-center overflow-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                {/* 별 패턴 배경 */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-4 text-yellow-300 text-xs">✦</div>
                  <div className="absolute top-8 right-8 text-yellow-200 text-sm">✧</div>
                  <div className="absolute top-16 left-12 text-purple-300 text-xs">✦</div>
                  <div className="absolute top-24 right-4 text-pink-300 text-xs">✧</div>
                  <div className="absolute bottom-24 left-6 text-yellow-200 text-sm">✦</div>
                  <div className="absolute bottom-16 right-12 text-purple-300 text-xs">✧</div>
                  <div className="absolute bottom-8 left-16 text-pink-300 text-xs">✦</div>
                  <div className="absolute bottom-4 right-6 text-yellow-300 text-xs">✧</div>
                </div>
                
                {/* 중앙 디자인 */}
                <div className="text-center z-10">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                    <span className="text-3xl">✨</span>
                  </div>
                  <p className="text-white font-display text-sm tracking-widest">DAILY VIBE</p>
                  <p className="text-purple-300 text-xs mt-1">TAROT</p>
                </div>
                
                {/* 테두리 장식 */}
                <div className="absolute inset-2 border border-purple-400/30 rounded-lg"></div>
              </div>

              {/* 카드 앞면 */}
              <div
                className="absolute inset-0 rounded-xl overflow-hidden border-2 border-purple-500"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <img
                  src={`/tarot-cards/${selectedCard.id}.webp`}
                  alt={selectedCard.keyword}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // 이미지 없으면 플레이스홀더
                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect fill="%23581c87" width="300" height="400"/><text x="150" y="200" text-anchor="middle" fill="white" font-size="40">✨</text></svg>';
                  }}
                />
              </div>
            </div>
          </div>

          {/* 카드 메시지 */}
          {stage === 'reveal' && (
            <div className="text-center space-y-3 fade-in">
              <div className="inline-block px-4 py-1 bg-purple-500/30 rounded-full">
                <span className="text-purple-300 font-semibold">#{selectedCard.keyword}</span>
              </div>
              <p className="text-white text-lg font-body leading-relaxed">
                "{selectedCard.message}"
              </p>
              
              {/* 버튼들 */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleDownload}
                  className="flex-1 py-3 bg-gradient-to-r from-neon-pink to-neon-purple rounded-lg font-body font-semibold text-white"
                >
                  📥 카드 저장
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-3 bg-white/10 border border-white/20 rounded-lg font-body text-white"
                >
                  닫기
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
