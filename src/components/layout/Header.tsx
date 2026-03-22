import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-1">
          <span className="text-xl font-bold tracking-tight text-slate-800">
            K·NOMADS
          </span>
        </Link>

        {/* 로그인/회원가입 */}
        <div className="flex items-center gap-3">
          <Button size="sm" variant="outline" className="text-slate-700 border-slate-300" asChild>
            <Link href="/login">로그인</Link>
          </Button>
          <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white" asChild>
            <Link href="/register">회원가입</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
