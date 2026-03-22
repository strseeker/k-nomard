const stats = [
  { value: "14개", label: "등록 도시", sub: "전국 주요 노마드 거점" },
  { value: "2,100개", label: "총 좋아요", sub: "도시별 노마드 추천" },
  { value: "3,800명", label: "월간 방문자", sub: "노마드 커뮤니티" },
]

export default function StatsBar() {
  return (
    <section className="bg-slate-50 border-y border-slate-200 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-around items-center gap-6 sm:gap-0">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="text-2xl md:text-3xl font-bold text-slate-800">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-emerald-600 mt-0.5">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
