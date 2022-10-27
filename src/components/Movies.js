import React, {useState, useEffect} from 'react'
import Card from './Card'

const Movies = ({page, type, heading, query }) => {
    let movies = [];
    // fetch("https://api.themoviedb.org/3/movie/popular?api_key=f98c40b419ba707e7754ca68fb9f6498&language=en-US&page=1").then((res) => {return res.json()}).then((data) => {return data.results})
    const [movie, setMovies] = useState(movies)
    useEffect(() => {
        let url = "";
        if(query !== "") {
            url = "https://api.themoviedb.org/3/"+type+"/"+page+"?api_key=f98c40b419ba707e7754ca68fb9f6498&language=en-US&query=" + query + "&page=1"
        } else {
            url = "https://api.themoviedb.org/3/"+type+"/"+page+"?api_key=f98c40b419ba707e7754ca68fb9f6498&language=en-US&page=1"
        }
        fetch(url).then((respose) => {return respose.json()}).then((data) => {
            // console.log(data);
            setMovies(data.results)
        });
        // let parsedData = await data.json();
        // setMovies(parsedData.results)
    })
  return (
    <div className='container'>
    <h1 style={{ color: "yellow" }}><strong>{heading}</strong></h1>
    
    <div className='row mt-4 mb-4'>
    {movie.map((element) => {return (
        <div key={element.id} className='col-md-3 mt-3 mb-3'>
            <Card movie_name={type === "tv"? element.name: element.title} image={element.poster_path === null ? "https://st.depositphotos.com/1670531/2557/i/600/depositphotos_25572559-stock-photo-man-wearing-vendetta-mask.jpg" : "https://image.tmdb.org/t/p/w500" + element.poster_path} 
            gender={0} rating={element.vote_average}/>
        </div>
    )})}
        
    </div>
    </div>
  )
}

export default Movies