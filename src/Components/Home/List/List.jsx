
import TrendingTiles from '../../MovieTiles/TrendingTiles';
import Listitem from './Listitem'
import React from 'react';
import { Context } from '../../../Context';
export default function Tvshows(){
    const {addmovielist,activityLog}=React.useContext(Context);
    const Listelements = addmovielist.sort((a,b) => a._id - b._id).map((movie)=>{
        return(
              <Listitem key={movie._id}
              {...movie}/>
          )
      })
    return(
        <div className="netflix-movie-tiles">
            <div className="pt-5 container">
                <h4 className="text-light mt-4">My List</h4>
                <div className='d-flex flex-wrap gap-1'>
                    {Listelements}  
                </div>   
            </div>
        </div>
    )
}