import { Tag } from "lucide-react"
import type { City } from "@/data/cities"

type Props = {
  city: City
}

export default function CityTagList({ city }: Props) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Tag className="h-4 w-4 text-emerald-500" />
        <h2 className="text-sm font-semibold text-slate-700">이 도시의 특징</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {city.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}
