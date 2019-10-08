import React from 'react';
import '../assets/styles/components/Search.scss'

const Search = () =>
{
    return(
        <section className="main">
        <p>Bienvenido a Egg See! <br/>
           mira tus videos favoritos 😃</p>
        <h2>¿Que quieres ver hoy?</h2>
        <input className="search" type="text" placeholder="Quiero ver..."/>
    </section>
    )
}

export default Search;