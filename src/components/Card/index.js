import './style.scss';
import { Link } from "react-router-dom";
import { booking } from '../../data/booking';
import { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import Home from '../../pages/Home/index'

function Card() {
    // Função para dar fetch na api e salvar o produto no localStorage (estava dando problema no useAxios para carregar as imagens)
    function pegarProduto(idDoProduto) {
        const dadosDoProduto = fetch(`http://44.203.195.230:8080/produto/${idDoProduto}`)
            .then(function(respostaDoServidor) {

                // 2. Pedir a resposta do JSON ao servidor.
                let respostaDoServidorEmJSON = respostaDoServidor.json();

                // 3. Retornar a promessa do JSON. 
                return respostaDoServidorEmJSON;
            })
            .then(function(produto) {

                // 4. Capturei a resposta do servidor do JSON.
                localStorage.setItem('produto', JSON.stringify(produto));
            });
    }    

    // /**
    //  * Pedir os dados de cadastro do usuário.
    //  * @param {string} tokenDoUsuario Token JWT da autenticação do usuário.
    //  */
    // function pedirInformacoesDoUsuario(tokenDoUsuario) {

    //     // Configurações da requisição GET.
    //     let configuracoes = {
    //         method: 'GET',
    //         headers: {
    //             'authorization': tokenDoUsuario
    //         },
    //     }

    //     // Requisição para retorno dos dados de cadastro do usuário.
    //     fetch(`${BASE_URL_API}/users/getMe/`, configuracoes)
    //         .then(function (respostaDoServidor) {
                    
    //             // Retorno apenas dos dados convertidos em JSON.
    //             let JSON = respostaDoServidor.json();

    //             // Retorno da promessa convertida em JSON.
    //             return JSON;
    //         })
    //         .then(function (respostaDoServidorEmJSON) {
                
    //             // Apresentando resultado final no console.log().
    //             console.log(`GET pedirInformacoesDoUsuario() ${JSON.stringify(respostaDoServidorEmJSON)}`);

    //         });

    // }

    //  --- início da lógica da busca por categorias --- 
    const [buscaCategoria, setBuscaCategoria] = useState(false);
    const [escolhaCategoria, setEscolhaCategoria] = useState("");
    const [cardsSelecionados, setCardsSelecionados] = useState("");
    const categorias = useAxios("/categoria")

    function Busca(id) {
        let filtro = booking.filter(categoria => categoria.idCategoria === id)
        if (!buscaCategoria || buscaCategoria && escolhaCategoria != id) {
            setCardsSelecionados(filtro)
            setEscolhaCategoria(id)
            setBuscaCategoria(true)
            window.scrollTo(0, 10000)
        } else if (buscaCategoria && escolhaCategoria == id) {
            setCardsSelecionados("")
            setEscolhaCategoria("")
            setBuscaCategoria(false)
        }
    }
    //  --- Fim da lógica da busca por categorias --- 

    return (        
            <>
                {/*  --- início das categorias --- */}
                <h2 className="busca-categoria">Busca por categoria</h2>
                <div className="categorias">
                    {categorias.map((a) =>
                        <div key={a.id} >
                            <div className="card-categoria" onClick={() => Busca(a.id)}> {/* ---- Problema com hook ---- */}
                                <div className="img-categoria">
                                    <img className="img-card-categoria" src={a.url} alt={a.nome}></img>
                                </div>
                                <div className="nome-categoria">
                                    <p><strong>{a.nome}</strong></p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/*  --- Fim das categorias --- */}
                {/* ---- Início do grid de cards ---- */}
                <h2 className="acomodacoes-disponiveis">Acomodações disponíveis</h2>
                <div className="grid">
                    {!buscaCategoria ?
                        booking.map((a) =>
                            <div className="card" key={a.id}>
                                <div>
                                    <Link to={`/produto/${a.id}`}><img className="img-card" src={a.url} alt={a.nome} ></img></Link>
                                </div>
                                <div className="texto">
                                    <div className="avaliacao">
                                        <p> <span className="avaliacao-texto" >Avaliação </span>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#FBC02D" /></svg>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#FBC02D" /></svg>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#FBC02D" /></svg>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#FBC02D" /></svg>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#FBC02D" /></svg>
                                        </p>
                                    </div>
                                    <div className="titulo">
                                        <h3>{a.nome}</h3>
                                    </div>
                                    <div className="localizacao">
                                        <p>
                                            <svg width="12" height="20" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12.35C8.14752 12.35 7.32995 12.0076 6.72716 11.3981C6.12436 10.7886 5.78571 9.96195 5.78571 9.1C5.78571 8.23805 6.12436 7.4114 6.72716 6.8019C7.32995 6.19241 8.14752 5.85 9 5.85C9.85248 5.85 10.67 6.19241 11.2728 6.8019C11.8756 7.4114 12.2143 8.23805 12.2143 9.1C12.2143 9.5268 12.1311 9.94941 11.9696 10.3437C11.8081 10.738 11.5713 11.0963 11.2728 11.3981C10.9744 11.6999 10.62 11.9393 10.2301 12.1026C9.84008 12.2659 9.42211 12.35 9 12.35ZM9 0C6.61305 0 4.32387 0.958747 2.63604 2.66533C0.948211 4.37191 0 6.68653 0 9.1C0 15.925 9 26 9 26C9 26 18 15.925 18 9.1C18 6.68653 17.0518 4.37191 15.364 2.66533C13.6761 0.958747 11.3869 0 9 0Z" fill="#545776" /></svg>
                                            <span>{a.localizacao}</span>
                                        </p>
                                    </div>
                                    <div className="descricao">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex quis diam bibendum aliquet vel non tellus.  </p>
                                    </div>
                                    <div className="btn">
                                        <Link to={`/produto/${a.id}`}><button className="btn-produto" onClick={() => pegarProduto(a.id)}>Ver mais</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                        : buscaCategoria && escolhaCategoria != "" ? cardsSelecionados.map((a) =>
                            <div className="card" key={a.id}>
                                <div>
                                    <Link to="/produto"><img className="img-card" src={a.url} alt={a.name}></img></Link>
                                </div>
                                <div className="texto">
                                    <div className="avaliacao">
                                        <p> <span className="avaliacao-texto">Avaliação </span>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#FBC02D" /></svg>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#FBC02D" /></svg>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#FBC02D" /></svg>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#FBC02D" /></svg>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27778 0L8.91174 4.83688H14.1994L9.92159 7.82624L11.5555 12.6631L7.27778 9.67376L3.00001 12.6631L4.63397 7.82624L0.3562 4.83688H5.64382L7.27778 0Z" fill="#FBC02D" /></svg>
                                        </p>
                                    </div>
                                    <div className="titulo">
                                        <h3>{a.name}</h3>
                                    </div>
                                    <div className="localizacao">
                                        <p>
                                            <svg width="12" height="20" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12.35C8.14752 12.35 7.32995 12.0076 6.72716 11.3981C6.12436 10.7886 5.78571 9.96195 5.78571 9.1C5.78571 8.23805 6.12436 7.4114 6.72716 6.8019C7.32995 6.19241 8.14752 5.85 9 5.85C9.85248 5.85 10.67 6.19241 11.2728 6.8019C11.8756 7.4114 12.2143 8.23805 12.2143 9.1C12.2143 9.5268 12.1311 9.94941 11.9696 10.3437C11.8081 10.738 11.5713 11.0963 11.2728 11.3981C10.9744 11.6999 10.62 11.9393 10.2301 12.1026C9.84008 12.2659 9.42211 12.35 9 12.35ZM9 0C6.61305 0 4.32387 0.958747 2.63604 2.66533C0.948211 4.37191 0 6.68653 0 9.1C0 15.925 9 26 9 26C9 26 18 15.925 18 9.1C18 6.68653 17.0518 4.37191 15.364 2.66533C13.6761 0.958747 11.3869 0 9 0Z" fill="#545776" /></svg>
                                            <span>{a.localizacao}</span>
                                        </p>
                                    </div>
                                    <div className="descricao">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex quis diam bibendum aliquet vel non tellus.  </p>
                                    </div>
                                    <div className="btn">
                                        <Link to={`/produto/${a.id}`}><button className="btn-produto" onClick={() => pegarProduto(a.id)}>Ver mais</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                            : ""
                    },
                </div>
                {/* ---- Fim do grid de cards ---- */}
            </>        
    )
}

export default Card;