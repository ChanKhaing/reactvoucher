import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import { Container } from "../components/Container";


const SalePage = () => {
  return (
    <Container>
      <section>
        <Breadcrumb currentPageTitle={"Sale Module"} />
      </section>
    </Container>
  );
};

export default SalePage;
