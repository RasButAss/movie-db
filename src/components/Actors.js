import React, {useState, useEffect} from 'react'
import Card from './Card'

const Actors = () => {
    let actors = [];
    const [artists, setArtists] = useState(actors)
    useEffect(() => {
        const pro = async () => {
            let url = "https://api.themoviedb.org/3/person/popular?api_key=f98c40b419ba707e7754ca68fb9f6498&language=en-US&page=1"
            let data = await fetch(url);
            let parsedData = await data.json();
            setArtists(parsedData.results)
        }
        pro();
        
    })
    return (
        <div className='container'>
                <h1 style={{ color: "yellow" }}><strong>Popular Artists</strong></h1>
                
                <div className='row mt-4 mb-4'>
                {artists.map((element) => {return (
                    <div key={element.id} className='col-md-3 mt-3 mb-3'>
                        <Card name={element.name} image={element.profile_path === null ? "https://st.depositphotos.com/1670531/2557/i/600/depositphotos_25572559-stock-photo-man-wearing-vendetta-mask.jpg" : "https://image.tmdb.org/t/p/w500" + element.profile_path}
                        gender={element.gender} />
                    </div>
                )})}
                    
                </div>
            </div>
    )
}

export default Actors