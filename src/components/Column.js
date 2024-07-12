import React from "react";

export default function Column({ children, className = "", ...props }) {
  return <div className={"flex flex-col w-full " + className}>{children}</div>;
}
