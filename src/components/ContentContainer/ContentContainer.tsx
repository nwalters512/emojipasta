import React from "react";
import { useStyles } from "react-treat";

import * as styleRefs from "./ContentContainer.treat";

export const ContentContainer: React.FC = ({ children }) => {
  const styles = useStyles(styleRefs);
  return <div className={styles.base}>{children}</div>;
};
