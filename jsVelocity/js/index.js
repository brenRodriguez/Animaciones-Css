!function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){var b=q.data(a,k);return null===b?d:b}function g(a){return function(b){return Math.round(b*a)*(1/a)}}function h(a,b){var c=a;return p.isString(a)?r.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?g.apply(null,a):p.isArray(a)&&2===a.length?t.apply(null,a.concat([b])):p.isArray(a)&&4===a.length?s.apply(null,a):!1,c===!1&&(c=r.Easings[r.defaults.easing]?r.defaults.easing:m),c}function i(a){if(a)for(var b=(new Date).getTime(),c=0,e=r.State.calls.length;e>c;c++)if(r.State.calls[c]){var g=r.State.calls[c],h=g[0],k=g[2],l=g[3];l||(l=r.State.calls[c][3]=b-16);for(var m=Math.min((b-l)/k.duration,1),n=0,q=h.length;q>n;n++){var s=h[n],t=s.element;if(f(t)){var v=!1;k.display&&"none"!==k.display&&u.setPropertyValue(t,"display",k.display);for(var w in s)if("element"!==w){var x,y=s[w],z=p.isString(y.easing)?r.Easings[y.easing]:y.easing;if(x=1===m?y.endValue:y.startValue+(y.endValue-y.startValue)*z(m),y.currentValue=x,u.Hooks.registered[w]){var A=u.Hooks.getRoot(w),B=f(t).rootPropertyValueCache[A];B&&(y.rootPropertyValue=B)}var C=u.setPropertyValue(t,w,y.currentValue+(0===parseFloat(x)?"":y.unitType),y.rootPropertyValue,y.scrollData);u.Hooks.registered[w]&&(f(t).rootPropertyValueCache[A]=u.Normalizations.registered[A]?u.Normalizations.registered[A]("extract",null,C[1]):C[1]),"transform"===C[0]&&(v=!0)}k.mobileHA&&f(t).transformCache.translate3d===d&&(f(t).transformCache.translate3d="(0px, 0px, 0px)",v=!0),v&&u.flushTransformCache(t)}}k.display&&"none"!==k.display&&(r.State.calls[c][2].display=!1),k.progress&&k.progress.call(g[1],g[1],m,Math.max(0,l+k.duration-b),l),1===m&&j(c)}r.State.isTicking&&o(i)}function j(a,b){if(!r.State.calls[a])return!1;for(var c=r.State.calls[a][0],e=r.State.calls[a][1],g=r.State.calls[a][2],h=!1,i=0,j=c.length;j>i;i++){var k=c[i].element;if(b||"none"!==g.display||g.loop||u.setPropertyValue(k,"display",g.display),(q.queue(k)[1]===d||!/\.velocityQueueEntryFlag/i.test(q.queue(k)[1]))&&f(k)){f(k).isAnimating=!1,f(k).rootPropertyValueCache={};var l,m=["transformPerspective","translateZ","rotateX","rotateY"],n=!1;for(var o in m)l=m[o],/^\(0[^.]/.test(f(k).transformCache[l])&&(n=!0,delete f(k).transformCache[l]);g.mobileHA&&(n=!0,delete f(k).transformCache.translate3d),n&&u.flushTransformCache(k)}b||!g.complete||g.loop||i!==j-1||g.complete.call(e,e),g.queue!==!1&&q.dequeue(k,g.queue)}r.State.calls[a]=!1;for(var p=0,s=r.State.calls.length;s>p;p++)if(r.State.calls[p]!==!1){h=!0;break}h===!1&&(r.State.isTicking=!1,delete r.State.calls,r.State.calls=[])}var k="velocity",l=400,m="swing",n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=b.requestAnimationFrame||function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof SVGElement}},q=b.jQuery||a.Velocity&&a.Velocity.Utilities;if(!q)throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");if(a.Velocity!==d&&!a.Velocity.Utilities)throw new Error("Velocity: Namespace is occupied.");if(7>=n){if(b.jQuery)return void(b.jQuery.fn.velocity=b.jQuery.fn.animate);throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.")}if(8===n&&!b.jQuery)throw new Error("Velocity: For IE8, Velocity requires jQuery to be loaded. (Velocity's jQuery shim does not work with IE8.)");var r=a.Velocity=a.velocity={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:b.jQuery?{}:q,Sequences:{},Easings:{},defaults:{queue:"",duration:l,easing:m,begin:null,complete:null,progress:null,display:null,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},animate:function(){},mock:!1,debug:!1};b.pageYOffset!==d?(r.State.scrollAnchor=b,r.State.scrollPropertyLeft="pageXOffset",r.State.scrollPropertyTop="pageYOffset"):(r.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,r.State.scrollPropertyLeft="scrollLeft",r.State.scrollPropertyTop="scrollTop");var s=function(){function a(a,b){return 1-3*b+3*a}function b(a,b){return 3*b-6*a}function c(a){return 3*a}function d(d,e,f){return((a(e,f)*d+b(e,f))*d+c(e))*d}function e(d,e,f){return 3*a(e,f)*d*d+2*b(e,f)*d+c(e)}return function(a,b,c,f){function g(b){for(var f=b,g=0;8>g;++g){var h=e(f,a,c);if(0===h)return f;var i=d(f,a,c)-b;f-=i/h}return f}if(4!==arguments.length)return!1;for(var h=0;4>h;++h)if("number"!=typeof arguments[h]||isNaN(arguments[h])||!isFinite(arguments[h]))return!1;return a=Math.min(a,1),c=Math.min(c,1),a=Math.max(a,0),c=Math.max(c,0),function(e){return a===b&&c===f?e:d(g(e),b,f)}}}(),t=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||600,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>l&&Math.abs(h.v)>l))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();!function(){r.Easings.linear=function(a){return a},r.Easings.swing=function(a){return.5-Math.cos(a*Math.PI)/2},r.Easings.spring=function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)},r.Easings.ease=s(.25,.1,.25,1),r.Easings["ease-in"]=s(.42,0,1,1),r.Easings["ease-out"]=s(0,0,.58,1),r.Easings["ease-in-out"]=s(.42,0,.58,1);var a={};q.each(["Quad","Cubic","Quart","Quint","Expo"],function(b,c){a[c]=function(a){return Math.pow(a,b+2)}}),q.extend(a,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return 0===a||1===a?a:-Math.pow(2,8*(a-1))*Math.sin((80*(a-1)-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,c=4;a<((b=Math.pow(2,--c))-1)/11;);return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*b-2)/22-a,2)}}),q.each(a,function(a,b){r.Easings["easeIn"+a]=b,r.Easings["easeOut"+a]=function(a){return 1-b(1-a)},r.Easings["easeInOut"+a]=function(a){return.5>a?b(2*a)/2:1-b(-2*a+2)/2}})}();var u=r.CSS={RegEx:{valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Hooks:{templates:{color:["Red Green Blue Alpha","255 255 255 1"],backgroundColor:["Red Green Blue Alpha","255 255 255 1"],borderColor:["Red Green Blue Alpha","255 255 255 1"],borderTopColor:["Red Green Blue Alpha","255 255 255 1"],borderRightColor:["Red Green Blue Alpha","255 255 255 1"],borderBottomColor:["Red Green Blue Alpha","255 255 255 1"],borderLeftColor:["Red Green Blue Alpha","255 255 255 1"],outlineColor:["Red Green Blue Alpha","255 255 255 1"],fill:["Red Green Blue Alpha","255 255 255 1"],stroke:["Red Green Blue Alpha","255 255 255 1"],stopColor:["Red Green Blue Alpha","255 255 255 1"],textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0%"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){var a,b,c;if(n)for(a in u.Hooks.templates){b=u.Hooks.templates[a],c=b[0].split(" ");var d=b[1].match(u.RegEx.valueSplit);"Color"===c[0]&&(c.push(c.shift()),d.push(d.shift()),u.Hooks.templates[a]=[c.join(" "),d.join(" ")])}for(a in u.Hooks.templates){b=u.Hooks.templates[a],c=b[0].split(" ");for(var e in c){var f=a+c[e],g=e;u.Hooks.registered[f]=[a,g]}}},getRoot:function(a){var b=u.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return u.RegEx.valueUnwrap.test(b)&&(b=b.match(u.Hooks.RegEx.valueUnwrap)[1]),u.Values.isCSSNullValue(b)&&(b=u.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=u.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=u.Hooks.cleanRootPropertyValue(d,b),b.toString().match(u.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=u.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=u.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(u.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return u.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(u.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},opacity:function(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){function a(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?"rgb("+(parseInt(b[1],16)+" "+parseInt(b[2],16)+" "+parseInt(b[3],16))+")":"rgb(0 0 0)"}var b=["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"];9>=n||r.State.isGingerbread||(b=b.concat(["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]));for(var c=0,e=b.length;e>c;c++)!function(){var a=b[c];u.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return"transform";case"extract":return f(c).transformCache[a]===d?/^scale/i.test(a)?1:0:f(c).transformCache[a].replace(/[()]/g,"");case"inject":var g=!1;switch(a.substr(0,a.length-1)){case"translate":g=!/(%|px|em|rem|\d)$/i.test(e);break;case"scal":case"scale":r.State.isAndroid&&f(c).transformCache[a]===d&&(e=1),g=!/(\d)$/i.test(e);break;case"skew":g=!/(deg|\d)$/i.test(e);break;case"rotate":g=!/(deg|\d)$/i.test(e)}return g||(f(c).transformCache[a]="("+e+")"),f(c).transformCache[a]}}}();for(var g=["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],c=0,h=g.length;h>c;c++)!function(){var b=g[c];u.Normalizations.registered[b]=function(c,e,f){switch(c){case"name":return b;case"extract":var g;if(u.RegEx.wrappedValueAlreadyExtracted.test(f))g=f;else{var h,i={aqua:"rgb(0, 255, 255);",black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",fuchsia:"rgb(255, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",lime:"rgb(0, 255, 0)",maroon:"rgb(128, 0, 0)",navy:"rgb(0, 0, 128)",olive:"rgb(128, 128, 0)",purple:"rgb(128, 0, 128)",red:"rgb(255, 0, 0)",silver:"rgb(192, 192, 192)",teal:"rgb(0, 128, 128)",white:"rgb(255, 255, 255)",yellow:"rgb(255, 255, 0)"};/^[A-z]+$/i.test(f)?h=i[f]!==d?i[f]:i.black:/^#([A-f\d]{3}){1,2}$/i.test(f)?h=a(f):/^rgba?\(/i.test(f)||(h=i.black),g=(h||f).toString().match(u.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=n||3!==g.split(" ").length||(g+=" 1"),g;case"inject":return 8>=n?4===f.split(" ").length&&(f=f.split(/\s+/).slice(0,3).join(" ")):3===f.split(" ").length&&(f+=" 1"),(8>=n?"rgb":"rgba")+"("+f.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y1";return(n||r.State.isAndroid&&!r.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(r.State.prefixMatches[a])return[r.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(r.State.prefixElement.style[e]))return r.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":"block"}},getPropertyValue:function(a,c,e,g){function h(a,c){var e=0;if(8>=n)e=q.css(a,c);else{if(!g){if("height"===c&&"border-box"!==u.getPropertyValue(a,"boxSizing").toString().toLowerCase())return a.offsetHeight-(parseFloat(u.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(u.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(u.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(u.getPropertyValue(a,"paddingBottom"))||0);if("width"===c&&"border-box"!==u.getPropertyValue(a,"boxSizing").toString().toLowerCase())return a.offsetWidth-(parseFloat(u.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(u.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(u.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(u.getPropertyValue(a,"paddingRight"))||0)}var i;i=f(a)===d?b.getComputedStyle(a,null):f(a).computedStyle?f(a).computedStyle:f(a).computedStyle=b.getComputedStyle(a,null),n&&"borderColor"===c&&(c="borderTopColor"),e=9===n&&"filter"===c?i.getPropertyValue(c):i[c],(""===e||null===e)&&(e=a.style[c])}if("auto"===e&&/^(top|right|bottom|left)$/i.test(c)){var j=h(a,"position");("fixed"===j||"absolute"===j&&/top|left/i.test(c))&&(e=q(a).position()[c]+"px")}return e}var i;if(u.Hooks.registered[c]){var j=c,k=u.Hooks.getRoot(j);e===d&&(e=u.getPropertyValue(a,u.Names.prefixCheck(k)[0])),u.Normalizations.registered[k]&&(e=u.Normalizations.registered[k]("extract",a,e)),i=u.Hooks.extractValue(j,e)}else if(u.Normalizations.registered[c]){var l,m;l=u.Normalizations.registered[c]("name",a),"transform"!==l&&(m=h(a,u.Names.prefixCheck(l)[0]),u.Values.isCSSNullValue(m)&&u.Hooks.templates[c]&&(m=u.Hooks.templates[c][1])),i=u.Normalizations.registered[c]("extract",a,m)}return/^[\d-]/.test(i)||(i=f(a)&&f(a).isSVG&&u.Names.SVGAttribute(c)?/^(height|width)$/i.test(c)?a.getBBox()[c]:a.getAttribute(c):h(a,u.Names.prefixCheck(c)[0])),u.Values.isCSSNullValue(i)&&(i=0),r.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,g){var h=c;if("scroll"===c)g.container?g.container["scroll"+g.direction]=d:"Left"===g.direction?b.scrollTo(d,g.alternateValue):b.scrollTo(g.alternateValue,d);else if(u.Normalizations.registered[c]&&"transform"===u.Normalizations.registered[c]("name",a))u.Normalizations.registered[c]("inject",a,d),h="transform",d=f(a).transformCache[c];else{if(u.Hooks.registered[c]){var i=c,j=u.Hooks.getRoot(c);e=e||u.getPropertyValue(a,j),d=u.Hooks.injectValue(i,d,e),c=j}if(u.Normalizations.registered[c]&&(d=u.Normalizations.registered[c]("inject",a,d),c=u.Normalizations.registered[c]("name",a)),h=u.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d}catch(k){r.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else f(a)&&f(a).isSVG&&u.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;r.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){function b(b){return parseFloat(u.getPropertyValue(a,b))}var c="";if((n||r.State.isAndroid&&!r.State.isChrome)&&f(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};q.each(f(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a])})}else{var e,g;q.each(f(a).transformCache,function(b){return e=f(a).transformCache[b],"transformPerspective"===b?(g=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "))}),g&&(c="perspective"+g+" "+c)}u.setPropertyValue(a,"transform",c)}};u.Hooks.register(),u.Normalizations.register(),r.animate=function(){function a(){return g||o}function b(){function a(){function a(a){var c=d,e=d,f=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])?f=a[1]:(p.isString(a[1])||p.isArray(a[1]))&&(e=h(a[1],g.duration),a[2]&&(f=a[2]))):c=a,e=e||g.easing,p.isFunction(c)&&(c=c.call(b,x,w)),p.isFunction(f)&&(f=f.call(b,x,w)),[c||0,e,f]}function k(a,b){var c,d;return d=(b||0).toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=u.Values.getUnitType(a)),[d,c]}function l(){var a={parent:b.parentNode,position:u.getPropertyValue(b,"position"),fontSize:u.getPropertyValue(b,"fontSize")},d=a.position===E.lastPosition&&a.parent===E.lastParent,e=a.fontSize===E.lastFontSize&&a.parent===E.lastParent;E.lastParent=a.parent,E.lastPosition=a.position,E.lastFontSize=a.fontSize,null===E.remToPxRatio&&(E.remToPxRatio=parseFloat(u.getPropertyValue(c.body,"fontSize"))||16);var g={overflowX:null,overflowY:null,boxSizing:null,width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,paddingLeft:null},h={},i=10;if(h.remToPxRatio=E.remToPxRatio,n&&!f(b).isSVG)var j=/^auto$/i.test(b.currentStyle.width),k=/^auto$/i.test(b.currentStyle.height);d&&e||(f(b).isSVG||(g.overflowX=u.getPropertyValue(b,"overflowX"),g.overflowY=u.getPropertyValue(b,"overflowY"),g.boxSizing=u.getPropertyValue(b,"boxSizing"),g.minWidth=u.getPropertyValue(b,"minWidth"),g.maxWidth=u.getPropertyValue(b,"maxWidth")||"none",g.minHeight=u.getPropertyValue(b,"minHeight"),g.maxHeight=u.getPropertyValue(b,"maxHeight")||"none",g.paddingLeft=u.getPropertyValue(b,"paddingLeft")),g.width=u.getPropertyValue(b,"width",null,!0),g.height=u.getPropertyValue(b,"height",null,!0)),d?(h.percentToPxRatioWidth=E.lastPercentToPxWidth,h.percentToPxRatioHeight=E.lastPercentToPxHeight):(f(b).isSVG||(u.setPropertyValue(b,"overflowX","hidden"),u.setPropertyValue(b,"overflowY","hidden"),u.setPropertyValue(b,"boxSizing","content-box"),u.setPropertyValue(b,"minWidth",i+"%"),u.setPropertyValue(b,"maxWidth",i+"%"),u.setPropertyValue(b,"minHeight",i+"%"),u.setPropertyValue(b,"maxHeight",i+"%")),u.setPropertyValue(b,"width",i+"%"),u.setPropertyValue(b,"height",i+"%")),e?h.emToPxRatio=E.lastEmToPx:f(b).isSVG||u.setPropertyValue(b,"paddingLeft",i+"em"),d||(h.percentToPxRatioWidth=E.lastPercentToPxWidth=(parseFloat(u.getPropertyValue(b,"width",null,!0))||1)/i,h.percentToPxRatioHeight=E.lastPercentToPxHeight=(parseFloat(u.getPropertyValue(b,"height",null,!0))||1)/i),e||(h.emToPxRatio=E.lastEmToPx=(parseFloat(u.getPropertyValue(b,"paddingLeft"))||1)/i);for(var l in g)null!==g[l]&&u.setPropertyValue(b,l,g[l]);return f(b).isSVG||(n?(j&&u.setPropertyValue(b,"width","auto"),k&&u.setPropertyValue(b,"height","auto")):(u.setPropertyValue(b,"height","auto"),g.height!==u.getPropertyValue(b,"height",null,!0)&&u.setPropertyValue(b,"height",g.height),u.setPropertyValue(b,"width","auto"),g.width!==u.getPropertyValue(b,"width",null,!0)&&u.setPropertyValue(b,"width",g.width))),r.debug>=1&&console.log("Unit ratios: "+JSON.stringify(h),b),h}if(g.begin&&0===x&&g.begin.call(o,o),"scroll"===A){var m,v,y,z=/^x$/i.test(g.axis)?"Left":"Top",B=parseFloat(g.offset)||0;g.container?g.container.jquery||g.container.nodeType?(g.container=g.container[0]||g.container,m=g.container["scroll"+z],y=m+q(b).position()[z.toLowerCase()]+B):g.container=null:(m=r.State.scrollAnchor[r.State["scrollProperty"+z]],v=r.State.scrollAnchor[r.State["scrollProperty"+("Left"===z?"Top":"Left")]],y=q(b).offset()[z.toLowerCase()]+B),j={scroll:{rootPropertyValue:!1,startValue:m,currentValue:m,endValue:y,unitType:"",easing:g.easing,scrollData:{container:g.container,direction:z,alternateValue:v}},element:b}}else if("reverse"===A){if(!f(b).tweensContainer)return void q.dequeue(b,g.queue);"none"===f(b).opts.display&&(f(b).opts.display="block"),f(b).opts.loop=!1,f(b).opts.begin=null,f(b).opts.complete=null,t.easing||delete g.easing,t.duration||delete g.duration,g=q.extend({},f(b).opts,g);var C=q.extend(!0,{},f(b).tweensContainer);for(var D in C)if("element"!==D){var G=C[D].startValue;C[D].startValue=C[D].currentValue=C[D].endValue,C[D].endValue=G,t&&(C[D].easing=g.easing)}j=C}else if("start"===A){var C;f(b).tweensContainer&&f(b).isAnimating===!0&&(C=f(b).tweensContainer);for(var H in s){var I=a(s[H]),J=I[0],K=I[1],L=I[2];H=u.Names.camelCase(H);var M=u.Hooks.getRoot(H),N=!1;if(f(b).isSVG||u.Names.prefixCheck(M)[1]!==!1||u.Normalizations.registered[M]!==d){g.display&&"none"!==g.display&&/opacity|filter/.test(H)&&!L&&0!==J&&(L=0),g._cacheValues&&C&&C[H]?(L===d&&(L=C[H].endValue+C[H].unitType),N=f(b).rootPropertyValueCache[M]):u.Hooks.registered[H]?L===d?(N=u.getPropertyValue(b,M),L=u.getPropertyValue(b,H,N)):N=u.Hooks.templates[M][1]:L===d&&(L=u.getPropertyValue(b,H));var O,P,Q,R;O=k(H,L),L=O[0],Q=O[1],O=k(H,J),J=O[0].replace(/^([+-\/*])=/,function(a,b){return R=b,""}),P=O[1],L=parseFloat(L)||0,J=parseFloat(J)||0;var S;if("%"===P&&(/^(fontSize|lineHeight)$/.test(H)?(J/=100,P="em"):/^scale/.test(H)?(J/=100,P=""):/(Red|Green|Blue)$/i.test(H)&&(J=J/100*255,P="")),/[\/*]/.test(R))P=Q;else if(Q!==P&&0!==L)if(0===J)P=Q;else{S=S||l();var T=/margin|padding|left|right|width|text|word|letter/i.test(H)||/X$/.test(H)?"x":"y";switch(Q){case"%":L*="x"===T?S.percentToPxRatioWidth:S.percentToPxRatioHeight;break;case"em":L*=S.emToPxRatio;break;case"rem":L*=S.remToPxRatio;break;case"px":}switch(P){case"%":L*=1/("x"===T?S.percentToPxRatioWidth:S.percentToPxRatioHeight);break;case"em":L*=1/S.emToPxRatio;break;case"rem":L*=1/S.remToPxRatio;break;case"px":}}switch(R){case"+":J=L+J;break;case"-":J=L-J;break;case"*":J=L*J;break;case"/":J=L/J}j[H]={rootPropertyValue:N,startValue:L,currentValue:L,endValue:J,unitType:P,easing:K},r.debug&&console.log("tweensContainer ("+H+"): "+JSON.stringify(j[H]),b)}else r.debug&&console.log("Skipping ["+M+"] due to a lack of browser support.")}j.element=b}j.element&&(F.push(j),f(b).tweensContainer=j,f(b).opts=g,f(b).isAnimating=!0,x===w-1?(r.State.calls.length>1e4&&(r.State.calls=e(r.State.calls)),r.State.calls.push([F,o,g]),r.State.isTicking===!1&&(r.State.isTicking=!0,i())):x++)}var b=this,g=q.extend({},r.defaults,t),j={};if(f(b)===d&&q.data(b,k,{isSVG:p.isSVG(b),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}}),/^\d/.test(g.delay)&&g.queue!==!1&&q.queue(b,g.queue,function(a){r.velocityQueueEntryFlag=!0,setTimeout(a,parseFloat(g.delay))}),r.mock===!0)g.duration=1;else switch(g.duration.toString().toLowerCase()){case"fast":g.duration=200;break;case"normal":g.duration=l;break;case"slow":g.duration=600;break;default:g.duration=parseFloat(g.duration)||1}g.easing=h(g.easing,g.duration),g.begin&&!p.isFunction(g.begin)&&(g.begin=null),g.progress&&!p.isFunction(g.progress)&&(g.progress=null),g.complete&&!p.isFunction(g.complete)&&(g.complete=null),g.display&&(g.display=g.display.toString().toLowerCase()),g.mobileHA=g.mobileHA&&r.State.isMobile&&!r.State.isGingerbread,g.queue===!1?g.delay?setTimeout(a,g.delay):a():q.queue(b,g.queue,function(b){r.velocityQueueEntryFlag=!0,a(b)}),""!==g.queue&&"fx"!==g.queue||"inprogress"===q.queue(b)[0]||q.dequeue(b)}var g,m,o,s,t,v=arguments[0]&&(q.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(m=0,o=this,g=this):(m=1,o=v?arguments[0].elements:arguments[0]),o=p.isWrapped(o)?[].slice.call(o):o){v?(s=arguments[0].properties,t=arguments[0].options):(s=arguments[m],t=arguments[m+1]);var w=p.isArray(o)||p.isNodeList(o)?o.length:1,x=0;if("stop"!==s&&!q.isPlainObject(t)){var y=m+1;t={};for(var z=y;z<arguments.length;z++)!p.isArray(arguments[z])&&/^\d/.test(arguments[z])?t.duration=parseFloat(arguments[z]):p.isString(arguments[z])||p.isArray(arguments[z])?t.easing=arguments[z]:p.isFunction(arguments[z])&&(t.complete=arguments[z])}var A;switch(s){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"stop":var B=[];return q.each(r.State.calls,function(a,b){b!==!1&&q.each(b[1].nodeType?[b[1]]:b[1],function(b,c){q.each(o.nodeType?[o]:o,function(b,d){d===c&&(f(d)&&q.each(f(d).tweensContainer,function(a,b){b.endValue=b.currentValue}),(t===!0||p.isString(t))&&q.queue(d,p.isString(t)?t:"",[]),B.push(a))})})}),q.each(B,function(a,b){j(b,!0)}),a();default:if(!q.isPlainObject(s)||q.isEmptyObject(s)){if(p.isString(s)&&r.Sequences[s]){var C=o,D=t.duration;return t.backwards===!0&&(o=(o.jquery?[].slice.call(o):o).reverse()),q.each(o,function(a,b){parseFloat(t.stagger)&&(t.delay=parseFloat(t.stagger)*a),t.drag&&(t.duration=parseFloat(D)||(/^(callout|transition)/.test(s)?1e3:l),t.duration=Math.max(t.duration*(t.backwards?1-a/w:(a+1)/w),.75*t.duration,200)),r.Sequences[s].call(b,b,t||{},a,w)}),g||C}return console.log("First argument was not a property map, a known action, or a registered sequence. Aborting."),a()}A="start"}var E={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPxRatio:null},F=[];q.each(o.nodeType?[o]:o,function(a,c){c.nodeType&&b.call(c)});var G,H=q.extend({},r.defaults,t);if(H.loop=parseInt(H.loop),G=2*H.loop-1,H.loop)for(var I=0;G>I;I++){var J={delay:H.delay};H.complete&&I===G-1&&(J.complete=H.complete),r.animate(o,"reverse",J)}return a()}};var v=b.jQuery||b.Zepto;v&&(v.fn.velocity=r.animate,v.fn.velocity.defaults=r.defaults),"undefined"!=typeof define&&define.amd?define(function(){return r}):"undefined"!=typeof module&&module.exports&&(module.exports=r),q.each(["Down","Up"],function(a,b){r.Sequences["slide"+b]=function(a,c){var d=q.extend({},c),e={height:null,marginTop:null,marginBottom:null,paddingTop:null,paddingBottom:null,overflow:null,overflowX:null,overflowY:null},f=d.begin,g=d.complete,h=!1;null!==d.display&&(d.display="Down"===b?d.display||r.CSS.Values.getDisplayType(a):d.display||"none"),d.begin=function(){function c(){a.style.display="block",e.height=r.CSS.getPropertyValue(a,"height"),a.style.height="auto",r.CSS.getPropertyValue(a,"height")===e.height&&(h=!0),r.CSS.setPropertyValue(a,"height",e.height+"px")}if("Down"===b){e.overflow=[r.CSS.getPropertyValue(a,"overflow"),0],e.overflowX=[r.CSS.getPropertyValue(a,"overflowX"),0],e.overflowY=[r.CSS.getPropertyValue(a,"overflowY"),0],a.style.overflow="hidden",a.style.overflowX="visible",a.style.overflowY="hidden",c();for(var d in e)/^overflow/.test(d)||(e[d]=[r.CSS.getPropertyValue(a,d),0]);a.style.display="none"}else{c();for(var d in e)e[d]=[0,r.CSS.getPropertyValue(a,d)];a.style.overflow="hidden",a.style.overflowX="visible",a.style.overflowY="hidden"}f&&f.call(a,a)},d.complete=function(a){var c="Down"===b?0:1;h===!0?e.height[c]="auto":e.height[c]+="px";for(var d in e)a.style[d]=e[d][c];g&&g.call(a,a)},r.animate(a,e,d)}}),q.each(["In","Out"],function(a,b){r.Sequences["fade"+b]=function(a,c,d,e){var f=q.extend({},c),g={opacity:"In"===b?1:0};d!==e-1&&(f.complete=f.begin=null),null!==f.display&&(f.display="In"===b?r.CSS.Values.getDisplayType(a):"none"),r.animate(this,g,f)}})}(window.jQuery||window.Zepto||window,window,document);










(function() {
  var Helpers;

  Helpers = (function() {
    function Helpers() {}

    Helpers.prototype.s = 1;

    Helpers.prototype.rand = function(min, max) {
      return Math.floor((Math.random() * ((max + 1) - min)) + min);
    };

    Helpers.prototype.time = function(time) {
      return time * this.s;
    };

    Helpers.prototype.isFF = function() {
      return navigator.userAgent.search("Firefox") > -1;
    };

    Helpers.prototype.isIE9 = function() {
      return navigator.userAgent.search("MSIE 9.0") > -1;
    };

    Helpers.prototype.isSafari = function() {
      var ua;
      ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf('safari') !== -1) {
        if (ua.indexOf('chrome') > -1) {
          return false;
        } else {
          return true;
        }
      }
    };

    Helpers.prototype.isIOS = function() {
      return navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS 7_\d/i);
    };

    Helpers.prototype.elasticOut = function(k) {
      var a, p, s;
      a = 0.1;
      p = 0.4;
      if (k === 0) {
        return 0;
      }
      if (k === 1) {
        return 1;
      }
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p * Math.asin(1 / a) / (2 * Math.PI);
      }
      return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
    };

    return Helpers;

  })();

  window.h = new Helpers;

}).call(this);

