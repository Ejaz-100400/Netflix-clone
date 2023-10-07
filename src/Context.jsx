import React from "react";
import { useLocation } from "react-router-dom";
const Context = React.createContext()
import { useParams } from "react-router-dom";

function ContextProvider({children}){
    const location = useLocation();
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

    // SEARCH COMPONENT 
    const [query, setQuery] = React.useState('');
    const[searchdata,setsearchdata]=React.useState([])

    const [activityLog, setActivityLog] = React.useState([]);

    console.log(activityLog)
    React.useEffect(()=>{
        fetch('http://localhost:3001/shows')
        .then(response=>response.json())
        .then(data=>setmovie(data.Netflix))
    },[])



 
  // display random movie details in the main page
    React. useEffect(() => {
        if (location.pathname === "/browse" && movie.length > 0) {
            const randomIndex = Math.floor(Math.random() * movie.length);
            setRandomItem(movie[randomIndex]);
          }
        if (location.pathname === "/browse/tvshows" && movie.length > 0) {
            const shows = movie.filter((show)=>show.type==='Series')
            const randomIndex = Math.floor(Math.random() * shows.length);
            setRandomItem(shows[randomIndex]);
          }
        if (location.pathname === "/browse/movies" && movie.length > 0) {
            const movi = movie.filter((mov)=>mov.type==='Movies')  
           const randomIndex = Math.floor(Math.random() * movi.length);
          setRandomItem(movi[randomIndex]);
        }
      }, [location.pathname, movie]);

    
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
        const movieTrack = JSON.parse(window.sessionStorage.getItem('movietrack') || '[]');
        movieTrack.push(moviedetail.moviename);
        window.sessionStorage.setItem('movietrack', JSON.stringify(movieTrack));
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
          window.localStorage.setItem('movietolist',addmovie.moviename)
        }
      }
    function removetolist(id){
        setaddmovielist(prevmovie=>prevmovie.filter(movie=>movie._id !== id))
        window.localStorage.removeItem('movietolist',movie.moviename)
    }

    //search movie 
    function handleSearch(){
        fetch(`http://localhost:3001/shows/${query}`)
        .then(response=>response.json())
        .then(data=>setsearchdata(data.Netflixsearch));
    }
    console.log(searchdata);

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
        randomItem,
        handleSearch,
        query,
        setQuery,
        searchdata
    }}>
        {children}
    </Context.Provider>
)
}

export {ContextProvider, Context}