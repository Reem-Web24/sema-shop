import React from "react";
import "./VideoSection.css";
import brandVideo from "../../images/video.mp4"; // مسار الفيديو الخاص بكِ

export default function VideoSection({
  subTitle,
  mainTitle,
  paragraph,
  btnText = "Gifts",
  showBtn = true,
}) {
  return (
    <section className="about-video-section">
      <div className="video-background-container">
        <video
          src={brandVideo}
          autoPlay
          loop
          muted
          playsInline
          className="bg-brand-video"
        />
        <div className="video-overlay-layer"></div>
      </div>

      <div className="video-text-content-block">
        {subTitle && (
          <span className="video-section-sub-title">{subTitle}</span>
        )}
        <h2 className="video-section-main-title">{mainTitle}</h2>
        <p className="video-section-paragraph">{paragraph}</p>

        {/* ظهور الزر بالاسم الجديد الجاي من الـ Props */}
        {showBtn && (
          <a href="/products" className="video-section-btn">
            {btnText}
          </a>
        )}
      </div>
    </section>
  );
}
