import React, { useState } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [isHovering, setIsHovering] = useState(false)
    const handleMouseEnter = () => {
        setIsHovering(true)
    }
    const handleMouseLeave = () => {
        setIsHovering(false)
    }
    return (
        <nav className="navbar sticky-top navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand ms-5 mt-2" to="/"><h1><strong>LSDb<span style={{ color: "Yellow" }}>_</span></strong></h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-5">
                        <li className="nav-item dropdown ms-3 me-3">
                            <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Movies
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><Link className="dropdown-item" to="/m_popular">Popular</Link></li>
                                <li><Link className="dropdown-item" to="/m_now_playing">Now Playing</Link></li>
                                <li><Link className="dropdown-item" to="/m_upcoming">Upcoming</Link></li>
                                <li><Link className="dropdown-item" to="/m_top_rated">Top Rated</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown ms-3 me-3">
                            <a className="nav-link dropdown-toggle text-light" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                TV Shows
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><Link className="dropdown-item" to="/t_popular">Popular</Link></li>
                                <li><Link className="dropdown-item" to="/t_airing_today">Airing Today</Link></li>
                                <li><Link className="dropdown-item" to="/t_on_tv">On TV</Link></li>
                                <li><Link className="dropdown-item" to="/t_top_rated">Top Rated</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item ms-3 me-3">
                            <Link className="nav-link active" aria-current="page" to="/actors">Popular Artists</Link>
                        </li>
                    </ul>
                    <form style={{ width: "400px", height: "40px" }} className="me-5">
                        <input type="text" placeholder="  What are you looking for?" />
                        <button type="submit" style={{ padding: "10px 30px", backgroundColor: isHovering ? '#FDDA0D' : 'yellow' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Nav