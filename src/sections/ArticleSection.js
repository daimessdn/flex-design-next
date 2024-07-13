import Container from "@/components/Container";
import Row from "@/components/Row";
import Column from "@/components/Column";

import Article from "@/components/Article";

import { ligaSans } from "@/config/fonts.config";

import { getArticles } from "@/functions/articles.function";

export default async function ArticleSection() {
  const articles = await getArticles();

  return (
    <section className="py-8">
      <Container>
        <Row>
          <Column>
            <h2 className={ligaSans.className + " text-[1.5rem] mb-2"}>
              See latest articles
            </h2>
          </Column>
        </Row>

        <Row className="gap-4 mb-8">
          <p className="w-3/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            interdum, augue vel pulvinar egestas, tortor sem ultricies magna,
            vel pulvinar nibh enim ac tellus. Aliquam erat volutpat. In
            tincidunt consectetur.
          </p>
        </Row>

        <div className="grid grid-cols-3 gap-3">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
