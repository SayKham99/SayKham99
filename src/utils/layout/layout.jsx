import React from 'react';
import './layout.scss'
import Container from "../container/Container";
import Sidebar from "../../components/usable/sidebar/sidebar";

function Layout({children}) {
    return (<div className='layout'>
        <Sidebar/>
        <main className='main'>
            {children}
        </main>
    </div>);
}

export default Layout;
/*<div className='main__wrapper'>
            <ScrollTop/>
            <Navbar/>
            <section>{children}</section>
        </div>*/