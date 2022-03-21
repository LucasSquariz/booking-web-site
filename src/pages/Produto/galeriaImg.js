import { useState } from 'react';
import './style2.scss'

// ----- Inicio do código teste -----
const images = [
    { id: 1, nome: "Imagem1", url: "https://betaimages.lopes.com.br/realestate/sml/REO297712/5CFACCDFF2BA3BF203708E56FEA3851B.JPG" },
    { id: 2, nome: "Imagem2", url: "https://www.ryazbek.com.br/wp-content/uploads/2019/11/original-ccba23ab2eb493b23837674485286bcf.jpg" },
    { id: 3, nome: "Imagem3", url: "https://www.incorposul.com.br/wp-content/uploads/2019/08/cropped-como-comprar-um-apartamento-1.jpg" },
    { id: 4, nome: "Imagem4", url: "https://images.adsttc.com/media/images/5d5c/59fb/284d/d166/2000/0358/large_jpg/Apartamento_Kiev-2.jpg?1566333386" },
    { id: 5, nome: "Imagem1", url: "https://www.trisul-sa.com.br/blog/wp-content/uploads/2019/09/apezim.jpg" },
    { id: 6, nome: "Imagem1", url: "https://marquesconstrutora.com.br/wp-content/uploads/2019/05/Fitness-academia-ginastica-lirio-morumbi-lan%C3%A7amento-apartamento-3-dormitorios.jpg" },
    { id: 7, nome: "Imagem1", url: "https://www.chavesnamao.com.br/imn/0358x0250/N/imoveis/111410/6668854/sp-sao-paulo-vila-madalena-apartamento-a-venda-3-quartos-621a63b2-1.jpg" },
]

export default function GerarLightbox() {
    const [lightboxDisplay, setLightBoxDisplay] = useState(false)

    function mostrarLightbox () {
        setLightBoxDisplay(true)
    };

    function hideLightBox(){
        setLightBoxDisplay(false)
    }

    return (
        <>
        {console.log("Quase certo")}
             {
                lightboxDisplay ?
                    <div id="lightbox" onClick={hideLightBox}>
                        <div id="lightbox">
                            <img id="img-card" src={images[3].url} alt={images[3].nome}></img>
                        </div>
                    </div>
                    : ""
            }

        </>
    )
}