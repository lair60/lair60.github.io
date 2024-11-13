/*! For license information please see commons-36b28a6dad21c5ef50fa.js.LICENSE.txt */
(self.webpackChunkgatsby_luisingarivera=self.webpackChunkgatsby_luisingarivera||[]).push([[223],{2729:function(e){"use strict";const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),o=new RegExp(s.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,a,n)=>{let s=!1,i=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];s&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,o=i,i=!0,l++):i&&o&&r.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=i,i=!1,s=!0):(s=a(c)===c&&n(c)!==c,o=i,i=n(c)===c&&a(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,r)=>t(r))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,r){"use strict";r.d(t,{L:function(){return m},M:function(){return x},P:function(){return E},S:function(){return H},_:function(){return o},a:function(){return i},b:function(){return u},g:function(){return d},h:function(){return l}});var a=r(6540),n=(r(2729),r(5556)),s=r.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t.indexOf(r=s[a])>=0||(n[r]=e[r]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}function u(e,t,r,a,n){return void 0===n&&(n={}),i({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,r,a,n,s,o,l){const c={};s&&(c.backgroundColor=s,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],g=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,r=o(e,p);return a.createElement(a.Fragment,null,a.createElement(g,i({},r)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:r,loading:n,alt:s="",shouldLoad:l}=e,c=o(e,f);return a.createElement("img",i({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:s}))},b=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,s=o(e,h);const l=s.sizes||(null==t?void 0:t.sizes),c=a.createElement(y,i({},s,t,{sizes:l,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:s}=e;return a.createElement("source",{key:t+"-"+s+"-"+r,type:s,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:l})})),c):c};var v;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,r=o(e,w);return t?a.createElement(b,i({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",i({},r))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const x=function(e){return a.createElement(a.Fragment,null,a.createElement(b,i({},e)),a.createElement("noscript",null,a.createElement(b,i({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],L=e=>e.replace(/\n/g,""),S=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),i=3;i<a;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},T={image:s().object.isRequired,alt:S},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],O=new Set;let j,R;const _=function(e){let{as:t="div",image:n,style:s,backgroundColor:u,className:d,class:p,onStartLoad:g,onLoad:m,onError:f}=e,h=o(e,N);const{width:y,height:b,layout:v}=n,w=c(y,b,v),{style:E,className:x}=w,k=o(w,I),C=(0,a.useRef)(),L=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(d=p);const S=function(e,t,r){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(v,y,b);return(0,a.useEffect)((()=>{j||(j=r.e(108).then(r.bind(r,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(L);if(R&&O.has(L))return;let t,a;return j.then((e=>{let{renderImageToString:r,swapPlaceholderImage:o}=e;C.current&&(C.current.innerHTML=r(i({isLoading:!0,isLoaded:O.has(L),image:n},h)),O.has(L)||(t=requestAnimationFrame((()=>{C.current&&(a=o(C.current,L,O,s,g,m,f))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{O.has(L)&&R&&(C.current.innerHTML=R(i({isLoading:O.has(L),isLoaded:O.has(L),image:n},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,a.createElement)(t,i({},k,{style:i({},E,s,{backgroundColor:u}),className:x+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},q=(0,a.memo)((function(e){return e.image?(0,a.createElement)(_,e):null}));q.propTypes=T,q.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:r,__imageData:n,__error:s}=t,l=o(t,A);return s&&console.warn(s),n?a.createElement(e,i({image:n},l)):(console.warn("Image not loaded",r),null)}}const z=P((function(e){let{as:t="div",className:r,class:n,style:s,image:l,loading:p="lazy",imgClassName:g,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=o(e,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(r=n),f=i({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:w,height:S,layout:T,images:N,placeholder:I,backgroundColor:O}=l,j=c(w,S,T),{style:R,className:_}=j,q=o(j,C),A={fallback:void 0,sources:[]};return N.fallback&&(A.fallback=i({},N.fallback,{srcSet:N.fallback.srcSet?L(N.fallback.srcSet):void 0})),N.sources&&(A.sources=N.sources.map((e=>i({},e,{srcSet:L(e.srcSet)})))),a.createElement(t,i({},q,{style:i({},R,s,{backgroundColor:h}),className:_+(r?" "+r:"")}),a.createElement(m,{layout:T,width:w,height:S},a.createElement(E,i({},d(I,!1,T,w,S,O,y,b))),a.createElement(x,i({"data-gatsby-image-ssr":"",className:g},v,u("eager"===p,!1,A,p,f)))))})),W=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),F={src:s().string.isRequired,alt:S,width:W,height:W,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};z.displayName="StaticImage",z.propTypes=F;const H=P(q);H.displayName="StaticImage",H.propTypes=F},6519:function(e,t,r){"use strict";r.d(t,{Jm:function(){return u},gy:function(){return c},oU:function(){return l}});var a=r(6540);r(4848);const n=["xxl","xl","lg","md","sm","xs"],s=a.createContext({prefixes:{},breakpoints:n,minBreakpoint:"xs"}),{Consumer:i,Provider:o}=s;function l(e,t){const{prefixes:r}=(0,a.useContext)(s);return e||r[t]||t}function c(){const{breakpoints:e}=(0,a.useContext)(s);return e}function u(){const{minBreakpoint:e}=(0,a.useContext)(s);return e}},6942:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=i(e,s(r)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)a.call(e,r)&&e[r]&&(t=i(t,r));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=commons-36b28a6dad21c5ef50fa.js.map