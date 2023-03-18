import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/About" className="nav-item">About</Link></li>
        <li><Link to="/Menu" className="nav-item">Menu</Link></li>
        <li><Link to="/Reservations" className="nav-item">Reservations</Link></li>
        <li><Link to="/OrderOnline" className="nav-item">Order Online</Link></li>
        <li><Link to="/Login" className="nav-item">Login</Link></li>
      </ul>
    </nav>
  )
}