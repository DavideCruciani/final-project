import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Logo from './images/Logo.svg'

function App() {
  return (
    <>
      <Header img={Logo}>
        <Nav/>
      </Header>
      <Main></Main>
      <Footer/>
    </>
  );
}

export default App;
