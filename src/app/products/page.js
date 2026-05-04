"use client";

import { Suspense } from "react";
import ProductsPageContent from "./ProductsPageContent";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
      <ProductsPageContent />
    </Suspense>
  );
}
