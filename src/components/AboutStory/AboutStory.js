import React, { useRef, useEffect } from "react";
import "./AboutStory.css";
import storyArtImg from "../../images/WHO.jpg";

export default function AboutStory() {
  const imageRef = useRef(null);
  const dotsRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const dotsElement = dotsRef.current;
    const sectionElement = sectionRef.current;

    if (!imageElement || !dotsElement || !sectionElement) return;

    const handleScroll = () => {
      const { top } = sectionElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight && top > -sectionElement.offsetHeight) {
        const speed = 0.15;
        const yPos = top * speed;
        dotsElement.style.transform = `translateY(${yPos}px)`;
      }
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = imageElement.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const moveX = (clientX - centerX) / (width / 2);
      const moveY = (clientY - centerY) / (height / 2);

      const rotateX = moveY * -8;
      const rotateY = moveX * 8;

      imageElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      imageElement.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    // تشغيل المستمعات (Listeners)
    window.addEventListener("scroll", handleScroll);
    imageElement.addEventListener("mousemove", handleMouseMove);
    imageElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      imageElement.removeEventListener("mousemove", handleMouseMove);
      imageElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} className="about-story-section reveal-section">
      <div className="story-component-container">
        {}
        <div className="story-image-wrapper">
          {}
          <div ref={dotsRef} className="parallax-dots"></div>

          <img
            ref={imageRef}
            src={storyArtImg}
            alt="The Art of SEMA curation desk"
            className="tilt-image"
          />
        </div>

        {}
        <div className="story-text-block">
          <span className="story-sub-header">Where it all began</span>
          <h2 className="story-main-title">The Art of SEMA</h2>
          <p className="story-paragraph">
            At SEMA, we believe that the most powerful emotions are often
            carried in the smallest details. Our story started with a vision to
            transform traditional gifting into a sensory art form.
          </p>
          <p className="story-paragraph">
            Every flower we pick and every ribbon we tie is a testament to our
            commitment to elegance. We don't just pack boxes; we curate memories
            that linger long after the occasion has passed.
          </p>
        </div>
      </div>
    </section>
  );
}
