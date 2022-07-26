import React from "react";
import styles from "/styles/Button.module.css";

const Button = React.forwardRef((props, ref) => {
  const { leftIcon, rightIcon, ...rest } = props;
  if (props.href) {
    return <a {...props} />;
  }

  return <button ref={ref} id={styles.button} type="button" {...rest} >
    {leftIcon} <span>{props.children}</span> {rightIcon}
  </button >;
});

export default Button;
