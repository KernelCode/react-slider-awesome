import React from 'react'



import SliderInner from './componets/slider'

export const Slider = (props) => {
  

  return <SliderInner rtl={props.rtl}>
    {props.children}
  </SliderInner>
}
