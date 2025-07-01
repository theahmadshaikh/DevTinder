import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Body : React.FC = () => {
  return (
    <>
    <NavBar/>
    <main className="min-h-screen">
      <Outlet/>
    </main>
    
    <Footer/>
    </>
  );
}
export default Body;