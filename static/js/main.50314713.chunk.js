(this["webpackJsonpreact-slider-awesome-example"]=this["webpackJsonpreact-slider-awesome-example"]||[]).push([[0],[,,,function(e,a,t){e.exports=t(11)},function(e,a,t){},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);t(4);var s=t(0),c=t.n(s),l=t(2),r=t.n(l),n={kc_slider:"_949D7",box:"_25o3f",boxNoEffects:"_2fe--",kc_slider_container:"_3h-Rg",page_small_view_container:"_13jOy",page_small_view:"_3PjHV",page_small_view_selected:"_7ixzj",kc_pager_left:"_Z1_JJ",kc_pager_right:"_2uTsQ",icon:"_vA4o9",loading:"_3ipxO",kc_pager:"_1tnZR"},i={kc_slider:"_3FtQE",box:"_DU58q",boxNoEffects:"_2OSHI",kc_slider_container:"_wJxOC",page_small_view_container:"_1yosG",page_small_view:"_1BNll",page_small_view_selected:"_3mO9G",kc_pager_right:"_2bcUa",kc_pager_left:"_35o37",icon:"_sBeYm",loading:"_2mwXM",kc_pager:"_1x90e"},m=function(e){var a=e.rtl?n:i,t=a.box;return e.noEffects&&(t=a.boxNoEffects),c.a.Children.map(e.children,(function(e,a){return c.a.cloneElement(e,{key:a,className:e.props.className?t+" "+e.props.className:t})}))},o=function(e){var a=e.rtl?n:i,t=Object(s.useState)(0),l=t[0],r=t[1],o=Object(s.useState)(1),g=o[0],_=o[1],p=Object(s.useState)(0),d=p[0],E=p[1],f=0,u=Object(s.useRef)(null),y=Object(s.useRef)(null),v=Object(s.useRef)(null);window.innerWidth<600?f=4:window.innerWidth<700?f=5:window.innerWidth<800?f=6:window.innerWidth<1e3?f=7:window.innerWidth>1e3&&(f=8),Object(s.useEffect)((function(){r(Math.round((1|e.children.length)/f))}));var h={right:a.kc_pager_right,left:a.kc_pager_left,right_photo:"./assets/imgs/right.svg",left_photo:"./assets/imgs/left.svg"};return e.rtl&&(h={right:a.kc_pager_left,left:a.kc_pager_right,right_photo:"./assets/imgs/left.svg",left_photo:"./assets/imgs/right.svg"}),c.a.createElement("div",{onLoad:function(e){v.current.style.display="none",y.current.style.display="none"},onMouseEnter:function(e){window.innerWidth<600||(v.current.style.display=g>=l?"none":"block",y.current.style.display=g<=1?"none":"block",y.current.style.opacity="1",v.current.style.opacity="1")},onMouseLeave:function(e){window.innerWidth<600||(y.current.style.opacity="0",v.current.style.opacity="0")},className:a.kc_slider_container},c.a.createElement("div",{ref:u,className:a.kc_slider},e.children.map((function(a,t){return c.a.createElement(m,{noEffects:e.noEffects,rtl:e.rtl,key:"items_"+t},a)}))),c.a.createElement("div",{className:a.page_small_view_container},function(){for(var e=[],t=0;t<l;t++)e.push(t+1);return e.map((function(e,t){return t==g-1?c.a.createElement("div",{key:"pages_views_"+t,className:a.page_small_view_selected}):c.a.createElement("div",{key:"pages_views_"+t,className:a.page_small_view})}))}()),c.a.createElement("div",{ref:v,className:h.right,onClick:function(a){e.rtl?(_(g+1),E(d+100),u.current.style.transform="translateX("+(d+100)+"%)"):(_(g+1),E(d-100),u.current.style.transform="translateX("+(d-100)+"%)"),v.current.style.display=g+1>=l?"none":"block",y.current.style.display=g+1<=1?"none":"block"}},c.a.createElement("div",{className:a.icon},c.a.createElement("img",{src:h.right_photo}))),c.a.createElement("div",{ref:y,className:h.left,onClick:function(a){e.rtl?(_(g-1),E(d-100),u.current.style.transform="translateX("+(d-100)+"%)"):(_(g-1),E(d+100),u.current.style.transform="translateX("+(d+100)+"%)"),y.current.style.display=g-1<=1?"none":"block",v.current.style.display=g-1>=l?"none":"block"}},c.a.createElement("div",{className:a.icon},c.a.createElement("img",{src:h.left_photo}))))},g=function(e){return c.a.createElement(o,{rtl:e.rtl,noEffects:e.noEffects},e.children)},_=(t(9),t(10),function(){return c.a.createElement(g,{rtl:!1,noEffects:!1},c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/1.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/2.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/3.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/4.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/5.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/6.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/1.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/2.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/3.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/4.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/5.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/6.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/1.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/2.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/3.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/4.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/5.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/6.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/1.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/2.jpg"})),c.a.createElement("div",{className:"my_class"},c.a.createElement("img",{src:"./imgs/3.jpg"})))});r.a.render(c.a.createElement(_,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.50314713.chunk.js.map