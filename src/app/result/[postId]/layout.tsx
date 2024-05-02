const TopBar = () => {
  return <div className='text-3xl'>TopBar</div>;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};

export default Layout;
