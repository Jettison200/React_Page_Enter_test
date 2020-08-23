import React from 'react';
import '../scss/nav.scss';

function Nav(){
    return(
        <nav>
            <div className="nav-container">
                <p className="logo">Lirosen</p>
                <ul className="nav-link-container">
                    <li className="nav-link"><a href="/">Home</a></li>
                    <li className="nav-link"><a href="/">About</a></li>
                    <li className="nav-link"><a href="/">Services</a></li>
                    <li className="nav-link"><a href="/">Testimony</a></li>
                    <li className="nav-link"><a href="/">Pricing</a></li>
                    <li className="nav-link"><a href="/">Contact</a></li>
                </ul>
            </div>

        </nav>
    )
};

export default Nav;