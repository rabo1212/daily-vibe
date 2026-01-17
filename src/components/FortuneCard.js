'use client';

import { useRef, useState } from 'react';
import ShareButton from './ShareButton';
import TarotCard from './TarotCard';

// 색상 코드 → 한글 변환
const COLOR_NAMES = {
  '#FF006E': '핫핑크',
  '#00F5FF': '시안',
  '#B565F0': '퍼플',
  '#F0F000': '옐로우',
  '#00FF88': '민트',
  '#FF6B6B': '코랄',
  '#7B68EE': '라벤더',
  '#FFD700': '골드',
};

export default function FortuneCard({ fortune, userInfo }) {
  const cardRef = useRef(null);
  const [showTarot, setShowTarot] = useState(false);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const dateStr = `${year}.${month}.${day}`;
  
  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dayStr = dayNames[today.getDay()];

  // 색상 코드를 한글로 변환
  const getColorName = (colorCode) => {
    return COLOR_NAMES[colorCode] || '행운의 색';
  };

  const renderStars = (score) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={`star ${i <= score ? 'filled' : ''}`}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* 운세 카드 */}
      <div
        ref={cardRef}
        className="fortune-card p-6 relative overflow-hidden"
        style={{ minHeight: '500px' }}
      >
        {/* 홀로그램 배경 효과 */}
        <div className="absolute inset-0 holographic opacity-30" />
        
        {/* 스캔라인 효과 */}
        <div className="absolute inset-0 scanlines" />
        
        {/* 콘텐츠 */}
        <div className="relative z-10">
          {/* 로고 */}
          <div className="text-center mb-4">
            <span className="font-display text-sm text-white tracking-widest">
              ✨ DAILY VIBE ✨
            </span>
          </div>

          {/* 사용자 정보 */}
          <div className="text-center mb-6 space-y-1">
            <div className="font-display text-3xl font-bold text-neon-pink neon-text">
              {userInfo.mbti}
            </div>
            <div className="flex justify-center items-center gap-4 text-xl">
              <span className="text-neon-cyan neon-text-cyan">
                {userInfo.zodiacAnimal.emoji}
              </span>
              <span className="text-white/50">×</span>
              <span className="text-neon-purple neon-text-purple">
                {userInfo.zodiacSign.emoji} {userInfo.zodiacSign.name}
              </span>
            </div>
          </div>

          {/* 구분선 */}
          <div className="h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent mb-6" />

          {/* 메시지 */}
          <div className="mb-6">
            <p className="text-sm text-white font-body mb-2 uppercase tracking-wider">
              💭 오늘의 메시지
            </p>
            <p className="text-white font-body text-lg leading-relaxed">
              "{fortune.message}"
            </p>
          </div>

          {/* 구분선 */}
          <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent mb-6" />

          {/* 운세 점수 */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <p className="text-sm text-white mb-1">💜 연애운</p>
              {renderStars(fortune.loveScore)}
            </div>
            <div className="text-center">
              <p className="text-sm text-white mb-1">💰 재물운</p>
              {renderStars(fortune.moneyScore)}
            </div>
            <div className="text-center">
              <p className="text-sm text-white mb-1">💼 업무운</p>
              {renderStars(fortune.workScore)}
            </div>
          </div>

          {/* 행운 색상 - 한 줄로 */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-sm text-white">🍀 행운색</span>
            <div
              className="w-6 h-6 rounded-full border-2 border-white/30"
              style={{ 
                backgroundColor: fortune.luckyColor,
                boxShadow: `0 0 15px ${fortune.luckyColor}`
              }}
            />
            <span className="font-body text-sm text-white font-semibold">
              {getColorName(fortune.luckyColor)}
            </span>
          </div>

          {/* 구분선 */}
          <div className="h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent mb-6" />

          {/* 행운 번호 */}
          <div className="text-center mb-6">
            <p className="text-sm text-white mb-3 uppercase tracking-wider">
              🎰 오늘의 행운번호
            </p>
            <div className="flex justify-center gap-2">
              {fortune.luckyNumbers.map((num, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 border border-neon-pink/50 flex items-center justify-center font-display font-bold text-white"
                  style={{
                    boxShadow: '0 0 10px rgba(255, 0, 110, 0.3)'
                  }}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>

          {/* 날짜 */}
          <div className="text-center text-white/70 font-mono text-sm">
            {dateStr}. {dayStr}
          </div>
        </div>
      </div>

      {/* 공유 버튼 */}
      <ShareButton cardRef={cardRef} fortune={fortune} userInfo={userInfo} />

      {/* 타로 카드 섹션 */}
      {!showTarot ? (
        <button
          onClick={() => setShowTarot(true)}
          className="w-full py-4 rounded-lg font-display text-lg font-bold tracking-wider bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-purple-500/50 transition-all"
        >
          👆 오늘의 카드 받기
        </button>
      ) : (
        <TarotCard fortune={fortune} onClose={() => setShowTarot(false)} />
      )}
    </div>
  );
}
