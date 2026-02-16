import React, { useEffect, useState } from 'react';

interface CarouselSlide {
    src: string;
    alt: string;
}

const slides: CarouselSlide[] = [
    { src: '/slider/data-labeling-services.webp', alt: 'Data Labeling Services' },
    { src: '/slider/text-annotation-1.webp', alt: 'Text Annotation' },
    { src: '/slider/1_4Hbm5BGrY-JvHyz4F0SK7Q.webp', alt: 'AI Annotation' },
    { src: '/slider/what-is-geospatial-annotation_.png', alt: 'Geospatial Annotation' },
];

const ImageCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    // Function to determine slide position class
    const getSlideClass = (index: number) => {
        const diff = (index - currentIndex + slides.length) % slides.length;

        if (diff === 0) return 'is-current';
        if (diff === 1) return 'is-after';
        if (diff === 2) return 'is-after-2';
        if (diff === slides.length - 1) return 'is-before';
        if (diff === slides.length - 2) return 'is-before-2';
        return '';
    };

    return (
        <div className="carousel-container">
            <div className="carousel-track">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${getSlideClass(index)}`}
                    >
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className="w-full h-full object-cover pointer-events-none"
                        />
                    </div>
                ))}
            </div>

            <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          height: 100%;
          perspective: 1500px;
          perspective-origin: center;
        }

        .carousel-track {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
          backface-visibility: hidden;
        }

        /* Current slide - center, full size, front */
        .carousel-slide.is-current {
          transform: translateX(0%) translateZ(0) scale(1);
          opacity: 1;
          z-index: 10;
        }

        /* Next slide - visible to the right and behind */
        .carousel-slide.is-after {
          transform: translateX(25%) translateZ(-150px) rotateY(-10deg) scale(0.92);
          opacity: 0.7;
          z-index: 8;
        }

        /* Second next slide - further right and further back */
        .carousel-slide.is-after-2 {
          transform: translateX(35%) translateZ(-300px) rotateY(-18deg) scale(0.85);
          opacity: 0.4;
          z-index: 6;
        }

        /* Previous slide - visible to the left and behind */
        .carousel-slide.is-before {
          transform: translateX(-25%) translateZ(-150px) rotateY(10deg) scale(0.92);
          opacity: 0.7;
          z-index: 8;
        }

        /* Second previous slide - further left and further back */
        .carousel-slide.is-before-2 {
          transform: translateX(-35%) translateZ(-300px) rotateY(18deg) scale(0.85);
          opacity: 0.4;
          z-index: 6;
        }

        /* All other slides - far back and hidden */
        .carousel-slide:not(.is-current):not(.is-after):not(.is-after-2):not(.is-before):not(.is-before-2) {
          transform: translateX(0%) translateZ(-500px) scale(0.6);
          opacity: 0;
          z-index: 0;
        }
      `}</style>
        </div>
    );
};

export default ImageCarousel;
