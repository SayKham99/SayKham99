import React from 'react';
import './about.scss'

import {ReactComponent as App} from "../../assets/icons/icon-app.svg";
import {ReactComponent as Design} from "../../assets/icons/icon-design.svg";
import {ReactComponent as Dev} from "../../assets/icons/icon-dev.svg";
import {ReactComponent as Photo} from "../../assets/icons/icon-photo.svg";
import Card from "./aboutCard/card";
import Testimonial from "./testimonials/testimonial";
import Partners from "./partners/partners";

const doing = [
    {
        id: 1,
        icon: <Design/>,
        title: 'Web Design',
        descr: 'The most modern and high-quality design made at a professional level.'
    },
    {
        id: 2,
        icon: <Dev/>,
        title: 'Web Development',
        descr: 'High-quality development of sites at the professional level.'
    },
    {
        id: 3,
        icon: <App/>,
        title: 'Mobile Apps',
        descr: 'Professional development of applications for iOS and Android.'
    },
    {
        id: 4,
        icon: <Photo/>,
        title: 'Photography',
        descr: 'I make high-quality photos of any category at a professional level.'
    },

]

function About() {
    return (<main className='about'>
        <h1>About Me</h1>
        <hr className='about__divider'/>
        <p className='about__text f15'>
            I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print
            media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
            <br/> <br/>
            My job is to build your website so that it is functional and user-friendly but at the same time
            attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy
            to use. My aim is to bring across your message and identity in the most creative way. I created web
            design for many famous brand companies.
        </p>
        <h2>What I'm doing</h2>
        <div className='about__card'>
            {doing.map(type => (
                <Card data={type}/>
            ))}
        </div>
        <Testimonial/>
        <Partners/>
    </main>);
}

export default About;