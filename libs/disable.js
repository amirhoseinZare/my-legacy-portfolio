jQuery(document).ready(function(){window.onload=function(){var e;void 0!==(e=document.body).onselectstart?e.onselectstart=function(){return!1}:void 0!==e.style.MozUserSelect?e.style.MozUserSelect="none":e.onmousedown=function(){return!1},e.style.cursor="default"},window.addEventListener("keydown",function(e){!e.ctrlKey||65!=e.which&&66!=e.which&&67!=e.which&&70!=e.which&&73!=e.which&&80!=e.which&&83!=e.which&&85!=e.which&&86!=e.which||e.preventDefault()}),document.keypress=function(e){return e.ctrlKey&&(65==e.which||66==e.which||70==e.which||67==e.which||73==e.which||80==e.which||83==e.which||85==e.which||e.which),!1},document.onkeydown=function(e){if(123==(e=e||window.event).keyCode||18==e.keyCode)return!1},document.oncontextmenu=function(e){var n=e||window.event;if("A"!=(n.target||n.srcElement).nodeName)return!1},document.ondragstart=function(){return!1}});