import "./brand.css";
import React, { useEffect, useRef } from "react";

// استدعاء لوجوهات الماركات (تأكدي من وجودها في مجلد images)
import levo from "../../images/brand2.jpg";
import hanoverian from "../../images/brand3.jpg";
import patchi from "../../images/brand4.jpg";
import prand4 from "../../images/brand5.jpg";
import prand5 from "../../images/brand1.jpg";

export default function Categoies2() {
  const brandRef = useRef(null);

  const brands = [
    { name: "Levo", img: levo },
    { name: "Hanoverian", img: hanoverian },
    { name: "Patchi", img: patchi },
    { name: "Hanoverian", img: prand4 },
    { name: "Patchi", img: prand5 },
  ];

  useEffect(() => {
    const slider = brandRef.current;
    if (!slider) return;

    // لضمان بدء شريط التمرير من اليسار تماماً عند التحميل
    slider.scrollLeft = 0;

    // ميزة السحب بالماوس الفاخرة
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="brands-section">
      {/* الهيدر الذي يجمع العنوان والزر الجديد */}
      <div className="brands-header">
        <h2 className="brands-main-title">Brands You'll Love</h2>
        <a href="/brands" className="brands-view-all-btn">
          View All
        </a>
      </div>

      {/* حاوية لوجوهات الماركات */}
      <div className="brands-container" ref={brandRef}>
        {brands.map((brand, index) => (
          <div className="brand-item" key={index}>
            <div className="brand-card">
              <img src={brand.img} alt={brand.name} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
