export default function Header(props) {
  return (
    <header>
      <img src={props.img} alt="Little Lemon Logo"></img>
      {props.children}
    </header>
  )
}