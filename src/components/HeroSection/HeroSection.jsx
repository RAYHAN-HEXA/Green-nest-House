import React, { useContext } from 'react';
import SectionBody from '../../wrappers/SectionBody';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DataContext } from '../../context/DataContext/DataContext';
import SwiperSlideChild from '../../wrappers/SwiperSlideChild';
import { Link } from 'react-router';

const HeroSection = () => {
  const { treesData } = useContext(DataContext);
  const homePageTrees = treesData.slice(0, 10);

  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={`${className} rounded-full`}
  //       style={{ ...style, display: 'block', background: 'gray' }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={`${className} rounded-full`}
  //       style={{ ...style, display: 'block', background: 'gray' }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <SectionBody>
      <div className="w-full mx-auto max-w-sm mb-5 sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl h-72 sm:h-80 md:h-96">
        <Slider {...settings}>
          {homePageTrees.map((tree) => (
            <SwiperSlideChild key={tree.plantId}>
              <div className="w-full mx-auto aspect-square overflow-hidden rounded-box max-w-xs sm:max-w-sm md:max-w-md">
                <img
                  src={tree.image}
                  alt={tree.plantName}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <Link to={`/plants/${tree.plantId}`}>
                <p className="text-primary font-bold my-3 text-center text-sm sm:text-base md:text-lg">
                  {tree.plantName}
                </p>
              </Link>
            </SwiperSlideChild>
          ))}
        </Slider>
      </div>
    </SectionBody>
  );
};

export default HeroSection;
