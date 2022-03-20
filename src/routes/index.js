import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "../components";
import { LoginPage, RegisterPage } from "../pages";
import { AuthProvider } from "../providers/Auth";
import Home from "../pages/Home";
import Produto from "../pages/Produto";
import Categoria from "../pages/Categoria";

const RouteList = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>    
          <Route path="" element={<Home/>}/>   
          <Route path="/produto" element={<Produto/>}/>   
          <Route path="/categoria/:categoria" element={<Categoria />} />      
          <Route path="/login" element={<LoginPage/>}/>
          {localStorage.getItem("isLogged") === "true" || <Route path="/register" element={<RegisterPage/>}/>}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default RouteList;