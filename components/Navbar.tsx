import { useCallback, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    },[])

    return (
        <nav className="w-full fixed z-40">
            <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-opacity-90">
                <img className="h-8 lg:h-10" src="/images/logo.png" alt="" />
                <div className="flex-row ml-8 gap-7 hidden  lg:flex">
                    <NavbarItem label = "Home"/>
                    <NavbarItem label = "Anime"/>
                    <NavbarItem label = "Seasonal"/>
                    <NavbarItem label = "Popular"/>
                    <NavbarItem label = "My List"/>
                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown  className="text-white transition"/>
                    <MobileMenu  visible={showMobileMenu}/>
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
                        Search
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;