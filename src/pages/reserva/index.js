import './style.scss';
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import Politica from '../../components/PoliticaProduto';
import Calendar1 from '../../components/Calendar/calendar1';
import Calendar2 from '../../components/Calendar/calendar2';

function Reserva() {    
    let produtos = JSON.parse(localStorage.getItem('produto'));       
    // document.getElementById("checkIn").innerHTML = "New text!";

    const scrollWindow = () => {
        window.scrollTo(0, 0)
    }

    // ----- Formatar datas
    const usuario = JSON.parse(localStorage.getItem('user'));
    const datas = JSON.parse(localStorage.getItem('data'));
    const dataStart = JSON.stringify(datas.startDate.split(['-']))
    const dataStartFormatada = dataStart[14] + dataStart[15] + '/' + dataStart[9] + dataStart[10] + '/' + dataStart[4] + dataStart[5]
    const dataEnd = JSON.stringify(datas.endDate.split(['-']))
    const dataEndFormatada = dataEnd[14] + dataEnd[15] + '/' + dataEnd[9] + dataEnd[10] + '/' + dataEnd[4] + dataEnd[5]

    // ----- Formatar nome
    const nomeCompleto = usuario.name;
    const nome = nomeCompleto.split([' '])

    const horaChegada = document.getElementById('hora-chegada');   


    return (
        <>                  
            <div className="container-reserva" onLoad={scrollWindow}>
                <div className="grid-reserva">
                    <div>
                        <div className="nome-e-botao-voltar">
                            <Link to="/produto/1">
                                <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.6476 31.0254C18.1062 31.0355 18.5565 30.9026 18.9359 30.6449C19.3154 30.3872 19.6051 30.0176 19.7649 29.5876C19.9246 29.1577 19.9464 28.6887 19.8273 28.2458C19.7082 27.8028 19.454 27.4082 19.1001 27.1164L5.59711 15.5486L19.1001 3.98492C19.3449 3.805 19.5499 3.57657 19.7023 3.31375C19.8547 3.05092 19.9512 2.75937 19.9857 2.45753C20.0202 2.15569 19.9921 1.85003 19.903 1.55957C19.8139 1.26912 19.6658 1.0001 19.4679 0.769537C19.2701 0.538971 19.0268 0.351942 18.7532 0.219767C18.4797 0.0875929 18.1818 0.0133551 17.8782 0.00164204C17.5746 -0.0100729 17.2719 0.0408514 16.9889 0.151556C16.706 0.26226 16.449 0.430183 16.234 0.644821L0.774309 13.8721C0.531532 14.0793 0.336584 14.3364 0.202905 14.6263C0.0692267 14.9161 3.28814e-06 15.2315 3.26024e-06 15.5507C3.23234e-06 15.8698 0.0692266 16.1853 0.202905 16.4751C0.336583 16.7649 0.531532 17.0223 0.774308 17.2295L16.234 30.4695C16.6245 30.8164 17.1254 31.0136 17.6476 31.0259L17.6476 31.0254Z" fill="#383B58" />
                                </svg>
                            </Link>
                            <h3>Confirme suas informações</h3>
                        </div>
                        <div classnam="formulario-reserva">
                            <div>
                                <Formik
                                    initialValues={{
                                        firstName: '',
                                        lastName: '',
                                        email: '',
                                        city: '',
                                        startTime: '',
                                        endTime: ''
                                    }}
                                    onSubmit={async (values) => {
                                        await new Promise((r) => setTimeout(r, 500));
                                        alert(JSON.stringify(values, null, 2));
                                    }}
                                >
                                    <Form className="formulario-reserva">
                                        <div className="campo-reserva">
                                            <div>
                                                <label className="titulo-campo-reserva" htmlFor="firstName">Nome: </label>
                                            </div>
                                            <div>
                                                <Field className="campo-disabled" id="campo-formulario-reserva disabled" name="firstName" value={nome[0]} disabled />
                                            </div>
                                        </div>

                                        <div className="campo-reserva">
                                            <div>
                                                <label className="titulo-campo-reserva" htmlFor="lastName">Sobrenome: </label>
                                            </div>
                                            <div>
                                                <Field className="campo-disabled" name="lastName" value={nome[1]} disabled />
                                            </div>
                                        </div>

                                        <div className="campo-reserva">
                                            <div>
                                                <label className="titulo-campo-reserva" htmlFor="email">Email: </label>
                                            </div>
                                            <div>
                                                <Field
                                                    className="campo-disabled"
                                                    name="email"
                                                    type="email"
                                                    value={usuario.email}
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <div className="campo-reserva">
                                            <div>
                                                <label className="titulo-campo-reserva" htmlFor="city">Cidade: </label>
                                            </div>
                                            <div>
                                                <Field id="campo-formulario-reserva-cidade" name="city" />
                                            </div>
                                        </div>
                                        <div className="campo-reserva">
                                            <div>
                                                <label className="titulo-campo-reserva" htmlFor="time" >Hora de chegada: </label>
                                            </div>
                                            <div>
                                                <Field id="campo-formulario-reserva-cidade" name="time" list="hora" />
                                                <datalist id="hora">
                                                    <option value="00:00 (GMT-3)" />
                                                    <option value="01:00 (GMT-3)" />
                                                    <option value="02:00 (GMT-3)" />
                                                    <option value="03:00 (GMT-3)" />
                                                    <option value="04:00 (GMT-3)" />
                                                    <option value="05:00 (GMT-3)" />
                                                    <option value="06:00 (GMT-3)" />
                                                    <option value="07:00 (GMT-3)" />
                                                    <option value="08:00 (GMT-3)" />
                                                    <option value="09:00 (GMT-3)" />
                                                    <option value="10:00 (GMT-3)" />
                                                    <option value="11:00 (GMT-3)" />
                                                    <option value="12:00 (GMT-3)" />
                                                    <option value="13:00 (GMT-3)" />
                                                    <option value="14:00 (GMT-3)" />
                                                    <option value="15:00 (GMT-3)" />
                                                    <option value="16:00 (GMT-3)" />
                                                    <option value="17:00 (GMT-3)" />
                                                    <option value="18:00 (GMT-3)" />
                                                    <option value="19:00 (GMT-3)" />
                                                    <option value="20:00 (GMT-3)" />
                                                    <option value="21:00 (GMT-3)" />
                                                    <option value="22:00 (GMT-3)" />
                                                    <option value="23:00 (GMT-3)" />
                                                </datalist>

                                            </div>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                        <div className="calendario1-reserva">
                            <Calendar1 />
                        </div>
                        <div className="calendario2-reserva">
                            <Calendar2 />
                        </div>
                    </div>
                    <div className="bloco-reserva">
                        <div id="reserva-box">
                            <div className="detalhe-reserva">
                                <h3>Detalhes da reserva</h3>
                            </div>
                            <div className="detalhes-reserva-img">
                                <img className="img-reserva" src={produtos.imagens[0].url} alt="img-reserva"></img>
                                <div className="categoria-nome-localizacao-reserva">
                                    <div>
                                        <span className="categoria-reserva">{produtos?.categorias?.nome}</span>
                                    </div>
                                    <div>
                                        <span className="nome-reserva">{produtos.nome}</span>
                                    </div>
                                    <h3>{produtos?.cidade?.nome}</h3>
                                </div>
                            </div>
                            <div className="checkin-out">
                                <span className="checkin" >Check-in: <span id="checkIn">{dataStartFormatada}</span></span>
                                <span className="checkin" id="checkOut">{`Check-out: ${dataEndFormatada}`}</span>
                                {/* <span className="checkin">{`Hora de chegada: ${document.getElementById('hora-chegada')}`}</span>
                                <span className="checkout">Hora de saída:</span> */}
                            </div>
                            <div className="div-btn-confirmar-reserva">
                                <button className="btn-confirmar-reserva">Confirmar reserva</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Politica />
            </ div>
        </>
    )
}

export default Reserva;