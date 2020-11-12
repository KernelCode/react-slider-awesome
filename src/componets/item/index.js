import React from 'react'

import style_rtl from '../style.rtl.css'
import style_lrt from '../style.css'

const Item = (props) => {
  let style = props.rtl ? style_rtl : style_lrt
  let box = style.box
  if (props.noEffects) {
    box = style.boxNoEffects
  }

  return React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      key: index,
      className: child.props.className
        ? +child.props.className + ' ' + box
        : box
    })
  })
}
export default Item
