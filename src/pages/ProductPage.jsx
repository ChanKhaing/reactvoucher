import React from "react";

import Breadcrumb from "../components/BreadCrumb";
import ProductList from "../components/ProductList";
import { Container } from "../components/Container";

const ProductPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Product Module"} />
       
        <ProductList />
      </Container>
    </section>
  );
};

export default ProductPage;
