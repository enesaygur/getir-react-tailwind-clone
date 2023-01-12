import Slider from "react-slick";
import { useState, useEffect } from "react";
import Banners from "api/banners.json";
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"
export default function Campaigns() {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className="text-brand-color absolute top-1/2 -right-6 -traslate-y-1/2" onClick={onClick}>
        <IoIosArrowForward size={22}/>
      </button>
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className="text-brand-color absolute top-1/2 -left-6" onClick={onClick}>
      <IoIosArrowBack size={22}/>
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className="container mx-auto py-8">
        <h3 className="text-sm font-semibold mb-3">Kampanyalar</h3>
      <Slider {...settings} className="mx-auto">
        {banners.length &&
          banners.map((banner, index) => (
            <div key={banner.id}>
              <picture className="block px-8" >
                <img src={banner.image} alt={banner.id} className="rounded-lg" />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}
