import React from "react";
import {
  Container,
  Banner,
  Gallery,
  GalleryImage,
} from "./propertyHouseElements";
import bannerImage from "../../assets/property_banner.png";
import houseGallery1 from "../../assets/house_gallery_1.png";
import houseGallery2 from "../../assets/house_gallery_2.png";
import houseGallery3 from "../../assets/house_gallery_3.png";
import houseGallery4 from "../../assets/house_gallery_4.png";
import houseGallery5 from "../../assets/house_gallery_5.png";
import houseGallery6 from "../../assets/house_gallery_6.png";
import houseGallery7 from "../../assets/house_gallery_7.png";

const PropertyHouse = () => {
  return (
    <>
      <Container>
        <Banner src={bannerImage} />
        <Gallery>
          <GalleryImage src={houseGallery1} />
          <GalleryImage src={houseGallery2} />
          <GalleryImage src={houseGallery3} />
          <GalleryImage src={houseGallery4} />
          <GalleryImage src={houseGallery5} />
          <GalleryImage src={houseGallery6} />
          <GalleryImage src={houseGallery7} />
        </Gallery>
      </Container>
    </>
  );
};

export default PropertyHouse;
