import { Formik, Form, Field } from "formik";
import { useAuth } from "../../providers/Auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
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
    isLogged: false,
    token: "",
    name: ""
  })

  const { setUser } = useAuth()
  const logged = async ({email, password}) => {
    try {
      

      const response = await api.post("/login", {
        email: email,
        senha: password
      })
      console.log(response.data)
      navigate("/")
      setInput({email, isLogged: true})
      localStorage.setItem("user", JSON.stringify({
        email,
        isLogged: true,
        token: response.data.slice(0, 180),
        name: response.data.slice(180, response.data.length)
      }))
      setUser({email, isLogged: true})
    } catch (e) {
      const divError = document.getElementById("errors")
      const inputEmail = document.querySelector("input[type='email']")
      const inputPassword = document.querySelector("input[type='password']")
      divError.innerHTML = `<li>Usuário não encontrado</li>`
      divError.style.fontSize = "15px"
      divError.style.color = "red"
      divError.style.display = "flex"
      divError.style.justifyContent = "center"
      inputEmail.style.outline = "1px solid red"
      inputPassword.style.outline = "1px solid red"
      return
    }
  }

  return (
    <Formik initialValues={{email: "", password: "", hiden: true}} onSubmit={logged}>
      <Form>
        <h2>Login</h2>
        <ul id="errors"></ul>
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