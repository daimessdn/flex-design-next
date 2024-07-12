import Image from "next/image";

import styles from "./Product.module.css";

import { ligaSans } from "@/config/fonts.config";
import ArrowRightIcon from "@/assets/svg/ArrowRightIcon";

export default function Product({ ...props }) {
  return (
    <div className={styles.product}>
      <div className="flex flex-col">
        <h2 className={ligaSans.className + " text-[1.5rem] mb-2"}>
          {props.name}
        </h2>

        <p className="mb-4">{props.description}</p>
      </div>

      <Image
        className="self-center pointer-events-none select-none"
        src={props.imageUrl}
        alt={props.description}
        width={200}
        height={200}
      />

      <span className={ligaSans.className + " mt-4 " + styles.link}>
        <a href={props.link.href}>{props.link.label}</a>

        <ArrowRightIcon className={styles.arrow} width={32} />
      </span>
    </div>
  );
}
