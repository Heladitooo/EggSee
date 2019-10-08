import React, {useState, useEffect}from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import '../assets/styles/components/App.scss';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CaroselItem from '../components/CaroselItem';
import useInitialState from '../components/hooks/useInitalState';

const API = 'http://localhost:3000/initalState';
const App = () =>
{
    
    const initialState = useInitialState(API);

    return(
        <div>
            <Header/>
            <Search/>

            <Categories name='  Tú lista :)'>
                <Carousel>
                { initialState.mylist.map( item =>
                    <CaroselItem key={item.id} {...item}/>
                )}
                </Carousel>
            </Categories>

            <Categories name='Famosos'>
                <Carousel>
                { initialState.trends.map( item =>
                    <CaroselItem key={item.id} {...item}/>
                    
                )}
                </Carousel>
            </Categories>

            <Categories name='Creado por Egg See'>
                <Carousel>
                { initialState.originals.map( item =>
                    <CaroselItem key={item.id} {...item}/>
                )}
                </Carousel>
            </Categories>
        </div>
    )
}

export default App;