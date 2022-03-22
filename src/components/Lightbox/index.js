import { useState } from 'react';
import './style.scss'

export default function LightBox() {
    const images = [
        { id: 1, nome: "Imagem1", url: "https://betaimages.lopes.com.br/realestate/sml/REO297712/5CFACCDFF2BA3BF203708E56FEA3851B.JPG" },
        { id: 2, nome: "Imagem2", url: "https://www.ryazbek.com.br/wp-content/uploads/2019/11/original-ccba23ab2eb493b23837674485286bcf.jpg" },
        { id: 3, nome: "Imagem3", url: "https://www.incorposul.com.br/wp-content/uploads/2019/08/cropped-como-comprar-um-apartamento-1.jpg" },
        { id: 4, nome: "Imagem4", url: "https://images.adsttc.com/media/images/5d5c/59fb/284d/d166/2000/0358/large_jpg/Apartamento_Kiev-2.jpg?1566333386" },
        { id: 5, nome: "Imagem5", url: "https://www.trisul-sa.com.br/blog/wp-content/uploads/2019/09/apezim.jpg" },
        { id: 6, nome: "Imagem6", url: "https://betaimages.lopes.com.br/realestate/sml/REO28767/61827C063E6A91EB84892A5A89613A40.JPG" },
        { id: 7, nome: "Imagem7", url: "https://www.chavesnamao.com.br/imn/0358x0250/N/imoveis/111410/6668854/sp-sao-paulo-vila-madalena-apartamento-a-venda-3-quartos-621a63b2-1.jpg" },
    ]

    {/* ----- Início da lógica da galeria lightbox ----- */ }
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);

    function showLightbox() {
        setLightBoxDisplay(true);
    };

    function hideLightBox() {
        setLightBoxDisplay(false);
    };
    {/* ----- Fim da lógica da galeria lightbox ----- */ }

    return (
        <>
            <button className="btn-ver-mais" onClick={() => showLightbox()}>Ver mais</button>
            {/* ----- Inicio da lightbox que aparece com o botão "ver mais" ----- */}
            {
                lightboxDisplay ?
                    <>
                        <div id="lightbox">
                            {images.map((a) =>
                                <img id="lightbox-img" src={a.url}></img>)}
                            <button className="lightbox-close" onClick={hideLightBox}><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.5556 0H29.5556H10.4444H4.44444C3.2657 0 2.13524 0.468252 1.30175 1.30175C0.468252 2.13524 0 3.2657 0 4.44444V10.4444V29.7778V35.5556C0 36.7343 0.468252 37.8648 1.30175 38.6983C2.13524 39.5317 3.2657 40 4.44444 40H10.4444H29.7778H35.5556C36.7343 40 37.8648 39.5317 38.6983 38.6983C39.5317 37.8648 40 36.7343 40 35.5556V29.5556V10.4444V4.44444C40 3.2657 39.5317 2.13524 38.6983 1.30175C37.8648 0.468252 36.7343 0 35.5556 0ZM28 31.1111L20 23.1111L12 31.1111L8.88889 28L16.8889 20L8.88889 12L12 8.88889L20 16.8889L28 8.88889L31.1111 12L23.1111 20L31.1111 28L28 31.1111Z" fill="#545776" />
                            </svg>
                            </button>
                        </div>
                    </>
                    : ""
            }
            {/* ----- Fim da lightbox que aparece com o botão "ver mais" ----- */}
        </>
    )
}
