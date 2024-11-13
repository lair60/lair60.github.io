/*! For license information please see component---src-pages-index-js-c9ada8d7cbad709d96b9.js.LICENSE.txt */
(self.webpackChunkgatsby_luisingarivera=self.webpackChunkgatsby_luisingarivera||[]).push([[678],{156:function(e,t,n){"use strict";var r=n(7294),o=n(3366),i=n(7462),a=n(7326),c=n(1721),u=n(8812),s=n(5706),f=n.n(s);function l(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var p=r.createContext();var d={initialChunks:{}},y="PENDING",h="REJECTED";var m=function(e){return e};function b(e){var t=e.defaultResolveComponent,n=void 0===t?m:t,s=e.render,b=e.onLoad;function g(e,t){void 0===t&&(t={});var m=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),g={};function v(e){return t.cacheKey?t.cacheKey(e):m.resolve?m.resolve(e):"static"}function w(e,r,o){var i=t.resolveComponent?t.resolveComponent(e,r):n(e);if(t.resolveComponent&&!(0,u.isValidElementType)(i))throw new Error("resolveComponent returned something that is not a React component!");return f()(o,i,{preload:!0}),i}var T,S,C=function(e){var t=v(e),n=g[t];return n&&n.status!==h||((n=m.requireAsync(e)).status=y,g[t]=n,n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:m.resolve(e),chunkName:m.chunkName(e),error:t?t.message:t}),n.status=h}))),n},E=function(e){function n(n){var r;return(r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:v(n)},l(!n.__chunkExtractor||m.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(m.requireAsync(n).catch((function(){return null})),r.loadSync(),n.__chunkExtractor.addChunk(m.chunkName(n))),(0,a.Z)(r)):(!1!==t.ssr&&(m.isReady&&m.isReady(n)||m.chunkName&&d.initialChunks[m.chunkName(n)])&&r.loadSync(),r)}(0,c.Z)(n,e),n.getDerivedStateFromProps=function(e,t){var n=v(e);return(0,i.Z)({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var r=n.prototype;return r.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===h&&this.setCache(),this.state.loading&&this.loadAsync()},r.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},r.componentWillUnmount=function(){this.mounted=!1},r.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},r.getCacheKey=function(){return v(this.props)},r.getCache=function(){return g[this.getCacheKey()]},r.setCache=function(e){void 0===e&&(e=void 0),g[this.getCacheKey()]=e},r.triggerOnLoad=function(){var e=this;b&&setTimeout((function(){b(e.state.result,e.props)}))},r.loadSync=function(){if(this.state.loading)try{var e=w(m.requireSync(this.props),this.props,A);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:m.resolve(this.props),chunkName:m.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},r.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=w(t,e.props,A);e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},r.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,(0,o.Z)(e,["__chunkExtractor","forwardedRef"]));return C(t)},r.render=function(){var e=this.props,n=e.forwardedRef,r=e.fallback,a=(e.__chunkExtractor,(0,o.Z)(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,u=c.error,f=c.loading,l=c.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===y)throw this.loadAsync();if(u)throw u;var p=r||t.fallback||null;return f?p:s({fallback:p,result:l,options:t,props:(0,i.Z)({},a,{ref:n})})},n}(r.Component),O=(S=function(e){return r.createElement(p.Consumer,null,(function(t){return r.createElement(T,Object.assign({__chunkExtractor:t},e))}))},(T=E).displayName&&(S.displayName=T.displayName+"WithChunkExtractor"),S),A=r.forwardRef((function(e,t){return r.createElement(O,Object.assign({forwardedRef:t},e))}));return A.displayName="Loadable",A.preload=function(e){A.load(e)},A.load=function(e){return C(e)},A}return{loadable:g,lazy:function(e,t){return g(e,(0,i.Z)({},t,{suspense:!0}))}}}var g=b({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return r.createElement(t,n)}}),v=g.loadable,w=g.lazy,T=b({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),S=T.loadable,C=T.lazy;var E=v;E.lib=S,w.lib=C;t.ZP=E},5706:function(e,t,n){"use strict";var r=n(8812),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(e){return r.isMemo(e)?a:c[e.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(y){var o=d(n);o&&o!==y&&e(t,o,r)}var a=f(n);l&&(a=a.concat(l(n)));for(var c=u(t),h=u(n),m=0;m<a.length;++m){var b=a[m];if(!(i[b]||r&&r[b]||h&&h[b]||c&&c[b])){var g=p(n,b);try{s(t,b,g)}catch(v){}}}}return t}},3302:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,f;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(f=e.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;for(f=e.entries();!(u=f.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(f=e.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},165:function(e,t){"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function T(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case l:case i:case c:case a:case d:return e;default:switch(e=e&&e.$$typeof){case s:case p:case m:case h:case u:return e;default:return t}}case o:return t}}}function S(e){return T(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=s,t.ContextProvider=u,t.Element=r,t.ForwardRef=p,t.Fragment=i,t.Lazy=m,t.Memo=h,t.Portal=o,t.Profiler=c,t.StrictMode=a,t.Suspense=d,t.isAsyncMode=function(e){return S(e)||T(e)===f},t.isConcurrentMode=S,t.isContextConsumer=function(e){return T(e)===s},t.isContextProvider=function(e){return T(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return T(e)===p},t.isFragment=function(e){return T(e)===i},t.isLazy=function(e){return T(e)===m},t.isMemo=function(e){return T(e)===h},t.isPortal=function(e){return T(e)===o},t.isProfiler=function(e){return T(e)===c},t.isStrictMode=function(e){return T(e)===a},t.isSuspense=function(e){return T(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===l||e===c||e===a||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===u||e.$$typeof===s||e.$$typeof===p||e.$$typeof===g||e.$$typeof===v||e.$$typeof===w||e.$$typeof===b)},t.typeOf=T},8812:function(e,t,n){"use strict";e.exports=n(165)},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=e(s.map((function(e){return e.props}))),l.canUseDOM?t(u):n&&(u=n(u))}var l=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(l,"canUseDOM",c),l}}},5218:function(e,t,n){"use strict";n.d(t,{LE:function(){return r},PX:function(){return a},cn:function(){return o},cv:function(){return i}});const r="home",o="portfolio",i="cv",a="contact"},1545:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Te}});var r,o,i,a,c=n(7326),u=n(1721),s=n(7294),f=n(156),l=n(5218),p=n(5697),d=n.n(p),y=n(4839),h=n.n(y),m=n(3302),b=n.n(m),g=n(6494),v=n.n(g),w="bodyAttributes",T="htmlAttributes",S="titleAttributes",C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(C).map((function(e){return C[e]})),"charset"),O="cssText",A="href",P="http-equiv",k="innerHTML",j="itemprop",x="name",L="property",M="rel",R="src",N="target",_={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",$="defer",D="encodeSpecialCharacters",q="onChangeClientState",F="titleTemplate",H=Object.keys(_).reduce((function(e,t){return e[_[t]]=t,e}),{}),K=[C.NOSCRIPT,C.SCRIPT,C.STYLE],Z="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=ee(e,C.TITLE),n=ee(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ee(e,I);return t||r||void 0},G=function(e){return ee(e,q)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[C.BASE]})).map((function(e){return e[C.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ie("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===M&&"canonical"===e[n].toLowerCase()||u===M&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==k&&c!==O&&c!==j||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=v()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},ee=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},te=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){te(e)}),0)}),ne=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||te:n.g.requestAnimationFrame||te,oe="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ne:n.g.cancelAnimationFrame||ne,ie=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ce=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,l=e.title,p=e.titleAttributes;fe(C.BODY,r),fe(C.HTML,o),se(l,p);var d={baseTag:le(C.BASE,n),linkTags:le(C.LINK,i),metaTags:le(C.META,a),noscriptTags:le(C.NOSCRIPT,c),scriptTags:le(C.SCRIPT,s),styleTags:le(C.STYLE,f)},y={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,y,h)},ue=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ue(e)),fe(C.TITLE,t)},fe=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Z),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute(Z):n.getAttribute(Z)!==a.join(",")&&n.setAttribute(Z,a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(C.HEAD),r=n.querySelectorAll(e+"["+Z+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===k)n.innerHTML=t.innerHTML;else if(r===O)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(Z,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},pe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)},ye=function(e,t,n){switch(e){case C.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Z]=!0,o=de(n,r),[s.createElement(C.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=pe(n),i=ue(t);return o?"<"+e+" "+Z+'="true" '+o+">"+V(i,r)+"</"+e+">":"<"+e+" "+Z+'="true">'+V(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case w:case T:return{toComponent:function(){return de(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[Z]=!0,r);return Object.keys(t).forEach((function(e){var n=_[e]||e;if(n===k||n===O){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),s.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===k||e===O)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===K.indexOf(e);return t+"<"+e+" "+Z+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},he=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,l=void 0===f?"":f,p=e.titleAttributes;return{base:ye(C.BASE,t,r),bodyAttributes:ye(w,n,r),htmlAttributes:ye(T,o,r),link:ye(C.LINK,i,r),meta:ye(C.META,a,r),noscript:ye(C.NOSCRIPT,c,r),script:ye(C.SCRIPT,u,r),style:ye(C.STYLE,s,r),title:ye(C.TITLE,{title:l,titleAttributes:p},r)}},me=h()((function(e){return{baseTag:Q([A,N],e),bodyAttributes:J(w,e),defer:ee(e,$),encode:ee(e,D),htmlAttributes:J(T,e),linkTags:X(C.LINK,[M,A],e),metaTags:X(C.META,[x,E,P,L,j],e),noscriptTags:X(C.NOSCRIPT,[k],e),onChangeClientState:G(e),scriptTags:X(C.SCRIPT,[R,k],e),styleTags:X(C.STYLE,[O],e),title:W(e),titleAttributes:J(S,e)}}),(function(e){ae&&oe(ae),e.defer?ae=re((function(){ce(e,(function(){ae=null}))})):(ce(e),ae=null)}),he)((function(){return null})),be=(o=me,a=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!b()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:t};case C.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case C.TITLE:return U({},o,((t={})[r.type]=a,t.titleAttributes=U({},i),t));case C.BODY:return U({},o,{bodyAttributes:U({},i)});case C.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((n={})[r.type]=U({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),s.createElement(o,r)},z(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(s.Component),i.propTypes={base:d().object,bodyAttributes:d().object,children:d().oneOfType([d().arrayOf(d().node),d().node]),defaultTitle:d().string,defer:d().bool,encodeSpecialCharacters:d().bool,htmlAttributes:d().object,link:d().arrayOf(d().object),meta:d().arrayOf(d().object),noscript:d().arrayOf(d().object),onChangeClientState:d().func,script:d().arrayOf(d().object),style:d().arrayOf(d().object),title:d().string,titleAttributes:d().object,titleTemplate:d().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=he({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);be.renderStatic=be.rewind;var ge=n(5444);const ve=(0,f.ZP)((()=>Promise.all([n.e(532),n.e(2)]).then(n.bind(n,7002)))),we=(0,f.ZP)((()=>n.e(995).then(n.bind(n,2995))));let Te=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={content:l.LE},n.changeComponent=n.changeComponent.bind((0,c.Z)(n)),n}(0,u.Z)(t,e);var n=t.prototype;return n.changeComponent=function(e){this.setState({content:e})},n.render=function(){return s.createElement(ge.StaticQuery,{query:"63159454",render:e=>s.createElement(s.Fragment,null,s.createElement(be,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:e.site.siteMetadata.description},{property:"og:title",content:e.site.siteMetadata.title},{property:"og:description",content:e.site.siteMetadata.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:e.site.siteMetadata.title},{name:"twitter:description",content:e.site.siteMetadata.description}]},s.createElement("title",null,"Luis Inga Rivera"),s.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-12PJHL04XQ"}),s.createElement("script",null,"window.dataLayer = window.dataLayer || [];\n                  function gtag(){dataLayer.push(arguments);}\n                  gtag('js', new Date());\n                  if (navigator.sendBeacon){\n                    gtag('config', 'G-12PJHL04XQ',{ 'transport_type': 'beacon'});\n                  }else{\n                    gtag('config', 'G-12PJHL04XQ');\n                  }                  \n                  ")),s.createElement(ve,{changeComponent:this.changeComponent},s.createElement(we,{tab:this.state.content})))})},t}(s.Component)},7326:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},7462:function(e,t,n){"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},3366:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-index-js-c9ada8d7cbad709d96b9.js.map