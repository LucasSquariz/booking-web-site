import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/home.js';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';

const RouteList = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/home" element={<Home />} />            
        </Routes>
        <Footer />
    </BrowserRouter>
)

export default RouteList;