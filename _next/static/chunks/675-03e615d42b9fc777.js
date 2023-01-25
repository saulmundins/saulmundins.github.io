(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{9938:function(e,t,i){"use strict";var n=i(5696),r=i(7980);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return f.ImageLoaderProps}}),t.default=function(e){var t,i,a,l=e.src,b=e.sizes,w=e.unoptimized,S=void 0!==w&&w,z=e.priority,C=void 0!==z&&z,E=e.loading,j=e.className,I=e.quality,_=e.width,L=e.height,x=e.fill,R=e.style,P=e.onLoad,k=e.onLoadingComplete,O=e.placeholder,A=void 0===O?"empty":O,N=e.blurDataURL,q=e.layout,B=e.objectFit,D=e.objectPosition,M=(e.lazyBoundary,e.lazyRoot,s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"])),W=c.useContext(g.ImageConfigContext),F=c.useMemo(function(){var e=m||W||f.imageConfigDefault,t=[].concat(r(e.deviceSizes),r(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return o({},e,{allSizes:t,deviceSizes:i})},[W]),T=M,U=T.loader||h.default;if(delete T.loader,"__next_img_default"in U){if("custom"===F.loader)throw Error('Image with src "'.concat(l,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{var G=U;U=function(e){return e.config,G(s(e,["config"]))}}if(q){"fill"===q&&(x=!0);var Z={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[q];Z&&(R=o({},R,Z));var H={responsive:"100vw",fill:"100vw"}[q];H&&!b&&(b=H)}var V="",J=v(_),$=v(L);if("object"==typeof(t=l)&&(p(t)||void 0!==t.src)){var K=p(l)?l.default:l;if(!K.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(!K.height||!K.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)));if(i=K.blurWidth,a=K.blurHeight,N=N||K.blurDataURL,V=K.src,!x){if(J||$){if(J&&!$){var Q=J/K.width;$=Math.round(K.height*Q)}else if(!J&&$){var X=$/K.height;J=Math.round(K.width*X)}}else J=K.width,$=K.height}}var Y=!C&&("lazy"===E||void 0===E);((l="string"==typeof l?l:V).startsWith("data:")||l.startsWith("blob:"))&&(S=!0,Y=!1),F.unoptimized&&(S=!0);var ee=n(c.useState(!1),2),et=ee[0],ei=ee[1],en=n(c.useState(!1),2),er=en[0],eo=en[1],ea=v(I),el=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:B,objectPosition:D}:{},er?{}:{color:"transparent"},R),es="blur"===A&&N&&!et?{backgroundSize:el.objectFit||"cover",backgroundPosition:el.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(d.getImageBlurSvg({widthInt:J,heightInt:$,blurWidth:i,blurHeight:a,blurDataURL:N}),'")')}:{},ec=function(e){var t=e.config,i=e.src,n=e.unoptimized,o=e.width,a=e.quality,l=e.sizes,s=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var c=function(e,t,i){var n=e.deviceSizes,o=e.allSizes;if(i){for(var a,l=/(^|\s)(1?\d?\d)vw/g,s=[];a=l.exec(i);a)s.push(parseInt(a[2]));if(s.length){var c=.01*Math.min.apply(Math,s);return{widths:o.filter(function(e){return e>=n[0]*c}),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:r(new Set([t,2*t].map(function(e){return o.find(function(t){return t>=e})||o[o.length-1]}))),kind:"x"}}(t,o,l),u=c.widths,d=c.kind,f=u.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:u.map(function(e,n){return"".concat(s({config:t,src:i,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)}).join(", "),src:s({config:t,src:i,quality:a,width:u[f]})}}({config:F,src:l,unoptimized:S,width:J,quality:ea,sizes:b,loader:U}),eu=l,ed={imageSrcSet:ec.srcSet,imageSizes:ec.sizes,crossOrigin:T.crossOrigin},ef=c.useRef(P);c.useEffect(function(){ef.current=P},[P]);var eg=c.useRef(k);c.useEffect(function(){eg.current=k},[k]);var eh=o({isLazy:Y,imgAttributes:ec,heightInt:$,widthInt:J,qualityInt:ea,className:j,imgStyle:el,blurStyle:es,loading:E,config:F,fill:x,unoptimized:S,placeholder:A,loader:U,srcString:eu,onLoadRef:ef,onLoadingCompleteRef:eg,setBlurComplete:ei,setShowAltText:eo},T);return c.default.createElement(c.default.Fragment,null,c.default.createElement(y,Object.assign({},eh)),C?c.default.createElement(u.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+ec.src+ec.srcSet+ec.sizes,rel:"preload",as:"image",href:ec.srcSet?void 0:ec.src},ed))):null)};var o=i(6495).Z,a=i(2648).Z,l=i(1598).Z,s=i(7273).Z,c=l(i(1720)),u=a(i(6505)),d=i(2698),f=i(5980),g=i(1059);i(2783);var h=a(i(1923)),m={deviceSizes:[640,828,1080,1200,1920,2048],imageSizes:[64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function v(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function b(e,t,i,n,r,a,l){e&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode){if("blur"===i&&a(!0),null==n?void 0:n.current){var t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});var l=!1,s=!1;n.current(o({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:function(){return l},isPropagationStopped:function(){return s},persist:function(){},preventDefault:function(){l=!0,t.preventDefault()},stopPropagation:function(){s=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}}))}var y=function(e){var t=e.imgAttributes,i=e.heightInt,n=e.widthInt,r=(e.qualityInt,e.className),a=e.imgStyle,l=e.blurStyle,u=e.isLazy,d=e.fill,f=e.placeholder,g=e.loading,h=e.srcString,m=(e.config,e.unoptimized),p=(e.loader,e.onLoadRef),v=e.onLoadingCompleteRef,y=e.setBlurComplete,w=e.setShowAltText,S=(e.onLoad,e.onError),z=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=u?"lazy":g,c.default.createElement(c.default.Fragment,null,c.default.createElement("img",Object.assign({},z,t,{width:n,height:i,decoding:"async","data-nimg":d?"fill":"1",className:r,loading:g,style:o({},a,l),ref:c.useCallback(function(e){e&&(S&&(e.src=e.src),e.complete&&b(e,h,f,p,v,y,m))},[h,f,p,v,y,S,m]),onLoad:function(e){b(e.currentTarget,h,f,p,v,y,m)},onError:function(e){w(!0),"blur"===f&&y(!0),S&&S(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2698:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){var t=e.widthInt,i=e.heightInt,n=e.blurWidth,r=e.blurHeight,o=e.blurDataURL,a=n||t,l=r||i,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&r?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},1923:function(e,t){"use strict";function i(e){var t=e.config,i=e.src,n=e.width,r=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},5675:function(e,t,i){e.exports=i(9938)}}]);