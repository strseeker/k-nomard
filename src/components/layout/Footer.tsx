const footerLinks = {
  도시탐색: ["도시 목록", "지도 보기", "도시 비교", "랭킹"],
  커뮤니티: ["리뷰 작성", "질문 게시판", "모임", "뉴스레터"],
  정보: ["서비스 소개", "이용약관", "개인정보처리방침", "문의하기"],
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 로고 & 설명 */}
          <div className="md:col-span-1">
            <span className="text-lg font-bold tracking-tight text-slate-800">
              K·NOMADS
            </span>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              한국 디지털 노마드를 위한<br />
              도시 정보 플랫폼
            </p>
            <p className="mt-4 text-xs text-slate-400">
              실제 거주 경험 기반의<br />
              도시별 상세 정보를 제공합니다
            </p>
          </div>

          {/* 링크 그룹 */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold text-slate-800 mb-3">{group}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © 2026 K·NOMADS. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            한국 디지털 노마드 커뮤니티
          </p>
        </div>
      </div>
    </footer>
  )
}
