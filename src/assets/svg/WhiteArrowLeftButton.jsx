import * as React from "react";

function WhiteArrowLeftButton(props) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000"
      {...props}
    >
      <path
        d="M279 1102h-10.586l4.122-4.12c.39-.39.39-1.02 0-1.42a1.002 1.002 0 00-1.415 0l-5.657 5.66a.986.986 0 00-.259.88c-.055.31.02.64.259.88l5.657 5.66a1.002 1.002 0 101.415-1.42l-4.122-4.12H279c.552 0 1-.45 1-1s-.448-1-1-1zm-7 15c-7.732 0-14-6.27-14-14s6.268-14 14-14 14 6.27 14 14-6.268 14-14 14zm0-30c-8.836 0-16 7.16-16 16s7.164 16 16 16 16-7.16 16-16-7.164-16-16-16z"
        transform="translate(-256 -1087)"
        fill="#fff"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default WhiteArrowLeftButton;
