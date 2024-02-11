import { useEffect, useRef, useState } from "react";
import "./Nav.css";

function Nav() {
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sticky = stickyRef.current;

    if (sticky) {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;

        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      };

      document.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrolled]);

  return (
    <nav className="sticky top-0 bg-gray-900">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-white font-bold text-md nav-logo">
          fixitproservices
        </a>

        <div className="flex space-x-4">
          <a href="#services-section" className="text-white text-sm">
            Services
          </a>
          <a href="#contact-section" className="text-white text-sm">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
