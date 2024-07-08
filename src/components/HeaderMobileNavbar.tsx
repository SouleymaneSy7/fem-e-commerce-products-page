import { createPortal } from "react-dom";

import Button from "./Button";
import NavList from "./NavList";
import { CloseIcon } from "@/utils";
import { navigationList } from "@/constants";

const mobileNavbarDom = document.querySelector("#mobile-navbar-root");

type HeaderMobileNavbarPropsTypes = {
  isOpen: boolean;
  handleIsOpen: () => void;
};

const HeaderMobileNavbar = ({
  isOpen,
  handleIsOpen,
}: HeaderMobileNavbarPropsTypes) => {
  return createPortal(
    <div
      className={
        isOpen ? "mobile-navbar-container active" : "mobile-navbar-container"
      }
    >
      <div className="mobile-navbar">
        <div className="mobile-navbar--close-btn">
          <Button onClick={handleIsOpen}>
            <CloseIcon />
          </Button>
        </div>

        <nav className="mobile-navbar__navigation">
          <ul>
            <NavList list={navigationList} />
          </ul>
        </nav>
      </div>
    </div>,
    mobileNavbarDom!
  );
};

export default HeaderMobileNavbar;
