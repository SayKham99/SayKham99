import React from 'react';
import './card.scss'
function Card({data}) {
    const {id, img, name, descr} = data
    return (
        <div key={id} className='tCard'>
            <div className='tCard__image'>
                <img src={img} alt="name" className='tCard__image-img'/>
                <p className='tCard__image-name'>{name}</p>
            </div>
            <div className='tCard__text'>
                <p className='tCard__text-descr f15'>{descr}</p>
            </div>
        </div>
    );
}

export default Card;