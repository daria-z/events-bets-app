const Layout = ({title, link, children}) => {
  return (
    <section className="flex flex-col items-center bg-white w-[80%] m-auto mt-[5%] rounded-xl p-5 md:max-w-3xl">
      <div className="flex justify-between items-center w-full mb-5">
        <h1 className="font-medium text-2xl">{title}</h1>
        {link}
      </div>
      {children}
    </section>
  );
};

export default Layout;
