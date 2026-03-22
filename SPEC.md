# K·NOMADS 개선 단계별 실행 계획

---

## 전체 Phase 체크리스트

- [x] Phase 1 — 데이터 모델 & 가짜 데이터 재정의
- [ ] Phase 2 — 네비게이션 정리 & 불필요 섹션 제거
- [x] Phase 3 — 필터 컴포넌트 재설계
- [ ] Phase 4 — CityCard 재설계 (좋아요/싫어요 + Key-Value 정보)
- [ ] Phase 5 — 홈페이지 최종 통합 & 도시리스트 구성

---

## Phase 1 — 데이터 모델 & 가짜 데이터 재정의

### 오버뷰
`src/data/cities.ts`의 `City` 타입과 데이터를 전면 재정의합니다. 기존의 점수 기반 시스템(`score`, `scores`, `rating`, `reviewCount`)을 제거하고, 필터 기반 Key-Value 구조(`budget`, `region`, `environment`, `bestSeason`)와 좋아요/싫어요 카운트(`likes`, `dislikes`)로 대체합니다. 이후 모든 Phase의 기반이 되는 작업입니다.

### 수정/개선 사항

- [x] `City` 타입에서 제거할 필드: `score`, `scores`, `rating`, `reviewCount`, `tier`
- [x] `City` 타입에 추가할 필드:
  - [x] `budget: "100만원 이하" | "100~200만원" | "200만원 이상"`
  - [x] `region: "수도권" | "경상도" | "전라도" | "강원도" | "제주도" | "충청도"`
  - [x] `environment: ("자연친화" | "도심선호" | "카페작업" | "코워킹 필수")[]` (복수 선택 가능)
  - [x] `bestSeason: ("봄" | "여름" | "가을" | "겨울")[]` (복수 선택 가능)
  - [x] `likes: number`
  - [x] `dislikes: number`
- [x] 기존 `monthlyCost` 필드 제거 (`budget` 필드로 대체)
- [x] 14개 도시 데이터 각각 새 필드 채우기:
  - [x] 제주시: budget="100~200만원", region="제주도", environment=["자연친화","카페작업"], bestSeason=["봄","여름","가을"]
  - [x] 서울: budget="200만원 이상", region="수도권", environment=["도심선호","코워킹 필수"], bestSeason=["봄","가을"]
  - [x] 부산: budget="100~200만원", region="경상도", environment=["도심선호","코워킹 필수","자연친화"], bestSeason=["여름","가을"]
  - [x] 강릉: budget="100만원 이하", region="강원도", environment=["자연친화","카페작업"], bestSeason=["봄","여름"]
  - [x] 서귀포: budget="100~200만원", region="제주도", environment=["자연친화"], bestSeason=["봄","가을","겨울"]
  - [x] 대전: budget="100만원 이하", region="충청도", environment=["도심선호","코워킹 필수"], bestSeason=["봄","가을"]
  - [x] 전주: budget="100만원 이하", region="전라도", environment=["카페작업","자연친화"], bestSeason=["봄","가을"]
  - [x] 춘천: budget="100만원 이하", region="강원도", environment=["자연친화"], bestSeason=["봄","여름","가을"]
  - [x] 광주: budget="100만원 이하", region="전라도", environment=["도심선호","카페작업"], bestSeason=["봄","가을"]
  - [x] 속초: budget="100만원 이하", region="강원도", environment=["자연친화"], bestSeason=["여름"]
  - [x] 경주: budget="100만원 이하", region="경상도", environment=["자연친화","카페작업"], bestSeason=["봄","가을"]
  - [x] 대구: budget="100만원 이하", region="경상도", environment=["도심선호"], bestSeason=["봄","가을"]
  - [x] 여수: budget="100만원 이하", region="전라도", environment=["자연친화","카페작업"], bestSeason=["여름"]
  - [x] 청주: budget="100만원 이하", region="충청도", environment=["도심선호","코워킹 필수"], bestSeason=["봄","가을"]
