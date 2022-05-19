import './style.scss';
import { Container } from 'react-bootstrap';
import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router';

function Categoria() {
    const { categoria } = useParams();
    const categorias = useAxios(`/categoria/${categoria}`);
    return (
        <>
            {console.log(categorias)}
            return(
            <Container key={categorias.id} className="categorias">
                <img src={categorias.url} className="imagem" alt={categorias.nome}></img>
                <p>Nome: {categorias.nome}</p>
                <p>Descrição: {categorias.descricao}</p>
            </Container>
            )            
        </> )   
}

export default Categoria;