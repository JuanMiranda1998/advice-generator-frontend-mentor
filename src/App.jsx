import { useState } from 'react'
import './App.css'
import { ClipLoader } from 'react-spinners';

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)


  function GenerateAdvice(){
    setData(null)
      setLoading(true)
      fetch("https://api.adviceslip.com/advice")
       .then((response)=> response.json())
       .then((data)=> setData(data.slip))
  }
  return (
    <div className='adviceCard'>
      <h1 className='adviceTitle'>Advice #{data ? data.id : ''}</h1>
      <p className='adviceText'>
        {data ? `${data.advice}` : (
        <ClipLoader
        color='white'
        loading={loading}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />)}
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