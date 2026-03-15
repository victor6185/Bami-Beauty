import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
  display: "swap",
});

const siteUrl = "https://bami-beauty.vercel.app";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#F5EDE3",
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "대전 피부관리 | 바미뷰티",
    template: "%s | 바미뷰티",
  },
  description:
    "대전 서구 탄방역 인근 피부관리 전문샵 바미뷰티. 리프팅, 윤곽, 트러블, 바디케어까지 섬세한 1:1 맞춤 케어로 피부 고민을 해결해 드립니다.",
  alternates: {
    canonical: siteUrl,
    languages: { ko: `${siteUrl}/` },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "대전 피부관리 | 바미뷰티",
    description:
      "대전 서구 탄방역 인근 피부관리 전문샵 바미뷰티. 리프팅·윤곽·트러블·바디케어 1:1 맞춤 케어.",
    siteName: "바미뷰티",
    locale: "ko_KR",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "대전 피부관리 바미뷰티",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "대전 피부관리 | 바미뷰티",
    description: "대전 탄방역 인근 피부관리·리프팅·윤곽·바디케어 전문 바미뷰티.",
    images: [`${siteUrl}/og-image.png`],
  },
  keywords: [
    "대전 피부관리",
    "대전 에스테틱",
    "탄방역 피부관리",
    "대전 리프팅",
    "대전 윤곽관리",
    "대전 문제성 피부관리",
    "대전 바디관리",
    "바미뷰티",
    "대전 서구 피부관리",
    "피부관리샵",
  ],
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  category: "beauty",
  verification: { google: "googlece21b40fad08e89f", other: { "naver-site-verification": "naver2edfc17affa880dde1cbfbeabfa70b1a" } },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className={`${playfair.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  );
}
