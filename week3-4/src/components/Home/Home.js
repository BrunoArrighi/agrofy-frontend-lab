import React from 'react';
import './Home.css';
import '../Button/Button.css';



const Home = () => {
    return (
        <div>
        <img className="bg-img" src="/fondo-pokemon2.jpg" alt="Home"></img>
        <div className="home-wrapper">
        <div className="home-content">
            <h1> Welcome to Pokedex </h1>
            <h3> Join our comunity to find pokemon's news. </h3>
            
        <button className="button">View more</button>
        </div>
        </div>
        </div>
    )
}

export default Home;