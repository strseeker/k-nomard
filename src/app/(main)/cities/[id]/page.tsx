import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { cities } from "@/data/cities"
import CityDetailHero from "@/components/city-detail/CityDetailHero"
import CityInfoGrid from "@/components/city-detail/CityInfoGrid"
import CityTagList from "@/components/city-detail/CityTagList"
import CityScoreBar from "@/components/city-detail/CityScoreBar"
import RelatedCities from "@/components/city-detail/RelatedCities"

type Props = {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return cities.map((city) => ({ id: city.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const city = cities.find((c) => c.id === id)
  if (!city) return {}
  return {
    title: `${city.name} | K·NOMADS`,
    description: `${city.name} 디지털 노마드 정보 — 예산 ${city.budget}, ${city.region}`,
  }
}

export default async function CityDetailPage({ params }: Props) {
  const { id } = await params
  const city = cities.find((c) => c.id === id)

  if (!city) notFound()

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <CityDetailHero city={city} />

      {/* 본문 */}
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">
        {/* 핵심 정보 그리드 */}
        <CityInfoGrid city={city} />

        {/* 태그 */}
        <CityTagList city={city} />

        {/* 좋아요 비율 */}
        <CityScoreBar city={city} />

        {/* 같은 지역 추천 */}
        <RelatedCities city={city} />
      </div>
    </div>
  )
}
