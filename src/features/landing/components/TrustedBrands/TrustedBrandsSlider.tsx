import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/free-mode";
import "swiper/swiper-bundle.css";

const brands = [
  { name: "Brave", logo: "/images/brave.png" },
  { name: "circle", logo: "/images/circle.png" },
  { name: "google", logo: "/images/google.png" },
  { name: "discord", logo: "/images/discord.png" },
  { name: "jump", logo: "/images/jump.png" },
  { name: "lollapalooza", logo: "/images/lollapalooza.png" },
  { name: "magicEden", logo: "/images/magicEden.png" },
];

export default function TrustedBrandsSlider() {
  return (
    <div className="trusted-brands-slider-wrapper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 7,
          },
        }}
        className="brands-swiper"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className="brand-slide">
            <img src={brand.logo} alt={brand.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
