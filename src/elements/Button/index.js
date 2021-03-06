import React from "react";

import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Button(props) {
  // todo implementasi proptype yg diterima berupa variabel
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-large");
  if (props.isSmall) className.push("btn-sm");
  if (props.hasShadow) className.push("btn-shadow");

  // todo function untuk menghandle onclick
  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  // todo ngecheck untuk disable atau loading
  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading}{" "}
        <>
          <span className="spinner-border spinner-border-sm mx-5"></span>
          <span className="sr-only">Loading...</span>
        </>
        : props.children
      </span>
    );
  }

  // todo rendereing components
  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  // todo jika tidak ada kondisi, maka akan menjalankan default button berikut
  return (
    <button
      to={props.href}
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  href: propTypes.string,
  target: propTypes.string,
  className: propTypes.string,
  isPrimary: propTypes.bool,
  isExternal: propTypes.bool,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
};
