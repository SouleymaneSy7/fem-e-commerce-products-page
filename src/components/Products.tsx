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
      <h2 className="product__sub-title">{subTitle}</h2>
      <h1 className="product__title">{title}</h1>
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

      <div className="product__counter">
        <Button
          customClassName={"product__counter--minus"}
          onClick={decreaseProductCounter}
        >
          <MinusIcon />
        </Button>

        <p className="product__counter--count">{productCounter}</p>

        <Button
          customClassName={"product__counter--plus"}
          onClick={increaseProductCounter}
        >
          <PlusIcon />
        </Button>
      </div>

      <Button customClassName={"product--btn"}>
        <CartIcon />
        {mainButtonText}
      </Button>
    </section>
  );
};

export default Products;