(function() {
  var Spriter;

  Spriter = (function() {
    function Spriter(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.init();
    }

    Spriter.prototype.vars = function() {
      this.duration = this.o.duration != null ? this.o.duration || 400 : void 0;
      this.delay = this.o.delay != null ? this.o.delay || 0 : void 0;
      this.easing = this.o.easing != null ? this.o.easing || 'linear' : void 0;
      this.sprites = this.o.sprites || (console.error('no sprites were specified'));
      return this.cnt = this.sprites.length;
    };

    Spriter.prototype.init = function() {
      return $('<div />').velocity({
        p: 0
      }, {
        duration: this.duration,
        delay: this.delay,
        easing: this.easing,
        progress: (function(_this) {
          return function($els, progress) {
            var i, _i, _ref, _ref1, _results;
            _results = [];
            for (i = _i = 0, _ref = _this.cnt; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
              if (progress >= i * (1 / _this.cnt)) {
                if (!_this["lock" + i]) {
                  _this["lock" + i] = true;
                  if ((_ref1 = _this.sprites[i - 1]) != null) {
                    _ref1.style.display = 'none';
                  }
                  _this.sprites[i].style.display = 'block';
                  if (i === _this.cnt - 1) {
                    _results.push((function(i) {
                      return setTimeout(function() {
                        return _this.sprites[i].style.display = 'none';
                      }, 1 / _this.cnt);
                    })(i));
                  } else {
                    _results.push(void 0);
                  }
                } else {
                  _results.push(void 0);
                }
              } else {
                _results.push(void 0);
              }
            }
            return _results;
          };
        })(this)
      });
    };

    return Spriter;

  })();

  window.Spriter = Spriter;

}).call(this);

