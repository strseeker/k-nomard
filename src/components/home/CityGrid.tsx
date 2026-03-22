import { citiesSortedByLikes } from "@/data/cities"
import CityCard from "./CityCard"

export default function CityGrid() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-slate-900">도시리스트</h2>
          <span className="text-xs text-slate-400">총 {citiesSortedByLikes.length}개 도시</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {citiesSortedByLikes.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </div>
    </section>
  )
}
