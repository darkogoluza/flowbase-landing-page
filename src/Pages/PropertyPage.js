import React from "react";
import Details from "../components/Details";
import Footer from "../components/Footer";
import PropertyContent from "../components/PropertyContent";
import PropertyHeader from "../components/PropertyHeader";

const PropertyPage = () => {
  return (
    <>
      <PropertyHeader />
      <PropertyContent>
        <div>
          <Details />
        </div>
        <div>Kurac</div>
      </PropertyContent>
      <Footer />
    </>
  );
};

export default PropertyPage;
