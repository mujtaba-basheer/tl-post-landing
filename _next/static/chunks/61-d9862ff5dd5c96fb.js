(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{5235:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9938:function(e,t,o){"use strict";var n=o(5696),r=o(7980);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,o,a,l=e.src,y=e.sizes,w=e.unoptimized,S=void 0!==w&&w,C=e.priority,_=void 0!==C&&C,E=e.loading,j=e.className,z=e.quality,x=e.width,I=e.height,L=e.fill,M=e.style,R=e.onLoad,k=e.onLoadingComplete,P=e.placeholder,O=void 0===P?"empty":P,A=e.blurDataURL,N=e.layout,T=e.objectFit,B=e.objectPosition,D=(e.lazyBoundary,e.lazyRoot,u(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"])),q=c.useContext(p.ImageConfigContext),U=c.useMemo(function(){var e=h||q||d.imageConfigDefault,t=[].concat(r(e.deviceSizes),r(e.imageSizes)).sort(function(e,t){return e-t}),o=e.deviceSizes.sort(function(e,t){return e-t});return i({},e,{allSizes:t,deviceSizes:o})},[q]),W=D,F=W.loader||g.default;if(delete W.loader,"__next_img_default"in F){if("custom"===U.loader)throw Error('Image with src "'.concat(l,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{var H=F;F=function(e){return e.config,H(u(e,["config"]))}}if(N){"fill"===N&&(L=!0);var Z={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];Z&&(M=i({},M,Z));var G={responsive:"100vw",fill:"100vw"}[N];G&&!y&&(y=G)}var K="",V=m(x),J=m(I);if("object"==typeof(t=l)&&(v(t)||void 0!==t.src)){var $=v(l)?l.default:l;if(!$.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify($)));if(!$.height||!$.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify($)));if(o=$.blurWidth,a=$.blurHeight,A=A||$.blurDataURL,K=$.src,!L){if(V||J){if(V&&!J){var Q=V/$.width;J=Math.round($.height*Q)}else if(!V&&J){var X=J/$.height;V=Math.round($.width*X)}}else V=$.width,J=$.height}}var Y=!_&&("lazy"===E||void 0===E);((l="string"==typeof l?l:K).startsWith("data:")||l.startsWith("blob:"))&&(S=!0,Y=!1),U.unoptimized&&(S=!0);var ee=n(c.useState(!1),2),et=ee[0],eo=ee[1],en=n(c.useState(!1),2),er=en[0],ei=en[1],ea=m(z),el=Object.assign(L?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:T,objectPosition:B}:{},er?{}:{color:"transparent"},M),eu="blur"===O&&A&&!et?{backgroundSize:el.objectFit||"cover",backgroundPosition:el.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(f.getImageBlurSvg({widthInt:V,heightInt:J,blurWidth:o,blurHeight:a,blurDataURL:A}),'")')}:{},ec=function(e){var t=e.config,o=e.src,n=e.unoptimized,i=e.width,a=e.quality,l=e.sizes,u=e.loader;if(n)return{src:o,srcSet:void 0,sizes:void 0};var c=function(e,t,o){var n=e.deviceSizes,i=e.allSizes;if(o){for(var a,l=/(^|\s)(1?\d?\d)vw/g,u=[];a=l.exec(o);a)u.push(parseInt(a[2]));if(u.length){var c=.01*Math.min.apply(Math,u);return{widths:i.filter(function(e){return e>=n[0]*c}),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:r(new Set([t,2*t].map(function(e){return i.find(function(t){return t>=e})||i[i.length-1]}))),kind:"x"}}(t,i,l),s=c.widths,f=c.kind,d=s.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:s.map(function(e,n){return"".concat(u({config:t,src:o,quality:a,width:e})," ").concat("w"===f?e:n+1).concat(f)}).join(", "),src:u({config:t,src:o,quality:a,width:s[d]})}}({config:U,src:l,unoptimized:S,width:V,quality:ea,sizes:y,loader:F}),es=l,ef={imageSrcSet:ec.srcSet,imageSizes:ec.sizes,crossOrigin:W.crossOrigin},ed=c.useRef(R);c.useEffect(function(){ed.current=R},[R]);var ep=c.useRef(k);c.useEffect(function(){ep.current=k},[k]);var eg=i({isLazy:Y,imgAttributes:ec,heightInt:J,widthInt:V,qualityInt:ea,className:j,imgStyle:el,blurStyle:eu,loading:E,config:U,fill:L,unoptimized:S,placeholder:O,loader:F,srcString:es,onLoadRef:ed,onLoadingCompleteRef:ep,setBlurComplete:eo,setShowAltText:ei},W);return c.default.createElement(c.default.Fragment,null,c.default.createElement(b,Object.assign({},eg)),_?c.default.createElement(s.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+ec.src+ec.srcSet+ec.sizes,rel:"preload",as:"image",href:ec.srcSet?void 0:ec.src},ef))):null)};var i=o(6495).Z,a=o(2648).Z,l=o(1598).Z,u=o(7273).Z,c=l(o(7294)),s=a(o(6505)),f=o(7675),d=o(5980),p=o(1059);o(2783);var g=a(o(1923)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/tl-post-landing/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function v(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function y(e,t,o,n,r,a,l){e&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode){if("blur"===o&&a(!0),null==n?void 0:n.current){var t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});var l=!1,u=!1;n.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:function(){return l},isPropagationStopped:function(){return u},persist:function(){},preventDefault:function(){l=!0,t.preventDefault()},stopPropagation:function(){u=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}}))}var b=function(e){var t=e.imgAttributes,o=e.heightInt,n=e.widthInt,r=(e.qualityInt,e.className),a=e.imgStyle,l=e.blurStyle,s=e.isLazy,f=e.fill,d=e.placeholder,p=e.loading,g=e.srcString,h=(e.config,e.unoptimized),v=(e.loader,e.onLoadRef),m=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setShowAltText,S=(e.onLoad,e.onError),C=u(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=s?"lazy":p,c.default.createElement(c.default.Fragment,null,c.default.createElement("img",Object.assign({},C,t,{width:n,height:o,decoding:"async","data-nimg":f?"fill":"1",className:r,loading:p,style:i({},a,l),ref:c.useCallback(function(e){e&&(S&&(e.src=e.src),e.complete&&y(e,g,d,v,m,b,h))},[g,d,v,m,b,S,h]),onLoad:function(e){y(e.currentTarget,g,d,v,m,b,h)},onError:function(e){w(!0),"blur"===d&&b(!0),S&&S(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7913:function(e,t,o){"use strict";var n=o(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,i=o(7273).Z,a=r(o(7294)),l=o(2199),u=o(7389),c=o(1630),s=o(9541),f=o(6163),d=o(7215),p=o(5235),g=o(729),h=new Set;function v(e,t,o,n){if(l.isLocalURL(t)){if(!n.bypassPrefetchedCheck){var r=t+"%"+o+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(h.has(r))return;h.add(r)}Promise.resolve(e.prefetch(t,o,n)).catch(function(e){})}}function m(e){return"string"==typeof e?e:u.formatUrl(e)}var y=a.default.forwardRef(function(e,t){var o,r,u=e.href,h=e.as,y=e.children,b=e.prefetch,w=e.passHref,S=e.replace,C=e.shallow,_=e.scroll,E=e.locale,j=e.onClick,z=e.onMouseEnter,x=e.onTouchStart,I=e.legacyBehavior,L=void 0===I?!0!==Boolean(!0):I,M=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=y,L&&("string"==typeof o||"number"==typeof o)&&(o=a.default.createElement("a",null,o));var R=!1!==b,k=a.default.useContext(s.RouterContext),P=a.default.useContext(f.AppRouterContext),O=null!=k?k:P,A=!k,N=a.default.useMemo(function(){if(!k){var e=m(u);return{href:e,as:h?m(h):e}}var t=n(l.resolveHref(k,u,!0),2),o=t[0],r=t[1];return{href:o,as:h?l.resolveHref(k,h):r||o}},[k,u,h]),T=N.href,B=N.as,D=a.default.useRef(T),q=a.default.useRef(B);L&&(r=a.default.Children.only(o));var U=L?r&&"object"==typeof r&&r.ref:t,W=n(d.useIntersection({rootMargin:"200px"}),3),F=W[0],H=W[1],Z=W[2],G=a.default.useCallback(function(e){(q.current!==B||D.current!==T)&&(Z(),q.current=B,D.current=T),F(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[B,U,T,Z,F]);a.default.useEffect(function(){O&&H&&R&&v(O,T,B,{locale:E})},[B,T,H,E,R,null==k?void 0:k.locale,O]);var K={ref:G,onClick:function(e){L||"function"!=typeof j||j(e),L&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),O&&!e.defaultPrevented&&function(e,t,o,n,r,i,u,c,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&l.isLocalURL(o)){e.preventDefault();var d,p,g=function(){"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:i,locale:c,scroll:u}):t[r?"replace":"push"](n||o,{forceOptimisticNavigation:!f})};s?a.default.startTransition(g):g()}}(e,O,T,B,S,C,_,E,A,R)},onMouseEnter:function(e){L||"function"!=typeof z||z(e),L&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),O&&(R||!A)&&v(O,T,B,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){L||"function"!=typeof x||x(e),L&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),O&&(R||!A)&&v(O,T,B,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if(!L||w||"a"===r.type&&!("href"in r.props)){var V=void 0!==E?E:null==k?void 0:k.locale,J=(null==k?void 0:k.isLocaleDomain)&&p.getDomainLocale(B,V,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);K.href=J||g.addBasePath(c.addLocale(B,V,null==k?void 0:k.defaultLocale))}return L?a.default.cloneElement(r,K):a.default.createElement("a",Object.assign({},M,K),o)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,o){"use strict";var n=o(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,c=e.disabled||!a,s=n(r.useState(!1),2),f=s[0],d=s[1],p=n(r.useState(null),2),g=p[0],h=p[1];return r.useEffect(function(){if(a){if(!c&&!f&&g&&g.tagName){var e,n,r,s;return n=(e=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},n=u.find(function(e){return e.root===o.root&&e.margin===o.margin});if(n&&(t=l.get(n)))return t;var r=new Map;return t={id:o,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e),elements:r},u.push(o),l.set(o,t),t}({root:null==t?void 0:t.current,rootMargin:o})).id,r=e.observer,(s=e.elements).set(g,function(e){return e&&d(e)}),r.observe(g),function(){if(s.delete(g),r.unobserve(g),0===s.size){r.disconnect(),l.delete(n);var e=u.findIndex(function(e){return e.root===n.root&&e.margin===n.margin});e>-1&&u.splice(e,1)}}}}else if(!f){var p=i.requestIdleCallback(function(){return d(!0)});return function(){return i.cancelIdleCallback(p)}}},[g,c,o,t,f]),[h,f,r.useCallback(function(){d(!1)},[])]};var r=o(7294),i=o(8065),a="function"==typeof IntersectionObserver,l=new Map,u=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){var t=e.widthInt,o=e.heightInt,n=e.blurWidth,r=e.blurHeight,i=e.blurDataURL,a=n||t,l=r||o,u=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&r?"1":"20","'/%3E").concat(u,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i,"'/%3E%3C/svg%3E")}},1923:function(e,t){"use strict";function o(e){var t=e.config,o=e.src,n=e.width,r=e.quality;return o.endsWith(".svg")&&!t.dangerouslyAllowSVG?o:"".concat(t.path,"?url=").concat(encodeURIComponent(o),"&w=").concat(n,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o.__next_img_default=!0,t.default=o},5675:function(e,t,o){e.exports=o(9938)},1664:function(e,t,o){e.exports=o(7913)}}]);