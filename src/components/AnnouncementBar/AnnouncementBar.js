import React from "react";
import "./AnnouncementBar.css";

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-track">
        {/* نكرر الجمل المكتوبة لضمان استمرار الحركة بسلاسة وبدون فراغات */}
        <span>✨ 30% off on your first order</span>
        <span>•</span>
        <span>Buy gifts worth 250 and get free delivery 🚚</span>
        <span>•</span>
        <span>✨ 30% off on your first order</span>
        <span>•</span>
        <span>Buy gifts worth 250 and get free delivery 🚚</span>
        <span>•</span>
        {/* تكرار إضافي لملء الشاشات الكبيرة */}
        <span>✨ 30% off on your first order</span>
        <span>•</span>
        <span>Buy gifts worth 250 and get free delivery 🚚</span>
      </div>
    </div>
  );
}
