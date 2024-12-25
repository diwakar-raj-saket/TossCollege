import { FaGraduationCap } from 'react-icons/fa';

const Chairman = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-jura font-bold uppercase text-center">
          Chairman Message
        </h2>
        <div className="flex items-start gap-4">
          <div className="mt-2 select-none">________</div>
          <FaGraduationCap size={30} className="my-4" />
          <div className="mt-2 select-none">________</div>
        </div>
      </div>

      <div className="text-justify">
        <p>
          It is with great pride that I introduce the TOSS College of Pharmacy,
          established in 2024, as a dedicated institution committed to
          excellence in pharmaceutical education and research.
        </p>

        <p>
          The college is a permanently affiliated unit of the Pharmacy Council
          of India (PCI) and is approved and recognized by esteemed governing
          bodies, including the Board of Technical Education, Government of
          Uttar Pradesh. We focus on offering professional, market-driven
          pharmacy courses designed to equip students for successful careers in
          the highly competitive job markets of India and abroad.
        </p>

        <p>
          Our curriculum for the Diploma in Pharmacy (D.Pharm.) is prescribed by
          the PCI and prepares registered pharmacists for diverse opportunities
          in health centers, hospitals, and medical stores. With a strong
          emphasis on individual growth, we aim to develop essential skills that
          enable our students to excel in the pharmaceutical and corporate
          sectors. This vision is supported by an exceptionally qualified and
          experienced team of faculty members, along with state-of-the-art
          academic and research facilities that meet the standards set by BTEUP
          and PCI.
        </p>

        <p>
          I extend a warm welcome to all aspirants seeking quality education in
          an enriching academic and aesthetic environment. Join TOSS College of
          Pharmacy and take a significant step towards serving humanity and the
          nation. Opportunities are vast for those who are determined to make a
          difference.
        </p>

        <p className="font-semibold mt-8">Dr. Telat Omar</p>
        <p className="font-semibold">{`Hon’ble Chairman`}</p>
        <p>
          <span className="font-semibold">TOSS Group of Institutions</span>
        </p>
      </div>
    </>
  );
};

export default Chairman;
