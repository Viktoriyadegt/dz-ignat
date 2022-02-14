import React from 'react'
import Header from './Header'
import Routes1 from './Routes1'
import {HashRouter} from "react-router-dom";

function HW5() {
    debugger
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <Routes1/>

            </HashRouter>
        </div>
    )
}

export default HW5
