import Navbar from "@/app/_ui/Navbar";
import Sidebar from "@/app/_ui/Sidebar";

function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col flex-grow">
        <Navbar />
        <div className="border border-blue-800 px-10 py-9">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
