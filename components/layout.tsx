import Nav from "./Nav";
import Footer from "./Footer";
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
