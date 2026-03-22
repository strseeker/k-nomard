import Link from "next/link"
import { MapPin, Eye, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signUp } from "@/app/actions/auth"

const benefits = [
  "나만의 관심 도시 저장",
  "도시 리뷰 작성 및 관리",
  "맞춤 도시 추천 받기",
]

export default function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; success?: string }>
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

      {/* 메인 컨텐츠 */}
      <div className="flex flex-1 items-start justify-center px-4 pb-16">
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2">

              {/* 좌측: 혜택 패널 */}
              <div className="bg-slate-800 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                    <MapPin className="h-3.5 w-3.5" />
                    무료 회원가입
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3 leading-snug">
                    한국 디지털 노마드의<br />
                    시작점, K·NOMADS
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    14개 도시의 생활 조건을 비교하고,<br />
                    나에게 맞는 도시를 찾아보세요.
                  </p>

                  {/* 혜택 리스트 */}
                  <ul className="space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center">
                          <Check className="h-3 w-3 text-white" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-slate-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 하단 통계 */}
                <div className="mt-10 pt-8 border-t border-slate-700 grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xl font-bold text-white">14</p>
                    <p className="text-xs text-slate-400 mt-0.5">도시</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">1,240</p>
                    <p className="text-xs text-slate-400 mt-0.5">리뷰</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">3,800</p>
                    <p className="text-xs text-slate-400 mt-0.5">방문자</p>
                  </div>
                </div>
              </div>

              {/* 우측: 폼 패널 */}
              <div className="p-8 md:p-10">
                <div className="mb-7">
                  <h1 className="text-2xl font-bold text-slate-900 mb-1.5">
                    회원가입
                  </h1>
                  <p className="text-sm text-slate-500">
                    이미 계정이 있으신가요?{" "}
                    <Link
                      href="/login"
                      className="text-emerald-600 hover:text-emerald-700 font-semibold"
                    >
                      로그인
                    </Link>
                  </p>
                </div>

                {/* 상태 메시지 */}
                <RegisterMessage searchParams={searchParams} />

                {/* 가입 폼 */}
                <form action={signUp} className="space-y-3.5">
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
                      className="h-10 bg-slate-50 border-slate-200 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      비밀번호
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="8자 이상 입력하세요"
                        required
                        minLength={8}
                        className="h-10 bg-slate-50 border-slate-200 focus:bg-white pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      비밀번호 확인
                    </label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="비밀번호를 다시 입력하세요"
                        required
                        className="h-10 bg-slate-50 border-slate-200 focus:bg-white pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* 약관 동의 */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="all-agree"
                        className="h-4 w-4 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500"
                      />
                      <label htmlFor="all-agree" className="text-sm font-semibold text-slate-700">
                        전체 동의
                      </label>
                    </div>
                    <div className="pl-6 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            required
                            className="h-3.5 w-3.5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500"
                          />
                          <label htmlFor="terms" className="text-xs text-slate-600">
                            이용약관 동의 <span className="text-rose-400">(필수)</span>
                          </label>
                        </div>
                        <Link href="#" className="text-xs text-slate-400 underline hover:text-slate-600">보기</Link>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="privacy"
                            name="privacy"
                            required
                            className="h-3.5 w-3.5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500"
                          />
                          <label htmlFor="privacy" className="text-xs text-slate-600">
                            개인정보 수집 및 이용 동의 <span className="text-rose-400">(필수)</span>
                          </label>
                        </div>
                        <Link href="#" className="text-xs text-slate-400 underline hover:text-slate-600">보기</Link>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="marketing"
                            name="marketing"
                            className="h-3.5 w-3.5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500"
                          />
                          <label htmlFor="marketing" className="text-xs text-slate-600">
                            마케팅 정보 수신 동의 <span className="text-slate-400">(선택)</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 bg-emerald-500 hover:bg-emerald-600 text-white font-medium mt-1"
                  >
                    회원가입 완료
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

async function RegisterMessage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; success?: string }>
}) {
  const params = await searchParams
  if (!params.error && !params.success) return null

  if (params.success === 'check_email') {
    return (
      <div className="mb-5 rounded-lg bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-700">
        가입 확인 이메일을 발송했습니다. 이메일을 확인해주세요.
      </div>
    )
  }

  const errorMessages: Record<string, string> = {
    signup_failed: "회원가입 중 오류가 발생했습니다. 다시 시도해주세요.",
  }

  return (
    <div className="mb-5 rounded-lg bg-rose-50 border border-rose-200 px-4 py-3 text-sm text-rose-600">
      {errorMessages[params.error!] ?? "오류가 발생했습니다."}
    </div>
  )
}
