import Link from "next/link";

import Container from "@/components/Container";
import Row from "@/components/Row";
import Column from "@/components/Column";

import AdminSidebar from "@/components/flexion/AdminSidebar";

export default function DashboardPage() {
  return (
    <section>
      <Row>
        <AdminSidebar />

        <Column>Welcome to dashboard!</Column>
      </Row>
    </section>
  );
}
