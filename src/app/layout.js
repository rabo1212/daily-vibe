import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Daily Vibe | 오늘의 우주 메시지',
  description: 'MBTI × 띠 × 별자리로 알아보는 오늘의 운세 카드',
  keywords: 'MBTI, 운세, 별자리, 띠, 타로, 오늘의운세',
  openGraph: {
    title: 'Daily Vibe | 오늘의 우주 메시지',
    description: 'MBTI × 띠 × 별자리로 알아보는 오늘의 운세 카드',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="google-adsense-account" content="ca-pub-6584899015936237" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RLZ78VD7TJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RLZ78VD7TJ');
          `}
        </Script>
      </head>
      <body className="noise-overlay">
        {children}
      </body>
    </html>
  );
}
