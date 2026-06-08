import "./Categories.css";
import React, { useEffect, useRef } from "react";

// استدعاء الصور
import bday from "../../images/bday.jpg";
import baby from "../../images/baby.jpg";
import thanks from "../../images/thanks.jpg";
import eid from "../../images/eid.jpg";
import health from "../../images/health.jpg";
import home from "../../images/home.jpg";
import grad from "../../images/grad.jpg";
import wedding from "../../images/wedding.jpg";
import ramadan from "../../images/ramadan.jpg";

export default function Categories() {
  const containerRef = useRef(null);

  const occasions = [
    { name: "Birthday", img: bday },
    { name: "New Born", img: baby },
    { name: "Thank You", img: thanks },
    { name: "Happy Eid", img: eid },
    { name: "Get Well", img: health },
    { name: "New Home", img: home },
    { name: "Graduation", img: grad },
    { name: "Wedding", img: wedding },
    { name: "Ramadan", img: ramadan },
  ];

  useEffect(() => {
    const slider = containerRef.current;
    if (!slider) return;

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
    /* 🌟 أضفنا كلاس reveal هنا ليتناغم مع دالة السكرول في الصفحة الرئيسية */
    <section className="categories-section reveal">
      <h2 className="categories-main-title">Gifts for Every Occasion</h2>

      <div className="categories-container-fixed" ref={containerRef}>
        {occasions.map((item, index) => (
          <div
            className="category-item-fixed animated-card"
            key={index}
            style={{ "--index": index }} // تمرير الاندكس للـ CSS لتأخير الحركة
          >
            <div className="category-circle-fixed">
              <img src={item.img} alt={item.name} />
            </div>
            <p className="category-name-fixed">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
