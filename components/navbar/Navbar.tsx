import React from "react";
import "./navbar.css";
import Link from "next/link";

// interface NavbarProps {
//   menuOpen: boolean;
//   setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

//! Props alan componentlerde React.FC yi belirtmemiz zorunlu

const Navbar: React.FC<Props> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <Link href="/" className="logo">
            LOGO
          </Link>
          <div className="mail">cavadev@gmail.com</div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
