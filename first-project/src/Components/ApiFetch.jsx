import React, { useEffect, useState } from 'react'

const ApiFetch = () => {

    const [data, setData] = useState(null)
    const [load, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")

            if(!response.ok) {
                throw new Error("network response was not ok")
            }

            const result = await response.json()
            setData(result)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
            console.log(data, "data")
        }
        fetchData()
    }, [])

    if(load) {
       return <p className='loading'>Loading...</p>
    }

    if(error) {
       return <p className='error'>Error: {error}</p>
    }
  return (
    <div>
      <ul>
        {data.map((item) => (
            <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ApiFetch
