import Image from "next/image";

import styles from "./Article.module.css";

import { geist, ligaSans } from "@/config/fonts.config";
import ArrowRightIcon from "@/assets/svg/ArrowRightIcon";

export default function Article({ article, ...props }) {
  return (
    <div className={styles.article}>
      <div className="flex flex-col">
        <h2 className={geist.className + " font-semibold text-[1.5rem] mb-2"}>
          {article.title}
        </h2>

        <p className="mb-1">{article.author}</p>

        <p className="mb-4">{new Date(article.publishedDate).toDateString()}</p>
      </div>

      <span className={ligaSans.className + " mt-4 " + styles.link}>
        <a href={`/articles/${article.id}`}>Read more</a>

        <ArrowRightIcon className={styles.arrow} width={32} />
      </span>
    </div>
  );
}
