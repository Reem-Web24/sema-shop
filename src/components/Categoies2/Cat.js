import "./Cat2.css";
import React, { useEffect, useRef } from "react";

// استدعاء الصور
import vase from "../../images/vase.jpg";
import Accessories from "../../images/Accessories.jpg";
import Perfumes from "../../images/Perfumes.jpg";
import Diffuser from "../../images/Diffuser.jpg";
import sec from "../../images/sec.jpg";
import palon from "../../images/palon.jpg";
import thanks from "../../images/thanks.jpg";
import wedding from "../../images/wedding.jpg";
import ramadan from "../../images/ramadan.jpg";

export default function Categories() {
  const containerRef = useRef(null);

  const occasions = [
    { name: "Glass Vase", img: vase },
    { name: "Accessories ", img: Accessories },
    { name: "Perfumes", img: Perfumes },
    { name: "Diffusers", img: Diffuser },
    { name: "Decorate", img: sec },
    { name: "palon", img: palon },
    { name: "thanks", img: thanks },
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
    /* 🌟 أضفنا كلاس reveal هنا ليتناغم مع دالة السكرول ويظهر العنوان فوراً */
    <section className="categories-section reveal">
      <h2 className="categories-main-title">Best Gifts Online</h2>

      <div className="categories-container-fixed" ref={containerRef}>
        {occasions.map((item, index) => (
          <div
            className="category-item-fixed animated-card"
            key={index}
            style={{ "--index": index }} // 🌟 تمرير الاندكس لحساب وقت الأنيميشن المتتابع
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
