import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

export default function HeaderLayout() {
  return (
    <>
        <Header />
        <Outlet />
    </>
  );
}
