import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './style.scss';

function Produto() {
    return (
        <>
            <Container>
                <div>
                    <div class="cabecalho">
                        <p>
                            <span class="categoria-produto">Categoria</span> | <span class="nome-produto">Nome</span>
                        </p>
                        <p class="av">
                            <span class="avaliacao-produto">Avaliação</span>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#1DBEB4" /></svg>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#1DBEB4" /></svg>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#1DBEB4" /></svg>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#1DBEB4" /></svg>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#1DBEB4" /></svg>
                        </p>
                    </div>
                    <div class="avaliacao-localizacao">
                        <p>
                            <svg width="12" height="20" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12.35C8.14752 12.35 7.32995 12.0076 6.72716 11.3981C6.12436 10.7886 5.78571 9.96195 5.78571 9.1C5.78571 8.23805 6.12436 7.4114 6.72716 6.8019C7.32995 6.19241 8.14752 5.85 9 5.85C9.85248 5.85 10.67 6.19241 11.2728 6.8019C11.8756 7.4114 12.2143 8.23805 12.2143 9.1C12.2143 9.5268 12.1311 9.94941 11.9696 10.3437C11.8081 10.738 11.5713 11.0963 11.2728 11.3981C10.9744 11.6999 10.62 11.9393 10.2301 12.1026C9.84008 12.2659 9.42211 12.35 9 12.35ZM9 0C6.61305 0 4.32387 0.958747 2.63604 2.66533C0.948211 4.37191 0 6.68653 0 9.1C0 15.925 9 26 9 26C9 26 18 15.925 18 9.1C18 6.68653 17.0518 4.37191 15.364 2.66533C13.6761 0.958747 11.3869 0 9 0Z" fill="#545776" /></svg>
                            <span class="localizacao-texto">Localização</span>
                        </p>

                        <p>
                            <Link to="/" class="link">
                                <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.6476 31.0254C18.1062 31.0355 18.5565 30.9026 18.9359 30.6449C19.3154 30.3872 19.6051 30.0176 19.7649 29.5876C19.9246 29.1577 19.9464 28.6887 19.8273 28.2458C19.7082 27.8028 19.454 27.4082 19.1001 27.1164L5.59711 15.5486L19.1001 3.98492C19.3449 3.805 19.5499 3.57657 19.7023 3.31375C19.8547 3.05092 19.9512 2.75937 19.9857 2.45753C20.0202 2.15569 19.9921 1.85003 19.903 1.55957C19.8139 1.26912 19.6658 1.0001 19.4679 0.769537C19.2701 0.538971 19.0268 0.351942 18.7532 0.219767C18.4797 0.0875929 18.1818 0.0133551 17.8782 0.00164204C17.5746 -0.0100729 17.2719 0.0408514 16.9889 0.151556C16.706 0.26226 16.449 0.430183 16.234 0.644821L0.774309 13.8721C0.531532 14.0793 0.336584 14.3364 0.202905 14.6263C0.0692267 14.9161 3.28814e-06 15.2315 3.26024e-06 15.5507C3.23234e-06 15.8698 0.0692266 16.1853 0.202905 16.4751C0.336583 16.7649 0.531532 17.0223 0.774308 17.2295L16.234 30.4695C16.6245 30.8164 17.1254 31.0136 17.6476 31.0259L17.6476 31.0254Z" fill="#1DBEB4" />
                                </svg>
                                <span class="retornar-produto">Retornar</span>
                            </Link>

                        </p>
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
                        <button class="btn-ver-mais">Ver mais</button>
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
                    <div class="normas">
                        <h5>Regras</h5>
                        <p>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM14.59 5.58L8 12.17L5.41 9.59L4 11L8 15L16 7L14.59 5.58Z" fill="#383B58" />
                            </svg>
                            <span class="normas-texto">Check in: depois das 17h</span>
                        </p>
                        <p>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM14.59 5.58L8 12.17L5.41 9.59L4 11L8 15L16 7L14.59 5.58Z" fill="#383B58" />
                            </svg>
                            <span class="normas-texto">Check out: depois das 17h</span>
                        </p>
                        <p>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 6L9 13H2V16H12L19 23L20.25 21.75L3.25 4.75L2 6ZM20.5 13H22V16H20.5V13ZM18 13H19.5V16H18V13ZM18.85 4.88C19.47 4.27 19.85 3.43 19.85 2.5H18.35C18.35 3.5 17.5 4.35 16.5 4.35V5.85C18.74 5.85 20.5 7.68 20.5 9.92V12H22V9.92C22 7.69 20.72 5.77 18.85 4.88ZM14.5 8.7H16.03C17.08 8.7 18 9.44 18 10.75V12H19.5V10.41C19.5 8.61 17.9 7.25 16.03 7.25H14.5C13.5 7.25 12.65 6.27 12.65 5.25C12.65 4.23 13.5 3.5 14.5 3.5V2C13.6115 2 12.7594 2.35295 12.1312 2.98119C11.5029 3.60944 11.15 4.46152 11.15 5.35C11.15 6.23848 11.5029 7.09056 12.1312 7.71881C12.7594 8.34705 13.6115 8.7 14.5 8.7ZM17 15.93V13H14.07L17 15.93Z" fill="#383B58" />
                            </svg>
                            <span class="normas-texto">Proibido fumar</span>
                        </p>
                        <p>
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.39092 0.0150431C7.57092 -0.154957 8.82092 1.13504 9.18092 2.91504C9.54092 4.68504 8.89092 6.26504 7.71092 6.44504C6.54092 6.62504 5.28092 5.33504 4.91092 3.55504C4.54092 1.78504 5.21092 0.205043 6.39092 0.0150431ZM13.5409 0.0150431C14.7309 0.205043 15.3909 1.78504 15.0409 3.55504C14.6609 5.33504 13.4109 6.62504 12.2309 6.44504C11.0409 6.26504 10.3909 4.68504 10.7609 2.91504C11.1209 1.13504 12.3709 -0.154957 13.5409 0.0150431ZM1.04092 4.61504C2.18092 4.12504 3.73092 5.01504 4.54092 6.56504C5.30092 8.14504 5.04092 9.80504 3.91092 10.295C2.78092 10.785 1.24092 9.90504 0.450922 8.33504C-0.339078 6.76504 -0.059078 5.09504 1.04092 4.61504ZM19.0409 4.61504C20.1409 5.09504 20.4209 6.76504 19.6309 8.33504C18.8409 9.90504 17.3009 10.785 16.1709 10.295C15.0409 9.80504 14.7809 8.14504 15.5409 6.56504C16.3509 5.01504 17.9009 4.12504 19.0409 4.61504ZM17.3709 15.395C17.4109 16.335 16.6909 17.375 15.8309 17.765C14.0409 18.585 11.9209 16.885 9.93092 16.885C7.94092 16.885 5.80092 18.655 4.04092 17.765C3.04092 17.275 2.35092 15.975 2.48092 14.895C2.66092 13.405 4.45092 12.605 5.51092 11.515C6.92092 10.105 7.92092 7.45504 9.93092 7.45504C11.9309 7.45504 12.9909 10.065 14.3409 11.515C15.4509 12.735 17.3009 13.765 17.3709 15.395Z" fill="#383B58" />
                            </svg>
                            <span class="normas-texto">São permitidos animais de estimação</span>
                        </p>
                        <p>
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.53 0L12.45 1.08L14.05 2.68C14.27 2.93 14.38 3.22 14.38 3.55C14.38 3.88 14.27 4.19 14.05 4.41L10.5 8.02L11.5 9.1L15.13 5.49C15.66 4.9 15.92 4.25 15.92 3.55C15.92 2.85 15.66 2.19 15.13 1.6L13.53 0ZM9.55 2.02L8.47 3.1L9.08 3.66C9.3 3.88 9.41 4.18 9.41 4.55C9.41 4.92 9.3 5.22 9.08 5.44L8.47 6L9.55 7.08L10.11 6.47C10.64 5.88 10.91 5.24 10.91 4.55C10.91 3.83 10.64 3.18 10.11 2.58L9.55 2.02ZM20 3.61C19.31 3.61 18.67 3.88 18.08 4.41L12.45 10.05L13.53 11.05L19.11 5.49C19.36 5.24 19.66 5.11 20 5.11C20.34 5.11 20.64 5.24 20.89 5.49L21.5 6.1L22.53 5.02L21.97 4.41C21.38 3.88 20.72 3.61 20 3.61ZM6 6.55L1 20.55L15 15.55L6 6.55ZM18 9.61C17.3 9.61 16.66 9.88 16.06 10.41L14.47 12L15.55 13.08L17.14 11.49C17.39 11.24 17.67 11.11 18 11.11C18.33 11.11 18.63 11.24 18.88 11.49L20.5 13.08L21.55 12.05L19.95 10.41C19.36 9.88 18.7 9.61 18 9.61Z" fill="#383B58" />
                                <line x1="0.707107" y1="8.29289" x2="13.7071" y2="21.2929" stroke="#383B58" stroke-width="2" />
                            </svg>
                            <span class="normas-texto">Não são permitidas festas ou eventos</span>
                        </p>
                    </div>
                    <div class="seguranca">
                        <h5>Segurança e higiene</h5>
                        <p>
                            <svg width="24" height="24" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.05 17.05H13.95V7.75H17.05V17.05ZM17.05 23.25H13.95V20.15H17.05V23.25ZM15.5 0C13.4645 0 11.449 0.400919 9.56841 1.17987C7.68786 1.95882 5.97915 3.10054 4.53984 4.53984C1.63303 7.44666 0 11.3891 0 15.5C0 19.6109 1.63303 23.5533 4.53984 26.4602C5.97915 27.8995 7.68786 29.0412 9.56841 29.8201C11.449 30.5991 13.4645 31 15.5 31C19.6109 31 23.5533 29.367 26.4602 26.4602C29.367 23.5533 31 19.6109 31 15.5C31 13.4645 30.5991 11.449 29.8201 9.56841C29.0412 7.68786 27.8995 5.97915 26.4602 4.53984C25.0208 3.10054 23.3121 1.95882 21.4316 1.17987C19.551 0.400919 17.5355 0 15.5 0Z" fill="#383B58" />
                            </svg>
                            <span class="normas-texto">O locador se compromete com a higienização do local antes e depois da locação</span>
                        </p>
                        <p>
                            <svg width="24" height="24" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.05 17.05H13.95V7.75H17.05V17.05ZM17.05 23.25H13.95V20.15H17.05V23.25ZM15.5 0C13.4645 0 11.449 0.400919 9.56841 1.17987C7.68786 1.95882 5.97915 3.10054 4.53984 4.53984C1.63303 7.44666 0 11.3891 0 15.5C0 19.6109 1.63303 23.5533 4.53984 26.4602C5.97915 27.8995 7.68786 29.0412 9.56841 29.8201C11.449 30.5991 13.4645 31 15.5 31C19.6109 31 23.5533 29.367 26.4602 26.4602C29.367 23.5533 31 19.6109 31 15.5C31 13.4645 30.5991 11.449 29.8201 9.56841C29.0412 7.68786 27.8995 5.97915 26.4602 4.53984C25.0208 3.10054 23.3121 1.95882 21.4316 1.17987C19.551 0.400919 17.5355 0 15.5 0Z" fill="#383B58" />
                            </svg>
                            <span class="normas-texto">A residência possui câmeras de segurança</span>
                        </p>
                        <p>
                            <svg width="24" height="24" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.05 17.05H13.95V7.75H17.05V17.05ZM17.05 23.25H13.95V20.15H17.05V23.25ZM15.5 0C13.4645 0 11.449 0.400919 9.56841 1.17987C7.68786 1.95882 5.97915 3.10054 4.53984 4.53984C1.63303 7.44666 0 11.3891 0 15.5C0 19.6109 1.63303 23.5533 4.53984 26.4602C5.97915 27.8995 7.68786 29.0412 9.56841 29.8201C11.449 30.5991 13.4645 31 15.5 31C19.6109 31 23.5533 29.367 26.4602 26.4602C29.367 23.5533 31 19.6109 31 15.5C31 13.4645 30.5991 11.449 29.8201 9.56841C29.0412 7.68786 27.8995 5.97915 26.4602 4.53984C25.0208 3.10054 23.3121 1.95882 21.4316 1.17987C19.551 0.400919 17.5355 0 15.5 0Z" fill="#383B58" />
                            </svg>
                            <span class="normas-texto">O locatário deve fazer o pré-cadastro no condomínio para ter acesso</span>
                        </p>
                    </div>
                    <div class="cancelamento">
                        <h5>Cancelamento</h5>
                        <p>
                            O cancelamento deve ser realizado pelo locador ou locatário antes de 72h da data reservada.
                        </p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Produto;