(function() {
  var Waves;

  Waves = (function() {
    function Waves(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.run();
    }

    Waves.prototype.vars = function() {
      this.delay = this.o.delay || 0;
      this.$wave1 = $('#js-wave1');
      this.$wave1Top = $('#js-wave1-top');
      this.$wave1Top2 = $('#js-wave1-top2');
      this.$entireBits = $('#js-entire-tri-bits');
      this.$creamTriangle1 = $('#js-cream-triangle1').css({
        'transform': 'translate(490px,300px)'
      });
      this.$creamTriangle2 = $('#js-cream-triangle2');
      this.$creamTriangles = $('#js-cream-triangles');
      this.$creamTriangleWrapper = $('#js-cream-triangle2-wrapper').css({
        'transform': 'translate(490px,300px)'
      });
      this.wave1YStart = 1350;
      this.wave1Y = 900;
      this.$wave1Top.velocity({
        translateY: 0
      }, {
        duration: 1
      });
      this.$wave1Top2.velocity({
        rotateX: -90,
        translateY: 20
      }, {
        duration: 1
      });
      this.$wave1.velocity({
        rotateZ: -25,
        translateX: -400,
        translateY: this.wave1YStart
      }, {
        duration: 1
      });
      this.$wave2 = $('#js-wave2');
      this.$wave2Top = $('#js-wave2-top');
      this.$wave2Top2 = $('#js-wave2-top2');
      this.$wave2Top3 = $('#js-wave2-top3');
      this.$wave2Top3Rect = $('#js-wave2-top3-rect');
      this.wave2YStart = 1350;
      this.wave2Y = 400;
      this.$wave2Top.velocity({
        translateY: 0
      }, {
        duration: 1
      });
      this.$wave2Top2.velocity({
        rotateX: -90,
        translateY: 20
      }, {
        duration: 1
      });
      this.$wave2Top3.velocity({
        translateY: -20
      }, {
        duration: 1
      });
      return this.$wave2.velocity({
        rotateZ: -25,
        translateX: -400,
        translateY: this.wave2YStart
      }, {
        duration: 1
      });
    };

    Waves.prototype.run = function() {
      this.wave1(this.delay + h.time(2200));
      return this.wave2(this.delay);
    };

    Waves.prototype.wave1 = function(delay) {
      var topRotateDur1, wave1Time;
      wave1Time = h.time(1200);
      topRotateDur1 = wave1Time / 4;
      this.$wave1.velocity({
        translateY: this.wave1Y
      }, {
        delay: delay,
        duration: wave1Time,
        easing: 'ease-out',
        begin: (function(_this) {
          return function() {
            return _this.$wave1.show();
          };
        })(this)
      }).velocity({
        translateY: this.wave1YStart
      }, {
        duration: wave1Time,
        easing: 'ease-in'
      });
      this.$wave1Top.css({
        'transform-origin': '1000px 50px'
      });
      this.$wave1Top.velocity({
        rotateX: -90
      }, {
        delay: delay + wave1Time,
        duration: topRotateDur1,
        easing: 'ease-out',
        complete: (function(_this) {
          return function() {
            return _this.$wave1Top.hide();
          };
        })(this)
      });
      this.$wave1Top2.css({
        'transform-origin': '1000px 50px'
      });
      return this.$wave1Top2.velocity({
        rotateX: -180,
        translateY: 4
      }, {
        delay: delay + wave1Time + .95 * topRotateDur1,
        easing: 'ease-out',
        duration: topRotateDur1
      });
    };

    Waves.prototype.wave2 = function(delay) {
      var topRotateDur2, wave2Time;
      wave2Time = h.time(2000);
      topRotateDur2 = wave2Time / 4;
      this.$wave2.velocity({
        translateY: this.wave2Y
      }, {
        delay: delay,
        duration: wave2Time,
        easing: 'ease-out',
        begin: (function(_this) {
          return function() {
            return _this.$wave2.show();
          };
        })(this),
        progress: (function(_this) {
          return function($els, progress) {
            if (progress >= 0.375) {
              _this.$wave2Top3.hide();
              return _this.$wave2Top3Rect.hide();
            }
          };
        })(this)
      }).velocity({
        translateY: this.wave2YStart
      }, {
        duration: wave2Time,
        easing: 'ease-in'
      });
      this.$wave2Top.css({
        'transform-origin': '1000px 50px'
      });
      this.$wave2Top.velocity({
        rotateX: -90
      }, {
        delay: delay + wave2Time,
        duration: topRotateDur2
      });
      this.$wave2Top2.css({
        'transform-origin': '1000px 50px'
      });
      this.$wave2Top2.velocity({
        rotateX: -180,
        translateY: 4
      }, {
        delay: delay + wave2Time + .95 * topRotateDur2,
        duration: topRotateDur2
      });
      return this.$creamTriangle2.velocity({
        rotateZ: -12,
        translateY: -80,
        translateX: -90
      }, {
        duration: 2 * topRotateDur2,
        delay: delay + h.time(700),
        easing: 'ease-out'
      }).velocity({
        rotateZ: -12,
        translateY: 800,
        translateX: 800
      }, {
        duration: 1,
        begin: (function(_this) {
          return function() {
            return _this.$entireBits.css({
              'opacity': 0
            });
          };
        })(this)
      });
    };

    return Waves;

  })();

  window.Waves = Waves;

}).call(this);

