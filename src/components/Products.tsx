import Button from "./Button";
import { mainContent } from "@/constants";
import { formatNumber } from "@/utils/currencyFormat";
import { CartIcon, MinusIcon, PlusIcon } from "@/utils";
import { useProductCounter } from "@/contexts/ProductContext";

const Products = () => {
  const {
    subTitle,
    title,
    description,
    price,
    reduction,
    fullPrice,
    mainButtonText,
  } = mainContent;

  const { productCounter, increaseProductCounter, decreaseProductCounter } =
    useProductCounter();

  return (
    <section className="products">
      <h1 className="product__sub-title">{subTitle}</h1>
      <h2 className="product__title">{title}</h2>
      <p className="product__description">{description}</p>
      <div className="product__price">
        <div>
          <h3 className="product__price--reduct">{formatNumber(price)}</h3>
          <div className="product__price--percent">
            <span>{reduction}</span>
          </div>
        </div>

        <p className="product__price--full">{formatNumber(fullPrice)}</p>
      </div>

      <div className="product__flex">
        <div className="product__counter">
          <Button
            className="product__counter--minus"
            onClick={decreaseProductCounter}
            title="Decrease the product item"
          >
            <MinusIcon />
          </Button>

          <p className="product__counter--count">{productCounter}</p>

          <Button
            className="product__counter--plus"
            onClick={increaseProductCounter}
            title="Increase the product item"
          >
            <PlusIcon />
          </Button>
        </div>

        <Button className="product--btn">
          <CartIcon />
          {mainButtonText}
        </Button>
      </div>
    </section>
  );
};

export default Products;