- [x] `likes` 값은 도시마다 서로 다른 가짜 초기값 부여 (예: 제주 342, 서울 289, 부산 215 등)
- [x] 기존 `featuredCities`, `tier1Cities`, `tier2Cities` export 제거
- [x] 좋아요 내림차순 정렬 export 추가: `export const citiesSortedByLikes = [...cities].sort(...)`

### 검증/확인 사항

- [x] `City` 타입에서 삭제된 필드(`score`, `scores`, `rating`, `reviewCount`, `tier`, `monthlyCost`)가 없는지 확인
- [x] 14개 도시 모두 `budget`, `region`, `environment`(최소 1개), `bestSeason`(최소 1개) 값이 있는지 확인
- [x] `npx tsc --noEmit` 실행 확인 — 예상대로 CityCard/CityGrid/FeaturedCities에서 삭제된 필드 참조 에러 발생, Phase 2~5에서 순차 해결 예정

---

## Phase 2 — 네비게이션 정리 & 불필요 섹션 제거

### 오버뷰
Header에서 페이지 이동 링크(`도시탐색`, `지도보기`, `도시비교`, `평가하기`)를 제거하고 로그인/회원가입 버튼만 남깁니다. MobileTabBar도 인증 관련 외 탭을 정리합니다. 홈페이지에서 `FeaturedCities` 섹션을 제거합니다 (이후 `CityGrid`가 모든 도시를 표시하는 통합 리스트로 대체됨).

### 수정/개선 사항

- [x] `src/components/layout/Header.tsx`:
  - [x] `navItems` 배열 전체 삭제 (도시탐색, 지도보기, 도시비교, 평가하기 링크 제거)
  - [x] `<nav>` 태그 및 navItems 렌더링 코드 삭제
  - [x] 검색 인풋 바 삭제 (로그인/회원가입 버튼만 우측에 남김)
  - [x] 모바일 검색 버튼 삭제 및 햄버거 메뉴 버튼 삭제 (로그인/회원가입만 유지)
- [x] `src/components/layout/MobileTabBar.tsx`:
  - [x] 내비게이션 성격의 탭 항목 모두 삭제
  - [x] 프로필/마이페이지 등 인증 관련 항목만 유지 또는 전체 컴포넌트 사용 중단 결정 → 전체 컴포넌트 사용 중단
- [x] `src/app/(main)/page.tsx`:
  - [x] `<FeaturedCities />` 컴포넌트 import 및 사용 제거
  - [x] `<QuizCtaBanner />` 컴포넌트 import 및 사용 제거
- [x] `src/components/home/FeaturedCities.tsx` 파일 삭제
- [x] `src/components/home/QuizCtaBanner.tsx` 파일 삭제

### 검증/확인 사항

- [x] Header에 로고, 로그인 버튼, 회원가입 버튼만 남아있는지 확인
- [x] 홈페이지 렌더링 시 FeaturedCities, QuizCtaBanner 관련 에러 없음 확인
- [x] `npx tsc --noEmit` 타입 에러 없음 확인 (Phase 4/5 대상 CityCard/CityGrid 에러는 Phase 1부터 존재하던 기존 에러)
- [ ] `npm run dev` 실행 후 홈페이지 정상 접근 확인

### Execution Plan

#### Step 1: Header.tsx 수정
**파일:** `src/components/layout/Header.tsx`

- [x] `navItems` 배열 상수 삭제
- [x] `<nav>` 태그 및 navItems `.map()` 렌더링 블록 삭제
- [x] 검색 인풋 영역 삭제 (Search 아이콘 + Input 포함)
- [x] `Search` import 삭제 (lucide-react)
- [x] `Input` import 삭제 (`@/components/ui/input`)
- [x] 모바일 검색 버튼 삭제
- [x] 모바일 햄버거 메뉴 버튼 삭제
- [x] `Menu` import 삭제 (lucide-react)
- [x] `npx tsc --noEmit` & `npx next lint` 실행 및 에러 해결

