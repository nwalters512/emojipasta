import React from "react";
import { useStyles } from "react-treat";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

import * as styleRefs from "./NavBar.treat";

export const NavBar: React.FC = () => {
  const styles = useStyles(styleRefs);

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.title}>Emoji😩pasta🍝</a>
      </Link>
      <a
        href="https://github.com/nwalters512/emojipasta"
        className={styles.iconLink}
        title="View on GitHub"
      >
        <FiGithub size="1.5rem" />
      </a>
    </header>
  );
};
