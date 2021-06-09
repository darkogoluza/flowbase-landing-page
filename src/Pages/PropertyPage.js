import React from "react";
import Description from "../components/Description";
import Details from "../components/Details";
import Features from "../components/Features";
import Footer from "../components/Footer";
import PropertyContent from "../components/PropertyContent";
import PropertyHeader from "../components/PropertyHeader";
import { MainContent } from "./propertyPageElements";

const PropertyPage = () => {
  return (
    <>
      <PropertyHeader />
      <PropertyContent>
        <MainContent>
          <Details />
          <Description />
          <Features />
        </MainContent>
        <div>Kurac</div>
      </PropertyContent>
      <Footer />
    </>
  );
};

export default PropertyPage;