(function() {
  var Caleydoscope;

  Caleydoscope = (function() {
    function Caleydoscope(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.run();
    }

    Caleydoscope.prototype.vars = function() {
      this.s = 1 * h.time(1);
      this.$velocityText = $('#js-velocity-text');
      this.$blow = $('#js-c-blow');
      this.$glare = $('#js-glare');
      this.$glare.velocity({
        translateX: 230,
        translateY: 280
      }, {
        duration: 1
      });
      this.$caleydoscopePattern = $('#caleydoscope-pattern');
      this.$caleydoscopeInner = $('#js-caleydoscope-inner');
      this.$caleydoscopeImage = $('#js-caleydoscope-image');
      this.$caleydoscopeImage2 = $('#js-caleydoscope-image2');
      this.$caleydoscopeImage3 = $('#js-caleydoscope-image3');
      this.$caleydoscopeImage4 = $('#js-caleydoscope-image4');
      this.$caleydoscopeImage5 = $('#js-caleydoscope-image5');
      this.$caleydoscopeImage6 = $('#js-caleydoscope-image6');
      this.$caleydoscope = $('#js-caleydoscope');
      this.$caleydoscopeWrap = $('#js-caleydoscope-wrapper');
      this.$caleydoscopeEntire = $('#js-entire-caleydoscope');
      this.$burst = $('#js-caleydoscope-burst');
      this.$burst2 = $('#js-caleydoscope-burst2');
      return this.delay = this.o.delay || 0;
    };

    Caleydoscope.prototype.run = function() {
      var $mask1, $paths, caleydDelay1, len;
      $mask1 = $('#js-c-mask1');
      caleydDelay1 = 100 * this.s;
      this.$glare.velocity({
        translateX: 800,
        rotateZ: -10,
        opacity: .75
      }, {
        duration: 550 * this.s,
        easing: 'linear',
        delay: 1700 * this.s,
        complete: (function(_this) {
          return function() {
            return _this.$glare.css({
              'opacity': 0
            });
          };
        })(this)
      });
      len = 21;
      this.$burst.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          return $item.velocity({
            strokeDashoffset: 0
          }, {
            delay: 2300 * _this.s + _this.delay,
            duration: 200 * _this.s
          }).velocity({
            strokeDashoffset: -len
          }, {
            duration: 200 * _this.s
          });
        };
      })(this));
      len = 11;
      this.$burst2.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          return $item.velocity({
            strokeDashoffset: 0
          }, {
            delay: 2500 * _this.s + _this.delay,
            duration: 200 * _this.s
          }).velocity({
            strokeDashoffset: -len
          }, {
            duration: 200 * _this.s
          });
        };
      })(this));
      $mask1.velocity({
        r: 75
      }, {
        delay: 1800 * this.s + caleydDelay1 + this.delay,
        duration: 500 * this.s
      });
      this.$velocityText.children().each((function(_this) {
        return function(i, item) {
          var $item, length, size, x;
          $item = $(item);
          $item.css({
            'transform-origin': 'center center'
          });
          length = $item[0].getTotalLength();
          size = 14;
          x = i < 5 ? size * (5 - i) : -size * i;
          return $item.velocity({
            strokeDasharray: length,
            strokeDashoffset: length,
            rotateY: i % 1 === 0 ? 90 : -90,
            opacity: 0
          }, {
            duration: 1
          }).velocity({
            opacity: 1,
            strokeDashoffset: 0,
            rotateY: 0
          }, {
            duration: 1000 * _this.s + h.rand(0, 100) * _this.s,
            delay: 600 * _this.s + h.rand(0, 500) * _this.s + _this.delay,
            easing: 'linear',
            begin: function() {
              if (i === 0) {
                return _this.$velocityText.show();
              }
            }
          }).velocity({
            rotateZ: h.rand(25, 120),
            translateX: h.rand(-200, 200),
            translateY: h.rand(-200, 200),
            scale: 0
          }, {
            duration: 500 * _this.s + h.rand(0, 100) * _this.s,
            delay: caleydDelay1 + h.rand(0, 200) * _this.s + h.time(1000)
          });
        };
      })(this));
      this.$blow.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          $item.css({
            'transform-origin': "" + (h.rand(0, 300)) + "px " + (h.rand(0, 300)) + "px"
          });
          return $item.velocity({
            r: i === 0 ? 65 : h.rand(10, 50)
          }, {
            duration: 1
          }).velocity({
            translateY: h.rand(-150, 150),
            translateX: h.rand(-150, 150),
            r: 0,
            rotateZ: h.rand(-100, 100)
          }, {
            duration: 800 * _this.s,
            delay: 2450 * _this.s + caleydDelay1 + h.rand(0, 600) * _this.s,
            begin: function() {
              i === 0 && _this.$blow.show();
              _this.$blow.css({
                'opacity': 1
              });
              return $mask1.css({
                'opacity': 0
              });
            }
          });
        };
      })(this));
      $paths = this.$caleydoscope.find('path');
      $paths.each((function(_this) {
        return function(i, item) {
          var $path, length, rotate, trAttr, tranform, translate, x, y;
          $path = $(item);
          length = $path[0].getTotalLength();
          if (!h.isFF()) {
            $path.css({
              'transform-origin': 'center center'
            });
          }
          trAttr = $path.attr('transform');
          rotate = parseInt(trAttr != null ? trAttr.match(/rotate\((.+?)\)/)[1] : void 0, 10);
          translate = trAttr != null ? trAttr.match(/translate\((.+?)\)/) : void 0;
          tranform = translate != null ? translate[1].split(',') : void 0;
          if (tranform) {
            x = parseInt(tranform[0], 10);
            y = parseInt(tranform[1], 10);
          }
          if (!h.isFF()) {
            $path.css({
              'transform-origin': 'center center'
            }).velocity({
              rotateZ: rotate
            }, {
              duration: 1
            });
          }
          return $path.velocity({
            opacity: 1,
            strokeWidth: 0
          }, {
            delay: h.rand(1, 150) * _this.s + i * 150 * _this.s + _this.delay,
            duration: 900 * _this.s
          }).velocity({
            rotateZ: h.rand(-500, 500),
            translateX: h.rand(-800, 800),
            translateY: h.rand(-800, 800),
            scale: 0
          }, {
            delay: 2000 * _this.s - i * 150 * _this.s,
            duration: 900 * _this.s
          });
        };
      })(this));
      this.$caleydoscope.css({
        'transform-origin': '640px 450px'
      });
      this.$caleydoscope.velocity({
        p: 360
      }, {
        duration: 6000 * this.s,
        delay: this.delay,
        easing: 'linear',
        begin: (function(_this) {
          return function() {
            return _this.$caleydoscopeEntire.show();
          };
        })(this)
      });
      this.$caleydoscopeImage2.css({
        'transform-origin': 'center center'
      });
      return this.$caleydoscopeImage2.velocity({
        translateX: 120,
        translateY: 120
      }, {
        loop: 0,
        duration: 4500,
        easing: 'ease'
      });
    };

    return Caleydoscope;

  })();

  window.Caleydoscope = Caleydoscope;

}).call(this);

