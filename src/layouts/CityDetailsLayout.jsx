import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
export default function CityDetailsLayout() {
  return (
    <>
        <Outlet />
        <Footer />
    </>
  );
}
