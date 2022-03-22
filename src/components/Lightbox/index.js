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
                                <button onClick={hideLightBox}>X</button>
                            </div>
                        </>
                        : ""
                }
            {/* ----- Fim da lightbox que aparece com o botão "ver mais" ----- */}
        </>
    )
}