#### Step 2: MobileTabBar.tsx 사용 중단
**결정:** 현재 탭 항목이 모두 navigation 성격이며 인증 관련 항목 없음 → 전체 컴포넌트 사용 중단

- [x] `src/app/(main)/layout.tsx`에서 `<MobileTabBar />` import 및 렌더링 제거
- [x] `src/components/layout/MobileTabBar.tsx` 파일 삭제
- [x] `npx tsc --noEmit` & `npx next lint` 실행 및 에러 해결

#### Step 3: page.tsx에서 불필요 컴포넌트 제거
**파일:** `src/app/(main)/page.tsx`

- [x] `import FeaturedCities` 라인 삭제
- [x] `import QuizCtaBanner` 라인 삭제
- [x] `<FeaturedCities />` JSX 제거
- [x] `<QuizCtaBanner />` JSX 제거
- [x] `npx tsc --noEmit` & `npx next lint` 실행 및 에러 해결

#### Step 4: 컴포넌트 파일 삭제
- [x] `src/components/home/FeaturedCities.tsx` 삭제
- [x] `src/components/home/QuizCtaBanner.tsx` 삭제
- [x] `npx tsc --noEmit` & `npx next lint` 최종 확인

---

## Phase 3 — 필터 컴포넌트 재설계

### 오버뷰
`QuickFilterBar`를 완전히 재작성합니다. 기존의 `유형(tier)` / `지역` / `특성태그` / `정렬` 구조에서 새로운 4개 필터 카테고리(`예산`, `지역`, `환경`, `최고 계절`)로 교체합니다. 각 필터 선택 상태는 URL query string이 아닌 컴포넌트 내부 state로 관리합니다 (가짜 데이터이므로 실제 필터링 로직은 불필요하며 UI 상태만 구현).

### 수정/개선 사항

- [x] `src/components/home/QuickFilterBar.tsx` 전면 재작성:
  - [x] 기존 `typeTabs`, `featureTags`, `sortOptions` 상수 전부 제거
  - [x] 새 필터 상수 정의:
    - [x] `budgetOptions = ["전체", "100만원 이하", "100~200만원", "200만원 이상"]`
    - [x] `regionOptions = ["전체", "수도권", "경상도", "전라도", "강원도", "제주도", "충청도"]`
    - [x] `environmentOptions = ["전체", "자연친화", "도심선호", "카페작업", "코워킹 필수"]`
    - [x] `seasonOptions = ["전체", "봄", "여름", "가을", "겨울"]`
  - [x] state: `activeBudget`, `activeRegion`, `activeEnvironment`, `activeSeason` (각각 string, 단일 선택)
  - [x] 4개 필터 행을 레이블 + 토글 버튼 그룹으로 렌더링
  - [x] 선택 상태: `bg-slate-800 text-white`, 미선택: `bg-slate-100 text-slate-600`
  - [x] 레이아웃: 각 필터를 레이블(예산, 지역, 환경, 최고 계절) + 버튼 나열로 구성, 모바일에서 가로 스크롤

### 검증/확인 사항

- [x] 4개 필터 카테고리(예산, 지역, 환경, 최고 계절)가 모두 표시되는지 확인
- [x] 각 필터에서 버튼 클릭 시 활성 상태(색상)가 올바르게 변경되는지 확인
- [x] "전체" 선택 시 다른 버튼 선택 해제, 다른 버튼 선택 시 "전체" 해제되는지 확인
- [x] 모바일 화면에서 필터 버튼이 가로 스크롤로 표시되는지 확인
- [x] `npx tsc --noEmit` 타입 에러 없음 확인 (CityCard/CityGrid 기존 에러는 Phase 4/5에서 해결)

### Execution Plan

#### Step 1: QuickFilterBar.tsx 전면 재작성
**파일:** `src/components/home/QuickFilterBar.tsx`

