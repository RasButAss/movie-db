import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Nav from "./components/Nav";
import Actors from "./components/Actors";
import Movies from "./components/Movies";
import {
  Link,Route,Routes
} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/actors' element={<><Nav /><Actors /></>} />
        <Route exact path='/m_popular' element={<><Nav /><Movies page="popular" type="movie" heading="Movies : Popular" /></>} />
        <Route exact path='/m_now_playing' element={<><Nav /><Movies page="now_playing" type="movie" heading="Movies : Now Playing" /></>} />
        <Route exact path='/m_upcoming' element={<><Nav /><Movies page="upcoming" type="movie" heading="Movies : Upcoming" /></>} />
        <Route exact path='/m_top_rated' element={<><Nav /><Movies page="top_rated" type="movie" heading="Movies : Top Rated" /></>} />
        <Route exact path='/t_popular' element={<><Nav /><Movies page="popular" type="tv" heading="TV Shows : Popular" /></>} />
        <Route exact path='/t_airing_today' element={<><Nav /><Movies page="airing_today" type="tv" heading="TV Shows : Airing Today" /></>} />
        <Route exact path='/t_on_tv' element={<><Nav /><Movies page="on_the_air" type="tv" heading="TV Shows : On TV" /></>} />
        <Route exact path='/t_top_rated' element={<><Nav /><Movies page="top_rated" type="tv" heading="TV Shows : Top Rated" /></>} />
        <Route exact path='/' element={<><Navbar /><Body />
      <Search /></>} />
      </Routes>
    </>
  )
}

export default App;
