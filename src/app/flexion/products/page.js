import Row from "@/components/Row";

import AdminSidebar from "@/components/flexion/AdminSidebar";
import ProductDashboard from "@/sections/flexion/products/ProductDashboard";

export default function ProductPage() {
  return (
    <section>
      <Row>
        <AdminSidebar />

        <ProductDashboard />
      </Row>
    </section>
  );
}
