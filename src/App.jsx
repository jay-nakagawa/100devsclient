import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


console.log('test')




function App() {
  const [cats, setCats] = useState([])
 useEffect(()=> { 
  fetch("https://defiant-dungarees-jay.cyclic.app/cats", {
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
  .then(data => {
    setCats(data)
  })
 } )
  return (
    <div className="App">
    <h1>catsssss</h1>
    {cats.map(cat => (
    <div key={cat._id}>
       The cat is named {cat.name}
      
    </div>
    ))}
    </div>
  )
}

export default App
