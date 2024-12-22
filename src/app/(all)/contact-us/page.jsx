import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaHome } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { IoIosCall } from 'react-icons/io';

const ContactUs = () => {
  return (
    <>
      <div className="relative w-[100vw] h-[18vw]">
        <Image src="/images/about-banner.png" fill className="object-cover" alt="" />
      </div>

      <div className="bg-secondary text-white py-12">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-jura font-bold uppercase">contact us</h2>
          <div className="flex items-start gap-4">
            <div className="mt-2 select-none">________</div>
            <FaGraduationCap size={30} className="my-4" />
            <div className="mt-2 select-none">________</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4">
          <div className="flex flex-col items-center text-center w-[90vw] md:w-[30%] bg-[#4b6925] py-6 px-8 m-auto md:m-0">
            <FaHome size={40} />
            <div className="font-jura font-bold text-2xl mt-4">Bihar College of Pharmacy</div>
            <div className="flex items-start justify-center gap-4">
              <div className="mt-2 select-none">________</div>
              <FaGraduationCap size={25} className="my-4" />
            </div>
            <div className="font-jura font-extrabold">
              New Bailey Road <br />
              Near Gola Road Petrol Pump <br /> Patna -801 503, Bihar
            </div>
          </div>

          <div className="flex flex-col items-center text-center w-[90vw] md:w-[30%] bg-[#4b6925] py-6 px-8 m-auto md:m-0">
            <IoIosCall size={40} />
            <div className="font-jura font-bold text-2xl mt-4">Contact Number</div>
            <div className="flex items-start justify-center gap-4">
              <div className="mt-2 select-none">________</div>
              <FaGraduationCap size={25} className="my-4" />
            </div>
            <div className="flex items-center gap-1">
              <IoIosCall size={20} />
              <p>0612 350 4025</p>
            </div>
            <div className="flex items-center gap-1">
              <IoIosCall size={20} />
              <p>0612 350 4025</p>
            </div>
            <div className="flex items-center gap-1">
              <IoIosCall size={20} />
              <p>0612 350 4025 (WhatsApp)</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center w-[90vw] md:w-[30%] bg-[#4b6925] py-6 px-8 m-auto md:m-0">
            <HiOutlineMail size={40} />
            <div className="font-jura font-bold text-2xl mt-4">E-mail Id</div>
            <div className="flex items-start justify-center gap-4">
              <div className="mt-2 select-none">________</div>
              <FaGraduationCap size={25} className="my-4" />
            </div>
            <div className="flex items-center gap-1">
              <HiOutlineMail size={20} />
              <Link href="emailto:info@biharcollegeofpharmacy.com">info@biharcollegeofpharmacy.com</Link>
            </div>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46621.925069106655!2d72.56645900705246!3d23.05142284453246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8479e05f1901%3A0x16cbb1101e5729a3!2sMahatma%20Gandhi%20Sabarmati%20Ashram!5e0!3m2!1sen!2sin!4v1734809377397!5m2!1sen!2sin"
        width="100%"
        height="300"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  );
};

export default ContactUs;
