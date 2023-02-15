import {Swiper,SwiperSlide} from 'swiper/react'
import{Navigation} from 'swiper'
import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Context } from '../../Context';
import TrendingTiles from './TrendingTiles';
import TopTiles from './TopTiles';
export default function HomeTiles(){
    const {movie}=React.useContext(Context);
// Mapping only the first four section of the tiles in the Home Pages (till now)
// Upcoming - divide those series/movies based on the category
// Upcoming - display top 10 movies with number aside and image should be portrait in TOP10

const homeelements = movie.sort((a,b) => a._id - b._id).map((movie)=>{
  return(
    <SwiperSlide>
        <TrendingTiles key={movie._id}
        {...movie}/>
            </SwiperSlide>
    )
})
const topelements = movie
  .filter(mov=>mov.tilecategory ==='Trending Now')
  .sort((a, b) => a.top - b.top) // sort by desired property in ascending order
  .map((movie) => {
    return (
      <SwiperSlide>
        <TopTiles key={movie._id} {...movie} />
      </SwiperSlide>
    );
  });
    return(
        <main className='netflix-movie-tiles text-light d-grid position-relative px-3 position-relative'>
            <div className="movietile-section  position-relative d-block w-100 overflow-hidden px-3" id='Recently added'>
                {/* Trending Now */}
                <h4 className="movietile-categoryname text-light fw-bold">Trending Now</h4>
                <Swiper
                slidesPerView={6}
                style={{
                    "--swiper-navigation-color": "white",
                    "--swiper-navigation-font-weight":"bold",
                    "--swiper-navigation-size": "35px",
                    "--swiper-navigation-background-color": "black",
                }}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        initialSlide='4'
        breakpoints={{
            0:{
                slidesPerView:3,
                slidesPerGroup:1,
                spaceBetween:50
            },
            768: {
              slidesPerView: 4,
              slidesPerGroup:3,
              spaceBetween:100
            },
            1000:{
              slidesPerView: 6,
              slidesPerGroup:3,
            }
        }}
      > 
      {homeelements}
                </Swiper>
                {/* New Releases */}
                <h4 className="movietile-categoryname text-light fw-bold">New Releases</h4>
                <Swiper
                slidesPerView={6}
                style={{
                    "--swiper-navigation-color": "white",
                    "--swiper-navigation-font-weight":"bold",
                    "--swiper-navigation-size": "35px",
                    "--swiper-navigation-background-color": "black",
                }}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        initialSlide='4'
        breakpoints={{
            0:{
                slidesPerView:3,
                slidesPerGroup:1,
                spaceBetween:50
            },
            768: {
              slidesPerView: 4,
              slidesPerGroup:3,
              spaceBetween:100
            },
            1000:{
              slidesPerView: 6,
              slidesPerGroup:3,
            }
        }}
      > 
      {homeelements}
                </Swiper>
                {/* My List */}
                <h4 className="movietile-categoryname text-light fw-bold">My List</h4>
                <Swiper
                slidesPerView={6}
                style={{
                    "--swiper-navigation-color": "white",
                    "--swiper-navigation-font-weight":"bold",
                    "--swiper-navigation-size": "35px",
                    "--swiper-navigation-background-color": "black",
                }}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        initialSlide='4'
        breakpoints={{
            0:{
                slidesPerView:3,
                slidesPerGroup:1,
                spaceBetween:50
            },
            768: {
              slidesPerView: 4,
              slidesPerGroup:3,
              spaceBetween:100
            },
            1000:{
              slidesPerView: 6,
              slidesPerGroup:3,
            }
        }}
      > 
      {homeelements}
                </Swiper>
                 {/* Top 10 Shows on India Today */}
                <h4 className="movietile-categoryname text-light fw-bold pt-2">Top 10 Shows on India Today</h4>
                <Swiper
                slidesPerView={6}
                style={{
                    "--swiper-navigation-color": "white",
                    "--swiper-navigation-font-weight":"bold",
                    "--swiper-navigation-size": "35px",
                    "--swiper-navigation-background-color": "black",
                }}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        initialSlide='5'
        breakpoints={{
            0:{
                slidesPerView:3,
                slidesPerGroup:1,
                spaceBetween:50
            },
            768: {
              slidesPerView: 4,
              slidesPerGroup:3,
              spaceBetween:100
            },
            1000: {
              slidesPerView: 6,
              slidesPerGroup:3,
            },
        }}
      > 
      {topelements}
                </Swiper>    
                {/* Popular on Netflix */}
                <h4 className="movietile-categoryname text-light fw-bold pt-4">Popular on Netflix</h4>
                <Swiper
               slidesPerView={6}
               style={{
                   "--swiper-navigation-color": "white",
                   "--swiper-navigation-font-weight":"bold",
                   "--swiper-navigation-size": "35px",
                   "--swiper-navigation-background-color": "black",
               }}
       loop={true}
       loopFillGroupWithBlank={true}
       navigation={true}
       modules={[Navigation]}
       className="mySwiper"
       initialSlide='4'
       breakpoints={{
           0:{
               slidesPerView:3,
               slidesPerGroup:1,
               spaceBetween:50
           },
           768: {
             slidesPerView: 6,
             slidesPerGroup:3,
           },
       }}
      > 
      {homeelements}
                </Swiper>
            </div>
        </main>
    )
}

