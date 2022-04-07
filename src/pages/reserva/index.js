import './style.scss';
import Calendar1 from '../../components/Calendar/calendar1';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { images } from '../../data/images';
import Politica from '../../components/PoliticaProduto';

function Reserva() {
    const scrollWindow = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <Container onLoad={scrollWindow}>
                <div className="grid-reserva">
                    <div>
                        <div className="nome-e-botao-voltar">
                            <Link to="/produto/1">
                                <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.6476 31.0254C18.1062 31.0355 18.5565 30.9026 18.9359 30.6449C19.3154 30.3872 19.6051 30.0176 19.7649 29.5876C19.9246 29.1577 19.9464 28.6887 19.8273 28.2458C19.7082 27.8028 19.454 27.4082 19.1001 27.1164L5.59711 15.5486L19.1001 3.98492C19.3449 3.805 19.5499 3.57657 19.7023 3.31375C19.8547 3.05092 19.9512 2.75937 19.9857 2.45753C20.0202 2.15569 19.9921 1.85003 19.903 1.55957C19.8139 1.26912 19.6658 1.0001 19.4679 0.769537C19.2701 0.538971 19.0268 0.351942 18.7532 0.219767C18.4797 0.0875929 18.1818 0.0133551 17.8782 0.00164204C17.5746 -0.0100729 17.2719 0.0408514 16.9889 0.151556C16.706 0.26226 16.449 0.430183 16.234 0.644821L0.774309 13.8721C0.531532 14.0793 0.336584 14.3364 0.202905 14.6263C0.0692267 14.9161 3.28814e-06 15.2315 3.26024e-06 15.5507C3.23234e-06 15.8698 0.0692266 16.1853 0.202905 16.4751C0.336583 16.7649 0.531532 17.0223 0.774308 17.2295L16.234 30.4695C16.6245 30.8164 17.1254 31.0136 17.6476 31.0259L17.6476 31.0254Z" fill="#383B58" />
                                </svg>
                            </Link>
                            <h3>Confirme a data</h3>
                        </div>
                        <div>
                            <Calendar1 />
                        </div>
                    </div>
                    <div className="bloco-reserva">
                        <div id="reserva-box">
                            <div className="detalhe-reserva">
                                <h3>Detalhes da reserva</h3>
                            </div>
                            <div className="detalhes-reserva-img">
                                <img className="img-reserva" src={images[0].url} alt="img-reserva"></img>
                                <div classname="categoria-nome-localizacao-reserva">
                                    <div>
                                        <span className="categoria-reserva">categoria</span>
                                    </div>
                                    <div>
                                        <span className="nome-reserva">Nome</span>
                                    </div>
                                    <h3>localização</h3>
                                </div>
                            </div>
                            <div className="checkin-out">
                                <span className="checkin">Check-in: </span>
                                <span className="checkout">Check-Out: </span>
                            </div>
                            <button className="btn-confirmar-reserva">Confirmar reserva</button>
                        </div>
                    </div>
                </div>
                <Politica />
            </ Container>
        </>
    )
}

export default Reserva;