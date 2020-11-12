import React from 'react'

import SliderInner from './componets/slider'

export const Slider = (props) => {
  return (
    <SliderInner rtl={props.rtl} noEffects={props.noEffects}>
      {props.children}
    </SliderInner>
  )
}
