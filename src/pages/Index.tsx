
import { Sidebar } from "@/components/layout/Sidebar";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Index;
