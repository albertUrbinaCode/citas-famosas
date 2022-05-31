import React from 'react'
import button from '../button.png'

const AuthorBox = ({quoteRandom, colorRandom, setRandom}) => {
  return (
    <div className='box cite'>
        <cite className='author'>{quoteRandom.author}</cite>
        <button onClick={setRandom} className='button'><img src={button}/></button>
    </div>
  )
}

export default AuthorBox