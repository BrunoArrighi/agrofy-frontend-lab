import React, { useState } from 'react';
import './SearchBar.css';
import ButtonSearch from '../ButtonSearch/ButtonSearch';
import ButtonMobile from '../ButtonMobile/ButtonMobile'


const SearchBar = (props) => {
    const [searchText, setSearchText] = useState('');
    return (
        <div className="search">
            <input value={searchText} onChange={(event) => setSearchText(event.target.value)} type="text"></input>
             <ButtonSearch callback={() => props.search(searchText)} label={"Search"}/>
             <ButtonSearch callback={() => props.refresh()} label={"Refresh"}/>
             <ButtonMobile callback={() => props.search(searchText)} label={<img className="img-mobile" src="search-solid.svg"/>}/>
             <ButtonMobile callback={() => props.refresh()} label={<img className="img-mobile" src="redo-solid.svg"/>}/>
        </div>
    )
}

export default SearchBar;