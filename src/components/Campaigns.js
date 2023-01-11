import Slider from "react-slick";
import { useState, useEffect } from "react";
import Banners from "api/banners.json";
export default function Campaigns() {
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
    autoplaySpeed: 2000,
  };
  return (
    <div className="w-5/6 mx-auto py-8">
        <h3 className="text-sm font-semibold mb-3  ">Kampanyalar</h3>
      <Slider {...settings} className="w-11/12">
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
