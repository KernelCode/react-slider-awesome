import React, { useState, useRef, useEffect } from 'react'
import Item from '../item'

import style_rtl from '../style.rtl.css'
import style_lrt from '../style.css'

const SliderInner = (props) => {
  let style = props.rtl ? style_rtl : style_lrt
  const [pages, setPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPagePer, setCurrentPagePer] = useState(0)
  const [isOn, setIsOn] = useState(false)
  const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints
  var touch = supportsTouch && style.touch
  let visible_items = 0

  const slider = useRef(null)
  const left = useRef(null)
  const right = useRef(null)
  if (props.noEffects == true) {
    if (window.innerWidth < 600) visible_items = 4
    else if (window.innerWidth < 700) visible_items = 5
    else if (window.innerWidth < 800) visible_items = 6
    else if (window.innerWidth < 1000) visible_items = 7
    else if (window.innerWidth > 1000) visible_items = 8
  } else {
    if (window.innerWidth < 1000) visible_items = 6
    else if (window.innerWidth > 1000) visible_items = 5
  }

  useEffect(() => {
    if (props.children)
      setPages(Math.round((props.children.length || 1) / visible_items + 1))
  })

  let dir = {
    right: style.kc_pager_right,
    left: style.kc_pager_left,
    right_photo: <span className={style.chevronright}></span>,
    left_photo: <span className={style.chevronleft}></span>
  }

  if (props.rtl) {
    dir = {
      right: style.kc_pager_left,
      left: style.kc_pager_right,
      right_photo: <span className={style.chevronright}></span>,
      left_photo: <span className={style.chevronleft}></span>
    }
  }
  if (!props.children) {
    return <div></div>
  }
  return (
    <div
      onLoad={(e) => {
        right.current.style.display = 'none'
        left.current.style.display = 'none'
      }}
      onMouseEnter={(e) => {
        if (window.innerWidth < 600 || touch) {
          return
        }
        if (currentPage >= pages) {
          right.current.style.display = 'none'
        } else {
          right.current.style.display = 'block'
        }
        if (currentPage <= 1) {
          left.current.style.display = 'none'
        } else {
          left.current.style.display = 'block'
        }
        left.current.style.opacity = '1'
        right.current.style.opacity = '1'
        setIsOn(true)
      }}
      onMouseLeave={(e) => {
        if (window.innerWidth < 600 || touch) {
          return
        }

        left.current.style.opacity = '0'
        right.current.style.opacity = '0'
        setIsOn(false)
      }}
      onMouseOver={(e) => {
        if (isOn) {
          return
        }
        if (window.innerWidth < 600 || touch) {
          return
        }
        if (currentPage >= pages) {
          right.current.style.display = 'none'
        } else {
          right.current.style.display = 'block'
        }
        if (currentPage <= 1) {
          left.current.style.display = 'none'
        } else {
          left.current.style.display = 'block'
        }
        left.current.style.opacity = '1'
        right.current.style.opacity = '1'
        setIsOn(true)
      }}
      className={style.kc_slider_container + ' ' + touch}
    >
      <div ref={slider} className={style.kc_slider}>
        {props.children.map((e, i) => (
          <Item
            noEffects={props.noEffects}
            rtl={props.rtl}
            size={props.size}
            key={'items_' + i}
            len={visible_items}
          >
            {e}
          </Item>
        ))}
      </div>
      <div className={style.page_small_view_container}>
        {(() => {
          let ps = []
          for (let i = 0; i < pages; i++) {
            ps.push(i + 1)
          }
          return ps.map((_, i) => {
            if (i == currentPage - 1)
              return (
                <div
                  key={'pages_views_' + i}
                  className={style.page_small_view_selected}
                ></div>
              )

            return (
              <div
                key={'pages_views_' + i}
                className={style.page_small_view}
              ></div>
            )
          })
        })()}
      </div>

      <div
        ref={right}
        className={dir.right}
        onClick={(e) => {
          if (props.rtl) {
            setCurrentPage(currentPage + 1)
            setCurrentPagePer(currentPagePer + 100)
            slider.current.style.transform = `translateX(${
              currentPagePer + 100
            }%)`
          } else {
            setCurrentPage(currentPage + 1)
            setCurrentPagePer(currentPagePer - 100)
            slider.current.style.transform = `translateX(${
              currentPagePer - 100
            }%)`
          }

          if (currentPage + 1 >= pages) {
            right.current.style.display = 'none'
          } else {
            right.current.style.display = 'block'
          }
          if (currentPage + 1 <= 1) {
            left.current.style.display = 'none'
          } else {
            left.current.style.display = 'block'
          }
        }}
      >
        <div className={style.icon}>{dir.right_photo}</div>
      </div>
      <div
        ref={left}
        className={dir.left}
        onClick={(e) => {
          if (props.rtl) {
            setCurrentPage(currentPage - 1)
            setCurrentPagePer(currentPagePer - 100)
            slider.current.style.transform = `translateX(${
              currentPagePer - 100
            }%)`
          } else {
            setCurrentPage(currentPage - 1)
            setCurrentPagePer(currentPagePer + 100)
            slider.current.style.transform = `translateX(${
              currentPagePer + 100
            }%)`
          }

          if (currentPage - 1 <= 1) {
            left.current.style.display = 'none'
          } else {
            left.current.style.display = 'block'
          }
          if (currentPage - 1 >= pages) {
            right.current.style.display = 'none'
          } else {
            right.current.style.display = 'block'
          }
        }}
      >
        <div className={style.icon}>{dir.left_photo}</div>
      </div>
    </div>
  )
}
export default SliderInner
