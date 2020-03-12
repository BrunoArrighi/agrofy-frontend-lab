import React from 'react';
import './HistorySection.css';





const HistorySection = () => {
    return (<div className="historySection">
    <h2>Pokemon history</h2>
    <div className='some-page-wrapper'>
      <div className='row'>
        <div className='column-1'>
          <div className="element1">
            <div className="line-g">   </div>
              <div className="year-g">
                <i className="fa fa-dot-circle"></i>
              <span>1980</span>
            </div>
        </div>
        </div>
        <div className='column-2'>
          <div>
            <h3 className="green">Firs Steps</h3>  
        <p> Pokémon is short for “Pocket Monsters", the original Japanese name. The franchise has its roots in a gaming magazine in the early 1980s in Japan—Game Freak, started by Satoshi Tajiri and Ken Sugimori. Tajiri was the writer, while Sugimori was the illustrator.</p>
        </div>
        </div>
      </div>
      <div className='row2'>
        <div className='column-4'>
          <div className="element1">
            <div className="line-r">   </div>
              <div className="year-r">
                <i className="fas fa-gamepad"></i>
              <span>1996 </span>
            </div>
        </div>
        </div>
        <div className='column-3'>
          <div>
            <h3 className="red" >Game Boy</h3>  
        <p> 26 February 1996 marks the debut of the Pokémon franchise in the form of both those games on the Game Boy in Japan. At its heart, Pocket Monsters: Red and Green was a very basic Japanese role-playing game.</p>
        </div>
        </div>
      </div>
      <div className='row'>
        <div className='column-1'>
          <div className="element1">
            <div className="line-y">   </div>
              <div className="year-y">
                <i className="fas fa-paw"></i>
              <span>1998</span>
            </div>
        </div>
        </div>
        <div className='column-2'>
          <div>
            <h3 className="yellow">Pikachu</h3>  
        <p> The popularity of the anime and Yellow, I believe, led to Pikachu becoming the most recognizable and loved Pokémon out there. Pocket Monsters’ success led to North America getting the games in 1998 for the Game Boy (as Pokémon Red and Blue). These few years in the public saw Pokémon go from a game about a hobby to a worldwide phenomenon</p>
        </div>
        </div>
      </div>
      
    </div>
    </div>)


}

export default HistorySection;