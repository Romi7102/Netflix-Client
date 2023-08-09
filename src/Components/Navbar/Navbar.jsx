import React, { useCallback, useState } from "react";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";

import "./Navbar.css";
import logo from "../../assets/logo.svg";
import NavbarItem from "../NavbarItem/NavbarItem";
import MobileMenu from "../MobileMenu/MobileMenu";
import AccountMenu from "../AccountMenu/AccountMenu";
import avatar from "../../assets/avatar.png";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <>
      <nav className="w-full fixed z-40">
        <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">
          <img src={logo} className="h-4 lg:h-7" />
          <div className="flex-row ml-8 gap-7 hidden lg:flex">
            <NavbarItem label="Home" />
            <NavbarItem label="Series" />
            <NavbarItem label="Movies" />
            <NavbarItem label="My List" />
          </div>

          <div
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
          >
            <p className="text-white text-sm">Browse</p>
            <BsChevronDown className={`text-white transition ${showMobileMenu ? `rotate-180` : `rotate-0`}`} />
            <MobileMenu visible={showMobileMenu}></MobileMenu>
          </div>
          <div className="flex flex-row ml-auto gap-7 items-center">
            <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
              <BsSearch />
            </div>
            <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
              <BsBell />
            </div>

            <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
              <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                <img src={avatar} alt="" />
              </div>
              <BsChevronDown className={`text-white transition ${showAccountMenu ? `rotate-180` : `rotate-0`}`} />
              <AccountMenu visible={showAccountMenu}/>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