(function() {
  var Triangles;

  Triangles = (function() {
    function Triangles(o) {
      this.o = o != null ? o : {};
      this.vars();
      $('<div />').velocity({
        p: 0
      }, {
        duration: this.delay,
        complete: (function(_this) {
          return function() {
            _this.$triangles.show();
            return _this.run();
          };
        })(this)
      });
    }

    Triangles.prototype.vars = function() {
      this.delay = this.o.delay || 0;
      this.s = 1 * h.time(1);
      this.$pattern = $('#flowers-cream-pattern');
      this.$dust = $('#js-dust');
      this.$svg = $('#js-svg');
      this.$owlsPattern2 = $('#js-owls-image2');
      this.$owlsImage = $('#js-owls-image');
      this.$flowersCream = $('#js-flowers-cream');
      this.$sliceLine = $('#js-slice-line');
      this.$sliceLine.css({
        'transform-origin': '640px 450px'
      });
      this.$sliceLine.velocity({
        rotateZ: 120
      }, {
        duration: 1
      });
      this.$divSparks = $('#js-div-sparks');
      this.$triangles = $('#js-triangles');
      this.$creamTriangle1 = $('#js-cream-triangle1').css({
        'transform': 'translate(490px,300px)'
      });
      this.$creamTriangle2 = $('#js-cream-triangle2');
      this.$creamTriangles = $('#js-cream-triangles');
      this.blowDelay = 250;
      this.$s = $('#js-svg-s');
      this.$v = $('#js-svg-v');
      this.$g = $('#js-svg-g');
      this.$sW = $('#js-svg-s-wrapper');
      this.$vW = $('#js-svg-v-wrapper');
      this.$gW = $('#js-svg-g-wrapper');
      this.$svgTextW = $('#js-svg-text-wrapper');
      this.$gradientWrapper = $('#js-gradient-wrapper');
      return this.$creamTriangleWrapper = $('#js-cream-triangle2-wrapper').css({
        'transform': 'translate(490px,300px)'
      });
    };

    Triangles.prototype.run = function() {
      var translateSize;
      this.start = 0 * this.s;
      this.dur = this.start + 300 * this.s;
      this.$flowersCream.velocity({
        y: 300
      }, {
        duration: this.dur,
        delay: this.start,
        easing: 'ease-in'
      });
      this.start = this.start + 275 * this.s;
      this.dur = 800 * this.s;
      new Spriter({
        sprites: this.$dust.children(),
        duration: this.dur,
        delay: this.start
      });
      this.start = this.start + this.dur - 600 * this.s;
      this.dur = 400 * this.s;
      this.$sliceLine.velocity({
        rotateZ: 315,
        scale: 1,
        opacity: 100,
        width: 600
      }, {
        delay: this.start,
        duration: this.dur
      });
      this.start = this.start + this.dur + 200 * this.s;
      this.dur = 30 * this.s;
      translateSize = 20;
      this.$creamTriangles.velocity({
        translateY: 2 * translateSize,
        translateX: 2 * translateSize
      }, {
        duration: this.dur,
        delay: this.start,
        begin: (function(_this) {
          return function() {
            _this.$sliceLine.hide();
            _this.$creamTriangles.show();
            return _this.$flowersCream.hide();
          };
        })(this)
      }).velocity({
        translateY: 0,
        translateX: 0
      }, {
        duration: 10 * this.dur,
        easing: 'easeOutElastic'
      });
      this.$creamTriangle1.css({
        'transform-origin': '50px'
      });
      this.$creamTriangle1.velocity({
        translateX: 490,
        translateY: 300
      }, {
        duration: 1
      }).velocity({
        translateX: 490 - translateSize,
        translateY: 300 + translateSize / 2
      }, {
        duration: 6 * this.dur,
        delay: this.start - 400 * this.s,
        easing: 'easeOutElastic'
      }).velocity({
        translateX: 490 - translateSize / 2 - 160,
        translateY: 300 - translateSize / 2 + 160
      }, {
        duration: 20 * this.dur,
        delay: 200 * this.s,
        easing: 'linear'
      }).velocity({
        translateX: 490 - translateSize / 2 - 150,
        translateY: 300 - translateSize / 2 + 650,
        rotateZ: -120,
        opacity: h.isFF() ? 0 : 1,
        transformOrigin: '100px'
      }, {
        duration: 36 * this.dur,
        easing: 'linear'
      });
      this.$divSparks.velocity({
        translateX: 235 - translateSize / 8,
        translateY: 50 + translateSize / 8
      }, {
        duration: 3 * this.dur,
        delay: this.start,
        easing: 'easeOutElastic',
        begin: (function(_this) {
          return function() {
            return _this.$divSparks.show();
          };
        })(this)
      });
      this.start = this.start - 50 * this.s;
      this.dur = 100 * this.s;
      this.$divSparks.children().each((function(_this) {
        return function(i, item) {
          var $item, length;
          $item = $(item);
          length = $item[0].getTotalLength();
          return $item.velocity({
            'strokeDasharray': length
          }, {
            duration: 1
          }).velocity({
            'strokeDashoffset': i === 3 ? -length : length
          }, {
            delay: _this.start + h.rand(1, 50) * _this.s + i * 20 * _this.s,
            duration: _this.dur,
            begin: function() {
              return _this.$divSparks.show();
            },
            complete: function() {
              return $item.hide();
            }
          });
        };
      })(this));
      return this.blow();
    };

    Triangles.prototype.blow = function() {
      this.$gW.css({
        'transform-origin': '640px 450px'
      });
      this.$gW.velocity({
        translateX: 1800,
        translateY: 1000,
        rotateZ: h.rand(500, 1000)
      }, {
        duration: 2000 * this.s,
        delay: this.blowDelay * this.s,
        easing: 'ease-out'
      });
      this.$vW.css({
        'transform-origin': '400px 400px'
      });
      this.$vW.velocity({
        translateY: 2000,
        translateX: -60,
        rotateZ: h.rand(500, 1000)
      }, {
        duration: 1200 * this.s,
        delay: this.blowDelay * this.s,
        easing: 'ease-out'
      });
      this.$svgTextW.css({
        'transform-origin': '650px 650px'
      });
      this.$svgTextW.velocity({
        translateY: 2000,
        translateX: -20,
        rotateZ: h.rand(500, 1000)
      }, {
        duration: 800 * this.s,
        delay: (this.blowDelay + 50) * this.s,
        easing: 'ease-out',
        complete: (function(_this) {
          return function() {
            return _this.$svg.hide();
          };
        })(this)
      });
      this.$gradientWrapper.css({
        'transform-origin': '640px 700px'
      });
      return this.$gradientWrapper.velocity({
        translateX: -1600,
        rotateZ: 100
      }, {
        duration: 1200 * this.s,
        delay: this.blowDelay * this.s,
        easing: 'ease-out',
        begin: (function(_this) {
          return function() {
            _this.$s.velocity('stop');
            _this.$v.velocity('stop');
            return _this.$g.velocity('stop');
          };
        })(this)
      });
    };

    return Triangles;

  })();

  window.Triangles = Triangles;

}).call(this);

