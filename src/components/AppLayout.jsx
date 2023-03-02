import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <main className="app flex flex-col bg-lightGrey1 text-textColor pb-10 min-h-screen">
      <Outlet />
    </main>
  );
};

export default AppLayout;
