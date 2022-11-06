import React from 'react';
import {ReactComponent as Book} from '../../assets/icons/book-outline.svg';
import Icon from "../usable/icon/icon";
import './resume.scss'
import Skills from "./skills/skills";

const education = [
    {
        id: 1,
        date: '2021-2022',
        title: 'Icode Academy',
        descr: 'Front-end Dasturlash'
    },
    {
        id: 2,
        date: '2021-2022',
        title: 'Udemy',
        descr: 'Web Developer 2021'
    },
    {
        id: 3,
        date: '2015-2018',
        title: 'Andijon Tibbiyot Kolleji',
        descr: 'Farmatsiya Yonalishi Farmaseft assisenti'
    },
]
const experience = [
    {
        id: 1,
        date: '2022-hozirda',
        title: 'UIL-Agency',
        descr: 'Internshipda qatnashgan bolalar bilan birgalikda tashkil kilingan agenstva 4-oy'
    },
    {
        id: 3,
        date: '2022-2022',
        title: 'Digital-City',
        descr: 'Internship davomidagi tajriba 3-oy'
    },
    {
        id: 1,
        date: '2021-2022',
        title: 'Icode Academy',
        descr: 'Front-end Dasturlash "Oqish davomidagi tajriba 6-oy"'
    },
]

function Resume() {
    return (<main className='resume'>
        <h1 className='resume__title'>Resume</h1>
        <hr/>
        <span className='resume__education'>
            <Icon icon={<Book/>}/>
                <p>Ta'lim</p>
            </span>
        <ol className='resume__list'>
            {education.map(({id, title, descr, date}) => (
                <li key={id} className='resume__list-item'>
                    <h3 className='resume__list-item--title f15'>{title}</h3>
                    <p className='resume__list-item--date f15'>{date}</p>
                    <p className='resume__list-item--descr f15'>{descr}</p>
                </li>
            ))}
        </ol>
        <span className='resume__education'>
            <Icon icon={<Book/>}/>
                <p>Tajriba</p>
            </span>
        <ol className='resume__list'>
            {experience.map(({id, title, descr, date}) => (
                <li key={id} className='resume__list-item'>
                    <h3 className='resume__list-item--title f15'>{title}</h3>
                    <p className='resume__list-item--date f15'>{date}</p>
                    <p className='resume__list-item--descr f15'>{descr}</p>
                </li>
            ))}
        </ol>
        <Skills/>
    </main>);
}

export default Resume;