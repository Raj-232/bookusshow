import { Button } from "@/components/ui/button";
import IconBars, { IconArrowRight, IconBxsUser, IconHeart, IconLocationDot, IconSearch } from "@/lib/Icons";
import Link from "next/link";
import React from "react";

const NavBar = () => {
    const routes = [
        { name: "LiveShows", route: "/" },
        { name: "Streams", route: "/" },
        { name: "Movies", route: "/" },
        { name: "Plays", route: "/" },
        { name: "Events", route: "/" },
        { name: "Sports", route: "/" },
        { name: "Activites", route: "/" },
    ]
    return (
        <nav className="w-full p-2 fixed bg-white z-10">
            <div className="w-full flex  items-center justify-between mx-auto px-4">
                <div>
                    <div className="text-secondary font-bold">BookUsNow</div>
                    <Button className="space-x-2  border-none p-0" variant="outline"><IconLocationDot /><div>Mumbai,inida</div> <IconArrowRight /></Button>
                </div>

                <div className="flex-col items-center hidden md:flex">
                    <div className="flex space-x-2 items-center p-2">
                        <Button className="space-x-2"><IconBars /><div>Categories</div></Button>
                        <div className="relative">
                            <input type="search" id="default-search" className="block  p-2 w-96 text-sm " placeholder="Search..." />
                            <div className="absolute inset-y-0 end-0 pr-2 flex items-center  pointer-events-none">
                                <IconSearch />
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        {
                            routes.map((item, index) => (
                                <div key={index}>
                                    <Link href={item.route} className="hover:text-secondary">{item.name}</Link>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className="flex space-x-4">
                    <Button className="space-x-2" variant="outline"><IconHeart /><div className="hidden sm:flex">Categories</div></Button>
                    <Button className="space-x-2" variant="outline"><IconBxsUser className="sm:hidden" /><div className="hidden sm:flex">Sign In</div></Button>
                </div>
            </div>

            <div className="flex space-x-4 md:hidden justify-center  overflow-x-scroll custom-scrollbar">
                {routes.map((item, index) => (
                    <div key={index}>
                        <Link href={item.route} className="hover:text-secondary">{item.name}</Link>
                    </div>
                ))}
            </div>



        </nav>
    );
};

export default NavBar;
