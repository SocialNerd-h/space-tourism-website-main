import HomeHero from "@/components/HomeHero"
import Navbar from "@/components/Navbar"

const HomePage = () => {
  return (
    <div className="h-lvh md:minHeightTablet:h-fit lg:minHeightDesktop:h-fit  sm:minHeightMobile:h-fit flex flex-col lg:bg-homeLg md:bg-homeMd sm:bg-homeSm bg-cover bg-center">
    <Navbar />
    <HomeHero />
  </div>
  )
}

export default HomePage