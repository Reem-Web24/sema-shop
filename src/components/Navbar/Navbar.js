import React, { useState, useEffect } from "react";
// 1. استيراد عنصر Link السحري لمنع الـ Refresh
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const { totalItemsCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة لفتح وإغلاق المنيو

  // 🌟 State جديدة للتحكم في أنيميشن نبضة العداد 🌟
  const [isPop, setIsPop] = useState(false);

  // مراقبة حركة التمرير لتثبيت النافبار
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🌟 تأثير يراقب عداد المنتجات وينشط الأنيميشن عند كل زيادة 🌟
  useEffect(() => {
    if (totalItemsCount === 0) return;

    setIsPop(true);
    const timer = setTimeout(() => setIsPop(false), 300); // يطفئ الأنميشن بعد 300 مللي ثانية ليصبح جاهزاً للنبضة التالية
    return () => clearTimeout(timer);
  }, [totalItemsCount]);

  // دالة لتبديل حالة المنيو
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`navbar ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "nav-hidden" : ""}`}
      >
        <div className="nav-container">
          {/* 1. الجانب الأيمن: زر المنيو */}
          <div className="nav-right-side">
            <button className="menu-toggle-btn" onClick={toggleMenu}>
              <span>menu</span>
              <div className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>

          {/* 2. المنتصف: الشعار مربوط بالرئيسية ذكياً */}
          <div className="nav-logo">
            <Link to="/">SEMA</Link>
          </div>

          {/* 3. الجانب الأيسر: الأيقونات */}
          <div className="nav-left-icons">
            <Link to="/login" className="nav-icon-link" aria-label="Account">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="user-svg-icon"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>

            {/* رابط السلة */}
            <Link
              to="/cart"
              className="nav-icon-link cart-icon-wrapper"
              aria-label="Cart"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>

              {/* 🌟 الشارة الآن تأخذ كلاس الأنميشن بشكل ديناميكي عند زيادة المنتجات 🌟 */}
              {totalItemsCount > 0 && (
                <span className={`cart-badge ${isPop ? "bump-animation" : ""}`}>
                  {totalItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* غطاء الخلفية الشفاف عند فتح المنيو */}
      <div
        className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>

      {/* المنيو الجانبي الفخم بالإنجليزية */}
      <div className={`side-drawer ${isMenuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <button className="close-drawer-btn" onClick={toggleMenu}>
            &times;
          </button>
          <h2 className="drawer-title">Main Menu</h2>
        </div>

        <ul className="drawer-links">
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About Us <span className="arrow">&gt;</span>
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={toggleMenu}>
              Shop Gifts <span className="arrow">&gt;</span>
            </Link>
          </li>
          <li>
            <Link to="/gifts-by-occasion" onClick={toggleMenu}>
              Occasions <span className="arrow">&gt;</span>
            </Link>
          </li>
          <li>
            <Link to="/gifts-by-type" onClick={toggleMenu}>
              Brand Partners <span className="arrow">&gt;</span>
            </Link>
          </li>
          <li>
            <Link to="/gift-printing" onClick={toggleMenu}>
              Contact Us <span className="arrow">&gt;</span>
            </Link>
          </li>
          <li>
            <Link to="/gift-wrapping" onClick={toggleMenu}>
              Privacy Policy <span className="arrow">&gt;</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
