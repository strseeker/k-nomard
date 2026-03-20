import { Star, Wifi, DollarSign, Train, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { City } from "@/data/cities"

type CityCardProps = {
  city: City
  size?: "large" | "small" | "default"
}

const scoreColor = (score: number) => {
  if (score >= 8) return "bg-emerald-500"
  if (score >= 6.5) return "bg-amber-400"
  return "bg-rose-400"
}

const scoreItems = [
  { key: "internet" as const, label: "인터넷", icon: Wifi },
  { key: "cost" as const, label: "비용", icon: DollarSign },
  { key: "transport" as const, label: "교통", icon: Train },
  { key: "workspace" as const, label: "워크스페이스", icon: Building2 },
]

export default function CityCard({ city, size = "default" }: CityCardProps) {
  const isLarge = size === "large"
  const isSmall = size === "small"

  return (
    <div
      className={cn(
        "group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow",
        isLarge && "flex flex-col md:flex-row"
      )}
    >
      {/* 이미지 영역 */}
      <div
        className={cn(
          "relative bg-gradient-to-br from-slate-300 to-slate-400 overflow-hidden",
          isLarge ? "md:w-2/5 h-48 md:h-auto" : isSmall ? "h-32" : "h-44"
        )}
      >
        {/* 그라디언트 배경 (placeholder) */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/50 to-slate-400" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/60 text-4xl font-bold">
            {city.name.charAt(0)}
          </span>
        </div>

        {/* 배지 */}
        {city.badge && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-xs font-bold shadow">
              {city.badge}
            </span>
          </div>
        )}

        {/* 종합점수 */}
        <div className="absolute top-3 right-3">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-center shadow">
            <div className="text-lg font-bold text-slate-800">{city.score}</div>
            <div className="text-[10px] text-slate-500 leading-tight">종합</div>
          </div>
        </div>

        {/* Tier 배지 */}
        <div className="absolute bottom-3 left-3">
          <span className={cn(
            "px-1.5 py-0.5 rounded text-[10px] font-semibold",
            city.tier === 1 ? "bg-slate-800/80 text-white" : "bg-slate-500/70 text-white"
          )}>
            {city.tier}차 거점
          </span>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className={cn("flex flex-col p-4", isLarge && "md:flex-1 md:p-6")}>
        {/* 도시명 + 지역 */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className={cn("font-bold text-slate-900", isLarge ? "text-xl" : "text-base")}>
              {city.name}
            </h3>
            <span className="text-xs text-slate-400">{city.region}</span>
          </div>
          {/* 별점 */}
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="text-sm font-semibold text-slate-700">{city.rating}</span>
            <span className="text-xs text-slate-400">({city.reviewCount})</span>
          </div>
        </div>

        {/* 스코어 프로그레스 바 */}
        {!isSmall && (
          <div className="space-y-2 mb-3">
            {scoreItems.map(({ key, label }) => (
              <div key={key} className="flex items-center gap-2">
                <span className="text-[11px] text-slate-500 w-20 shrink-0">{label}</span>
                <div className="flex-1 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className={cn("h-full rounded-full transition-all", scoreColor(city.scores[key]))}
                    style={{ width: `${(city.scores[key] / 10) * 100}%` }}
                  />
                </div>
                <span className="text-[11px] font-medium text-slate-600 w-6 text-right">
                  {city.scores[key]}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* 월비용 */}
        <div className="mb-3">
          <span className="text-xs text-slate-400">월 예상 비용 </span>
          <span className="text-sm font-semibold text-slate-800">
            {city.monthlyCost.min}~{city.monthlyCost.max}만원
          </span>
        </div>

        {/* 태그 */}
        <div className="flex flex-wrap gap-1 mb-4">
          {city.tags.slice(0, isSmall ? 2 : 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 hover:bg-slate-200">
              {tag}
            </Badge>
          ))}
        </div>

        {/* 버튼 */}
        <div className={cn("mt-auto", isLarge ? "flex gap-2" : "")}>
          <Button
            size="sm"
            className={cn(
              "w-full bg-slate-800 hover:bg-slate-700 text-white text-xs",
              isLarge && "flex-1"
            )}
          >
            상세보기
          </Button>
          {isLarge && (
            <Button size="sm" variant="outline" className="flex-1 text-xs border-slate-300">
              비교추가
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
