import { NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
    <div className="header-center">
      <NavLink to='/'>
        <img src={props.img} alt="Little Lemon Logo"></img>
      </NavLink>
      {props.children}
    </div>
    </header>
  )
}