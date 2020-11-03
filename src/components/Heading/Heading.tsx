import React from "react";
import { useStyles } from "react-treat";

import * as styleRefs from "./Heading.treat";

interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const levelComponentMap = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
} as const;

export const Heading: React.FC<HeadingProps> = ({ children, level }) => {
  const Component = levelComponentMap[level];
  const styles = useStyles(styleRefs);
  return <Component className={styles.base}>{children}</Component>;
};
