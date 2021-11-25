import * as React from "react";
import "./codeTyping.css";

function Icon(props) {
  return (
    <svg
      width={100}
      height={42}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="right-arrow">
        <path
          d="M75.596 37.373l15.032-14.818L75.597 7.736l4.583-4.517 19.615 19.336L80.18 41.89l-4.583-4.517z"
          fill="#E6E6E6"
        />
        <path
          d="M75.596 34.503l15.032-14.818-15.032-14.82L80.18.35l19.615 19.336L80.18 39.02l-4.583-4.517z"
          fill="#65afff"
        />
      </g>
      <g id="dot">
        <path
          d="M38.78 16.61h-6.111v6.042h6.11V16.61zM63.344 16.61h-6.11v6.042h6.11V16.61zM51.062 16.61h-6.11v6.042h6.11V16.61z"
          fill="#E6E6E6"
        />
        <path
          d="M32.669 20.742h6.11V14.7h-6.11v6.042zM63.344 14.7h-6.11v6.042h6.11V14.7zm-18.393 6.042h6.11V14.7h-6.11v6.042z"
          fill="#65afff"
        />
      </g>
      <g id="left-arrow">
        <path
          d="M24.389 37.222L9.34 22.403 24.373 7.586 19.79 3.068.19 22.404l19.616 19.335 4.583-4.517z"
          fill="#E6E6E6"
        />
        <path
          d="M24.389 34.352L9.34 19.533 24.373 4.715 19.79.198.19 19.533l19.616 19.335 4.583-4.516z"
          fill="#65afff"
        />
      </g>
    </svg>
  );
}

export default Icon;
