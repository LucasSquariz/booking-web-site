import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "../components";
import { LoginPage, RegisterPage, Home } from "../pages";
import { AuthProvider } from "../providers/Auth";
import Produto from "../pages/Produto";
import Reserva from "../pages/reserva";

const RouteList = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:produto" element={<Produto />}/> 
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/produto/reserva" element={<Reserva />}/>
          {localStorage.getItem("isLogged") === "true" || <Route path="/register" element={<RegisterPage/>}/>}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default RouteList