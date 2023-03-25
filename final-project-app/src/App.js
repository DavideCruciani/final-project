import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About'
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import Footer from './components/Footer';
import Logo from './images/Logo.svg';
import RestaurantFood from './images/restauranfood.jpg'
import FirstCardImg from './images/greeksalad.jpg'
import SecondCardImg from './images/bruchetta.jpg'
import ThirdCardImg from './images/lemondessert.jpg'
import FirstReviewImg from './images/tyler.jpg'
import SecondReviewImg from './images/Trunks.PNG'
import ThirdReviewImg from './images/top.PNG'
import FourthReviewImg from './images/cr7.jpg'
import FirstAboutImg from './images/MA1.jpg'
import SecondAboutImg from './images/MA2.jpg'
import FooterImg from './images/footer-logo.png'
import { Routes, Route } from 'react-router-dom';
import ConfirmedBooking from './components/ConfirmedBooking';


function App() {
  return (
    <>
      <Header img={Logo}>
        <Nav/>
      </Header>
      <Routes>
      <Route path='/' element={<Main 
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
      />} />

      <Route path='/About' element={<About/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Reservations' element={<Reservations/>}/>
      <Route path='/ConfirmedBooking' element={<ConfirmedBooking/>}/>
      <Route path='/OrderOnline' element={<OrderOnline/>}/>
      <Route path='/Login' element={<Login/>}/>
      </Routes>
      <Footer footerimg={FooterImg}/>
    </>
  );
}

export default App;
