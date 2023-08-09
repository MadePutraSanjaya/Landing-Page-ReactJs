import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  outline,
  className,
  ...buttonProps
}) => {

  const buttonClassName = `btn${
    outline
      ? " btn-outline btn-xs sm:btn-sm md:btn-md"
      : " btn-xs sm:btn-sm md:btn-md"
  }${className ? " " + className : " "}`;

  return (
    <div>
      <button className={buttonClassName} {...buttonProps}>
        {children}
      </button>
    </div>
  );
};
export default Button;
