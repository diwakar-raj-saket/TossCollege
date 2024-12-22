import { FaGraduationCap } from 'react-icons/fa';
import NumberIncrement from '../other/NumberIncrement';

const dataList = [
  { title: 'Faculty', value: '30', postfix: '+' },
  { title: 'Courses', value: '4', postfix: '' },
  { title: 'Students', value: '500', postfix: '+' },
  { title: 'Placement', value: '95', postfix: '%' },
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
            <div className="font-jura font-extrabold text-6xl mt-4">
              <NumberIncrement targetNumber={item.value} />
              {item.postfix ?? ''}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facts;
