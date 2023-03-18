import React from "react"
import { Link } from "react-router-dom";

import HomeTiles from "../MovieTiles/HomeTiles"
import { Context } from "../../Context"

export default function MainHero(){
    // set state for  video and volume
    const [displayvdeo,setdisplayvdeo]=React.useState(false)
    const [volume,setvolume]=React.useState(false)
    const [showpara,setshowpara]=React.useState(true)
    const {randomItem,displayMovieDetails,playVideo,videourl}=React.useContext(Context)
    return(
        <>
        {/* Element section of Home Page */}
        <main className='netflix-heropage skeleton-moviebanner'
            style={{backgroundImage:displayvdeo?'none':`linear-gradient(to bottom, rgba(0, 0, 0, 0.574),rgba(0, 0, 0, 0.242),rgba(0,0,0,0.9)),url(${randomItem.mainbanner})`}}>
                <div className='d-flex'>
                <div className='netflix-heropage-moviemain position-absolute d-flex flex-column justify-content-end text-light'>
                    <h5>Netflix {randomItem.type}</h5>
                    <h1>{randomItem.moviename}</h1>
                    <p className='w-50' style={{display:showpara?'block':'none'}}>{randomItem.synopsis}</p>
                    <div className='moviemain-btns d-flex gap-3'>
                        
                        
                    <Link to={`/playvideo/${randomItem._id}`} className="text-decoration-none text-dark" onClick={()=>playVideo(randomItem._id)}>
                        <button className='btn btn-light p-2 play-btn d-flex gap-2 align-items-center justify-content-center w-100'>
                            <i class="fa-solid fa-play"></i>Play
                        </button>
                    </Link>
                    <button className='btn p-2 info-btn d-flex gap-2 align-items-center justify-content-center text-light' onClick={()=>displayMovieDetails(randomItem)}>
                        <i class="fa-solid fa-circle-info"></i>Info
                    </button>
                    </div>
                </div>
                </div>
        </main>

        <HomeTiles/>
        </>
    )
}

