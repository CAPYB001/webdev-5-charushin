import PropTypes from 'prop-types'

function MovieCard({ movie, onClick }) {
  const poster = movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x445?text=No+Image'

  return (
    <div className="card" onClick={() => onClick(movie.imdbID)}>
      <img className="poster" src={poster} alt={movie.Title} loading="lazy" />
      <div className="card-body">
        <h3 className="card-title">{movie.Title}</h3>
        <div className="meta">
          <span className="tag">{movie.Year}</span>
          {movie.Type && <span className="tag">{movie.Type}</span>}
        </div>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default MovieCard

