// ─── 필터 값 타입 정의 ────────────────────────────────────────────────────────
export type BudgetType = "100만원 이하" | "100~200만원" | "200만원 이상"
export type RegionType = "수도권" | "경상도" | "전라도" | "강원도" | "제주도" | "충청도"
export type EnvironmentType = "자연친화" | "도심선호" | "카페작업" | "코워킹 필수"
export type SeasonType = "봄" | "여름" | "가을" | "겨울"

// ─── City 타입 ────────────────────────────────────────────────────────────────
export type City = {
  id: string
  name: string
  tagline: string
  budget: BudgetType
  region: RegionType
  environment: EnvironmentType[]
  bestSeason: SeasonType[]
  tags: string[]
  likes: number
  dislikes: number
  badge?: string
  image: string
}

// ─── 도시 데이터 ──────────────────────────────────────────────────────────────
export const cities: City[] = [
  {
    id: "jeju",
    name: "제주시",
    tagline: "섬이 주는 자유",
    budget: "100~200만원",
    region: "제주도",
    environment: ["자연친화", "카페작업"],
    bestSeason: ["봄", "여름", "가을"],
    tags: ["자연", "카페多", "워케이션", "비자프리"],
    likes: 342,
    dislikes: 18,
    badge: "BEST PICK",
    image: "/images/cities/jeju.jpg",
  },
  {
    id: "seoul",
    name: "서울",
    tagline: "모든 것이 가능한 도시",
    budget: "200만원 이상",
    region: "수도권",
    environment: ["도심선호", "코워킹 필수"],
    bestSeason: ["봄", "가을"],
    tags: ["인프라최강", "커뮤니티", "비즈니스", "문화"],
    likes: 289,
    dislikes: 24,
    badge: "인기급상승",
    image: "/images/cities/seoul.jpg",
  },
  {
    id: "busan",
    name: "부산",
    tagline: "파도처럼 역동적인 도시",
    budget: "100~200만원",
    region: "경상도",
    environment: ["도심선호", "코워킹 필수", "자연친화"],
    bestSeason: ["여름", "가을"],
    tags: ["바다노마드", "해운대", "맛집", "코워킹"],
    likes: 215,
    dislikes: 11,
    badge: "바다노마드",
    image: "/images/cities/busan.jpg",
  },
  {
    id: "gangneung",
    name: "강릉",
    tagline: "커피향 가득한 바닷가",
    budget: "100만원 이하",
    region: "강원도",
    environment: ["자연친화", "카페작업"],
    bestSeason: ["봄", "여름"],
    tags: ["커피거리", "바다", "힐링", "서핑"],
    likes: 187,
    dislikes: 9,
    image: "/images/cities/gangneung.jpg",
  },
  {
    id: "seogwipo",
    name: "서귀포",
    tagline: "느리게 살기 좋은 남쪽",
    budget: "100~200만원",
    region: "제주도",
    environment: ["자연친화"],
    bestSeason: ["봄", "가을", "겨울"],
    tags: ["자연", "올레길", "한적함", "장기거주"],
    likes: 163,
    dislikes: 7,
    image: "/images/cities/seogwipo.jpg",
  },
  {
    id: "daejeon",
    name: "대전",
    tagline: "과학과 교통의 중심",
    budget: "100만원 이하",
    region: "충청도",
    environment: ["도심선호", "코워킹 필수"],
    bestSeason: ["봄", "가을"],
    tags: ["교통요충지", "IT단지", "합리적비용", "대학도시"],
    likes: 142,
    dislikes: 8,
    image: "/images/cities/daejeon.jpg",
  },
  {
    id: "jeonju",
    name: "전주",
    tagline: "한옥 속 슬로우 라이프",
    budget: "100만원 이하",
    region: "전라도",
    environment: ["카페작업", "자연친화"],
    bestSeason: ["봄", "가을"],
    tags: ["한옥마을", "문화", "맛집", "저비용"],
    likes: 134,
    dislikes: 6,
    image: "/images/cities/jeonju.jpg",
  },
  {
    id: "chuncheon",
    name: "춘천",
    tagline: "호수와 낭만의 도시",
    budget: "100만원 이하",
    region: "강원도",
    environment: ["자연친화"],
    bestSeason: ["봄", "여름", "가을"],
    tags: ["호수", "닭갈비", "자연", "소도시감성"],
    likes: 118,
    dislikes: 5,
    image: "/images/cities/chuncheon.jpg",
  },
  {
    id: "gwangju",
    name: "광주",
    tagline: "예술과 맛의 수도",
    budget: "100만원 이하",
    region: "전라도",
    environment: ["도심선호", "카페작업"],
    bestSeason: ["봄", "가을"],
    tags: ["문화도시", "예술", "맛고장", "광주비엔날레"],
    likes: 109,
    dislikes: 7,
    image: "/images/cities/gwangju.jpg",
  },
  {
    id: "sokcho",
    name: "속초",
    tagline: "산과 바다가 만나는 곳",
    budget: "100만원 이하",
    region: "강원도",
    environment: ["자연친화"],
    bestSeason: ["여름"],
    tags: ["설악산", "바다", "해산물", "계절여행"],
    likes: 98,
    dislikes: 4,
    image: "/images/cities/sokcho.jpg",
  },
  {
    id: "gyeongju",
    name: "경주",
    tagline: "천년의 고도",
    budget: "100만원 이하",
    region: "경상도",
    environment: ["자연친화", "카페작업"],
    bestSeason: ["봄", "가을"],
    tags: ["역사도시", "유적지", "자전거", "한옥스테이"],
    likes: 87,
    dislikes: 5,
    image: "/images/cities/gyeongju.jpg",
  },
  {
    id: "daegu",
    name: "대구",
    tagline: "패션과 열정의 도시",
    budget: "100만원 이하",
    region: "경상도",
    environment: ["도심선호"],
    bestSeason: ["봄", "가을"],
    tags: ["패션도시", "김광석거리", "치맥", "도심"],
    likes: 76,
    dislikes: 9,
    image: "/images/cities/daegu.jpg",
  },
  {
    id: "yeosu",
    name: "여수",
    tagline: "밤바다의 낭만",
    budget: "100만원 이하",
    region: "전라도",
    environment: ["자연친화", "카페작업"],
    bestSeason: ["여름"],
    tags: ["밤바다", "해양", "케이블카", "낭만"],
    likes: 65,
    dislikes: 3,
    image: "/images/cities/yeosu.jpg",
  },
  {
    id: "cheongju",
    name: "청주",
    tagline: "실용적인 중부의 거점",
    budget: "100만원 이하",
    region: "충청도",
    environment: ["도심선호", "코워킹 필수"],
    bestSeason: ["봄", "가을"],
    tags: ["공항인접", "저비용", "교육도시", "실속"],
    likes: 54,
    dislikes: 4,
    image: "/images/cities/cheongju.jpg",
  },
]

// ─── 정렬 export ──────────────────────────────────────────────────────────────
export const citiesSortedByLikes = [...cities].sort((a, b) => b.likes - a.likes)
