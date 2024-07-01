import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type ButtonPropsType = {
  children: ReactNode;
  customClassName?: string | null;
} & ComponentPropsWithoutRef<"button">;

const Button = ({ children, customClassName, ...props }: ButtonPropsType) => {
  return (
    <button type="button" className={`button ${customClassName}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
