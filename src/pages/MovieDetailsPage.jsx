import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import { getMovieDetails } from '../services/movieService'

function MovieDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadMovie = async () => {
      if (!id) return
      setLoading(true)
      setError('')
      try {
        const data = await getMovieDetails(id)
        setMovie(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadMovie()
  }, [id])

  const goBack = () => navigate(-1)

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return (
      <div>
        <button className="back" onClick={goBack}>
          ← Назад
        </button>
        <ErrorMessage message={error} />
      </div>
    )
  }

  if (!movie) {
    return (
      <div>
        <button className="back" onClick={goBack}>
          ← Назад
        </button>
        <div className="status">Данные не найдены</div>
      </div>
    )
  }

  const poster = movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/340x500?text=No+Image'

  return (
    <div className="details">
      <button className="back" onClick={goBack}>
        ← Назад
      </button>

      <div className="details-card">
        <div className="details-header">
          <img className="details-poster" src={poster} alt={movie.Title} />
          <div>
            <h1 className="details-title">
              {movie.Title} {movie.Year && `(${movie.Year})`}
            </h1>
            <div className="details-meta">
              {movie.Runtime && <span className="tag">{movie.Runtime}</span>}
              {movie.Rated && <span className="tag">{movie.Rated}</span>}
              {movie.imdbRating && <span className="tag">IMDB {movie.imdbRating}</span>}
              {movie.Type && <span className="tag">{movie.Type}</span>}
            </div>
            <div className="details-section">
              {movie.Genre && (
                <p className="value">
                  <span className="label">Жанр: </span>
                  {movie.Genre}
                </p>
              )}
              {movie.Director && (
                <p className="value">
                  <span className="label">Режиссер: </span>
                  {movie.Director}
                </p>
              )}
              {movie.Actors && (
                <p className="value">
                  <span className="label">Актеры: </span>
                  {movie.Actors}
                </p>
              )}
            </div>
          </div>
        </div>

        {movie.Plot && (
          <div className="details-section">
            <span className="label">Описание</span>
            <p className="value">{movie.Plot}</p>
          </div>
        )}

        {movie.Awards && (
          <div className="details-section">
            <span className="label">Награды</span>
            <p className="value">{movie.Awards}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MovieDetailsPage

