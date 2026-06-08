import React, { useState, useEffect } from "react";
import "./Shop.css";

// استيراد Link من react-router-dom للربط بين الصفحات
import { Link } from "react-router-dom";

// استدعاء المكونات الخاصة بكِ
import Navbar from "../../components/Navbar/Navbar";
import ShopFilters from "../../components/ShopFilters/ShopFilters";
import shopHeroImg from "../../images/pro.jpg";
import Footer from "../../components/Footer/Footer";
import LovedByClients from "../../components/LovedByClients/LovedByClients";

// استدعاء المكون المستورد الخاص بالتوست والـ Context
import { useCart } from "../../context/CartContext";
import CartToast from "../../components/CartToast/CartToast";

// صور المنتجات المستوردة
import flaw4 from "../../images/flaw4.jpg";
import flaw2 from "../../images/flaw2.jpg";
import perf from "../../images/perf.jpg";
import toy from "../../images/toy.jpg";
import ward from "../../images/ward.jpg";
import candles from "../../images/candles.jpg";
import perfume from "../../images/perfume.jpg";
import care from "../../images/care.jpg";
import f6 from "../../images/f6.jpg";
import f4 from "../../images/f4.jpg";
import flaw3 from "../../images/flaw3.jpg";
import perf2 from "../../images/perf2.jpg";

export default function Shop() {
  // استدعاء دالة الإضافة من الـ Context لتقوم بتحديث الـ States وتفعيل التوست تلقائياً
  const { addToCart } = useCart();

  const [activeFilter, setActiveFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("by");
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const productsData = [
    {
      id: 1,
      name: "Premium Incense Set",
      price: 120,
      category: "candles",
      image: perfume,
    },
    {
      id: 2,
      name: "Little Joy Gift Box",
      price: 350,
      category: "boxes",
      image: toy,
    },
    {
      id: 3,
      name: "Yellow Bliss Bouquet",
      price: 180,
      category: "Bouquets",
      image: flaw2,
    },
    {
      id: 4,
      name: "Vanilla Dream Candle",
      price: 95,
      category: "candles",
      image: perf2,
    },
    {
      id: 5,
      name: "Tiny Treasure Box",
      price: 280,
      category: "boxes",
      image: flaw4,
    },
    {
      id: 6,
      name: "Fresh Bloom Pot",
      price: 220,
      category: "Bouquets",
      image: ward,
    },
    {
      id: 7,
      name: "Royal Perfume",
      price: 110,
      category: "candles",
      image: perf,
    },
    {
      id: 8,
      name: "Self-Care Box",
      price: 400,
      category: "boxes",
      image: care,
    },
    {
      id: 9,
      name: "Cute Bloom Bouquet",
      price: 250,
      category: "Bouquets",
      image: f4,
    },
    {
      id: 10,
      name: "Harmony Gift Box",
      price: 130,
      category: "candles",
      image: candles,
    },
    {
      id: 11,
      name: "VIP Luxury Box",
      price: 320,
      category: "boxes",
      image: f6,
    },
    {
      id: 12,
      name: "Rosy Glow Bouquet",
      price: 195,
      category: "Bouquets",
      image: flaw3,
    },
  ];

  // مراقبة حركة التمرير لتثبيت النافبار وإظهار زر الصعود لأعلى
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 42) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // إعادة تصفير عدد المنتجات المعروضة عند تغيير الفلتر الرئيسي
  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter]);

  // 1. منطق الفلترة الذكي حسب القسم أولاً
  const filteredProducts = productsData.filter((product) => {
    if (activeFilter === "all") return true;
    return product.category === activeFilter;
  });

  // 2. منطق فرز الأسعار الذكي
  const sortedProducts = [...filteredProducts];
  if (sortOrder === "low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  // 3. قص مصفوفة العرض
  const displayedProducts = sortedProducts.slice(0, visibleCount);

  // دالة زيادة المنتجات
  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  // دالة الصعود لأعلى بسلاسة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="shop-page">
      <div className={`navbar-wrapper ${isScrolled ? "scrolled" : ""}`}>
        <Navbar />
      </div>

      <section
        className="shop-hero"
        style={{ backgroundImage: `url(${shopHeroImg})` }}
      >
        <div className="shop-hero-overlay">
          <div className="shop-hero-content">
            <h1 className="reveal-immediate">
              Send your gifts and flowers online with ease
            </h1>
          </div>
        </div>
      </section>

      <ShopFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {/* حاوية شبكة المنتجات */}
      <div className="products-grid-container">
        <div className="products-grid">
          {displayedProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-card"
              style={{
                "--card-index": index,
              }}
            >
              <div className="product-image-wrapper">
                <Link
                  to={`/product/${product.id}`}
                  className="product-img-link"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </Link>
                {/* زر الكمبيوتر العائم الافتراضي */}
                <button
                  className="add-to-cart-btn desktop-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>

              {/* الحاوية المحدثة لتنسيق تفاصيل المنتج مع زر الزائد الدائري */}
              <div className="product-info-wrapper">
                <div className="product-text-block">
                  <Link
                    to={`/product/${product.id}`}
                    className="product-title-link"
                  >
                    <h3 className="product-title">{product.name}</h3>
                  </Link>
                  <p className="product-price">{product.price} SAR</p>
                </div>

                {/* زر علامة الزائد الدائري الفاخر المخصص للجوال */}
                <button
                  className="shop-mobile-plus-btn"
                  onClick={() => addToCart(product)}
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

        {/* رسالة تظهر في حال كان القسم فارغاً */}
        {sortedProducts.length === 0 && (
          <p className="no-products-message">
            Soon, new collection will be available!
          </p>
        )}

        {/* زر "عرض المزيد" */}
        {sortedProducts.length > visibleCount && (
          <div className="view-more-container">
            <button className="view-more-btn" onClick={handleViewMore}>
              View More
            </button>
          </div>
        )}
      </div>

      {/* زر العودة لأعلى العائم والذكي */}
      <button
        className={`scroll-to-top-btn ${showScrollBtn ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>

      <LovedByClients />
      <Footer />

      {/* استدعاء التنبيه الجانبي الفخم ليعمل ديناميكياً هنا بناءً على الـ Context */}
      <CartToast />
    </div>
  );
}
