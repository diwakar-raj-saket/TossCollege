import Image from 'next/image';
import { FaGraduationCap } from 'react-icons/fa';

const Notices = () => {
  return (
    <div className="py-12">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-jura font-bold uppercase text-center">LATEST Notices / Announcements</h2>
        <div className="flex items-start gap-4">
          <div className="mt-2 select-none">________</div>
          <FaGraduationCap size={30} className="my-4" />
          <div className="mt-2 select-none">________</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-4">
        <div className="relative w-[95vw] h-[70vw] md:w-[40vw] md:h-[30vw]">
          <Image src="/images/notice1.png" fill className="object-cover w-full h-auto" alt="notice" />
        </div>
        <div className="relative w-[95vw] h-[70vw] md:w-[40vw] md:h-[30vw]">
          <Image src="/images/notice2.png" fill className="object-cover w-full h-auto" alt="notice" />
        </div>
      </div>
    </div>
  );
};

export default Notices;
