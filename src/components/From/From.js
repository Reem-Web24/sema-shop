import "./From.css";
import React, { useEffect, useRef } from "react";

// استدعاء صور الأشخاص
import fatherImg from "../../images/Husband.jpg";
import motherImg from "../../images/wife.png";
import husbandImg from "../../images/father.png";
import mother from "../../images/mother.png";
import sister from "../../images/sister.png";
import brothr from "../../images/brother.png";

export default function TargetAudience() {
  const scrollRef = useRef(null);

  const targets = [
    { name: "Husband", img: fatherImg },
    { name: "Wife", img: motherImg },
    { name: "Father", img: husbandImg },
    { name: "Mother", img: mother },
    { name: "Sister", img: sister },
    { name: "Brother", img: brothr },
  ];

  useEffect(() => {
    const slider = scrollRef.current;
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
    <section className="target-section">
      {/* عنوان السيكشن يسار بنفس الخط الفاخر */}
      <h2 className="target-main-title">Who is it for</h2>

      {/* حاوية الصور المقوسة من الأعلى المحدثة بالكلاس الجديد لضمان التمرير والتحرك */}
      <div className="target-container-fixed" ref={scrollRef}>
        {targets.map((item, index) => (
          <div className="target-item-fixed" key={index}>
            <div className="target-arch-card-fixed">
              <img src={item.img} alt={item.name} />
            </div>
            <p className="target-name-fixed">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
