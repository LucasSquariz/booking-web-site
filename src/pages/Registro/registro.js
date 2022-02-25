import './registro.scss';
import { Form, Button, Container } from 'react-bootstrap';

function Registro() {
    return (
        <Container>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="" />                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control type="text" placeholder="" />                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="" />                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repita a senha</Form.Label>
                <Form.Control type="password" placeholder="" />
            </Form.Group>           
            <Button variant="primary" type="submit">
                Criar conta
            </Button>
            <Button variant="primary" type="submit">
                Já tenho cadastro
            </Button>
        </Form>
        </Container>
    )
}

export default Registro;