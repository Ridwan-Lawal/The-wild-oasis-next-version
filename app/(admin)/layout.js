import Navbar from "@/app/_components/Navbar";
import Sidebar from "@/app/_components/Sidebar";

function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col flex-grow">
        <Navbar />
        <div className="border border-blue-800">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
