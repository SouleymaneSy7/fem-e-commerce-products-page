import React from "react";

import NavList from "./NavList";
import Button from "./Button";
import Cart from "./Cart";
import { cartContent, cartEmptyText, navigationList } from "@/constants";
import { CartIcon, HamburgerMenuIcon, LogoIcon, avatarImg } from "@/utils";
import { useProductCounter } from "@/contexts/ProductContext";
import HeaderMobileNavbar from "./HeaderMobileNavbar";

const HeaderNavBar = () => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const { productCounter } = useProductCounter();

  const handleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleNavbarOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <nav className="navigation | container">
        <div className="navigation__left">
          <div>
            <Button
              className="navigation--hamburger-btn"
              onClick={handleNavbarOpen}
            >
              <HamburgerMenuIcon />
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
              {productCounter === 0 ? (
                ""
              ) : (
                <div className="navigation__cart--counter">
                  {productCounter}
                </div>
              )}
            </Button>
          </div>

          <Button className="navigation__right__avatar">
            <img src={avatarImg} />
          </Button>
        </div>

        <Cart
          isOpen={isCartOpen}
          cartItemContent={cartContent}
          cartEmpty={cartEmptyText}
        />
      </nav>

      <HeaderMobileNavbar isOpen={isOpen} handleIsOpen={handleNavbarOpen} />
    </React.Fragment>
  );
};

export default HeaderNavBar;
