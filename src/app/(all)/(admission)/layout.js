import Sidebar from '@/components/layouts/Sidebar';
import Image from 'next/image';

const dataList = [
  { title: 'Admission', url: '/admission' },
  { title: 'Courses', url: '/courses' },
  { title: 'Fee Details', url: '/fee-details' },
];

const Layout = ({ children }) => {
  return (
    <div className="bg-[#2d3e50] text-white border-b-4 border-primary">
      <div className="relative w-[100vw] h-[18vw]">
        <Image src="/images/about-banner.png" fill className="object-cover" alt="" />
      </div>
      <div className="flex gap-4 max-w-screen-xl m-auto py-12 pb-16 ">
        <div className="hidden md:block w-[15vw] mt-32 shrink-0">
          <Sidebar list={dataList} />
        </div>
        <div className="p-4 w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
