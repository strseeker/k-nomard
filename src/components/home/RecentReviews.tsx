import { ThumbsUp, ThumbsDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const reviews = [
  {
    id: 1,
    nickname: "nomad_jeju",
    city: "제주시",
    date: "2026.03.15",
    content:
      "제주 애월 카페 골목에서 한 달 살기를 했는데, 인터넷 속도가 생각보다 훨씬 빠르고 카페마다 콘센트가 많아서 작업하기 최고였어요. 다만 교통은 차가 없으면 좀 불편합니다.",
    tags: ["카페多", "인터넷쾌속", "자연뷰"],
    likes: 42,
    dislikes: 2,
  },
  {
    id: 2,
    nickname: "digital_busan",
    city: "부산",
    date: "2026.03.12",
    content:
      "해운대 인근 코워킹 스페이스가 생각보다 많고, 가격도 서울보다 저렴해요. 바다 보면서 일하는 감성은 진짜 최고입니다. 커뮤니티도 활발하게 운영 중!",
    tags: ["코워킹굿", "바다뷰", "가성비"],
    likes: 38,
    dislikes: 1,
  },
  {
    id: 3,
    nickname: "jeonju_lover",
    city: "전주",
    date: "2026.03.10",
    content:
      "전주 한옥마을 근처에서 한 달 살았는데 생활비가 정말 저렴해요. 맛집도 많고 분위기도 좋아서 집중이 잘 됩니다. 다만 코워킹 스페이스 선택지가 적어요.",
    tags: ["저비용", "맛집천국", "한옥감성"],
    likes: 29,
    dislikes: 4,
  },
  {
    id: 4,
    nickname: "gangneung_coder",
    city: "강릉",
    date: "2026.03.08",
    content:
      "강릉 커피거리 + 바다 조합은 진짜 최고입니다. 서핑 배우면서 오전에 작업하고 오후엔 바다... 이게 노마드 생활이지. 성수기엔 숙소 가격이 좀 올라가는 게 단점.",
    tags: ["바다뷰", "서핑", "카페天國"],
    likes: 55,
    dislikes: 3,
  },
]

export default function RecentReviews() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">최근 리뷰</h2>
            <p className="text-sm text-slate-500 mt-0.5">노마드들의 생생한 후기</p>
          </div>
          <a href="#" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
            전체 리뷰 →
          </a>
        </div>

        {/* 리뷰 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow"
            >
              {/* 헤더 */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-slate-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {review.nickname.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">
                      {review.nickname}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-emerald-600 font-medium">
                        {review.city}
                      </span>
                      <span className="text-slate-200">·</span>
                      <span className="text-xs text-slate-400">{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 본문 */}
              <p className="text-sm text-slate-600 leading-relaxed mb-3 line-clamp-3">
                {review.content}
              </p>

              {/* 태그 */}
              <div className="flex flex-wrap gap-1 mb-3">
                {review.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-[10px] px-2 py-0.5 bg-emerald-50 text-emerald-700 border-0"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* 좋아요/싫어요 */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <button className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-600 transition-colors">
                  <ThumbsUp className="h-3.5 w-3.5" />
                  <span className="text-xs">{review.likes}</span>
                </button>
                <button className="flex items-center gap-1.5 text-slate-400 hover:text-rose-500 transition-colors">
                  <ThumbsDown className="h-3.5 w-3.5" />
                  <span className="text-xs">{review.dislikes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
