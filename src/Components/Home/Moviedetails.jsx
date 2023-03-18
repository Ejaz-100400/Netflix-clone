import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context'
export default function Moviedetails(){
    const {displaymovie,clearmoviedetails, moviedetailsvolume,
        moviedetailvol,playVideo,enablemoviedetail}=React.useContext(Context);
    // MAPPING MOVIEDETAILS COMPONENT
    const moviedetail = displaymovie.map((movie)=>{
        // console.log(movie.volume)
        return(
            <div className="movie-details-container position-relative">

                {/* <img src={movie.banner} alt="" width='300' className='position-absolute w-100 moviedetail-banner'/> */}
                <div className='volume-controls-movie-detail position-absolute' onClick={()=>moviedetailsvolume()}>
                {
                    moviedetailvol?<i class="fa-solid fa-volume-xmark"></i>:<i class="fa-solid fa-volume-low"></i>
                }
                </div>
                <i className="fa-solid fa-xmark fa-1x text-light position-absolute" onClick={()=>clearmoviedetails()}></i>
                <div className='movie-details-section position-absolute d-flex flex-column justify-content-end text-light'>
                    <h5>Netflix {movie.type}</h5>
                    <h1>{movie.moviename}</h1>

                    {/* MOVIE PLAY BUTTONS */}

                    <div className='moviemain-btns d-flex gap-3 align-items-center pt-2'>
                        <Link to={`/playvideo/${movie._id}`} className='text-decoration-none text-dark'>
                        <button className='btn btn-light p-2 movie-detail-play-btn d-flex gap-2 align-items-center justify-content-center'
                        onClick={playVideo(movie._id)}>
                            <i class="fa-solid fa-play"></i>Play</button>
                        </Link>
                        {/* <button className='btn btn-light p-2 movie-detail-play-btn d-flex gap-2 align-items-center justify-content-center'><i class="fa-solid fa-play"></i>Play</button> */}
                    </div>

                </div>
                <div className="movie-details-video skeleton-moviebanner">
                {
                    moviedetailvol?<video autoPlay loop muted className='movie-videobanner'>
                    <source src={`http://netflix-backendata.vercel.app/shows/${movie._id}`} />
                </video>:<video autoPlay loop  className='movie-videobanner'>
                    <source src={`http://netflix-backendata.vercel.app/shows/${movie._id}`} />
                </video>
                }

                </div>
                <div className="movie-detalis-title-section  position-relative text-light px-3">
                    <div className='movie-details-title position-relative d-flex gap-5 align-items-center justify-content-center'>
                        <div className='w-100'>
                            <div className='d-flex gap-4 align-items-center w-50 py-2'>
                                <span>Release year</span>
                                <span>{movie.duration}</span>
                            </div>
                            <p className='movie-detail-pa'>{movie.synopsis}</p>
                        </div>
                        <div className=''>
                            <div className='py-2'>
                                <span style={{color:'silver'}}>Cast:</span>
                                <span>Actor1 Actor2 Actor3</span>
                            </div>
                            <div className='py-2'>
                                <span style={{color:'silver'}}>Genres:</span>
                                <span>Actor1 Actor2 Actor3</span>
                            </div>
                        </div>
                    <div>

                        </div>
                    </div>
                </div>

            </div>
        )
    })
    return(
        <div className="movie--details--component justify-content-center pt-5" style={{display:enablemoviedetail?'flex':'none'}}>
            {moviedetail}
        </div>
    )
}
// d-flex 