import Image from "next/image";

import { ligaSans } from "@/config/fonts.config";

export default function Category({ ...props }) {
  return (
    <a href={props.link.href}>
      <div
        className={
          "bg-white2 text-black p-4 shadow-md rounded-sm flex flex-col justify-between"
        }
      >
        <h2 className={ligaSans.className + " text-[1.5rem] mb-2"}>
          {props.name}
        </h2>
        <Image
          className="self-center"
          src={props.imageUrl}
          alt="men's watch"
          width={400}
          height={400}
        />
      </div>
    </a>
  );
}
