import { useState, useEffect } from 'react'

const useFetchData = (fetchFunc, id = null, seconds = 2) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const timerId = setTimeout(() => fetchFunc(setData, setError, setLoading, id), seconds * 1000)

    return () => clearTimeout(timerId)
  }, [fetchFunc, seconds, id])

  return { data, error, loading }
}

export default useFetchData
