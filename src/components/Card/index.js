import './style.scss';
import { Link } from "react-router-dom";

function Card() {
    const booking = [
        { name: "Apartamento", localizacao: "São paulo, SP", url: "https://betaimages.lopes.com.br/realestate/sml/REO297712/5CFACCDFF2BA3BF203708E56FEA3851B.JPG" },
        { name: "Casa", localizacao: "São Luíz, MA", url: "https://s2.glbimg.com/A9UbOT66bw7kqdr367utaTiPsGk=/620x413/smart/e.glbimg.com/og/ed/f/original/2020/12/21/5-coisas-que-vao-te-fazer-sonhar-com-esta-casa-de-praia-contemporanea-7.jpg" },
        { name: "Casa na praia", localizacao: "Angra dos reis, RJ", url: "https://s2.glbimg.com/ulqlv4AMKzTknUujSFXc0aGKQXI=/smart/e.glbimg.com/og/ed/f/original/2019/10/15/decoracao-casa-de-praia-8.jpg" },
        { name: "Flat", localizacao: "São paulo, SP", url: "https://2.bp.blogspot.com/-Y88zLeZOEi4/XEiZiWxm07I/AAAAAAAB710/MI-1p4EaXwoCOoP-qvByQZXoyd6JnhBXACLcBGAs/s1600/32290295-5aa6-4123-a51a-5a6470993415.jpg" },
    ]

    return (
        <>
            <div class="grid"> {/* ---- Início do grid de cards ---- */}
                {booking.map((a) =>
                    <div class="card">
                        <div>
                            <img class="img-card" src={a.url} alt={a.name}></img>
                        </div>
                        <div class="texto">
                            <div class="avaliacao">
                                <p> <span class="avaliacao-texto">Avaliação </span>
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#FBC02D" /></svg>
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#FBC02D" /></svg>
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#FBC02D" /></svg>
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#FBC02D" /></svg>
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#FBC02D" /></svg>
                                </p>
                            </div>

                            <div class="titulo">
                                <h3>{a.name}</h3>
                            </div>
                            <div class="localizacao">
                                <p>
                                    <svg width="12" height="20" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12.35C8.14752 12.35 7.32995 12.0076 6.72716 11.3981C6.12436 10.7886 5.78571 9.96195 5.78571 9.1C5.78571 8.23805 6.12436 7.4114 6.72716 6.8019C7.32995 6.19241 8.14752 5.85 9 5.85C9.85248 5.85 10.67 6.19241 11.2728 6.8019C11.8756 7.4114 12.2143 8.23805 12.2143 9.1C12.2143 9.5268 12.1311 9.94941 11.9696 10.3437C11.8081 10.738 11.5713 11.0963 11.2728 11.3981C10.9744 11.6999 10.62 11.9393 10.2301 12.1026C9.84008 12.2659 9.42211 12.35 9 12.35ZM9 0C6.61305 0 4.32387 0.958747 2.63604 2.66533C0.948211 4.37191 0 6.68653 0 9.1C0 15.925 9 26 9 26C9 26 18 15.925 18 9.1C18 6.68653 17.0518 4.37191 15.364 2.66533C13.6761 0.958747 11.3869 0 9 0Z" fill="#545776" /></svg>
                                    <span>{a.localizacao}</span>
                                </p>
                            </div>
                            <div class="descricao">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex quis diam bibendum aliquet vel non tellus.  </p>
                            </div>
                            <div class="btn">
                                <Link to="/produto"><button class="btn-produto">Ver mais</button></Link>
                            </div>
                        </div>
                    </div>
                )}
            </div> {/* ---- Fim do grid de cards ---- */}
        </>
    )
}

export default Card;