import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import VoucherList from "../components/VoucherList";
import { Container } from "../components/Container";

const VoucherPage = () => {
  return (
    <Container>
      <section>
        <Breadcrumb currentPageTitle={"Voucher Module"} />
        <VoucherList />
      </section>
    </Container>
  );
};

export default VoucherPage;
