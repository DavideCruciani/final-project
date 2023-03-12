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


function App() {
  return (
    <>
      <Header img={Logo}>
        <Nav/>
      </Header>
      <Main img={RestaurantFood} cardimg1={FirstCardImg} cardimg2={SecondCardImg} cardimg3={ThirdCardImg}></Main>
      <Footer/>
    </>
  );
}

export default App;
