import './style.scss';
import { Link } from "react-router-dom";
import ResearchHouse from '../../components/ResearchHouse';
import { Container } from 'react-bootstrap';
import Card from '../../components/Card';
import CardCategoria from '../../components/CardCategoria';


function Home() {
    return (
        <>            
                <nav>
                    <div> {/*  --- Início da barra de pesquisa --- */}
                        <ResearchHouse />
                    </div> {/*  --- Fim da barra de pesquisa --- */}
                    <div class="transicao-busca-categoria">
                        <div class="img-home">
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/3baa6454903837.596e6edb115db.jpg" alt="imgem-home"></img>
                        </div>
                    </div>
                    <h2 class="busca-categoria">Busca por categoria</h2>
                    <CardCategoria />                    
                    <h2 class="acomodacoes-disponiveis">Acomodações disponíveis</h2>
                    <Card />
                </nav>
            
        </>
    )
}

export default Home;