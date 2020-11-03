import React from "react";
import classnames from "classnames";
import flattenChildren from "react-keyed-flatten-children";

import * as styleRefs from "./Stack.treat";
import { useStyles } from "react-treat";

interface StackProps {
  children: React.ReactNode;
}

export const Stack: React.FC<StackProps> = ({ children }) => {
  const flattenedChildren = flattenChildren(children);
  const styles = useStyles(styleRefs);
  return (
    <div>
      {flattenedChildren.map((child, index) => (
        <div
          key={(child as any).key || index}
          className={classnames(
            index !== flattenChildren.length - 1 ? styles.base : null
          )}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
