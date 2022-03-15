import { Link } from "react-router-dom"
import { Login } from "../../components"
import "./style.scss"

const LoginPage = () => {
  return (
    <main id="login">
      <Login />
      <div id="informations">
        <p><Link to="/login">Esqueci minha senha</Link></p>
        <Link to="/register">Não possui sua conta?</Link>
      </div>
    </main>
  )
}

export default LoginPage