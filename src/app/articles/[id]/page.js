import Link from "next/link";

import Container from "@/components/Container";
import Row from "@/components/Row";
import Column from "@/components/Column";

import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";

import { geist, ligaSans } from "@/config/fonts.config";

import ArticleSection from "@/sections/ArticleSection";

import WhiteArrowLeftButton from "@/assets/svg/WhiteArrowLeftButton";

import { getArticleById } from "@/functions/articles.function";

export default async function ArticleDetailPage({ params, searchParams }) {
  console.log("detail article", params, searchParams);

  const { id } = params;
  const article = await getArticleById(id);

  return (
    <>
      <Navbar />

      <section className="bg-primary text-white py-8">
        <Container>
          <Row>
            <Column className={"justify-center gap-2"}>
              <Link href={"/articles"}>
                <h1 className={ligaSans.className + " text-[2rem]"}>
                  <WhiteArrowLeftButton width={48} />
                </h1>
              </Link>
            </Column>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Column>
              <h2 className={geist.className + " text-2xl mt-4"}>
                {article.title}
              </h2>

              <p>{new Date(article.publishedDate).toDateString()}</p>

              <div
                className="article"
                dangerouslySetInnerHTML={{
                  __html: article.body,
                }}
              ></div>
            </Column>
          </Row>
        </Container>
      </section>

      <div className="h-[15rem] pb-20 background-bottom-1 grayscale"></div>

      <Footer />
    </>
  );
}
