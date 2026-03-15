"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
/* ── SVG 아이콘 ── */
function PhoneIcon({ size = 18, strokeWidth = 2, style }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function KakaoIcon({ size = 18 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3C6.48 3 2 6.58 2 10.94c0 2.8 1.86 5.27 4.66 6.67-.15.56-.96 3.6-.99 3.83 0 0-.02.16.08.22.1.06.22.03.22.03.29-.04 3.37-2.2 3.9-2.57.69.1 1.4.15 2.13.15 5.52 0 10-3.58 10-7.94S17.52 3 12 3z" />
    </svg>
  );
}

/* ── Before & After 데이터 ── */
const beforeAfterCases = [
  { num: "01", label: "회춘윤곽 관리 후 주름개선 임상", img: "/ba-01.jpg", tagPos: "side" },
  { num: "02", label: "회춘윤곽 관리 후 주름개선 임상", img: "/ba-02.jpg", tagPos: "diagonal" },
  { num: "03", label: "회춘윤곽 관리 후 주름개선 임상", img: "/ba-03.jpg", tagPos: "side" },
  { num: "04", label: "중안부 볼륨 임상", img: "/ba-04.jpg", tagPos: "diagonal" },
  { num: "05", label: "중안부 볼륨 임상", img: "/ba-05.jpg", tagPos: "diagonal" },
  { num: "06", label: "등 관리 임상", img: "/ba-06.jpg", tagPos: "side" },
  { num: "07", label: "여드름 케어 임상", img: "/ba-07.jpg", tagPos: "diagonal" },
  { num: "08", label: "여드름 케어 임상", img: "/ba-08.jpg", tagPos: "diagonal" },
];

/* ── 서비스 데이터 (전체) ── */
const previewServices = [
  { name: "영끌 리프팅", desc: "", price: "160,000" },
  { name: "회춘윤곽", desc: "", price: "90,000" },
  { name: "트러블 관리", desc: "", price: "70,000" },
  { name: "등순환", desc: "", price: "60,000" },
];

const serviceCategories = [
  {
    title: "페이스 기본 케어",
    items: [
      { name: "기본케어 (Face)", desc: "피부 컨디션 기초 관리", price: "40,000" },
      { name: "수분케어", desc: "얼굴 + 목 + 어깨 집중 수분 공급", price: "60,000" },
    ],
  },
  {
    title: "리프팅 & 윤곽 케어",
    items: [
      { name: "회춘윤곽", desc: "탄력 + 윤곽 동시 관리", price: "90,000" },
      { name: "3D 리프팅", desc: "입체적 리프팅 라인 케어", price: "100,000" },
      { name: "이중턱 제로", desc: "턱선 집중 관리 프로그램", price: "100,000" },
      { name: "영끌 리프팅", desc: "윤곽 + 하이푸 + 히알펜", price: "160,000" },
    ],
  },
  {
    title: "문제성 피부 & 필링",
    items: [
      { name: "트러블 관리", desc: "피부 진정 + 트러블 집중 케어", price: "70,000" },
      { name: "광채 필링", desc: "피부결 개선 + 톤업 관리", price: "80,000" },
      { name: "스피큘 장벽재생관리", desc: "피부 장벽 강화 + 재생 케어", price: "150,000" },
    ],
  },
  {
    title: "바디 & 순환 케어",
    items: [
      { name: "등순환", desc: "등 부위 집중 순환 관리", price: "60,000" },
      { name: "하체순환", desc: "하체 부종 완화 순환 관리", price: "60,000" },
      { name: "부종제거 디톡스 미톡스", desc: "디톡스 + 부종 제거 집중 관리", price: "80,000" },
      { name: "전신순환 60분", desc: "전신 릴렉싱 순환 프로그램", price: "120,000" },
    ],
  },
];

/* ── 리뷰 7개 (네이버 실제 후기) ── */
const reviews = [
  {
    avatar: "미뇨", avatarClass: "a1", name: "미뇨콩",
    text: "웨촬 전 야무진 피부관리 찾으신다면 바미뷰티✨ 탄방동 에스테틱 중에서도 원장님이 잠심에서 받아온 테크닉을 그대로 반영한 똑부러지는 윤곽관리가 시그니처인 바미뷰티!!!😉💛 피부미인인 원장님 넘 친절하시고 꼼꼼하게 케어해주셔서 넘 만족스러운거 있죠🥹🫶💕",
    tags: ["관리 효과가 좋아요", "맞춤 케어를 잘해줘요", "시술이 꼼꼼해요", "친절해요"],
  },
  {
    avatar: "이", avatarClass: "a2", name: "lee****",
    text: "좁쌀 여드름 때문에 방문했는데 압출을 정말 세심하게 해주세요. 대충 넘어가는 느낌이 아니라 끝까지 꼼꼼하게 봐주셔서 만족스러웠어요. 그리고, 윤곽관리를 찾고 있었는데 수기 관리 테크닉도 좋고, 응대도 친절하셔서 금액권 결제했어요~~ 다음에도 잘 부탁드립니다!",
    tags: ["맞춤 케어를 잘해줘요", "시술이 꼼꼼해요", "친절해요", "매장이 청결해요"],
  },
  {
    avatar: "묘", avatarClass: "a3", name: "묘식당 언니",
    text: "100%수기로 진행된 회춘라인 케어 받았는데 원장님이 경력이 오래되시고 근막과 결을 너무 잘 케어해주셔서 중간에 스르륵 잠이 들었어요. 손이 닿자마자 약손 느낌 팍! 주름도 완화되고 처진 볼도 착 올라가 붙는 느낌이라 관리받고 5살 더 어려진 느낌입니다^^",
    tags: ["관리 효과가 좋아요", "맞춤 케어를 잘해줘요", "시술이 꼼꼼해요", "친절해요"],
  },
  {
    avatar: "새", avatarClass: "a4", name: "새코콤",
    text: "친절한 원장님이 맞아주시던 바미뷰티 - 첫 인상부터 매장 분위기까지 너무 맘에 들었고 꼼꼼한 상담으로 진행해주셨는데 즉각적인 효과를 볼 수 있었고, 원장님이 거울도 보여주시면서 중간 중간 불편함 없는지 계속 체크해주셔서 편안하게 받아보고 즐거운 마음으로 집에 왔어요!",
    tags: ["맞춤 케어를 잘해줘요", "관리 효과가 좋아요", "친절해요", "분위기가 편안해요"],
  },
  {
    avatar: "52", avatarClass: "a5", name: "5263",
    text: "피부가 뒤집어져서 건너건너 소개로 급하게 방문했습니다. 압출도 최대한 안아프게 해주시고 손이 정말 빠르셔용👍🏻 핸드폰이나 다른 물건 만지실때마다 손 소독 하시는것도 마음에 들었습니다. 데콜테 받으면서 기절잠잤더니 안색이 달라짐... 원장님 대박 친절하시고 손도 야무지시고 힐링하고 왔습니다😍",
    tags: ["맞춤 케어를 잘해줘요", "시술이 꼼꼼해요", "친절해요", "분위기가 편안해요"],
  },
  {
    avatar: "이혜", avatarClass: "a6", name: "이혜지6014",
    text: "여드름때문에 스트레스많이받고 피부과, 의원 진짜 많이 다녀봤는데 아프기만하고 효과는없어서 마지막으로 희망갖고 바미뷰티왔어요 관리받길 진짜 너무 잘한 것 같아요ㅠㅠ 단기간에 효과가 바로 나타났어요!!!! 피부결이 정돈돼서 파데가 착 붙는 느낌이었어요. 앞으로도 꾸준히 관리 받으러 올게요!",
    tags: ["관리 효과가 좋아요", "시술이 꼼꼼해요", "친절해요", "분위기가 편안해요"],
  },
];

/* ── 메인 컴포넌트 ── */
export default function Home() {
  const [showAllServices, setShowAllServices] = useState(false);

  useEffect(() => {
    const header = document.getElementById("header");
    const handleScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }
      }),
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

    return () => { window.removeEventListener("scroll", handleScroll); observer.disconnect(); };
  }, []);

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="header" id="header">
        <div className="container header-inner">
          <a href="#" className="logo">Bami Beauty</a>
          <div className="header-cta">
            <a href="tel:0507-1366-8976" className="btn-header-phone">
              <PhoneIcon size={14} strokeWidth={2.5} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} />
              전화예약
            </a>
            <a href="https://pf.kakao.com/_vTsuG" target="_blank" rel="noopener noreferrer" className="btn-header-kakao">
              카카오톡 상담
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content fade-up">
              <div className="hero-badge">대전 서구 탄방역 인근</div>
              <h1>
                혹시 또 실망할까 봐,<br />
                망설이고 계신가요?
              </h1>
              <div className="hero-sub">
                <p className="hero-pain">
                  피부 때문에 스트레스받는 시간,<br />
                  관리받고도 어딘가 아쉬웠던 기억,<br />
                  아프고 배려 없는 케어에 지치셨죠?
                </p>
                <p className="hero-empathy">
                  그래서 더 신중해진 그 마음,<br />
                  당연합니다.
                </p>
                <p className="hero-conclusion">
                  바미는 그런 분들이 정착하는 곳입니다.
                </p>
              </div>
            </div>

            <div className="hero-visual fade-up delay-2">
              <div className="hero-visual-card">
                <div className="hero-visual-img">
                  <Image src="/hero-profile.jpg.png" alt="바미뷰티 대표 프로필" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
                </div>
                <div className="hero-float-card card-1">
                  <div className="float-icon beige">♥</div>
                  <div className="float-text">
                    프라이빗 관리
                    <small>편안한 1:1 공간</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 바미를 찾는 이유 ===== */}
      <section className="reasons" id="reasons">
        <div className="container">
          <div className="reasons-inner fade-up">
            <span className="reasons-label">Why Bami</span>
            <h2 className="reasons-title"><span className="reasons-emoji">🌿</span>바미를 찾는 분들은<br />이런 이유로 방문하십니다</h2>
            <div className="reasons-grid">
              <div className="reason-card">
                <span className="reason-check"></span>
                <span className="reason-text">트러블 관리가 너무 아파서 관리가 무서우신 분</span>
              </div>
              <div className="reason-card">
                <span className="reason-check"></span>
                <span className="reason-text">효과가 오래가지 않아 실망하신 분</span>
              </div>
              <div className="reason-card">
                <span className="reason-check"></span>
                <span className="reason-text">중요한 일정 전 확실한 변화를 원하는 분</span>
              </div>
              <div className="reason-card">
                <span className="reason-check"></span>
                <span className="reason-text">내 피부를 아무에게나 맡기고 싶지 않은 분</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 대표 스토리 ===== */}
      <section className="story" id="story">
        <div className="container">
          <div className="story-inner fade-up">
            <span className="section-label">Our Story</span>
            <h2 className="story-title">
              저 역시 피부로 속상해봤기에<br />
              더욱 고객의 입장에서 관리합니다.
            </h2>
            <div className="story-body">
              <p className="story-highlight">저도 여드름 피부였습니다.</p>
              <p>
                잘 모른 채 자극적인 셀프 관리를 반복했고<br />
                피부는 더 두꺼워지고, 더 예민해졌습니다.
              </p>
              <p>
                그 경험 덕분에<br />
                저는 <strong>&lsquo;하지 말아야 할 관리&rsquo;</strong>를 압니다.
              </p>
              <p className="story-conclusion">
                그래서 바미뷰티는<br />
                피부를 더 예민하게 만드는 자극 관리가 아니라<br />
                <strong>피부의 기초부터 다시 세우는 관리</strong>를 목표로 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 차별성 ===== */}
      <section className="difference" id="difference">
        <div className="container">
          <div className="difference-inner fade-up">
            <span className="section-label">Difference</span>
            <h2 className="section-title">바미뷰티의 차별성</h2>
            <div className="difference-grid">
              <div className="difference-card">
                <div className="difference-num">01</div>
                <h3>피부 재건 목표 관리</h3>
                <p>일시적 효과가 아닌<br />피부 재건을 목표로 하는 관리</p>
              </div>
              <div className="difference-card">
                <div className="difference-num">02</div>
                <h3>홈케어 밀착 코칭</h3>
                <p>트러블 케어 시<br />홈케어 생활습관 밀착 코칭</p>
              </div>
              <div className="difference-card">
                <div className="difference-num">03</div>
                <h3>피부 상태별 맞춤 케어</h3>
                <p>똑같은 케어가 아닌<br />피부 상태에 따른 맞춤 케어</p>
              </div>
              <div className="difference-card">
                <div className="difference-num">04</div>
                <h3>피부 히스토리 상담</h3>
                <p>피부의 히스토리를 체크해<br />피부 문제 원인 체크 상담</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 관리 프로세스 ===== */}
      <section className="process" id="process">
        <div className="container">
          <div className="process-header text-center fade-up">
            <span className="section-label">Process</span>
            <h2 className="section-title">
              처음 오셔도<br />
              부담 없이 진행됩니다
            </h2>
          </div>
          <div className="process-steps">
            <div className="process-step fade-up delay-1">
              <div className="process-step-num">STEP 1</div>
              <h3>간단 상담</h3>
              <p>피부 고민 파악<br />피부 상태 확인</p>
            </div>
            <div className="process-connector fade-up delay-1"></div>
            <div className="process-step fade-up delay-2">
              <div className="process-step-num">STEP 2</div>
              <h3>피부 상태 체크</h3>
              <p>피부 타입, 민감도<br />현재 피부 상태</p>
            </div>
            <div className="process-connector fade-up delay-2"></div>
            <div className="process-step fade-up delay-3">
              <div className="process-step-num">STEP 3</div>
              <h3>1:1 맞춤 관리</h3>
              <p>피부 상태 맞춤 케어</p>
            </div>
            <div className="process-connector fade-up delay-3"></div>
            <div className="process-step fade-up delay-4">
              <div className="process-step-num">STEP 4</div>
              <h3>사후 케어 안내</h3>
              <p>홈케어 방법 안내</p>
            </div>
          </div>
          <p className="process-note fade-up">강요 없이 상담 후 결정하셔도 됩니다</p>
        </div>
      </section>

      {/* ===== SERVICES (더보기 토글) ===== */}
      <section className="services" id="services">
        <div className="container">
          <div className="services-header text-center fade-up">
            <span className="section-label">Services</span>
            <h2 className="section-title">
              바미의 대표 관리
            </h2>
            <p className="section-desc mx-auto">
              리프팅, 윤곽, 트러블, 바디 순환까지
              <br className="mobile-br" />
              바미의 대표 프로그램을 소개합니다.
            </p>
          </div>

          {/* 접힌 상태: 대표 4개 */}
          {!showAllServices && (
            <div>
              <div className="service-grid">
                {previewServices.map((item, j) => (
                  <div className="service-card" key={j}>
                    <div className="service-info">
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <div className="service-price">
                      {item.price}<span className="won">원</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 펼친 상태: 카테고리별 전체 */}
          {showAllServices && (
            <div className="services-expanded">
              {serviceCategories.map((cat, i) => (
                <div className="service-category" key={i}>
                  <div className="service-category-title">{cat.title}</div>
                  <div className="service-grid">
                    {cat.items.map((item, j) => (
                      <div className="service-card" key={j}>
                        <div className="service-info">
                          <h3>{item.name}</h3>
                          <p>{item.desc}</p>
                        </div>
                        <div className="service-price">
                          {item.price}<span className="won">원</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="services-cta fade-up">
            <a href="tel:0507-1366-8976" className="btn btn-outline">
              <PhoneIcon /> 내 피부 고민에 맞는 관리 상담받기
            </a>
          </div>
        </div>
      </section>

      {/* ===== BEFORE & AFTER ===== */}
      <section className="ba" id="gallery">
        <div className="container">
          <div className="ba-header text-center fade-up">
            <span className="section-label">Gallery</span>
            <h2 className="ba-title">Before &amp; After</h2>
            <p className="section-desc mx-auto">정성을 담은 시술 결과를 직접 확인하세요</p>
          </div>
          <div className="ba-grid">
            {beforeAfterCases.map((item, i) => (
              <div className="ba-card fade-up" key={i}>
                <div className="ba-card-header">
                  <span className="ba-num">{item.num}</span>
                  <span className="ba-label">{item.label}</span>
                </div>
                <div className="ba-img-wrap">
                  <Image src={item.img} alt={`${item.label} - Before & After`} fill style={{ objectFit: "cover" }} />
                  <span className="ba-tag ba-tag-b" style={{ left: 10, top: 10 }}>
                    BEFORE
                  </span>
                  <span className="ba-tag ba-tag-a" style={item.tagPos === "side" ? { right: 10, top: 10 } : { right: 10, bottom: 10 }}>
                    AFTER
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS (네이버 실제 후기) ===== */}
      <section className="reviews" id="reviews">
        <div className="container">
          <div className="reviews-header text-center fade-up">
            <span className="section-label" style={{ fontSize: "1.05rem" }}>NAVER 실제 고객 후기</span>
            <h2 className="section-title">
              바미뷰티를 경험한 분들의 이야기
            </h2>
            <p className="section-desc mx-auto">직접 방문한 고객님들의 솔직한 후기입니다</p>
          </div>

          <div className="review-grid">
            {reviews.map((r, i) => (
              <div className="review-card fade-up" key={i}>
                <div className="review-card-top">
                  <div>
                    <div className="review-nickname">{r.name}</div>
                    <div className="review-card-stars">★★★★★</div>
                  </div>
                </div>
                <p className="review-text">{r.text}</p>
                <div className="review-tags">
                  {r.tags.map((tag, ti) => (
                    <span className="review-tag" key={ti}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="services-cta fade-up">
            <a href="https://map.naver.com/p/search/%EB%B0%94%EB%AF%B8%EB%B7%B0%ED%8B%B0/place/1444288479?placePath=/review" target="_blank" rel="noopener" className="btn btn-outline">
              리뷰 더보기
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="faq-header text-center fade-up">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">자주 묻는 질문</h2>
          </div>
          <div className="faq-list">
            <div className="faq-item fade-up">
              <div className="faq-q">Q. 통증이 있나요?</div>
              <div className="faq-a">트러블, 드레스라인 관리 외에 자극 없이 편안하게 진행됩니다</div>
            </div>
            <div className="faq-item fade-up">
              <div className="faq-q">Q. 피부가 붉고 간지러워 관리 가능할까요?</div>
              <div className="faq-a">장벽이 손상된 증거로 붉고 간지러운 상태입니다. 반드시 홈케어 코칭과 장벽 관리가 필요해요</div>
            </div>
            <div className="faq-item fade-up">
              <div className="faq-q">Q. 관리 후 화장해도 되나요?</div>
              <div className="faq-a">네, 스피큘필링 관리 외 모든 케어는 관리 후 메이크업 가능합니다</div>
            </div>
            <div className="faq-item fade-up">
              <div className="faq-q">Q. 관리 주기는 어떻게 되나요? (트러블 관리)</div>
              <div className="faq-a">1주일에 1번씩 최소 5주 진행 후 피부 재생 정도에 따라 관리 주기가 달라집니다</div>
            </div>
            <div className="faq-item fade-up">
              <div className="faq-q">Q. 관리 주기는 어떻게 되나요? (윤곽 관리)</div>
              <div className="faq-a">1주일에 1번씩 최소 5주 진행 후 림프순환과 부종의 정도에 따라 관리 주기가 정해집니다</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCATION + CTA ===== */}
      <section className="location" id="location">
        <div className="container">
          <div className="location-header text-center fade-up">
            <span className="section-label">Location</span>
            <h2 className="section-title">바미뷰티 오시는 길</h2>
            <p className="section-desc mx-auto">
              탄방역 4번 출구에서 도보로 가까운 거리에 위치해 있습니다.
            </p>
          </div>

          <div className="location-content fade-up">
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3215.5!2d127.3880154!3d36.3472792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565495dd61a1721%3A0xeaa3ddad14aa0e4f!2z66Gc642w7Jik7YOA7Jq0!5e0!3m2!1sko!2skr!4v1"
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="바미뷰티 위치 지도"
              ></iframe>
            </div>

            <div className="location-details">
              <div className="location-item">
                <div className="location-item-icon" aria-hidden="true">📍</div>
                <div className="location-item-text">
                  <h4>주소</h4>
                  <p>대전 서구 문정로 77 로데오타운 3층 348호<small>탄방역 4번 출구에서 357m</small></p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-item-icon" aria-hidden="true">📞</div>
                <div className="location-item-text">
                  <h4>전화번호</h4>
                  <p><a href="tel:0507-1366-8976" style={{ color: "var(--rose-gold-dark)", fontWeight: 600 }}>0507-1366-8976</a></p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-item-icon" aria-hidden="true">🕐</div>
                <div className="location-item-text">
                  <h4>영업 안내</h4>
                  <p>일요일 휴무<small>방문 전 전화 또는 카카오톡으로 예약해주세요</small></p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-item-icon" aria-hidden="true">🚌</div>
                <div className="location-item-text">
                  <h4>찾아오시는 방법</h4>
                  <p>탄방역 4번 출구 직진<small>로데오타운 3층으로 올라오시면 됩니다</small></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="section-divider"></div>

      {/* ===== 최종 CTA ===== */}
      <section className="final-cta-page" id="cta">
        <div className="container">
          <div className="final-cta-inner fade-up">
            <h2>실망은 끝내고, 변화는 시작되는<br />&ldquo;예뻐질 수 있다는 확신&rdquo;</h2>
            <p>당신은 원래 아름답습니다.</p>
            <div className="final-cta-buttons">
              <a href="tel:0507-1366-8976" className="btn btn-primary"><PhoneIcon /> 바미뷰티 상담하기</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <p>
            <span className="footer-brand">바미뷰티</span><br />
            대전 서구 문정로 77 로데오타운 3층 348호 &nbsp;|&nbsp; 전화 0507-1366-8976<br />
            &copy; 2025 바미뷰티. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ===== FLOATING SNS ===== */}
      <div className="floating-sns">
        <a href="https://map.naver.com/v5/search/%EB%B0%94%EB%AF%B8%EB%B7%B0%ED%8B%B0" target="_blank" rel="noopener noreferrer" className="floating-sns-btn" aria-label="네이버 지도">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C7.03 2 3 6.03 3 11c0 3.19 1.66 5.99 4.16 7.59L12 22l4.84-3.41A8.994 8.994 0 0 0 21 11c0-4.97-4.03-9-9-9zm0 12.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/balmy_746/" target="_blank" rel="noopener noreferrer" className="floating-sns-btn" aria-label="인스타그램">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>

      {/* ===== MOBILE STICKY CTA ===== */}
      <div className="mobile-cta" id="mobileCta">
        <div className="mobile-cta-inner">
          <a href="tel:0507-1366-8976" className="btn btn-primary">
            <PhoneIcon size={16} strokeWidth={2.5} /> 전화 예약
          </a>
          <a href="https://pf.kakao.com/_vTsuG" target="_blank" rel="noopener noreferrer" className="btn btn-kakao">
            <KakaoIcon size={16} /> 카카오톡 상담
          </a>
        </div>
      </div>
    </>
  );
}