(function() {
  var Svg;

  Svg = (function() {
    function Svg(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.run();
    }

    Svg.prototype.vars = function() {
      this.delay = this.o.delay || 0;
      this.s = 1 * h.time(1);
      this.$div = $('<div />');
      this.$circles = $('#js-svg-circles');
      this.$sW = $('#js-svg-s-wrapper');
      this.$s = $('#js-svg-s');
      this.$g = $('#js-svg-g');
      this.$v = $('#js-svg-v');
      this.$text = $('#js-svg-text');
      this.$svgStroke = $('.svg-stroke');
      this.$gradient = $('#js-gradient');
      this.$svg = $('#js-svg');
      this.$blow = $('#js-svg-blow');
      this.$meets = $('#js-meets');
      this.$sPattern = $('#rose-pattern');
      this.maxCnt = 1;
      this.cnt = 0;
      return this.delayStep = 200;
    };

    Svg.prototype.run = function() {
      this.hider().then((function(_this) {
        return function() {
          return _this.$meets.hide();
        };
      })(this));
      return this.$div.velocity({
        p: 1
      }, {
        delay: this.delay - h.time(600),
        complete: (function(_this) {
          return function() {
            _this.showS();
            _this.showV();
            _this.runG();
            return _this.confetti();
          };
        })(this)
      });
    };

    Svg.prototype.confetti = function() {
      var isFF;
      isFF = h.isFF();
      return this.$blow.children().each((function(_this) {
        return function(i, item) {
          var $item, blowX, coef, x, y;
          $item = $(item);
          if (isFF && i > 7) {
            $item.hide();
            return;
          }
          x = h.rand(-400, 400);
          y = h.rand(-400, 400);
          blowX = x < 0 ? x - 1000 : x + 1000;
          coef = 1 - (2000 - Math.abs(blowX)) / 1000;
          return $item.velocity({
            translateX: x,
            translateY: y,
            rotateZ: h.rand(-360, 360),
            rotateX: h.rand(-360, 360),
            rotateY: h.rand(-360, 360)
          }, {
            duration: 1,
            easing: 'linear'
          }).velocity({
            translateY: y + 300,
            translateX: x < 0 ? x - 100 : x + 100,
            rotateZ: h.rand(-1200, 1200),
            rotateX: h.rand(-1200, 1200),
            rotateY: h.rand(-1200, 1200)
          }, {
            duration: 3000 * _this.s,
            delay: 400 * _this.s,
            easing: 'linear',
            begin: function() {
              if (i === 0) {
                return _this.$blow.show();
              }
            }
          }).velocity({
            translateY: y + 1000,
            translateX: blowX,
            rotateZ: h.rand(-1200, 1200),
            rotateX: h.rand(-1200, 1200),
            rotateY: h.rand(-1200, 1200),
            scale: 1 + coef
          }, {
            duration: 600 * _this.s,
            delay: coef * 200 * _this.s,
            easing: 'linear'
          });
        };
      })(this));
    };

    Svg.prototype.showS = function() {
      return this.$sW.velocity({
        opacity: 1
      }, {
        duration: h.time(1200),
        complete: (function(_this) {
          return function() {
            return _this.runS();
          };
        })(this)
      });
    };

    Svg.prototype.runS = function(isSecond) {
      if (!isSecond) {
        this.$s.velocity({
          'translateY': 194,
          'translateX': 52
        }, {
          duration: 1
        });
      }
      return this.$s.velocity({
        'translateY': isSecond ? -194 : 0,
        'translateX': isSecond ? -52 : 0
      }, {
        duration: h.time(1000),
        delay: this.delayStep,
        easing: 'easeOutBounce',
        complete: (function(_this) {
          return function() {
            if (_this.cnt++ === _this.maxCnt) {
              _this.destroy();
            }
            if (_this.isDestroy) {
              return;
            }
            return _this.runS(true);
          };
        })(this)
      });
    };

    Svg.prototype.showV = function() {
      this.preV();
      return this.runV();
    };

    Svg.prototype.runV = function() {
      return this.$v.velocity({
        p: 1
      }, {
        delay: h.time(2 * this.delayStep),
        progress: (function(_this) {
          return function($els, proc) {
            return _this.$v.attr('d', "M" + (_this.x1 + (_this.deltaX1 * proc)) + "," + _this.arr[1] + "\n L" + _this.arr[2] + "," + _this.arr[3] + "\n L" + (_this.x2 - (_this.deltaX2 * proc)) + "," + _this.arr[5] + " Z");
          };
        })(this)
      }).velocity({
        p: 0,
        opacity: 1
      }, {
        duration: h.time(700),
        progress: (function(_this) {
          return function($els, proc) {
            proc = h.elasticOut(proc);
            return _this.$v.attr('d', "M" + ((_this.x1 + _this.deltaX1) - (_this.deltaX1 * proc)) + "," + _this.arr[1] + "\n L" + _this.arr[2] + "," + _this.arr[3] + "\n L" + ((_this.x2 - _this.deltaX2) + (_this.deltaX2 * proc)) + "," + _this.arr[5] + " Z");
          };
        })(this),
        complete: (function(_this) {
          return function() {
            if (_this.isDestroy) {
              return;
            }
            return _this.runV();
          };
        })(this)
      });
    };

    Svg.prototype.preV = function() {
      var i, point, points, _i, _len;
      this.$v.css({
        'transform-origin': 'center center'
      });
      this.arr = [];
      points = this.$v.attr('d').split(/\,|M|L|\s/);
      for (i = _i = 0, _len = points.length; _i < _len; i = ++_i) {
        point = points[i];
        if (point && point !== 'Z') {
          this.arr.push(parseInt(point, 10));
        }
      }
      this.x1 = this.arr[0];
      this.x2 = this.arr[4];
      this.deltaX1 = 80;
      return this.deltaX2 = 80;
    };

    Svg.prototype.runG = function() {
      this.$g.css({
        'transform-origin': 'center center'
      });
      return this.$g.velocity({
        scaleX: 1.25,
        scaleY: 1.25
      }, {
        delay: h.time(3 * this.delayStep),
        duration: h.time(400),
        easing: 'easeOutBounce'
      }).velocity({
        scaleX: 1,
        scaleY: 1,
        rotateZ: 0,
        opacity: 1
      }, {
        duration: h.time(400),
        complete: (function(_this) {
          return function() {
            if (_this.isDestroy) {
              return;
            }
            _this.runG();
            return _this.$text.velocity({
              opacity: 1
            });
          };
        })(this)
      });
    };

    Svg.prototype.hider = function() {
      var dfr;
      dfr = new $.Deferred;
      this.$circles.children().each((function(_this) {
        return function(i, item) {
          var $item, data, x, y;
          $item = $(item);
          data = $item.data();
          x = data.x;
          y = data.y;
          return $item.velocity({
            translateX: x,
            translateY: y
          }, {
            duration: 1,
            delay: _this.delay,
            begin: function() {
              !_this.isCircles && _this.$circles.show();
              _this.isCircles = true;
              return _this.$svg.show();
            }
          }).velocity({
            r: h.rand(150, 300),
            rotateZ: h.rand(20, 70),
            translateX: x,
            translateY: y
          }, {
            begin: function() {
              return _this.$gradient.show();
            },
            complete: function() {
              return dfr.resolve();
            }
          });
        };
      })(this));
      return dfr.promise();
    };

    Svg.prototype.destroy = function() {
      return this.isDestroy = true;
    };

    return Svg;

  })();

  window.Svg = Svg;

}).call(this);

