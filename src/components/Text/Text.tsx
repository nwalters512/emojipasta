import React from "react";
import { useStyles } from "react-treat";

import * as styleRefs from "./Text.treat";

interface TextProps {
  inline?: boolean;
}

export const Text: React.FC<TextProps> = ({ children, inline }) => {
  const Component = inline ? "span" : "p";
  const styles = useStyles(styleRefs);
  return <Component className={styles.base}>{children}</Component>;
};
