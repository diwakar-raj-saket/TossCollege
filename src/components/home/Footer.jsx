import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaHome } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlinePhoneIphone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="text-white py-12 px-4 md:px-12 bg-[url('/images/footer-bg.png')]">
      <div className="flex flex-wrap gap-y-4">
        <div className="flex w-full md:w-1/2 lg:w-1/4">
          <Image
            src={"/images/main_logo.png"}
            width={200}
            height={150}
            className="size-30 md:size-48 m-auto"
            alt="logo"
          />
        </div>

        <div className="flex flex-col w-full md:w-1/2 lg:w-1/4">
          <div className="font-jura font-bold text-2xl">Important Links</div>
          <div className="flex items-start gap-4">
            <div className="select-none">________</div>
            <FaGraduationCap size={20} className="my-2" />
          </div>
          <div className="flex flex-col py-2 gap-2">
            <Link href="#">Latest News & Events</Link>
            <Link href="#">Institue Online Courses</Link>
            <Link href="#">Teaching Learningn Feedback and Analysis</Link>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/2 lg:w-1/4 px-4">
          <div className="font-jura font-bold text-2xl">Locate Us</div>
          <div className="flex items-start gap-4">
            <div className="select-none">________</div>
            <FaGraduationCap size={20} className="my-2" />
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46621.925069106655!2d72.56645900705246!3d23.05142284453246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8479e05f1901%3A0x16cbb1101e5729a3!2sMahatma%20Gandhi%20Sabarmati%20Ashram!5e0!3m2!1sen!2sin!4v1734809377397!5m2!1sen!2sin"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* <div className="font-jura font-bold text-2xl mt-4">Quick Links</div>
          <div className="flex flex-col py-2 gap-2">
            <Link href="#">News & Announcement</Link>
            <Link href="#">Gallery</Link>
          </div> */}
        </div>

        <div className="flex flex-col w-full md:w-1/2 lg:w-1/4">
          <div className="font-jura font-bold text-2xl">
            TOSS College of Pharmacy
          </div>
          <div className="flex items-start gap-4">
            <div className="select-none">________</div>
            <FaGraduationCap size={20} className="my-2" />
          </div>
          <div className="flex flex-col py-2 gap-4">
            <div className="flex items-center gap-2">
              <FaHome size={25} />
              <div>
                Pure Mustafa Road, Near Bypass highway, City, Pratapgarh U.P.
                230002
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlinePhoneIphone size={20} />
              <div>+91 79057 85175</div>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlinePhoneIphone size={20} />
              <div>+91 79851 27112</div>
            </div>
            {/* <div className="flex items-center gap-2">
              <MdOutlinePhoneIphone size={20} />
              <div>0612 350 4025</div>
            </div> */}
            <div className="flex items-center gap-2">
              <HiOutlineMail size={20} />
              <div>tcp@btedu.in</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
