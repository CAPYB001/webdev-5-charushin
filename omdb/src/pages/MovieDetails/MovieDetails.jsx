import { useEffect } from "react"
import { useParams } from "react-router"

const MovieDetails = () => {
    const { id } = useParams()

    useEffect(() => {
        const hadleLoad = async () => {
            try {
                const res = fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_APIKEY}&i=${id}`)

            } catch (error) {
                console.error(error)
            }

        }
        hadleLoad()
    }, [id])
    return (
        <>
            <h1>Фильм</h1>
        </>
    )
}

export default MovieDetails