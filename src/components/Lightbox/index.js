import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import './style.scss'

export default function LightBox() {
    const [toggler, setToggler] = useState(false);
    const produto = JSON.parse(localStorage.getItem('produto'));

    return (
        <>            
            <button className="btn-ver-mais" onClick={() => setToggler(!toggler)}>
                Ver mais
            </button>
            <FsLightbox
                toggler={toggler}
                sources={[
                    <img id="" src={produto.imagens[0].url}></img>,
                    <img id="" src={produto.imagens[1].url}></img>,
                    <img id="" src={produto.imagens[2].url}></img>,
                    <img id="" src={produto.imagens[3].url}></img>,
                    <img id="" src={produto.imagens[4].url}></img>
                ]}
            />
        </>
    )
}
