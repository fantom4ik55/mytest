(()=>{"use strict";var M={};M.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(M){if("object"==typeof window)return window}}(),(()=>{var N;M.g.importScripts&&(N=M.g.location+"");var D=M.g.document;if(!N&&D&&(D.currentScript&&"SCRIPT"===D.currentScript.tagName.toUpperCase()&&(N=D.currentScript.src),!N)){var e=D.getElementsByTagName("script");if(e.length)for(var g=e.length-1;g>-1&&(!N||!/^http(s?):/.test(N));)N=e[g--].src}if(!N)throw new Error("Automatic publicPath is not supported in this browser");N=N.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),M.p=N})(),M.p;const N="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA2IiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgMTA2IDY0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMV8xNTgpIj4KPHBhdGggZD0iTTcuNzU2MiA1Ny4yMTk3TDMuNzc4NjYgNDkuODQxSDBWNjMuODAwN0gzLjU3OTc4VjU2LjAyMzJMNi4zNjQwNiA2MS4wMDg4SDkuMTQ4MzRMMTEuOTMyNiA1Ni4wMjMyVjYzLjgwMDdIMTUuNTEyNFY0OS44NDFIMTEuNzMzN0w3Ljc1NjIgNTcuMjE5N1pNMjcuNDQ1IDQ5LjY0MTZIMjIuNDczMUMyMS4wODEgNDkuNjQxNiAyMC4wNyA0OS45NTc0IDE5LjQ0MDIgNTAuNTg4OUMxOC44MTA0IDUxLjIyMDQgMTguNDk1NiA1Mi4yMzQxIDE4LjQ5NTYgNTMuNjMwMVY2MC4wMTE3QzE4LjQ5NTYgNjEuNDA3NiAxOC44MTA0IDYyLjQyMTQgMTkuNDQwMiA2My4wNTI5QzIwLjA3IDYzLjY4NDQgMjEuMDgxIDY0LjAwMDIgMjIuNDczMSA2NC4wMDAySDI3LjQ0NUMyOC44MzcyIDY0LjAwMDIgMjkuODQ4MSA2My42ODQ0IDMwLjQ3NzkgNjMuMDUyOUMzMS4xMDc3IDYyLjQyMTQgMzEuNDIyNiA2MS40MDc2IDMxLjQyMjYgNjAuMDExN1Y1My42MzAxQzMxLjQyMjYgNTIuMjM0MSAzMS4xMDc3IDUxLjIyMDQgMzAuNDc3OSA1MC41ODg5QzI5Ljg0ODEgNDkuOTU3NCAyOC44MzcyIDQ5LjY0MTYgMjcuNDQ1IDQ5LjY0MTZaTTI3Ljg0MjggNjAuMDExN0MyNy44NDI4IDYwLjgwOTQgMjcuNDQ1IDYxLjIwODIgMjYuNjQ5NSA2MS4yMDgySDIzLjI2ODZDMjIuNDczMSA2MS4yMDgyIDIyLjA3NTMgNjAuODA5NCAyMi4wNzUzIDYwLjAxMTdWNTMuNjMwMUMyMi4wNzUzIDUyLjgzMjQgMjIuNDczMSA1Mi40MzM1IDIzLjI2ODYgNTIuNDMzNUgyNi42NDk1QzI3LjQ0NSA1Mi40MzM1IDI3Ljg0MjggNTIuODMyNCAyNy44NDI4IDUzLjYzMDFWNjAuMDExN1pNNDIuOTU3NCA1NS4zMjUySDM3Ljk4NTVWNDkuODQxSDM0LjQwNTdWNjMuODAwN0gzNy45ODU1VjU4LjExNzFINDIuOTU3NFY2My44MDA3SDQ2LjUzNzJWNDkuODQxSDQyLjk1NzRWNTUuMzI1MlpNNDkuOTE4MSA2My44MDA3SDYwLjk1NThWNjEuMDA4OEg1My40OTc5VjU4LjExNzFINTkuMzY0OFY1NS4zMjUySDUzLjQ5NzlWNTIuNjMzSDYwLjk1NThWNDkuODQxSDQ5LjkxODFWNjMuODAwN1pNNzUuMTI1NyA1Ny40OTgxQzc0LjkwNzUgNTcuMjA1OSA3NC42NTIgNTYuOTczMiA3NC4zNjA2IDU2LjgwMDFDNzQuMDY5MiA1Ni42MjcgNzMuNzc2NCA1Ni41MDEgNzMuNDg1IDU2LjQyMDZDNzMuOTg5MSA1Ni4yMjEyIDc0LjQxMzEgNTUuODcyMiA3NC43NTg0IDU1LjM3MzdDNzUuMTAzNiA1NC44NzUxIDc1LjI3NDkgNTQuMjI3IDc1LjI3NDkgNTMuNDI5M0M3NS4yNzQ5IDUyLjIyMDMgNzQuOTY5NyA1MS4zMTg3IDc0LjM2MDYgNTAuNzI3NEM3My43NTAyIDUwLjEzNiA3Mi43OTU4IDQ5LjgzOTYgNzEuNDk2MiA0OS44Mzk2SDYzLjU0MTJWNjMuNzk5M0g3Mi4wOTI5QzczLjM5MjUgNjMuNzk5MyA3NC4zNDY4IDYzLjQ5MzMgNzQuOTU3MyA2Mi44ODI2Qzc1LjU2NjMgNjIuMjcxOCA3NS44NzE1IDYxLjMxMzUgNzUuODcxNSA2MC4wMTAzQzc1Ljg3MTUgNTkuNDY0NiA3NS44MDI1IDU4Ljk4MjcgNzUuNjYzIDU4LjU2NDVDNzUuNTIzNSA1OC4xNDYyIDc1LjM0NCA1Ny43OTAzIDc1LjEyNTcgNTcuNDk4MVpNNjcuMTIwOSA1Mi42MzNINzAuNTAxOUM3MS4yOTc0IDUyLjYzMyA3MS42OTUxIDUzLjAzMTggNzEuNjk1MSA1My44Mjk1VjU0LjIyODRDNzEuNjk1MSA1NS4wMjYxIDcxLjI5NzQgNTUuNDI0OSA3MC41MDE5IDU1LjQyNDlINjcuMTIwOVY1Mi42MzNaTTcyLjI5MTcgNTkuODEyMkM3Mi4yOTE3IDYwLjYwOTkgNzEuODk0IDYxLjAwODggNzEuMDk4NSA2MS4wMDg4SDY3LjEyMDlWNTguMjE2OUg3MS4wOTg1QzcxLjg5NCA1OC4yMTY5IDcyLjI5MTcgNTguNjE1NyA3Mi4yOTE3IDU5LjQxMzRWNTkuODEyMlpNODIuNTMzOSA0OS44NDFMNzcuMjYzNyA2My44MDA3SDgxLjE0MThMODIuMDM2NyA2MS4zMDc5SDg3LjAwODZMODcuOTAzNiA2My44MDA3SDkxLjc4MTdMODYuNTExNSA0OS44NDFIODIuNTMzOVpNODIuOTMxNyA1OC43MTU0TDg0LjUyMjcgNTQuMDI4OUw4Ni4xMTM3IDU4LjcxNTRIODIuOTMxN1pNMTAyLjEyMiA1Ni43MjEyTDEwNC4wMTEgNTMuMTMxNUMxMDQuMDkxIDUyLjk4NDcgMTA0LjIxIDUyLjg0OSAxMDQuMzY5IDUyLjcyM0MxMDQuNTI4IDUyLjU5NyAxMDQuNzA3IDUyLjUzMzMgMTA0LjkwNiA1Mi41MzMzSDEwNS43MDJWNDkuODQxQzEwNS41MjkgNDkuODE0NyAxMDUuMzQ0IDQ5Ljc4MTUgMTA1LjE0NSA0OS43NDEzQzEwNC45NzIgNDkuNzE1IDEwNC43ODEgNDkuNjkxNSAxMDQuNTY4IDQ5LjY3MjFDMTA0LjM1NSA0OS42NTI3IDEwNC4xMzcgNDkuNjQxNiAxMDMuOTEyIDQ5LjY0MTZDMTAzLjIwOSA0OS42NDE2IDEwMi42NDMgNDkuODE3NSAxMDIuMjEyIDUwLjE3MDZDMTAxLjc4MSA1MC41MjI0IDEwMS40MTkgNTAuOTc4IDEwMS4xMjggNTEuNTM2MUw5OS4xMzg4IDU1LjMyNTJIOTcuMzQ4OVY0OS44NDFIOTMuNzY5MVY2My44MDA3SDk3LjM0ODlWNTguMTE3MUg5OS4xMzg4TDEwMi4yMjEgNjMuODAwN0gxMDZMMTAyLjEyMiA1Ni43MjEyWiIgZmlsbD0iI0JGMjczOCIvPgo8cGF0aCBkPSJNNzkuODA2MyAzMC45OTk1VjYuODA5NkM3OS44MDYzIDYuODA5NiA3OS45Nzc1IDMuNjY4NjYgNzguNTY0NyAyLjI0OTE1Qzc3LjE1MTggMC44MjgyNDggNzQuMDQzIDEuMDMxODMgNzQuMDQzIDEuMDMxODNIMzIuNTY4OUMzMi41Njg5IDEuMDMxODMgMjkuMDQ4NSAwLjk0NzM0OSAyNy41MTgyIDIuNTUzODJDMjYuMDMzNiA0LjExNDYgMjYuMDYzOSA3LjM0ODMyIDI2LjA2MzkgNy4zNDgzMlYzMC41OTY1QzI2LjA2MzkgMzAuNTk2NSAyNS44OTk2IDMzLjkwMDggMjcuNTE4MiAzNS40NTg5QzI5LjE4MjQgMzcuMDU4NCAzMi42MzEgMzYuOTEzIDMyLjYzMSAzNi45MTNINzMuNzczN0M3My43NzM3IDM2LjkxMyA3Ny4wMDY4IDM3LjE0MTUgNzguNTM1NyAzNS42NDAzQzgwLjAyMzEgMzQuMTg0NyA3OS44MDYzIDMwLjk5OTUgNzkuODA2MyAzMC45OTk1WiIgZmlsbD0iI0JGMjczOCIvPgo8cGF0aCBkPSJNNzYuNjExOCAzLjkzNDdDNzUuODk3OCAzLjI1NjEgNzQuNjMyNyAzLjAxOTI5IDc0LjYzMjcgMy4wMTkyOUg2NS40OTgxQzY1LjQ5ODEgMy4wMTkyOSA1MS4wODM3IDI3LjU4NTkgNDkuNjY1MyAyOS4yNzU0QzQ1LjE3NCAzNC42MjggMzkuMTYwOCAzNC43NzA3IDM5LjE2MDggMzQuNzcwN0g3NC45Mzc5Qzc0LjkzNzkgMzQuNzcwNyA3Ni4xMjI5IDM0LjUzNTMgNzYuNzY1MSAzMy44NTUzQzc3LjQxODMgMzMuMTYyOCA3Ny41MjYxIDMyLjAyMzEgNzcuNTI2MSAzMi4wMjMxVjUuNzY2OTFDNzcuNTI2MSA1Ljc2NjkxIDc3LjM0MzggNC42Mjk5MiA3Ni42MTE4IDMuOTM0N1oiIGZpbGw9IiMxQTFBMUEiLz4KPHBhdGggZD0iTTYwLjk1ODUgMC4wMTI3MTY2QzU4LjA0MTYgLTAuMTcwMDg5IDU0LjY5MzkgMS42NDEzNSA1NC42OTM5IDEuNjQxMzVMMzcuMDU3NCAxNy45MjkxQzM3LjA1NzQgMTcuOTI5MSA0Ny45NTk3IDE0LjkxODMgNDkuMzU2IDIyLjgxNjNDNTEuMjg1NCAzMy43MTk2IDM3Ljk4NTUgMzQuODQ0MSAzNy45ODU1IDM0Ljg0NDFDMzcuOTg1NSAzNC44NDQxIDQzLjg4NjkgMzUuNDM4MiA0OC44OTE5IDMwLjcyODJDNTMuNDU3OCAyNi40MzA5IDY1LjgzMjQgMy4wMzg3IDY1LjgzMjQgMy4wMzg3QzY1LjgzMjQgMy4wMzg3IDYzLjU5NjQgMC4xNzg5MDQgNjAuOTU4NSAwLjAxMjcxNjZaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzFfMTU4Ij4KPHJlY3Qgd2lkdGg9IjEwNiIgaGVpZ2h0PSI2NCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",D="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAzNiA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTgiIGN5PSIxOCIgcj0iMTgiIGZpbGw9IiNCRjI3MzgiLz4KPHBhdGggZD0iTTE4LjQ0ODMgNDAuMDAwMUwxMSAyOS42OTdIMjUuODk2NkwxOC40NDgzIDQwLjAwMDFaIiBmaWxsPSIjQkYyNzM4Ii8+CjxjaXJjbGUgY3g9IjE4IiBjeT0iMTgiIHI9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",e=document.querySelector(".contacts__form"),g=document.querySelectorAll(".error input, .error textarea"),j=document.querySelectorAll(".error");function c(M,N){if(N.focus(),N.setSelectionRange)N.setSelectionRange(M,M);else if(N.createTextRange){var D=N.createTextRange();D.collapse(!0),D.moveEnd("character",M),D.moveStart("character",M),D.select()}}function i(M){var N=this.placeholder,D=0,e=N.replace(/\D/g,""),g=this.value.replace(/\D/g,"");e.length>=g.length&&(g=e),N=N.replace(/[_\d]/g,(function(M){return g.charAt(D++)||"_"})),this.value=N,(D=N.lastIndexOf(g.substr(-1)))<N.length&&N!=this.placeholder?D++:D=N.indexOf("_"),c(D,this)}function z(){var M=window.innerWidth;return M<768?4:M>=768&&M<=1024?4.8:5.2}e.addEventListener("submit",(M=>{let N=!1;j.forEach((M=>{const N=M.querySelector(".contacts__form-error");N&&N.remove()})),g.forEach(((M,D)=>{if(""===M.value.trim()){N=!0;const e=document.createElement("p");e.classList.add("contacts__form-error"),e.textContent="Является обязательным полем",j[D].appendChild(e),M.classList.add("error"),M.classList.add("contacts__form-error-bg")}else M.classList.remove("error")})),N&&M.preventDefault()})),window.addEventListener("DOMContentLoaded",(function(){var M=document.querySelector("#online_phone");M.addEventListener("input",i,!1),M.focus(),c(3,M)})),ymaps.ready((function(){var M=z(),e=new ymaps.Map("map",{center:[52.97,49.36],zoom:M,controls:["zoomControl"],behaviors:["drag"],mode:"vector"});e.options.set("preset","islands#blackAndDark"),[new ymaps.Placemark([51.5408619435293,46.007374499999976],{hintContent:'<div class="map__dot-hint">Саратов</div>',balloonContent:['<div class="map__dot-balloon">',`<img class="map__burger-img" src="${N}" alt=""/>`,"<br>г.Саратов 410080, пр-т Строителей, 1 +7 (927) 626-00-50","</div>"].join("")},{iconLayout:"default#image",iconImageHref:D,iconImageSize:[36,40]}),new ymaps.Placemark([55.76117429168956,37.61615189062498],{hintContent:'<div class="map__dot-hint">Москва</div>',balloonContent:['<div class="map__dot-balloon">',`<img class="map__burger-img" src="${N}" alt=""/>`,"<br>г.Москва 115114, ул. Дербеневская, д. 1, стр. 1, подъезд 44, офис 6 ","</div>"].join("")},{iconLayout:"default#image",iconImageHref:D,iconImageSize:[36,40]}),new ymaps.Placemark([48.66049207156394,44.51347994531245],{hintContent:'<div class="map__dot-hint">Волгоград</div>',balloonContent:['<div class="map__dot-balloon">',`<img class="map__burger-img" src="${N}" alt=""/>`,"<br>г.Волгоград ул. Командира Рудь, 14А","</div>"].join("")},{iconLayout:"default#image",iconImageHref:D,iconImageSize:[36,40]}),new ymaps.Placemark([45.06611530619296,38.985679499999996],{hintContent:'<div class="map__dot-hint">Краснодар</div>',balloonContent:['<div class="map__dot-balloon">',`<img class="map__burger-img" src="${N}" alt=""/>`,"<br>г.Краснодар 350015, ул. Митрофана Седина, 176","</div>"].join("")},{iconLayout:"default#image",iconImageHref:D,iconImageSize:[36,40]}),new ymaps.Placemark([51.694353052188156,39.342517499999914],{hintContent:'<div class="map__dot-hint">Воронеж',balloonContent:['<div class="map__dot-balloon">',`<img class="map__burger-img" src="${N}" alt=""/>`,"<br>г.Воронеж 394030, ул. Комиссаржевской, 10","</div>"].join("")},{iconLayout:"default#image",iconImageHref:D,iconImageSize:[36,40]}),new ymaps.Placemark([55.00202076433394,82.95604349999992],{hintContent:'<div class="map__dot-hint">Новосибирск</div>',balloonContent:['<div class="map__dot-balloon">',`<img class="map__burger-img" src="${N}" alt=""/>`,"<br>г.Новосибирск 115114, ул. Дербеневская, д. 1, стр. 1, подъезд 44, офис 6 ","</div>"].join("")},{iconLayout:"default#image",iconImageHref:D,iconImageSize:[36,40]}),new ymaps.Placemark([40.15375852532393,44.491566499999976],{hintContent:'<div class="map__dot-hint">Еревар</div>',balloonContent:['<div class="map__dot-balloon">',`<img class="map__burger-img" src="${N}" alt=""/>`,"<br>г.Еревар Район Аван 4, дом 2","</div>"].join("")},{iconLayout:"default#image",iconImageHref:D,iconImageSize:[36,40]})].forEach((function(M){e.geoObjects.add(M)})),window.addEventListener("resize",(function(){M=z(),e.setZoom(M),e.container.fitToViewport()}))})),document.addEventListener("click",(M=>{const N=document.querySelector(".header__search-list"),D=document.querySelector(".header__search-checkbox"),e=document.querySelector(".header__search-box");N.contains(M.target)||D.contains(M.target)||e.contains(M.target)||(D.checked=!1)})),document.addEventListener("click",(M=>{const N=document.querySelector(".menu__box"),D=document.querySelector(".menu__toggle"),e=document.querySelector(".menu__btn");N.contains(M.target)||D.contains(M.target)||e.contains(M.target)||(D.checked=!1)}))})();