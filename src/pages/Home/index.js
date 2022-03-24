import './style.scss';
import { Link } from "react-router-dom";
import ResearchHouse from '../../components/ResearchHouse';
import { Container } from 'react-bootstrap';
import Card from '../../components/Card';
import CardCategoria from '../../components/CardCategoria';


function Home() {
    const scrollWindow = () => {
        window.scrollTo(0, 0)
    }
    return (
        <>            
                <nav onLoad={scrollWindow}>
                    <div> {/*  --- Início da barra de pesquisa --- */}
                        <ResearchHouse />
                    </div> {/*  --- Fim da barra de pesquisa --- */}
                    <div className="transicao-busca-categoria">
                        <div className="img-home">
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/3baa6454903837.596e6edb115db.jpg" alt="imgem-home"></img>                            
                        </div>
                    </div>
                    <div>
                        <CardCategoria />
                    </div>
                    <div>
                        <h2 className="acomodacoes-disponiveis">Acomodações disponíveis</h2>
                        <Card />
                    </div>
                </nav>
            
        </>
    )
}

export default Home;