import React from "react";
import { useStyles } from "react-treat";

import * as styleRefs from "./Button.treat";

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
interface ButtonProps {
  children: React.ReactNode;
  type: NativeButtonProps["type"];
  onClick: NativeButtonProps["onClick"];
}

export const Button: React.FC<ButtonProps> = ({ children, type, onClick }) => {
  const styles = useStyles(styleRefs);
  return (
    <button className={styles.base} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
