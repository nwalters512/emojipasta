import React from "react";
import { useStyles } from "react-treat";
import classnames from "classnames";

import * as styleRefs from "./Input.treat";

interface InputProps {
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  icon,
}) => {
  const styles = useStyles(styleRefs);
  const hasIcon = !!icon;
  const IconComponent = icon;
  return (
    <div className={styles.container}>
      {hasIcon && (
        <div className={styles.iconContainer}>
          {icon}
          {/*<IconComponent className={styles.icon} size="1rem" />*/}
        </div>
      )}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={classnames(styles.input, { [styles.withIcon]: hasIcon })}
        placeholder={placeholder}
      />
    </div>
  );
};
