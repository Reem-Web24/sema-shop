import "./Footer.css";
import React from "react";
import P1 from "../../images/flaw1.jpg";
import P2 from "../../images/ward.jpg";
import P3 from "../../images/f4.jpg";
import P4 from "../../images/flaw2.jpg";
import P5 from "../../images/flaw4.jpg";
import P6 from "../../images/flaw3.jpg";

export default function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="footer-newsletter">
          <h2>
            <i>Where every gift tells a story.</i>
          </h2>
          <p>Join our journey of elegance and care</p>
          <div className="social-links">
            <a
              href="https://wa.me/966XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* شريط الصور المتحرك بالكلاسات الفريدة الجديدة والمكرر بالكامل */}
        <div className="instagram-marquee-fixed">
          <div className="marquee-track-fixed">
            {/* المجموعة الأولى (6 صور) */}
            <img src={P1} alt="1" />
            <img src={P2} alt="2" />
            <img src={P3} alt="3" />
            <img src={P4} alt="4" />
            <img src={P5} alt="5" />
            <img src={P6} alt="6" />

            {/* المجموعة الثانية المكررة تماماً لضمان اندماج الحركة اللانهائية */}
            <img src={P1} alt="1-clone" />
            <img src={P2} alt="2-clone" />
            <img src={P3} alt="3-clone" />
            <img src={P4} alt="4-clone" />
            <img src={P5} alt="5-clone" />
            <img src={P6} alt="6-clone" />
          </div>
        </div>

        <div className="footer-text">Crafted with care, wrapped with love.</div>
      </footer>
      <div className="copyright">© SEMASHOP 2026</div>
    </>
  );
}
