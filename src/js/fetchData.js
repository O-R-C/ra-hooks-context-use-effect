const fetchData = async (setData, setError, setLoading, id = null) => {
  const addUrl = id ? `/${id}.json` : '/users.json'

  try {
    const response = await fetch(import.meta.env.VITE_API_URL + addUrl)
    const data = await response.json()
    setData(data)
  } catch (error) {
    setError(error)
  } finally {
    setLoading(false)
  }
}

export default fetchData
