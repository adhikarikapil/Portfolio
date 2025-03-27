import React, { useState, useEffect } from "react";

// Images
import MyImage from "../../assets/kapil.png";

// Styles
import "./NavbarStyles.css";

import { Disclosure, MenuButton } from "@headlessui/react";
import { Menu as HeadMenu } from "@headlessui/react";
import { X, Menu as LucideMenu, ArrowDownFromLine } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className={`NavContainer ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex shrink-0 items-center">
            <div className="picture">
              <div className="text1 animatedText">
                <span>KAPIL_ADHIKARI,</span>
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <HeadMenu as="div" className={`menu ${isOpen ? "open" : ""}`}>
            <MenuButton className="btn">ABOUT</MenuButton>
            <MenuButton className="btn">SKILLS</MenuButton>
            <MenuButton className="btn">EDUCATION</MenuButton>
            <MenuButton className="btn">PROJECTS</MenuButton>
          </HeadMenu>

          {/* Mobile View */}
          <button className="mobileMenuBtn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <LucideMenu size={28} />}
          </button>
          <div className="last">
            <img src={MyImage} id="pic" className="size-20 rounded-full"></img>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
        </div>
      </div>
    </Disclosure>
  );
}

export default Navbar;
