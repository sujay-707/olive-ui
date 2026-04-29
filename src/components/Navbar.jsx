import { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <div className="navbar">

        {/* LEFT */}
        <div className="navbar-left">
          <img src={logo} alt="logo" />
        </div>

        {/* CENTER MENU (DESKTOP) */}
        <div className="navbar-center">
          <nav>
            <div className="nav-item">Solutions ▾</div>
            <div className="nav-item">Features</div>
            <div className="nav-item">Pricing</div>
            <div className="nav-item">Blog ▾</div>
            <div className="nav-item">Restaurants</div>
            <div className="nav-item">Food ▾</div>
          </nav>
        </div>

        {/* RIGHT */}
        <div className="navbar-right">

          <span className="signin">Sign in</span>

          <button className="cta">Get Olive →</button>

          {/* HAMBURGER */}
          <div
            className="hamburger"
            onClick={() => setOpen(!open)}
          >
            ☰
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <div>Solutions</div>
          <div>Features</div>
          <div>Pricing</div>
          <div>Blog</div>
          <div>Restaurants</div>
          <div>Food</div>
        </div>
      )}
    </div>
  );
}