import Navbar from "@/components/Navbar"
import PlanetHero from "@/components/PlanetHero"

const PlanetPage = () => {
  return (
    <div className="h-lvh md:minHeightTablet:h-fit lg:minHeightDesktop:h-fit sm:minHeightMobile:h-fit sm:bg-destinationSm md:bg-destinationMd lg:bg-destinationLg bg-cover bg-center">
        <Navbar />
        <PlanetHero />
    </div>
  )
}

export default PlanetPage