import { LayoutGrid, List } from "lucide-react"
import { tier1Cities, tier2Cities } from "@/data/cities"
import CityCard from "./CityCard"

export default function CityGrid() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-slate-900">전체 도시 탐색</h2>

          {/* 뷰 토글 (UI만) */}
          <div className="flex items-center gap-1 border border-slate-200 rounded-lg p-1 bg-white">
            <button className="p-1.5 rounded bg-slate-800 text-white">
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button className="p-1.5 rounded text-slate-400 hover:text-slate-700">
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 1차 거점 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <h3 className="text-base font-bold text-slate-800">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 text-white text-xs font-bold mr-2">1</span>
              1차 거점 도시
            </h3>
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400">{tier1Cities.length}개 도시</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tier1Cities.map((city) => (
              <CityCard key={city.id} city={city} size="default" />
            ))}
          </div>
        </div>

        {/* 2차 거점 */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <h3 className="text-base font-bold text-slate-800">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-500 text-white text-xs font-bold mr-2">2</span>
              2차 거점 도시
            </h3>
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400">{tier2Cities.length}개 도시</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tier2Cities.map((city) => (
              <CityCard key={city.id} city={city} size="default" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
