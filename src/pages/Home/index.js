import './style.scss';
import { Link } from "react-router-dom";
import ResearchHouse from '../../components/ResearchHouse';
import { Container } from 'react-bootstrap';
import Card from '../../components/Card';


function Home() {

    const categorias = [
        { id: 1, nome: "Apartamento", url: "https://betaimages.lopes.com.br/realestate/sml/REO297712/5CFACCDFF2BA3BF203708E56FEA3851B.JPG" },
        { id: 2, nome: "Casa", url: "https://s2.glbimg.com/A9UbOT66bw7kqdr367utaTiPsGk=/620x413/smart/e.glbimg.com/og/ed/f/original/2020/12/21/5-coisas-que-vao-te-fazer-sonhar-com-esta-casa-de-praia-contemporanea-7.jpg" },
        { id: 3, nome: "Casa na praia", url: "https://s2.glbimg.com/ulqlv4AMKzTknUujSFXc0aGKQXI=/smart/e.glbimg.com/og/ed/f/original/2019/10/15/decoracao-casa-de-praia-8.jpg" },
        { id: 4, nome: "Flat", url: "https://2.bp.blogspot.com/-Y88zLeZOEi4/XEiZiWxm07I/AAAAAAAB710/MI-1p4EaXwoCOoP-qvByQZXoyd6JnhBXACLcBGAs/s1600/32290295-5aa6-4123-a51a-5a6470993415.jpg" },
    ]

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
                    <div class="categorias"> {/*  --- Início das categorias --- */}
                        {categorias.map((a) =>
                            <Link to={`/categoria/${a.id}`}>
                                <div class="card-categoria">
                                    <div class="img-categoria">
                                        <img class="img-card-categoria" src={a.url} alt={a.nome}></img>
                                    </div>
                                    <div class="nome-categoria">
                                        <p><strong>{a.nome}</strong></p>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div> {/*  --- Fim das categorias --- */}
                    <h2 class="acomodacoes-disponiveis">Acomodações disponíveis</h2>
                    <Card />
                </nav>
            
        </>
    )
}

export default Home;