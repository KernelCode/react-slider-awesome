(this["webpackJsonpreact-slider-awesome-example"]=this["webpackJsonpreact-slider-awesome-example"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(10)},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(4);var a=n(0),l=n.n(a),r=n(2),c=n.n(r),i={kc_slider:"_949D7",box:"_25o3f",boxNoEffects:"_2fe--",kc_slider_container:"_3h-Rg",page_small_view_container:"_13jOy",page_small_view:"_3PjHV",page_small_view_selected:"_7ixzj",kc_pager_left:"_Z1_JJ",kc_pager_right:"_2uTsQ",icon:"_vA4o9",loading:"_3ipxO",kc_pager:"_1tnZR"},s={kc_slider:"_3FtQE",box:"_DU58q",boxNoEffects:"_2OSHI",kc_slider_container:"_wJxOC",page_small_view_container:"_1yosG",page_small_view:"_1BNll",page_small_view_selected:"_3mO9G",kc_pager_right:"_2bcUa",kc_pager_left:"_35o37",icon:"_sBeYm",loading:"_2mwXM",kc_pager:"_1x90e"},m=function(e){var t=e.rtl?i:s,n=t.box;return e.noEffects&&(n=t.boxNoEffects),l.a.createElement("div",{className:n,onMouseEnter:function(e){},onMouseLeave:function(e){}},e.children)},o=function(e){var t=e.rtl?i:s,n=Object(a.useState)(0),r=n[0],c=n[1],o=Object(a.useState)(1),g=o[0],_=o[1],u=Object(a.useState)(0),d=u[0],p=u[1],E=0,f=Object(a.useRef)(null),v=Object(a.useRef)(null),h=Object(a.useRef)(null);window.innerWidth<600?E=4:window.innerWidth<700?E=5:window.innerWidth<800?E=6:window.innerWidth<1e3?E=7:window.innerWidth>1e3&&(E=8),Object(a.useEffect)((function(){c(Math.round((1|e.children.length)/E))}));var y={right:t.kc_pager_right,left:t.kc_pager_left,right_photo:"./assets/imgs/right.svg",left_photo:"./assets/imgs/left.svg"};return e.rtl&&(y={right:t.kc_pager_left,left:t.kc_pager_right,right_photo:"./assets/imgs/left.svg",left_photo:"./assets/imgs/right.svg"}),l.a.createElement("div",{onLoad:function(e){h.current.style.display="none",v.current.style.display="none"},onMouseEnter:function(e){window.innerWidth<600||(h.current.style.display=g>=r?"none":"block",v.current.style.display=g<=1?"none":"block",v.current.style.opacity="1",h.current.style.opacity="1")},onMouseLeave:function(e){window.innerWidth<600||(v.current.style.opacity="0",h.current.style.opacity="0")},className:t.kc_slider_container},l.a.createElement("div",{ref:f,className:t.kc_slider},e.children.map((function(t,n){return l.a.createElement(m,{noEffects:e.noEffects,rtl:e.rtl,key:"items_"+n},t)}))),l.a.createElement("div",{className:t.page_small_view_container},function(){for(var e=[],n=0;n<r;n++)e.push(n+1);return e.map((function(e,n){return n==g-1?l.a.createElement("div",{key:"pages_views_"+n,className:t.page_small_view_selected}):l.a.createElement("div",{key:"pages_views_"+n,className:t.page_small_view})}))}()),l.a.createElement("div",{ref:h,className:y.right,onClick:function(t){e.rtl?(_(g+1),p(d+100),f.current.style.transform="translateX("+(d+100)+"%)"):(_(g+1),p(d-100),f.current.style.transform="translateX("+(d-100)+"%)"),h.current.style.display=g+1>=r?"none":"block",v.current.style.display=g+1<=1?"none":"block"}},l.a.createElement("div",{className:t.icon},l.a.createElement("img",{src:y.right_photo}))),l.a.createElement("div",{ref:v,className:y.left,onClick:function(t){e.rtl?(_(g-1),p(d-100),f.current.style.transform="translateX("+(d-100)+"%)"):(_(g-1),p(d+100),f.current.style.transform="translateX("+(d+100)+"%)"),v.current.style.display=g-1<=1?"none":"block",h.current.style.display=g-1>=r?"none":"block"}},l.a.createElement("div",{className:t.icon},l.a.createElement("img",{src:y.left_photo}))))},g=function(e){return l.a.createElement(o,{rtl:e.rtl,noEffects:e.noEffects},e.children)},_=(n(9),function(){return l.a.createElement(g,{rtl:!1,noEffects:!1},l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/1.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/2.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/3.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/4.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/5.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/6.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/1.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/2.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/3.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/4.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/5.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/6.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/1.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/2.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/3.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/4.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/5.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/6.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/1.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/2.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{src:"./imgs/3.jpg"})))});c.a.render(l.a.createElement(_,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.4a2da183.chunk.js.map