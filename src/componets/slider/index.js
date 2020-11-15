import React, { useState, useRef, useEffect } from 'react'
import Item from '../item'

import style_rtl from '../style.rtl.css'
import style_lrt from '../style.css'

const SliderInner = (props) => {
  let style = props.rtl ? style_rtl : style_lrt
  const [pages, setPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPagePer, setCurrentPagePer] = useState(0)

  let visible_items = 0

  const slider = useRef(null)
  const left = useRef(null)
  const right = useRef(null)

  if (window.innerWidth < 600) visible_items = 4
  else if (window.innerWidth < 700) visible_items = 5
  else if (window.innerWidth < 800) visible_items = 6
  else if (window.innerWidth < 1000) visible_items = 7
  else if (window.innerWidth > 1000) visible_items = 8

  useEffect(() => {
    setPages(Math.round((props.children.length | 1) / visible_items))
  })
  let dir = {
    right: style.kc_pager_right,
    left: style.kc_pager_left,
    right_photo: './assets/imgs/right.svg',
    left_photo: './assets/imgs/left.svg'
  }

  if (props.rtl) {
    dir = {
      right: style.kc_pager_left,
      left: style.kc_pager_right,
      right_photo: './assets/imgs/left.svg',
      left_photo: './assets/imgs/right.svg'
    }
  }

  return (
    <div
      onLoad={(e) => {
        right.current.style.display = 'none'
        left.current.style.display = 'none'
      }}
      onMouseEnter={(e) => {
        if (window.innerWidth < 600) {
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
      }}
      onMouseLeave={(e) => {
        if (window.innerWidth < 600) {
          return
        }

        left.current.style.opacity = '0'
        right.current.style.opacity = '0'
      }}
      className={style.kc_slider_container}
    >
      <div ref={slider} className={style.kc_slider}>
        {props.children.map((e, i) => (
          <Item
            noEffects={props.noEffects}
            rtl={props.rtl}
            size={props.size}
            key={'items_' + i}
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
        <div className={style.icon}>
          <img src={dir.right_photo} />
        </div>
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
        <div className={style.icon}>
          <img src={dir.left_photo} />
        </div>
      </div>
    </div>
  )
}
export default SliderInner
