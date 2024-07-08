import React from "react";
import { createPortal } from "react-dom";

import Button from "./Button";
import { formatNumber } from "@/utils/currencyFormat";
import { useProductCounter } from "@/contexts/ProductContext";

const cartModalDOM = document.querySelector("#cart-modal-root");

type CartPropsType = {
  isOpen: boolean;
  cartItemContent: {
    cartTitle: string;
    cartImg: string;
    cartContentTitle: string;
    cartPrice: number;
    CartDeleteIcon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    cartButtonText: string;
  };
  cartEmpty: string;
};

const Cart = ({ isOpen, cartItemContent, cartEmpty }: CartPropsType) => {
  const {
    cartTitle,
    cartContentTitle,
    cartPrice,
    cartImg,
    cartButtonText,
    CartDeleteIcon,
  } = cartItemContent;

  const { productCounter, resetProductCounter } = useProductCounter();

  const totalPrice = cartPrice * productCounter;

  return (
    <React.Fragment>
      {isOpen &&
        createPortal(
          <article className="cart">
            <header className="cart__header">
              <h3 className="cart__title">{cartTitle}</h3>
            </header>
            <main className="cart__main">
              {productCounter > 0 ? (
                <section>
                  <div className="cart__content">
                    <div className="cart__img">
                      <img src={cartImg} alt="Sneaker on top of others image" />
                    </div>

                    <div className="cart__content__text">
                      <p className="cart__content__text__title">
                        {cartContentTitle}
                      </p>
                      <p className="cart__content__text--price">
                        {formatNumber(cartPrice)} * {productCounter}
                        <span>{formatNumber(totalPrice)}</span>
                      </p>
                    </div>

                    <Button
                      className="cart--icon"
                      onClick={resetProductCounter}
                    >
                      <CartDeleteIcon />
                    </Button>
                  </div>

                  <Button className="cart--btn">{cartButtonText}</Button>
                </section>
              ) : (
                <p className="cart__empty">{cartEmpty}</p>
              )}
            </main>
          </article>,
          cartModalDOM!
        )}
    </React.Fragment>
  );
};

export default Cart;
