import { NavLink, Outlet } from "react-router";
import Text from "../components/text";
import Header from "../cor-components/header";
import MainContent from "../cor-components/main-content";
import Footer from "../cor-components/footer";

export default function LayoutMain() {
  return (
    <>
      <Header/>
      <MainContent>
        <Outlet />
      </MainContent>

      <Footer/>
    </>
  );
}