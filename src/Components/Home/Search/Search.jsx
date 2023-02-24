import React from "react"
import { Context } from "../../../Context"
import Searchitems from "./Serachitems"
export default function Search(){
    const{searchdata}=React.useContext(Context)
    let searchelements= searchdata.map((searchele)=>{
        return(
            <Searchitems
            key={searchele._id}
            {...searchele}/>
        )
    })
    return(
        <div className="netflix-movie-tiles">
        <div className="pt-5 container">
            <h4 className="text-light mt-4">My List</h4>
            <div className='d-flex flex-wrap gap-1'>
                {searchelements}  
            </div>   
        </div>
    </div>
    )
}