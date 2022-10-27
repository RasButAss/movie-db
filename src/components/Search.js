import React, {useState, useEffect} from 'react'
import '../components/search.css'
import Movies from './Movies';
import Card from './Card';

const Search = () => {
    const [isHovering, setIsHovering] = useState(false)
    const handleMouseEnter = () => {
        setIsHovering(true)
    }
    const handleMouseLeave = () => {
        setIsHovering(false)
    }
    const handleOnChange = (event) => {
        setSearch(event.target.value)
    }
    const searchOnClick = (event) => {
        event.preventDefault();
        // console.log("Button was clicked");
        // let url = "https://api.themoviedb.org/3/search/multi?api_key=f98c40b419ba707e7754ca68fb9f6498&language=en-US&query=" + search + "&page=1&include_adult=false"
        // fetch(url)
        // .then((res) => {return res.json();})
        // .then((data) => {
        //     setResults(data);
        // });
    }
    const [inital,setInitial] = useState("A")
    const [search,setSearch] = useState("");
    return (
        <>
        <div className="containerSearch">
            <form onSubmit={searchOnClick}>
                <input type="text" placeholder="  What are you looking for?" onChange={handleOnChange} value={search} />
                <button type="submit" style={{backgroundColor: isHovering ? '#FDDA0D' : 'yellow'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Search</button>
            </form>
        </div>
        <Movies page="multi" type="search" heading="" query={search === "" ? inital : search} />
        </>
  )
}

export default Search