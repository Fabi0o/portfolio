import Nav from "./common/Nav";
import Footer from "./common/Footer";
const Layout = ({ children }: any) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
