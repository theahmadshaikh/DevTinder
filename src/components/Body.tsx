import { Outlet } from "react-router";
import NavBar from "./NavBar";

const Body : React.FC = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  );
}
export default Body;