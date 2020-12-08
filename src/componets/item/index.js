import React, { useEffect, useState } from 'react'

import style_rtl from '../style.rtl.css'
import style_lrt from '../style.css'

const Item = (props) => {
  let style = props.rtl ? style_rtl : style_lrt
  let box = style.box

  let Size = style[props.size || 'small']

  if (props.noEffects) {
    box = style.boxNoEffects
  }

  return React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      key: index,
      className: child.props.className
        ? child.props.className + ' ' + box + ' ' + Size
        : box + ' ' + Size
    })
  })
}
export default Item
