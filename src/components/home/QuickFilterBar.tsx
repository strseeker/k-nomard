"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const budgetOptions = ["전체", "100만원 이하", "100~200만원", "200만원 이상"]
const regionOptions = ["전체", "수도권", "경상도", "전라도", "강원도", "제주도", "충청도"]
const environmentOptions = ["전체", "자연친화", "도심선호", "카페작업", "코워킹 필수"]
const seasonOptions = ["전체", "봄", "여름", "가을", "겨울"]

const filters = [
  { label: "예산", options: budgetOptions },
  { label: "지역", options: regionOptions },
  { label: "환경", options: environmentOptions },
  { label: "최고 계절", options: seasonOptions },
]

export default function QuickFilterBar() {
  const [activeBudget, setActiveBudget] = useState("전체")
  const [activeRegion, setActiveRegion] = useState("전체")
  const [activeEnvironment, setActiveEnvironment] = useState("전체")
  const [activeSeason, setActiveSeason] = useState("전체")

  const activeValues = [activeBudget, activeRegion, activeEnvironment, activeSeason]
  const setters = [setActiveBudget, setActiveRegion, setActiveEnvironment, setActiveSeason]

  return (
    <section className="bg-white border-b border-slate-200 sticky top-16 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-2">
        {filters.map((filter, i) => (
          <div key={filter.label} className="flex items-center gap-3">
            <span className="text-xs font-medium text-slate-500 w-16 shrink-0">
              {filter.label}
            </span>
            <div className="flex w-full gap-1">
              {filter.options.map((option) => (
                <button
                  key={option}
                  onClick={() => setters[i](option)}
                  className={cn(
                    "flex-1 py-1.5 rounded-full text-sm font-medium text-center transition-colors",
                    activeValues[i] === option
                      ? "bg-slate-800 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
