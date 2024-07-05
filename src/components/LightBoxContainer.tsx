import React from "react";
import Button from "./Button";

type LightBoxContainerPropsType = {
  productImages: string[];
};

const LightBoxContainer = ({ productImages }: LightBoxContainerPropsType) => {
  const [selectedImage, setSelectedImage] = React.useState(0);

  return (
    <section className="lightbox container">
      <div className="lightbox__main-img">
        <img
          src={productImages[selectedImage]}
          alt="A big sneaker product image"
        />
      </div>

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
                  opacity: isSelected ? 0.5 : 1,
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
  );
};

export default LightBoxContainer;
