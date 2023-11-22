import { Outlet } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
export default function CitiesLayout() {
  return (
    <>
        <Banner />
        <Outlet />
        <Footer />
    </>
  );
}
