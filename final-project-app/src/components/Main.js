export default function Main(props) {
  return (
    <main>
      <section>
        <div>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional <br/> recipes served with a modern twist.</p>
          <button>Reserve a Table</button>
        </div>
        <div>
          <img src={props.img} alt="Restaurant food"></img>
        </div>
      </section>
      <section>
        <div className="week-specials">
          <h2>This week specials!</h2>
          <button>Online Menu</button>
        </div>
        <div className="cards-container">

          <article className="Card">
            <img src={props.cardimg1}></img>
            <div className="dish-info">
              <div className="dish-title">
                <h4>Greek salad</h4>
                <p className="price">$12.99</p>
              </div>
              <div>
                <p className="dish-desc">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              </div>
              <div>
                <p className="order-delivery">Order a delivery</p>
              </div>
            </div>
          </article>

          <article className="Card">
          <img src={props.cardimg2}></img>
            <div className="dish-info">
              <div className="dish-title">
                <h4>Greek salad</h4>
                <p className="price">$12.99</p>
              </div>
              <div>
                <p className="dish-desc">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              </div>
              <div>
                <p className="order-delivery">Order a delivery</p>
              </div>
            </div>
          </article>

          <article className="Card">
          <img src={props.cardimg3}></img>
            <div className="dish-info">
              <div className="dish-title">
                <h4>Greek salad</h4>
                <p className="price">$12.99</p>
              </div>
              <div>
                <p className="dish-desc">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              </div>
              <div>
                <p className="order-delivery">Order a delivery</p>
              </div>
            </div>
          </article>

        </div>
      </section>
    </main>
  )
}