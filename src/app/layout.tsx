import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "K·NOMADS - 한국 디지털 노마드 도시 정보 플랫폼",
  description: "한국 디지털 노마드를 위한 도시별 인프라, 비용, 커뮤니티 정보를 한눈에 확인하세요.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
