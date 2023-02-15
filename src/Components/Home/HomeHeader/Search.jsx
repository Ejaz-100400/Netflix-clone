import React from 'react';
export default function search(){
    const[search,setsearch]=React.useState(false);
    function handleSearch(){
        setsearch(prev=>!prev)
    }
    return(
        <>
            <div class="search-bar mt-1 py-1" style={{border:search?'1px solid white':'none',backgroundColor:search?'black':'transparent'}}>
                <i class="fas fa-search search__icon " onClick={handleSearch}></i>
                <input type="text" id="box" placeholder="Titles,genres...." class="search__box fw-normal"
                style={{width:search?'300px':'0px'}}/>
            </div>
        </>
    )
}