import React from 'react';
import '../assets/styles/components/CaroselItem.scss';
import Play from '../assets/img/play.png';
import Plus from '../assets/img/plus.png';


const CaroselItem = ({cover,description,duration,title}) =>
{
    return(
        <div className="carusel-item"> 
            <img className="carusel-item__cover" src={cover} alt="Fondo epico :)"/>
            <div className="carusel-item__dContainer">
                <p className="carusel-item__dContainer--title">{title}</p>
                <div className="carusel-item-dContainer__container">
                    <div className="carusel-item-dContainer__container--containerIcons">
                        <img src={Play} alt=""/>
                        <img src={Plus} alt=""/>
                    </div>
                    <p className="carusel-item-dContainer__container--descripcion">{description}</p>
                    <p className="carusel-item-dContainer__container--more">{`${duration} minutos`}</p>
                </div>   
            </div>
        </div>
    )
}

export default CaroselItem;