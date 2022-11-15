import React from 'react';
import './about.scss'

import {ReactComponent as App} from "../../assets/icons/icon-app.svg";
import {ReactComponent as Design} from "../../assets/icons/icon-design.svg";
import {ReactComponent as Dev} from "../../assets/icons/icon-dev.svg";
import {ReactComponent as Photo} from "../../assets/icons/icon-photo.svg";
import Card from "./aboutCard/card";
import {Text} from "../../utils/context/lang";
import Testimonial from "./testimonials/testimonial";
import Partners from "./partners/partners";
import Resume from "../resume/resume";

const doing = [
    {
        id: 1,
        icon: <Design/>,
        title: "canido1title",
        descr: "canido1descr"
    },
    {
        id: 2,
        icon: <Dev/>,
        title: "canido2title",
        descr: "canido2descr"
    }
]

function About() {
    return (<main className='about'>
        <div className='about__wrapper'>
            <h1><Text tid="aboutme"/></h1>
            <hr className='about__wrapper-divider'/>
            <p className='about__wrapper-text f15'>
                <Text tid="abouttitle"/>
                <br/>
                <br/>
                <Text tid="aboutdescr"/>
            </p>
            {/*<h2><Text tid="whatcanido"/></h2>
            <div className='about__wrapper-card'>
                {doing.map(type => (
                    <Card data={type}/>
                ))}
            </div>*/}
        </div>
        <Resume/>
        {/*<Testimonial/>
        <Partners/>*/}
    </main>);
}

export default About;