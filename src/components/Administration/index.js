import { Formik, Form, Field } from "formik";
import api from "../../services/api";
import "./style.scss";
import swal from 'sweetalert';

const Administration = () => {

  const Mensagem = () => {
    swal({                
      text: "Endereço adicionado ao catálogo com sucesso!",
      icon: "success",
    });
      //{id:1,
      //     nome:"Apartamento à venda",
      //     descricao:"Apartamento Localizado no Edifício Residencial Torres da Ponte, cidade de São Paulo. O imóvel conta com 02 dormitórios sendo 01 Suíte com armários, WC social, sala 02 ambientes com sacada , cozinha planejadas , área de serviço, 01 vaga de garagem coberta.",
      //     caracteristicas:[],
      //     imagens:[{id:1,titulo:"apartamento-1",url:"https://t2-g9-s3.s3.amazonaws.com/produto-imagem/sp+id1/apartamentos/ft2.jpg"},
      //     {"id":2,"titulo":"apartamento-2","url":"https://t2-g9-s3.s3.amazonaws.com/produto-imagem/sp+id1/apartamentos/ft3.jpg"},
      //     {"id":5,"titulo":"apartamento-5","url":"https://t2-g9-s3.s3.amazonaws.com/produto-imagem/sp+id1/apartamentos/ft6.jpg"},
      //     {"id":4,"titulo":"apartamento-4","url":"https://t2-g9-s3.s3.amazonaws.com/produto-imagem/sp+id1/apartamentos/ft5.jpg"},
      //     {"id":3,"titulo":"apartamento-3","url":"https://t2-g9-s3.s3.amazonaws.com/produto-imagem/sp+id1/apartamentos/ft4.jpg"}],
      //     categorias:{id:1,nome:"Apartamento",descricao:"Encontrar o apartamento dos seus sonhos se torna uma experiência ainda melhor com mais de 5 milhões de opções que a Digital Booking Oferece!",url:"https://t2-g9-s3.s3.amazonaws.com/Categorias-img/categoria-apartamento.png"},
      //     cidade:{id:25,nome:"São Paulo",pais:"Brasil"},
      //     latitude:null,
      //     longitude:null}
      // }
  }  

  const listStates = {
    "Acre": 1,
    "Alagoas": 2,
    "Amapá": 3,
    "Amazonas": 4,
    "Bahia": 5,
    "Ceará": 6,
    "Distrito Federal": 7,
    "Espírito Santo": 8,
    "Goiás": 9,
    "Maranhão": 10,
    "Mato Grosso": 11,
    "Mato Grosso do Sul": 12,
    "Minas Gerais": 13,
    "Pará": 14,
    "Paraíba": 15,
    "Paraná": 16,
    "Pernambuco": 17,
    "Piauí": 18,
    "Rio de Janeiro": 19,
    "Rio Grande do Norte": 20,
    "Rio Grande do Sul": 21,
    "Rondônia": 22,
    "Roraima": 23,
    "Santa Catarina": 24,
    "São Paulo": 25,
    "Sergipe": 26,
    "Tocantins": 27
  }

  const listCategorys = {
   "Apartamento": 1,
    "Casa": 2,
    "Casa na praia": 3,
    "Flat": 4
  }

  const deleteUrl = (e) => {
    e.target.parentNode.remove();
  };

  const addUrl = () => {
    const divUrl = document.getElementById("urlImages");
    const [inputImage] = document.getElementsByName("images");
    if (!inputImage.value) return;

    const divUrlImage = document.createElement("div");
    const anchorLink = document.createElement("img");
    const trash = document.createElement("i");

    divUrlImage.setAttribute("class", "textUrlImage");
    trash.setAttribute("class", "far fa-trash-alt");
    trash.addEventListener("click", deleteUrl);
    anchorLink.setAttribute("src", inputImage.value);
    anchorLink.setAttribute("alt", inputImage.value);
    divUrlImage.appendChild(anchorLink);
    divUrlImage.appendChild(trash);
    divUrl.appendChild(divUrlImage);
    inputImage.value = "";
  };

  const getImages = () => {
    const imgs = document.querySelectorAll("#urlImages img");
    const arrayImg = Array.from(imgs).map((el) => el.src)
    return arrayImg
  }

  const errorMesages = (message) => {
    const tagMessage = document.getElementById("errorAdministration")
    tagMessage.innerHTML += `<li>${message}</li>`
  }

  const isErrorMessage = () => {
    const tagMessage = document.getElementById("errorAdministration")
    if (tagMessage.innerHTML) {
      return true
    }
    return false
  }

  const resetErrorMessage = () => {
    const tagMessage = document.getElementById("errorAdministration")
    if (isErrorMessage()) {
      tagMessage.innerHTML = ""
    }
  }

  const adjustHeightMain = () => {
    window.scrollTo(0 , 0);
  }

  const handleSubmit = async ({ name, category, city, description }) => {
    resetErrorMessage()
    const images = getImages()

    if (!listStates[city]) errorMesages("A cidade não existe")
    if (!listCategorys[category]) errorMesages("A categoria não existe")
    if (!images[0]) errorMesages("Precisa adicionar imagens")

    if (isErrorMessage()) {
      adjustHeightMain()
      return
    }

    try {
      // const response = await api.post("/produto", {
      //   caracteristicas:{
      //       "icone": null,
      //       "nome": null
      //   },
      //   categorias: {
      //     descricao: null,
      //     id: listCategorys[category],
      //     nome: category,
      //     url: null
      //   },
      //   cidade: {
      //     id: listStates[city],
      //     nome: city,
      //     pais: "Brasil"
      //   },
      //   data: new Date().toISOString().slice(0, 10),
      //   descricao: description,
      //   imagens: [
      //     {
      //       "id": 0,
      //       "titulo": "string",
      //       "url": "string"
      //     }
      //   ],
      //   latitude: 0,
      //   longitude: 0,
      //   nome: name
      // })
      const response = await api.get("/produto")
      console.log(response.data)
    } catch (err) {
      console.log(err.message)
    }
    console.log({ name, category, city, description, images });
  };

  return (
    <Formik
      initialValues={{
        name: "",
        category: "",
        city: "",
        description: "",
        images: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <section>
          <div id="form">
            <h1>Administração de Produtos</h1>

            <ul id="errorAdministration"></ul>

            <div>
              <label htmlFor="name">Nome</label>
              <Field type="text" name="name" id="name" required />
            </div>

            <div>
              <label htmlFor="category">Categoria</label>
              <Field type="text" list="categoryList" name="category" id="category" required />
              <datalist id="categoryList">
                <option value="Apartamento" />
                <option value="Casa" />
                <option value="Casa na praia" />
                <option value="Flat" />
              </datalist>
            </div>

            <div>
              <label htmlFor="city">Cidade</label>
              <Field type="text" list="cityState" name="city" id="city" required />
              <datalist id="cityState">
                <option value="Acre" />
                <option value="Alagoas" />
                <option value="Amapá" />
                <option value="Amazonas" />
                <option value="Bahia" />
                <option value="Ceará" />
                <option value="Distrito Federal" />
                <option value="Espiríto Santo" />
                <option value="Goiás" />
                <option value="Maranhão" />
                <option value="Mato Grosso" />
                <option value="Mato Grosso do Sul" />
                <option value="Minas Gerais" />
                <option value="Pará" />
                <option value="Paraíba" />
                <option value="Paraná" />
                <option value="Pernambuco" />
                <option value="Piauí" />
                <option value="Rio de Janeiro" />
                <option value="Rio Grande do Norte" />
                <option value="Rio Grande do Sul" />
                <option value="Rondônia" />
                <option value="Roraima" />
                <option value="Santa Catarina" />
                <option value="São Paulo" />
                <option value="Sergipe" />
                <option value="Tocantins" />
              </datalist>
            </div>

            <div>
              <label htmlFor="description">Descrição</label>
              <Field as="textarea" name="description" id="description" required />
            </div>

            <div id="divImages">
              <label htmlFor="images">Imagens</label>
              <div id="fieldImg">
                <Field type="text" name="images" id="images" />
                <i
                  className="far fa-plus-square"
                  id="more"
                  onClick={addUrl}
                ></i>
              </div>
            </div>
          </div>

          <div id="urlImages">
            <h2 id="textImages">Imagens</h2>
          </div>
        </section>
        <div id="button">
          <button type="submit" onClick={() => Mensagem()}>Criar</button>
        </div>
      </Form>
    </Formik>
  );
};

export default Administration;
