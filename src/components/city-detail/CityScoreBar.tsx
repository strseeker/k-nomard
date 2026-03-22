import { ThumbsUp, ThumbsDown } from "lucide-react"
import type { City } from "@/data/cities"

type Props = {
  city: City
}

export default function CityScoreBar({ city }: Props) {
  const total = city.likes + city.dislikes
  const likePercent = total > 0 ? Math.round((city.likes / total) * 100) : 0

  return (
    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-slate-700 mb-3">노마드 평가</h2>

      {/* 비율 바 */}
      <div className="h-3 rounded-full bg-slate-100 overflow-hidden mb-3">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all"
          style={{ width: `${likePercent}%` }}
        />
      </div>

      {/* 수치 */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1.5 text-emerald-600">
          <ThumbsUp className="h-4 w-4 fill-emerald-500 text-emerald-500" />
          <span className="font-bold">{city.likes}</span>
          <span className="text-slate-400 text-xs">({likePercent}%)</span>
        </div>
        <div className="flex items-center gap-1.5 text-rose-500">
          <ThumbsDown className="h-4 w-4 fill-rose-400 text-rose-400" />
          <span className="font-bold">{city.dislikes}</span>
          <span className="text-slate-400 text-xs">({100 - likePercent}%)</span>
        </div>
      </div>
    </div>
  )
}
