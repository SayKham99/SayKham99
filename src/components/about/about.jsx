import React from 'react';
import './about.scss'

import {ReactComponent as App} from "../../assets/icons/icon-app.svg";
import {ReactComponent as Design} from "../../assets/icons/icon-design.svg";
import {ReactComponent as Dev} from "../../assets/icons/icon-dev.svg";
import {ReactComponent as Photo} from "../../assets/icons/icon-photo.svg";
import Card from "./aboutCard/card";

const doing = [
    {
        id: 1,
        icon: <Design/>,
        title: 'Web Dizayn',
        descr: 'Professional darajada yaratilgan eng zamonaviy va sifatli dizayn.'
    },
    {
        id: 2,
        icon: <Dev/>,
        title: 'Web Dasturlash',
        descr: 'Professional darajada saytlarni yuqori sifatli ishlab chiqish.'
    },
    {
        id: 3,
        icon: <Dev/>,
        title: 'Back-end',
        descr: 'Back-end integratsiya RESTful-API/REST-API'
    },
    {
        id: 4,
        icon: <Dev/>,
        title: 'Web Dasturlash',
        descr: 'Professional darajada saytlarni yuqori sifatli ishlab chiqish.'
    },
]

function About() {
    return (<main className='about'>
        <div className='about__wrapper'>
            <h1>Men</h1>
            <hr className='about__wrapper-divider'/>
            <p className='about__wrapper-text f15'>
                Mening ismim Hamidullo. Men frontend dasturchisiman.
                Men hozir yosh, iqtidorli va o'sib borayotgan Frontend Dasturchiman.
                <br/>
                <br/>
                Mening tarjimai holimga qarasangiz, ehtimol
                Siz doimiy izlanish va o'rganishni ko'rasiz.
                Yoshligimdan hamma narsani mukammal qilishga harakat qildim va bunga ko'p vaqt sarfladim.
                Men barcha bilimlarni mukammal va puxta egallashga harakat qildim,
                Shu kungacha bilimimni yo'qotmadim,
                o'rganish va o'rganishni davom ettirish uchun motivatsiya.
            </p>
            <h2>Nima qila olaman?</h2>
            <div className='about__wrapper-card'>
                {doing.map(type => (
                    <Card data={type}/>
                ))}
            </div>
        </div>
        {/*<Testimonial/>
        <Partners/>*/}
    </main>);
}

export default About;