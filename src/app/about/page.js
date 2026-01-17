export default function About() {
  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Daily Vibe</h1>
        <p className="text-neon-pink text-lg mb-8">✨ 오늘의 우주 메시지 ✨</p>
        
        <div className="space-y-8 text-white/80 font-body leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">🌟 Daily Vibe란?</h2>
            <p>Daily Vibe는 당신만의 특별한 조합으로 오늘의 운세를 확인할 수 있는 서비스입니다. MBTI 성격 유형, 동양의 띠, 서양의 별자리를 조합하여 세상에 하나뿐인 맞춤형 운세를 제공합니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">🎴 주요 기능</h2>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold text-neon-cyan mb-2">트리플 조합 운세</h3>
                <p>MBTI × 띠 × 별자리의 독특한 조합으로 나만의 운세를 확인하세요. 연애운, 재물운, 업무운을 한눈에!</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold text-neon-purple mb-2">타로 카드 리딩</h3>
                <p>AI가 생성한 아름다운 타로 카드로 오늘의 특별한 메시지를 받아보세요.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold text-neon-pink mb-2">행운 번호</h3>
                <p>매일 새로운 행운의 번호 6개를 제공합니다. 로또? 복권? 행운을 시험해보세요!</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold text-white mb-2">공유 기능</h3>
                <p>예쁜 운세 카드를 이미지로 저장하고 친구들과 공유하세요.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">📱 사용 방법</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>나의 MBTI 유형을 선택합니다</li>
              <li>태어난 해의 띠를 선택합니다</li>
              <li>생일에 맞는 별자리를 선택합니다</li>
              <li>"오늘의 운세 보기" 버튼을 누릅니다</li>
              <li>운세 확인 후 타로 카드도 받아보세요!</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">💫 왜 Daily Vibe인가요?</h2>
            <ul className="space-y-2">
              <li>✅ 회원가입 없이 바로 이용</li>
              <li>✅ 매일 새로운 운세와 메시지</li>
              <li>✅ 아름다운 사이버펑크 디자인</li>
              <li>✅ AI 기반 맞춤형 운세</li>
              <li>✅ 무료로 이용 가능</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 p-6 rounded-lg border border-neon-pink/30">
            <p className="text-center text-lg">
              매일 아침, Daily Vibe와 함께<br />
              <span className="text-neon-cyan font-semibold">오늘 하루의 바이브</span>를 확인하세요! 🚀
            </p>
          </section>
        </div>

        <div className="mt-12 flex gap-4">
          <a href="/" className="text-neon-pink hover:text-neon-cyan transition-colors">
            ← 홈으로 돌아가기
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-white/40 text-sm">
          <p>문의: contact@dailyvibe.app</p>
        </div>
      </div>
    </main>
  );
}
