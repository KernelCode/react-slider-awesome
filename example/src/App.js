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
      <div>
        <img src={'./imgs/1.jpg'} />
      </div>
      <div>
        <img src={'./imgs/2.jpg'} />
      </div>
      <div>
        <img src={'./imgs/3.jpg'} />
      </div>
      <div>
        <img src={'./imgs/4.jpg'} />
      </div>
      <div>
        <img src={'./imgs/5.jpg'} />
      </div>
      <div>
        <img src={'./imgs/6.jpg'} />
      </div>
      <div>
        <img src={'./imgs/4.jpg'} />
      </div>
      <div>
        <img src={'./imgs/5.jpg'} />
      </div>
      <div>
        <img src={'./imgs/6.jpg'} />
      </div>
    </Slider>
  )
}

export default App
