import React, { useState, useEffect, useRef } from "react";

// Images
import MyImage from "../../assets/kapil.png";
import Underline from "../../assets/nav_underline.svg";

// Styles
import "./NavbarStyles.css";

import { Disclosure, MenuButton } from "@headlessui/react";
import { Menu as HeadMenu } from "@headlessui/react";
import { X, Menu as LucideMenu, ArrowDownFromLine } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [status, setStatus] = useState("Home");
  const isUserScrolling = useRef(true);

  // To handle scroll and hide navbar only when user scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!isUserScrolling.current) {
        return;
      }
      
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      
      // Update active section based on scroll position
      updateActiveSection();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  
  // Function to determine which section is currently in view
  const updateActiveSection = () => {
    const sections = [
      { id: "hero", status: "Home" },
      { id: "about", status: "About" },
      { id: "skill", status: "Skills" },
      { id: "education", status: "Education" },
      { id: "projects", status: "Projects" }
    ];
    
    // Get the current scroll position plus a small offset
    const scrollPosition = window.scrollY + 200; // Add offset for better UX
    
    // Find the section that is currently visible
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setStatus(section.status);
          break;
        }
      }
    }
  };

  // Add wheel event listener to detect genuine user scrolling
  useEffect(() => {
    const handleWheel = () => {
      isUserScrolling.current = true;
    };
    
    window.addEventListener("wheel", handleWheel);
    
    // Initial check for active section
    updateActiveSection();
    
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);
  
  // Helper function for navbar menu navigation
  const scrollToSection = (id) => {
    isUserScrolling.current = false; 
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      isUserScrolling.current = true;
      setPrevScrollPos(window.scrollY);
    }, 1000); 
  };

  return (
    <Disclosure as="nav" className="bg-gray-800" style={{ border: 'none', outline: 'none' }}>
      <div
        className={`NavContainer ${
          visible ? "navbar-visible" : "navbar-hidden"
        }`}
        style={{ border: 'none', outline: 'none' }}
      >
        <div className="relative flex h-16 items-center justify-between" style={{ border: 'none', outline: 'none' }}>
          <div className="flex shrink-0 items-center">
            <div className="picture">
              <div className="text1 animatedText">
                <span>KAPIL_ADHIKARI,</span>
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <HeadMenu as="div" className={`menu ${isOpen ? "open" : ""}`} style={{ border: 'none', outline: 'none', boxShadow: 'none' }}>
            <MenuButton
              className="btn"
              onClick={() => scrollToSection("hero")}
              style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
            >
              <p
                onClick={() => {
                  setStatus("Home");
                }}
              >
                HOME
              </p>
              {status === "Home" ? <img src={Underline} className="button-image"/> : <></>}
            </MenuButton>
            <MenuButton
              className="btn"
              onClick={() => scrollToSection("about")}
              style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
            >
              <p
                onClick={() => {
                  setStatus("About");
                }}
              >
                ABOUT
              </p>
              {status === "About" ? <img src={Underline} className="button-image"/> : <></>}
            </MenuButton>
            <MenuButton
              className="btn"
              onClick={() => scrollToSection("skill")}
              style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
            >
              <p
                onClick={() => {
                  setStatus("Skills");
                }}
              >
                SKILLS
              </p>
              {status === "Skills" ? <img src={Underline} className="button-image"/> : <></>}
            </MenuButton>
            <MenuButton
              className="btn"
              onClick={() => scrollToSection("education")}
              style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
            >
              <p
                onClick={() => {
                  setStatus("Education");
                }}
              >
                EDUCATION
              </p>
              {status === "Education" ? <img src={Underline} className="button-image"/> : <></>}
            </MenuButton>
            <MenuButton
              className="btn"
              onClick={() => scrollToSection("projects")}
              style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
            >
              <p onClick={()=>{
                setStatus('Projects');
              }}>PROJECTS</p>
              {status === "Projects" ? <img src={Underline} className="button-image"/> : <></>}
            </MenuButton>
          </HeadMenu>

          {/* Mobile View */}
          <button className="mobileMenuBtn" onClick={() => setIsOpen(!isOpen)} style={{ border: 'none', outline: 'none' }}>
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
