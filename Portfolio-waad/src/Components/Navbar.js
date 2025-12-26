import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { FiLogIn } from "react-icons/fi";

const Nav = () => {
  const [navbarBlur, setNavbarBlur] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));

    const scrollHandler = () => {
      setNavbarBlur(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const showMenu = () => {
    const bar = document.getElementsByClassName("bar");
    const ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");
    ham[0].classList.toggle("showNavbar");
  };

  const hideMenu = () => {
    const bar = document.getElementsByClassName("bar");
    const ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  };

  // ❌ Si l'utilisateur est connecté, ne rien afficher
  if (isAuthenticated) return null;

  return (
    <nav className={navbarBlur ? 'Navbar blur' : 'Navbar'}>
      <h1 title='Reload' onClick={() => window.location.reload()} className='Logo'>
        W R
      </h1>

      <div className='Hamburger' onClick={showMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>

      <ul className='NavbarLinks'>
        <li onClick={hideMenu}><Link to="/"><AiOutlineHome /> Home</Link></li>
        <li onClick={hideMenu}><Link to="/About"><BsPerson /> About</Link></li>
        <li onClick={hideMenu}><Link to="/Project"><BsCodeSlash /> Projects</Link></li>
        <li onClick={hideMenu}><Link to="/Resume"><CgFileDocument /> Resume</Link></li>
      </ul>

      <Link to="/Login" className="loginIcon">
        <FiLogIn size={24} color="#fff" title="Login" />
      </Link>
    </nav>
  );
};

export default Nav;
