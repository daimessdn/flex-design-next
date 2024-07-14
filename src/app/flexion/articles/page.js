import Row from "@/components/Row";

import AdminSidebar from "@/components/flexion/AdminSidebar";
import ArticleDashboard from "@/sections/flexion/ArticleDashboard";

export default function DashboardPage() {
  return (
    <section>
      <Row>
        <AdminSidebar />

        <ArticleDashboard />
      </Row>
    </section>
  );
}
