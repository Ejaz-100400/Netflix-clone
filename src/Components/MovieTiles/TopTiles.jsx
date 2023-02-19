import React from "react"
import { Context } from "../../Context";
import { Link } from "react-router-dom";
export default function TopTiles(props){
    const[list,setlist]=React.useState(false)
    const {Toggle,displayMovieDetails,addmovietolist,removetolist,playVideo}=React.useContext(Context);
    return(
        <>
        <div className="position-relative toptile-item d-flex align-items-center pt-4 py-5" id={props._id}>
            <div className="toptile-main">
            <div className="position-absolute top-no">
            <h1 className="skeleton skeleton-text">{props.top?props.top:props.topmovie}</h1>
            </div>
            <div className="skeleton-portrait">
            <img src={props.topbanner} alt=""  width='150' className="top-banner"/> 
            </div> 
            </div>
            <div className="position-absolute-top top-movie-tile">
        <div className="movitile-item position-relative"   onClick={()=>Toggle(props._id)}>
        <div className=''>
        {/* <video autoPlay loop muted className='video-herobanner' width='150' >
                    <source src={props.videourl}/>
                </video> */}
        <img src={props.banner} alt="" className='banner' />
        </div>
        {
           <div className="movietile-item-show  py-1">
            <div className="movietile-desc d-flex align-items-center justify-content-between px-2">
            <div className="desc-icons d-flex gap-2 align-items-center">
            <Link to={`/playvideo/${props._id}`} className="text-decoration-none text-dark" onClick={()=>playVideo(props._id)}>
                                                <i class="ri-play-circle-fill"></i>
                                            </Link>
                                                <div onClick={()=>setlist(prev=>!prev)} className='list-check'>
                                                    {
                                                        list?<i class="fa-solid fa-check text-light" onClick={()=>removetolist(props._id)}></i>:<i class="ri-add-line text-light"onClick={()=>addmovietolist(props)}></i>
                                                    }
                                                </div>
                                                <i class="ri-thumb-up-line text-light"></i>
                                            </div>
                                            {/* <Link to={`/browse/moviedetails/${props._id}`}>
                                            <i className="fa-solid fa-chevron-down" onClick={()=>displayMovieDetails(props)}></i>
                                            </Link> */}
                                             <i className="fa-solid fa-chevron-down text-light" onClick={()=>displayMovieDetails(props)}></i>
                                        </div>
                                        <div className='desc-content d-flex gap-1'>
                                            <span className='text-success'>96%match</span>
                                            <span className='text-light'>{props.duration}</span>
                                        </div>
                                        <ul className="desc-genre d-flex  list-unstyled">
                                            {/* {props.genre.forEach(gen=>{<li className='px-2'>{gen}</li>})} */}
                                            <li className=''>Exciting</li>
                                            <li className=''>Fantasy</li>
                                            <li>Emble</li>
                                        </ul>
                                    </div>
        }
        
         </div> 
        </div>
        </div>
        </>
    )
}