- [x] 기존 상수 전부 삭제: `typeTabs`, `regionTabs`, `featureTags`, `sortOptions`
- [x] 새 필터 상수 4개 정의:
  ```ts
  const budgetOptions = ["전체", "100만원 이하", "100~200만원", "200만원 이상"]
  const regionOptions = ["전체", "수도권", "경상도", "전라도", "강원도", "제주도", "충청도"]
  const environmentOptions = ["전체", "자연친화", "도심선호", "카페작업", "코워킹 필수"]
  const seasonOptions = ["전체", "봄", "여름", "가을", "겨울"]
  ```
- [x] 기존 state 4개 삭제(`activeType`, `activeRegion`, `activeTags`, `activeSort`) 후 새 state 4개 정의:
  ```ts
  const [activeBudget, setActiveBudget] = useState("전체")
  const [activeRegion, setActiveRegion] = useState("전체")
  const [activeEnvironment, setActiveEnvironment] = useState("전체")
  const [activeSeason, setActiveSeason] = useState("전체")
  ```
- [x] `toggleTag` 함수 삭제 (다중 선택 없음, 단일 선택 전환)
- [x] 렌더링 구조 재작성:
  - [x] 4개 필터 행: `레이블(텍스트) + overflow-x-auto flex flex-nowrap 버튼 그룹`
  - [x] 레이블 순서: 예산 / 지역 / 환경 / 최고 계절
  - [x] 버튼 선택: `bg-slate-800 text-white`, 미선택: `bg-slate-100 text-slate-600`
  - [x] 각 행의 버튼 클릭 시 해당 state만 변경 (단일 선택 토글)
- [x] `npx tsc --noEmit` 및 `npx next lint` 실행 후 에러 해결

---

## Phase 4 — CityCard 재설계 (좋아요/싫어요 + Key-Value 정보)

### 오버뷰
`CityCard` 컴포넌트를 전면 재설계합니다. 별점(`Star`)과 점수 프로그레스 바(`scoreItems`)를 제거하고, Phase 1에서 정의한 4개 필터 필드(`budget`, `region`, `environment`, `bestSeason`)를 Key-Value 형태의 정보 칩으로 표시합니다. 좋아요/싫어요 버튼은 클라이언트 상태로 관리하며, 클릭 시 아이콘 색상 변경 및 카운트 증감이 동작합니다. "상세보기" / "비교추가" 버튼을 제거합니다.

### 수정/개선 사항

- [x] `CityCard`를 `"use client"` Client Component로 전환
- [x] 삭제할 요소:
  - [x] `Star` import 및 별점 렌더링 (`{city.rating}`, `({city.reviewCount})`)
  - [x] `scoreItems` 배열 및 프로그레스 바 전체 블록
  - [x] `scoreColor` 함수
  - [x] `city.score` 종합점수 오버레이 (이미지 우상단)
  - [x] `city.tier` Tier 배지 (이미지 좌하단)
  - [x] "상세보기" / "비교추가" 버튼 전체 (`<div className="mt-auto">` 블록 삭제)
  - [x] `monthlyCost` 표시 블록
  - [x] `size` prop 및 large/small 분기 로직 (카드 크기 단일화)
- [x] 추가할 요소:
  - [x] `useState`로 `liked: boolean`, `disliked: boolean`, `likeCount: number`, `dislikeCount: number` 관리
  - [x] 초기값: `likeCount = city.likes`, `dislikeCount = city.dislikes`
  - [x] 좋아요 버튼 클릭 로직: `liked`가 false면 true로, likeCount +1. 이미 liked면 취소(false, -1). disliked 상태면 함께 해제.
  - [x] 싫어요 버튼 클릭 로직: 동일한 토글 패턴
  - [x] 아이콘 색상: 좋아요 활성 = `text-emerald-500 fill-emerald-500`, 비활성 = `text-slate-400`
  - [x] 아이콘 색상: 싫어요 활성 = `text-rose-500 fill-rose-500`, 비활성 = `text-slate-400`
  - [x] Key-Value 정보 그리드 구현:
    - [x] 예산: `budget` 값
    - [x] 지역: `region` 값
    - [x] 환경: `environment` 배열을 Badge로 나열
    - [x] 최고 계절: `bestSeason` 배열을 Badge로 나열
  - [x] Key는 `text-[11px] text-slate-400`, Value는 `text-[11px] font-medium text-slate-700`

