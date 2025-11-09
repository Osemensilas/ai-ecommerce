"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";

const banners = [
  {
    id: 1,
    image: "/Ahiaglobal1.jpg",
    alt: "Special Deals Banner 1",
  },
  {
    id: 2,
    image: "AhiaGlobal2.png",
    alt: "Special Deals Banner 2",
  },
  {
    id: 3,
    image: "AhiaGlobal.png",
    alt: "Special Deals Banner 3",
  },
  {
    id: 0,
    image: "/ahiaglobal0.png",
    alt: "Special Deals Banner 1",
  },
];

export default function BannerCarousel() {
  const isMobile = useMediaQuery("(max-width:768px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 2,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
  };



  return (
    <div style={{ width: "100vw", margin: "0 auto" }}>
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} style={{ width: "100%", height: "300px" }}>
            <img
              src={banner.image}
              alt={banner.alt}
              style={{ width: "100%", height: isMobile ? "17vh" : "250px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );


}
