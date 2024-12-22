'use client';
import Image from 'next/image';
import { FaGraduationCap } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const datalist = [
  { img: '/images/highlight.png' },
  { img: '/images/highlight.png' },
  { img: '/images/highlight.png' },
  { img: '/images/highlight.png' },
  { img: '/images/highlight.png' },
  { img: '/images/highlight.png' },
  { img: '/images/highlight.png' },
  { img: '/images/highlight.png' },
  { img: '/images/highlight.png' },
  { img: '/images/highlight.png' },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Highlights = () => {
  return (
    <div className="bg-[#86bc42] text-white py-12">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-4xl font-jura font-bold uppercase">Highlights</h2>
        <div className="flex items-start gap-4">
          <div className="mt-2 select-none">________</div>
          <FaGraduationCap size={30} className="my-4" />
          <div className="mt-2 select-none">________</div>
        </div>
      </div>

      <div className="w-80 md:w-auto mx-auto md:mx-20">
        <Carousel
          draggable={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          transitionDuration={2000}
          removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
        >
          {datalist.map((item, index) => (
            <div className="relative w-80 h-52 border-4 border-primary rounded-md" key={index}>
              <Image src={item.img} fill className="object-cover" alt="highlight" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Highlights;
