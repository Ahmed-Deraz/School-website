import React, { useState, useCallback, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { alumniData } from "../../assets/assets";
import "./Alumni.css";

const Alumni = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openVideo = useCallback((videoSrc, name) => {
    if (!videoSrc) return;
    setActiveVideo({ src: videoSrc, name });
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => setActiveVideo(null), 50);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isModalOpen) closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen, closeModal]);

  return (
    <>
      <Swiper
        tabIndex={0}
        slidesPerView={1}
        spaceBetween={150}
        centeredSlides={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 0.2,
          releaseOnEdges: true,
          thresholdDelta: 30,
          thresholdTime: 500,
        }}
        modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
        className="alumni-swiper"
        id="alumni"
      >
        {alumniData.map((item, index) => (
          <SwiperSlide className="alumni-slide" key={index}>
            <div className="alumni-card">
              
              {/* Image + centered play icon */}
              <div
                className="alumni-img-container"
                role={item.video ? "button" : undefined}
                tabIndex={item.video ? 0 : -1}
                aria-label={item.video ? `Play video for ${item.name}` : undefined}
                onClick={() => item.video && openVideo(item.video, item.name)}
                onKeyDown={(e) => {
                  if (item.video && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    openVideo(item.video, item.name);
                  }
                }}
              >
                <img className="alumni-img" src={item.img} alt={item.name} />

                {item.video && (
                  <div className="alumni-video-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" fill="#fff" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="alumni-content">
                <h3>{item.name}</h3>
                <p>{item.paragraph}</p>
                <span>{item.position}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Video Modal */}
      {isModalOpen && activeVideo && (
        <div
          className="video-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Video: ${activeVideo.name}`}
          onClick={closeModal}
        >
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="video-modal-close"
              onClick={closeModal}
              aria-label="Close video"
            >
              ×
            </button>

            <video
              key={activeVideo.src}
              src={activeVideo.src}
              controls
              autoPlay
              playsInline
              className="video-modal-player"
            />

            <div className="video-modal-caption">{activeVideo.name}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Alumni;
