import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { City } from "@/data/cities"

type Props = {
  city: City
}

export default function CityDetailHero({ city }: Props) {
  return (
    <div className="relative h-64 bg-gradient-to-br from-emerald-400 to-slate-600 overflow-hidden">
      {/* 배경 텍스처 */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/60 via-slate-500/40 to-slate-700/80" />

      {/* 도시 이니셜 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white/10 text-[160px] font-black select-none leading-none">
          {city.name.charAt(0)}
        </span>
      </div>

      {/* 뒤로가기 */}
      <div className="absolute top-4 left-4 z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/30 text-white text-sm font-medium hover:bg-black/50 transition-colors backdrop-blur-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          목록으로
        </Link>
      </div>

      {/* 배지 */}
      {city.badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold shadow">
            {city.badge}
          </span>
        </div>
      )}

      {/* 도시명 + 지역 */}
      <div className="absolute bottom-5 left-5 z-10">
        <p className="text-emerald-200 text-sm font-medium mb-0.5">{city.region}</p>
        <h1 className="text-white text-3xl font-black">{city.name}</h1>
      </div>
    </div>
  )
}
