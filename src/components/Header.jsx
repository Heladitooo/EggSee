import React from 'react';
import '../assets/styles/components/Header.scss';
import Logo from '../assets/img/logoEggSee.png';
import UserLogo from '../assets/img/user.jpg';

const Header = () =>
{
    return(
    <header className="header">
        <img className="header__img" src={Logo} alt="Logo :)"/>
        <div className="header__menu">
            <div className="header__menu--user">
                <img src={UserLogo} alt="User img :)"/>
                <p>Pan77</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar sesión</a></li>
            </ul>
        </div>
    </header>
    )
}

export default Header;