import React from 'react'

import { Slider } from 'react-slider-awesome'

import 'react-slider-awesome/dist/index.css'
import './App.css'

const App = () => {
  /* for Right to left set  body{  direction: rtl; }  then rtl={true|false} */
  /* For no item effects  noEffects={true|false} */
  /* For no num of items in slide size={small|big} */
  let a = []
  for (let i = 1; i <= 43; i++) a.push(i)
  return (
    <Slider rtl={true} noEffects={false} size={'big'}>
      {a.map((f) => {
        return (
          <div>
            <img src={'./imgs/6.jpg'} />
            <div style={{ color: '#fff' }}>{f}</div>
          </div>
        )
      })}
    </Slider>
  )
}

export default App
