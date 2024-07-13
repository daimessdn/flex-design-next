import Container from "@/components/Container";
import Row from "@/components/Row";
import Column from "@/components/Column";

import LoginSection from "@/sections/flexion/LoginSection";

export default function Login() {
  return (
    <section className="py-4">
      <Container>
        <Row>
          <Column>
            <LoginSection />
          </Column>
        </Row>
      </Container>
    </section>
  );
}
