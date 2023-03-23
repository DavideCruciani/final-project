export default function Main(props) {
  return (
    <main>
      <section className="first-section">
        <div className="section-center">
          <div>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional <br/> recipes served with a modern twist.</p>
            <button>Reserve a Table</button>
          </div>
          <div>
            <img src={props.img} alt="Restaurant food"></img>
          </div>
        </div>
      </section>
      <section>
        <div className="section-center-c">
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
                <div className="delivery-container">
                  <p className="order-delivery">Order a delivery</p>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bike" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="5" cy="18" r="3"></circle><circle cx="19" cy="18" r="3"></circle><polyline points="12 19 12 15 9 12 14 8 16 11 19 11"></polyline><circle cx="17" cy="5" r="1"></circle></svg>
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
                <div className="delivery-container">
                  <p className="order-delivery">Order a delivery</p>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bike" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="5" cy="18" r="3"></circle><circle cx="19" cy="18" r="3"></circle><polyline points="12 19 12 15 9 12 14 8 16 11 19 11"></polyline><circle cx="17" cy="5" r="1"></circle></svg>
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
                <div className="delivery-container">
                  <p className="order-delivery">Order a delivery</p>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bike" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="5" cy="18" r="3"></circle><circle cx="19" cy="18" r="3"></circle><polyline points="12 19 12 15 9 12 14 8 16 11 19 11"></polyline><circle cx="17" cy="5" r="1"></circle></svg>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
      <section>
        <div className="section-center-c">
          <h2 className="testimonial-title">Testimonials</h2>
          <div className="review-card-container">
            <article className="review-card">
              <div>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
              <div className="photo-name">
                <div><img src={props.reviewimg1} className="reviewimg1"></img></div>
                <div><p>Michael</p></div>
              </div>
              <div>
                <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, veritatis iusto voluptatum ad labore sunt officiis nam excepturi non dignissimos, dolorum laborum quis, deserunt eum commodi. Quas, possimus! Totam, repellat."</p>
              </div>
            </article>
            <article className="review-card">
            <div>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
              <div className="photo-name">
                <div><img src={props.reviewimg2} className="reviewimg1"></img></div>
                <div><p>John</p></div>
              </div>
              <div>
                <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, veritatis iusto voluptatum ad labore sunt officiis nam excepturi non dignissimos, dolorum laborum quis, deserunt eum commodi. Quas, possimus! Totam, repellat."</p>
              </div>
            </article>
            <article className="review-card">
            <div>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
              <div className="photo-name">
                <div><img src={props.reviewimg3} className="reviewimg1"></img></div>
                <div><p>Carlo</p></div>
              </div>
              <div>
                <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, veritatis iusto voluptatum ad labore sunt officiis nam excepturi non dignissimos, dolorum laborum quis, deserunt eum commodi. Quas, possimus! Totam, repellat."</p>
              </div>
            </article>
            <article className="review-card">
            <div>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
              <div className="photo-name">
                <div><img src={props.reviewimg4} className="reviewimg1"></img></div>
                <div><p>James</p></div>
              </div>
              <div>
                <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, veritatis iusto voluptatum ad labore sunt officiis nam excepturi non dignissimos, dolorum laborum quis, deserunt eum commodi. Quas, possimus! Totam, repellat."</p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="last-section">
        <div className="section-center">
          <div className="about-info-container">
            <div>
              <h2>Little Lemon</h2>
              <h4>Chicago</h4>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam nemo necessitatibus porro officia ad impedit vero exercitationem illo, esse vel vitae error, culpa obcaecati dolorum quis aut unde veritatis. Ut vitae feugiat dui, eget sollicitudin sem</p>
            </div>
          </div>
          <div className="about-image-container">
            <img src={props.aboutimg1} className="about-image1"></img>
            <img src={props.aboutimg2} className="about-image2"></img>
          </div>
        </div>
      </section>
    </main>
  )
}