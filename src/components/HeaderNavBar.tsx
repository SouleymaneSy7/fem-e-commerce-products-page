import NavList from "./NavList";
import Button from "./Button";
import { Cart } from "./icons/Icons.component";
import { navigationList } from "@/constants";
import { LogoIcon, avatarImg } from "@/utils";

const HeaderNavBar = () => {
  return (
    <nav className="navigation | container">
      <div className="navigation__left">
        <div>
          <Button customClassName={"navigation--hamburger-btn"}>
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
        <Button>
          <Cart />
          <div className="cart--counter">12</div>
        </Button>

        <Button>
          <img src={avatarImg} />
        </Button>
      </div>
    </nav>
  );
};

export default HeaderNavBar;
