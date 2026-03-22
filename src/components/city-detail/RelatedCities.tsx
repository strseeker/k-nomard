import Link from "next/link"
import { cities } from "@/data/cities"
import type { City } from "@/data/cities"

type Props = {
  city: City
}

export default function RelatedCities({ city }: Props) {
  const related = cities
    .filter((c) => c.region === city.region && c.id !== city.id)
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <section>
      <h2 className="text-base font-bold text-slate-800 mb-3">
        {city.region} 다른 도시
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {related.map((c) => (
          <Link
            key={c.id}
            href={`/cities/${c.id}`}
            className="bg-white rounded-xl border border-slate-100 p-3 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all"
          >
            {/* 미니 이미지 */}
            <div className="relative h-16 rounded-lg bg-gradient-to-br from-emerald-200/60 to-slate-400 overflow-hidden mb-2 flex items-center justify-center">
              <span className="text-white/50 text-xl font-black">{c.name.charAt(0)}</span>
              {c.badge && (
                <span className="absolute top-1 left-1 px-1.5 py-0 rounded-full bg-emerald-500 text-white text-[9px] font-bold">
                  {c.badge}
                </span>
              )}
            </div>
            <p className="text-xs font-bold text-slate-800 truncate">{c.name}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">{c.budget}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
