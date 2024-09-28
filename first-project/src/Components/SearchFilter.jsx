import React, { useMemo, useState } from 'react'

const SearchFilter = () => {

    const [SearchFilter, setSearchFilter] = useState("")

    const items = useMemo(() => [
        "Apple",
        "Ball",
        "Cat",
        "Dog",
        "Elephant",
        "Fox",
        "Giraffee",
        "Horse"
    ], [])

    const handleChange = (event) => {
        setSearchFilter(event.target.value)
    }

  
    const filteredItems = useMemo(() => {
        return items.filter(item => item.toLowerCase().includes(SearchFilter.toLowerCase()))
    }, [SearchFilter, items])

    
  return (
    <div>
      <input type='text' placeholder='Search items...' value={SearchFilter} onChange={handleChange}/>
      <ul>
        {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchFilter
