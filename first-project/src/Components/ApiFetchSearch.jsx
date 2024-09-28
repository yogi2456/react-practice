import React, { useEffect, useState } from 'react'

const ApiFetchSearch = () => {

    const [data, setData] = useState(null)
    const [load, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("")
    const [filteredItems, setFilteredItems] = useState([])

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
        }
        fetchData()
    }, [])

    if(load) {
       return <p className='loading'>Loading...</p>
    }

    if(error) {
       return <p className='error'>Error: {error}</p>
    }

    const handleChange = (event) => {
        setSearch(event.target.value)

        let userword = event.target.value.toLowerCase();

        const filteredItems = data.filter((pro) => {
            return pro.title.toLowerCase().includes(userword);
        })

        setFilteredItems(filteredItems);
    }


  return (
    <div>
        <input type='text' placeholder='search items...' value={search} onChange={handleChange}/>
      <ul>
        {filteredItems.length ? <div>
            {filteredItems.map((item) => (
            <li key={item.id}>{item.title}</li>
        ))}
        </div> : <div>result not found</div>}
      </ul>
    </div>
  )
}

export default ApiFetchSearch