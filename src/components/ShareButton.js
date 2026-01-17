'use client';

import { useState } from 'react';
import { toPng } from 'html-to-image';

export default function ShareButton({ cardRef, fortune, userInfo }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    
    setIsDownloading(true);
    
    try {
      const dataUrl = await toPng(cardRef.current, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: '#0a0a0f',
      });
      
      const link = document.createElement('a');
      link.download = `daily-vibe-${userInfo.mbti}-${new Date().toISOString().split('T')[0]}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
      alert('이미지 생성에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = async () => {
    const shareText = `✨ Daily Vibe ✨

나의 조합: ${userInfo.mbti} × ${userInfo.zodiacAnimal.emoji} × ${userInfo.zodiacSign.emoji}

💭 오늘의 메시지
"${fortune.message}"

💜 연애운 ${'★'.repeat(fortune.loveScore)}${'☆'.repeat(5-fortune.loveScore)}
💰 재물운 ${'★'.repeat(fortune.moneyScore)}${'☆'.repeat(5-fortune.moneyScore)}
💼 업무운 ${'★'.repeat(fortune.workScore)}${'☆'.repeat(5-fortune.workScore)}

🎰 행운번호: ${fortune.luckyNumbers.join(', ')}

나도 운세 보기 👉 https://daily-vibe-ten.vercel.app

#DailyVibe #오늘의운세 #MBTI운세`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Daily Vibe - 오늘의 운세',
          text: shareText,
        });
      } catch (error) {
        if (error.name !== 'AbortError') {
          handleCopyText(shareText);
        }
      }
    } else {
      handleCopyText(shareText);
    }
  };

  const handleCopyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Error copying text:', error);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://daily-vibe-ten.vercel.app');
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (error) {
      console.error('Error copying link:', error);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-3">
        {/* 이미지 저장 버튼 */}
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex-1 py-3 bg-gradient-to-r from-neon-pink to-neon-purple rounded-lg font-body font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isDownloading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              저장 중...
            </>
          ) : (
            <>
              📥 이미지 저장
            </>
          )}
        </button>

        {/* 공유 버튼 */}
        <button
          onClick={handleShare}
          className="flex-1 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg font-body font-semibold text-white transition-all hover:opacity-90 flex items-center justify-center gap-2"
        >
          {isCopied ? (
            <>
              ✅ 복사됨!
            </>
          ) : (
            <>
              📤 공유하기
            </>
          )}
        </button>
      </div>

      {/* 링크 복사 버튼 */}
      <button
        onClick={handleCopyLink}
        className="w-full py-3 bg-white/10 border border-white/20 rounded-lg font-body text-white transition-all hover:bg-white/20 flex items-center justify-center gap-2"
      >
        {linkCopied ? (
          <>
            ✅ 링크 복사됨!
          </>
        ) : (
          <>
            🔗 친구에게 링크 공유
          </>
        )}
      </button>
    </div>
  );
}
