import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function QuizCtaBanner() {
  return (
    <section className="bg-slate-800 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30">
          <Sparkles className="h-4 w-4 text-emerald-400" />
          <span className="text-emerald-300 text-xs font-semibold">AI 맞춤 추천</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          나에게 맞는 도시가 어딘지<br />
          아직 모르겠나요?
        </h2>
        <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto leading-relaxed">
          5분 퀴즈로 나의 노마드 스타일을 파악하고,<br className="hidden md:block" />
          딱 맞는 도시를 추천받으세요
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 shadow-lg"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            성향 퀴즈 시작하기
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-500 text-slate-300 hover:bg-slate-700 font-semibold"
          >
            도시 비교하기
          </Button>
        </div>

        {/* 소셜 프루프 */}
        <p className="mt-6 text-slate-400 text-sm">
          지금까지 <span className="text-emerald-400 font-semibold">2,340명</span>이 퀴즈를 완료했어요
        </p>
      </div>
    </section>
  )
}
