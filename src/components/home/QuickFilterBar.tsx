"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const typeTabs = ["전체", "1차거점", "2차거점", "워케이션"]
const regionTabs = ["전체", "수도권", "강원", "충청", "전라", "경상", "제주"]
const featureTags = ["인터넷 빠름", "저비용", "바다뷰", "코워킹多", "커뮤니티", "자연환경", "교통편리", "한옥감성"]
const sortOptions = ["종합점수순", "리뷰많은순", "비용낮은순", "최근등록순"]

export default function QuickFilterBar() {
  const [activeType, setActiveType] = useState("전체")
  const [activeRegion, setActiveRegion] = useState("전체")
  const [activeTags, setActiveTags] = useState<string[]>([])
  const [activeSort, setActiveSort] = useState("종합점수순")

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  return (
    <section className="bg-white border-b border-slate-200 sticky top-16 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-3">
        {/* 유형 탭 + 지역 탭 */}
        <div className="flex flex-wrap gap-3 items-center">
          {/* 유형 */}
          <div className="flex items-center gap-1">
            {typeTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveType(tab)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                  activeType === tab
                    ? "bg-slate-800 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="h-5 w-px bg-slate-300 hidden sm:block" />

          {/* 지역 */}
          <div className="flex flex-wrap items-center gap-1">
            {regionTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveRegion(tab)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                  activeRegion === tab
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 특성 태그 + 정렬 */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* 특성 태그 */}
          <div className="flex flex-wrap gap-1.5">
            {featureTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-medium border transition-colors",
                  activeTags.includes(tag)
                    ? "bg-emerald-50 border-emerald-400 text-emerald-700"
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-400"
                )}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* 정렬 */}
          <div className="flex items-center gap-1 ml-auto">
            {sortOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveSort(opt)}
                className={cn(
                  "px-2.5 py-1 rounded text-xs font-medium transition-colors",
                  activeSort === opt
                    ? "text-slate-900 font-semibold"
                    : "text-slate-400 hover:text-slate-700"
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
