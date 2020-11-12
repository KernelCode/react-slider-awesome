import React from 'react'

import style_rtl from '../style.rtl.css'
import style_lrt from '../style.css'
const Item = (props) => {
  let style = props.rtl ? style_rtl : style_lrt
  let box = style.box
  if (props.noEffects) {
    box = style.boxNoEffects
  }
  return (
    <div className={box} onMouseEnter={(e) => {}} onMouseLeave={(e) => {}}>
      {props.children}
    </div>
  )
}
export default Item
