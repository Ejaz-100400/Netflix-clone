import React from 'react';
import { Context } from '../../../Context';
export default function search(){
    const{handleSearch,query,setQuery}=React.useContext(Context)
    const[search,setsearch]=React.useState(true);
    // const [query, setQuery] = React.useState('');

    // function handleSearch(){
    //     fetch(`http://localhost:3000/shows/search/${query}`)
    //     .then(response=>response.json())
    //     .then(data=>console.log(data.Netflixsearch));
    // }
    function handleInputChange(event){
        setQuery(event.target.value);
        if (event.keyCode === 13) {
            setQuery(event.target.value)
          }
    }
    return(
        <>
            <div class="search-bar mt-1 py-1" style={{border:search?'1px solid white':'none',backgroundColor:search?'black':'transparent'}}>
                <i class="fas fa-search search__icon" onClick={()=>handleSearch()}></i>
                <input type="text" id="box" placeholder="Titles,genres...." class="search__box fw-normal" 
                name='search' 
                onChange={handleInputChange} 
                value={query}
                style={{width:search?'300px':'0px'}}/>
            </div>
        </>
    )
}