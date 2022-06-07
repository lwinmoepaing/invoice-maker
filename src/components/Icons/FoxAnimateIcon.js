import * as React from "react";

const FoxAnimateIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: "auto",
      background: "#fff",
      display: "block",
    }}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <g>
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="360 50 50;0 50 50"
        keyTimes="0;1"
        dur="1.408450704225352s"
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.5 0 0.5 1"
        begin="-0.16901408450704228s"
      />
      <circle
        cx={50}
        cy={50}
        r={39.891}
        stroke="#06f"
        strokeWidth={14.4}
        fill="none"
        strokeDasharray="0 300"
      >
        <animate
          attributeName="stroke-dasharray"
          values="15 300;66.16963190341706 300;15 300"
          keyTimes="0;0.5;1"
          dur="1.408450704225352s"
          repeatCount="indefinite"
          calcMode="linear"
          keySplines="0 0.4 0.6 1;0.4 0 1 0.6"
          begin="-0.07774647887323943s"
        />
      </circle>
      <circle
        cx={50}
        cy={50}
        r={39.891}
        stroke="#e6ebfe"
        strokeWidth={7.2}
        fill="none"
        strokeDasharray="0 300"
      >
        <animate
          attributeName="stroke-dasharray"
          values="15 300;66.16963190341706 300;15 300"
          keyTimes="0;0.5;1"
          dur="1.408450704225352s"
          repeatCount="indefinite"
          calcMode="linear"
          keySplines="0 0.4 0.6 1;0.4 0 1 0.6"
          begin="-0.07774647887323943s"
        />
      </circle>
      <circle
        cx={50}
        cy={50}
        r={32.771}
        stroke="#535353"
        fill="none"
        strokeDasharray="0 300"
      >
        <animate
          attributeName="stroke-dasharray"
          values="15 300;54.35925414521772 300;15 300"
          keyTimes="0;0.5;1"
          dur="1.408450704225352s"
          repeatCount="indefinite"
          calcMode="linear"
          keySplines="0 0.4 0.6 1;0.4 0 1 0.6"
          begin="-0.07774647887323943s"
        />
      </circle>
      <circle
        cx={50}
        cy={50}
        r={47.171}
        stroke="#535353"
        fill="none"
        strokeDasharray="0 300"
      >
        <animate
          attributeName="stroke-dasharray"
          values="15 300;79.24066796164888 300;15 300"
          keyTimes="0;0.5;1"
          dur="1.408450704225352s"
          repeatCount="indefinite"
          calcMode="linear"
          keySplines="0 0.4 0.6 1;0.4 0 1 0.6"
          begin="-0.07774647887323943s"
        />
      </circle>
    </g>
    <g>
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="360 50 50;0 50 50"
        keyTimes="0;1"
        dur="1.408450704225352s"
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.5 0 0.5 1"
      />
      <path
        fill="#06f"
        stroke="#535353"
        d="M97.2 50c0 6.1-1.2 12.2-3.5 17.8l-13.3-5.4c1.6-3.9 2.4-8.2 2.4-12.4"
      />
      <path
        fill="#e6ebfe"
        d="M93.6 49.9c0 1.2 0 2.4-.1 3.6l-.5 3.6c-.4 2-2.3 3.3-4.2 2.8l-.2-.1c-1.8-.5-3.1-2.3-2.7-3.9l.4-3c.1-1 .1-2 .1-3"
      />
      <path
        fill="#06f"
        stroke="#535353"
        d="M85.4 62.5c-.2.7-.5 1.4-.8 2.1-.3.7-.6 1.4-.9 2-.6 1.1-2 1.4-3.2.8-1.1-.7-1.7-2-1.2-2.9.3-.6.5-1.2.8-1.8.2-.6.6-1.2.7-1.8M94.5 65.7c-.3.9-.7 1.7-1 2.6-.4.8-.7 1.7-1.1 2.5-.7 1.4-2.3 1.9-3.4 1.3-1.1-.7-1.5-2.2-.9-3.4.4-.8.7-1.5 1-2.3.3-.8.7-1.5.9-2.3M85.6 67c0 .8.1 1.6.3 2.4.6-.5 1.1-1 1.4-1.7.2-.7.2-1.5-.1-2.2-.7-1.5-1.6.8-1.6 1.5z"
      />
    </g>
    <g>
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="360 50 50;0 50 50"
        keyTimes="0;1"
        dur="1.408450704225352s"
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.5 0 0.5 1"
        begin="-0.16901408450704228s"
      />
      <path
        fill="#e6ebfe"
        stroke="#535353"
        d="m91 33.6-10 4c-.4-1.2-1.1-2.4-1.7-3.5-.2-.5.3-1.1.9-1 3.4-.2 7.2-.2 10.8.5z"
      />
      <path
        fill="#e6ebfe"
        stroke="#535353"
        d="m83.2 36.7 10-4c-.6-1.7-1.5-3.3-2.3-4.9-.3-.7-1.2-.6-1.4.1-1.9 3.2-3.8 6.1-6.3 8.8z"
      />
      <path
        fill="#06f"
        stroke="#535353"
        d="M82.8 50.2c0-3.4-.5-6.8-1.5-10-.2-.8-.4-1.5-.3-2.3.1-.8.4-1.6.7-2.4.7-1.5 1.9-3.1 3.7-4 1.8-.9 3.7-1 5.6-.3.9.4 1.7 1 2.4 1.8s1.3 1.7 1.7 2.8c1.5 4.6 2.2 9.5 2.2 14.4"
      />
      <path
        fill="#e6ebfe"
        d="M86.4 50.3v-.9l-.1-.9-.1-1.9c0-.9.2-1.7.7-2.3.5-.7 1.3-1.2 2.3-1.4h.3c.9-.2 1.9 0 2.6.6.7.5 1.3 1.4 1.4 2.4l.2 2.2.1 1.1v1.1"
      />
      <path
        fill="#535353"
        d="M88.6 36.6c.1.3-.2.7-.6.8-.5.2-.9 0-1.1-.3-.1-.3.2-.7.6-.8.5-.2 1-.1 1.1.3z"
      />
      <path
        fill="none"
        stroke="#535353"
        d="M86 38.7c.2.6.8.9 1.4.7.6-.2.9-.9.6-2.1.3 1.2 1 1.7 1.6 1.5.6-.2.9-.8.8-1.4"
      />
      <path
        fill="#06f"
        stroke="#535353"
        d="m86.8 42.2.4 2.2c.1.4.1.7.2 1.1l.1 1.1c.1 1.2-.9 2.3-2.2 2.3-1.3 0-2.5-.8-2.5-1.9l-.1-1c0-.3-.1-.6-.2-1l-.3-1.9M96.2 40.2l.5 2.7c.1.5.2.9.2 1.4l.1 1.4c.1 1.5-.9 2.8-2.2 2.8-1.3 0-2.5-1.1-2.6-2.4l-.1-1.2c0-.4-.1-.8-.2-1.2l-.4-2.5"
      />
      <path
        fill="none"
        stroke="#535353"
        d="M90.9 36.4c1.1-1.1 2.7-1.6 4.3-1.9M91.6 37.5c1.3-.5 2.8-.8 4.2-.7M91.7 38.8c.2-.1.4-.1.7-.1 1.2-.1 2.5 0 3.8.3M85 38.4c-1.6-.1-3.1.6-4.6 1.2M85 39.5c-1.4.3-2.8.9-4 1.6M85.5 40.4c-.2 0-.4.1-.7.2-1.1.5-2.2 1.1-3.2 1.8"
      />
      <path
        fill="#ff7bac"
        d="M92.8 34.2c.1.3-.3.8-.9 1-.6.2-1.2.1-1.4-.2-.1-.3.3-.8.9-1 .7-.2 1.3-.1 1.4.2zM82.2 38.2c.1.3.7.3 1.3.1.6-.2 1-.6.9-.9-.1-.3-.7-.3-1.3-.1-.6.2-1.1.6-.9.9z"
      />
      <path
        fill="#535353"
        d="m90 35.7-.7.3-.3-.7c-.3-.9.1-1.9.9-2.3l.7-.3.3.7c.4 1 0 2-.9 2.3zM85.3 37.4l.7-.2-.2-.6c-.3-.8-1.3-1.2-2.1-.8l-.8.2.2.6c.4.8 1.3 1.1 2.2.8z"
      />
    </g>
  </svg>
);

export default FoxAnimateIcon;
