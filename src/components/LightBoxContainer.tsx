/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React from "react";
import Button from "./Button";
import { CloseIcon, NextIcon, PreviousIcon } from "@/utils";

const LightBoxContainer = ({ productImages }) => {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [lightBoxIsOpen, setLightBoxIsOpen] = React.useState(false);
  const [imageToShow, setImageToShow] = React.useState();

  let currentImage = productImages.indexOf(imageToShow);

  const showLightBox = (img) => {
    setImageToShow(img);
    setLightBoxIsOpen(true);
  };

  const closeLightBox = () => {
    setLightBoxIsOpen(false);
  };

  const nextImg = () => {
    let nextImgToshow;

    currentImage === productImages.length - 1
      ? (nextImgToshow = productImages[(currentImage = 0)])
      : (nextImgToshow = productImages[currentImage + 1]);

    setImageToShow(nextImgToshow);
  };

  const prevImg = () => {
    let prevImgToshow;

    currentImage === 0
      ? (prevImgToshow =
          productImages[(currentImage = productImages.length - 1)])
      : (prevImgToshow = productImages[currentImage - 1]);

    setImageToShow(prevImgToshow);
  };

  const goToImage = (index) => {
    currentImage = productImages[index];
    setImageToShow(currentImage);
  };

  return (
    <React.Fragment>
      <section className="lightbox">
        <Button
          className="lightbox__main-img"
          onClick={() => showLightBox(productImages[selectedImage])}
        >
          <img
            src={productImages[selectedImage]}
            alt="A big sneaker product image"
          />
        </Button>

        <div className="lightbox__img-indicators">
          {productImages.map((imageSrc, index) => {
            const isSelected = selectedImage === index;

            return (
              <Button key={index} onClick={() => setSelectedImage(index)}>
                <img
                  src={imageSrc}
                  alt="Small sneaker image"
                  className="lightbox__img-indicators__selected-imgs"
                  style={{
                    opacity: isSelected ? 0.3 : 1,
                  }}
                />

                <span
                  className="lightbox--selected-ring-indicator"
                  style={{
                    opacity: isSelected ? 1 : 0,
                  }}
                ></span>
              </Button>
            );
          })}
        </div>
      </section>

      {lightBoxIsOpen ? (
        <section className="lightbox-modal-container">
          <div className="lightbox-flex">
            <Button className="lightbox-modal--close">
              <CloseIcon onClick={closeLightBox} />
            </Button>

            <div className="lightbox-modal">
              <img src={imageToShow} alt="Sneaker Image" />

              <div className="lightbox-modal__btn-container">
                <Button className="lightbox-modal--btn" onClick={prevImg}>
                  <PreviousIcon />
                </Button>

                <Button className="lightbox-modal--btn" onClick={nextImg}>
                  <NextIcon />
                </Button>
              </div>
            </div>

            <div className="lightbox-modal--indicators">
              {productImages.map((imgSrc, index) => {
                const isSelected = currentImage === index;

                return (
                  <Button key={index} onClick={() => goToImage(index)}>
                    <img
                      src={imgSrc}
                      alt="Small sneaker image"
                      className="lightbox__img-indicators__selected-imgs"
                      style={{
                        opacity: isSelected ? 0.3 : 1,
                      }}
                    />

                    <span
                      className="lightbox--selected-ring-indicator"
                      style={{
                        opacity: isSelected ? 1 : 0,
                      }}
                    ></span>
                  </Button>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default LightBoxContainer;
