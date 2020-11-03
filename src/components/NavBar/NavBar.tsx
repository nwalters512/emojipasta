import React from "react";
import { useStyles } from "react-treat";
import Link from "next/link";

import * as styleRefs from "./NavBar.treat";

export const NavBar: React.FC = () => {
  const styles = useStyles(styleRefs);

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.title}>Emoji😩pasta🍝</a>
      </Link>
    </header>
  );
};
