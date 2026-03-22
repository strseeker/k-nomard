"use client"

import { useState } from "react"
import Link from "next/link"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { City } from "@/data/cities"

type CityCardProps = {
  city: City
}

export default function CityCard({ city }: CityCardProps) {
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [likeCount, setLikeCount] = useState(city.likes)
  const [dislikeCount, setDislikeCount] = useState(city.dislikes)

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (liked) {
      setLiked(false)
      setLikeCount((c) => c - 1)
    } else {
      setLiked(true)
      setLikeCount((c) => c + 1)
      if (disliked) {
        setDisliked(false)
        setDislikeCount((c) => c - 1)
      }
    }
  }

  const handleDislike = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (disliked) {
      setDisliked(false)
      setDislikeCount((c) => c - 1)
    } else {
      setDisliked(true)
      setDislikeCount((c) => c + 1)
      if (liked) {
        setLiked(false)
        setLikeCount((c) => c - 1)
      }
    }
  }

  return (
    <Link href={`/cities/${city.id}`} className="block rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* 이미지 영역 */}
      <div className="relative h-44 bg-gradient-to-br from-slate-300 to-slate-400 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/50 to-slate-400" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
          <span className="text-white font-bold text-xl drop-shadow">{city.name}</span>
          <span className="text-white/80 text-xs">{city.tagline}</span>
        </div>
        {city.badge && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-xs font-bold shadow">
              {city.badge}
            </span>
          </div>
        )}
      </div>

      {/* 콘텐츠 */}
      <div className="flex flex-col p-4">
        {/* 좋아요/싫어요 */}
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={handleLike}
            className="flex items-center gap-1"
            aria-label="좋아요"
          >
            <ThumbsUp
              className={cn(
                "h-4 w-4 transition-colors",
                liked ? "text-emerald-500 fill-emerald-500" : "text-slate-400"
              )}
            />
            <span className="text-xs text-slate-500">{likeCount}</span>
          </button>
          <button
            onClick={handleDislike}
            className="flex items-center gap-1"
            aria-label="싫어요"
          >
            <span className="text-xs text-slate-500">{dislikeCount}</span>
            <ThumbsDown
              className={cn(
                "h-4 w-4 transition-colors",
                disliked ? "text-rose-500 fill-rose-500" : "text-slate-400"
              )}
            />
          </button>
        </div>

        {/* Key-Value 정보 그리드 */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <div>
            <span className="text-[11px] text-slate-400">예산</span>
            <p className="text-[11px] font-medium text-slate-700">{city.budget}</p>
          </div>
          <div>
            <span className="text-[11px] text-slate-400">지역</span>
            <p className="text-[11px] font-medium text-slate-700">{city.region}</p>
          </div>
          <div>
            <span className="text-[11px] text-slate-400">환경</span>
            <div className="flex flex-wrap gap-0.5 mt-0.5">
              {city.environment.map((env) => (
                <Badge
                  key={env}
                  variant="secondary"
                  className="text-[10px] px-1.5 py-0 bg-slate-100 text-slate-600"
                >
                  {env}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <span className="text-[11px] text-slate-400">최고 계절</span>
            <div className="flex flex-wrap gap-0.5 mt-0.5">
              {city.bestSeason.map((season) => (
                <Badge
                  key={season}
                  variant="secondary"
                  className="text-[10px] px-1.5 py-0 bg-slate-100 text-slate-600"
                >
                  {season}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
