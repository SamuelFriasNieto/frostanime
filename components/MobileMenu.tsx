import React from "react";

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({visible}) => {
    if(!visible) {
        return null;
    }
    return (
        <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-pink-600 flex rounded-md">
            <div className="flex flex-col gap-4">
                <div className="px-3 text-center text-white hover:underline">
                    Home
                </div>
                <div className="px-3 text-center text-white hover:underline">
                    Anime
                </div>
                <div className="px-3 text-center text-white hover:underline">
                    Seasonal
                </div>
                <div className="px-3 text-center text-white hover:underline">
                    Popular
                </div>
                <div className="px-3 text-center text-white hover:underline">
                    My List
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;