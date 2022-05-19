import "./style.scss";
import ResearchHouse from "../../components/ResearchHouse";
import Card from "../../components/Card";

function Home() {  
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
          <Card />
        </div>
      </nav>
    </>
  );
}

export default Home;
