import React from 'react';
import '../assets/styles/components/Categories.scss'

const Categories = ({  children , name }) =>
{
    return(
        <div>
            <h3 className="tituloA">{name}</h3>
            {children}
        </div>
    )
}

export default Categories;