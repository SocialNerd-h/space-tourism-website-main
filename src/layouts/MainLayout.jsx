import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div className=" h-dvh overflow-auto flex flex-col lg:bg-techLg md:bg-techMd sm:bg-techSm bg-no-repeat bg-cover bg-fixed bg-center">
    <Navbar />
    <Outlet />
    </div>
  )
}

export default MainLayout