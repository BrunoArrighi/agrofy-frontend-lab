import React from 'react';
import './Home.css';
import '../Button/Button.css'



const Home = () => {
    return (
        <div>
        <img class="bg-img" src="/fondo-pokemon2.jpg" alt="Home"></img>
        <div class="home-wrapper">
        <div class="home-content">
            <h1> Welcome to Pokedex </h1>
            <h3> Join our comunity to find pokemon's news. </h3>
            
        <button class="button" onclick="location.href='#history'">View more</button>
        </div>
        </div>
        </div>
    )
}

export default Home;