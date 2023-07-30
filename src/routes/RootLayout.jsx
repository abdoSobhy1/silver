import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import ScrollToTop from "../Components/uiElements/ScrollToTop";

function RootLayout() {
  return (
    <>
      <Navigation />
      <ScrollToTop />
      <Outlet />

      <Footer />
    </>
  );
}

export default RootLayout;
