import { MapPin, Map, Star, User } from "lucide-react"

const tabs = [
  { label: "도시", icon: MapPin, href: "#" },
  { label: "지도", icon: Map, href: "#" },
  { label: "리뷰", icon: Star, href: "#" },
  { label: "MY", icon: User, href: "#" },
]

export default function MobileTabBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-slate-200 bg-white">
      <div className="flex items-center justify-around h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <a
              key={tab.label}
              href={tab.href}
              className="flex flex-col items-center gap-1 px-4 py-2 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{tab.label}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
