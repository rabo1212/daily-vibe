'use client';

import { useState } from 'react';
import InputForm from '@/components/InputForm';
import FortuneCard from '@/components/FortuneCard';

export default function Home() {
  const [fortune, setFortune] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const handleSubmit = async (data) => {
    setLoading(true);
    setUserInfo(data);
    
    try {
      const response = await fetch('/api/fortune', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      setFortune(result);
    } catch (error) {
      console.error('Error fetching fortune:', error);
      // 폴백: API 실패 시 로컬에서 생성
      const fallbackFortune = generateFallbackFortune(data);
      setFortune(fallbackFortune);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFortune(null);
    setUserInfo(null);
  };

  return (
    <main className="min-h-screen py-8 px-4">
      {/* 배경 효과 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto">
        {/* 헤더 */}
        <header className="text-center mb-8 fade-in">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-2">
            <span className="gradient-text glitch" data-text="DAILY VIBE">DAILY VIBE</span>
          </h1>
          <p className="text-white/60 font-body text-lg">
            ✨ 오늘의 우주 메시지 ✨
          </p>
        </header>

        {/* 메인 콘텐츠 */}
        {!fortune && !loading && (
          <InputForm onSubmit={handleSubmit} />
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-20 fade-in">
            <div className="loading-spinner mb-4" />
            <p className="text-white/60 font-body text-lg animate-pulse">
              우주의 메시지를 받아오는 중...
            </p>
          </div>
        )}

        {fortune && !loading && (
          <div className="fade-in">
            <FortuneCard fortune={fortune} userInfo={userInfo} />
            <button
              onClick={handleReset}
              className="w-full mt-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white/60 font-body hover:bg-white/10 hover:text-white transition-all"
            >
              다시 보기
            </button>
          </div>
        )}

        {/* 푸터 */}
        <footer className="mt-12 text-center text-white/30 text-sm font-body">
          <p>© 2026 Daily Vibe. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}

// API 실패 시 폴백 운세 생성
function generateFallbackFortune(data) {
  const messages = [
    "오늘은 예상치 못한 행운이 찾아올 거예요. 열린 마음으로 새로운 기회를 받아들이세요.",
    "당신의 창의력이 빛나는 날입니다. 평소 미뤄뒀던 프로젝트를 시작해보세요.",
    "중요한 인연이 다가오고 있어요. 주변 사람들에게 더 관심을 기울여보세요.",
    "재물운이 상승하는 시기입니다. 하지만 충동적인 소비는 피하세요.",
    "오늘은 자기 자신을 돌보는 시간이 필요해요. 충분한 휴식을 취하세요.",
  ];

  const luckyNumbers = [];
  while (luckyNumbers.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    if (!luckyNumbers.includes(num)) {
      luckyNumbers.push(num);
    }
  }
  luckyNumbers.sort((a, b) => a - b);

  const colors = ['#FF006E', '#00F5FF', '#B565F0', '#F0F000', '#00FF88', '#FF6B6B'];
  const luckyColor = colors[Math.floor(Math.random() * colors.length)];

  return {
    message: messages[Math.floor(Math.random() * messages.length)],
    loveScore: Math.floor(Math.random() * 3) + 3,
    moneyScore: Math.floor(Math.random() * 3) + 2,
    workScore: Math.floor(Math.random() * 3) + 3,
    luckyNumbers,
    luckyColor,
  };
}
