export default function Header(props) {
  return (
    <header>
    <div className="header-center">
      <img src={props.img} alt="Little Lemon Logo"></img>
      {props.children}
    </div>
    </header>
  )
}