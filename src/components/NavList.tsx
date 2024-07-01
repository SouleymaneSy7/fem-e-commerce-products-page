import React from "react";

type NavListPropsTypes = {
  list: {
    id: number;
    linkTitle: string;
  }[];
};

const NavList = ({ list }: NavListPropsTypes) => {
  return (
    <React.Fragment>
      {list.map(({ id, linkTitle }) => (
        <li key={id}>
          <a href="#">{linkTitle}</a>
        </li>
      ))}
    </React.Fragment>
  );
};

export default NavList;
