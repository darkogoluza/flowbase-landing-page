import React from "react";
import ContentCard from "../components/ContentCard";
import Hero from "../components/Hero";
import image1 from "../assets/content_image.png";
import image2 from "../assets/content_image2.png";
import Callout from "../components/Callout";
import Quote from "../components/Quote";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";

const LandingPage = () => {
  return (
    <>
      <Hero />

      <ContentCard
        isLeft={true}
        title="You’re in good hands"
        description="Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque."
        img_src={image1}
      />
      <MainContent />
      <ContentCard
        isLeft={false}
        title="You’re in good hands"
        description="Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque."
        img_src={image2}
      />

      <Callout />
      <Quote />
      <Footer />
    </>
  );
};

export default LandingPage;
