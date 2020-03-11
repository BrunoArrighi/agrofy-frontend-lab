import React, { useState } from 'react';
import Button from '../Button/Button';
import './SearchBar.css';


const SearchBar = (props) => {
    const [searchText, setSearchText] = useState('');
    return (
        <div className="search">
            <input value={searchText} onChange={(event) => setSearchText(event.target.value)} type="text"></input>
             <Button callback={() => props.search(searchText)} label={"Search"}/>
             <Button callback={() => props.refresh()} label={"Refresh"}/>
        </div>
    )
}

export default SearchBar;