import React from 'react'
import Logo from '/public/assets/img/netflixlogo.png'
import { Link } from 'react-router-dom' 
import SearchBar from './SearchBar'
export default function LoginHeader(){
    const [mobbrowse,setmobbrowse]=React.useState(false)
    React.useEffect(() => {
        window.onscroll=function(){
            if(document.documentElement.scrollTop>0){
                document.querySelector('.header-section').style.backgroundColor ='black';
                document.querySelector('.header-section').style.transition='all 0.6s ease-in-out';
                document.querySelector('.header-section-mobile').style.backgroundColor ='black';
                document.querySelector('.header-section-mobile').style.transition='all 0.6s ease-in-out';
            }
            else{
                document.querySelector('.header-section').style.backgroundColor ='transparent';
                document.querySelector('.header-section-mobile').style.backgroundColor ='transparent';
            }
        }
    },[])
    return(
        <>
        <div className='header-section position-fixed w-100 mb-3'>
                <header className='header-container positon-absolute d-flex align-items-center gap4
                '>
                    <div className='header-left mx-3 d-flex align-items-center'>
                    <Link to='/browse'>
                    <img src={Logo} alt="netflixlogo" width='100'/>  
                    </Link>
                    <ul className="header-left-list list-unstyled d-flex gap-4 align-items-center mt-3">
                        <li>
                            <Link to='/browse' className='text-decoration-none text-light'>
                                Home
                            </Link>
                        </li>
                        <li>
                        <Link to='/browse/tvshows' className='text-decoration-none text-light'>
                               TV Shows
                            </Link>
                        </li>
                        <Link to='/browse/movies' className='text-decoration-none text-light'>
                            Movies
                        </Link>
                        <Link to='/browse/new' className='text-decoration-none text-light'>
                            New & Popular
                        </Link>
                        <Link to='/browse/list' className='text-decoration-none text-light'>
                            My List
                        </Link>
                    </ul>
                    </div>
                    <div className='position-absolute header-right'>
                        <div className='header-right d-flex align-items-center gap-4 position-relative'>
                        <Link to={'/browse/search'}>
                        <SearchBar/>
                        </Link>
                        <span>Children</span>
                        <i className="fa-regular fa-bell fa-1x"></i>
                        <img src="https://occ-0-5559-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZBe7K0DPia9LvzIkQ4yzqX9NocZlAjS1MOyEuBQD1WmFuLKZwvq0bxc4n4_EV73khqgwed0PYLNml0V8LCymt31e7x-8jQ.png?r=229" alt=""
                         width='30' style={{borderRadius:'6px'}}/>
                        </div>
                    </div>
                </header>
            </div>
        <div className='header-section-mobile position-fixed w-100 mb-3'>
        <header className='header-container positon-absolute d-flex align-items-center'>
                    <div className='header-left d-flex align-items-center'>
                    <Link to='/browse'>
                    <img src={Logo} alt="netflixlogo" width='100'/>  
                    </Link>
                    <div className="dropdown">
                        <span className="dropdown-toggle w-50 text-light" 
                        type="button" id="dropdownMenuButton" data-toggle="dropdown" 
                        aria-haspopup="true" aria-expanded="false"
                        onMouseEnter={()=>setmobbrowse(prevstate=>!prevstate)}
                        >Browse</span>
                        <div className="dropdown-menu bg-dark text-center" aria-labelledby="dropdownMenuButton"
                         style={{display:mobbrowse?'block':'none'}}onMouseLeave={()=>setmobbrowse(prevstate=>!prevstate)}>
                            <Link className="dropdown-item py-2" to='/browse'>Home</Link>
                            <Link className="dropdown-item py-2" to='browse/tvshows'>TV shows</Link>
                            <Link className="dropdown-item py-2" to='/browse/movies'>Movies</Link>
                            <Link className="dropdown-item py-2" to='/browse/new'>News & Popular</Link>
                            <Link className="dropdown-item py-2" to='/browse/list'>My Lists</Link>
                            <Link className="dropdown-item py-2" to='/browse'>Browse by Language</Link>
                        </div>
                    </div>
                    </div>
                    <div className='position-absolute header-right'>
                        <div className='header-right d-flex align-items-center gap-4'>
                        {/* <i className='fa-solid fa-search fa-1x'></i> */}
                        <Link to={'/browse/search'}>
                        <SearchBar/>
                        </Link>
                        <i className="fa-regular fa-bell fa-1x"></i>
                        <img src="https://occ-0-5559-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZBe7K0DPia9LvzIkQ4yzqX9NocZlAjS1MOyEuBQD1WmFuLKZwvq0bxc4n4_EV73khqgwed0PYLNml0V8LCymt31e7x-8jQ.png?r=229" alt=""
                         width='30' style={{borderRadius:'6px'}}/>
                        </div>
                    </div>
                </header>
        </div>
        </>
    )
}