### 검증/확인 사항

- [x] 카드에 별점, 프로그레스 바, 종합점수, Tier 배지, 상세보기 버튼이 없는지 확인
- [x] 예산/지역/환경/최고 계절 4가지 정보가 Key-Value로 표시되는지 확인
- [ ] 좋아요 버튼 클릭 시: 아이콘 emerald 색상 + 카운트 +1 확인
- [ ] 좋아요 버튼 재클릭(취소) 시: 아이콘 회색 + 카운트 -1 확인
- [ ] 싫어요 버튼 클릭 시: 아이콘 rose 색상 + 카운트 +1 확인
- [ ] 좋아요 상태에서 싫어요 클릭 시: 좋아요 취소, 싫어요 활성화 확인
- [x] `npx tsc --noEmit` 타입 에러 없음 확인

### Execution Plan

#### Step 1: CityCard.tsx 전면 재작성
**파일:** `src/components/home/CityCard.tsx`

- [x] `"use client"` 디렉티브 추가
- [x] `Star`, `Wifi`, `DollarSign`, `Train`, `Building2` import 제거 → `ThumbsUp`, `ThumbsDown` import 추가
- [x] `useState` import 추가
- [x] `size` prop 제거 (Props는 `city: City` 단일 prop)
- [x] `scoreColor` 함수 삭제
- [x] `scoreItems` 배열 삭제
- [x] 이미지 영역에서 종합점수 오버레이, Tier 배지 삭제
- [x] 콘텐츠 영역에서 별점, 프로그레스 바, 월비용, 버튼 블록 삭제
- [x] `liked`, `disliked`, `likeCount`, `dislikeCount` state 4개 추가
- [x] `handleLike` / `handleDislike` 토글 핸들러 구현
- [x] Key-Value 정보 그리드 구현 (예산/지역/환경/최고 계절)
- [x] 좋아요/싫어요 버튼 렌더링 (아이콘 컬러 활성/비활성)
- [x] `npx tsc --noEmit` 실행 → 에러 없음 확인
- [x] `npx next lint` 실행 → 에러 없음 확인

---

## Phase 5 — 홈페이지 최종 통합 & 도시리스트 구성

### 오버뷰
홈페이지 섹션을 최종 정리합니다. `CityGrid` 컴포넌트를 전면 재작성하여 제목을 "도시리스트"로 변경하고, 모든 도시를 좋아요 순으로 나열합니다. `RecentReviews`에서 별점(`StarRating`)을 제거합니다. `StatsBar` 통계 수치도 새 데이터 구조에 맞게 업데이트합니다.

### 수정/개선 사항

- [x] `src/components/home/CityGrid.tsx` 전면 재작성:
  - [x] 제목 "전체 도시 탐색" → "도시리스트"로 변경
  - [x] `tier1Cities`, `tier2Cities` import 제거 → `citiesSortedByLikes` import
  - [x] 1차/2차 거점 구분 섹션 헤더 제거
  - [x] 뷰 토글(그리드/리스트) 버튼 제거
  - [x] 단일 그리드로 모든 도시를 좋아요 순 나열: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
  - [x] `CityCard`의 `size` prop 제거 (Phase 4에서 단일화됨)
  - [x] 상단에 "총 N개 도시" 카운트 표시
- [x] `src/components/home/RecentReviews.tsx`:
  - [x] `StarRating` 컴포넌트 함수 삭제
  - [x] `Star` import 삭제
  - [x] 리뷰 데이터에서 `rating` 필드 제거
  - [x] 리뷰 헤더 우측의 `<StarRating>` 렌더링 제거
- [x] `src/app/(main)/page.tsx` 최종 섹션 순서 정리:
  - [x] 섹션 순서: `HeroSection` → `StatsBar` → `QuickFilterBar` → `CityGrid` → `RecentReviews` → `Footer`
  - [x] 삭제된 컴포넌트 import 잔재 없는지 확인
