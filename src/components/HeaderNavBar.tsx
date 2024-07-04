import React from "react";

import NavList from "./NavList";
import Button from "./Button";
import Cart from "./Cart";
import { cartContent, cartEmptyText, navigationList } from "@/constants";
import { CartIcon, LogoIcon, avatarImg } from "@/utils";
import { useProductCounter } from "@/contexts/ProductContext";

const HeaderNavBar = () => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const { productCounter } = useProductCounter();

  const handleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="navigation | container">
      <div className="navigation__left">
        <div>
          <Button className="navigation--hamburger-btn">
            <span className="hamburger-line__top"></span>
            <span className="hamburger-line__center"></span>
            <span className="hamburger-line__bottom"></span>
          </Button>

          <a href="#" className="navigation__logo">
            <LogoIcon />
          </a>
        </div>

        <ul className="navigation__list">
          <NavList list={navigationList} />
        </ul>
      </div>

      <div className="navigation__right">
        <div className="navigation__right__cart">
          <Button className="navigation__cart--btn" onClick={handleCartOpen}>
            <CartIcon />
            <div className="navigation__cart--counter"> {productCounter} </div>
          </Button>

          <Cart
            isOpen={isCartOpen}
            cartItemContent={cartContent}
            cartEmpty={cartEmptyText}
          />
        </div>

        <Button className="navigation__right__avatar">
          <img src={avatarImg} />
        </Button>
      </div>
    </nav>
  );
};

export default HeaderNavBar;
