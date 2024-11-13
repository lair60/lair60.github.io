/*! For license information please see 187-adcc469e2eee5a6989b9.js.LICENSE.txt */
(self.webpackChunkgatsby_luisingarivera=self.webpackChunkgatsby_luisingarivera||[]).push([[187],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},7526:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.default)((function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}))};var r,a=n(1060),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},1060:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var s=a||"<<anonymous>>",l=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+l+"` was not specified in `"+s+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),f=6;f<c;f++)u[f-6]=arguments[f];return e.apply(void 0,[n,r,s,o,l].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},6306:function(e,t,n){"use strict";var r=n(7462),a=n(3366),o=n(7294),i=n(9758),s=["as","disabled","onKeyDown"];function l(e){return!e||"#"===e.trim()}var c=o.forwardRef((function(e,t){var n=e.as,c=void 0===n?"a":n,u=e.disabled,f=e.onKeyDown,d=(0,a.Z)(e,s),v=function(e){var t=d.href,n=d.onClick;(u||l(t))&&e.preventDefault(),u?e.stopPropagation():n&&n(e)};return l(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),u&&(d.tabIndex=-1,d["aria-disabled"]=!0),o.createElement(c,(0,r.Z)({ref:t},d,{onClick:v,onKeyDown:(0,i.Z)((function(e){" "===e.key&&(e.preventDefault(),v(e))}),f)}))}));c.displayName="SafeAnchor",t.Z=c},9541:function(e,t,n){"use strict";n.d(t,{vE:function(){return o}});var r=n(7294),a=r.createContext({});a.Consumer,a.Provider;function o(e,t){var n=(0,r.useContext)(a);return e||n[t]||t}},9758:function(e,t){"use strict";t.Z=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)}},8870:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7462),a=n(3366),o=n(5900),i=n.n(o),s=/-(.)/g;var l=n(7294),c=n(9541),u=["className","bsPrefix","as"],f=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,t){var n=void 0===t?{}:t,o=n.displayName,s=void 0===o?f(e):o,d=n.Component,v=n.defaultProps,p=l.forwardRef((function(t,n){var o=t.className,s=t.bsPrefix,f=t.as,v=void 0===f?d||"div":f,p=(0,a.Z)(t,u),m=(0,c.vE)(s,e);return l.createElement(v,(0,r.Z)({ref:n,className:i()(o,m)},p))}));return p.defaultProps=v,p.displayName=s,p}},2187:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Fe}});var r=n(1721),a=n(7294),o="header-module--navbar_link--QVKSa",i=n(7462),s=n(3366),l=n(5900),c=n.n(l);n(1143);function u(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function d(e,t){return Object.keys(t).reduce((function(n,r){var o,l=n,c=l[u(r)],d=l[r],v=(0,s.Z)(l,[u(r),r].map(f)),p=t[r],m=function(e,t,n){var r=(0,a.useRef)(void 0!==e),o=(0,a.useState)(t),i=o[0],s=o[1],l=void 0!==e,c=r.current;return r.current=l,!l&&c&&i!==t&&s(t),[l?e:i,(0,a.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),s(e)}),[n])]}(d,c,e[p]),h=m[0],b=m[1];return(0,i.Z)({},v,((o={})[r]=h,o[p]=b,o))}),e)}n(3639);var v=n(8870),p=n(9541),m=["bsPrefix","className","as"],h=a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.as,l=(0,s.Z)(e,m);n=(0,p.vE)(n,"navbar-brand");var u=o||(l.href?"a":"span");return a.createElement(u,(0,i.Z)({},l,{ref:t,className:c()(r,n)}))}));h.displayName="NavbarBrand";var b=h;function g(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var E=/([A-Z])/g;var x=/^ms-/;function y(e){return function(e){return e.replace(E,"-$1").toLowerCase()}(e).replace(x,"-ms-")}var w=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var N=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(y(t))||function(e,t){return g(e).getComputedStyle(e,t)}(e).getPropertyValue(y(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!w.test(e))}(a)?n+=y(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(y(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},C=n(3935),S=!1,k=a.createContext(null),P="unmounted",Z="exited",T="entering",_="entered",K="exiting",O=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a=Z,r.appearStatus=T):a=_:a=t.unmountOnExit||t.mountOnEnter?P:Z,r.state={status:a},r.nextCallback=null,r}(0,r.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===P?{status:Z}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==T&&n!==_&&(t=T):n!==T&&n!==_||(t=K)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===T){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:C.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Z&&this.setState({status:P})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[C.findDOMNode(this),r],o=a[0],i=a[1],s=this.getTimeouts(),l=r?s.appear:s.enter;!e&&!n||S?this.safeSetState({status:_},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:T},(function(){t.props.onEntering(o,i),t.onTransitionEnd(l,(function(){t.safeSetState({status:_},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:C.findDOMNode(this);t&&!S?(this.props.onExit(r),this.safeSetState({status:K},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:Z},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:Z},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:C.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===P)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,s.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(k.Provider,{value:null},"function"==typeof n?n(e,r):a.cloneElement(a.Children.only(n),r))},t}(a.Component);function R(){}O.contextType=k,O.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:R,onEntering:R,onEntered:R,onExit:R,onExiting:R,onExited:R},O.UNMOUNTED=P,O.EXITED=Z,O.ENTERING=T,O.ENTERED=_,O.EXITING=K;var D=O,L=!("undefined"==typeof window||!window.document||!window.document.createElement),I=!1,M=!1;try{var A={get passive(){return I=!0},get once(){return M=I=!0}};L&&(window.addEventListener("test",A,A),window.removeEventListener("test",A,!0))}catch(Xe){}var j=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!M){var a=r.once,o=r.capture,i=n;!M&&a&&(i=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=i),e.addEventListener(t,i,I?r:o)}e.addEventListener(t,n,r)};var U=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var V=function(e,t,n,r){return j(e,t,n,r),function(){U(e,t,n,r)}};function z(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,r),e.dispatchEvent(a)}}(e,"transitionend",!0)}),t+n),o=V(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function q(e,t,n,r){var a,o;null==n&&(a=N(e,"transitionDuration")||"",o=-1===a.indexOf("ms")?1e3:1,n=parseFloat(a)*o||0);var i=z(e,n,r),s=V(e,"transitionend",t);return function(){i(),s()}}function F(e,t){var n=N(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function X(e,t){var n=F(e,"transitionDuration"),r=F(e,"transitionDelay"),a=q(e,(function(n){n.target===e&&(a(),t(n))}),n+r)}var B=n(9758);var H,Y=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],G={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function J(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=G[e];return n+parseInt(N(t,r[0]),10)+parseInt(N(t,r[1]),10)}var W=((H={})[Z]="collapse",H[K]="collapsing",H[T]="collapsing",H[_]="collapse show",H),$={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:J},Q=a.forwardRef((function(e,t){var n=e.onEnter,r=e.onEntering,o=e.onEntered,l=e.onExit,u=e.onExiting,f=e.className,d=e.children,v=e.dimension,p=void 0===v?"height":v,m=e.getDimensionValue,h=void 0===m?J:m,b=(0,s.Z)(e,Y),g="function"==typeof p?p():p,E=(0,a.useMemo)((function(){return(0,B.Z)((function(e){e.style[g]="0"}),n)}),[g,n]),x=(0,a.useMemo)((function(){return(0,B.Z)((function(e){var t="scroll"+g[0].toUpperCase()+g.slice(1);e.style[g]=e[t]+"px"}),r)}),[g,r]),y=(0,a.useMemo)((function(){return(0,B.Z)((function(e){e.style[g]=null}),o)}),[g,o]),w=(0,a.useMemo)((function(){return(0,B.Z)((function(e){e.style[g]=h(g,e)+"px",e.offsetHeight}),l)}),[l,h,g]),N=(0,a.useMemo)((function(){return(0,B.Z)((function(e){e.style[g]=null}),u)}),[g,u]);return a.createElement(D,(0,i.Z)({ref:t,addEndListener:X},b,{"aria-expanded":b.role?b.in:null,onEnter:E,onEntering:x,onEntered:y,onExit:w,onExiting:N}),(function(e,t){return a.cloneElement(d,(0,i.Z)({},t,{className:c()(f,d.props.className,W[e],"width"===g&&"width")}))}))}));Q.defaultProps=$;var ee=Q,te=a.createContext(null);te.displayName="NavbarContext";var ne=te,re=["children","bsPrefix"],ae=a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,o=(0,s.Z)(e,re);return r=(0,p.vE)(r,"navbar-collapse"),a.createElement(ne.Consumer,null,(function(e){return a.createElement(ee,(0,i.Z)({in:!(!e||!e.expanded)},o),a.createElement("div",{ref:t,className:r},n))}))}));ae.displayName="NavbarCollapse";var oe=ae;var ie=function(e){var t=(0,a.useRef)(e);return(0,a.useEffect)((function(){t.current=e}),[e]),t};function se(e){var t=ie(e);return(0,a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var le=["bsPrefix","className","children","label","as","onClick"],ce=a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.children,l=e.label,u=e.as,f=void 0===u?"button":u,d=e.onClick,v=(0,s.Z)(e,le);n=(0,p.vE)(n,"navbar-toggler");var m=(0,a.useContext)(ne)||{},h=m.onToggle,b=m.expanded,g=se((function(e){d&&d(e),h&&h()}));return"button"===f&&(v.type="button"),a.createElement(f,(0,i.Z)({},v,{ref:t,onClick:g,"aria-label":l,className:c()(r,n,!b&&"collapsed")}),o||a.createElement("span",{className:n+"-icon"}))}));ce.displayName="NavbarToggle",ce.defaultProps={label:"Toggle navigation"};var ue=ce,fe=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},de=a.createContext(null),ve=["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"],pe=(0,v.Z)("navbar-text",{Component:"span"}),me=a.forwardRef((function(e,t){var n=d(e,{expanded:"onToggle"}),r=n.bsPrefix,o=n.expand,l=n.variant,u=n.bg,f=n.fixed,v=n.sticky,m=n.className,h=n.children,b=n.as,g=void 0===b?"nav":b,E=n.expanded,x=n.onToggle,y=n.onSelect,w=n.collapseOnSelect,N=(0,s.Z)(n,ve),C=(0,p.vE)(r,"navbar"),S=(0,a.useCallback)((function(){y&&y.apply(void 0,arguments),w&&E&&x&&x(!1)}),[y,w,E,x]);void 0===N.role&&"nav"!==g&&(N.role="navigation");var k=C+"-expand";"string"==typeof o&&(k=k+"-"+o);var P=(0,a.useMemo)((function(){return{onToggle:function(){return x&&x(!E)},bsPrefix:C,expanded:!!E}}),[C,E,x]);return a.createElement(ne.Provider,{value:P},a.createElement(de.Provider,{value:S},a.createElement(g,(0,i.Z)({ref:t},N,{className:c()(m,C,o&&k,l&&C+"-"+l,u&&"bg-"+u,v&&"sticky-"+v,f&&"fixed-"+f)}),h)))}));me.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},me.displayName="Navbar",me.Brand=b,me.Toggle=ue,me.Collapse=oe,me.Text=pe;var he=me,be=(n(7526),a.createContext(null));be.displayName="CardContext";var ge=be,Ee=Function.prototype.bind.call(Function.prototype.call,[].slice);var xe=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var ye=function(e,t){return(0,a.useMemo)((function(){return function(e,t){var n=xe(e),r=xe(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},we=a.createContext(null);we.displayName="NavContext";var Ne=we,Ce=a.createContext(null),Se=["as","onSelect","activeKey","role","onKeyDown"],ke=function(){},Pe=a.forwardRef((function(e,t){var n,r,o=e.as,l=void 0===o?"ul":o,c=e.onSelect,u=e.activeKey,f=e.role,d=e.onKeyDown,v=(0,s.Z)(e,Se),p=(0,a.useReducer)((function(e){return!e}),!1)[1],m=(0,a.useRef)(!1),h=(0,a.useContext)(de),b=(0,a.useContext)(Ce);b&&(f=f||"tablist",u=b.activeKey,n=b.getControlledId,r=b.getControllerId);var g=(0,a.useRef)(null),E=function(e){var t=g.current;if(!t)return null;var n,r=(n="[data-rb-event-key]:not(.disabled)",Ee(t.querySelectorAll(n))),a=t.querySelector(".active");if(!a)return null;var o=r.indexOf(a);if(-1===o)return null;var i=o+e;return i>=r.length&&(i=0),i<0&&(i=r.length-1),r[i]},x=function(e,t){null!=e&&(c&&c(e,t),h&&h(e,t))};(0,a.useEffect)((function(){if(g.current&&m.current){var e=g.current.querySelector("[data-rb-event-key].active");e&&e.focus()}m.current=!1}));var y=ye(t,g);return a.createElement(de.Provider,{value:x},a.createElement(Ne.Provider,{value:{role:f,activeKey:fe(u),getControlledId:n||ke,getControllerId:r||ke}},a.createElement(l,(0,i.Z)({},v,{onKeyDown:function(e){var t;switch(d&&d(e),e.key){case"ArrowLeft":case"ArrowUp":t=E(-1);break;case"ArrowRight":case"ArrowDown":t=E(1);break;default:return}t&&(e.preventDefault(),x(t.dataset.rbEventKey,e),m.current=!0,p())},ref:y,role:f}))))})),Ze=["bsPrefix","className","children","as"],Te=a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.children,l=e.as,u=void 0===l?"div":l,f=(0,s.Z)(e,Ze);return n=(0,p.vE)(n,"nav-item"),a.createElement(u,(0,i.Z)({},f,{ref:t,className:c()(r,n)}),o)}));Te.displayName="NavItem";var _e=Te,Ke=n(6306),Oe=(n(2473),["active","className","eventKey","onSelect","onClick","as"]),Re=a.forwardRef((function(e,t){var n=e.active,r=e.className,o=e.eventKey,l=e.onSelect,u=e.onClick,f=e.as,d=(0,s.Z)(e,Oe),v=fe(o,d.href),p=(0,a.useContext)(de),m=(0,a.useContext)(Ne),h=n;if(m){d.role||"tablist"!==m.role||(d.role="tab");var b=m.getControllerId(v),g=m.getControlledId(v);d["data-rb-event-key"]=v,d.id=b||d.id,d["aria-controls"]=g||d["aria-controls"],h=null==n&&null!=v?m.activeKey===v:n}"tab"===d.role&&(d.disabled&&(d.tabIndex=-1,d["aria-disabled"]=!0),d["aria-selected"]=h);var E=se((function(e){u&&u(e),null!=v&&(l&&l(v,e),p&&p(v,e))}));return a.createElement(f,(0,i.Z)({},d,{ref:t,onClick:E,className:c()(r,h&&"active")}))}));Re.defaultProps={disabled:!1};var De=Re,Le=["bsPrefix","disabled","className","href","eventKey","onSelect","as"],Ie={disabled:!1,as:Ke.Z},Me=a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,o=e.className,l=e.href,u=e.eventKey,f=e.onSelect,d=e.as,v=(0,s.Z)(e,Le);return n=(0,p.vE)(n,"nav-link"),a.createElement(De,(0,i.Z)({},v,{href:l,ref:t,eventKey:u,as:d,disabled:r,onSelect:f,className:c()(o,n,r&&"disabled")}))}));Me.displayName="NavLink",Me.defaultProps=Ie;var Ae=Me,je=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","children","activeKey"],Ue=a.forwardRef((function(e,t){var n,r,o,l=d(e,{activeKey:"onSelect"}),u=l.as,f=void 0===u?"div":u,v=l.bsPrefix,m=l.variant,h=l.fill,b=l.justify,g=l.navbar,E=l.navbarScroll,x=l.className,y=l.children,w=l.activeKey,N=(0,s.Z)(l,je),C=(0,p.vE)(v,"nav"),S=!1,k=(0,a.useContext)(ne),P=(0,a.useContext)(ge);return k?(r=k.bsPrefix,S=null==g||g):P&&(o=P.cardHeaderBsPrefix),a.createElement(Pe,(0,i.Z)({as:f,ref:t,activeKey:w,className:c()(x,(n={},n[C]=!S,n[r+"-nav"]=S,n[r+"-nav-scroll"]=S&&E,n[o+"-"+m]=!!o,n[C+"-"+m]=!!m,n[C+"-fill"]=h,n[C+"-justified"]=b,n))},N),y)}));Ue.displayName="Nav",Ue.defaultProps={justify:!1,fill:!1},Ue.Item=_e,Ue.Link=Ae;var Ve=Ue,ze=n(5218),qe=n(6125);let Fe=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={activeKey:"1"},n}(0,r.Z)(t,e);var i=t.prototype;return i.selectTab=function(e){e==ze.LE?(gtag("event","home"),this.setState({activeKey:"1"})):e==ze.cn?(gtag("event","portfolio"),this.setState({activeKey:"2"})):e==ze.cv?(gtag("event","cv"),this.setState({activeKey:"3"})):(gtag("event","contact"),this.setState({activeKey:"4"})),this.props.changeComponent(e)},i.render=function(){return a.createElement("header",{className:"header-module--header--Zms1V"},a.createElement(he,{id:"menu-nav",collapseOnSelect:!0,expand:"lg",className:"header-module--navbar--kwNbS"},a.createElement("div",{id:"h-block",className:"header-module--logo_block1--Tkfmk",onClick:()=>{gtag("event","logo_aws_cert"),window.open("https://www.youracclaim.com/badges/99d3da1d-e689-47a3-910a-e7c012f893b4/linked_in_profile","_blank")}},a.createElement(qe.S,{src:"../images/logo8.png",alt:"Logo Icon",layout:"constrained",height:57,__imageData:n(6084)}),a.createElement(qe.S,{src:"../images/aws-certified-logo_color-horz_180x30.png",alt:"AWS Icon",layout:"fixed",height:21,width:132,style:{marginTop:"-16px",display:"block"},__imageData:n(6865)})),a.createElement("div",{className:"header-module--logo_block2--Eii6E"},a.createElement("div",{style:{height:"100%"}},a.createElement(he.Toggle,{className:"header-module--tooglebtn--xm1oE","aria-controls":"responsive-navbar-nav"}),a.createElement(he.Collapse,{id:"responsive-navbar-nav",className:"header-module--responsive_navbar--rpeYT"},a.createElement(Ve,{className:"mr-auto",activeKey:this.state.activeKey},a.createElement(Ve.Link,{className:o,eventKey:"1",href:"#",onSelect:()=>this.selectTab(ze.LE)},"Home"),a.createElement(Ve.Link,{className:o,eventKey:"2",href:"#",onSelect:()=>this.selectTab(ze.cn),"data-description":"Examples of Technology Used"},"Portfolio"),a.createElement(Ve.Link,{className:o,eventKey:"3",href:"#",onSelect:()=>this.selectTab(ze.cv),"data-description":"My resume"},"CV"),a.createElement(Ve.Link,{className:o,eventKey:"4",href:"#",onSelect:()=>this.selectTab(ze.PX),"data-description":"Inquire within"},"Contact")))))))},t}(a.Component)},2473:function(e){"use strict";var t=function(){};e.exports=t},6865:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080808","images":{"fallback":{"src":"/static/91bbfdebac2d794f894f415200596b9b/198a8/aws-certified-logo_color-horz_180x30.png","srcSet":"/static/91bbfdebac2d794f894f415200596b9b/198a8/aws-certified-logo_color-horz_180x30.png 132w","sizes":"132px"},"sources":[{"srcSet":"/static/91bbfdebac2d794f894f415200596b9b/ea087/aws-certified-logo_color-horz_180x30.webp 132w","type":"image/webp","sizes":"132px"}]},"width":132,"height":21}')},6084:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/0e465d781fe7d40702c9133a7478b395/08607/logo8.png","srcSet":"/static/0e465d781fe7d40702c9133a7478b395/125ad/logo8.png 51w,\\n/static/0e465d781fe7d40702c9133a7478b395/89a39/logo8.png 101w,\\n/static/0e465d781fe7d40702c9133a7478b395/08607/logo8.png 202w","sizes":"(min-width: 202px) 202px, 100vw"},"sources":[{"srcSet":"/static/0e465d781fe7d40702c9133a7478b395/db24e/logo8.webp 51w,\\n/static/0e465d781fe7d40702c9133a7478b395/7e00a/logo8.webp 101w,\\n/static/0e465d781fe7d40702c9133a7478b395/d4631/logo8.webp 202w","type":"image/webp","sizes":"(min-width: 202px) 202px, 100vw"}]},"width":202,"height":57}')}}]);
//# sourceMappingURL=187-adcc469e2eee5a6989b9.js.map