(function() {
  var Meets;

  Meets = (function() {
    function Meets(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.run();
    }

    Meets.prototype.vars = function() {
      this.delay = this.o.delay || 0;
      this.s = 1 * h.time(1);
      this.$leftHand = $('#js-left-hand');
      this.$leftHand.velocity({
        translateX: 500
      }, {
        duration: 1
      });
      this.$rightHand = $('#js-right-hand');
      this.$rightHand.velocity({
        translateX: 500
      }, {
        duration: 1
      });
      this.$rightShirt = $('#js-right-shirt');
      this.rightShirtX1 = parseInt(this.$rightShirt.attr('x'), 10);
      this.rightShirtX2 = parseInt(this.$rightShirt.attr('x2'), 10);
      this.$shirtWalls = $('.js-shirt-wall');
      this.$firework = $('#js-firework');
      this.$leftShirt = $('#js-left-shirt');
      this.leftShirtX1 = parseInt(this.$leftShirt.attr('x'), 10);
      this.leftShirtX2 = parseInt(this.$leftShirt.attr('x2'), 10);
      this.shirtOffsetX = 0;
      this.$meets = $('#js-meets');
      this.$blow = $('#js-meets-blow');
      this.$sleeves = $('.js-sleeve');
      this.$shirts = $('.js-shirt');
      this.$dogsPattern = $('#space-dogs-pattern');
      this.$circles = $('#js-meets-circles');
      this.$rightButton = $('#js-right-button');
      this.$leftButton = $('#js-left-button');
      this.$buttons = $('#js-right-button, #js-left-button');
      this.$rightFist = $('#js-right-fist');
      this.$leftFist = $('#js-left-fist');
      this.$circle = $('#js-circle');
      this.$burst = $('#js-meets-burst');
      this.$entireColeydoscope = $('#js-entire-caleydoscope');
      this.$rightFistWrapper = $('#js-right-fist-wrapper');
      this.$leftFistWrapper = $('#js-left-fist-wrapper');
      return this.bumpDelay = h.time(600);
    };

    Meets.prototype.run = function() {
      var $childs, bumpDuration, deltaX, deltaX2, ffLen, fistAngle, fistDelay, fistDuration, fistDuration2, fistX;
      bumpDuration = h.time(400);
      this.$leftHand.velocity({
        translateX: 0
      }, {
        duration: bumpDuration,
        easing: 'ease-in',
        delay: this.delay + this.bumpDelay,
        begin: (function(_this) {
          return function() {
            _this.$leftHand.css({
              'opacity': 1
            });
            return _this.$rightHand.css({
              'opacity': 1
            });
          };
        })(this)
      });
      this.$rightHand.velocity({
        translateX: 0
      }, {
        duration: bumpDuration,
        delay: this.delay + this.bumpDelay,
        easing: 'ease-in'
      });
      this.isShirtWalls = false;
      deltaX2 = this.rightShirtX2 - this.rightShirtX1;
      this.rightShirt = this.$rightShirt[0];
      this.$rightShirt.velocity({
        p: 0
      }, {
        duration: bumpDuration,
        delay: this.delay + this.bumpDelay,
        easing: 'ease-in',
        progress: (function(_this) {
          return function($els, proc) {
            _this.rightShirt.setAttribute('x', _this.rightShirtX1 + deltaX2 * proc);
            !_this.isShirtWalls && _this.$shirtWalls.show();
            return _this.isShirtWalls = true;
          };
        })(this)
      });
      this.$circles.children().each((function(_this) {
        return function(i, item) {
          var $item, x, y;
          $item = $(item);
          x = parseFloat($item.attr('data-x'));
          y = parseFloat($item.attr('data-y'));
          $item.velocity({
            translateX: x,
            translateY: y
          }, {
            duration: 1,
            delay: _this.delay
          });
          return $item.velocity({
            r: 0,
            translateX: x + h.rand(-50, 50),
            translateY: y + h.rand(-50, 50),
            rotateZ: h.rand(-360, 360)
          }, {
            duration: h.time(1000)
          });
        };
      })(this));
      deltaX = this.leftShirtX1 - this.leftShirtX2;
      this.leftShirt = this.$leftShirt[0];
      this.$leftShirt.velocity({
        p: 0
      }, {
        duration: bumpDuration,
        easing: 'ease-in',
        delay: this.delay + this.bumpDelay,
        progress: (function(_this) {
          return function($els, proc) {
            return _this.leftShirt.setAttribute('x', _this.leftShirtX1 - deltaX * proc + _this.shirtOffsetX);
          };
        })(this),
        complete: (function(_this) {
          return function() {
            _this.$dogsPattern.velocity({
              x: -150,
              y: -150
            }, {
              duration: h.time(5000),
              easing: 'linear'
            });
            _this.$rightButton.show();
            return _this.$leftButton.show();
          };
        })(this)
      });
      fistX = 40;
      fistAngle = -10;
      fistDuration = h.time(700);
      fistDuration2 = h.time(700);
      fistDelay = fistDuration / 2;
      this.$rightFist.css({
        'transform-origin': 'center center'
      });
      this.$rightFist.velocity({
        rotateZ: fistAngle
      }, {
        duration: 1
      }).velocity({
        rotateZ: 0
      }, {
        duration: fistDuration,
        delay: this.delay + fistDelay + this.bumpDelay,
        easing: 'easeOutElastic'
      });
      this.$leftFist.css({
        'transform-origin': 'center center'
      });
      this.$leftFist.velocity({
        rotateZ: fistAngle
      }, {
        duration: 1
      }).velocity({
        rotateZ: 0
      }, {
        duration: fistDuration,
        delay: this.delay + fistDelay + this.bumpDelay,
        easing: 'easeOutElastic'
      });
      this.$rightFistWrapper.velocity({
        translateX: fistX
      }, {
        duration: 1,
        delay: this.delay + fistDelay + this.bumpDelay
      }).velocity({
        translateX: 0
      }, {
        duration: fistDuration2,
        easing: 'easeOutElastic'
      });
      this.$leftFistWrapper.velocity({
        translateX: -fistX
      }, {
        duration: 1,
        delay: this.delay + fistDelay + this.bumpDelay
      }).velocity({
        translateX: 0
      }, {
        duration: fistDuration2,
        easing: 'easeOutElastic',
        begin: (function(_this) {
          return function() {
            return _this.$entireColeydoscope.hide();
          };
        })(this)
      });
      this.$burst.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          return $item.velocity({
            strokeDashoffset: 0
          }, {
            delay: _this.delay + h.time(500) + _this.bumpDelay,
            duration: h.time(150)
          }).velocity({
            strokeDashoffset: -36
          }, {
            duration: h.time(150)
          });
        };
      })(this));
      this.$smoke = $('#js-smoke');
      new Spriter({
        sprites: this.$smoke.children(),
        duration: 400 * this.s,
        delay: this.delay + 400 * this.s + this.bumpDelay
      });
      this.$burst.css({
        'transform-origin': '640px 450px '
      });
      this.$burst.velocity({
        rotateZ: 20
      }, {
        delay: this.delay + h.time(400) + this.bumpDelay,
        duration: 600 * this.s
      });
      this.$blow.css({
        'transform-origin': '640px 450px '
      });
      this.$blow.velocity({
        rotateZ: 30
      }, {
        delay: this.delay + h.time(500) + this.bumpDelay,
        duration: 600 * this.s
      });
      $childs = this.$firework.children();
      ffLen = $childs.length;
      $childs.css({
        'transform-origin': '50% 50%'
      });
      $childs.velocity({
        scale: .75
      }, {
        duration: 1
      });
      $childs.each((function(_this) {
        return function(i, child) {
          var $line, currLen, len;
          $line = $(child);
          len = $line[0].getTotalLength();
          currLen = i === ffLen - 1 ? len : -len;
          $line.velocity({
            strokeDashoffset: currLen,
            strokeDasharray: len
          }, {
            duration: 1
          });
          $line.velocity({
            strokeDashoffset: 0,
            strokeWidth: 4
          }, {
            duration: 150 * _this.s,
            delay: _this.delay + h.time(400) + _this.bumpDelay + h.rand(0, 300) * _this.s,
            begin: function() {
              return i === 0 && _this.$firework.show();
            }
          });
          return $line.velocity({
            strokeDashoffset: i === ffLen - 1 ? -len : len,
            strokeWidth: 0
          }, {
            duration: 150 * _this.s
          });
        };
      })(this));
      return this.$blow.children().each((function(_this) {
        return function(i, item) {
          var $item, data, x2, y2;
          $item = $(item);
          data = $item.data();
          x2 = data.x;
          y2 = data.y;
          return $item.velocity({
            r: 0,
            translateX: x2,
            translateY: y2
          }, {
            delay: _this.delay + h.time(500) + _this.bumpDelay,
            duration: 600 * _this.s,
            begin: function() {
              if (i === 0) {
                return _this.$blow.show();
              }
            }
          });
        };
      })(this));
    };

    return Meets;

  })();

  window.Meets = Meets;

}).call(this);

(function() {
  var Logo;

  Logo = (function() {
    function Logo(o) {
      this.o = o != null ? o : {};
      this.vars();
      $('<div />').velocity({
        p: 1
      }, {
        duration: this.delay,
        complete: (function(_this) {
          return function() {
            _this.$logo.show();
            return _this.run();
          };
        })(this)
      });
    }

    Logo.prototype.vars = function() {
      var i, num, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
      this.delay = this.o.delay || 0;
      this.s = 1 * h.time(1);
      this.$logo = $('#js-logo');
      this.$logoV = $('#js-logo-v');
      this.$logoV.velocity({
        translateX: 21,
        translateY: 21
      });
      this.$logoLines = $('#js-logo-lines');
      this.$text = $('#js-logo-text');
      this.$hand = $('#js-logo-hand');
      if (h.isSafari()) {
        this.$hand.css({
          'display': 'none',
          'opacity': 1
        });
      }
      this.$handCircle = $('#js-hand-circle');
      this.$shadow = $('#js-logo-shadow');
      this.$shadow.css({
        'transform-origin': '180px'
      });
      this.$shadow.velocity({
        scale: .75
      });
      this.prepareLines();
      _ref = [1, 2, 3];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        num = _ref[i];
        this["$circle" + num] = $("#js-logo-circle-" + num);
      }
      _ref1 = [1, 2, 3];
      for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
        num = _ref1[i];
        this["$line" + num] = $("#js-line-" + num);
      }
      _ref2 = [1, 2, 3];
      _results = [];
      for (i = _k = 0, _len2 = _ref2.length; _k < _len2; i = ++_k) {
        num = _ref2[i];
        _results.push(this["$shadow" + num] = $("#js-shadow-" + num));
      }
      return _results;
    };

    Logo.prototype.run = function() {
      var circlesDelay, entireDur, handDelay, lineDur1, lineDur2, lineDur3, textDuration;
      lineDur1 = 300;
      lineDur2 = 250;
      lineDur3 = 200;
      entireDur = lineDur1 + lineDur2 + lineDur3;
      this.$logoLines.velocity({
        opacity: 1
      }, {
        duration: entireDur * this.s,
        easing: 'linear'
      });
      this.$line1.velocity({
        strokeDashoffset: 0
      }, {
        duration: lineDur1 * this.s,
        easing: 'linear',
        progress: (function(_this) {
          return function($els, proc) {
            return proc > .65 && _this.$shadow1.velocity({
              opacity: .1
            });
          };
        })(this)
      });
      this.$line2.velocity({
        strokeDashoffset: 0
      }, {
        duration: lineDur2 * this.s,
        easing: 'linear',
        delay: 275 * this.s,
        progress: (function(_this) {
          return function($els, proc) {
            if (proc > .65) {
              _this.$shadow2.velocity({
                opacity: .1
              });
              return _this.$shadow.velocity({
                opacity: .2
              });
            }
          };
        })(this)
      });
      this.$line3.velocity({
        strokeDashoffset: 0
      }, {
        duration: lineDur3 * this.s,
        easing: 'linear',
        delay: 2 * 245 * this.s,
        begin: (function(_this) {
          return function() {
            return _this.$shadow3.velocity({
              opacity: .1
            });
          };
        })(this)
      });
      circlesDelay = entireDur - 300;
      textDuration = 900;
      this.$text.velocity({
        opacity: 1
      }, {
        duration: textDuration * this.s,
        delay: circlesDelay * this.s
      });
      this.$circle1.velocity({
        r: 180
      }, {
        duration: textDuration * this.s,
        delay: circlesDelay * this.s
      });
      handDelay = entireDur;
      return this.$hand.velocity({
        translateX: 280,
        translateY: 291
      }, {
        duration: 1,
        begin: (function(_this) {
          return function() {
            if (h.isSafari()) {
              return _this.$hand.css({
                'display': 'inline'
              });
            }
          };
        })(this)
      }).velocity({
        translateX: 190,
        translateY: 241,
        opacity: 1
      }, {
        duration: 500 * this.s,
        delay: (entireDur + 100) * this.s,
        complete: (function(_this) {
          return function() {
            _this.$hand.velocity({
              opacity: 0
            }, {
              duration: 400 * _this.s
            });
            return _this.$handCircle.velocity({
              r: 25,
              strokeWidth: 0,
              opacity: 100
            }, {
              duration: 500 * _this.s,
              complete: function() {
                return setTimeout(function() {
                  _this.$logoV.velocity({
                    translateY: 31
                  }, {
                    loop: 40,
                    duration: 1500 * _this.s
                  });
                  return _this.$shadow.velocity({
                    opacity: .35,
                    scale: 1
                  }, {
                    loop: 40,
                    duration: 1500 * _this.s
                  });
                }, 2000 * _this.s);
              }
            });
          };
        })(this)
      });
    };

    Logo.prototype.prepareLines = function() {
      return this.$logoLines.children().each(function(i, line) {
        var $line, isOffset, length, offset;
        $line = $(line);
        length = line.getTotalLength();
        isOffset = h.isFF() || h.isIE9() || h.isSafari();
        offset = isOffset ? parseInt($line.attr('stroke-width'), 10) : 0;
        return $line.css({
          'stroke-dasharray': "" + (length + offset) + "px",
          'stroke-dashoffset': "" + (-length - (offset / 2)) + "px"
        });
      });
    };

    return Logo;

  })();

  window.Logo = Logo;

}).call(this);

