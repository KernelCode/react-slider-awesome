import React from 'react'

import { Slider } from 'react-slider-awesome'

import 'react-slider-awesome/dist/index.css'
import './App.css'

const App = () => {
  /* for Right to left set  body{  direction: rtl; }  then rtl={true|false} */
  /* For no item effects  noEffects={true|false} */
  /* For no num of items in slide size={small|big} */
  return (
    <Slider rtl={true} noEffects={true} size={'small'}>
      {null}
    </Slider>
  )
}

export default App
