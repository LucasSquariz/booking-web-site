import './style.scss';
import { Container } from 'react-bootstrap';
import useAxios from '../../hooks';
import { useParams } from 'react-router';

function Categoria() {
    const { categoria } = useParams();
    const categorias = useAxios(`http://44.201.189.176:8080/categoria/${categoria}`);
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