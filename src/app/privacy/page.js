export default function Privacy() {
  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">개인정보처리방침</h1>
        
        <div className="space-y-6 text-white/80 font-body leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. 수집하는 개인정보</h2>
            <p>Daily Vibe는 서비스 제공을 위해 다음 정보를 수집합니다:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>MBTI 유형 (사용자 직접 입력)</li>
              <li>띠 정보 (사용자 직접 선택)</li>
              <li>별자리 정보 (사용자 직접 선택)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. 개인정보의 이용 목적</h2>
            <p>수집된 정보는 다음 목적으로만 사용됩니다:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>맞춤형 운세 콘텐츠 제공</li>
              <li>서비스 개선 및 통계 분석</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. 개인정보의 보관 및 파기</h2>
            <p>Daily Vibe는 사용자의 개인정보를 서버에 저장하지 않습니다. 모든 정보는 사용자의 브라우저 세션 내에서만 처리되며, 페이지를 떠나면 자동으로 삭제됩니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. 쿠키 및 광고</h2>
            <p>본 서비스는 Google AdSense를 통해 광고를 게재할 수 있으며, 이 과정에서 쿠키가 사용될 수 있습니다. 사용자는 브라우저 설정을 통해 쿠키 사용을 거부할 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. 제3자 제공</h2>
            <p>Daily Vibe는 사용자의 개인정보를 제3자에게 제공하지 않습니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. 문의</h2>
            <p>개인정보 관련 문의사항이 있으시면 아래로 연락해 주세요:</p>
            <p className="mt-2">이메일: contact@dailyvibe.app</p>
          </section>

          <section>
            <p className="text-white/50 text-sm">시행일: 2026년 1월 16일</p>
          </section>
        </div>

        <div className="mt-12">
          <a href="/" className="text-neon-pink hover:text-neon-cyan transition-colors">
            ← 홈으로 돌아가기
          </a>
        </div>
      </div>
    </main>
  );
}
