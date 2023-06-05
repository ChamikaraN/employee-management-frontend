import React, { ReactNode, MouseEventHandler } from "react";
import "./style.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  variant?: string;
  onClickHandler: MouseEventHandler<HTMLButtonElement>; // Update type to React.MouseEventHandler<HTMLButtonElement>
  title: ReactNode;
  styles?: string;
  isDisable?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  variant,
  onClickHandler,
  title,
  styles = "",
  isDisable = false,
}) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    onClickHandler(e);
  };

  return (
    <button
      type={type}
      className={`btn btn-${variant}  ${styles}`}
      onClick={handleClick}
      disabled={isDisable}
    >
      {title}
    </button>
  );
};

export default Button;
