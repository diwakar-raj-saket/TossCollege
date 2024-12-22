'use client';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div className="w-[100vw] h-[60vw] md:h-[30vw] relative">
          <Image src={'/images/slider1.png'} fill objectFit="cover" alt="" />
        </div>
        <div className="w-[100vw] h-[60vw] md:h-[30vw] relative">
          <Image src={'/images/slider1.png'} fill objectFit="cover" alt="" />
        </div>
        <div className="w-[100vw] h-[60vw] md:h-[30vw] relative">
          <Image src={'/images/slider1.png'} fill objectFit="cover" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
