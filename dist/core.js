!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Typewriter",[],e):"object"==typeof exports?exports.Typewriter=e():t.Typewriter=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=41)}([function(t,e,n){var r=n(27)("wks"),o=n(14),i=n(2).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e,n){var r=n(2),o=n(10),i=n(3),u=n(11),a=n(26),s=function(t,e,n){var c,f,l,p,v=t&s.F,h=t&s.G,d=t&s.S,y=t&s.P,m=t&s.B,g=h?r:d?r[e]||(r[e]={}):(r[e]||{}).prototype,b=h?o:o[e]||(o[e]={}),w=b.prototype||(b.prototype={});for(c in h&&(n=e),n)l=((f=!v&&g&&void 0!==g[c])?g:n)[c],p=m&&f?a(l,r):y&&"function"==typeof l?a(Function.call,l):l,g&&u(g,c,l,t&s.U),b[c]!=l&&i(b,c,p),y&&w[c]!=l&&(w[c]=l)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(8),o=n(16);t.exports=n(5)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},,function(t,e,n){var r=n(13),o=n(37),i=n(31),u=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(2),o=n(3),i=n(9),u=n(14)("src"),a=Function.toString,s=(""+a).split("toString");n(10).inspectSource=function(t){return a.call(t)},(t.exports=function(t,e,n,a){var c="function"==typeof n;c&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(c&&(i(n,u)||o(n,u,t[e]?""+t[e]:s.join(String(e)))),t===r?t[e]=n:a?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||a.call(this)})},function(t,e,n){var r=n(32),o=n(20);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(39),o=n(28);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(26),o=n(32),i=n(19),u=n(33),a=n(44);t.exports=function(t,e){var n=1==t,s=2==t,c=3==t,f=4==t,l=6==t,p=5==t||l,v=e||a;return function(e,a,h){for(var d,y,m=i(e),g=o(m),b=r(a,h,3),w=u(g.length),E=0,x=n?v(e,w):s?v(e,0):void 0;w>E;E++)if((p||E in g)&&(y=b(d=g[E],E,m),t))if(n)x[E]=y;else if(y)switch(t){case 3:return!0;case 5:return d;case 6:return E;case 2:x.push(d)}else if(f)return!1;return l?-1:c||f?f:x}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(20);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=!1},function(t,e,n){"use strict";var r=n(6);t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},function(t,e){t.exports={}},function(t,e,n){var r=n(27)("keys"),o=n(14);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){(function(e){for(var r=n(65),o="undefined"==typeof window?e:window,i=["moz","webkit"],u="AnimationFrame",a=o["request"+u],s=o["cancel"+u]||o["cancelRequest"+u],c=0;!a&&c<i.length;c++)a=o[i[c]+"Request"+u],s=o[i[c]+"Cancel"+u]||o[i[c]+"CancelRequest"+u];if(!a||!s){var f=0,l=0,p=[];a=function(t){if(0===p.length){var e=r(),n=Math.max(0,1e3/60-(e-f));f=n+e,setTimeout(function(){var t=p.slice(0);p.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(f)}catch(t){setTimeout(function(){throw t},0)}},Math.round(n))}return p.push({handle:++l,callback:t,cancelled:!1}),l},s=function(t){for(var e=0;e<p.length;e++)p[e].handle===t&&(p[e].cancelled=!0)}}t.exports=function(t){return a.call(o,t)},t.exports.cancel=function(){s.apply(o,arguments)},t.exports.polyfill=function(t){t||(t=o),t.requestAnimationFrame=a,t.cancelAnimationFrame=s}}).call(this,n(64))},function(t,e,n){var r=n(43);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(10),o=n(2),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(21)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(8).f,o=n(9),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(4),o=n(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(18);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(34),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=n(46),o=n(47),i=n(23),u=n(12);t.exports=n(48)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(13),o=n(50),i=n(28),u=n(24)("IE_PROTO"),a=function(){},s=function(){var t,e=n(30)("iframe"),r=i.length;for(e.style.display="none",n(53).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[u]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e,n){t.exports=!n(5)&&!n(6)(function(){return 7!=Object.defineProperty(n(30)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(18);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(9),o=n(12),i=n(51)(!1),u=n(24)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),s=0,c=[];for(n in a)n!=u&&r(a,n)&&c.push(n);for(;e.length>s;)r(a,n=e[s++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){var r=n(1);r(r.S+r.F*!n(5),"Object",{defineProperty:n(8).f})},function(t,e,n){"use strict";n.r(e);n(42),n(35),n(55),n(40),n(57),n(58),n(59),n(62),n(63);var r=n(25),o=n.n(r);n(67);function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=function(){function t(e,n){var r=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"eventNames",{TYPE_CHARACTER:"TYPE_CHARACTER",REMOVE_CHARACTER:"REMOVE_CHARACTER",REMOVE_ALL:"REMOVE_ALL",PAUSE_FOR:"PAUSE_FOR",CALL_FUNCTION:"CALL_FUNCTION"}),u(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,calledEvents:[],visibleString:"",elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),u(this,"options",{strings:!1,cursor:"|",delay:"natural",loop:!1,autoStart:!1,devMode:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor"}),u(this,"setupWrapperElement",function(){r.state.elements.wrapper.className=r.options.wrapperClassName,r.state.elements.cursor.className=r.options.cursorClassName,r.state.elements.cursor.innerHTML=r.options.cursor,r.state.elements.container.innerHTML="",r.state.elements.container.appendChild(r.state.elements.wrapper),r.state.elements.container.appendChild(r.state.elements.cursor)}),u(this,"typeOutAllStrings",function(){return r.getStringsAsCharacters().forEach(function(t){r.typeCharacters(t),r.pauseFor(1500),r.removeCharacters(t),r.pauseFor(1500)}),r}),u(this,"start",function(){return r.state.eventLoopPaused=!1,r.runEventLoop(),r}),u(this,"pause",function(){return r.state.eventLoopPaused=!0,r}),u(this,"stop",function(){return r.state.eventLoop&&o.a.cancel(r.state.eventLoop),r}),u(this,"pauseFor",function(t){return r.addEventToQueue(r.eventNames.PAUSE_FOR,{ms:t}),r}),u(this,"typeString",function(t){return t.split("").forEach(function(t){r.addEventToQueue(r.eventNames.TYPE_CHARACTER,{character:t})}),r}),u(this,"deleteAll",function(){return r.addEventToQueue(r.eventNames.REMOVE_ALL,null),r}),u(this,"deleteChars",function(t){for(var e=0;e<t;e++)r.addEventToQueue(r.eventNames.REMOVE_CHARACTER);return r}),u(this,"callFunction",function(t,e){return"function"==typeof t&&r.addEventToQueue(r.eventNames.CALL_FUNCTION,{cb:t,thisArg:e}),r}),u(this,"typeCharacters",function(t){t.forEach(function(t){r.addEventToQueue(r.eventNames.TYPE_CHARACTER,{character:t})})}),u(this,"removeCharacters",function(t){t.forEach(function(){r.addEventToQueue(r.eventNames.REMOVE_CHARACTER)})}),u(this,"addEventToQueue",function(t,e){var n={eventName:t,eventArgs:e};arguments.length>2&&void 0!==arguments[2]&&arguments[2]?r.state.eventQueue.unshift(n):r.state.eventQueue.push(n)}),u(this,"runEventLoop",function(){r.state.lastFrameTime||(r.state.lastFrameTime=Date.now());var t=Date.now(),e=t-r.state.lastFrameTime;if(!r.state.eventQueue.length){if(!r.options.loop)return;r.state.eventQueue=r.state.calledEvents,r.addEventToQueue(r.eventNames.REMOVE_ALL,null,!0),r.state.calledEvents=[]}if(r.state.eventLoop=o()(r.runEventLoop),!r.state.eventLoopPaused){if(r.state.pauseUntil){if(t<r.state.pauseUntil)return;r.state.pauseUntil=null}if(!(e<=("natural"===r.options.delay?r.getRandomInteger(100,200):r.options.delay))){var n=r.state.eventQueue.shift(),i=r.state.visibleString,u=n.eventName,a=n.eventArgs;switch(r.logInDevMode({currentEvent:n,state:r.state}),u){case r.eventNames.TYPE_CHARACTER:var s=a.character;i="".concat(i).concat(s);break;case r.eventNames.REMOVE_CHARACTER:i=i.slice(0,-1);break;case r.eventNames.PAUSE_FOR:r.state.pauseUntil=Date.now()+parseInt(a.ms);break;case r.eventNames.REMOVE_ALL:i.split("").reverse().forEach(function(){r.addEventToQueue(r.eventNames.REMOVE_CHARACTER,null,!0)});break;case r.eventNames.CALL_FUNCTION:var c=n.eventArgs,f=c.cb,l=c.thisArg;f.call(l,{visibleString:i,elements:r.state.elements})}i!==r.state.visibleString&&(r.state.visibleString=i,r.state.elements.wrapper.innerText=r.state.visibleString),r.options.loop&&n.eventName!==r.eventNames.REMOVE_ALL&&r.state.calledEvents.push(n),r.state.lastFrameTime=t}}}),u(this,"getStringsAsCharacters",function(){return"string"==typeof r.options.strings?[r.options.strings.split("")]:r.options.strings.map(function(t){return"string"==typeof t&&t.split("")})}),u(this,"getRandomInteger",function(t,e){return Math.floor(Math.random()*(e-t+1))+t}),!e)throw new Error("No container element was provided");if("string"==typeof e){var i=document.querySelector(e);if(!i)throw new Error("Could not find container element");this.state.elements.container=i}else this.state.elements.container=e;n&&(this.options=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){u(t,e,n[e])})}return t}({},this.options,n)),this.init()}return function(t,e,n){e&&i(t.prototype,e),n&&i(t,n)}(t,[{key:"init",value:function(){this.setupWrapperElement(),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(t){this.options.devMode&&console.log(t)}}]),t}();n.d(e,"default",function(){return a})},function(t,e,n){"use strict";var r=n(1),o=n(17)(2);r(r.P+r.F*!n(22)([].filter,!0),"Array",{filter:function(t){return o(this,t,arguments[1])}})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(45);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){var r=n(4),o=n(38),i=n(0)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var r=n(0)("unscopables"),o=Array.prototype;void 0==o[r]&&n(3)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r=n(21),o=n(1),i=n(11),u=n(3),a=n(23),s=n(49),c=n(29),f=n(54),l=n(0)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,h,d,y,m){s(n,e,h);var g,b,w,E=function(t){if(!p&&t in A)return A[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",T="values"==d,O=!1,A=t.prototype,L=A[l]||A["@@iterator"]||d&&A[d],S=L||E(d),R=d?T?E("entries"):S:void 0,C="Array"==e&&A.entries||L;if(C&&(w=f(C.call(new t)))!==Object.prototype&&w.next&&(c(w,x,!0),r||"function"==typeof w[l]||u(w,l,v)),T&&L&&"values"!==L.name&&(O=!0,S=function(){return L.call(this)}),r&&!m||!p&&!O&&A[l]||u(A,l,S),a[e]=S,a[x]=v,d)if(g={values:T?S:E("values"),keys:y?S:E("keys"),entries:R},m)for(b in g)b in A||i(A,b,g[b]);else o(o.P+o.F*(p||O),e,g);return g}},function(t,e,n){"use strict";var r=n(36),o=n(16),i=n(29),u={};n(3)(u,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(8),o=n(13),i=n(15);t.exports=n(5)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),a=u.length,s=0;a>s;)r.f(t,n=u[s++],e[n]);return t}},function(t,e,n){var r=n(12),o=n(33),i=n(52);t.exports=function(t){return function(e,n,u){var a,s=r(e),c=o(s.length),f=i(u,c);if(t&&n!=n){for(;c>f;)if((a=s[f++])!=a)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(34),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(2).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(9),o=n(19),i=n(24)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(19),o=n(15);n(56)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(1),o=n(10),i=n(6);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){"use strict";var r=n(1),o=n(17)(1);r(r.P+r.F*!n(22)([].map,!0),"Array",{map:function(t){return o(this,t,arguments[1])}})},function(t,e,n){var r=n(1);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,e,n){n(60)("split",2,function(t,e,r){"use strict";var o=n(61),i=r,u=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var a=void 0===/()??/.exec("")[1];r=function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!o(t))return i.call(n,t,e);var r,s,c,f,l,p=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=void 0===e?4294967295:e>>>0,y=new RegExp(t.source,v+"g");for(a||(r=new RegExp("^"+y.source+"$(?!\\s)",v));(s=y.exec(n))&&!((c=s.index+s[0].length)>h&&(p.push(n.slice(h,s.index)),!a&&s.length>1&&s[0].replace(r,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)}),s.length>1&&s.index<n.length&&u.apply(p,s.slice(1)),f=s[0].length,h=c,p.length>=d));)y.lastIndex===s.index&&y.lastIndex++;return h===n.length?!f&&y.test("")||p.push(""):p.push(n.slice(h)),p.length>d?p.slice(0,d):p}}else"0".split(void 0,0).length&&(r=function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)});return[function(n,o){var i=t(this),u=void 0==n?void 0:n[e];return void 0!==u?u.call(n,i,o):r.call(String(i),n,o)},r]})},function(t,e,n){"use strict";var r=n(3),o=n(11),i=n(6),u=n(20),a=n(0);t.exports=function(t,e,n){var s=a(t),c=n(u,s,""[t]),f=c[0],l=c[1];i(function(){var e={};return e[s]=function(){return 7},7!=""[t](e)})&&(o(String.prototype,t,f),r(RegExp.prototype,s,2==e?function(t,e){return l.call(t,this,e)}:function(t){return l.call(t,this)}))}},function(t,e,n){var r=n(4),o=n(18),i=n(0)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e,n){for(var r=n(35),o=n(15),i=n(11),u=n(2),a=n(3),s=n(23),c=n(0),f=c("iterator"),l=c("toStringTag"),p=s.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=o(v),d=0;d<h.length;d++){var y,m=h[d],g=v[m],b=u[m],w=b&&b.prototype;if(w&&(w[f]||a(w,f,p),w[l]||a(w,l,m),s[m]=p,g))for(y in r)w[y]||i(w,y,r[y],!0)}},function(t,e,n){"use strict";var r=n(1),o=n(17)(0),i=n(22)([].forEach,!0);r(r.P+r.F*!i,"Array",{forEach:function(t){return o(this,t,arguments[1])}})},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){(function(){var n,r,o,i,u,a;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:void 0!==e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-u)/1e6},r=e.hrtime,i=(n=function(){var t;return 1e9*(t=r())[0]+t[1]})(),a=1e9*e.uptime(),u=i-a):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n(66))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var s,c=[],f=!1,l=-1;function p(){f&&s&&(f=!1,s.length?c=s.concat(c):l=-1,c.length&&v())}function v(){if(!f){var t=a(p);f=!0;for(var e=c.length;e;){for(s=c,c=[];++l<e;)s&&s[l].run();l=-1,e=c.length}s=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function d(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new h(t,e)),1!==c.length||f||a(v)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){var r=n(68);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(70)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(69)(!1)).push([t.i,".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}to{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}to{opacity:0}}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var u=t[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),e.push(u))}},e}},function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),u=null,a=0,s=[],c=n(71);function f(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var u=0;u<i.parts.length;u++)i.parts[u](o.parts[u]);for(;u<o.parts.length;u++)i.parts.push(y(o.parts[u],e))}else{var a=[];for(u=0;u<o.parts.length;u++)a.push(y(o.parts[u],e));r[o.id]={id:o.id,refs:1,parts:a}}}}function l(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[u]?r[u].parts.push(a):n.push(r[u]={id:u,parts:[a]})}return n}function p(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),s.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertAt.before,n);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=s.indexOf(t);e>=0&&s.splice(e,1)}function h(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return d(e,t.attrs),p(t,e),e}function d(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var s=a++;n=u||(u=h(e)),r=g.bind(null,n,s,!1),o=g.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",d(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=c(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var u=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(u),a&&URL.revokeObjectURL(a)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=l(t,e);return f(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var u=n[i];(a=r[u.id]).refs--,o.push(a)}t&&f(l(t,e),e);for(i=0;i<o.length;i++){var a;if(0===(a=o[i]).refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete r[a.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function g(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]).default});