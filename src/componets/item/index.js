import React, {useState,useEffect } from 'react'

import style_rtl from '../style.rtl.css'
import style_lrt from '../style.css'
const Item = (props) => {
  let style = props.rtl ? style_rtl : style_lrt;
  return <div className={style.box} 
 
  onMouseEnter={(e)=>{
 
    //e.currentTarget.children[0].children[0].src

  }}
  onMouseLeave={(e)=>{
    //props.exit();
  }}
  >
    {props.children}
   </div>
} 
export default Item