import HeroSection from "@/components/home/HeroSection"
import StatsBar from "@/components/home/StatsBar"
import QuickFilterBar from "@/components/home/QuickFilterBar"
import CityGrid from "@/components/home/CityGrid"
import RecentReviews from "@/components/home/RecentReviews"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <QuickFilterBar />
      <CityGrid />
      <RecentReviews />
      <Footer />
    </>
  )
}
