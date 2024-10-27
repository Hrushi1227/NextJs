import { GlobalProvider } from "@/context/GlobalContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import "@/assets/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "photoswipe/dist/photoswipe.css";

export const metadata = {
  title: "Property plus",
  keywords: "rental property ",
  description: "find the perfect property",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html>
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default MainLayout;
