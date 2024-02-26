import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
export default function WorkshopDetailsLayout() {
  return (
    <>
        <Outlet />
        <Footer />
    </>
  );
}
