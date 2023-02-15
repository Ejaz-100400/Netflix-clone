import React from 'react';
import { Context } from "../../../Context"
import { Link } from 'react-router-dom';
export default function NewList(props){
    const {Toggle,displayMovieDetails,removetolist,playVideo}=React.useContext(Context);
    function addtolist(){
        setlist(true);
        addmovietolist(props);
    }
    function removelist(){
        setlist(false);
        removetolist(props);
    }
    return (
        <div className="movitile-item position-relative"   onClick={()=>Toggle(props._id)}>
        <div className='skeleton'>
        <img src={props.banner} alt="" className='banner' />
        </div>
        {
           <div className="movietile-item-show  py-1">
            <div className="movietile-desc d-flex align-items-center justify-content-between px-2">
            <div className="desc-icons d-flex gap-2 align-items-center">
                <Link to={`/playvideo/${props._id}`} className='text-decoration-none text-dark'  onClick={()=>playVideo(props._id)}>
                    <i class="ri-play-circle-fill"></i>
                </Link>
                                                <div className='list-check'>
                                                    {
                                                        <i class="fa-solid fa-check text-light" onClick={()=>removetolist(props._id)}></i>
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
                                        <ul className="desc-genre d-flex  list-unstyled text-light">
                                            {/* {props.genre.forEach(gen=>{<li className='px-2'>{gen}</li>})} */}
                                            <li className=''>Exciting</li>
                                            <li className=''>Fantasy</li>
                                            <li>Emble</li>
                                        </ul>
                                    </div>
        }
        
         </div>
    )
}