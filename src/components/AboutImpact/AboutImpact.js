import React, { useEffect, useRef } from "react";
import "./AboutImpact.css";

import supportIcon from "../../images/a1.jpg";
import giftIcon from "../../images/a2.jpg";
import customersIcon from "../../images/a3.jpg";

export default function AboutImpact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const animateCounters = (element) => {
      const target = parseInt(element.getAttribute("data-target"), 10);
      const prefix = element.getAttribute("data-prefix") || "";
      const suffix = element.getAttribute("data-suffix") || "";
      const duration = 2000;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        const currentValue = Math.floor(progress * target);
        element.textContent = prefix + currentValue + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = prefix + target + suffix;
        }
      };

      requestAnimationFrame(updateCounter);
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll(".impact-item-box");
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("active-reveal");
            }, index * 200);
          });

          const numbers = entry.target.querySelectorAll(".impact-number-value");
          numbers.forEach((num) => animateCounters(num));

          observer.unobserve(entry.target);
        }
      });
    };

    const observerInstance = new IntersectionObserver(handleIntersect, {
      threshold: 0.15,
    });
    observerInstance.observe(sectionElement);

    return () => {
      if (sectionElement) observerInstance.unobserve(sectionElement);
    };
  }, []);

  return (
    <section ref={sectionRef} className="about-impact-section">
      <div className="impact-grid-container">
        {}
        <div className="impact-item-box">
          <img src={supportIcon} alt="Support" className="impact-pink-icon" />
          <div className="impact-text-sub-block">
            <h3 className="impact-number">
              <span
                className="impact-number-value"
                data-target="24"
                data-suffix="/7"
              >
                0
              </span>
            </h3>
            <p className="impact-text">Customer Support</p>
          </div>
        </div>

        {}
        <div className="impact-item-box">
          <img src={giftIcon} alt="Gifts" className="impact-pink-icon" />
          <div className="impact-text-sub-block">
            <h3 className="impact-number">
              <span
                className="impact-number-value"
                data-target="1000"
                data-prefix="+"
              >
                0
              </span>
            </h3>
            <p className="impact-text">Gifts Delivered</p>
          </div>
        </div>

        {}
        <div className="impact-item-box">
          <img
            src={customersIcon}
            alt="Customers"
            className="impact-pink-icon"
          />
          <div className="impact-text-sub-block">
            <h3 className="impact-number">
              <span
                className="impact-number-value"
                data-target="500"
                data-prefix="+"
              >
                0
              </span>
            </h3>
            <p className="impact-text">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
