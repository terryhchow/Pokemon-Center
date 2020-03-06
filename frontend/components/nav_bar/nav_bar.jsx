import React from 'react';
import { Link } from 'react-router-dom';


export default ({ currentUser, openModal }) => {
    const account = currentUser ? (
        <div>
            <h1 className='sign_in_icon' onClick={() => openModal('logout')}>{currentUser.name}</h1>
        </div >
    ) : (
        <div>

            <span onClick={() => openModal('login')}>
                    <img className='sign_in_icon' src={window.sign_in_icon}/>
            </span>
            </div >
        );
    return (
        <ul className="nav_bar">
            <li>
                <Link to="/" className="header-link">
                    <img className="logo" src={window.pokemon_logo} />
                </Link>
            </li>
            <li>{account}</li>
            <li>
                <Link to="/" className="header-link">
                    <img className="cart_icon" src={window.cart_icon} />
                </Link>
            </li>
        </ul>
    )
}



