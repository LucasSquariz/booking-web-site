import { Formik, Form, Field } from "formik";
import { useAuth } from "../../providers/Auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss"

const Login = () => {
  const navigate = useNavigate()

  function hiden(e) {
    const password = document.getElementById("password")
    const hidenEl = document.getElementById("hiden")
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    hidenEl.classList.toggle('fa-eye-slash');
  }

  const [ input, setInput ] = useState({
    email: "",
    isLogged: false
  })

  const { setUser } = useAuth()
  const logged = ({email, password}) => {
    navigate("/")
    setInput({email, isLogged: true})
    localStorage.setItem("user", JSON.stringify({email, isLogged: true}))
    setUser({email, isLogged: true})
  }

  return (
    <Formik initialValues={{email: "", password: "", hiden: true}} onSubmit={logged}>
      <Form>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
            <Field type="email" name="email" required id="email"/>
        </div>
        <div>
            <label htmlFor="email" id="passwordLabel">Senha</label>
            <div id="containerPassword">
              <Field type="password" name="password" required id="password"/>
              <Field className="far fa-eye fa-eye-slash" type="checkbox" name="hiden" id="hiden" onClick={hiden} />
            </div>
        </div>
        <button type="submit">Entrar</button>
      </Form>
    </Formik>
  )
}

export default Login