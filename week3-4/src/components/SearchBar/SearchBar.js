import React, { useState } from 'react';
import Button from '../Button/Button';


const SearchBar = (props) => {
    const [searchText, setSearchText] = useState('');
    return (
        <div>
            <input value={searchText} onChange={(event) => setSearchText(event.target.value)} type="text"></input>
             <Button callback={() => props.search(searchText)} label={"Search"}/>
        </div>
    )
}

export default SearchBar;