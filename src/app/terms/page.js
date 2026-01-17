export default function Terms() {
  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">이용약관</h1>
        
        <div className="space-y-6 text-white/80 font-body leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">제1조 (목적)</h2>
            <p>본 약관은 Daily Vibe(이하 "서비스")의 이용 조건 및 절차, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">제2조 (서비스의 내용)</h2>
            <p>Daily Vibe는 다음과 같은 서비스를 제공합니다:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>MBTI, 띠, 별자리 기반 맞춤 운세 제공</li>
              <li>타로 카드 리딩 서비스</li>
              <li>운세 카드 이미지 저장 및 공유 기능</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">제3조 (서비스 이용)</h2>
            <p>서비스는 무료로 제공되며, 별도의 회원가입 없이 이용 가능합니다. 단, 일부 기능은 광고 시청 후 이용 가능할 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">제4조 (면책 조항)</h2>
            <p>본 서비스에서 제공하는 운세 및 타로 리딩은 오락 목적으로만 제공됩니다. 중요한 결정을 내리실 때는 전문가와 상담하시기 바랍니다. Daily Vibe는 서비스 이용으로 인한 어떠한 결과에 대해서도 책임을 지지 않습니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">제5조 (지적재산권)</h2>
            <p>서비스 내 모든 콘텐츠(텍스트, 이미지, 디자인 등)의 저작권은 Daily Vibe에 있습니다. 무단 복제 및 배포를 금지합니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">제6조 (서비스 변경 및 중단)</h2>
            <p>Daily Vibe는 서비스 개선을 위해 사전 통지 없이 서비스 내용을 변경하거나 중단할 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">제7조 (약관의 변경)</h2>
            <p>본 약관은 필요에 따라 변경될 수 있으며, 변경된 약관은 서비스 내 공지를 통해 효력이 발생합니다.</p>
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
