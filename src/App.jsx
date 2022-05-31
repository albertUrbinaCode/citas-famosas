import { useState } from 'react'
import './App.css'
import quotes from './quotes.json'
import Quote from './components/QuoteBox.jsx'
import Author from './components/AuthorBox.jsx'

const arrayColor = [
  '#049432', '#0243C9', '#A02708', '#81A9F6', '#94AFCF', '#1B6EFC', '#CDDAA0',
  '#CBF657', '#489576'
]

function App() {

  const numberRandom = array => {
    return Math.floor(Math.random() * array.length)
  }

  let indexQuoteRandom = numberRandom(quotes)
  let indexColorRandom = numberRandom(arrayColor)

  const [quoteRandom, setQuoteRandom] = useState(quotes[indexQuoteRandom])
  const [colorRandom, setColorRandom] = useState(arrayColor[indexColorRandom])

  const appStyle = {backgroundColor: colorRandom}

  const setRandom = () =>{
    setQuoteRandom(quotes[Math.floor(Math.random() * quotes.length)])
    setColorRandom(arrayColor[Math.floor(Math.random() * arrayColor.length)])
  }

  return (
    <div style={appStyle} className="App">
        <Quote quoteRandom={quoteRandom} colorRandom={colorRandom}/>
        <Author quoteRandom={quoteRandom} colorRandom={colorRandom} setRandom={setRandom}/>
    </div>
  )
}

export default App
