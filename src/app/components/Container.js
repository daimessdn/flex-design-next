import React from "react";

export default function Container({ children, className, ...props }) {
  return (
    <div className={"flex flex-col max-w-[70%] mx-auto " + className}>
      {children}
    </div>
  );
}
