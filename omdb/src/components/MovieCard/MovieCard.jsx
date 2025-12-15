import './MovieCard.css'
import {useNavigate} from "react-router-dom"

const MovieCard = ({Title, Year, imdbID, Poster}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/movie/${imdbID}`)
    }
    return (
        <div onClick={handleClick} className="movie-card">
            <h4 className="movie-card__title">{Title}</h4>
            <img src = {Poster} alt="" className="movie-card__image" />
            <div className="movie-card__year">{Year}</div>
        </div>
    )
}

export default MovieCard