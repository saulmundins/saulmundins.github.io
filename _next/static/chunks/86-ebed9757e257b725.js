(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86],{3632:function(e,t,o){"use strict";o.d(t,{w:function(){return l}});var n=o(7462),r=o(1720),a=o(7680),l=r.forwardRef(function(e,t){return r.createElement(a.r,(0,n.Z)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),r.createElement("rect",{width:24,height:24,fill:"none"}),r.createElement("path",{d:"M9.29 15.46l3.88-3.88L9.29 7.7a.996.996 0 111.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59a.996.996 0 01-1.41 0c-.38-.39-.39-1.03 0-1.42z"}))});l.displayName="KeyboardArrowRight"},5235:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7913:function(e,t,o){"use strict";var n=o(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,a=o(7273).Z,l=r(o(1720)),u=o(2199),c=o(7389),f=o(1630),i=o(9541),s=o(6163),d=o(7215),p=o(5235),v=o(729),h=new Set;function y(e,t,o,n){if(u.isLocalURL(t)){if(!n.bypassPrefetchedCheck){var r=t+"%"+o+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(h.has(r))return;h.add(r)}Promise.resolve(e.prefetch(t,o,n)).catch(function(e){})}}function b(e){return"string"==typeof e?e:c.formatUrl(e)}var g=l.default.forwardRef(function(e,t){var o,r,c=e.href,h=e.as,g=e.children,m=e.prefetch,_=e.passHref,M=e.replace,C=e.shallow,w=e.scroll,E=e.locale,k=e.onClick,j=e.onMouseEnter,O=e.onTouchStart,P=e.legacyBehavior,x=void 0===P?!0!==Boolean(!0):P,L=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=g,x&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));var R=!1!==m,S=l.default.useContext(i.RouterContext),I=l.default.useContext(s.AppRouterContext),T=null!=S?S:I,N=!S,A=l.default.useMemo(function(){if(!S){var e=b(c);return{href:e,as:h?b(h):e}}var t=n(u.resolveHref(S,c,!0),2),o=t[0],r=t[1];return{href:o,as:h?u.resolveHref(S,h):r||o}},[S,c,h]),B=A.href,K=A.as,D=l.default.useRef(B),H=l.default.useRef(K);x&&(r=l.default.Children.only(o));var U=x?r&&"object"==typeof r&&r.ref:t,Z=n(d.useIntersection({rootMargin:"200px"}),3),z=Z[0],V=Z[1],q=Z[2],F=l.default.useCallback(function(e){(H.current!==K||D.current!==B)&&(q(),H.current=K,D.current=B),z(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[K,U,B,q,z]);l.default.useEffect(function(){T&&V&&R&&y(T,B,K,{locale:E})},[K,B,V,E,R,null==S?void 0:S.locale,T]);var G={ref:F,onClick:function(e){x||"function"!=typeof k||k(e),x&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,o,n,r,a,c,f,i,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&u.isLocalURL(o)){e.preventDefault();var d,p,v=function(){"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:a,locale:f,scroll:c}):t[r?"replace":"push"](n||o,{forceOptimisticNavigation:!s})};i?l.default.startTransition(v):v()}}(e,T,B,K,M,C,w,E,N,R)},onMouseEnter:function(e){x||"function"!=typeof j||j(e),x&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),T&&(R||!N)&&y(T,B,K,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){x||"function"!=typeof O||O(e),x&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),T&&(R||!N)&&y(T,B,K,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if(!x||_||"a"===r.type&&!("href"in r.props)){var J=void 0!==E?E:null==S?void 0:S.locale,Q=(null==S?void 0:S.isLocaleDomain)&&p.getDomainLocale(K,J,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);G.href=Q||v.addBasePath(f.addLocale(K,J,null==S?void 0:S.defaultLocale))}return x?l.default.cloneElement(r,G):l.default.createElement("a",Object.assign({},L,G),o)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,o){"use strict";var n=o(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,f=e.disabled||!l,i=n(r.useState(!1),2),s=i[0],d=i[1],p=n(r.useState(null),2),v=p[0],h=p[1];return r.useEffect(function(){if(l){if(!f&&!s&&v&&v.tagName){var e,n,r,i,p;return e=function(e){return e&&d(e)},r=(n=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===o.root&&e.margin===o.margin});if(n&&(t=u.get(n)))return t;var r=new Map;return t={id:o,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e),elements:r},c.push(o),u.set(o,t),t}({root:null==t?void 0:t.current,rootMargin:o})).id,i=n.observer,(p=n.elements).set(v,e),i.observe(v),function(){if(p.delete(v),i.unobserve(v),0===p.size){i.disconnect(),u.delete(r);var e=c.findIndex(function(e){return e.root===r.root&&e.margin===r.margin});e>-1&&c.splice(e,1)}}}}else if(!s){var h=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(h)}}},[v,f,o,t,s]),[h,s,r.useCallback(function(){d(!1)},[])]};var r=o(1720),a=o(8065),l="function"==typeof IntersectionObserver,u=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,o){e.exports=o(7913)}}]);