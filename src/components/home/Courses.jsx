import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap } from 'react-icons/fa';
import { FaHandHoldingMedical } from 'react-icons/fa6';

const dataList = [
  {
    title: 'D. Pharm',
    content:
      'No. Of Seats : 60, Duration : 2 Years Fee Check the course fee section Placement facilities Renowned Pharmaceutical concern of India Visit for Campus Selection. ',
  },
  {
    title: 'D. Pharm',
    content:
      'No. Of Seats : 60, Duration : 2 Years Fee Check the course fee section Placement facilities Renowned Pharmaceutical concern of India Visit for Campus Selection. ',
  },
  {
    title: 'D. Pharm',
    content:
      'No. Of Seats : 60, Duration : 2 Years Fee Check the course fee section Placement facilities Renowned Pharmaceutical concern of India Visit for Campus Selection. ',
  },
  {
    title: 'D. Pharm',
    content:
      'No. Of Seats : 60, Duration : 2 Years Fee Check the course fee section Placement facilities Renowned Pharmaceutical concern of India Visit for Campus Selection. ',
  },
];

const Courses = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="relative h-96 md:h-auto md:w-1/2">
        <Image src="/images/courses.png" fill className="object-cover" alt="" />
      </div>
      <div className="md:w-1/2 bg-[#2d3e50] text-white pt-2 px-2 md:ps-8">
        <div className="text-4xl uppercase font-jura font-bold">
          Courses at <br /> Bihar College of Pharmacy
        </div>
        <div className="my-2">
          <FaGraduationCap size={30} />
        </div>
        <div className="w-full flex flex-col gap-2">
          {dataList.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-center items-center gap-4 bg-primary p-2 px-4">
              <div className="border-2 border-white rounded-md p-4 my-2">
                <FaHandHoldingMedical size={50} />
              </div>
              <div className="text-center md:text-start">
                <div className="text-2xl font-jura font-bold">{item.title}</div>
                <div>{item.content}</div>
              </div>
            </div>
          ))}
        </div>

        <Link href="#" className="inline-block bg-[#86bc42] uppercase py-3 px-8 mt-4">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Courses;
