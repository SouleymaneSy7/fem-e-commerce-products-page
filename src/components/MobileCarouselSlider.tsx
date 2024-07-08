import React from "react";
import Button from "./Button";
import { NextIcon, PreviousIcon } from "@/utils";

type MobileCarouselSliderPropsType = {
  sliderImages: string[];
};

const MobileCarouselSlider = ({
  sliderImages,
}: MobileCarouselSliderPropsType) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? sliderImages.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === sliderImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <section className="mobile-carousel">
      <div
        className="mobile-carousel--img"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {sliderImages.map((img, index) => (
          <React.Fragment key={index}>
            <img src={img} alt="Sneaker Product Image" />
          </React.Fragment>
        ))}
      </div>

      <div className="mobile-carousel__btn-container">
        <Button
          className="mobile-carousel--btn"
          onClick={prevSlide}
          title="Left Arrow"
        >
          <PreviousIcon />
        </Button>

        <Button
          className="mobile-carousel--btn"
          onClick={nextSlide}
          title="Right Arrow"
        >
          <NextIcon />
        </Button>
      </div>
    </section>
  );
};

export default MobileCarouselSlider;
