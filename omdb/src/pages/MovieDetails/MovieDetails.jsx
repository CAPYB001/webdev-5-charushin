import { useEffect, useState } from "react"
import { useParams } from "react-router"

const MovieDetails = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const handleLoad = async () => {
            try {
                const res = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_APIKEY}&i=${id}`)
                const data = await res.json()
                setMovie(data)
            } catch (error) {
                console.error(error)
            }
        }
        handleLoad()
    }, [id])

    return (
        <>  
            {movie && (
                <div className="movie-details">
                    {Object.entries(movie).map((entry) => (
                        <div className="entry" key={entry[0]}>
                            <span><b>{entry[0]}:</b></span>
                            <span>{JSON.stringify(entry[1])}</span>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default MovieDetails