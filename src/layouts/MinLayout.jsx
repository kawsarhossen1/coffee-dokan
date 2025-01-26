import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const MinLayout = () => {
  return (
    <div className="container mx-auto px-1">
      <Toaster />
      {/* Navbar */}
      <div className="h-16">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-232px)] py-12 2">
        {/* Dynamic section */}
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MinLayout;
