import { FaChartLine, FaGraduationCap, FaRegGem, FaRegStar } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-jura font-bold uppercase text-center">VISION & MISSION</h2>
        <div className="flex items-start gap-4">
          <div className="mt-2 select-none">________</div>
          <FaGraduationCap size={30} className="my-4" />
          <div className="mt-2 select-none">________</div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 p-2 px-4 border-2 border-primary">
          <div className="border-2 border-white rounded-md p-4 my-2">
            <FaRegGem size={50} />
          </div>
          <div className="text-center md:text-start">
            <div className="text-2xl font-jura font-bold">Vision</div>
            <div>{`“To serve as a leading world class institute in the areas of pharmaceutical education and research.” `}</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 p-2 px-4 border-2 border-primary">
          <div className="border-2 border-white rounded-md p-4 my-2">
            <FaChartLine size={50} />
          </div>
          <div className="text-center md:text-start">
            <div className="text-2xl font-jura font-bold">Mission</div>
            <div>
              <ul className="list-disc pl-5">
                <li>Imparting value-based quality education in the field of Pharmaceutical Sciences.</li>
                <li>Advancement of innovative research in pharmacy.</li>
                <li>
                  Research collaboration with the pharmaceutical industry for sustainable partnership and to produce cost-effective quality medicines.
                </li>
                <li>Render community pharmacy services especially to the rural areas.</li>
                <li>Impart continuing education programs to fulfill the needs of working professionals.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 p-2 px-4 border-2 border-primary">
          <div className="border-2 border-white rounded-md p-4 my-2">
            <FaRegStar size={50} />
          </div>
          <div className="text-center md:text-start">
            <div className="text-2xl font-jura font-bold">Objectives</div>
            <div>
              <ul class="list-disc pl-5">
                <li>Develop Bihar College of Pharmacy as a world-class pharmacy institute.</li>
                <li>Provide quality education with state-of-the-art research facility.</li>
                <li>Expand research activities in new avenues and emerging segments.</li>
                <li>Nurturing pharmacy youths with the modern advancement in the field of pharmacy technology.</li>
                <li>Modernize and upgrade the college infrastructure as per AICTE, PCI & NAAC.</li>
                <li>Conduct Diploma, Bachelor, and Post Graduate programs in Pharmaceutical Sciences.</li>
                <li>Establish linkages with alumni for institutional development.</li>
                <li>Explore national and international collaboration.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionMission;
