import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
    <div className="header-center">
      <Link to='/'>
        <img src={props.img} alt="Little Lemon Logo"></img>
      </Link>
      {props.children}
    </div>
    </header>
  )
}