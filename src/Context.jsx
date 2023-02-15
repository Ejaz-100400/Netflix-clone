import React from "react";
const Context = React.createContext()
import { useParams } from "react-router-dom";
function ContextProvider({children}){
    // getting the movie datas 
    const[movie,setmovie]=React.useState([])

    // MOVIEDETAILS COMPONENT
    // set state for displaying the movie field in the Moviedetails component
    const[displaymovie,setdisplaymovie]=React.useState([])
    // set state for managing the volume of the movie 
    const[moviedetailvol,setmoviedetailvol]=React.useState(false)
    // set state for displaying the state 
    const [enablemoviedetail,setenablemoviedetail]=React.useState(false)

    // PLAYVIDEO COMPONENT 
    // managing the state for videourl
    const[videourl,setvideourl]=React.useState('')


    //MAIN HERO COMPONENT 
    // display moviebanner randomly 
    const [randomItem, setRandomItem] = React.useState([]);


    // LIST COMPONENT 
    // set state for adding the movie to the list 
    const[addmovielist,setaddmovielist]=React.useState([])


    React.useEffect(()=>{
        fetch('http://localhost:7001/shows')
        .then(response=>response.json())
        .then(data=>setmovie(data.trendingnow))
    },[])


    // display random movie details in the main page
    React.useEffect(() => {
        if (movie.length > 0) {
          const randomIndex = Math.floor(Math.random() * movie.length);
          setRandomItem(movie[randomIndex]);
        }
      }, [movie]);


    // getting the videourl 
    function playVideo(id) {
        const extractVideoUrl = movie.map(mov => mov._id);
        const selectedVideoUrl = extractVideoUrl.find(url => url === id);
        setvideourl(selectedVideoUrl);
      }
      
    // console.log(videourl)
    function Toggle(id){
        let updateclose = movie.map(movie =>{
            if(movie._id === id){
                // console.log(!movie.close)
                return{
                    ...movie,
                    close:!movie.close
                }
            }
            else{
                return movie
                
            }
        })
        setmovie(updateclose)
    }



    // set function for managing the moviedetails
    function displayMovieDetails(moviedetail){
        setenablemoviedetail(prev=>!prev)
        setdisplaymovie(prevmovie=>[...prevmovie,moviedetail]);
    }
    function clearmoviedetails(moviedetail){
        setenablemoviedetail(prev=>!prev)
        setdisplaymovie(prevmovie=>[]);
    }


    // setting up state for moviedetails volume
    function moviedetailsvolume(){
        setmoviedetailvol(prev=>!prev);
    }


    // adding list to list pg 
    function addmovietolist(addmovie) {
        if (!addmovielist.some(movie => movie._id === addmovie._id)) {
          setaddmovielist(prevaddmov => [...prevaddmov, addmovie]);
        }
      }
    function removetolist(id){
        setaddmovielist(prevmovie=>prevmovie.filter(movie=>movie._id !== id))
    }



    // // console.log(addmovielist)
    // console.log(enablemoviedetail)



    
return(
    <Context.Provider value=
    {{
        movie,     
        Toggle,
        playVideo,
        videourl,
        displayMovieDetails,
        displaymovie,
        enablemoviedetail,
        clearmoviedetails,
        moviedetailsvolume,
        moviedetailvol,
        addmovietolist,
        addmovielist,
        removetolist,
        randomItem
    }}>
        {children}
    </Context.Provider>
)
}

export {ContextProvider, Context}