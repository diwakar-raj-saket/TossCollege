import { FaGraduationCap } from 'react-icons/fa';

const AboutCollege = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-jura font-bold uppercase text-center">
          TOSS College of Pharmacy
        </h2>
        <div className="flex items-start gap-4">
          <div className="mt-2 select-none">________</div>
          <FaGraduationCap size={30} className="my-4" />
          <div className="mt-2 select-none">________</div>
        </div>
      </div>
      <div className="text-justify">
        TOSS College of Pharmacy established in the year of 2024 is one of the
        best institutions for the students who want to pursue an excellent
        career in Pharmacy . TOSS College of Pharmacy is permanentally
        affiliated to Pharmacy Council of India, New Delhi and also Approved by
        Board of Technical Education, Govt .of Uttar Pradesh.
      </div>
    </div>
  );
};

export default AboutCollege;
