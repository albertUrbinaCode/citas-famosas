import React from 'react'

const QuoteBox = ({quoteRandom, colorRandom, setRandom}) => {

  return (
    <blockquote style={{color: colorRandom}} className='box'>
        <b>"{quoteRandom.quote}"</b>
    </blockquote>
  )
}

export default QuoteBox