import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap } from 'react-icons/fa';

const dataList = [
  {
    img: '/images/notice-bg.png',
    title: 'D.Pharm',
    text: ' No. Of Seats : 60, Duration : 2 Years Fee Check the course fee section Placement facilities Renowned Pharmaceutical concern of India Visit for Campus Selection.',
    seats: 60,
    duration: '2 Years',
  },
  {
    img: '/images/notice-bg.png',
    title: 'B.Pharm',
    text: ' No. Of Seats : 60, Duration : 2 Years Fee Check the course fee section Placement facilities Renowned Pharmaceutical concern of India Visit for Campus Selection.',
    seats: 60,
    duration: '2 Years',
  },
  {
    img: '/images/notice-bg.png',
    title: 'B. Pharm (Lateral)',
    text: ' No. Of Seats : 60, Duration : 2 Years Fee Check the course fee section Placement facilities Renowned Pharmaceutical concern of India Visit for Campus Selection.',
    seats: 60,
    duration: '2 Years',
  },
  {
    img: '/images/notice-bg.png',
    title: 'M. Pharm (Pharmaceutics)',
    text: ' No. Of Seats : 60, Duration : 2 Years Fee Check the course fee section Placement facilities Renowned Pharmaceutical concern of India Visit for Campus Selection.',
    seats: 60,
    duration: '2 Years',
  },
];

const Courses = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-jura font-bold uppercase text-center">Courses at Bihar College of Pharmacy</h2>
        <div className="flex items-start gap-4">
          <div className="mt-2 select-none">________</div>
          <FaGraduationCap size={30} className="my-4" />
          <div className="mt-2 select-none">________</div>
        </div>
      </div>

      <div className="w-full flex flex-wrap gap-y-2">
        {dataList.map((item, index) => (
          <div className="w-full md:w-1/2 border-2 border-white p-2 flex flex-col items-center text-center" key={index}>
            <div className="relative w-full h-52">
              <Image src="/images/courses.png" fill className="object-cover" alt="" />
            </div>
            <div className="font-jura font-bold text-2xl py-4">{item.title}</div>
            <div>{item.text}</div>
            <table class="table-auto w-full border-collapse border border-gray-300 text-xs md:text-base text-center mt-4">
              <tbody>
                <tr>
                  <td class="border-2 border-gray-300 px-2 py-2">No. Of Seats</td>
                  <td class="border-2 border-gray-300 px-2 py-2">{item.seats}</td>
                </tr>
                <tr>
                  <td class="border-2 border-gray-300 px-2 py-2">Duration</td>
                  <td class="border-2 border-gray-300 px-2 py-2">{item.duration}</td>
                </tr>
                <tr>
                  <td class="border-2 border-gray-300 px-2 py-2">Fee</td>
                  <td class="border-2 border-gray-300 px-2 py-2">
                    Check the course{' '}
                    <Link href="/fee-details" className="underline">
                      fee section
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td class="border-2 border-gray-300 px-2 py-2">Placement facilities</td>
                  <td class="border-2 border-gray-300 px-2 py-2">Renowned Pharmaceutical concern of India Visit for Campus Selection.</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
