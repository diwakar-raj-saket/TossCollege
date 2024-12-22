import Copyright from '@/components/home/Copyright';
import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';
import Headline from '@/components/home/Headline';

const Layout = ({ children }) => {
  return (
    <>
      <Headline />
      <Header />
      <main>{children}</main>
      <Footer />
      <Copyright />
    </>
  );
};

export default Layout;
