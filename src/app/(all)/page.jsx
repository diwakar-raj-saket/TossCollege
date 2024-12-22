import Banner from '@/components/home/Banner';
import Courses from '@/components/home/Courses';
import Departments from '@/components/home/Departments';
import Facts from '@/components/home/Facts';
import Highlights from '@/components/home/Highlights';
import Notices from '@/components/home/Notices';

export default function Home() {
  return (
    <>
      <Banner />
      <Departments />
      <Courses />
      <Facts />
      <Notices />
      <Highlights />
    </>
  );
}
