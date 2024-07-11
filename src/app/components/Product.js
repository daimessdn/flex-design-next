import React from "react";
import Image from "next/image";

import { ligaSans } from "../layout";

export default function Product({ ...props }) {
  return (
    <div
      className={"bg-white2 text-black p-4 shadow-md rounded-sm flex flex-col"}
    >
      <h2 className={ligaSans.className + " text-[1.5rem] mb-2"}>
        {props.name}
      </h2>
      <p className="mb-4">{props.description}</p>
      <Image
        className="self-center"
        src={props.imageUrl}
        alt="men's watch"
        width={400}
        height={400}
      />
      <span className={ligaSans.className + " mt-4"}>
        <a href={props.link.href}>{props.link.label}</a>
      </span>
    </div>
  );
}
