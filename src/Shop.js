import { useState, useEffect } from 'react'
import './App.css';


function Shop() {

  useEffect(() => {
    fetchItems()
  }, [])

  let [items, setItems] = useState([])

  let fetchItems = async () => {
    let data = await fetch('https://books-exercise-673cf-default-rtdb.firebaseio.com/Books.json')
    let items = await data.json()
    console.log(items.author);
    setItems(items.author)
  }

  return (
    <div>
      {items.map(item => (
        <h1>{item.author}</h1>
      ))}

    </div>
  )
}

export default Shop;
