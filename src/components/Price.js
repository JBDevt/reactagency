import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

const Container = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 0;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Price = () => {
  return (
    <Container>
      <PriceCard price="10" type="Basic" />
      <PriceCard price="20" type="Premium" />
      <PriceCard price="30" type="Advanced" />
    </Container>
  );
};

export default Price;
