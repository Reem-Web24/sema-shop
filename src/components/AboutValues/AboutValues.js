import React, { useEffect, useRef } from "react";
import "./AboutValues.css";

export default function AboutValues() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    // 1. تعريف دالة المعالجة عند التمرير بشكل مستقل لمنع تداخل الأقواس
    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll(".value-card");

          if (cards) {
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("fade-in-active");
              }, index * 200);
            });
          }
          // التوقف عن المراقبة بعد الظهور
          observer.unobserve(entry.target);
        }
      });
    };

    // 2. إعدادات الـ Observer
    const options = {
      threshold: 0.1,
    };

    // 3. إنشاء الـ Observer واستدعاؤه بأمان
    const observerInstance = new IntersectionObserver(handleIntersect, options);
    observerInstance.observe(sectionElement);

    // تنظيف الذاكرة عند مغادرة الصفحة
    return () => {
      if (sectionElement) {
        observerInstance.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="about-values-section">
      <h2 className="values-main-title">What Makes Us Unique</h2>

      <div className="values-grid-container">
        <div className="value-card">
          <div className="value-icon">✦</div>
          <h3 className="value-card-title">Exquisite Curation</h3>
          <p className="value-card-text">
            We source only the rarest seasonal blooms and premium luxury
            keepsakes for our trunks.
          </p>
        </div>

        <div className="value-card">
          <div className="value-icon">✦</div>
          <h3 className="value-card-title">Handcrafted with Love</h3>
          <p className="value-card-text">
            Every arrangement is hand-composed by our lead designers to ensure a
            personal touch.
          </p>
        </div>

        <div className="value-card">
          <div className="value-icon">✦</div>
          <h3 className="value-card-title">Next-Day Delivery</h3>
          <p className="value-card-text">
            Speed meets elegance. We ensure your emotions are delivered fresh
            and on time across the city.
          </p>
        </div>
      </div>
    </section>
  );
}
