import React from 'react';
import './nav.scss'
import {NavLink, Outlet} from "react-router-dom";

function Nav() {
    return (
        <section className='main'>
            <nav className='main__nav beetwen'>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/resume'}>Resume</NavLink>
                <NavLink to={'/portfolio'}>Portfolio</NavLink>
                {/*<NavLink to={'/blog'}>Blog</NavLink>*/}
                <NavLink to={'/contact'}>Aloqa</NavLink>
            </nav>
            <main className='main__content'>
                <Outlet/>
            </main>
        </section>
    );
}

export default Nav;