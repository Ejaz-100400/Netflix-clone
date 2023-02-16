import React from "react"
import {Swiper,SwiperSlide} from 'swiper/react'
import{Navigation} from 'swiper'
import TopTiles from "../MovieTiles/TopTiles"
import { Context } from "../../Context"
export default function NewPopular(){
    const {movie}=React.useContext(Context)
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

    const topmovieelements = movie
   .filter(mov=>mov.type ==='Movies')
   .sort((a, b) => a.topmovie - b.topmovie) // sort by desired property in ascending order
   .map((mov) => {
    return (
      <SwiperSlide>
        <TopTiles key={mov._id} {...mov} />
      </SwiperSlide>
    );
  });

    return(
        
        <div className="px-3 overflow-hidden new-section">
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
            {topelements}
        </Swiper>
        <h4 className="movietile-categoryname text-light fw-bold pt-2">Top 10 Movies on India Today</h4>
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
            {topmovieelements}
        </Swiper>
        </div>
    )
}