(function() {
  var Fish;

  Fish = (function() {
    function Fish(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.run();
    }

    Fish.prototype.vars = function() {
      this.delay = this.o.delay || 0;
      this.s = 1.25 * h.time(1);
      this.$bottomSplash1 = $('#js-bottom-splash1');
      this.$bottomSplash2 = $('#js-bottom-splash2');
      this.$topSplash1 = $('#js-top-splash1');
      this.$topSplash2 = $('#js-top-splash2');
      this.$scene = $('#js-fish-scene');
      this.$fish = $('#js-fish');
      this.$fishEntire = $('#js-fish-scene');
      this.$fish.css({
        'transform-origin': 'center center'
      });
      this.$fish.velocity({
        translateX: 35,
        translateY: 390
      }, {
        duration: 1
      });
      this.$shadow = $('#js-fish-shadow');
      this.$shadow.css({
        'transform-origin': 'center center'
      });
      this.$shadow.velocity({
        translateX: 45,
        translateY: 390
      }, {
        duration: 1
      });
      return this.$fishW = $('#js-fish-wrapper');
    };

    Fish.prototype.run = function() {
      var delayForSplash;
      delayForSplash = 100;
      this.splash();
      this.$fish.velocity({
        translateX: 30,
        translateY: -150
      }, {
        duration: 1600 * this.s,
        easing: 'ease-in-out',
        delay: 100 * this.s + delayForSplash * this.s + this.delay,
        begin: (function(_this) {
          return function() {
            return _this.$fishEntire.show();
          };
        })(this)
      });
      return this.$shadow.velocity({
        translateX: 40,
        translateY: 200,
        scale: .65,
        opacity: .05
      }, {
        duration: 800 * this.s,
        easing: 'ease-in',
        delay: 100 * this.s + delayForSplash * this.s + this.delay
      }).velocity({
        translateX: 30,
        translateY: -150,
        scale: 1,
        opacity: .2
      }, {
        duration: 600 * this.s,
        easing: 'ease-out'
      });
    };

    Fish.prototype.splash = function() {
      var bubbleRadius;
      this.$splash1 = $('#js-clip-splash1');
      this.$splash1Top = $('#js-clip-top-splash1');
      this.$splash1.css({
        'transform-origin': '78px 392px'
      });
      this.$splash1.velocity({
        scale: 0
      }, {
        duration: 1
      }).velocity({
        scale: 1
      }, {
        duration: 400 * this.s,
        delay: this.delay + 200 * this.s,
        easing: 'linear'
      }).velocity({
        scale: 0
      }, {
        duration: 500 * this.s,
        easing: 'linear'
      });
      this.$splash1Top.css({
        'transform-origin': '478px 994px'
      });
      this.$splash1Top.velocity({
        scale: 0
      }, {
        duration: 1
      }).velocity({
        scale: 1
      }, {
        duration: 400 * this.s,
        delay: this.delay + 200 * this.s,
        easing: 'linear'
      }).velocity({
        scale: 0,
        translateY: -20
      }, {
        duration: 500 * this.s,
        easing: 'linear'
      });
      this.$splash2 = $('#js-clip-splash2');
      this.$splash2Top = $('#js-clip-top-splash2');
      this.$splash2.css({
        'transform-origin': '80px 97px'
      });
      this.$splash2.velocity({
        scale: 0
      }, {
        duration: 1
      }).velocity({
        scale: 1
      }, {
        duration: 200 * this.s,
        delay: this.delay + 950 * this.s,
        easing: 'linear'
      }).velocity({
        scale: 0
      }, {
        duration: 300 * this.s,
        easing: 'linear'
      });
      this.$splash2Top.css({
        'transform-origin': '480px 740px'
      });
      this.$splash2Top.velocity({
        scale: 0
      }, {
        duration: 1
      }).velocity({
        scale: 1,
        rotateZ: 10
      }, {
        duration: 125 * this.s,
        delay: this.delay + 930 * this.s,
        easing: 'linear'
      }).velocity({
        scale: 0
      }, {
        duration: 400 * this.s,
        easing: 'linear'
      });
      this.$topSplash = $('#js-top-splash');
      bubbleRadius = 20;
      this.$topSplash.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          $item.velocity({
            translateX: h.rand(-bubbleRadius, bubbleRadius),
            translateY: h.rand(0, bubbleRadius),
            r: 10
          }, {
            duration: 500 * _this.s,
            delay: _this.delay + 700 * _this.s
          });
          return $item.velocity({
            translateX: h.rand(-5 * bubbleRadius, 5 * bubbleRadius),
            translateY: h.rand(-5 * bubbleRadius, 5 * bubbleRadius),
            r: 0
          }, {
            duration: 500 * _this.s,
            delay: h.rand(50, 100) * _this.s
          });
        };
      })(this));
      this.$bottomSplash = $('#js-bottom-splash');
      bubbleRadius = 20;
      return this.$bottomSplash.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          $item.velocity({
            translateX: h.rand(-bubbleRadius, bubbleRadius),
            translateY: h.rand(0, bubbleRadius),
            r: 10
          }, {
            duration: 300 * _this.s,
            delay: _this.delay
          });
          return $item.velocity({
            translateX: h.rand(-5 * bubbleRadius, 5 * bubbleRadius),
            translateY: h.rand(-5 * bubbleRadius, 5 * bubbleRadius),
            r: 0
          }, {
            duration: 800 * _this.s,
            delay: h.rand(50, 100) * _this.s
          });
        };
      })(this));
    };

    return Fish;

  })();

  window.Fish = Fish;

}).call(this);

(function() {
  var Mushroom;

  Mushroom = (function() {
    function Mushroom(o) {
      this.o = o != null ? o : {};
      this.vars();
      $('<div />').velocity({
        p: 1
      }, {
        duration: this.delay,
        complete: (function(_this) {
          return function() {
            return _this.run();
          };
        })(this)
      });
    }

    Mushroom.prototype.vars = function() {
      this.delay = this.o.delay || 0;
      this.s = 1 * h.time(1);
      this.$m = $('#js-mushroom');
      this.$mEntire = $('#js-entire-mushroom');
      this.$text1 = $('#js-mush-text1');
      return this.$text2 = $('#js-mush-text2');
    };

    Mushroom.prototype.run = function() {
      var $childs, len;
      $childs = this.$m.children();
      len = $childs.length;
      $childs.each((function(_this) {
        return function(i, child) {
          var $brick;
          $brick = $(child);
          return $brick.velocity({
            translateY: h.rand(-0, -200),
            opacity: 0
          }, {
            duration: {
              duration: 1
            },
            easing: 'linear'
          }).velocity({
            translateX: 0,
            translateY: 0,
            opacity: 1
          }, {
            duration: 800 * _this.s,
            delay: (len - i - 1) * 15 * _this.s,
            easing: 'easeOutBounce',
            begin: function() {
              return i === 1 && _this.$mEntire.show();
            }
          });
        };
      })(this));
      this.$text1.velocity({
        opacity: 1
      }, {
        delay: 1200 * this.s,
        duration: 800 * this.s
      });
      return this.$text2.velocity({
        opacity: 1
      }, {
        delay: 1800 * this.s,
        duration: 800 * this.s
      });
    };

    return Mushroom;

  })();

  window.Mushroom = Mushroom;

}).call(this);

(function() {
  var Tribits;

  Tribits = (function() {
    function Tribits(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.run();
    }

    Tribits.prototype.vars = function() {
      this.delay = this.o.delay || 0;
      this.s = 1 * h.time(1);
      this.$bits1 = $('#js-tri-bits1');
      this.$bits2 = $('#js-tri-bits2');
      return this.$bits3 = $('#js-tri-bits3');
    };

    Tribits.prototype.run = function() {
      this.runBits1();
      this.runBits2();
      return this.runBits3();
    };

    Tribits.prototype.runBits3 = function() {
      return this.$bits3.children().each((function(_this) {
        return function(i, bit) {
          var $bit;
          $bit = $(bit);
          $bit.css({
            'transform-origin': '5px 5px'
          });
          return $bit.velocity({
            translateY: 800 + h.rand(-150, 150),
            translateX: -800 + h.rand(-150, 150),
            rotateZ: h.rand(-600, 600)
          }, {
            duration: 150 * _this.s,
            delay: h.rand(0, 15) * _this.s + _this.delay * _this.s,
            easing: 'ease-in',
            begin: function() {
              return $bit.show();
            }
          });
        };
      })(this));
    };

    Tribits.prototype.runBits2 = function() {
      return this.$bits2.children().each((function(_this) {
        return function(i, bit) {
          var $bit;
          $bit = $(bit);
          $bit.css({
            'transform-origin': '5px 5px'
          });
          return $bit.velocity({
            translateY: -600 + h.rand(-150, 150),
            translateX: 600 + h.rand(-150, 150),
            rotateZ: h.rand(-600, 600)
          }, {
            duration: 150 * _this.s,
            delay: h.rand(0, 50) * _this.s + _this.delay * _this.s,
            easing: 'ease-in',
            begin: function() {
              return $bit.show();
            }
          });
        };
      })(this));
    };

    Tribits.prototype.runBits1 = function() {
      return this.$bits1.children().each((function(_this) {
        return function(i, bit) {
          var $bit, $child, dur;
          $bit = $(bit);
          dur = 1400 * _this.s + h.rand(0, 200) * _this.s;
          $bit.css({
            'transform-origin': 'center center'
          }).velocity({
            translateY: -320,
            translateX: h.rand(0, -50),
            rotateZ: h.isFF() ? 0 : h.rand(-950, 950)
          }, {
            duration: 1
          }).velocity({
            translateY: 0,
            rotateZ: 0,
            translateX: 0
          }, {
            easing: 'easeOutBounce',
            duration: dur,
            delay: h.rand(0, 200) * _this.s + _this.delay * _this.s,
            begin: function() {
              return $bit.show();
            }
          });
          $child = $bit.children();
          return $child.css({
            'transform-origin': 'center center'
          }).velocity({
            translateX: -280
          }, {
            duration: 1
          }).velocity({
            translateY: 0,
            translateX: h.rand(-50, 50)
          }, {
            delay: _this.delay * _this.s,
            duration: dur + 300 * _this.s,
            easing: 'ease-out',
            begin: function() {
              return $child.show();
            }
          });
        };
      })(this));
    };

    return Tribits;

  })();

  window.Tribits = Tribits;

}).call(this);

(function() {
  var Main;

  Main = (function() {
    function Main() {
      if (typeof this.vars === "function") {
        this.vars();
      }
      this.run();
    }

    Main.prototype.run = function() {
      new Caleydoscope({
        delay: h.time(0)
      });
      new Meets({
        delay: h.time(2900)
      });
      new Svg({
        delay: h.time(4900)
      });
      new Triangles({
        delay: h.time(7900)
      });
      new Tribits({
        delay: h.time(8950)
      });
      new Waves({
        delay: h.time(10300)
      });
      new Fish({
        delay: h.time(11500)
      });
      new Logo({
        delay: h.time(13300)
      });
      return new Mushroom({
        delay: h.time(15300)
      });
    };

    return Main;

  })();

  $(window).load(function() {
    return setTimeout(function() {
      return new Main;
    }, 500);
  });

}).call(this);