"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const banners = [
  {
    id: 1,
    image: "/banner.jpg",
    alt: "Special Deals Banner 1",
  },
//   {
//     id: 2,
//     image: "https://via.placeholder.com/1200x400.png?text=Banner+2",
//     alt: "Special Deals Banner 2",
//   },
//   {
//     id: 3,
//     image: "https://via.placeholder.com/1200x400.png?text=Banner+3",
//     alt: "Special Deals Banner 3",
//   },
];

export default function Adds() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} style={{ width: "100%", height: "400px" }}>
            <img
              src={banner.image}
              alt={banner.alt}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
