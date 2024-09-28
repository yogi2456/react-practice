import React, { useState } from 'react'

const DynamicList1 = () => {

    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addItem = () => {
        if(inputValue.trim()) {
            setItems([...items, inputValue.trim()])
            setInputValue("")
        }
    }
    console.log("items", items)

    const removeItem = (index) => {
        // setItems(items.filter((_,i) => i !== index))
        let newDelete = [...items]
        newDelete.splice(index,1)
        setItems(newDelete)
    }

  return (
    <div>
      <h1>Add Dynamic List</h1>
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
            <li key={index}>
                {item}
                <button onClick={() => removeItem(index)}>Remove</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default DynamicList1
