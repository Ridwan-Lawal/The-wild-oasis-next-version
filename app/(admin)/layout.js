import Navbar from "@/app/_ui/Navbar";
import Sidebar from "@/app/_ui/Sidebar";

function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col flex-grow relative   h-screen border border-red-700">
        <div className="">
          <Navbar />
        </div>

        <div className="border-2 overflow-scroll border-blue-800 px-10 py-9 no-scrollbar flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;

// design the layout
