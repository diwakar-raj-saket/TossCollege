import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap } from 'react-icons/fa';

const dataList = [
  {
    title: 'Department of Pharmaceutics',
    content:
      'Department of Pharmaceutics has been actively involved in improving the theoretical and practical skills of the students at the Diploma, Degree and Post Graduate level.',
  },
  // {
  //   title: 'Department of Pharmaceutics',
  //   content:
  //     'Department of Pharmaceutics has been actively involved in improving the theoretical and practical skills of the students at the Diploma, Degree and Post Graduate level.',
  // },
  // {
  //   title: 'Department of Pharmaceutics',
  //   content:
  //     'Department of Pharmaceutics has been actively involved in improving the theoretical and practical skills of the students at the Diploma, Degree and Post Graduate level.',
  // },
  // {
  //   title: 'Department of Pharmaceutics',
  //   content:
  //     'Department of Pharmaceutics has been actively involved in improving the theoretical and practical skills of the students at the Diploma, Degree and Post Graduate level.',
  // },
];

const Departments = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-4xl font-jura font-bold uppercase mt-8">Departments</h2>
        <FaGraduationCap size={30} className="text-primary my-4" />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-8 gap-y-32 m-auto py-20">
        {dataList.map((item, index) => (
          <div key={index} className="w-[90vw] md:w-64 bg-gray-100 rounded p-2 pt-16 py-8 relative border-b-8 border-primary">
            <div className="absolute -top-16 left-0 w-full">
              <div className="w-[80%] h-32 relative m-auto">
                <Image src="/images/dep1.png" fill className="object-cover" alt="" />
              </div>
            </div>
            <div className="text-xl text-center my-4 font-jura font-semibold">{item.title}</div>
            <div className="text-center">{item.content}</div>
            <div className="w-full absolute -bottom-6 left-0 flex justify-center">
              <Link href="#" className="bg-primary py-2 px-8 rounded text-white uppercase">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
