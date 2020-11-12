import React from 'react'

import { Slider } from 'react-slider-awesome'

import 'react-slider-awesome/dist/index.css'
import './App.css'

const App = () => {
  /* for Right to left set  body{  direction: rtl; }  then rtl={true|false} */
  return (
    <Slider rtl={false} noEffects={true}>
      <div className={'my_class'}>
        <img src={'./imgs/1.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/2.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/3.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/4.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/5.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/6.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/1.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/2.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/3.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/4.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/5.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/6.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/1.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/2.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/3.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/4.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/5.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/6.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/1.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/2.jpg'} />
      </div>
      <div className={'my_class'}>
        <img src={'./imgs/3.jpg'} />
      </div>
    </Slider>
  )
}

export default App