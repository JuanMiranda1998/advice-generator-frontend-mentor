import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)

  function GenerateAdvice(){
    setData(null)
      setLoading('Loading')
      fetch("https://api.adviceslip.com/advice")
       .then((response)=> response.json())
       .then((data)=> setData(data.slip))

  }
  return (
    <div className='adviceCard'>
      <h1 className='adviceTitle'>Advice #{data ? data.id : ''}</h1>
      <p className='adviceText'>
        {data ? `${data.advice}` : loading}
      </p>
      <div className='separator'>
        <picture>
          <source media='(min-width: 768px)' srcSet="pattern-divider-desktop.svg" />
          <img src="pattern-divider-mobile.svg" alt="Separator" />
        </picture>
      </div>
      <button className='adviceGenerateBtn' onClick={GenerateAdvice}>
        <img src='icon-dice.svg'/>
      </button>
    </div>
  )
}

export default App