import "./style.scss";
import ResearchHouse from "../../components/ResearchHouse";
import Card from "../../components/Card";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";

function Home() {
  const [show, setShow] = useState(false);

  function FalarOi(){
    console.log("oi")
  }

  // const scrollWindow = () => {
  //   window.scrollTo(0, 0);
  // };

  // const data = useAxios("/categoria")
  // sessionStorage.setItem("categories", JSON.stringify(data))
  // useEffect(() => {
  //   if (data.length > 0){
  //     setShow(true)
  //   }
  // }, [show, data.length])
  return (
    <>
      <nav>
        <div>
          {" "}
          {/*  --- Início da barra de pesquisa --- */}
          <ResearchHouse />
        </div>{" "}
        {/*  --- Fim da barra de pesquisa --- */}
        <div className="transicao-busca-categoria">
          <div className="img-home">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/3baa6454903837.596e6edb115db.jpg"
              alt="imgem-home"
            ></img>
          </div>
        </div>        
        <div>
          <Card FalarOi={FalarOi}/>
        </div>
      </nav>
    </>
  );
}

export default Home;
