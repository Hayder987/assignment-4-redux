import Footer from "@/commonComponents/Footer"
import NavBar from "@/commonComponents/NavBar"
import { Outlet } from "react-router"


const MainLayout = () => {
  return (
    <div>
        <NavBar></NavBar>
        <div className="min-h-[calc(100vh-140px)]">
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout