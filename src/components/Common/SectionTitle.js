import React, { useMemo } from "react";

function SectionTitle({ children, className }) {
  const classes = useMemo(() => {
    const defaultClassName = "primary-self-text text-lg font-title";

    if (className) {
      return defaultClassName + " " + className;
    }

    return defaultClassName;
  }, [className]);

  return <div className={classes}>{children}</div>;
}

export default SectionTitle;
