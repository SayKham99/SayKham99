import React from 'react';
import './partners.scss'

import partner1 from '../../../assets/icons/logo-1-color.png'
import partner2 from '../../../assets/icons/logo-2-color.png'
import partner3 from '../../../assets/icons/logo-3-color.png'
import partner4 from '../../../assets/icons/logo-4-color.png'
import partner5 from '../../../assets/icons/logo-5-color.png'
import partner6 from '../../../assets/icons/logo-6-color.png'

const partner = [
    {
        id: 1,
        icon: partner1,
    },
    {
        id: 2,
        icon: partner2,
    },
    {
        id: 3,
        icon: partner3,
    },
    {
        id: 4,
        icon: partner4,
    },
    {
        id: 5,
        icon: partner5,
    },
    {
        id: 6,
        icon: partner6,
    },
]

function Partners() {
    return (
        <main className='partners'>
            <h2 className='partners__title'>Hamkorlar</h2>
            <ul className='partners__items'>
                {partner.map(({id, icon}) => (
                    <li key={id} className='partners__items-item'>
                        <img src={icon} alt=""/>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Partners;