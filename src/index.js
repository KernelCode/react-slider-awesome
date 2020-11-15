import React from 'react'

import SliderInner from './componets/slider'

export const Slider = (props) => {
  return (
    <SliderInner rtl={props.rtl} noEffects={props.noEffects} size={props.size}>
      {props.children}
    </SliderInner>
  )
}
