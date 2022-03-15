import { Container } from 'react-bootstrap';
import './style.scss';

function Produto() {
    return (
        <>
            <Container>
                <div class="cabecalho">
                    <div>
                        <p>Categoria | Nome</p>
                    </div>
                    <div class="avaliacao-localizacao">
                        <p>Localização</p>
                        <p>Avaliação</p>
                        <p>Retornar</p>
                    </div>
                </div>
                <div class="galeria-imagens">
                    <div>
                        <img class="img-principal" src="https://betaimages.lopes.com.br/realestate/sml/REO297712/5CFACCDFF2BA3BF203708E56FEA3851B.JPG" alt="principal"></img>
                    </div>
                    <div class="imagens-secundarias">
                        <img class="img-secundaria" src="https://betaimages.lopes.com.br/realestate/sml/REO297712/5CFACCDFF2BA3BF203708E56FEA3851B.JPG" alt="principal"></img>
                        <img class="img-secundaria" src="https://betaimages.lopes.com.br/realestate/sml/REO297712/5CFACCDFF2BA3BF203708E56FEA3851B.JPG" alt="principal"></img>
                        <img class="img-secundaria" src="https://betaimages.lopes.com.br/realestate/sml/REO297712/5CFACCDFF2BA3BF203708E56FEA3851B.JPG" alt="principal"></img>
                        <img class="img-secundaria" src="https://betaimages.lopes.com.br/realestate/sml/REO297712/5CFACCDFF2BA3BF203708E56FEA3851B.JPG" alt="principal"></img>
                        <p>Ver imagens</p>
                    </div>
                </div>
                <div class="descricao-produto">
                    <h3>Descrição</h3>
                    <p>Crie um bloco que cubra 100% do container que inclua:
                        Qualificação
                        Texto de descrição do produto. </p>
                </div>
                <div class="caracteristicas-produto">
                    <h3>características do produto</h3>
                    <p>Crie um bloco que cubra 100% do container que inclua:
                        Título sublinhado.
                        Grade de colunas (4 desktop, 2 tablet e telefone) com uma lista de atributos do produto junto com seu ícone associado. </p>
                </div>
                <div class="politica">
                    <h3>política do produto</h3>
                    <p>Crie um bloco que cubra 100% do container que inclua uma grade de colunas (3 desktop, 2 tablet, 1 phone) com:
                        Normas: Título e descrição.
                        Segurança: Título e descrição.
                        Cancelamento: Título e descrição. </p>
                </div>
            </Container>
        </>
    )
}

export default Produto;