(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{5235:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7913:function(e,t,o){"use strict";var n=o(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,a=o(7273).Z,l=r(o(7294)),u=o(2199),f=o(7389),c=o(1630),i=o(9541),s=o(6163),d=o(7215),p=o(5235),v=o(729),h=new Set;function y(e,t,o,n){if(u.isLocalURL(t)){if(!n.bypassPrefetchedCheck){var r=t+"%"+o+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(h.has(r))return;h.add(r)}Promise.resolve(e.prefetch(t,o,n)).catch(function(e){})}}function b(e){return"string"==typeof e?e:f.formatUrl(e)}var g=l.default.forwardRef(function(e,t){var o,r,f=e.href,h=e.as,g=e.children,_=e.prefetch,m=e.passHref,M=e.replace,C=e.shallow,k=e.scroll,j=e.locale,E=e.onClick,O=e.onMouseEnter,P=e.onTouchStart,w=e.legacyBehavior,x=void 0===w?!0!==Boolean(!0):w,L=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=g,x&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));var R=!1!==_,S=l.default.useContext(i.RouterContext),I=l.default.useContext(s.AppRouterContext),T=null!=S?S:I,N=!S,B=l.default.useMemo(function(){if(!S){var e=b(f);return{href:e,as:h?b(h):e}}var t=n(u.resolveHref(S,f,!0),2),o=t[0],r=t[1];return{href:o,as:h?u.resolveHref(S,h):r||o}},[S,f,h]),D=B.href,H=B.as,K=l.default.useRef(D),U=l.default.useRef(H);x&&(r=l.default.Children.only(o));var A=x?r&&"object"==typeof r&&r.ref:t,Z=n(d.useIntersection({rootMargin:"200px"}),3),q=Z[0],z=Z[1],F=Z[2],G=l.default.useCallback(function(e){(U.current!==H||K.current!==D)&&(F(),U.current=H,K.current=D),q(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[H,A,D,F,q]);l.default.useEffect(function(){T&&z&&R&&y(T,D,H,{locale:j})},[H,D,z,j,R,null==S?void 0:S.locale,T]);var J={ref:G,onClick:function(e){x||"function"!=typeof E||E(e),x&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,o,n,r,a,f,c,i,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&u.isLocalURL(o)){e.preventDefault();var d,p,v=function(){"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:a,locale:c,scroll:f}):t[r?"replace":"push"](n||o,{forceOptimisticNavigation:!s})};i?l.default.startTransition(v):v()}}(e,T,D,H,M,C,k,j,N,R)},onMouseEnter:function(e){x||"function"!=typeof O||O(e),x&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),T&&(R||!N)&&y(T,D,H,{locale:j,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){x||"function"!=typeof P||P(e),x&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),T&&(R||!N)&&y(T,D,H,{locale:j,priority:!0,bypassPrefetchedCheck:!0})}};if(!x||m||"a"===r.type&&!("href"in r.props)){var Q=void 0!==j?j:null==S?void 0:S.locale,V=(null==S?void 0:S.isLocaleDomain)&&p.getDomainLocale(H,Q,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);J.href=V||v.addBasePath(c.addLocale(H,Q,null==S?void 0:S.defaultLocale))}return x?l.default.cloneElement(r,J):l.default.createElement("a",Object.assign({},L,J),o)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,o){"use strict";var n=o(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,c=e.disabled||!l,i=n(r.useState(!1),2),s=i[0],d=i[1],p=n(r.useState(null),2),v=p[0],h=p[1];return r.useEffect(function(){if(l){if(!c&&!s&&v&&v.tagName){var e,n,r,i;return n=(e=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},n=f.find(function(e){return e.root===o.root&&e.margin===o.margin});if(n&&(t=u.get(n)))return t;var r=new Map;return t={id:o,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e),elements:r},f.push(o),u.set(o,t),t}({root:null==t?void 0:t.current,rootMargin:o})).id,r=e.observer,(i=e.elements).set(v,function(e){return e&&d(e)}),r.observe(v),function(){if(i.delete(v),r.unobserve(v),0===i.size){r.disconnect(),u.delete(n);var e=f.findIndex(function(e){return e.root===n.root&&e.margin===n.margin});e>-1&&f.splice(e,1)}}}}else if(!s){var p=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(p)}}},[v,c,o,t,s]),[h,s,r.useCallback(function(){d(!1)},[])]};var r=o(7294),a=o(8065),l="function"==typeof IntersectionObserver,u=new Map,f=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,o){e.exports=o(7913)}}]);