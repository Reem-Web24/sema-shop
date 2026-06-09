import React, { useState, useEffect } from "react";
import "./LovedByClients.css";

const testimonialsData = [
  {
    id: 1,
    text: "The 'Eternal Bloom' set was more beautiful than I imagined. The attention to detail in the packaging is truly world-class.",
    author: "Sarah M.",
  },
  {
    id: 2,
    text: "Ordering from SEMA was an art experience. The VIP Trunk made my anniversary unforgettable. Highly recommended!",
    author: "Ahmed K.",
  },
  {
    id: 3,
    text: "Finally a boutique that understands luxury. The scent of the roses was incredible and lasted for days.",
    author: "Reem J.",
  },
  {
    id: 4,
    text: "Every detail feels curated with absolute perfection. From the rich essential oils to the pristine alignment.",
    author: "Laila H.",
  },
  {
    id: 5,
    text: "The presentation alone tells a story. SEMA has completely elevated the concept of luxury gifting.",
    author: "Nora A.",
  },
  {
    id: 6,
    text: "Unmatched aesthetic and sensory delight. My clients were completely blown away by the craftsmanship.",
    author: "Khalid W.",
  },
];

export default function LovedByClients() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        return (prevIndex + 1) % testimonialsData.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="clients-section">
      <div className="clients-header">
        <span className="clients-subtitle">THE SEMA EXPERIENCE</span>
        <h2 className="clients-main-title">Loved by Our Clients</h2>
      </div>

      <div className="slider-container">
        <div
          className="clients-slider-track"
          style={{
            transform: `translateX(-${activeIndex * (window.innerWidth <= 992 ? 100 : 33.333)}%)`,
          }}
        >
          {testimonialsData.map((item) => (
            <div key={item.id} className="testimonial-card-wrapper">
              <div className="testimonial-box">
                <span className="quote-mark">“</span>
                <p className="testimonial-text">{item.text}</p>

                <div className="testimonial-footer">
                  <div className="author-info-block">
                    <cite className="testimonial-author">{item.author}</cite>
                    <div className="rating-stars">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>

                  <div className="user-avatar-placeholder">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                        fill="#a1a1aa"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
