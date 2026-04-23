// AutoSlidingMobileGallery.jsx
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./AutoSlider.css";


export default function AutoSlidingMobileGallery({
  images = sampleImages,
  autoSlideInterval = 3000,
}) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(nextSlide, autoSlideInterval);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">Sealed with Love💝</h2>
          <p className="gallery-subtitle">
            A collection of beautiful memories
          </p>
        </div>

        <div
          className="slider-wrapper"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="slider-inner">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[index].id}
                src={images[index].src}
                alt={images[index].title}
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="slide-image"
              />
            </AnimatePresence>

            <div className="gradient-overlay" />

            <div className="slide-title">
              <h3>{images[index].title}</h3>
            </div>

            <button className="nav-button left" onClick={prevSlide}>
              <ChevronLeft size={18} />
            </button>

            <button className="nav-button right" onClick={nextSlide}>
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="indicators">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`indicator ${i === index ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
