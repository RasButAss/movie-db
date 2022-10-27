import React, {useState} from 'react'

const Card = ({ name, image, gender, movie_name, rating }) => {
    const [isHovering, setIsHovering] = useState(false)
    const handleMouseEnter = () => {
        setIsHovering(true)
    }
    const handleMouseLeave = () => {
        setIsHovering(false)
    }
    function sex(gender) {
        if(gender === 1) {
            return "Female Actress"
        } else if (gender === 2) {
            return "Male Actor"
        } else if (gender === 0) {
            return "Rating : " + rating
        } else {
            return "Actor"
        }
    }
    return (
        <div className="card bg-dark text-light" style={{width: "18rem", border: "solid yellow"}}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}{movie_name}</h5>
                    <h6 className="card-text">{sex(gender)}</h6>
                    <a href="#" className="btn btn-warning" style={{backgroundColor: isHovering ? '#FDDA0D' : 'yellow'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Read More</a>
                </div>
            </div>
    )
}

export default Card