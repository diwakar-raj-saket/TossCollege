import { FaGraduationCap } from 'react-icons/fa';

const dataList = [
  { title: 'Faculty', content: '30+' },
  { title: 'Courses', content: '4' },
  { title: 'Students', content: '500+' },
  { title: 'Placement', content: '95 %' },
];

const Facts = () => {
  return (
    <div className="bg-[#86bc42] text-white py-12">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-4xl font-jura font-bold uppercase">IMPORTANT FACTS</h2>
        <FaGraduationCap size={30} className="my-4" />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4">
        {dataList.map((item, index) => (
          <div key={index} className="text-center w-[90vw] md:w-72 bg-[#4b6925] py-6 px-8 m-auto md:m-0">
            <div className="font-jura font-bold text-4xl">{item.title}</div>
            <div>
              <FaGraduationCap className="mx-auto" size={30} />
            </div>
            <div className="font-jura font-extrabold text-6xl mt-4">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facts;
