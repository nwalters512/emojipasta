import React from "react";
import Link from "next/link";
import { useStyles } from "react-treat";

import * as styleRefs from "./CardLink.treat";

interface CardLinkProps {
  children: React.ReactNode;
  href: string;
}

export const CardLink: React.FC<CardLinkProps> = ({ href, children }) => {
  const styles = useStyles(styleRefs);
  return (
    <Link href={href}>
      <a className={styles.base}>{children}</a>
    </Link>
  );
};
