type NavListPropsTypes = {
  list: {
    id: number;
    title: string;
  }[];
};

const NavList = ({ list }: NavListPropsTypes) => {
  return (
    <li>
      {list.map(({ id, title }) => (
        <a href="#" key={id}>
          {title}
        </a>
      ))}
    </li>
  );
};

export default NavList;
