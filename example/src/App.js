import React from 'react'

import { Slider } from 'react-slider-awesome'

import 'react-slider-awesome/dist/index.css'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const App = () => {
 
  /* for Right to left set  body{  direction: rtl; }  then rtl={true|false} */
  return <Slider rtl={false}>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
    <div ><img src={"./imgs/"+getRandomInt(1,6)+".jpg"}  /></div>
  </Slider>
}

export default App
