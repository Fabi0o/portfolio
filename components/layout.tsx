import Nav from "./Nav";
const Layout = ({ children }: any) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
