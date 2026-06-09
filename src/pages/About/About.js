import React, { useEffect, useState } from "react";
import "./About.css";

// 1. استدعاء المكونات الثابتة
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

// 2. استدعاء صورة الهيرو للواجهة
import aboutHeroImg from "../../images/about.jpg";
import VideoSection from "../../components/VideoSection/VideoSection";

// 3. المكونات الأربعة المنفصلة
import AboutStory from "../../components/AboutStory/AboutStory";
import AboutValues from "../../components/AboutValues/AboutValues";
import AboutImpact from "../../components/AboutImpact/AboutImpact";
import LovedByClients from "../../components/LovedByClients/LovedByClients";

export default function About() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // تأثير الأنميشن الشامل للسكرول والتحكم في زر الصعود
  useEffect(() => {
    const handleScrollReveal = () => {
      // 1. أنميشن ظهور الفقرات عند النزول
      const revealElements = document.querySelectorAll(".reveal-section");
      const windowHeight = window.innerHeight;
      const elementVisible = 100;

      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });

      // 2. إظهار سهم الصعود فقط عند نزول المستخدم لأكثر من 400 بكسل
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScrollReveal);
    // تشغيل مبدئي للتأكد من العناصر الظاهرة في البداية
    setTimeout(handleScrollReveal, 100);

    return () => window.removeEventListener("scroll", handleScrollReveal);
  }, []);

  // دالة الصعود للأعلى بسلاسة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="about-page">
      <Navbar />

      {/* 1. واجهة الصفحة (About Hero) - نصوص يسار وتكبير الارتفاع */}
      {/* 1. واجهة الصفحة (About Hero) */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHeroImg})` }}
      >
        <div className="about-hero-overlay">
          <div className="hero-content-left">
            <h1 className="reveal-immediate mobile-hide">
              A Journey of Passion <br /> Beyond Gifting
            </h1>
            <p className="reveal-immediate mobile-hide">
              “Gifts are memories and beautiful moments”
            </p>
          </div>
        </div>
      </section>

      {/* 2. 🌟 جربي تشيلي الـ div الخارجي وحطي الكلاس مباشرة هنا أو اتركيه كذا للتأكد من المشكلة */}
      <div className="reveal-section active">
        <AboutStory />
      </div>

      {/* 3. مميزات المتجر مع أنميشن الظهور */}
      <div className="reveal-section">
        <AboutValues />
      </div>

      {/* تغليف الفيديو للتحكم في طوله الإضافي وأنميشن ظهوره */}
      <div className="reveal-section extended-video-wrapper">
        <VideoSection
          mainTitle="Capturing the essence of elegance in every wrap"
          showBtn={false}
        />
      </div>

      {/* 4. الأرقام والإحصائيات مع أنميشن الظهور */}
      <div className="reveal-section">
        <AboutImpact />
      </div>

      {/* 5. آراء العملاء مع أنميشن الظهور */}
      <div className="reveal-section">
        <LovedByClients />
      </div>

      <Footer />

      {/* 🌟 الأزرار العائمة الذكية (اليمين واليسار) 🌟 */}

      {/* سهم الصعود لليمين - يظهر فقط عند النزول */}
      {/* سهم الصعود لليمين - يظهر فقط عند النزول */}
      <button
        className={`scroll-to-top-btn ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        {/* سهم علوي نحيف وأنيق للغاية */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>

      {/* أيقونة الواتساب الدائرية الثابتة لليسار */}
      <a
        href="https://wa.me/966XXXXXXXXX" // 👈 ريم، حطي رقم واتساب المتجر هنا مع المفتاح الدولي بدون أصفار
        className="whatsapp-float-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 448 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>
    </div>
  );
}
