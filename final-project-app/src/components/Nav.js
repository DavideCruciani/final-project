import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/" className="nav-item">Home</NavLink></li>
        <li><NavLink to="/About" className="nav-item">About</NavLink></li>
        <li><NavLink to="/Menu" className="nav-item">Menu</NavLink></li>
        <li><NavLink to="/Reservations" className="nav-item">Reservations</NavLink></li>
        <li><NavLink to="/OrderOnline" className="nav-item">Order Online</NavLink></li>
        <li><NavLink to="/Login" className="nav-item">Login</NavLink></li>
      </ul>
    </nav>
  )
}