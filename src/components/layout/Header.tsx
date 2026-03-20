import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navItems = [
  { label: "도시탐색", href: "#" },
  { label: "지도보기", href: "#" },
  { label: "도시비교", href: "#" },
  { label: "평가하기", href: "#" },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* 로고 */}
        <a href="/" className="flex items-center gap-1">
          <span className="text-xl font-bold tracking-tight text-slate-800">
            K·NOMADS
          </span>
        </a>

        {/* GNB - 데스크탑 */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* 검색 + 로그인 - 데스크탑 */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="도시 검색..."
              className="pl-9 w-48 h-9 text-sm bg-slate-50"
            />
          </div>
          <Button size="sm" variant="outline" className="text-slate-700 border-slate-300">
            로그인
          </Button>
        </div>

        {/* 모바일 햄버거 - MobileHeader에서 처리 */}
        <div className="flex md:hidden items-center gap-2">
          <button className="p-2 text-slate-600">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 text-slate-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