- [x] `src/components/home/StatsBar.tsx`:
  - [x] 별점/리뷰 관련 통계가 있다면 좋아요 기반 수치로 교체

### 검증/확인 사항

- [ ] 홈페이지 섹션 순서: Hero → Stats → 필터 → 도시리스트 → 최근리뷰 → Footer 확인
- [ ] "도시리스트" 섹션에서 14개 도시가 좋아요 내림차순으로 나열되는지 확인
- [ ] 도시 카드에 "상세보기" 버튼이 없는지 최종 확인
- [ ] RecentReviews에 별점 아이콘이 없는지 확인
- [ ] `npx tsc --noEmit` 타입 에러 없음 최종 확인
- [ ] `npm run dev` 실행 후 홈페이지 전체 스크롤 정상 렌더링 확인
- [ ] `/login`, `/register` 페이지 정상 접근 확인
- [ ] 인증 외 다른 경로(예: `/cities`) 접근 시 404 처리 확인

### Execution Plan

#### Step 1: CityGrid.tsx 수정
**파일:** `src/components/home/CityGrid.tsx`

> 현재 파일 분석: `citiesSortedByLikes` import, "총 N개 도시" 표시, size prop 없음은 이미 완료된 상태. 제목과 grid-cols만 수정 필요.

- [x] 제목 `"전체 도시 탐색"` → `"도시리스트"` 변경
- [x] grid class `lg:grid-cols-4` → `lg:grid-cols-3` 변경
- [x] `npx tsc --noEmit` 및 `npx next lint` 실행 후 에러 없음 확인

#### Step 2: RecentReviews.tsx 수정
**파일:** `src/components/home/RecentReviews.tsx`

- [x] `Star` import 삭제 (`lucide-react`에서)
- [x] `StarRating` 컴포넌트 함수 전체 삭제
- [x] `reviews` 배열 각 항목에서 `rating` 필드 삭제
- [x] 리뷰 카드 헤더의 `<StarRating rating={review.rating} />` 렌더링 제거
- [x] `npx tsc --noEmit` 및 `npx next lint` 실행 후 에러 없음 확인

#### Step 3: StatsBar.tsx 수정
**파일:** `src/components/home/StatsBar.tsx`

> 현재 "누적 리뷰" 항목이 리뷰 기반 수치. 좋아요 기반 수치로 교체.

- [x] `"1,240개" / "누적 리뷰" / "실제 거주자 후기"` → `"2,100개" / "총 좋아요" / "도시별 노마드 추천"` 으로 교체
- [x] `npx tsc --noEmit` 및 `npx next lint` 실행 후 에러 없음 확인

#### Step 4: page.tsx 최종 확인
**파일:** `src/app/(main)/page.tsx`

> 현재 섹션 순서(HeroSection → StatsBar → QuickFilterBar → CityGrid → RecentReviews → Footer)가 이미 올바름. import 잔재만 확인.

- [x] 삭제된 컴포넌트 import 잔재 없는지 확인 (FeaturedCities, QuizCtaBanner 등)
- [x] `npx tsc --noEmit` 및 `npx next lint` 최종 실행 후 에러 없음 확인

---

## Phase 실행 순서 참고

| Phase | 핵심 작업 | 의존성 |
|-------|-----------|--------|
| Phase 1 | 데이터 타입 & 가짜 데이터 재정의 | 없음 (먼저 실행) |
| Phase 2 | 네비게이션 정리, FeaturedCities/QuizCtaBanner 삭제 | Phase 1 완료 후 |
| Phase 3 | QuickFilterBar 4-필터 재설계 | Phase 1 완료 후 (Phase 2와 병렬 가능) |
| Phase 4 | CityCard 재설계 (좋아요/싫어요, KV 표시) | Phase 1 완료 후 |
| Phase 5 | CityGrid 도시리스트 통합, 홈페이지 최종 정리 | Phase 1~4 완료 후 |
