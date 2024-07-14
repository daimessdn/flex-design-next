import Row from "@/components/Row";

import AdminSidebar from "@/components/flexion/AdminSidebar";
import CategoryDashboard from "@/sections/flexion/CategoryDashboard";

export default function ProductPage() {
  return (
    <section>
      <Row>
        <AdminSidebar />

        <CategoryDashboard />
      </Row>
    </section>
  );
}
