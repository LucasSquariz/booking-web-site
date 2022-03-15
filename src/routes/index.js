import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "../components";
import { LoginPage, RegisterPage } from "../pages";
import { AuthProvider } from "../providers/Auth";
import Home from "../pages/Home";

const RouteList = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>    
          <Route path="" element={<Home/>}/>           
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