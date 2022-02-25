import './App.scss';
//import RouteList from './routes/routes';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Login from './pages/Login/login';
import Registro from './pages/Registro/registro';

function App() {
  return (
    <>
      <Header />
      <Registro />
      <Footer />
    </>
  );
}

export default App;
