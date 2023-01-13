import Slider from "react-slick";
import { useState, useEffect } from "react";
import Banners from "api/banners.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useWindowWidth } from "@react-hook/window-size";
export default function Campaigns() {
  const windowWidth = useWindowWidth();
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className="text-brand-color absolute top-1/2 -right-4 -traslate-y-1/2"
        onClick={onClick}
      >
        <IoIosArrowForward size={22} />
      </button>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className="text-brand-color absolute top-1/2 -left-4"
        onClick={onClick}
      >
        <IoIosArrowBack size={22} />
      </button>
    );
  }
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    setBanners(Banners);
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows:false,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows:false,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows:false,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto md:pt-8">
      <h3 className="hidden md:block text-sm font-semibold mb-3">Kampanyalar</h3>
      <Slider {...settings} className="md:mx-2">
        {banners.length &&
          banners.map((banner, index) => (
            <div key={banner.id}>
              <picture className="block md:px-2">
                <img
                  src={banner.image}
                  alt={banner.id}
                  className="md:rounded-lg"
                />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}
