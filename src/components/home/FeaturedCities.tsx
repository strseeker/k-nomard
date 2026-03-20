import { featuredCities } from "@/data/cities"
import CityCard from "./CityCard"

export default function FeaturedCities() {
  const [first, ...rest] = featuredCities

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">이달의 추천 도시</h2>
            <p className="text-sm text-slate-500 mt-0.5">노마드들이 선택한 Best Pick</p>
          </div>
          <a href="#" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
            전체보기 →
          </a>
        </div>

        {/* 카드 그리드: 첫 번째 large, 나머지 small */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* 큰 카드 */}
          {first && (
            <div className="lg:col-span-2">
              <CityCard city={first} size="large" />
            </div>
          )}

          {/* 작은 카드들 */}
          <div className="flex flex-col gap-5">
            {rest.map((city) => (
              <CityCard key={city.id} city={city} size="small" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
