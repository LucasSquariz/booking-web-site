import './style.scss';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router';

function Categoria() {
    const { categoria } = useParams();
    const categorias = useAxios(`/categoria/${categoria}`);
    return (
        <>
            {categorias.map((a) => {
                return(
                <Container key={a.id} className="categorias">
                    <Link to={`/categoria/${a.id}`}><img src={a.url} className="imagem" alt={a.nome} /></Link>
                    <p>Nome: {a.nome}</p>
                    <p>Descrição: {a.descricao}</p>
                </Container>
                )
            })
            }
        </>
    )
}

export default Categoria;