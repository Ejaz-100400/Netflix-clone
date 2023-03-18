import React from 'react'
import ReactPlayer from 'react-player'
import { Context } from '../../Context'

export default function Playvideo(){
    const{videourl}=React.useContext(Context)
    return(
        <div className="playvideo-component">
            <ReactPlayer url={`http://netflix-backendata.vercel.app/shows/${videourl}`}
            loop='true'
            playing='true'
            controls='true'
            width='100%'
            height='100%'
            />
        </div>
    )
}