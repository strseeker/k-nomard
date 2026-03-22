import Link from "next/link"
import { MapPin, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signIn } from "@/app/actions/auth"

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* 상단 브랜드 바 */}
      <div className="flex justify-center pt-10 pb-6">
        <Link href="/" className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-emerald-500" />
          <span className="text-xl font-bold tracking-tight text-slate-800">
            K·NOMADS
          </span>
        </Link>
      </div>

      {/* 로그인 카드 */}
      <div className="flex flex-1 items-start justify-center px-4 pb-16">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">

            {/* 헤더 */}
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-slate-900 mb-2">
                다시 돌아오셨군요 👋
              </h1>
              <p className="text-sm text-slate-500">
                계정에 로그인하여 나만의 도시 목록을 확인하세요
              </p>
            </div>

            {/* 에러 메시지 */}
            <LoginError searchParams={searchParams} />

            {/* 이메일/비밀번호 폼 */}
            <form action={signIn} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  이메일
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="hello@knomads.kr"
                  required
                  className="h-11 bg-slate-50 border-slate-200 focus:bg-white"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700"
                  >
                    비밀번호
                  </label>
                  <Link
                    href="#"
                    className="text-xs text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    비밀번호 찾기
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    required
                    className="h-11 bg-slate-50 border-slate-200 focus:bg-white pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* 자동 로그인 */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500"
                />
                <label htmlFor="remember" className="text-sm text-slate-600">
                  로그인 상태 유지
                </label>
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-slate-800 hover:bg-slate-700 text-white font-medium"
              >
                로그인
              </Button>
            </form>

            {/* 회원가입 링크 */}
            <p className="mt-6 text-center text-sm text-slate-500">
              아직 계정이 없으신가요?{" "}
              <Link
                href="/register"
                className="text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                회원가입
              </Link>
            </p>
          </div>

          {/* 하단 안내 */}
          <p className="mt-4 text-center text-xs text-slate-400">
            로그인 시{" "}
            <Link href="#" className="underline hover:text-slate-600">이용약관</Link>
            {" "}및{" "}
            <Link href="#" className="underline hover:text-slate-600">개인정보처리방침</Link>
            에 동의하는 것으로 간주됩니다.
          </p>
        </div>
      </div>
    </main>
  )
}

async function LoginError({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const params = await searchParams
  if (!params.error) return null

  const messages: Record<string, string> = {
    invalid_credentials: "이메일 또는 비밀번호가 올바르지 않습니다.",
    auth_callback_failed: "인증에 실패했습니다. 다시 시도해주세요.",
  }

  return (
    <div className="mb-4 rounded-lg bg-rose-50 border border-rose-200 px-4 py-3 text-sm text-rose-600">
      {messages[params.error] ?? "로그인 중 오류가 발생했습니다."}
    </div>
  )
}
