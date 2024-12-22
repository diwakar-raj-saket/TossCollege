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
          TOSS College of Pharmacy was established in 2024 by the founder
          members of “Institute of rural adult education and primary medical
          training” a registered society with headquarters at Pratapgarh
          (UttarPradesh). Now managed, run and controlled by “Budha World
          Education Trust”, Tapowan, Gaya (UttarPradesh)”. The College has a
          unique culture of inclusiveness, diversity, personal and intellectual
          integrity and value-based education.
        </p>

        <p>
          BCP, because of its laudable contribution since 2024 in the fields of
          Pharmaceutical Sciences, stands today in the queue of leading
          institutions of the country. In a short period of about 38 years, TOSS
          College of Pharmacy has been able to transform itself into one of the
          leading Institutions in India and its presence is felt by its esteemed
          and successful alumni spread across the globe. The BCP concentrates on
          professional and market driven pharmacy courses, which equip the
          students to get employment in a highly competitive job market in the
          country and abroad.
        </p>

        <p>
          The College is a permanently affiliated unit of Pharmacy Council of
          India. TOSS College of Pharmacy is approved & recognised by various
          governing bodies, including University Grant Commission (UGC), Govt.
          of India, & Pharmacy Council of India (PCI), as well as by Ministry of
          Human Resources & Development (MHRD), Govt. of India, Health
          Department, Ministry of Health & Family Welfare, Govt. of
          UttarPradesh, & Department of Science & Technology, Govt. of
          UttarPradesh.
        </p>

        <p>
          The courses of study for Diploma (D.Pharm.) are prescribed by the PCI
          and Post-Graduation (Pharmaceutics) by AICTE and Magadh University.
          The registered Pharmacist have enormous opportunity in various Health
          centres, Hospitals and Medical Stores.
        </p>

        <p>
          The college curriculum has a strong focus on individual growth and the
          development of essential tools so that its students make a mark in the
          field of pharmaceutical and corporate world. These are firmly
          supported by extremely qualified and trained team of expert faculty
          and state-of-the-art academic & research facilities as required by
          AICTE & PCI.
        </p>

        <p>
          The college has also taken affirmative action in the context of
          community welfare activities through public awareness programmes in
          collaboration with the State Government, which includes child health
          and cleanliness of townships in the vicinity of the college campus,
          thereby creating an awareness among citizens regarding the need to be
          alert and sensitive to civic problems and finding solutions through
          participation.
        </p>

        <p>
          BCP is not only an academic institution but also a mission and a
          vision to make the country progressive and prosperous in all walks of
          life.
        </p>

        <p>
          I welcome all the aspirants who are in pursuit of quality education to
          join TOSS College of Pharmacy to serve the humankind and nation. The
          opportunities are wide open to those interested to pursue quality
          education in our academically as well as aesthetically ambiance.
        </p>

        <p className="font-semibold mt-8">Dr. Telat Omar</p>
        <p className="font-semibold">{`Hon’ble Chairman`}</p>
        <p>
          <span className="font-semibold">Advocate</span> Honorable High Court &
          Honorable Supreme Court of India
        </p>
        <p>
          <span className="font-semibold">Life Member</span> The Bar Association
          of India, New Delhi
        </p>
      </div>
    </>
  );
};

export default Chairman;
