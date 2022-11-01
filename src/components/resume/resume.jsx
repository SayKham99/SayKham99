import React from 'react';
import {ReactComponent as Book} from '../../assets/icons/book-outline.svg';
import Icon from "../usable/icon/icon";
import './resume.scss'
import Skills from "./skills/skills";
const education = [
    {
        id: 1,
        date:'2015-2018',
        title: 'Andijon Tibbiyot Kolleji',
        descr: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
    },
    {
        id: 2,
        date:'2021-2022',
        title: 'Icode Academy',
        descr: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
    },
    {
        id: 3,
        date:'2021-2022',
        title: 'Udemy',
        descr: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
    },
]

function Resume() {
    return (<main className='resume'>
        <h1 className='resume__title'>Resume</h1>
        <hr/>
        <span className='resume__education'>
            <Icon icon={<Book/>}/>
                <p>Education</p>
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
                <p>Experience</p>
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
        <Skills/>
    </main>);
}

export default Resume;