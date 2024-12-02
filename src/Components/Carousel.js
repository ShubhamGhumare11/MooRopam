import React, { useRef, useState, useEffect } from "react";
import '../css/Carousel.css'; // Ensure you import your custom CSS file

const Carousel = () => {
  const carouselRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const slides = [
    {
      title: "Full Numerology Consultation",
      price: "$150",
      duration: "25-30 Days",
      description:
        "In-depth numerology consultation via telephone for NRIs. Detailed insights into your numerological profile and future predictions.",
      image:
        "https://via.placeholder.com/300x200.png?text=Consultation+Image+1",
    },
    {
      title: "Full Numerology Consultation",
      price: "$150",
      duration: "25-30 Days",
      description:
        "In-depth numerology consultation via telephone for NRIs. Detailed insights into your numerological profile and future predictions.",
      image:
        "https://via.placeholder.com/300x200.png?text=Consultation+Image+1",
    },
    {
      title: "Full Numerology Consultation",
      price: "$150",
      duration: "25-30 Days",
      description:
        "In-depth numerology consultation via telephone for NRIs. Detailed insights into your numerological profile and future predictions.",
      image:
        "https://via.placeholder.com/300x200.png?text=Consultation+Image+1",
    },
    {
      title: "Full Numerology Consultation",
      price: "$150",
      duration: "25-30 Days",
      description:
        "In-depth numerology consultation via telephone for NRIs. Detailed insights into your numerological profile and future predictions.",
      image:
        "https://via.placeholder.com/300x200.png?text=Consultation+Image+1",
    },
  ];


  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScrollLeft = scrollWidth - clientWidth;
    const scrollPercentage = (scrollLeft / maxScrollLeft) * 100;
    setScrollPercentage(scrollPercentage);
  };

  useEffect(() => {
    handleScroll(); // Initial call to set scroll percentage
    const handleResize = () => {
      handleScroll();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen bg-customLightOrange flex justify-center items-center p-10">
      <div className="px-5 mt-2 font-serif bg-cover bg-center">
        <div className="container mx-auto relative">
          <h2 className="py-4 text-md md:text-xl lg:text-3xl font-bold text-customBrown">
            Our Predictions
          </h2>

          <div className="relative">
            <div
              ref={carouselRef}
              className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
              onScroll={handleScroll}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="card-container flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col"
                >
                  <div className="card-image relative">
                    <img
                      src={slide.image}
                      alt={slide.title}
                    />
                  </div>
                  <div className="card-content flex-grow">
                    <h1 className="card-title text-xl mb-2 transition-colors duration-300 hover:text-customOrange cursor-pointer">
                      {slide.title}
                    </h1>
                    <p className="card-description text-gray-700 leading-relaxed">
                      {slide.description}
                    </p>
                    <p className="text-customOrange mt-4 italic border-l-4 border-customLightOrange pl-4">
                      "Add a relevant quote or additional information here."
                    </p>
                  </div>
                  <div className="card-footer">
                    <button className="button-primary">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-progress">
              <div
                className="carousel-progress-bar"
                style={{ width: `${scrollPercentage}%` }}
              />
            </div>
          </div>

          <div className="text-end mt-8">
            <button className="button-primary">
              See All Predictions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;