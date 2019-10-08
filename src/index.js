import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';

ReactDOM.render(<App/>,document.getElementById('app'))

/*
const intersectionObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting == false) {
      document.body.classList.add('animarBodyEntrada');
      document.body.classList.remove('animarBodysalida');


    }else{
      document.body.classList.remove('animarCaruselEntrada');

      document.body.classList.add('animarCaruselsalida');
      
    }
}, {
    threshold: [0.25],
  });
  
  intersectionObserver.observe(document.querySelector('.carusel'));
*/