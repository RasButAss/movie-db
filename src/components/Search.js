import React, {useState, useEffect} from 'react'
import '../components/search.css'
import Movies from './Movies';
import Card from './Card';

const formStyles = {
    width: "400px",
    height: "40px" 
}

const buttonStyles = {
    padding: "10px 30px"
}

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