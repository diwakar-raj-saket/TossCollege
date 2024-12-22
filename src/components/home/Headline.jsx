import Link from 'next/link';
import { FaRupeeSign, FaWhatsapp } from 'react-icons/fa';
import { GiArchiveRegister } from 'react-icons/gi';
import { IoIosCall } from 'react-icons/io';

const Headline = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-evenly items-center gap-4 font-medium text-white bg-primary py-2 px-4">
      <div className="flex items-center gap-2">
        <IoIosCall size={20} />
        06123504025/26
      </div>
      <Link href="#">
        <div className="flex items-center gap-2">
          <FaWhatsapp size={20} />
          Whats App Channel
        </div>
      </Link>
      <div className="flex items-center justify-center md:justify-normal flex-wrap gap-4">
        <Link href="#">
          <div className="flex items-center gap-2">
            <GiArchiveRegister />
            Student Registration
          </div>
        </Link>
        <Link href="#">
          <div className="flex items-center gap-2">
            <FaRupeeSign />
            Fee Payment
          </div>
        </Link>
        <Link href="#" className="bg-gray-700 rounded py-2 px-4">
          Notices
        </Link>
      </div>
    </div>
  );
};

export default Headline;
