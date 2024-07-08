/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { createPortal } from "react-dom";
import { CloseIcon, PreviousIcon, NextIcon } from "@/utils";
import React from "react";
import Button from "./Button";

const lightBoxModalDOM = document.querySelector("#lightbox-modal-root");

const LightBoxModal = ({
  lightBoxIsOpen,
  closeLightBox,
  imageToShow,
  prevImg,
  nextImg,
  productImages,
  currentImage,
  goToImage,
}) => {
  return (
    <React.Fragment>
      {lightBoxIsOpen &&
        createPortal(
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
          </section>,
          lightBoxModalDOM!
        )}
    </React.Fragment>
  );
};

export default LightBoxModal;
