import React from 'react';

const Header = () => (
    <header className="header">
        <img className="header__img" src="./logoEggSee.png" alt="Logo :)" />
        <div className="header__menu">
            <div className="header__menu--user">
                <img src="./user.jpg" alt="User img :)" />
                <p>Pan77</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar sesión</a></li>
            </ul>
        </div>
    </header>
)

export default Header;