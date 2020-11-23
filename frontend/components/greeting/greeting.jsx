import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import ProductIndexContainer from "../product/product_index_container";

const Greeting = ({currentUser, logout, openModal}) => {

    const sessionLinks = () => (
        <div>
            <div className="main-nav">
                <img src={window.logourl} className="logo" width="160px" height="40px"/>

                <div>
                    <input className="search-bar" type="text" placeholder="Search"/>
                </div>

                <nav className="login-signup">
                    <button onClick={() => openModal('login')}>Login</button>
                    <br/>
                    <button onClick={() => openModal('signup')}>Signup</button>
                </nav>
            </div>
            <div className="top-banner">
                <br/>
                <h2 className="font-style">Find things you'll love. Support independent sellers. Only on Animetsy.</h2>
            </div>

        </div>
        
    );

    const LoggedIn = () => (
        <div >
            <div className="main-nav">
                <img src={window.logourl} className="logo" width="160px" height="40px"/>

                <div>
                    <input className="search-bar" type="text" placeholder="Search"/>
                </div>

                <nav>
                    <div>
                        <button onClick={logout}>Logout</button>
                    </div>
                </nav>
            </div>
            <div className="top-banner">
                <br/>
                <h2 className="font-style">Find things you'll love. Support independent sellers. Only on Animetsy.</h2>
            </div>


        </div>
        
    )

    return (
        currentUser ?
            LoggedIn(currentUser, logout) :
            sessionLinks()
    );

};

export default Greeting;