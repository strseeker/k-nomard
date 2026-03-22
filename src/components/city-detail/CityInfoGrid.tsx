import { Wallet, MapPin, Monitor, Sun } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { City } from "@/data/cities"

type Props = {
  city: City
}

export default function CityInfoGrid({ city }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* 예산 */}
      <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <Wallet className="h-4 w-4 text-emerald-500" />
          <span className="text-xs font-medium text-slate-500">월 예산</span>
        </div>
        <p className="text-sm font-bold text-slate-800">{city.budget}</p>
      </div>

      {/* 지역 */}
      <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="h-4 w-4 text-emerald-500" />
          <span className="text-xs font-medium text-slate-500">지역</span>
        </div>
        <p className="text-sm font-bold text-slate-800">{city.region}</p>
      </div>

      {/* 작업 환경 */}
      <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <Monitor className="h-4 w-4 text-emerald-500" />
          <span className="text-xs font-medium text-slate-500">작업 환경</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {city.environment.map((env) => (
            <Badge
              key={env}
              variant="secondary"
              className="text-[11px] px-2 py-0.5 bg-emerald-50 text-emerald-700 border-emerald-100"
            >
              {env}
            </Badge>
          ))}
        </div>
      </div>

      {/* 추천 계절 */}
      <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <Sun className="h-4 w-4 text-emerald-500" />
          <span className="text-xs font-medium text-slate-500">추천 계절</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {city.bestSeason.map((season) => (
            <Badge
              key={season}
              variant="secondary"
              className="text-[11px] px-2 py-0.5 bg-amber-50 text-amber-700 border-amber-100"
            >
              {season}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
