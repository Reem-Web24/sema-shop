import "./BestSellers.css";
import React, { useEffect, useRef } from "react";

import flaw2 from "../../images/flaw2.jpg";
import fla3 from "../../images/flaw3.jpg";
import fla4 from "../../images/flaw4.jpg";
import fla1 from "../../images/flaw1.jpg";
import ward from "../../images/ward.jpg";
import care from "../../images/care.jpg";

export default function BestSellers() {
  const scrollRef = useRef(null);

  const products = [
    { name: "Elegant Flower Vase", price: "250 SAR", img: flaw2 },
    { name: "Pink Flower Vase", price: "200 SAR", img: fla3 },
    { name: "Baby Vase Set", price: "300 SAR", img: fla4 },
    { name: "Sweet Bouquet Set", price: "350 SAR", img: fla1 },
    { name: "Luxury Bouquet", price: "100 SAR", img: ward },
    { name: "Bloom & Diffuser", price: "450 SAR", img: care },
  ];

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    slider.scrollLeft = 0;

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

  const handleMobileCategoryChange = (e) => {
    const destination = e.target.value;
    if (destination) {
      window.location.href = destination;
    }
  };

  // دالة الإضافة الفورية للسلة مع التنبيه
  const handleAddToCart = (productName) => {
    console.log(`${productName} added to cart`);
    alert(`تم إضافة "${productName}" إلى السلة بنجاح! ✨`);
  };

  return (
    <section className="best-sellers-section">
      <div className="best-sellers-header">
        <h2 className="best-sellers-title">Best Sellers</h2>

        <a href="/shop" className="view-all-button desktop-view-all">
          View All
        </a>

        <div className="best-sellers-mobile-dropdown">
          <div className="select-wrapper">
            <select
              className="custom-best-sellers-select"
              onChange={handleMobileCategoryChange}
              defaultValue=""
            >
              <option value="" disabled>
                Explore
              </option>
              <option value="/shop">All Products</option>
              <option value="/shop?category=candles">Aromatic Candles</option>
              <option value="/shop?category=gifts">Gift Boxes</option>
              <option value="/shop?category=incense">Incense</option>
              <option value="/shop?category=bouquets">Bouquets</option>
            </select>
          </div>
        </div>
      </div>

      <div className="best-sellers-container" ref={scrollRef}>
        {products.map((item, index) => (
          <div
            className="product-card-item animated-product-card"
            key={index}
            style={{ "--index": index }}
          >
            <div className="product-image-wrapper">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="sema-card-details-wrapper">
              <div className="sema-text-block">
                <p className="product-name">{item.name}</p>
                <p className="product-price">{item.price}</p>
              </div>

              {/* زر علامة الزائد (+) الدائري */}
              <button
                className="sema-mobile-plus-btn"
                onClick={() => handleAddToCart(item.name)}
                aria-label="Add to cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
