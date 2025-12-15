const apiKey = import.meta.env.VITE_OMDB_KEY || '505480d7'
const baseUrl = 'https://www.omdbapi.com/'

async function request(params) {
  const url = `${baseUrl}?apikey=${apiKey}&${params}`
  const response = await fetch(url)
  const data = await response.json()
  if (data.Response === 'False') {
    throw new Error(data.Error || 'Ошибка запроса')
  }
  return data
}

export async function searchMovies(term, page = 1) {
  if (!term.trim()) {
    return []
  }
  const data = await request(`s=${encodeURIComponent(term)}&page=${page}`)
  return data.Search || []
}

export async function getMovieDetails(id) {
  return request(`i=${id}&plot=full`)
}

