import React from 'react'
import ReactPlayer from 'react-player'
import { Context } from '../../Context'

export default function Playvideo(){
    const{videourl}=React.useContext(Context)
    return(
        <div className="playvideo-component">
            <ReactPlayer url={`https://netflix-backendata.vercel.app/${videourl}`}
            loop='true'
            playing='true'
            controls='true'
            width='100%'
            height='100%'
            />
        </div>
    )
}