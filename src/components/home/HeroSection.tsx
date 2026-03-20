import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-700 to-emerald-800">
      {/* 배경 패턴 오버레이 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2MmgOHYtMmgtMnptMC0zMFYwaDJWNGg0djJoLThWNGgyek02IDM0di00SDR2NGgtNHYyaDh2LTJINnptMC0zMFYwSDR2NGgtNHYyaDhWNEg2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          {/* 배지 */}
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
            Korea Digital Nomad Platform
          </span>

          {/* 메인 카피 */}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            나에게 맞는<br />
            <span className="text-emerald-400">한국 노마드 도시</span>를<br />
            찾아보세요
          </h1>

          {/* 서브 카피 */}
          <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
            14개 도시의 인터넷 속도, 생활비, 코워킹 스페이스,<br className="hidden md:block" />
            커뮤니티 정보를 한눈에 비교하세요
          </p>

          {/* 검색창 */}
          <div className="flex gap-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="도시명을 검색하세요 (예: 제주, 부산)"
                className="pl-10 h-12 text-base bg-white border-0 shadow-lg"
              />
            </div>
            <Button size="lg" className="h-12 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg">
              검색
            </Button>
          </div>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-white text-slate-800 hover:bg-slate-100 font-semibold"
            >
              도시 탐색 시작하기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 font-semibold"
            >
              내 성향 퀴즈 풀기
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
