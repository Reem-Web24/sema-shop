import "./Home.css";
import React, { useEffect, useState } from "react";
import mobileHeroImg from "../../images/herophone.jpg";
// استدعاء المكونات الفرعية
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import VideoSection from "../../components/VideoSection/VideoSection";
import Categories from "../../components/Categories/Categories";
import Categoies2 from "../../components/Categoies2/Cat";
import Brand from "../../components/Brand/Brand";
import From from "../../components/From/From";
import BestSellers from "../../components/BestSellers/BestSellers";

// استدعاء صورة المؤسس
import who from "../../images/WHO.jpg";

export default function Home() {
  // State للتحكم بظهور مربع الخصم المنبثق
  const [showPopup, setShowPopup] = useState(false);

  // تأثير ظهور تنبيه الخصم بعد 5 ثوانٍ من دخول الموقع
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // تأثير ظهور العناصر بنعومة فائقة عند التمرير
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const handleScrollReveal = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 80;

      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScrollReveal);
    const timeoutId = setTimeout(handleScrollReveal, 100);

    return () => {
      window.removeEventListener("scroll", handleScrollReveal);
      clearTimeout(timeoutId);
    };
  }, []);

  // تأثير زر الصعود للأعلى والتحكم بظهوره
  useEffect(() => {
    const handleScroll = () => {
      const scrollBtn = document.querySelector(".scroll-top-btn");
      if (scrollBtn) {
        if (window.scrollY > 400) {
          scrollBtn.classList.add("show");
        } else {
          scrollBtn.classList.remove("show");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container">
      <Navbar />

      {/* 1. Hero Section الفخم */}
      <section className="hero-image-new">
        <img
          src={mobileHeroImg}
          alt="Mobile Hero"
          className="mobile-only-hero"
        />
        <div className="hero-overlay-new">
          <h1 className="hero-title-main">A Gift They'll Never Forget</h1>
          <p className="hero-subtitle-sub">
            Gifts for every moment <br />
            explore now
          </p>
          <a href="/shop" className="btn-gift-now">
            Gift Now
          </a>
          <button
            className="scroll-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑
          </button>
        </div>
      </section>

      {/* 2. الأقسام مباشرة تحت الـ Hero */}
      <div className="reveal-immediate">
        <Categories />
      </div>

      <div className="reveal-immediate">
        <Categoies2 />
      </div>

      <div>
        <BestSellers />
      </div>

      {/* 3. Video Section */}
      <div className="reveal">
        <VideoSection
          mainTitle="With every gift, a new story unfolds and a chance to create unforgettable memories"
          btnText="Gifts"
          showBtn={true}
        />
      </div>

      <div className="reveal">
        <Brand />
      </div>

      <div className="reveal">
        <From />
      </div>

      {/* 4. Founder Section */}
      <section className="founder-section reveal">
        <div className="founder-container">
          <div className="founder-image">
            <img src={who} alt="Founder" />
          </div>
          <div className="founder-content">
            <span className="subtitle">A Message From Us</span>
            <h2>Our Story</h2>
            <p className="quote">
              "Every gift we create is designed <br />
              to bring a smile, create a memory,
              <br /> and make every moment feel more special"
            </p>
            <p className="signature">— ROH</p>
          </div>
        </div>
      </section>

      <Footer />

      {/* أيقونة الواتساب العائمة على اليسار */}
      <a
        href="https://wa.me/966500000000"
        className="whatsapp-float-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="whatsapp-icon">
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825.737 5.48 2.025 7.788l-2.025 7.394 7.569-1.988c2.238 1.175 4.794 1.806 7.431 1.806 8.837 0 16-7.163 16-16s-7.163-16-16-16zm0 29.413c-2.381 0-4.7-.631-6.731-1.825l-.481-.281-4.488 1.175 1.2-4.381-.306-.488c-1.306-2.081-2-4.506-2-7.031 0-7.394 6.013-13.413 13.413-13.413s13.413 6.019 13.413 13.413c0 7.394-6.013 13.413-13.413 13.413zm7.381-10.088c-.406-.206-2.406-1.188-2.775-1.325-.375-.138-.65-.206-.925.206-.269.406-1.05 1.325-1.288 1.6-.231.269-.469.3-.875.094-.406-.206-1.719-.631-3.275-2.019-1.206-1.075-2.019-2.406-2.256-2.813-.231-.406-.025-.625.181-.831.181-.181.406-.475.606-.713.194-.238.263-.406.394-.675.131-.269.063-.5-.031-.706-.094-.206-.925-2.231-1.269-3.056-.338-.813-.675-.706-.925-.719-.238-.013-.513-.013-.788-.013-.269 0-.713.1-1.088.513-.375.406-1.431 1.4-1.431 3.413s1.463 3.95 1.663 4.219c.2.269 2.881 4.4 6.981 6.169.975.419 1.738.669 2.331.856 1 .319 1.913.275 2.631.169.8-.119 2.406-.981 2.744-1.931.338-.95.338-1.763.238-1.931-.1-.169-.369-.269-.775-.475z" />
        </svg>
      </a>

      {/* مربع تنبيه الخصم المنبثق الفاخر */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="discount-popup">
            <button
              className="popup-close-btn"
              onClick={() => setShowPopup(false)}
              aria-label="Close Popup"
            >
              &times;
            </button>
            <div className="popup-inner-content">
              <span className="popup-tag">Special Welcome</span>
              <h2>Enjoy 15% Off</h2>
              <p>
                On your first premium cake or custom luxury gift box. Use code
                at checkout:
              </p>
              <div className="promo-code-box">SEMA15</div>
              <button
                className="popup-action-btn"
                onClick={() => setShowPopup(false)}
              >
                Claim Offer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
