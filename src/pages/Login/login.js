import './login.scss';
import { Form, Button, Container } from 'react-bootstrap';

function Login() {
    return (
        <Container>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="" />                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Fazer login
            </Button>
            <Button variant="primary" type="submit">
                Cadastrar
            </Button>
        </Form>
        </Container>
    )
}

export default Login;