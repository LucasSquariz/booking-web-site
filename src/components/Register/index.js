import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const Register = () => {
  const navigate = useNavigate()

  function hiden(e) {
    const password = document.getElementById("password");
    const hidenEl = document.getElementById("hiden");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    hidenEl.classList.toggle("fa-eye-slash");
  }

  const verifyPassword = (e) => {
    const text = e.target.value;
    let points = 0;

    if (text.match(/(?=.*[a-z])/g)) points += 1;
    if (text.match(/(?=.*[A-Z])/g)) points += 1;
    if (text.match(/(?=.*[0-9])/g)) points += 1;
    if (text.match(/(?=.*[!@.#\$%\^&\*])/g)) points += 1;
    if (text.match(/(?=.{8,})/g)) points += 1;

    const result = formatPoint(points);
    changedColor(result);
    writeStrength(result);
    return result;
  };

  const formatPoint = (points) => {
    const result = {
      0: "Vazio",
      1: "Fraca",
      2: "Fraca",
      3: "Media",
      4: "Media",
      5: "Forte",
    };
    return result[points] || "Vazio";
  };

  const writeStrength = (text) => {
    const strengthText = document.getElementById("strengthText");

    const isVisible = text === "Vazio" ? false : true;
    if (isVisible) {
      strengthText.style.visibility = "visible";
    } else {
      strengthText.style.visibility = "hidden";
    }
    strengthText.innerText = text;
  };

  const changedColor = (force) => {
    const weak = document.getElementById("weak");
    const medium = document.getElementById("medium");
    const strong = document.getElementById("strong");

    if (force === "Fraca") {
      weak.style.backgroundColor = "rgb(255, 71, 87)";
      medium.style.backgroundColor = "rgb(196, 196, 196)";
      strong.style.backgroundColor = "rgb(196, 196, 196)";
    } else if (force === "Media") {
      medium.style.backgroundColor = "rgb(255, 165, 0)";
      strong.style.backgroundColor = "rgb(196, 196, 196)";
    } else if (force === "Forte") {
      strong.style.backgroundColor = "rgb(34, 172, 91)";
    }

    if (force === "Vazio") {
      weak.style.backgroundColor = "rgb(196, 196, 196)";
      medium.style.backgroundColor = "rgb(196, 196, 196)";
      strong.style.backgroundColor = "rgb(196, 196, 196)";
    }
  };

  const isExistEqualError = (id) => {
    const isError = document.getElementById(`error${id}`)
    if (isError) {
      return isError
    }
    return false
  }

  const errorInput = (id) => {
    const existError = isExistEqualError(id)
    if (existError) {
      return
    }

    const input = document.getElementById(id)
    const errorIcon = document.createElement("i")
    errorIcon.setAttribute("id", `error${id}`)

    errorIcon.innerHTML ='<svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 24 24" width="22px" fill="rgb(255, 71, 87)"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/></svg>'
    errorIcon.style.position = "relative"
    errorIcon.style.bottom = "-7px"
    errorIcon.style.right = "-3px"
    errorIcon.style.marginRight = "-22px"
    input.parentNode.insertBefore(errorIcon, input)
    input.style.outline = "1px solid red"
  }

  const isErrorMessage = () => {
    const tagMessage = document.getElementById("errorMessages")
    if (tagMessage.innerHTML) {
      return true
    }
    return false
  }

  const resetErrorMessage = () => {
    const tagMessage = document.getElementById("errorMessages")
    if (isErrorMessage()) {
      tagMessage.innerHTML = ""
    }
  }

  const errorMesages = (message) => {
    const tagMessage = document.getElementById("errorMessages")
    tagMessage.innerHTML += `<li>${message}</li>`
  }
  
  const resetErrors = () => {
    const errorsIcon = document.querySelectorAll("i")
    const errorsInput = document.querySelectorAll("i + input")
    errorsIcon.forEach((errorIcon, i) =>  {
      errorIcon.parentNode.removeChild(errorIcon)
      errorsInput[i].style.outline = "none"
    })
  }

  const isExistCharacters = (field) => {
    const lowCase = field.toLowerCase()
    const isExistCharacterName = lowCase.match(/(?=.*[0-9])/g)
      || lowCase.match(/(?=.*[!@.#\$%\^&\*])/g)
    if (isExistCharacterName) {
      return true
    }
    return false
  }

  const adjustHeightMain = () => {
    const main = document.getElementById("register")
    window.scrollTo(0 , main.scrollHeight);
    main.style.height = "100%"
  }

  const handleSubmit = async ({
    name,
    secondName,
    email,
    password,
    confirmPassword,
  }) => {
    resetErrorMessage()
    resetErrors()
    
    if (isExistCharacters(name)) {
      errorMesages("O nome possui credenciais inválidas")
      errorInput("name")
    }

    if (isExistCharacters(secondName)) {
      errorMesages("O sobrenome possui credenciais inválidas")
      errorInput("secondName")
    }

    if (!secondName.toLowerCase().match(/(?=.*[a-z])/g)) {
      errorMesages("O sobrenome possui credenciais inválidas")
      errorInput("secondName")
    }
    
    if (password !== confirmPassword) {
      errorMesages("As senhas não são iguais. Tente novamente")
      errorInput("confirmPassword")
    }

    if (password.length <= 6) {
      errorMesages("A senha possui menos de 6 dígitos")
      errorInput("password")
    }

    const strengthText =
      document.getElementById("strengthText").textContent
    if (strengthText === "Vazio" || strengthText === "Fraca") {
      errorMesages("A senha tem que ser forte ou média")
      errorInput("password")
    }

    if (isErrorMessage()) {
      adjustHeightMain()
      return
    }

    try {
      const response = await api.post("/usuario/salvar", {
        email,
        nome: name,
        papeis: null,
        senha: password,
        sobrenome: secondName,
        admin: true
      })
      const main = document.getElementById("register")
      const divSuccess = document.createElement("div")
      const h1 = document.createElement("h1")
      const h3 = document.createElement("h3")
      main.textContent = ""
      main.appendChild(divSuccess)
      divSuccess.appendChild(h1)
      divSuccess.appendChild(h3)
      divSuccess.style.textAlign = "center"
      divSuccess.style.marginTop = "50px"
      h1.style.color = "rgb(34, 172, 91)"
      h1.innerText = "Registrado com sucesso!"
      h3.innerText = "Aguarde, você será redirecionado em 5 segundos"
      setTimeout(()=> {
        navigate("/")
      }, 5000)
    } catch (e) {
      errorMesages("Usuário já cadastrado")
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        secondName: "",
        email: "",
        password: "",
        confirmPassword: "",
        hiden: false,
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <h2>Registrar</h2>
        <ul id="errorMessages"></ul>
        <div id="nameComplete">
          <div>
            <label htmlFor="name">Nome</label>
            <Field type="text" name="name" required id="name" />
          </div>

          <div id="containerSecondName">
            <label htmlFor="secondName">Sobrenome</label>
            <Field type="text" name="secondName" required id="secondName" />
          </div>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" required id="email" />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <div>
            <Field
              type="password"
              name="password"
              required
              id="password"
              onKeyDown={verifyPassword}
              onKeyPress={verifyPassword}
            />
            <Field
              className="far fa-eye fa-eye-slash"
              type="checkbox"
              name="hiden"
              id="hiden"
              onClick={hiden}
            />
            <div id="strength">
              <div id="weak"></div>
              <div id="medium"></div>
              <div id="strong"></div>
            </div>
            <p id="strengthText">Vazio</p>
          </div>
        </div>

        <div>
          <label htmlFor="password">Confirme a sua senha</label>
          <Field type="password" name="confirmPassword" required id="confirmPassword" />
        </div>

        <div id="containerButton">
          <button type="submit">Registrar</button>
          <p>
            Já tem uma conta?{" "}
            <span>
              <Link to="/login">Iniciar sessão</Link>
            </span>
          </p>
        </div>
      </Form>
    </Formik>
  );
};

export default Register;
