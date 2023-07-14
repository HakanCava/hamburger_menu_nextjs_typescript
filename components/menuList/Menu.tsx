import React from "react";
import "./menu.css";
import Link from "next/link";

// interface MenuProps {
//   menuOpen: boolean;
//   setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

const Menu: React.FC<Props> = ({ menuOpen, setMenuOpen }) => {
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div  className={'menu ' + (menuOpen && 'active')}>
      <ul className="ul">
        <li className="li" onClick={handleClick}>
          <Link className="link" href="/">Home</Link>
        </li>
        <li className="li" onClick={handleClick}>
          <Link className="link" href="/about">About</Link>
        </li>
        <li className="li" onClick={handleClick}>
          <Link className="link" href="/skills">Skills</Link>
        </li>
        <li className="li" onClick={handleClick}>
          <Link className="link" href="/projects">Projects</Link>
        </li>
        <li className="li" onClick={handleClick}>
          <Link className="link" href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
