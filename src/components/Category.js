import Image from "next/image";

import styles from "./Category.module.css";

import { ligaSans } from "@/config/fonts.config";

export default function Category({ ...props }) {
  return (
    <a href={props.link.href}>
      <div className={styles.category}>
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
