import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Logo from './images/Logo.svg';
import RestaurantFood from './images/restauranfood.jpg'
import FirstCardImg from './images/greeksalad.jpg'
import SecondCardImg from './images/bruchetta.svg'
import ThirdCardImg from './images/lemondessert.jpg'
import FirstReviewImg from './images/tyler.jpg'
import SecondReviewImg from './images/Trunks.PNG'
import ThirdReviewImg from './images/top.PNG'
import FourthReviewImg from './images/cr7.jpg'
import FirstAboutImg from './images/MA1.jpg'
import SecondAboutImg from './images/MA2.jpg'
import FooterImg from './images/footer-logo.png'


function App() {
  return (
    <>
      <Header img={Logo}>
        <Nav/>
      </Header>
      <Main
      img={RestaurantFood}
      cardimg1={FirstCardImg}
      cardimg2={SecondCardImg}
      cardimg3={ThirdCardImg}
      reviewimg1={FirstReviewImg}
      reviewimg2={SecondReviewImg}
      reviewimg3={ThirdReviewImg}
      reviewimg4={FourthReviewImg}
      aboutimg1={FirstAboutImg}
      aboutimg2={SecondAboutImg}
      ></Main>
      <Footer footerimg={FooterImg}/>
    </>
  );
}

export default App;
