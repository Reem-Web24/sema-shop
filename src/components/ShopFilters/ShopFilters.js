import React from "react";
import "./ShopFilters.css";

export default function ShopFilters({
  activeFilter,
  setActiveFilter,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className="shop-filters-container">
      {/* 1. قائمة الأزرار المفرودة للكمبيوتر (تختفي في الجوال) */}
      <div className="shop-filters-left desktop-only">
        <button
          className={activeFilter === "all" ? "active" : ""}
          onClick={() => setActiveFilter("all")}
        >
          All Products
        </button>
        <button
          className={activeFilter === "candles" ? "active" : ""}
          onClick={() => setActiveFilter("candles")}
        >
          Aromatic Candles
        </button>
        <button
          className={activeFilter === "boxes" ? "active" : ""}
          onClick={() => setActiveFilter("boxes")}
        >
          Gift Boxes
        </button>
        <button
          className={activeFilter === "Bouquets" ? "active" : ""}
          onClick={() => setActiveFilter("Bouquets")}
        >
          Bouquets
        </button>
      </div>

      {/* 2. حاوية الجوال الجديدة بالكامل (تختفي في الكمبيوتر وتظهر في الجوال تماماً مثل لقطة الشاشة 2026-06-08 105126.jpg) */}
      <div className="mobile-only-filters-wrapper">
        {/* قائمة الأقسام (Category) */}
        <div className="filter-dropdown-group">
          <label>Category</label>
          <div className="select-wrapper">
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
            >
              <option value="all">Our suggestion</option>{" "}
              {/* أو يمكنكِ كتابة All Products حسب رغبتكِ */}
              <option value="candles">Aromatic Candles</option>
              <option value="boxes">Gift Boxes</option>
              <option value="Bouquets">Bouquets</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. قائمة الترتيب الأيمن (تظل ثابتة في الكمبيوتر والجوال وستتحاذى تلقائياً بجانب الحاوية الجديدة) */}
      <div className="shop-filters-right">
        <div className="filter-dropdown-group">
          <label>Sorting</label>
          <div className="select-wrapper">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="by">By</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
