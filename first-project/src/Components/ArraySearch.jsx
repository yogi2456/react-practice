import React, { useState } from 'react'

const ArraySearch = () => {

    const [fruit, setFruit] = useState([
        "Apple",
        "Mango",
        "Grapes",
        "Banana",
        "CustardApple",
        "PineApple"
    ])

    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch({...search, [e.target.name]: e.target.value})
        console.log(search, "search")
    }

    const fruitFilteredData = fruit.filter((fro) => 
        fro.toLocaleLowerCase().includes(search.toLowerCase())
    )
  return (
    <div>
      <input onChange={handleChange} type='text' placeholder='search Values..'/>
      {
        fruitFilteredData.map((item, i) => (
            <li key={i}>{item}</li>
        ))
      }
    </div>
  )
}

export default ArraySearch
