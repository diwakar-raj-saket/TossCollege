import { FaGraduationCap } from 'react-icons/fa';

const AboutCollege = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-jura font-bold uppercase text-center">Bihar College of Pharmacy</h2>
        <div className="flex items-start gap-4">
          <div className="mt-2 select-none">________</div>
          <FaGraduationCap size={30} className="my-4" />
          <div className="mt-2 select-none">________</div>
        </div>
      </div>
      <div className="text-justify">
        Bihar College of Pharmacy established in the year of 1979 is one of the best institutions for the students who want to pursue an excellent
        career in Pharmacy . Bihar College of Pharmacy is permanentally affiliated to Magadh University, Bodh-Gaya, Pharmacy Council of India, New
        Delhi and also Approved by All India Council For Technical Education, Ministry of Human Resources Development, Govt. of India, New Delhi &
        Department of Health , Govt .of Bihar. The College has already been recognised under section 2(f) and 12(B) of the University Grant Commission
        Act, 1956 by the University Grant Commission, Government of India
      </div>
    </div>
  );
};

export default AboutCollege;
