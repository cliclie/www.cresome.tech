(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Uy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var wv={exports:{}},Wc={},Av={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),Fy=Symbol.for("react.portal"),Oy=Symbol.for("react.fragment"),ky=Symbol.for("react.strict_mode"),By=Symbol.for("react.profiler"),zy=Symbol.for("react.provider"),Vy=Symbol.for("react.context"),Hy=Symbol.for("react.forward_ref"),Gy=Symbol.for("react.suspense"),Wy=Symbol.for("react.memo"),Xy=Symbol.for("react.lazy"),um=Symbol.iterator;function Yy(n){return n===null||typeof n!="object"?null:(n=um&&n[um]||n["@@iterator"],typeof n=="function"?n:null)}var bv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rv=Object.assign,Cv={};function po(n,e,t){this.props=n,this.context=e,this.refs=Cv,this.updater=t||bv}po.prototype.isReactComponent={};po.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};po.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Pv(){}Pv.prototype=po.prototype;function Rh(n,e,t){this.props=n,this.context=e,this.refs=Cv,this.updater=t||bv}var Ch=Rh.prototype=new Pv;Ch.constructor=Rh;Rv(Ch,po.prototype);Ch.isPureReactComponent=!0;var fm=Array.isArray,Lv=Object.prototype.hasOwnProperty,Ph={current:null},Nv={key:!0,ref:!0,__self:!0,__source:!0};function Iv(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Lv.call(e,i)&&!Nv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Oa,type:n,key:s,ref:o,props:r,_owner:Ph.current}}function Ky(n,e){return{$$typeof:Oa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Lh(n){return typeof n=="object"&&n!==null&&n.$$typeof===Oa}function qy(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var dm=/\/+/g;function pu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?qy(""+n.key):e.toString(36)}function Xl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Oa:case Fy:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+pu(o,0):i,fm(r)?(t="",n!=null&&(t=n.replace(dm,"$&/")+"/"),Xl(r,e,t,"",function(c){return c})):r!=null&&(Lh(r)&&(r=Ky(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(dm,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",fm(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+pu(s,a);o+=Xl(s,e,t,l,r)}else if(l=Yy(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+pu(s,a++),o+=Xl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xa(n,e,t){if(n==null)return n;var i=[],r=0;return Xl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function $y(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var xn={current:null},Yl={transition:null},jy={ReactCurrentDispatcher:xn,ReactCurrentBatchConfig:Yl,ReactCurrentOwner:Ph};function Dv(){throw Error("act(...) is not supported in production builds of React.")}lt.Children={map:Xa,forEach:function(n,e,t){Xa(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Xa(n,function(){e++}),e},toArray:function(n){return Xa(n,function(e){return e})||[]},only:function(n){if(!Lh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};lt.Component=po;lt.Fragment=Oy;lt.Profiler=By;lt.PureComponent=Rh;lt.StrictMode=ky;lt.Suspense=Gy;lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jy;lt.act=Dv;lt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Rv({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ph.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Lv.call(e,l)&&!Nv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Oa,type:n.type,key:r,ref:s,props:i,_owner:o}};lt.createContext=function(n){return n={$$typeof:Vy,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:zy,_context:n},n.Consumer=n};lt.createElement=Iv;lt.createFactory=function(n){var e=Iv.bind(null,n);return e.type=n,e};lt.createRef=function(){return{current:null}};lt.forwardRef=function(n){return{$$typeof:Hy,render:n}};lt.isValidElement=Lh;lt.lazy=function(n){return{$$typeof:Xy,_payload:{_status:-1,_result:n},_init:$y}};lt.memo=function(n,e){return{$$typeof:Wy,type:n,compare:e===void 0?null:e}};lt.startTransition=function(n){var e=Yl.transition;Yl.transition={};try{n()}finally{Yl.transition=e}};lt.unstable_act=Dv;lt.useCallback=function(n,e){return xn.current.useCallback(n,e)};lt.useContext=function(n){return xn.current.useContext(n)};lt.useDebugValue=function(){};lt.useDeferredValue=function(n){return xn.current.useDeferredValue(n)};lt.useEffect=function(n,e){return xn.current.useEffect(n,e)};lt.useId=function(){return xn.current.useId()};lt.useImperativeHandle=function(n,e,t){return xn.current.useImperativeHandle(n,e,t)};lt.useInsertionEffect=function(n,e){return xn.current.useInsertionEffect(n,e)};lt.useLayoutEffect=function(n,e){return xn.current.useLayoutEffect(n,e)};lt.useMemo=function(n,e){return xn.current.useMemo(n,e)};lt.useReducer=function(n,e,t){return xn.current.useReducer(n,e,t)};lt.useRef=function(n){return xn.current.useRef(n)};lt.useState=function(n){return xn.current.useState(n)};lt.useSyncExternalStore=function(n,e,t){return xn.current.useSyncExternalStore(n,e,t)};lt.useTransition=function(){return xn.current.useTransition()};lt.version="18.3.1";Av.exports=lt;var St=Av.exports;const Zy=Uy(St);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jy=St,Qy=Symbol.for("react.element"),eS=Symbol.for("react.fragment"),tS=Object.prototype.hasOwnProperty,nS=Jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iS={key:!0,ref:!0,__self:!0,__source:!0};function Uv(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)tS.call(e,i)&&!iS.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Qy,type:n,key:s,ref:o,props:r,_owner:nS.current}}Wc.Fragment=eS;Wc.jsx=Uv;Wc.jsxs=Uv;wv.exports=Wc;var j=wv.exports,zf={},Fv={exports:{}},On={},Ov={exports:{}},kv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,H){var J=U.length;U.push(H);e:for(;0<J;){var ce=J-1>>>1,Se=U[ce];if(0<r(Se,H))U[ce]=H,U[J]=Se,J=ce;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var H=U[0],J=U.pop();if(J!==H){U[0]=J;e:for(var ce=0,Se=U.length,qe=Se>>>1;ce<qe;){var rt=2*(ce+1)-1,Ge=U[rt],Q=rt+1,se=U[Q];if(0>r(Ge,J))Q<Se&&0>r(se,Ge)?(U[ce]=se,U[Q]=J,ce=Q):(U[ce]=Ge,U[rt]=J,ce=rt);else if(Q<Se&&0>r(se,J))U[ce]=se,U[Q]=J,ce=Q;else break e}}return H}function r(U,H){var J=U.sortIndex-H.sortIndex;return J!==0?J:U.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,m=!1,g=!1,v=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(U){for(var H=t(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=U)i(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=t(c)}}function M(U){if(g=!1,S(U),!m)if(t(l)!==null)m=!0,$(T);else{var H=t(c);H!==null&&Y(M,H.startTime-U)}}function T(U,H){m=!1,g&&(g=!1,h(x),x=-1),p=!0;var J=f;try{for(S(H),d=t(l);d!==null&&(!(d.expirationTime>H)||U&&!L());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,f=d.priorityLevel;var Se=ce(d.expirationTime<=H);H=n.unstable_now(),typeof Se=="function"?d.callback=Se:d===t(l)&&i(l),S(H)}else i(l);d=t(l)}if(d!==null)var qe=!0;else{var rt=t(c);rt!==null&&Y(M,rt.startTime-H),qe=!1}return qe}finally{d=null,f=J,p=!1}}var E=!1,A=null,x=-1,b=5,P=-1;function L(){return!(n.unstable_now()-P<b)}function O(){if(A!==null){var U=n.unstable_now();P=U;var H=!0;try{H=A(!0,U)}finally{H?Z():(E=!1,A=null)}}else E=!1}var Z;if(typeof _=="function")Z=function(){_(O)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,k=te.port2;te.port1.onmessage=O,Z=function(){k.postMessage(null)}}else Z=function(){v(O,0)};function $(U){A=U,E||(E=!0,Z())}function Y(U,H){x=v(function(){U(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){m||p||(m=!0,$(T))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(f){case 1:case 2:case 3:var H=3;break;default:H=f}var J=f;f=H;try{return U()}finally{f=J}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=f;f=U;try{return H()}finally{f=J}},n.unstable_scheduleCallback=function(U,H,J){var ce=n.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ce+J:ce):J=ce,U){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=J+Se,U={id:u++,callback:H,priorityLevel:U,startTime:J,expirationTime:Se,sortIndex:-1},J>ce?(U.sortIndex=J,e(c,U),t(l)===null&&U===t(c)&&(g?(h(x),x=-1):g=!0,Y(M,J-ce))):(U.sortIndex=Se,e(l,U),m||p||(m=!0,$(T))),U},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(U){var H=f;return function(){var J=f;f=H;try{return U.apply(this,arguments)}finally{f=J}}}})(kv);Ov.exports=kv;var rS=Ov.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sS=St,Un=rS;function xe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bv=new Set,da={};function cs(n,e){eo(n,e),eo(n+"Capture",e)}function eo(n,e){for(da[n]=e,n=0;n<e.length;n++)Bv.add(e[n])}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vf=Object.prototype.hasOwnProperty,oS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hm={},pm={};function aS(n){return Vf.call(pm,n)?!0:Vf.call(hm,n)?!1:oS.test(n)?pm[n]=!0:(hm[n]=!0,!1)}function lS(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function cS(n,e,t,i){if(e===null||typeof e>"u"||lS(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){nn[n]=new yn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];nn[e]=new yn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){nn[n]=new yn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){nn[n]=new yn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){nn[n]=new yn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){nn[n]=new yn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){nn[n]=new yn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){nn[n]=new yn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){nn[n]=new yn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Nh=/[\-:]([a-z])/g;function Ih(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Nh,Ih);nn[e]=new yn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Nh,Ih);nn[e]=new yn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Nh,Ih);nn[e]=new yn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){nn[n]=new yn(n,1,!1,n.toLowerCase(),null,!1,!1)});nn.xlinkHref=new yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){nn[n]=new yn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Dh(n,e,t,i){var r=nn.hasOwnProperty(e)?nn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cS(e,t,r,i)&&(t=null),i||r===null?aS(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var nr=sS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),Ns=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),Uh=Symbol.for("react.strict_mode"),Hf=Symbol.for("react.profiler"),zv=Symbol.for("react.provider"),Vv=Symbol.for("react.context"),Fh=Symbol.for("react.forward_ref"),Gf=Symbol.for("react.suspense"),Wf=Symbol.for("react.suspense_list"),Oh=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),Hv=Symbol.for("react.offscreen"),mm=Symbol.iterator;function Mo(n){return n===null||typeof n!="object"?null:(n=mm&&n[mm]||n["@@iterator"],typeof n=="function"?n:null)}var Pt=Object.assign,mu;function Xo(n){if(mu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);mu=e&&e[1]||""}return`
`+mu+n}var gu=!1;function vu(n,e){if(!n||gu)return"";gu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{gu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Xo(n):""}function uS(n){switch(n.tag){case 5:return Xo(n.type);case 16:return Xo("Lazy");case 13:return Xo("Suspense");case 19:return Xo("SuspenseList");case 0:case 2:case 15:return n=vu(n.type,!1),n;case 11:return n=vu(n.type.render,!1),n;case 1:return n=vu(n.type,!0),n;default:return""}}function Xf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Is:return"Fragment";case Ns:return"Portal";case Hf:return"Profiler";case Uh:return"StrictMode";case Gf:return"Suspense";case Wf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Vv:return(n.displayName||"Context")+".Consumer";case zv:return(n._context.displayName||"Context")+".Provider";case Fh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Oh:return e=n.displayName||null,e!==null?e:Xf(n.type)||"Memo";case gr:e=n._payload,n=n._init;try{return Xf(n(e))}catch{}}return null}function fS(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xf(e);case 8:return e===Uh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Gv(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dS(n){var e=Gv(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ka(n){n._valueTracker||(n._valueTracker=dS(n))}function Wv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Gv(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function uc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Yf(n,e){var t=e.checked;return Pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function gm(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ir(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xv(n,e){e=e.checked,e!=null&&Dh(n,"checked",e,!1)}function Kf(n,e){Xv(n,e);var t=Ir(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?qf(n,e.type,t):e.hasOwnProperty("defaultValue")&&qf(n,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function vm(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function qf(n,e,t){(e!=="number"||uc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Yo=Array.isArray;function Ws(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ir(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function $f(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(xe(91));return Pt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _m(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(xe(92));if(Yo(t)){if(1<t.length)throw Error(xe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ir(t)}}function Yv(n,e){var t=Ir(e.value),i=Ir(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function xm(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Kv(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Kv(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var qa,qv=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(qa=qa||document.createElement("div"),qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qa.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ha(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hS=["Webkit","ms","Moz","O"];Object.keys(Jo).forEach(function(n){hS.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Jo[e]=Jo[n]})});function $v(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Jo.hasOwnProperty(n)&&Jo[n]?(""+e).trim():e+"px"}function jv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=$v(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var pS=Pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zf(n,e){if(e){if(pS[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(xe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(xe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(xe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(xe(62))}}function Jf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qf=null;function kh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ed=null,Xs=null,Ys=null;function ym(n){if(n=za(n)){if(typeof ed!="function")throw Error(xe(280));var e=n.stateNode;e&&(e=$c(e),ed(n.stateNode,n.type,e))}}function Zv(n){Xs?Ys?Ys.push(n):Ys=[n]:Xs=n}function Jv(){if(Xs){var n=Xs,e=Ys;if(Ys=Xs=null,ym(n),e)for(n=0;n<e.length;n++)ym(e[n])}}function Qv(n,e){return n(e)}function e_(){}var _u=!1;function t_(n,e,t){if(_u)return n(e,t);_u=!0;try{return Qv(n,e,t)}finally{_u=!1,(Xs!==null||Ys!==null)&&(e_(),Jv())}}function pa(n,e){var t=n.stateNode;if(t===null)return null;var i=$c(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(xe(231,e,typeof t));return t}var td=!1;if($i)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){td=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{td=!1}function mS(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Qo=!1,fc=null,dc=!1,nd=null,gS={onError:function(n){Qo=!0,fc=n}};function vS(n,e,t,i,r,s,o,a,l){Qo=!1,fc=null,mS.apply(gS,arguments)}function _S(n,e,t,i,r,s,o,a,l){if(vS.apply(this,arguments),Qo){if(Qo){var c=fc;Qo=!1,fc=null}else throw Error(xe(198));dc||(dc=!0,nd=c)}}function us(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function n_(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Sm(n){if(us(n)!==n)throw Error(xe(188))}function xS(n){var e=n.alternate;if(!e){if(e=us(n),e===null)throw Error(xe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Sm(r),n;if(s===i)return Sm(r),e;s=s.sibling}throw Error(xe(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(xe(189))}}if(t.alternate!==i)throw Error(xe(190))}if(t.tag!==3)throw Error(xe(188));return t.stateNode.current===t?n:e}function i_(n){return n=xS(n),n!==null?r_(n):null}function r_(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=r_(n);if(e!==null)return e;n=n.sibling}return null}var s_=Un.unstable_scheduleCallback,Mm=Un.unstable_cancelCallback,yS=Un.unstable_shouldYield,SS=Un.unstable_requestPaint,Ft=Un.unstable_now,MS=Un.unstable_getCurrentPriorityLevel,Bh=Un.unstable_ImmediatePriority,o_=Un.unstable_UserBlockingPriority,hc=Un.unstable_NormalPriority,ES=Un.unstable_LowPriority,a_=Un.unstable_IdlePriority,Xc=null,Ei=null;function TS(n){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(Xc,n,void 0,(n.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:bS,wS=Math.log,AS=Math.LN2;function bS(n){return n>>>=0,n===0?32:31-(wS(n)/AS|0)|0}var $a=64,ja=4194304;function Ko(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ko(a):(s&=o,s!==0&&(i=Ko(s)))}else o=t&~r,o!==0?i=Ko(o):s!==0&&(i=Ko(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ai(e),r=1<<t,i|=n[t],e&=~r;return i}function RS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function CS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ai(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=RS(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function id(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function l_(){var n=$a;return $a<<=1,!($a&4194240)&&($a=64),n}function xu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ka(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ai(e),n[e]=t}function PS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ai(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function zh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ai(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var mt=0;function c_(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var u_,Vh,f_,d_,h_,rd=!1,Za=[],wr=null,Ar=null,br=null,ma=new Map,ga=new Map,_r=[],LS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Em(n,e){switch(n){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ga.delete(e.pointerId)}}function To(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=za(e),e!==null&&Vh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function NS(n,e,t,i,r){switch(e){case"focusin":return wr=To(wr,n,e,t,i,r),!0;case"dragenter":return Ar=To(Ar,n,e,t,i,r),!0;case"mouseover":return br=To(br,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ma.set(s,To(ma.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ga.set(s,To(ga.get(s)||null,n,e,t,i,r)),!0}return!1}function p_(n){var e=jr(n.target);if(e!==null){var t=us(e);if(t!==null){if(e=t.tag,e===13){if(e=n_(t),e!==null){n.blockedOn=e,h_(n.priority,function(){f_(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Kl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=sd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Qf=i,t.target.dispatchEvent(i),Qf=null}else return e=za(t),e!==null&&Vh(e),n.blockedOn=t,!1;e.shift()}return!0}function Tm(n,e,t){Kl(n)&&t.delete(e)}function IS(){rd=!1,wr!==null&&Kl(wr)&&(wr=null),Ar!==null&&Kl(Ar)&&(Ar=null),br!==null&&Kl(br)&&(br=null),ma.forEach(Tm),ga.forEach(Tm)}function wo(n,e){n.blockedOn===e&&(n.blockedOn=null,rd||(rd=!0,Un.unstable_scheduleCallback(Un.unstable_NormalPriority,IS)))}function va(n){function e(r){return wo(r,n)}if(0<Za.length){wo(Za[0],n);for(var t=1;t<Za.length;t++){var i=Za[t];i.blockedOn===n&&(i.blockedOn=null)}}for(wr!==null&&wo(wr,n),Ar!==null&&wo(Ar,n),br!==null&&wo(br,n),ma.forEach(e),ga.forEach(e),t=0;t<_r.length;t++)i=_r[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<_r.length&&(t=_r[0],t.blockedOn===null);)p_(t),t.blockedOn===null&&_r.shift()}var Ks=nr.ReactCurrentBatchConfig,mc=!0;function DS(n,e,t,i){var r=mt,s=Ks.transition;Ks.transition=null;try{mt=1,Hh(n,e,t,i)}finally{mt=r,Ks.transition=s}}function US(n,e,t,i){var r=mt,s=Ks.transition;Ks.transition=null;try{mt=4,Hh(n,e,t,i)}finally{mt=r,Ks.transition=s}}function Hh(n,e,t,i){if(mc){var r=sd(n,e,t,i);if(r===null)Cu(n,e,i,gc,t),Em(n,i);else if(NS(r,n,e,t,i))i.stopPropagation();else if(Em(n,i),e&4&&-1<LS.indexOf(n)){for(;r!==null;){var s=za(r);if(s!==null&&u_(s),s=sd(n,e,t,i),s===null&&Cu(n,e,i,gc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Cu(n,e,i,null,t)}}var gc=null;function sd(n,e,t,i){if(gc=null,n=kh(i),n=jr(n),n!==null)if(e=us(n),e===null)n=null;else if(t=e.tag,t===13){if(n=n_(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return gc=n,null}function m_(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(MS()){case Bh:return 1;case o_:return 4;case hc:case ES:return 16;case a_:return 536870912;default:return 16}default:return 16}}var Sr=null,Gh=null,ql=null;function g_(){if(ql)return ql;var n,e=Gh,t=e.length,i,r="value"in Sr?Sr.value:Sr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return ql=r.slice(n,1<i?1-i:void 0)}function $l(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ja(){return!0}function wm(){return!1}function kn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ja:wm,this.isPropagationStopped=wm,this}return Pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),e}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wh=kn(mo),Ba=Pt({},mo,{view:0,detail:0}),FS=kn(Ba),yu,Su,Ao,Yc=Pt({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ao&&(Ao&&n.type==="mousemove"?(yu=n.screenX-Ao.screenX,Su=n.screenY-Ao.screenY):Su=yu=0,Ao=n),yu)},movementY:function(n){return"movementY"in n?n.movementY:Su}}),Am=kn(Yc),OS=Pt({},Yc,{dataTransfer:0}),kS=kn(OS),BS=Pt({},Ba,{relatedTarget:0}),Mu=kn(BS),zS=Pt({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),VS=kn(zS),HS=Pt({},mo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),GS=kn(HS),WS=Pt({},mo,{data:0}),bm=kn(WS),XS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=KS[n])?!!e[n]:!1}function Xh(){return qS}var $S=Pt({},Ba,{key:function(n){if(n.key){var e=XS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=$l(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?YS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xh,charCode:function(n){return n.type==="keypress"?$l(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?$l(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),jS=kn($S),ZS=Pt({},Yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rm=kn(ZS),JS=Pt({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xh}),QS=kn(JS),eM=Pt({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),tM=kn(eM),nM=Pt({},Yc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),iM=kn(nM),rM=[9,13,27,32],Yh=$i&&"CompositionEvent"in window,ea=null;$i&&"documentMode"in document&&(ea=document.documentMode);var sM=$i&&"TextEvent"in window&&!ea,v_=$i&&(!Yh||ea&&8<ea&&11>=ea),Cm=" ",Pm=!1;function __(n,e){switch(n){case"keyup":return rM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x_(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ds=!1;function oM(n,e){switch(n){case"compositionend":return x_(e);case"keypress":return e.which!==32?null:(Pm=!0,Cm);case"textInput":return n=e.data,n===Cm&&Pm?null:n;default:return null}}function aM(n,e){if(Ds)return n==="compositionend"||!Yh&&__(n,e)?(n=g_(),ql=Gh=Sr=null,Ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return v_&&e.locale!=="ko"?null:e.data;default:return null}}var lM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!lM[n.type]:e==="textarea"}function y_(n,e,t,i){Zv(i),e=vc(e,"onChange"),0<e.length&&(t=new Wh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ta=null,_a=null;function cM(n){L_(n,0)}function Kc(n){var e=Os(n);if(Wv(e))return n}function uM(n,e){if(n==="change")return e}var S_=!1;if($i){var Eu;if($i){var Tu="oninput"in document;if(!Tu){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),Tu=typeof Nm.oninput=="function"}Eu=Tu}else Eu=!1;S_=Eu&&(!document.documentMode||9<document.documentMode)}function Im(){ta&&(ta.detachEvent("onpropertychange",M_),_a=ta=null)}function M_(n){if(n.propertyName==="value"&&Kc(_a)){var e=[];y_(e,_a,n,kh(n)),t_(cM,e)}}function fM(n,e,t){n==="focusin"?(Im(),ta=e,_a=t,ta.attachEvent("onpropertychange",M_)):n==="focusout"&&Im()}function dM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Kc(_a)}function hM(n,e){if(n==="click")return Kc(e)}function pM(n,e){if(n==="input"||n==="change")return Kc(e)}function mM(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ui=typeof Object.is=="function"?Object.is:mM;function xa(n,e){if(ui(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Vf.call(e,r)||!ui(n[r],e[r]))return!1}return!0}function Dm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Um(n,e){var t=Dm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Dm(t)}}function E_(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?E_(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function T_(){for(var n=window,e=uc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=uc(n.document)}return e}function Kh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function gM(n){var e=T_(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&E_(t.ownerDocument.documentElement,t)){if(i!==null&&Kh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Um(t,s);var o=Um(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var vM=$i&&"documentMode"in document&&11>=document.documentMode,Us=null,od=null,na=null,ad=!1;function Fm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ad||Us==null||Us!==uc(i)||(i=Us,"selectionStart"in i&&Kh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),na&&xa(na,i)||(na=i,i=vc(od,"onSelect"),0<i.length&&(e=new Wh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Us)))}function Qa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Fs={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},wu={},w_={};$i&&(w_=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function qc(n){if(wu[n])return wu[n];if(!Fs[n])return n;var e=Fs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in w_)return wu[n]=e[t];return n}var A_=qc("animationend"),b_=qc("animationiteration"),R_=qc("animationstart"),C_=qc("transitionend"),P_=new Map,Om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(n,e){P_.set(n,e),cs(e,[n])}for(var Au=0;Au<Om.length;Au++){var bu=Om[Au],_M=bu.toLowerCase(),xM=bu[0].toUpperCase()+bu.slice(1);Fr(_M,"on"+xM)}Fr(A_,"onAnimationEnd");Fr(b_,"onAnimationIteration");Fr(R_,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(C_,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yM=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function km(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,_S(i,e,void 0,n),n.currentTarget=null}function L_(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;km(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;km(r,a,c),s=l}}}if(dc)throw n=nd,dc=!1,nd=null,n}function Tt(n,e){var t=e[dd];t===void 0&&(t=e[dd]=new Set);var i=n+"__bubble";t.has(i)||(N_(e,n,2,!1),t.add(i))}function Ru(n,e,t){var i=0;e&&(i|=4),N_(t,n,i,e)}var el="_reactListening"+Math.random().toString(36).slice(2);function ya(n){if(!n[el]){n[el]=!0,Bv.forEach(function(t){t!=="selectionchange"&&(yM.has(t)||Ru(t,!1,n),Ru(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[el]||(e[el]=!0,Ru("selectionchange",!1,e))}}function N_(n,e,t,i){switch(m_(e)){case 1:var r=DS;break;case 4:r=US;break;default:r=Hh}t=r.bind(null,e,t,n),r=void 0,!td||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Cu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=jr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}t_(function(){var c=s,u=kh(t),d=[];e:{var f=P_.get(n);if(f!==void 0){var p=Wh,m=n;switch(n){case"keypress":if($l(t)===0)break e;case"keydown":case"keyup":p=jS;break;case"focusin":m="focus",p=Mu;break;case"focusout":m="blur",p=Mu;break;case"beforeblur":case"afterblur":p=Mu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=kS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=QS;break;case A_:case b_:case R_:p=VS;break;case C_:p=tM;break;case"scroll":p=FS;break;case"wheel":p=iM;break;case"copy":case"cut":case"paste":p=GS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Rm}var g=(e&4)!==0,v=!g&&n==="scroll",h=g?f!==null?f+"Capture":null:f;g=[];for(var _=c,S;_!==null;){S=_;var M=S.stateNode;if(S.tag===5&&M!==null&&(S=M,h!==null&&(M=pa(_,h),M!=null&&g.push(Sa(_,M,S)))),v)break;_=_.return}0<g.length&&(f=new p(f,m,null,t,u),d.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Qf&&(m=t.relatedTarget||t.fromElement)&&(jr(m)||m[ji]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=t.relatedTarget||t.toElement,p=c,m=m?jr(m):null,m!==null&&(v=us(m),m!==v||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(g=Am,M="onMouseLeave",h="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(g=Rm,M="onPointerLeave",h="onPointerEnter",_="pointer"),v=p==null?f:Os(p),S=m==null?f:Os(m),f=new g(M,_+"leave",p,t,u),f.target=v,f.relatedTarget=S,M=null,jr(u)===c&&(g=new g(h,_+"enter",m,t,u),g.target=S,g.relatedTarget=v,M=g),v=M,p&&m)t:{for(g=p,h=m,_=0,S=g;S;S=ps(S))_++;for(S=0,M=h;M;M=ps(M))S++;for(;0<_-S;)g=ps(g),_--;for(;0<S-_;)h=ps(h),S--;for(;_--;){if(g===h||h!==null&&g===h.alternate)break t;g=ps(g),h=ps(h)}g=null}else g=null;p!==null&&Bm(d,f,p,g,!1),m!==null&&v!==null&&Bm(d,v,m,g,!0)}}e:{if(f=c?Os(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=uM;else if(Lm(f))if(S_)T=pM;else{T=dM;var E=fM}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=hM);if(T&&(T=T(n,c))){y_(d,T,t,u);break e}E&&E(n,f,c),n==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&qf(f,"number",f.value)}switch(E=c?Os(c):window,n){case"focusin":(Lm(E)||E.contentEditable==="true")&&(Us=E,od=c,na=null);break;case"focusout":na=od=Us=null;break;case"mousedown":ad=!0;break;case"contextmenu":case"mouseup":case"dragend":ad=!1,Fm(d,t,u);break;case"selectionchange":if(vM)break;case"keydown":case"keyup":Fm(d,t,u)}var A;if(Yh)e:{switch(n){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ds?__(n,t)&&(x="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(x="onCompositionStart");x&&(v_&&t.locale!=="ko"&&(Ds||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ds&&(A=g_()):(Sr=u,Gh="value"in Sr?Sr.value:Sr.textContent,Ds=!0)),E=vc(c,x),0<E.length&&(x=new bm(x,n,null,t,u),d.push({event:x,listeners:E}),A?x.data=A:(A=x_(t),A!==null&&(x.data=A)))),(A=sM?oM(n,t):aM(n,t))&&(c=vc(c,"onBeforeInput"),0<c.length&&(u=new bm("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=A))}L_(d,e)})}function Sa(n,e,t){return{instance:n,listener:e,currentTarget:t}}function vc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=pa(n,t),s!=null&&i.unshift(Sa(n,s,r)),s=pa(n,e),s!=null&&i.push(Sa(n,s,r))),n=n.return}return i}function ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Bm(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=pa(t,s),l!=null&&o.unshift(Sa(t,l,a))):r||(l=pa(t,s),l!=null&&o.push(Sa(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var SM=/\r\n?/g,MM=/\u0000|\uFFFD/g;function zm(n){return(typeof n=="string"?n:""+n).replace(SM,`
`).replace(MM,"")}function tl(n,e,t){if(e=zm(e),zm(n)!==e&&t)throw Error(xe(425))}function _c(){}var ld=null,cd=null;function ud(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fd=typeof setTimeout=="function"?setTimeout:void 0,EM=typeof clearTimeout=="function"?clearTimeout:void 0,Vm=typeof Promise=="function"?Promise:void 0,TM=typeof queueMicrotask=="function"?queueMicrotask:typeof Vm<"u"?function(n){return Vm.resolve(null).then(n).catch(wM)}:fd;function wM(n){setTimeout(function(){throw n})}function Pu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),va(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);va(e)}function Rr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Hm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var go=Math.random().toString(36).slice(2),xi="__reactFiber$"+go,Ma="__reactProps$"+go,ji="__reactContainer$"+go,dd="__reactEvents$"+go,AM="__reactListeners$"+go,bM="__reactHandles$"+go;function jr(n){var e=n[xi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ji]||t[xi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Hm(n);n!==null;){if(t=n[xi])return t;n=Hm(n)}return e}n=t,t=n.parentNode}return null}function za(n){return n=n[xi]||n[ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Os(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(xe(33))}function $c(n){return n[Ma]||null}var hd=[],ks=-1;function Or(n){return{current:n}}function wt(n){0>ks||(n.current=hd[ks],hd[ks]=null,ks--)}function Et(n,e){ks++,hd[ks]=n.current,n.current=e}var Dr={},dn=Or(Dr),En=Or(!1),ns=Dr;function to(n,e){var t=n.type.contextTypes;if(!t)return Dr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Tn(n){return n=n.childContextTypes,n!=null}function xc(){wt(En),wt(dn)}function Gm(n,e,t){if(dn.current!==Dr)throw Error(xe(168));Et(dn,e),Et(En,t)}function I_(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(xe(108,fS(n)||"Unknown",r));return Pt({},t,i)}function yc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Dr,ns=dn.current,Et(dn,n),Et(En,En.current),!0}function Wm(n,e,t){var i=n.stateNode;if(!i)throw Error(xe(169));t?(n=I_(n,e,ns),i.__reactInternalMemoizedMergedChildContext=n,wt(En),wt(dn),Et(dn,n)):wt(En),Et(En,t)}var zi=null,jc=!1,Lu=!1;function D_(n){zi===null?zi=[n]:zi.push(n)}function RM(n){jc=!0,D_(n)}function kr(){if(!Lu&&zi!==null){Lu=!0;var n=0,e=mt;try{var t=zi;for(mt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}zi=null,jc=!1}catch(r){throw zi!==null&&(zi=zi.slice(n+1)),s_(Bh,kr),r}finally{mt=e,Lu=!1}}return null}var Bs=[],zs=0,Sc=null,Mc=0,Gn=[],Wn=0,is=null,Hi=1,Gi="";function Yr(n,e){Bs[zs++]=Mc,Bs[zs++]=Sc,Sc=n,Mc=e}function U_(n,e,t){Gn[Wn++]=Hi,Gn[Wn++]=Gi,Gn[Wn++]=is,is=n;var i=Hi;n=Gi;var r=32-ai(i)-1;i&=~(1<<r),t+=1;var s=32-ai(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Hi=1<<32-ai(e)+r|t<<r|i,Gi=s+n}else Hi=1<<s|t<<r|i,Gi=n}function qh(n){n.return!==null&&(Yr(n,1),U_(n,1,0))}function $h(n){for(;n===Sc;)Sc=Bs[--zs],Bs[zs]=null,Mc=Bs[--zs],Bs[zs]=null;for(;n===is;)is=Gn[--Wn],Gn[Wn]=null,Gi=Gn[--Wn],Gn[Wn]=null,Hi=Gn[--Wn],Gn[Wn]=null}var Dn=null,In=null,At=!1,ii=null;function F_(n,e){var t=Xn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Xm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Dn=n,In=Rr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Dn=n,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=is!==null?{id:Hi,overflow:Gi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Xn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Dn=n,In=null,!0):!1;default:return!1}}function pd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function md(n){if(At){var e=In;if(e){var t=e;if(!Xm(n,e)){if(pd(n))throw Error(xe(418));e=Rr(t.nextSibling);var i=Dn;e&&Xm(n,e)?F_(i,t):(n.flags=n.flags&-4097|2,At=!1,Dn=n)}}else{if(pd(n))throw Error(xe(418));n.flags=n.flags&-4097|2,At=!1,Dn=n}}}function Ym(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Dn=n}function nl(n){if(n!==Dn)return!1;if(!At)return Ym(n),At=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!ud(n.type,n.memoizedProps)),e&&(e=In)){if(pd(n))throw O_(),Error(xe(418));for(;e;)F_(n,e),e=Rr(e.nextSibling)}if(Ym(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(xe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){In=Rr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}In=null}}else In=Dn?Rr(n.stateNode.nextSibling):null;return!0}function O_(){for(var n=In;n;)n=Rr(n.nextSibling)}function no(){In=Dn=null,At=!1}function jh(n){ii===null?ii=[n]:ii.push(n)}var CM=nr.ReactCurrentBatchConfig;function bo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(xe(309));var i=t.stateNode}if(!i)throw Error(xe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(xe(284));if(!t._owner)throw Error(xe(290,n))}return n}function il(n,e){throw n=Object.prototype.toString.call(e),Error(xe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Km(n){var e=n._init;return e(n._payload)}function k_(n){function e(h,_){if(n){var S=h.deletions;S===null?(h.deletions=[_],h.flags|=16):S.push(_)}}function t(h,_){if(!n)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=Nr(h,_),h.index=0,h.sibling=null,h}function s(h,_,S){return h.index=S,n?(S=h.alternate,S!==null?(S=S.index,S<_?(h.flags|=2,_):S):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,_,S,M){return _===null||_.tag!==6?(_=ku(S,h.mode,M),_.return=h,_):(_=r(_,S),_.return=h,_)}function l(h,_,S,M){var T=S.type;return T===Is?u(h,_,S.props.children,M,S.key):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===gr&&Km(T)===_.type)?(M=r(_,S.props),M.ref=bo(h,_,S),M.return=h,M):(M=nc(S.type,S.key,S.props,null,h.mode,M),M.ref=bo(h,_,S),M.return=h,M)}function c(h,_,S,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=Bu(S,h.mode,M),_.return=h,_):(_=r(_,S.children||[]),_.return=h,_)}function u(h,_,S,M,T){return _===null||_.tag!==7?(_=ts(S,h.mode,M,T),_.return=h,_):(_=r(_,S),_.return=h,_)}function d(h,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=ku(""+_,h.mode,S),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ya:return S=nc(_.type,_.key,_.props,null,h.mode,S),S.ref=bo(h,null,_),S.return=h,S;case Ns:return _=Bu(_,h.mode,S),_.return=h,_;case gr:var M=_._init;return d(h,M(_._payload),S)}if(Yo(_)||Mo(_))return _=ts(_,h.mode,S,null),_.return=h,_;il(h,_)}return null}function f(h,_,S,M){var T=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return T!==null?null:a(h,_,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ya:return S.key===T?l(h,_,S,M):null;case Ns:return S.key===T?c(h,_,S,M):null;case gr:return T=S._init,f(h,_,T(S._payload),M)}if(Yo(S)||Mo(S))return T!==null?null:u(h,_,S,M,null);il(h,S)}return null}function p(h,_,S,M,T){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(S)||null,a(_,h,""+M,T);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ya:return h=h.get(M.key===null?S:M.key)||null,l(_,h,M,T);case Ns:return h=h.get(M.key===null?S:M.key)||null,c(_,h,M,T);case gr:var E=M._init;return p(h,_,S,E(M._payload),T)}if(Yo(M)||Mo(M))return h=h.get(S)||null,u(_,h,M,T,null);il(_,M)}return null}function m(h,_,S,M){for(var T=null,E=null,A=_,x=_=0,b=null;A!==null&&x<S.length;x++){A.index>x?(b=A,A=null):b=A.sibling;var P=f(h,A,S[x],M);if(P===null){A===null&&(A=b);break}n&&A&&P.alternate===null&&e(h,A),_=s(P,_,x),E===null?T=P:E.sibling=P,E=P,A=b}if(x===S.length)return t(h,A),At&&Yr(h,x),T;if(A===null){for(;x<S.length;x++)A=d(h,S[x],M),A!==null&&(_=s(A,_,x),E===null?T=A:E.sibling=A,E=A);return At&&Yr(h,x),T}for(A=i(h,A);x<S.length;x++)b=p(A,h,x,S[x],M),b!==null&&(n&&b.alternate!==null&&A.delete(b.key===null?x:b.key),_=s(b,_,x),E===null?T=b:E.sibling=b,E=b);return n&&A.forEach(function(L){return e(h,L)}),At&&Yr(h,x),T}function g(h,_,S,M){var T=Mo(S);if(typeof T!="function")throw Error(xe(150));if(S=T.call(S),S==null)throw Error(xe(151));for(var E=T=null,A=_,x=_=0,b=null,P=S.next();A!==null&&!P.done;x++,P=S.next()){A.index>x?(b=A,A=null):b=A.sibling;var L=f(h,A,P.value,M);if(L===null){A===null&&(A=b);break}n&&A&&L.alternate===null&&e(h,A),_=s(L,_,x),E===null?T=L:E.sibling=L,E=L,A=b}if(P.done)return t(h,A),At&&Yr(h,x),T;if(A===null){for(;!P.done;x++,P=S.next())P=d(h,P.value,M),P!==null&&(_=s(P,_,x),E===null?T=P:E.sibling=P,E=P);return At&&Yr(h,x),T}for(A=i(h,A);!P.done;x++,P=S.next())P=p(A,h,x,P.value,M),P!==null&&(n&&P.alternate!==null&&A.delete(P.key===null?x:P.key),_=s(P,_,x),E===null?T=P:E.sibling=P,E=P);return n&&A.forEach(function(O){return e(h,O)}),At&&Yr(h,x),T}function v(h,_,S,M){if(typeof S=="object"&&S!==null&&S.type===Is&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ya:e:{for(var T=S.key,E=_;E!==null;){if(E.key===T){if(T=S.type,T===Is){if(E.tag===7){t(h,E.sibling),_=r(E,S.props.children),_.return=h,h=_;break e}}else if(E.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===gr&&Km(T)===E.type){t(h,E.sibling),_=r(E,S.props),_.ref=bo(h,E,S),_.return=h,h=_;break e}t(h,E);break}else e(h,E);E=E.sibling}S.type===Is?(_=ts(S.props.children,h.mode,M,S.key),_.return=h,h=_):(M=nc(S.type,S.key,S.props,null,h.mode,M),M.ref=bo(h,_,S),M.return=h,h=M)}return o(h);case Ns:e:{for(E=S.key;_!==null;){if(_.key===E)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){t(h,_.sibling),_=r(_,S.children||[]),_.return=h,h=_;break e}else{t(h,_);break}else e(h,_);_=_.sibling}_=Bu(S,h.mode,M),_.return=h,h=_}return o(h);case gr:return E=S._init,v(h,_,E(S._payload),M)}if(Yo(S))return m(h,_,S,M);if(Mo(S))return g(h,_,S,M);il(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(t(h,_.sibling),_=r(_,S),_.return=h,h=_):(t(h,_),_=ku(S,h.mode,M),_.return=h,h=_),o(h)):t(h,_)}return v}var io=k_(!0),B_=k_(!1),Ec=Or(null),Tc=null,Vs=null,Zh=null;function Jh(){Zh=Vs=Tc=null}function Qh(n){var e=Ec.current;wt(Ec),n._currentValue=e}function gd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function qs(n,e){Tc=n,Zh=Vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Mn=!0),n.firstContext=null)}function $n(n){var e=n._currentValue;if(Zh!==n)if(n={context:n,memoizedValue:e,next:null},Vs===null){if(Tc===null)throw Error(xe(308));Vs=n,Tc.dependencies={lanes:0,firstContext:n}}else Vs=Vs.next=n;return e}var Zr=null;function ep(n){Zr===null?Zr=[n]:Zr.push(n)}function z_(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,ep(e)):(t.next=r.next,r.next=t),e.interleaved=t,Zi(n,i)}function Zi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var vr=!1;function tp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function V_(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Yi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ut&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Zi(n,t)}return r=i.interleaved,r===null?(e.next=e,ep(i)):(e.next=r.next,r.next=e),i.interleaved=e,Zi(n,t)}function jl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,zh(n,t)}}function qm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function wc(n,e,t,i){var r=n.updateQueue;vr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=n,g=a;switch(f=e,p=t,g.tag){case 1:if(m=g.payload,typeof m=="function"){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m=="function"?m.call(p,d,f):m,f==null)break e;d=Pt({},d,f);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ss|=o,n.lanes=o,n.memoizedState=d}}function $m(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(xe(191,r));r.call(i)}}}var Va={},Ti=Or(Va),Ea=Or(Va),Ta=Or(Va);function Jr(n){if(n===Va)throw Error(xe(174));return n}function np(n,e){switch(Et(Ta,e),Et(Ea,n),Et(Ti,Va),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=jf(e,n)}wt(Ti),Et(Ti,e)}function ro(){wt(Ti),wt(Ea),wt(Ta)}function H_(n){Jr(Ta.current);var e=Jr(Ti.current),t=jf(e,n.type);e!==t&&(Et(Ea,n),Et(Ti,t))}function ip(n){Ea.current===n&&(wt(Ti),wt(Ea))}var bt=Or(0);function Ac(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nu=[];function rp(){for(var n=0;n<Nu.length;n++)Nu[n]._workInProgressVersionPrimary=null;Nu.length=0}var Zl=nr.ReactCurrentDispatcher,Iu=nr.ReactCurrentBatchConfig,rs=0,Rt=null,Ht=null,$t=null,bc=!1,ia=!1,wa=0,PM=0;function sn(){throw Error(xe(321))}function sp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ui(n[t],e[t]))return!1;return!0}function op(n,e,t,i,r,s){if(rs=s,Rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zl.current=n===null||n.memoizedState===null?DM:UM,n=t(i,r),ia){s=0;do{if(ia=!1,wa=0,25<=s)throw Error(xe(301));s+=1,$t=Ht=null,e.updateQueue=null,Zl.current=FM,n=t(i,r)}while(ia)}if(Zl.current=Rc,e=Ht!==null&&Ht.next!==null,rs=0,$t=Ht=Rt=null,bc=!1,e)throw Error(xe(300));return n}function ap(){var n=wa!==0;return wa=0,n}function gi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?Rt.memoizedState=$t=n:$t=$t.next=n,$t}function jn(){if(Ht===null){var n=Rt.alternate;n=n!==null?n.memoizedState:null}else n=Ht.next;var e=$t===null?Rt.memoizedState:$t.next;if(e!==null)$t=e,Ht=n;else{if(n===null)throw Error(xe(310));Ht=n,n={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},$t===null?Rt.memoizedState=$t=n:$t=$t.next=n}return $t}function Aa(n,e){return typeof e=="function"?e(n):e}function Du(n){var e=jn(),t=e.queue;if(t===null)throw Error(xe(311));t.lastRenderedReducer=n;var i=Ht,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((rs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Rt.lanes|=u,ss|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ui(i,e.memoizedState)||(Mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Rt.lanes|=s,ss|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Uu(n){var e=jn(),t=e.queue;if(t===null)throw Error(xe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ui(s,e.memoizedState)||(Mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function G_(){}function W_(n,e){var t=Rt,i=jn(),r=e(),s=!ui(i.memoizedState,r);if(s&&(i.memoizedState=r,Mn=!0),i=i.queue,lp(K_.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||$t!==null&&$t.memoizedState.tag&1){if(t.flags|=2048,ba(9,Y_.bind(null,t,i,r,e),void 0,null),jt===null)throw Error(xe(349));rs&30||X_(t,e,r)}return r}function X_(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Y_(n,e,t,i){e.value=t,e.getSnapshot=i,q_(e)&&$_(n)}function K_(n,e,t){return t(function(){q_(e)&&$_(n)})}function q_(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ui(n,t)}catch{return!0}}function $_(n){var e=Zi(n,1);e!==null&&li(e,n,1,-1)}function jm(n){var e=gi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:n},e.queue=n,n=n.dispatch=IM.bind(null,Rt,n),[e.memoizedState,n]}function ba(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function j_(){return jn().memoizedState}function Jl(n,e,t,i){var r=gi();Rt.flags|=n,r.memoizedState=ba(1|e,t,void 0,i===void 0?null:i)}function Zc(n,e,t,i){var r=jn();i=i===void 0?null:i;var s=void 0;if(Ht!==null){var o=Ht.memoizedState;if(s=o.destroy,i!==null&&sp(i,o.deps)){r.memoizedState=ba(e,t,s,i);return}}Rt.flags|=n,r.memoizedState=ba(1|e,t,s,i)}function Zm(n,e){return Jl(8390656,8,n,e)}function lp(n,e){return Zc(2048,8,n,e)}function Z_(n,e){return Zc(4,2,n,e)}function J_(n,e){return Zc(4,4,n,e)}function Q_(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function ex(n,e,t){return t=t!=null?t.concat([n]):null,Zc(4,4,Q_.bind(null,e,n),t)}function cp(){}function tx(n,e){var t=jn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&sp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function nx(n,e){var t=jn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&sp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function ix(n,e,t){return rs&21?(ui(t,e)||(t=l_(),Rt.lanes|=t,ss|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Mn=!0),n.memoizedState=t)}function LM(n,e){var t=mt;mt=t!==0&&4>t?t:4,n(!0);var i=Iu.transition;Iu.transition={};try{n(!1),e()}finally{mt=t,Iu.transition=i}}function rx(){return jn().memoizedState}function NM(n,e,t){var i=Lr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},sx(n))ox(e,t);else if(t=z_(n,e,t,i),t!==null){var r=vn();li(t,n,i,r),ax(t,e,i)}}function IM(n,e,t){var i=Lr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(sx(n))ox(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ui(a,o)){var l=e.interleaved;l===null?(r.next=r,ep(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=z_(n,e,r,i),t!==null&&(r=vn(),li(t,n,i,r),ax(t,e,i))}}function sx(n){var e=n.alternate;return n===Rt||e!==null&&e===Rt}function ox(n,e){ia=bc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function ax(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,zh(n,t)}}var Rc={readContext:$n,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},DM={readContext:$n,useCallback:function(n,e){return gi().memoizedState=[n,e===void 0?null:e],n},useContext:$n,useEffect:Zm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Jl(4194308,4,Q_.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Jl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Jl(4,2,n,e)},useMemo:function(n,e){var t=gi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=gi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=NM.bind(null,Rt,n),[i.memoizedState,n]},useRef:function(n){var e=gi();return n={current:n},e.memoizedState=n},useState:jm,useDebugValue:cp,useDeferredValue:function(n){return gi().memoizedState=n},useTransition:function(){var n=jm(!1),e=n[0];return n=LM.bind(null,n[1]),gi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Rt,r=gi();if(At){if(t===void 0)throw Error(xe(407));t=t()}else{if(t=e(),jt===null)throw Error(xe(349));rs&30||X_(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Zm(K_.bind(null,i,s,n),[n]),i.flags|=2048,ba(9,Y_.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=gi(),e=jt.identifierPrefix;if(At){var t=Gi,i=Hi;t=(i&~(1<<32-ai(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=wa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=PM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},UM={readContext:$n,useCallback:tx,useContext:$n,useEffect:lp,useImperativeHandle:ex,useInsertionEffect:Z_,useLayoutEffect:J_,useMemo:nx,useReducer:Du,useRef:j_,useState:function(){return Du(Aa)},useDebugValue:cp,useDeferredValue:function(n){var e=jn();return ix(e,Ht.memoizedState,n)},useTransition:function(){var n=Du(Aa)[0],e=jn().memoizedState;return[n,e]},useMutableSource:G_,useSyncExternalStore:W_,useId:rx,unstable_isNewReconciler:!1},FM={readContext:$n,useCallback:tx,useContext:$n,useEffect:lp,useImperativeHandle:ex,useInsertionEffect:Z_,useLayoutEffect:J_,useMemo:nx,useReducer:Uu,useRef:j_,useState:function(){return Uu(Aa)},useDebugValue:cp,useDeferredValue:function(n){var e=jn();return Ht===null?e.memoizedState=n:ix(e,Ht.memoizedState,n)},useTransition:function(){var n=Uu(Aa)[0],e=jn().memoizedState;return[n,e]},useMutableSource:G_,useSyncExternalStore:W_,useId:rx,unstable_isNewReconciler:!1};function ti(n,e){if(n&&n.defaultProps){e=Pt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function vd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Pt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Jc={isMounted:function(n){return(n=n._reactInternals)?us(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=vn(),r=Lr(n),s=Yi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Cr(n,s,r),e!==null&&(li(e,n,r,i),jl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=vn(),r=Lr(n),s=Yi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Cr(n,s,r),e!==null&&(li(e,n,r,i),jl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=vn(),i=Lr(n),r=Yi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Cr(n,r,i),e!==null&&(li(e,n,i,t),jl(e,n,i))}};function Jm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!xa(t,i)||!xa(r,s):!0}function lx(n,e,t){var i=!1,r=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=Tn(e)?ns:dn.current,i=e.contextTypes,s=(i=i!=null)?to(n,r):Dr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Qm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Jc.enqueueReplaceState(e,e.state,null)}function _d(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},tp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=Tn(e)?ns:dn.current,r.context=to(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jc.enqueueReplaceState(r,r.state,null),wc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function so(n,e){try{var t="",i=e;do t+=uS(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Fu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function xd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var OM=typeof WeakMap=="function"?WeakMap:Map;function cx(n,e,t){t=Yi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Pc||(Pc=!0,Cd=i),xd(n,e)},t}function ux(n,e,t){t=Yi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){xd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){xd(n,e),typeof i!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function eg(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new OM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=ZM.bind(null,n,e,t),e.then(n,n))}function tg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function ng(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Yi(-1,1),e.tag=2,Cr(t,e,1))),t.lanes|=1),n)}var kM=nr.ReactCurrentOwner,Mn=!1;function gn(n,e,t,i){e.child=n===null?B_(e,null,t,i):io(e,n.child,t,i)}function ig(n,e,t,i,r){t=t.render;var s=e.ref;return qs(e,r),i=op(n,e,t,i,s,r),t=ap(),n!==null&&!Mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ji(n,e,r)):(At&&t&&qh(e),e.flags|=1,gn(n,e,i,r),e.child)}function rg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!vp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,fx(n,e,s,i,r)):(n=nc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:xa,t(o,i)&&n.ref===e.ref)return Ji(n,e,r)}return e.flags|=1,n=Nr(s,i),n.ref=e.ref,n.return=e,e.child=n}function fx(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(xa(s,i)&&n.ref===e.ref)if(Mn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Mn=!0);else return e.lanes=n.lanes,Ji(n,e,r)}return yd(n,e,t,i,r)}function dx(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Et(Gs,Ln),Ln|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Et(Gs,Ln),Ln|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Et(Gs,Ln),Ln|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Et(Gs,Ln),Ln|=i;return gn(n,e,r,t),e.child}function hx(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function yd(n,e,t,i,r){var s=Tn(t)?ns:dn.current;return s=to(e,s),qs(e,r),t=op(n,e,t,i,s,r),i=ap(),n!==null&&!Mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ji(n,e,r)):(At&&i&&qh(e),e.flags|=1,gn(n,e,t,r),e.child)}function sg(n,e,t,i,r){if(Tn(t)){var s=!0;yc(e)}else s=!1;if(qs(e,r),e.stateNode===null)Ql(n,e),lx(e,t,i),_d(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=$n(c):(c=Tn(t)?ns:dn.current,c=to(e,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Qm(e,o,i,c),vr=!1;var f=e.memoizedState;o.state=f,wc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||En.current||vr?(typeof u=="function"&&(vd(e,t,u,i),l=e.memoizedState),(a=vr||Jm(e,t,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,V_(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:ti(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=$n(l):(l=Tn(t)?ns:dn.current,l=to(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Qm(e,o,i,l),vr=!1,f=e.memoizedState,o.state=f,wc(e,i,o,r);var m=e.memoizedState;a!==d||f!==m||En.current||vr?(typeof p=="function"&&(vd(e,t,p,i),m=e.memoizedState),(c=vr||Jm(e,t,c,i,f,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Sd(n,e,t,i,s,r)}function Sd(n,e,t,i,r,s){hx(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Wm(e,t,!1),Ji(n,e,s);i=e.stateNode,kM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=io(e,n.child,null,s),e.child=io(e,null,a,s)):gn(n,e,a,s),e.memoizedState=i.state,r&&Wm(e,t,!0),e.child}function px(n){var e=n.stateNode;e.pendingContext?Gm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Gm(n,e.context,!1),np(n,e.containerInfo)}function og(n,e,t,i,r){return no(),jh(r),e.flags|=256,gn(n,e,t,i),e.child}var Md={dehydrated:null,treeContext:null,retryLane:0};function Ed(n){return{baseLanes:n,cachePool:null,transitions:null}}function mx(n,e,t){var i=e.pendingProps,r=bt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Et(bt,r&1),n===null)return md(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=tu(o,i,0,null),n=ts(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Ed(t),e.memoizedState=Md,n):up(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return BM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Nr(a,s):(s=ts(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Ed(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Md,i}return s=n.child,n=s.sibling,i=Nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function up(n,e){return e=tu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function rl(n,e,t,i){return i!==null&&jh(i),io(e,n.child,null,t),n=up(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function BM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Fu(Error(xe(422))),rl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=tu({mode:"visible",children:i.children},r,0,null),s=ts(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&io(e,n.child,null,o),e.child.memoizedState=Ed(o),e.memoizedState=Md,s);if(!(e.mode&1))return rl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(xe(419)),i=Fu(s,i,void 0),rl(n,e,o,i)}if(a=(o&n.childLanes)!==0,Mn||a){if(i=jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Zi(n,r),li(i,n,r,-1))}return gp(),i=Fu(Error(xe(421))),rl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=JM.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,In=Rr(r.nextSibling),Dn=e,At=!0,ii=null,n!==null&&(Gn[Wn++]=Hi,Gn[Wn++]=Gi,Gn[Wn++]=is,Hi=n.id,Gi=n.overflow,is=e),e=up(e,i.children),e.flags|=4096,e)}function ag(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),gd(n.return,e,t)}function Ou(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function gx(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(gn(n,e,i.children,t),i=bt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ag(n,t,e);else if(n.tag===19)ag(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Et(bt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Ac(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Ou(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Ac(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Ou(e,!0,t,null,s);break;case"together":Ou(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ql(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ji(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ss|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(xe(153));if(e.child!==null){for(n=e.child,t=Nr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Nr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function zM(n,e,t){switch(e.tag){case 3:px(e),no();break;case 5:H_(e);break;case 1:Tn(e.type)&&yc(e);break;case 4:np(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Et(Ec,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Et(bt,bt.current&1),e.flags|=128,null):t&e.child.childLanes?mx(n,e,t):(Et(bt,bt.current&1),n=Ji(n,e,t),n!==null?n.sibling:null);Et(bt,bt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return gx(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Et(bt,bt.current),i)break;return null;case 22:case 23:return e.lanes=0,dx(n,e,t)}return Ji(n,e,t)}var vx,Td,_x,xx;vx=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Td=function(){};_x=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Jr(Ti.current);var s=null;switch(t){case"input":r=Yf(n,r),i=Yf(n,i),s=[];break;case"select":r=Pt({},r,{value:void 0}),i=Pt({},i,{value:void 0}),s=[];break;case"textarea":r=$f(n,r),i=$f(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=_c)}Zf(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(da.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(da.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Tt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};xx=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ro(n,e){if(!At)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function on(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function VM(n,e,t){var i=e.pendingProps;switch($h(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(e),null;case 1:return Tn(e.type)&&xc(),on(e),null;case 3:return i=e.stateNode,ro(),wt(En),wt(dn),rp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(nl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(Nd(ii),ii=null))),Td(n,e),on(e),null;case 5:ip(e);var r=Jr(Ta.current);if(t=e.type,n!==null&&e.stateNode!=null)_x(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(xe(166));return on(e),null}if(n=Jr(Ti.current),nl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[xi]=e,i[Ma]=s,n=(e.mode&1)!==0,t){case"dialog":Tt("cancel",i),Tt("close",i);break;case"iframe":case"object":case"embed":Tt("load",i);break;case"video":case"audio":for(r=0;r<qo.length;r++)Tt(qo[r],i);break;case"source":Tt("error",i);break;case"img":case"image":case"link":Tt("error",i),Tt("load",i);break;case"details":Tt("toggle",i);break;case"input":gm(i,s),Tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Tt("invalid",i);break;case"textarea":_m(i,s),Tt("invalid",i)}Zf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&tl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&tl(i.textContent,a,n),r=["children",""+a]):da.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Tt("scroll",i)}switch(t){case"input":Ka(i),vm(i,s,!0);break;case"textarea":Ka(i),xm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=_c)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Kv(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[xi]=e,n[Ma]=i,vx(n,e,!1,!1),e.stateNode=n;e:{switch(o=Jf(t,i),t){case"dialog":Tt("cancel",n),Tt("close",n),r=i;break;case"iframe":case"object":case"embed":Tt("load",n),r=i;break;case"video":case"audio":for(r=0;r<qo.length;r++)Tt(qo[r],n);r=i;break;case"source":Tt("error",n),r=i;break;case"img":case"image":case"link":Tt("error",n),Tt("load",n),r=i;break;case"details":Tt("toggle",n),r=i;break;case"input":gm(n,i),r=Yf(n,i),Tt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Pt({},i,{value:void 0}),Tt("invalid",n);break;case"textarea":_m(n,i),r=$f(n,i),Tt("invalid",n);break;default:r=i}Zf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?jv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&qv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ha(n,l):typeof l=="number"&&ha(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(da.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Tt("scroll",n):l!=null&&Dh(n,s,l,o))}switch(t){case"input":Ka(n),vm(n,i,!1);break;case"textarea":Ka(n),xm(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ir(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ws(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ws(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=_c)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return on(e),null;case 6:if(n&&e.stateNode!=null)xx(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(xe(166));if(t=Jr(Ta.current),Jr(Ti.current),nl(e)){if(i=e.stateNode,t=e.memoizedProps,i[xi]=e,(s=i.nodeValue!==t)&&(n=Dn,n!==null))switch(n.tag){case 3:tl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&tl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[xi]=e,e.stateNode=i}return on(e),null;case 13:if(wt(bt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(At&&In!==null&&e.mode&1&&!(e.flags&128))O_(),no(),e.flags|=98560,s=!1;else if(s=nl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(xe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(xe(317));s[xi]=e}else no(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;on(e),s=!1}else ii!==null&&(Nd(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||bt.current&1?Gt===0&&(Gt=3):gp())),e.updateQueue!==null&&(e.flags|=4),on(e),null);case 4:return ro(),Td(n,e),n===null&&ya(e.stateNode.containerInfo),on(e),null;case 10:return Qh(e.type._context),on(e),null;case 17:return Tn(e.type)&&xc(),on(e),null;case 19:if(wt(bt),s=e.memoizedState,s===null)return on(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ro(s,!1);else{if(Gt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Ac(n),o!==null){for(e.flags|=128,Ro(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Et(bt,bt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Ft()>oo&&(e.flags|=128,i=!0,Ro(s,!1),e.lanes=4194304)}else{if(!i)if(n=Ac(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!At)return on(e),null}else 2*Ft()-s.renderingStartTime>oo&&t!==1073741824&&(e.flags|=128,i=!0,Ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ft(),e.sibling=null,t=bt.current,Et(bt,i?t&1|2:t&1),e):(on(e),null);case 22:case 23:return mp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ln&1073741824&&(on(e),e.subtreeFlags&6&&(e.flags|=8192)):on(e),null;case 24:return null;case 25:return null}throw Error(xe(156,e.tag))}function HM(n,e){switch($h(e),e.tag){case 1:return Tn(e.type)&&xc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ro(),wt(En),wt(dn),rp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return ip(e),null;case 13:if(wt(bt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(xe(340));no()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return wt(bt),null;case 4:return ro(),null;case 10:return Qh(e.type._context),null;case 22:case 23:return mp(),null;case 24:return null;default:return null}}var sl=!1,cn=!1,GM=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function Hs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){It(n,e,i)}else t.current=null}function wd(n,e,t){try{t()}catch(i){It(n,e,i)}}var lg=!1;function WM(n,e){if(ld=mc,n=T_(),Kh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(cd={focusedElem:n,selectionRange:t},mc=!1,Fe=e;Fe!==null;)if(e=Fe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Fe=n;else for(;Fe!==null;){e=Fe;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var g=m.memoizedProps,v=m.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:ti(e.type,g),v);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(xe(163))}}catch(M){It(e,e.return,M)}if(n=e.sibling,n!==null){n.return=e.return,Fe=n;break}Fe=e.return}return m=lg,lg=!1,m}function ra(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&wd(e,t,s)}r=r.next}while(r!==i)}}function Qc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ad(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function yx(n){var e=n.alternate;e!==null&&(n.alternate=null,yx(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[xi],delete e[Ma],delete e[dd],delete e[AM],delete e[bM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Sx(n){return n.tag===5||n.tag===3||n.tag===4}function cg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Sx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=_c));else if(i!==4&&(n=n.child,n!==null))for(bd(n,e,t),n=n.sibling;n!==null;)bd(n,e,t),n=n.sibling}function Rd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Rd(n,e,t),n=n.sibling;n!==null;)Rd(n,e,t),n=n.sibling}var Jt=null,ni=!1;function lr(n,e,t){for(t=t.child;t!==null;)Mx(n,e,t),t=t.sibling}function Mx(n,e,t){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(Xc,t)}catch{}switch(t.tag){case 5:cn||Hs(t,e);case 6:var i=Jt,r=ni;Jt=null,lr(n,e,t),Jt=i,ni=r,Jt!==null&&(ni?(n=Jt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Jt.removeChild(t.stateNode));break;case 18:Jt!==null&&(ni?(n=Jt,t=t.stateNode,n.nodeType===8?Pu(n.parentNode,t):n.nodeType===1&&Pu(n,t),va(n)):Pu(Jt,t.stateNode));break;case 4:i=Jt,r=ni,Jt=t.stateNode.containerInfo,ni=!0,lr(n,e,t),Jt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wd(t,e,o),r=r.next}while(r!==i)}lr(n,e,t);break;case 1:if(!cn&&(Hs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){It(t,e,a)}lr(n,e,t);break;case 21:lr(n,e,t);break;case 22:t.mode&1?(cn=(i=cn)||t.memoizedState!==null,lr(n,e,t),cn=i):lr(n,e,t);break;default:lr(n,e,t)}}function ug(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new GM),e.forEach(function(i){var r=QM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Zn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Jt=a.stateNode,ni=!1;break e;case 3:Jt=a.stateNode.containerInfo,ni=!0;break e;case 4:Jt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(Jt===null)throw Error(xe(160));Mx(s,o,r),Jt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){It(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ex(e,n),e=e.sibling}function Ex(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Zn(e,n),hi(n),i&4){try{ra(3,n,n.return),Qc(3,n)}catch(g){It(n,n.return,g)}try{ra(5,n,n.return)}catch(g){It(n,n.return,g)}}break;case 1:Zn(e,n),hi(n),i&512&&t!==null&&Hs(t,t.return);break;case 5:if(Zn(e,n),hi(n),i&512&&t!==null&&Hs(t,t.return),n.flags&32){var r=n.stateNode;try{ha(r,"")}catch(g){It(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Xv(r,s),Jf(a,o);var c=Jf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?jv(r,d):u==="dangerouslySetInnerHTML"?qv(r,d):u==="children"?ha(r,d):Dh(r,u,d,c)}switch(a){case"input":Kf(r,s);break;case"textarea":Yv(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ws(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ws(r,!!s.multiple,s.defaultValue,!0):Ws(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ma]=s}catch(g){It(n,n.return,g)}}break;case 6:if(Zn(e,n),hi(n),i&4){if(n.stateNode===null)throw Error(xe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){It(n,n.return,g)}}break;case 3:if(Zn(e,n),hi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{va(e.containerInfo)}catch(g){It(n,n.return,g)}break;case 4:Zn(e,n),hi(n);break;case 13:Zn(e,n),hi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(hp=Ft())),i&4&&ug(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(cn=(c=cn)||u,Zn(e,n),cn=c):Zn(e,n),hi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Fe=n,u=n.child;u!==null;){for(d=Fe=u;Fe!==null;){switch(f=Fe,p=f.child,f.tag){case 0:case 11:case 14:case 15:ra(4,f,f.return);break;case 1:Hs(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(g){It(i,t,g)}}break;case 5:Hs(f,f.return);break;case 22:if(f.memoizedState!==null){dg(d);continue}}p!==null?(p.return=f,Fe=p):dg(d)}u=u.sibling}e:for(u=null,d=n;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$v("display",o))}catch(g){It(n,n.return,g)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(g){It(n,n.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Zn(e,n),hi(n),i&4&&ug(n);break;case 21:break;default:Zn(e,n),hi(n)}}function hi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Sx(t)){var i=t;break e}t=t.return}throw Error(xe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ha(r,""),i.flags&=-33);var s=cg(n);Rd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=cg(n);bd(n,a,o);break;default:throw Error(xe(161))}}catch(l){It(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function XM(n,e,t){Fe=n,Tx(n)}function Tx(n,e,t){for(var i=(n.mode&1)!==0;Fe!==null;){var r=Fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||sl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||cn;a=sl;var c=cn;if(sl=o,(cn=l)&&!c)for(Fe=r;Fe!==null;)o=Fe,l=o.child,o.tag===22&&o.memoizedState!==null?hg(r):l!==null?(l.return=o,Fe=l):hg(r);for(;s!==null;)Fe=s,Tx(s),s=s.sibling;Fe=r,sl=a,cn=c}fg(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Fe=s):fg(n)}}function fg(n){for(;Fe!==null;){var e=Fe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||Qc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ti(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$m(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}$m(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&va(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(xe(163))}cn||e.flags&512&&Ad(e)}catch(f){It(e,e.return,f)}}if(e===n){Fe=null;break}if(t=e.sibling,t!==null){t.return=e.return,Fe=t;break}Fe=e.return}}function dg(n){for(;Fe!==null;){var e=Fe;if(e===n){Fe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Fe=t;break}Fe=e.return}}function hg(n){for(;Fe!==null;){var e=Fe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Qc(4,e)}catch(l){It(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){It(e,r,l)}}var s=e.return;try{Ad(e)}catch(l){It(e,s,l)}break;case 5:var o=e.return;try{Ad(e)}catch(l){It(e,o,l)}}}catch(l){It(e,e.return,l)}if(e===n){Fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Fe=a;break}Fe=e.return}}var YM=Math.ceil,Cc=nr.ReactCurrentDispatcher,fp=nr.ReactCurrentOwner,qn=nr.ReactCurrentBatchConfig,ut=0,jt=null,Bt=null,en=0,Ln=0,Gs=Or(0),Gt=0,Ra=null,ss=0,eu=0,dp=0,sa=null,Sn=null,hp=0,oo=1/0,Bi=null,Pc=!1,Cd=null,Pr=null,ol=!1,Mr=null,Lc=0,oa=0,Pd=null,ec=-1,tc=0;function vn(){return ut&6?Ft():ec!==-1?ec:ec=Ft()}function Lr(n){return n.mode&1?ut&2&&en!==0?en&-en:CM.transition!==null?(tc===0&&(tc=l_()),tc):(n=mt,n!==0||(n=window.event,n=n===void 0?16:m_(n.type)),n):1}function li(n,e,t,i){if(50<oa)throw oa=0,Pd=null,Error(xe(185));ka(n,t,i),(!(ut&2)||n!==jt)&&(n===jt&&(!(ut&2)&&(eu|=t),Gt===4&&xr(n,en)),wn(n,i),t===1&&ut===0&&!(e.mode&1)&&(oo=Ft()+500,jc&&kr()))}function wn(n,e){var t=n.callbackNode;CS(n,e);var i=pc(n,n===jt?en:0);if(i===0)t!==null&&Mm(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Mm(t),e===1)n.tag===0?RM(pg.bind(null,n)):D_(pg.bind(null,n)),TM(function(){!(ut&6)&&kr()}),t=null;else{switch(c_(i)){case 1:t=Bh;break;case 4:t=o_;break;case 16:t=hc;break;case 536870912:t=a_;break;default:t=hc}t=Nx(t,wx.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function wx(n,e){if(ec=-1,tc=0,ut&6)throw Error(xe(327));var t=n.callbackNode;if($s()&&n.callbackNode!==t)return null;var i=pc(n,n===jt?en:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Nc(n,i);else{e=i;var r=ut;ut|=2;var s=bx();(jt!==n||en!==e)&&(Bi=null,oo=Ft()+500,es(n,e));do try{$M();break}catch(a){Ax(n,a)}while(!0);Jh(),Cc.current=s,ut=r,Bt!==null?e=0:(jt=null,en=0,e=Gt)}if(e!==0){if(e===2&&(r=id(n),r!==0&&(i=r,e=Ld(n,r))),e===1)throw t=Ra,es(n,0),xr(n,i),wn(n,Ft()),t;if(e===6)xr(n,i);else{if(r=n.current.alternate,!(i&30)&&!KM(r)&&(e=Nc(n,i),e===2&&(s=id(n),s!==0&&(i=s,e=Ld(n,s))),e===1))throw t=Ra,es(n,0),xr(n,i),wn(n,Ft()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(xe(345));case 2:Kr(n,Sn,Bi);break;case 3:if(xr(n,i),(i&130023424)===i&&(e=hp+500-Ft(),10<e)){if(pc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){vn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=fd(Kr.bind(null,n,Sn,Bi),e);break}Kr(n,Sn,Bi);break;case 4:if(xr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ai(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*YM(i/1960))-i,10<i){n.timeoutHandle=fd(Kr.bind(null,n,Sn,Bi),i);break}Kr(n,Sn,Bi);break;case 5:Kr(n,Sn,Bi);break;default:throw Error(xe(329))}}}return wn(n,Ft()),n.callbackNode===t?wx.bind(null,n):null}function Ld(n,e){var t=sa;return n.current.memoizedState.isDehydrated&&(es(n,e).flags|=256),n=Nc(n,e),n!==2&&(e=Sn,Sn=t,e!==null&&Nd(e)),n}function Nd(n){Sn===null?Sn=n:Sn.push.apply(Sn,n)}function KM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ui(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(n,e){for(e&=~dp,e&=~eu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ai(e),i=1<<t;n[t]=-1,e&=~i}}function pg(n){if(ut&6)throw Error(xe(327));$s();var e=pc(n,0);if(!(e&1))return wn(n,Ft()),null;var t=Nc(n,e);if(n.tag!==0&&t===2){var i=id(n);i!==0&&(e=i,t=Ld(n,i))}if(t===1)throw t=Ra,es(n,0),xr(n,e),wn(n,Ft()),t;if(t===6)throw Error(xe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Kr(n,Sn,Bi),wn(n,Ft()),null}function pp(n,e){var t=ut;ut|=1;try{return n(e)}finally{ut=t,ut===0&&(oo=Ft()+500,jc&&kr())}}function os(n){Mr!==null&&Mr.tag===0&&!(ut&6)&&$s();var e=ut;ut|=1;var t=qn.transition,i=mt;try{if(qn.transition=null,mt=1,n)return n()}finally{mt=i,qn.transition=t,ut=e,!(ut&6)&&kr()}}function mp(){Ln=Gs.current,wt(Gs)}function es(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,EM(t)),Bt!==null)for(t=Bt.return;t!==null;){var i=t;switch($h(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xc();break;case 3:ro(),wt(En),wt(dn),rp();break;case 5:ip(i);break;case 4:ro();break;case 13:wt(bt);break;case 19:wt(bt);break;case 10:Qh(i.type._context);break;case 22:case 23:mp()}t=t.return}if(jt=n,Bt=n=Nr(n.current,null),en=Ln=e,Gt=0,Ra=null,dp=eu=ss=0,Sn=sa=null,Zr!==null){for(e=0;e<Zr.length;e++)if(t=Zr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Zr=null}return n}function Ax(n,e){do{var t=Bt;try{if(Jh(),Zl.current=Rc,bc){for(var i=Rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}bc=!1}if(rs=0,$t=Ht=Rt=null,ia=!1,wa=0,fp.current=null,t===null||t.return===null){Gt=1,Ra=e,Bt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=en,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=tg(o);if(p!==null){p.flags&=-257,ng(p,o,a,s,e),p.mode&1&&eg(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var g=new Set;g.add(l),e.updateQueue=g}else m.add(l);break e}else{if(!(e&1)){eg(s,c,e),gp();break e}l=Error(xe(426))}}else if(At&&a.mode&1){var v=tg(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),ng(v,o,a,s,e),jh(so(l,a));break e}}s=l=so(l,a),Gt!==4&&(Gt=2),sa===null?sa=[s]:sa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=cx(s,l,e);qm(s,h);break e;case 1:a=l;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Pr===null||!Pr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=ux(s,a,e);qm(s,M);break e}}s=s.return}while(s!==null)}Cx(t)}catch(T){e=T,Bt===t&&t!==null&&(Bt=t=t.return);continue}break}while(!0)}function bx(){var n=Cc.current;return Cc.current=Rc,n===null?Rc:n}function gp(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),jt===null||!(ss&268435455)&&!(eu&268435455)||xr(jt,en)}function Nc(n,e){var t=ut;ut|=2;var i=bx();(jt!==n||en!==e)&&(Bi=null,es(n,e));do try{qM();break}catch(r){Ax(n,r)}while(!0);if(Jh(),ut=t,Cc.current=i,Bt!==null)throw Error(xe(261));return jt=null,en=0,Gt}function qM(){for(;Bt!==null;)Rx(Bt)}function $M(){for(;Bt!==null&&!yS();)Rx(Bt)}function Rx(n){var e=Lx(n.alternate,n,Ln);n.memoizedProps=n.pendingProps,e===null?Cx(n):Bt=e,fp.current=null}function Cx(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=HM(t,e),t!==null){t.flags&=32767,Bt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Gt=6,Bt=null;return}}else if(t=VM(t,e,Ln),t!==null){Bt=t;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=n}while(e!==null);Gt===0&&(Gt=5)}function Kr(n,e,t){var i=mt,r=qn.transition;try{qn.transition=null,mt=1,jM(n,e,t,i)}finally{qn.transition=r,mt=i}return null}function jM(n,e,t,i){do $s();while(Mr!==null);if(ut&6)throw Error(xe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(xe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(PS(n,s),n===jt&&(Bt=jt=null,en=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ol||(ol=!0,Nx(hc,function(){return $s(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=qn.transition,qn.transition=null;var o=mt;mt=1;var a=ut;ut|=4,fp.current=null,WM(n,t),Ex(t,n),gM(cd),mc=!!ld,cd=ld=null,n.current=t,XM(t),SS(),ut=a,mt=o,qn.transition=s}else n.current=t;if(ol&&(ol=!1,Mr=n,Lc=r),s=n.pendingLanes,s===0&&(Pr=null),TS(t.stateNode),wn(n,Ft()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Pc)throw Pc=!1,n=Cd,Cd=null,n;return Lc&1&&n.tag!==0&&$s(),s=n.pendingLanes,s&1?n===Pd?oa++:(oa=0,Pd=n):oa=0,kr(),null}function $s(){if(Mr!==null){var n=c_(Lc),e=qn.transition,t=mt;try{if(qn.transition=null,mt=16>n?16:n,Mr===null)var i=!1;else{if(n=Mr,Mr=null,Lc=0,ut&6)throw Error(xe(331));var r=ut;for(ut|=4,Fe=n.current;Fe!==null;){var s=Fe,o=s.child;if(Fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Fe=c;Fe!==null;){var u=Fe;switch(u.tag){case 0:case 11:case 15:ra(8,u,s)}var d=u.child;if(d!==null)d.return=u,Fe=d;else for(;Fe!==null;){u=Fe;var f=u.sibling,p=u.return;if(yx(u),u===c){Fe=null;break}if(f!==null){f.return=p,Fe=f;break}Fe=p}}}var m=s.alternate;if(m!==null){var g=m.child;if(g!==null){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(g!==null)}}Fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Fe=o;else e:for(;Fe!==null;){if(s=Fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ra(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Fe=h;break e}Fe=s.return}}var _=n.current;for(Fe=_;Fe!==null;){o=Fe;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,Fe=S;else e:for(o=_;Fe!==null;){if(a=Fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qc(9,a)}}catch(T){It(a,a.return,T)}if(a===o){Fe=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Fe=M;break e}Fe=a.return}}if(ut=r,kr(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(Xc,n)}catch{}i=!0}return i}finally{mt=t,qn.transition=e}}return!1}function mg(n,e,t){e=so(t,e),e=cx(n,e,1),n=Cr(n,e,1),e=vn(),n!==null&&(ka(n,1,e),wn(n,e))}function It(n,e,t){if(n.tag===3)mg(n,n,t);else for(;e!==null;){if(e.tag===3){mg(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pr===null||!Pr.has(i))){n=so(t,n),n=ux(e,n,1),e=Cr(e,n,1),n=vn(),e!==null&&(ka(e,1,n),wn(e,n));break}}e=e.return}}function ZM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=vn(),n.pingedLanes|=n.suspendedLanes&t,jt===n&&(en&t)===t&&(Gt===4||Gt===3&&(en&130023424)===en&&500>Ft()-hp?es(n,0):dp|=t),wn(n,e)}function Px(n,e){e===0&&(n.mode&1?(e=ja,ja<<=1,!(ja&130023424)&&(ja=4194304)):e=1);var t=vn();n=Zi(n,e),n!==null&&(ka(n,e,t),wn(n,t))}function JM(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Px(n,t)}function QM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(xe(314))}i!==null&&i.delete(e),Px(n,t)}var Lx;Lx=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||En.current)Mn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Mn=!1,zM(n,e,t);Mn=!!(n.flags&131072)}else Mn=!1,At&&e.flags&1048576&&U_(e,Mc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ql(n,e),n=e.pendingProps;var r=to(e,dn.current);qs(e,t),r=op(null,e,i,n,r,t);var s=ap();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tn(i)?(s=!0,yc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,tp(e),r.updater=Jc,e.stateNode=r,r._reactInternals=e,_d(e,i,n,t),e=Sd(null,e,i,!0,s,t)):(e.tag=0,At&&s&&qh(e),gn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Ql(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=tE(i),n=ti(i,n),r){case 0:e=yd(null,e,i,n,t);break e;case 1:e=sg(null,e,i,n,t);break e;case 11:e=ig(null,e,i,n,t);break e;case 14:e=rg(null,e,i,ti(i.type,n),t);break e}throw Error(xe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),yd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),sg(n,e,i,r,t);case 3:e:{if(px(e),n===null)throw Error(xe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,V_(n,e),wc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=so(Error(xe(423)),e),e=og(n,e,i,t,r);break e}else if(i!==r){r=so(Error(xe(424)),e),e=og(n,e,i,t,r);break e}else for(In=Rr(e.stateNode.containerInfo.firstChild),Dn=e,At=!0,ii=null,t=B_(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(no(),i===r){e=Ji(n,e,t);break e}gn(n,e,i,t)}e=e.child}return e;case 5:return H_(e),n===null&&md(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,ud(i,r)?o=null:s!==null&&ud(i,s)&&(e.flags|=32),hx(n,e),gn(n,e,o,t),e.child;case 6:return n===null&&md(e),null;case 13:return mx(n,e,t);case 4:return np(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=io(e,null,i,t):gn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),ig(n,e,i,r,t);case 7:return gn(n,e,e.pendingProps,t),e.child;case 8:return gn(n,e,e.pendingProps.children,t),e.child;case 12:return gn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Et(Ec,i._currentValue),i._currentValue=o,s!==null)if(ui(s.value,o)){if(s.children===r.children&&!En.current){e=Ji(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Yi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),gd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(xe(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),gd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,qs(e,t),r=$n(r),i=i(r),e.flags|=1,gn(n,e,i,t),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),rg(n,e,i,r,t);case 15:return fx(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Ql(n,e),e.tag=1,Tn(i)?(n=!0,yc(e)):n=!1,qs(e,t),lx(e,i,r),_d(e,i,r,t),Sd(null,e,i,!0,n,t);case 19:return gx(n,e,t);case 22:return dx(n,e,t)}throw Error(xe(156,e.tag))};function Nx(n,e){return s_(n,e)}function eE(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(n,e,t,i){return new eE(n,e,t,i)}function vp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function tE(n){if(typeof n=="function")return vp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Fh)return 11;if(n===Oh)return 14}return 2}function Nr(n,e){var t=n.alternate;return t===null?(t=Xn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function nc(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")vp(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Is:return ts(t.children,r,s,e);case Uh:o=8,r|=8;break;case Hf:return n=Xn(12,t,e,r|2),n.elementType=Hf,n.lanes=s,n;case Gf:return n=Xn(13,t,e,r),n.elementType=Gf,n.lanes=s,n;case Wf:return n=Xn(19,t,e,r),n.elementType=Wf,n.lanes=s,n;case Hv:return tu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case zv:o=10;break e;case Vv:o=9;break e;case Fh:o=11;break e;case Oh:o=14;break e;case gr:o=16,i=null;break e}throw Error(xe(130,n==null?n:typeof n,""))}return e=Xn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ts(n,e,t,i){return n=Xn(7,n,i,e),n.lanes=t,n}function tu(n,e,t,i){return n=Xn(22,n,i,e),n.elementType=Hv,n.lanes=t,n.stateNode={isHidden:!1},n}function ku(n,e,t){return n=Xn(6,n,null,e),n.lanes=t,n}function Bu(n,e,t){return e=Xn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function nE(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xu(0),this.expirationTimes=xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _p(n,e,t,i,r,s,o,a,l){return n=new nE(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},tp(s),n}function iE(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ns,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Ix(n){if(!n)return Dr;n=n._reactInternals;e:{if(us(n)!==n||n.tag!==1)throw Error(xe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(xe(171))}if(n.tag===1){var t=n.type;if(Tn(t))return I_(n,t,e)}return e}function Dx(n,e,t,i,r,s,o,a,l){return n=_p(t,i,!0,n,r,s,o,a,l),n.context=Ix(null),t=n.current,i=vn(),r=Lr(t),s=Yi(i,r),s.callback=e??null,Cr(t,s,r),n.current.lanes=r,ka(n,r,i),wn(n,i),n}function nu(n,e,t,i){var r=e.current,s=vn(),o=Lr(r);return t=Ix(t),e.context===null?e.context=t:e.pendingContext=t,e=Yi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Cr(r,e,o),n!==null&&(li(n,r,o,s),jl(n,r,o)),o}function Ic(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function gg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function xp(n,e){gg(n,e),(n=n.alternate)&&gg(n,e)}function rE(){return null}var Ux=typeof reportError=="function"?reportError:function(n){console.error(n)};function yp(n){this._internalRoot=n}iu.prototype.render=yp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(xe(409));nu(n,e,null,null)};iu.prototype.unmount=yp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;os(function(){nu(null,n,null,null)}),e[ji]=null}};function iu(n){this._internalRoot=n}iu.prototype.unstable_scheduleHydration=function(n){if(n){var e=d_();n={blockedOn:null,target:n,priority:e};for(var t=0;t<_r.length&&e!==0&&e<_r[t].priority;t++);_r.splice(t,0,n),t===0&&p_(n)}};function Sp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ru(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vg(){}function sE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ic(o);s.call(c)}}var o=Dx(e,i,n,0,null,!1,!1,"",vg);return n._reactRootContainer=o,n[ji]=o.current,ya(n.nodeType===8?n.parentNode:n),os(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ic(l);a.call(c)}}var l=_p(n,0,!1,null,null,!1,!1,"",vg);return n._reactRootContainer=l,n[ji]=l.current,ya(n.nodeType===8?n.parentNode:n),os(function(){nu(e,l,t,i)}),l}function su(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ic(o);a.call(l)}}nu(e,o,n,r)}else o=sE(t,e,n,r,i);return Ic(o)}u_=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ko(e.pendingLanes);t!==0&&(zh(e,t|1),wn(e,Ft()),!(ut&6)&&(oo=Ft()+500,kr()))}break;case 13:os(function(){var i=Zi(n,1);if(i!==null){var r=vn();li(i,n,1,r)}}),xp(n,1)}};Vh=function(n){if(n.tag===13){var e=Zi(n,134217728);if(e!==null){var t=vn();li(e,n,134217728,t)}xp(n,134217728)}};f_=function(n){if(n.tag===13){var e=Lr(n),t=Zi(n,e);if(t!==null){var i=vn();li(t,n,e,i)}xp(n,e)}};d_=function(){return mt};h_=function(n,e){var t=mt;try{return mt=n,e()}finally{mt=t}};ed=function(n,e,t){switch(e){case"input":if(Kf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=$c(i);if(!r)throw Error(xe(90));Wv(i),Kf(i,r)}}}break;case"textarea":Yv(n,t);break;case"select":e=t.value,e!=null&&Ws(n,!!t.multiple,e,!1)}};Qv=pp;e_=os;var oE={usingClientEntryPoint:!1,Events:[za,Os,$c,Zv,Jv,pp]},Co={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aE={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=i_(n),n===null?null:n.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||rE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{Xc=al.inject(aE),Ei=al}catch{}}On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oE;On.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sp(e))throw Error(xe(200));return iE(n,e,null,t)};On.createRoot=function(n,e){if(!Sp(n))throw Error(xe(299));var t=!1,i="",r=Ux;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_p(n,1,!1,null,null,t,!1,i,r),n[ji]=e.current,ya(n.nodeType===8?n.parentNode:n),new yp(e)};On.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(xe(188)):(n=Object.keys(n).join(","),Error(xe(268,n)));return n=i_(e),n=n===null?null:n.stateNode,n};On.flushSync=function(n){return os(n)};On.hydrate=function(n,e,t){if(!ru(e))throw Error(xe(200));return su(null,n,e,!0,t)};On.hydrateRoot=function(n,e,t){if(!Sp(n))throw Error(xe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Ux;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Dx(e,null,n,1,t??null,r,!1,s,o),n[ji]=e.current,ya(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new iu(e)};On.render=function(n,e,t){if(!ru(e))throw Error(xe(200));return su(null,n,e,!1,t)};On.unmountComponentAtNode=function(n){if(!ru(n))throw Error(xe(40));return n._reactRootContainer?(os(function(){su(null,null,n,!1,function(){n._reactRootContainer=null,n[ji]=null})}),!0):!1};On.unstable_batchedUpdates=pp;On.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!ru(t))throw Error(xe(200));if(n==null||n._reactInternals===void 0)throw Error(xe(38));return su(n,e,t,!1,i)};On.version="18.3.1-next-f1338f8080-20240426";function Fx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fx)}catch(n){console.error(n)}}Fx(),Fv.exports=On;var lE=Fv.exports,_g=lE;zf.createRoot=_g.createRoot,zf.hydrateRoot=_g.hydrateRoot;const Ox=""+new URL("cresome_logo-CMRIFPFN.svg",import.meta.url).href;function kx({value:n,onChange:e}){return j.jsxs("div",{className:"bg-switcher",children:[j.jsx("div",{className:"bg-switcher-label",children:"背景"}),j.jsxs("div",{className:"bg-switcher-options",children:[j.jsx("button",{type:"button",className:"bg-switcher-btn"+(n==="wave"?" active":""),onClick:()=>e("wave"),children:"波"}),j.jsx("button",{type:"button",className:"bg-switcher-btn"+(n==="spacewars"?" active":""),onClick:()=>e("spacewars"),children:"宇宙船"}),j.jsx("button",{type:"button",className:"bg-switcher-btn"+(n==="map"?" active":""),onClick:()=>e("map"),children:"地図"})]})]})}function cE({items:n,onSelect:e,bgMode:t,onBgModeChange:i}){return j.jsxs("aside",{className:"sidebar",children:[j.jsxs("div",{className:"brand",children:[j.jsx("img",{src:Ox,alt:"cresome"}),j.jsx("div",{className:"brand-name",children:"クリサム株式会社"})]}),j.jsx("nav",{className:"nav",children:n.map(r=>j.jsx("div",{className:"nav-item"+(r.active?" active":""),"data-nav":r.id,onClick:()=>e(r.id),children:r.label},r.id))}),j.jsx(kx,{value:t,onChange:i}),j.jsxs("div",{className:"sidebar-foot",children:["© cresome.tech",j.jsx("br",{}),"Cresome Technical Works"]})]})}function uE({onMenu:n}){return j.jsxs("div",{className:"topbar",children:[j.jsx("div",{className:"brand",children:j.jsx("img",{src:Ox,alt:"cresome"})}),j.jsx("button",{className:"menu-btn","aria-label":"メニュー",onClick:n,children:j.jsxs("span",{className:"menu-bars",children:[j.jsx("span",{}),j.jsx("span",{}),j.jsx("span",{})]})})]})}function fE({items:n,open:e,onClose:t,onSelect:i,bgMode:r,onBgModeChange:s}){return j.jsxs(j.Fragment,{children:[j.jsx("div",{className:"scrim"+(e?" open":""),onClick:t}),j.jsxs("aside",{className:"drawer"+(e?" open":""),children:[j.jsxs("div",{className:"drawer-top",children:[j.jsx("div",{className:"brand"}),j.jsx("button",{className:"drawer-close","aria-label":"閉じる",onClick:t})]}),j.jsx("nav",{className:"nav",children:n.map(o=>j.jsx("div",{className:"nav-item"+(o.active?" active":""),"data-nav":o.id,onClick:()=>i(o.id),children:o.label},o.id))}),j.jsx(kx,{value:r,onChange:s}),j.jsx("div",{className:"drawer-foot",children:"© cresome.tech"})]})]})}const xg=Math.PI*2,yg="200, 200, 210",Sg=150,Mg=1e3,Eg=24,dE=240,Tg=600,hE=.2,pE=1,mE=40,gE=(n,e,t)=>64*Math.sin(n*.006+e*.002+t*.3)+24*Math.sin(e*.009-t*.22+1.7)+12*Math.sin((n+e)*.004+t*.18+3.9)+6*Math.sin((e-n*.6)*.005-t*.14);function vE(){const n=St.useRef(null);return St.useEffect(()=>{const e=n.current;if(!e)return;const t=e.getContext("2d");if(!t)return;const i=window.matchMedia("(prefers-reduced-motion: reduce)");let r=null,s=null,o=0,a=0,l=0;const c=()=>{t.clearRect(0,0,a,l);const v=l*hE,h=a/2;for(let _=Mg;_>=Sg;_-=Eg){const S=Tg/_,M=(a/2+20)*_/Tg;let T=Eg;const E=T*S;E<11?T=11/S:E>42&&(T=42/S);const A=Math.ceil(M/T),x=Math.min(1,(_-Sg)/220)*Math.min(1,(Mg-_)/320);if(!(x<=.02))for(let b=-A;b<=A;b++){const P=b*T,L=gE(P,_,o),O=h+P*S,Z=v+(dE-L)*S;if(O<-20||O>a+20||Z<-20||Z>l+20)continue;const te=Math.min(1,Math.max(0,(L/mE+1)/2)),k=x*(.16+.52*te);if(k<=.02)continue;const $=Math.min(1.8*S,pE);t.fillStyle=`rgba(${yg}, ${k*.25})`,t.beginPath(),t.arc(O,Z,$*3,0,xg),t.fill(),t.fillStyle=`rgba(${yg}, ${k})`,t.beginPath(),t.arc(O,Z,$,0,xg),t.fill()}}},u=()=>{const v=Math.min(window.devicePixelRatio||1,2);a=window.innerWidth,l=window.innerHeight,e.width=Math.round(a*v),e.height=Math.round(l*v),t.setTransform(v,0,0,v,0,0),c()},d=v=>{s!==null&&(o+=Math.min((v-s)/1e3,.1)),s=v,c(),r=requestAnimationFrame(d)},f=()=>{r!==null&&(cancelAnimationFrame(r),r=null)},p=()=>{r===null&&!i.matches&&(s=null,r=requestAnimationFrame(d))},m=()=>{document.hidden?f():p()},g=()=>{f(),i.matches?c():p()};return u(),window.addEventListener("resize",u),document.addEventListener("visibilitychange",m),i.addEventListener("change",g),p(),()=>{window.removeEventListener("resize",u),document.removeEventListener("visibilitychange",m),i.removeEventListener("change",g),f()}},[]),j.jsx("canvas",{ref:n,className:"wave-bg","aria-hidden":"true"})}const ft=Math.PI*2,hn="31, 42, 84",_E=80,zu=.5,Vu=.5,wg=.36,xE=42e4,yE=25,zn=40,Ag=64,ll=98,bg=235,Rg=2.4,Hu=520,Gu=8,SE=.1,ME=2,Cg=4,EE=.3,TE=2,wE=.25,Pg=.6,cl=40,AE=800,bE=.4,ul=.9,fl=.55,Po=13,RE=20,Wu=15,CE=4,PE=10,LE=6,Lg=100,Ng=30.75,Ig=17,dl=41,Dg=40,NE=1,Ug=.45,Xu=4,Yu=.75,IE=1,DE=10,UE=.85,Fg=140,hl=210,FE=.7,Og=2,kg=5,OE=10,Bg=16,kE=Math.PI/6,zg=Math.PI/4,Vg=.6,BE=.02,zE=12,VE=8,HE=11,GE=40,WE=110,XE=3,YE=8,Hg=12,pl=80,Lo=[[[16,0],[-11,9]],[[-11,9],[-5,3.5]],[[-5,3.5],[-8,0]],[[-8,0],[-5,-3.5]],[[-5,-3.5],[-11,-9]],[[-11,-9],[16,0]]],No=(()=>{const n=[],i=ft-1.06;for(let r=0;r<9;r++){const s=1.06+(i-1.06)*r/9,o=1.06+(i-1.06)*(r+1)/9;n.push([[8*Math.cos(s),8*Math.sin(s)],[8*Math.cos(o),8*Math.sin(o)]])}return n.push([[3.9,7],[11,0]],[[11,0],[3.9,-7]],[[-7,4],[-17,8]],[[-17,8],[-27,8]],[[-7,-4],[-17,-8]],[[-17,-8],[-27,-8]]),n})(),Ku=[[[-3,0],[3,0]],[[-3,-2],[-6,-4]],[[-3,2],[-6,4]]],Gg=[{x:-30,y:-13},{x:-30,y:13},{x:-30,y:-21},{x:-30,y:21}],Nt=(n,e)=>n+Math.random()*(e-n);function KE(){const n=St.useRef(null);return St.useEffect(()=>{const e=n.current;if(!e)return;const t=e.getContext("2d");if(!t)return;const i=window.matchMedia("(prefers-reduced-motion: reduce)");let r=null,s=null,o=0,a=0,l=0,c=3,u=0,d=0,f=0,p=[],m=null,g=null,v=[],h=[],_=[],S=0,M=[];const T={w:!1,a:!1,s:!1,d:!1,space:!1},E=()=>{p=Array.from({length:_E},()=>({x:Math.random()*a,y:Math.random()*l,r:Nt(.5,1.3),a:Nt(.05,.16),vx:Nt(-1.5,1.5),vy:Nt(-1,1)})),m={x:a*.3,y:l*.45,angle:-Math.PI/2,velX:0,velY:0,warp:{t0:o},pendingBoost:!0},g={x:a*.75,y:l*.3,angle:Nt(0,ft),velX:0,velY:0,turn:0,thrust:!1,thrustUntil:0,brake:!1,brakeUntil:0,nextAction:o+Nt(2,4),arms:{phase:"idle",nextLoad:o+5,loadStart:0,fireIdx:0,nextFire:0,lastEnd:0},warp:{t0:o+.15},pendingBoost:!0},S=o+Nt(1,3)},A=z=>{z.x<-zn?z.x=a+zn:z.x>a+zn&&(z.x=-zn),z.y<-zn?z.y=l+zn:z.y>l+zn&&(z.y=-zn)},x=(z,Te,Pe,ue)=>{ue<=.01||(t.fillStyle=`rgba(${hn}, ${ue})`,t.beginPath(),t.arc(z,Te,Math.max(Pe,.4),0,ft),t.fill())},b=(z,Te,Pe)=>{const ue=.4+.6*Math.abs(Math.sin(o*24+Pe));for(let he=0;he<2;he++){const we=2.5+he*3,W=(1.6+he*1.2)*(.75+.5*Math.random()),V=(.22-he*.08)*ue;x(8,z*(4.5+we)+(Math.random()-.5),W,V),x(-8,Te*(5+we)+(Math.random()-.5),W,V)}},P=z=>{const Te=.4+.6*Math.abs(Math.sin(o*26+z));for(let Pe=0;Pe<3;Pe++){const ue=2.5+Pe*2.5,he=(1.5+Pe*1)*(.75+.5*Math.random()),we=(.26-Pe*.06)*Te;x(-3.5-ue,(Math.random()-.5)*1.2,he,we)}},L=(z,Te)=>{const Pe=z>0?-1:1,ue=z>0?1:-1,he=.4+.6*Math.abs(Math.sin(o*24+Te)),we=Math.cos(zg),W=Math.sin(zg);for(let V=0;V<2;V++){const ge=2+V*2.5,fe=(1.4+V*.9)*(.75+.5*Math.random()),C=(.24-V*.08)*he;x(2.5-we*ge,Pe*(1.2+W*ge)+(Math.random()-.5)*.8,fe,C),x(-2.5-we*ge,ue*(1.2+W*ge)+(Math.random()-.5)*.8,fe,C)}},O=()=>{const z=Nt(VE,HE),Te=40,Pe=Math.floor(Math.random()*4);let ue,he,we;Pe===0?(ue=Nt(0,a),he=-Te,we=Math.PI/2):Pe===1?(ue=a+Te,he=Nt(0,l),we=Math.PI):Pe===2?(ue=Nt(0,a),he=l+Te,we=-Math.PI/2):(ue=-Te,he=Nt(0,l),we=0);const W=we+Nt(-1.2,1.2),V=Nt(GE,WE),ge=7+Math.floor(Math.random()*3),fe=[];for(let C=0;C<ge;C++){const Oe=C/ge*ft,Be=z*Nt(.72,1.18);fe.push([Math.cos(Oe)*Be,Math.sin(Oe)*Be])}_.push({x:ue,y:he,velX:Math.cos(W)*V,velY:Math.sin(W)*V,r:z,angle:Nt(0,ft),angleV:Nt(-.7,.7),pts:fe,segs:fe.map((C,Oe)=>[C,fe[(Oe+1)%fe.length]])})},Z=()=>{const z=a*zu,Te=l*Vu,Pe=Math.min(a,l)*wg*.8;for(let ue=0;ue<12;ue++){const he=60+Math.random()*Math.max(a-120,1),we=60+Math.random()*Math.max(l-120,1);if(Math.hypot(he-z,we-Te)>Pe)return{x:he,y:we}}return{x:a*.2,y:l*.2}},te=(z,Te,Pe,ue,he=!1)=>{const we=Math.cos(z.angle),W=Math.sin(z.angle),V=Te.map(([ge,fe])=>{const C=ge[0]*we-ge[1]*W,Oe=ge[0]*W+ge[1]*we,Be=fe[0]*we-fe[1]*W,R=fe[0]*W+fe[1]*we,y=(C+Be)/2,D=(Oe+R)/2;return{ax:C,ay:Oe,bx:Be,by:R,ang0:Math.atan2(D,y),r0:Math.max(Math.hypot(y,D),4),vr:50+Math.random()*110,w:(Math.random()<.5?-1:1)*(1.5+Math.random()*3)}});M.push({x:z.x,y:z.y,vx:Pe,vy:ue,t0:o,segs:V,noRing:he})},k=(z,Te,Pe,ue)=>{z.dead||(z.dead=!0,z.deadUntil=o+ul,te(z,Te,Pe,ue))},$=z=>{const Te=Z();z.x=Te.x,z.y=Te.y,z.angle=Math.random()*ft,z.velX=0,z.velY=0,z.thrustUntil=0,z.dead=!1,z.warp={t0:o},z.pendingBoost=!0},Y=z=>{const Te=(o-z.warp.t0)/fl;if(Te<0||Te>=1||i.matches)return;const Pe=.4*(1-Te);t.lineWidth=1,t.strokeStyle=`rgba(${hn}, ${Pe})`,t.beginPath();for(let ue=0;ue<8;ue++){const he=z.angle+ue*ft/8+o*2.5,we=6+10*Te,W=we+12+40*Te;t.moveTo(z.x+Math.cos(he)*we,z.y+Math.sin(he)*we),t.lineTo(z.x+Math.cos(he)*W,z.y+Math.sin(he)*W)}t.stroke(),t.strokeStyle=`rgba(${hn}, ${.3*(1-Te)})`,t.beginPath(),t.arc(z.x,z.y,4+50*Te,0,ft),t.stroke()},U=z=>{if(!z.warp||i.matches)return 1;const Te=(o-z.warp.t0)/fl;return Te<.55?0:Math.min((Te-.55)/.45,1)},H=z=>{for(const W of p)W.x+=W.vx*z,W.y+=W.vy*z,W.x<-2?W.x+=a+4:W.x>a+2&&(W.x-=a+4),W.y<-2?W.y+=l+4:W.y>l+2&&(W.y-=l+4);if(!m.dead){const W=Math.cos(m.angle),V=Math.sin(m.angle);T.w&&(m.velX+=W*ll*z,m.velY+=V*ll*z),T.s&&(m.velX-=W*ll*z,m.velY-=V*ll*z);const ge=Math.hypot(m.velX,m.velY);if(ge>bg){const fe=bg/ge;m.velX*=fe,m.velY*=fe}m.x+=m.velX*z,m.y+=m.velY*z,T.a&&(m.angle-=Rg*z),T.d&&(m.angle+=Rg*z),A(m)}const Te=a*zu,Pe=l*Vu,ue=Math.min(a,l)*wg,he=W=>{const V=Te-W.x,ge=Pe-W.y,fe=Math.hypot(V,ge);if(fe>=ue||fe===0)return null;const C=Math.max(fe,yE),Oe=Math.min(xE/(C*C),900);return{x:V/fe*Oe,y:ge/fe*Oe}},we=he(m);if(we&&(m.velX+=we.x*z,m.velY+=we.y*z),m.dead)f=0,d=0;else{const W=v.reduce((V,ge)=>V+(ge.o==="p"?1:0),0);T.space&&o>=d&&f<Gu&&W<Gu&&(v.push({x:m.x+Math.cos(m.angle)*20,y:m.y+Math.sin(m.angle)*20,a:m.angle,o:"p"}),f+=1,f>=Gu?(f=0,d=o+ME):d=o+SE),!T.space&&f>0&&(f=0,d=0)}if(!g.dead){if(o>=g.nextAction){const C=Math.random();g.turn=C<.3?Ug:C<.55?-Ug:0;const Oe=Math.random();Oe<.45?(g.thrust=!0,g.thrustUntil=o+NE,g.brake=!1):Oe<.62?(g.thrust=!1,g.brake=!0,g.brakeUntil=o+Nt(1,2)):(g.thrust=!1,g.brake=!1),g.nextAction=o+Nt(3,7)}g.brake&&o>=g.brakeUntil&&(g.brake=!1),g.thrust&&o>=g.thrustUntil&&(g.thrust=!1),g.angle+=g.turn*z;const W=g.velX*Math.cos(g.angle)+g.velY*Math.sin(g.angle);g.thrust&&W<Dg&&(g.velX+=Math.cos(g.angle)*Ng*z,g.velY+=Math.sin(g.angle)*Ng*z),g.brake&&(g.velX-=Math.cos(g.angle)*Ig*z,g.velY-=Math.sin(g.angle)*Ig*z);const V=he(g);V&&(g.velX+=V.x*z,g.velY+=V.y*z);const ge=Math.hypot(g.velX,g.velY);if(ge>dl){const C=dl/ge;g.velX*=C,g.velY*=C}g.x+=g.velX*z,g.y+=g.velY*z,A(g);const fe=g.arms;if(fe.phase==="idle"&&o>=fe.nextLoad)fe.phase="loading",fe.loadStart=o;else if(fe.phase==="loading"&&o-fe.loadStart>=Xu*Yu)fe.phase="firing",fe.fireIdx=0,fe.nextFire=o+.4;else if(fe.phase==="firing"){let C=!1;if(!m.dead){const Be=Math.hypot(m.x-g.x,m.y-g.y)/hl,R=m.x+m.velX*Be,y=m.y+m.velY*Be;let B=((Math.atan2(y-g.y,R-g.x)-g.angle)%ft+ft)%ft;B>Math.PI&&(B-=ft),C=Math.abs(B)<=kE}if(C&&o>=fe.nextFire&&fe.fireIdx<Xu){const Oe=Gg[fe.fireIdx],Be=Math.cos(g.angle),R=Math.sin(g.angle);h.push({x:g.x+Oe.x*Be-Oe.y*R,y:g.y+Oe.x*R+Oe.y*Be,angle:g.angle,velX:g.velX,velY:g.velY,born:o,turnDir:0,trail:[],trailAt:0}),fe.fireIdx+=1,fe.nextFire=o+IE}fe.fireIdx>=Xu&&(fe.phase="waiting")}else fe.phase==="waiting"&&h.length===0&&o-fe.lastEnd>=DE&&(fe.phase="idle",fe.nextLoad=o);if(o>=c&&!m.dead){const Oe=Math.hypot(m.x-g.x,m.y-g.y)/Hu,Be=m.x+m.velX*Oe*Pg+Nt(-cl,cl),R=m.y+m.velY*Oe*Pg+Nt(-cl,cl);let D=((Math.atan2(R-g.y,Be-g.x)-g.angle)%ft+ft)%ft;D>Math.PI&&(D-=ft),Math.abs(D)<=wE&&(v.push({x:g.x+Math.cos(g.angle)*14,y:g.y+Math.sin(g.angle)*14,a:g.angle,o:"e"}),u+=1,c=u>=Cg?o+TE:o+EE,u>=Cg&&(u=0))}}for(let W=v.length-1;W>=0;W--){const V=v[W];V.x+=Math.cos(V.a)*Hu*z,V.y+=Math.sin(V.a)*Hu*z,(V.x<-zn||V.x>a+zn||V.y<-zn||V.y>l+zn)&&v.splice(W,1)}for(const W of h){const V=o-W.born,ge=V>=kg,fe=m.dead||m.x<0||m.x>a||m.y<0||m.y>l;if(V>=FE&&!ge&&!fe){let R=((Math.atan2(m.y-W.y,m.x-W.x)-W.angle)%ft+ft)%ft;if(R>Math.PI&&(R-=ft),Math.abs(R)<=Math.PI/2){const y=m.x-W.x,D=m.y-W.y,B=m.velX-W.velX,q=m.velY-W.velY,me=B*B+q*q;let ye=me<1e-6?0:-(y*B+D*q)/me;ye<0&&(ye=0);const ee=m.x+m.velX*ye,oe=m.y+m.velY*ye;let ne=((Math.atan2(oe-W.y,ee-W.x)-W.angle)%ft+ft)%ft;ne>Math.PI&&(ne-=ft);const ae=UE*z,le=Math.max(-ae,Math.min(ae,ne));W.turnDir=Math.abs(ne)>.05?ne>0?1:-1:0,W.angle+=le}else W.turnDir=0}else W.turnDir=0;ge||(W.velX+=Math.cos(W.angle)*Fg*z,W.velY+=Math.sin(W.angle)*Fg*z);const Oe=Math.hypot(W.velX,W.velY);if(Oe>hl){const Be=hl/Oe;W.velX*=Be,W.velY*=Be}for(W.x+=W.velX*z,W.y+=W.velY*z,!ge&&o-W.trailAt>=BE&&(W.trail.push({x:W.x,y:W.y,t:o}),W.trailAt=o);W.trail.length&&o-W.trail[0].t>Vg;)W.trail.shift()}for(let W=h.length-1;W>=0;W--){const V=h[W],ge=o-V.born<Og,fe=!ge&&!m.dead&&Math.hypot(V.x-m.x,V.y-m.y)<Bg,C=!ge&&!g.dead&&Math.hypot(V.x-g.x,V.y-g.y)<Bg,Oe=Math.hypot(V.x-Te,V.y-Pe)<Po,Be=o-V.born>=OE,R=V.x<0||V.x>a||V.y<0||V.y>l;!fe&&!C&&!Oe&&!Be&&!R||(fe&&k(m,Lo,m.velX,m.velY),C&&k(g,No,g.velX,g.velY),(fe||C||Be)&&te(V,Ku,V.velX*.4,V.velY*.4,!0),h.splice(W,1),g.arms.lastEnd=o)}o>=S?_.length<zE?(O(),S=o+Nt(XE,YE)):S=o+.5:_.length===0&&(S=o+Math.min(S-o,1.5));for(let W=_.length-1;W>=0;W--){const V=_[W],ge=he(V);ge&&(V.velX+=ge.x*z,V.velY+=ge.y*z),V.x+=V.velX*z,V.y+=V.velY*z,V.angle+=V.angleV*z;let fe=!1;!m.dead&&Math.hypot(V.x-m.x,V.y-m.y)<V.r+Hg&&(k(m,Lo,m.velX,m.velY),fe=!0),!g.dead&&Math.hypot(V.x-g.x,V.y-g.y)<V.r+Hg&&(k(g,No,g.velX,g.velY),fe=!0),!fe&&Math.hypot(V.x-Te,V.y-Pe)<Po+V.r&&(fe=!0);const C=V.x<-pl||V.x>a+pl||V.y<-pl||V.y>l+pl;fe&&te(V,V.segs,V.velX*.4,V.velY*.4,!0),(fe||C)&&_.splice(W,1)}{const W=new Set;for(let V=0;V<_.length;V++)for(let ge=V+1;ge<_.length;ge++){const fe=_[V],C=_[ge];Math.hypot(fe.x-C.x,fe.y-C.y)<fe.r+C.r&&(W.add(V),W.add(ge))}if(W.size>0){for(const V of W)te(_[V],_[V].segs,_[V].velX*.4,_[V].velY*.4,!0);_=_.filter((V,ge)=>!W.has(ge))}}for(let W=v.length-1;W>=0;W--){const V=v[W];let ge=!1;const fe=V.o==="p"?g:m;if(!fe.dead&&Math.hypot(V.x-fe.x,V.y-fe.y)<Wu)if(V.o==="p")ge=!0,k(g,No,g.velX,g.velY);else{const C=Math.hypot(m.x-g.x,m.y-g.y),Oe=bE*Math.min(1,C/AE);if(Math.random()>=Oe)ge=!0,k(m,Lo,m.velX,m.velY);else{const Be=V.x-m.x,R=V.y-m.y,y=Math.hypot(Be,R)||1,D=Be/y,B=R/y,q=Math.cos(V.a),me=Math.sin(V.a),ye=q*D+me*B;V.a=Math.atan2(me-2*ye*B,q-2*ye*D),V.o="p",V.x=m.x+D*(Wu+2),V.y=m.y+B*(Wu+2)}}if(!ge&&Math.hypot(V.x-Te,V.y-Pe)<Po&&(ge=!0),!ge)for(let C=_.length-1;C>=0;C--){const Oe=_[C];if(Math.hypot(V.x-Oe.x,V.y-Oe.y)<Oe.r+CE){te(Oe,Oe.segs,Oe.velX*.4,Oe.velY*.4,!0),_.splice(C,1),ge=!0;break}}if(!ge)for(let C=h.length-1;C>=0;C--){const Oe=h[C];if(Math.hypot(V.x-Oe.x,V.y-Oe.y)<PE){te(Oe,Ku,Oe.velX*.4,Oe.velY*.4,!0),h.splice(C,1),g.arms.lastEnd=o,ge=!0;break}}ge&&v.splice(W,1)}for(let W=h.length-1;W>=0;W--){const V=h[W];if(!(o-V.born<Og))for(let ge=_.length-1;ge>=0;ge--){const fe=_[ge];if(Math.hypot(V.x-fe.x,V.y-fe.y)<fe.r+LE){te(V,Ku,V.velX*.4,V.velY*.4,!0),te(fe,fe.segs,fe.velX*.4,fe.velY*.4,!0),h.splice(W,1),_.splice(ge,1),g.arms.lastEnd=o;break}}}!m.dead&&Math.hypot(m.x-Te,m.y-Pe)<Po&&k(m,Lo,m.velX,m.velY),!g.dead&&Math.hypot(g.x-Te,g.y-Pe)<Po&&k(g,No,g.velX,g.velY),!m.dead&&!g.dead&&Math.hypot(m.x-g.x,m.y-g.y)<RE&&(k(m,Lo,m.velX,m.velY),k(g,No,g.velX,g.velY)),m.dead&&o>=m.deadUntil&&$(m),g.dead&&o>=g.deadUntil&&($(g),g.arms={phase:"idle",nextLoad:o+5,loadStart:0,fireIdx:0,nextFire:0,lastEnd:0},u=0,c=o+3),m.pendingBoost&&o>=m.warp.t0+fl&&(m.velX=Math.cos(m.angle)*Lg,m.velY=Math.sin(m.angle)*Lg,m.pendingBoost=!1),g.pendingBoost&&o>=g.warp.t0+fl&&(g.velX=Math.cos(g.angle)*dl,g.velY=Math.sin(g.angle)*dl,g.pendingBoost=!1),M=M.filter(W=>o-W.t0<ul)},J=()=>{t.clearRect(0,0,a,l);for(const ue of p)t.fillStyle=`rgba(${hn}, ${ue.a})`,t.beginPath(),t.arc(ue.x,ue.y,ue.r,0,ft),t.fill();const z=a*zu,Te=l*Vu;t.lineWidth=1;const Pe=o*.25;t.strokeStyle=`rgba(${hn}, 0.42)`;for(let ue=0;ue<3;ue++){const he=Pe+ue*ft/3,we=14;t.beginPath(),t.moveTo(z-Math.cos(he)*we,Te-Math.sin(he)*we),t.lineTo(z+Math.cos(he)*we,Te+Math.sin(he)*we),t.stroke()}t.strokeStyle=`rgba(${hn}, 0.14)`,t.beginPath(),t.arc(z,Te,9,0,ft),t.stroke(),t.strokeStyle=`rgba(${hn}, 0.4)`;for(const ue of _){const he=Math.cos(ue.angle),we=Math.sin(ue.angle);t.beginPath(),ue.pts.forEach(([W,V],ge)=>{const fe=ue.x+W*he-V*we,C=ue.y+W*we+V*he;ge===0?t.moveTo(fe,C):t.lineTo(fe,C)}),t.closePath(),t.stroke()}t.strokeStyle=`rgba(${hn}, 0.45)`;for(const ue of v)t.beginPath(),t.moveTo(ue.x-Math.cos(ue.a)*9,ue.y-Math.sin(ue.a)*9),t.lineTo(ue.x,ue.y),t.stroke();for(const ue of h)for(const he of ue.trail){const we=1-(o-he.t)/Vg;we<=0||x(he.x,he.y,1.1+(1-we)*2.2,.14*we)}t.strokeStyle=`rgba(${hn}, 0.5)`;for(let ue=0;ue<h.length;ue++){const he=h[ue],we=Math.cos(he.angle),W=Math.sin(he.angle);t.beginPath(),t.moveTo(he.x-we*3.5,he.y-W*3.5),t.lineTo(he.x+we*3.5,he.y+W*3.5),t.stroke(),t.save(),t.translate(he.x,he.y),t.rotate(he.angle),o-he.born<kg&&Math.hypot(he.velX,he.velY)<hl&&P(ue*.6),he.turnDir!==0&&L(he.turnDir,ue*.6),t.restore()}t.lineWidth=1;for(const ue of M){const he=o-ue.t0;if(he<0||he>=ul)continue;const W=.5*(he<.5?1:1-(he-.5)/(ul-.5)),V=ue.x+ue.vx*he,ge=ue.y+ue.vy*he;!ue.noRing&&he<.4&&(t.strokeStyle=`rgba(${hn}, ${.35*(1-he/.4)})`,t.beginPath(),t.arc(V,ge,5+he*220,0,ft),t.stroke()),t.strokeStyle=`rgba(${hn}, ${W})`,t.beginPath();for(const fe of ue.segs){const C=fe.ang0+fe.w*he,Oe=fe.r0+fe.vr*he,Be=V+Math.cos(C)*Oe,R=ge+Math.sin(C)*Oe,y=fe.w*.5*he,D=Math.cos(y),B=Math.sin(y),q=(fe.bx-fe.ax)/2,me=(fe.by-fe.ay)/2,ye=q*D-me*B,ee=q*B+me*D;t.moveTo(Be-ye,R-ee),t.lineTo(Be+ye,R+ee)}t.stroke()}if(!g.dead){const ue=U(g);t.lineWidth=1,t.save(),t.translate(g.x,g.y),t.rotate(g.angle),t.strokeStyle=`rgba(${hn}, ${.32*ue})`,t.beginPath(),t.arc(0,0,8,1.06,ft-1.06),t.moveTo(3.9,7),t.lineTo(11,0),t.lineTo(3.9,-7),t.stroke(),t.beginPath(),t.moveTo(-7,4),t.lineTo(-17,8),t.lineTo(-27,8),t.moveTo(-7,-4),t.lineTo(-17,-8),t.lineTo(-27,-8),t.stroke();const he=g.velX*Math.cos(g.angle)+g.velY*Math.sin(g.angle);if(ue>=1&&g.thrust&&he<Dg){const W=.4+.6*Math.abs(Math.sin(o*26));for(let V=0;V<3;V++){const ge=5+V*5,fe=(3+V*2.4)*(.75+.5*Math.random());x(-9-ge,(Math.random()-.5)*2.4,fe,(.26-V*.06)*W)}}if(ue>=1&&g.brake){const W=(.26+.16*Math.abs(Math.cos(o*26)))*ue;t.strokeStyle=`rgba(${hn}, ${W})`,t.beginPath(),t.moveTo(12,3),t.lineTo(18,4.5),t.moveTo(12,-3),t.lineTo(18,-4.5),t.stroke()}ue>=1&&g.turn!==0&&b(g.turn>0?-1:1,g.turn>0?1:-1,.7);const we=g.arms;(we.phase==="loading"||we.phase==="firing")&&Gg.forEach((W,V)=>{const ge=we.phase==="firing"?V>=we.fireIdx?1:0:Math.min(Math.max((o-we.loadStart-V*Yu)/Yu,0),1);ge<=0||(t.strokeStyle=`rgba(${hn}, ${.32*ge*ue})`,t.beginPath(),t.moveTo(W.x-2.5,W.y),t.lineTo(W.x+2.5,W.y),t.stroke())}),t.restore(),g.warp&&Y(g)}if(!m.dead){const ue=U(m);if(t.save(),t.translate(m.x,m.y),t.rotate(m.angle),t.strokeStyle=`rgba(${hn}, ${.5*ue})`,t.beginPath(),t.moveTo(16,0),t.lineTo(-11,9),t.lineTo(-5,3.5),t.lineTo(-8,0),t.lineTo(-5,-3.5),t.lineTo(-11,-9),t.closePath(),t.stroke(),ue>=1&&T.w){const he=.4+.6*Math.abs(Math.sin(o*26));for(let we=0;we<3;we++){const W=5+we*5,V=(3+we*2.4)*(.75+.5*Math.random());x(-9-W,(Math.random()-.5)*2.4,V,(.26-we*.06)*he)}}if(ue>=1&&T.s){const he=.4+.6*Math.abs(Math.cos(o*24));[6,-6].forEach(we=>{for(let W=0;W<2;W++){const V=3+W*3.5,ge=(1.7+W*1.1)*(.75+.5*Math.random());x(9+V,we*(1+.16*V)+(Math.random()-.5)*1.2,ge,(.2-W*.07)*he)}})}ue>=1&&(T.a||T.d)&&b(T.d?-1:1,T.d?1:-1,1.3),t.restore(),m.warp&&Y(m)}},ce=()=>{const z=Math.min(window.devicePixelRatio||1,2);a=window.innerWidth-2*Ag,l=window.innerHeight-2*Ag,e.width=Math.round(a*z),e.height=Math.round(l*z),t.setTransform(z,0,0,z,0,0),m||E(),J()},Se=z=>{if(s!==null){const Te=Math.min((z-s)/1e3,.1);o+=Te,H(Te)}s=z,J(),r=requestAnimationFrame(Se)},qe=()=>{r!==null&&(cancelAnimationFrame(r),r=null)},rt=()=>{r===null&&!i.matches&&(s=null,r=requestAnimationFrame(Se))},Ge=()=>{document.hidden?(qe(),Ke()):rt()},Q=()=>{qe(),i.matches?J():rt()},se=z=>{switch(z.code){case"KeyW":return"w";case"KeyA":return"a";case"KeyS":return"s";case"KeyD":return"d";case"Space":return"space";default:return""}},pe=z=>z==="w"||z==="a"||z==="s"||z==="d"||z==="space",Ke=()=>{T.w=!1,T.a=!1,T.s=!1,T.d=!1,T.space=!1},He=z=>{const Te=se(z);if(!pe(Te)||z.ctrlKey||z.metaKey||z.altKey)return;const Pe=z.target;Pe&&(Pe.tagName==="INPUT"||Pe.tagName==="TEXTAREA"||Pe.isContentEditable)||(T[Te]=!0,Te==="space"&&z.preventDefault())},Ie=z=>{const Te=se(z);pe(Te)&&(T[Te]=!1)},gt=()=>{Ke()};return ce(),window.addEventListener("resize",ce),window.addEventListener("keydown",He),window.addEventListener("keyup",Ie),window.addEventListener("blur",gt),document.addEventListener("visibilitychange",Ge),i.addEventListener("change",Q),rt(),()=>{window.removeEventListener("resize",ce),window.removeEventListener("keydown",He),window.removeEventListener("keyup",Ie),window.removeEventListener("blur",gt),document.removeEventListener("visibilitychange",Ge),i.removeEventListener("change",Q),qe()}},[]),j.jsx("canvas",{ref:n,className:"sw-bg","aria-hidden":"true"})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mp="185",qE=0,Wg=1,$E=2,ic=1,jE=2,$o=3,Qi=0,An=1,yi=2,Ki=0,js=1,Xg=2,Yg=3,Kg=4,ZE=5,qr=100,JE=101,QE=102,eT=103,tT=104,nT=200,iT=201,rT=202,sT=203,Id=204,Dd=205,oT=206,aT=207,lT=208,cT=209,uT=210,fT=211,dT=212,hT=213,pT=214,Ud=0,Fd=1,Od=2,ao=3,kd=4,Bd=5,zd=6,Vd=7,Bx=0,mT=1,gT=2,wi=0,zx=1,Vx=2,Hx=3,Gx=4,Wx=5,Xx=6,Yx=7,qg="attached",vT="detached",Kx=300,as=301,lo=302,qu=303,$u=304,ou=306,co=1e3,Si=1001,Dc=1002,Wt=1003,qx=1004,jo=1005,Xt=1006,rc=1007,Wi=1008,Nn=1009,$x=1010,jx=1011,Ca=1012,Ep=1013,Ri=1014,Yn=1015,er=1016,Tp=1017,wp=1018,Pa=1020,Zx=35902,Jx=35899,Qx=1021,ey=1022,Kn=1023,tr=1026,Qr=1027,Ap=1028,bp=1029,ls=1030,Rp=1031,Cp=1033,sc=33776,oc=33777,ac=33778,lc=33779,Hd=35840,Gd=35841,Wd=35842,Xd=35843,Yd=36196,Kd=37492,qd=37496,$d=37488,jd=37489,Uc=37490,Zd=37491,Jd=37808,Qd=37809,eh=37810,th=37811,nh=37812,ih=37813,rh=37814,sh=37815,oh=37816,ah=37817,lh=37818,ch=37819,uh=37820,fh=37821,dh=36492,hh=36494,ph=36495,mh=36283,gh=36284,Fc=36285,vh=36286,La=2300,Na=2301,ju=2302,$g=2303,jg=2400,Zg=2401,Jg=2402,_T=2500,xT=0,ty=1,_h=2,yT=3200,xh=0,ST=1,yr="",Qt="srgb",Fn="srgb-linear",Oc="linear",dt="srgb",ms=7680,Qg=519,MT=512,ET=513,TT=514,Pp=515,wT=516,AT=517,Lp=518,bT=519,yh=35044,e0="300 es",Mi=2e3,Ia=2001;function RT(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function CT(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function PT(){const n=Da("canvas");return n.style.display="block",n}const t0={};function kc(...n){const e="THREE."+n.shift();console.log(e,...n)}function ny(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ve(...n){n=ny(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function $e(...n){n=ny(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Zs(...n){const e=n.join(" ");e in t0||(t0[e]=!0,Ve(...n))}function LT(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const NT={[Ud]:Fd,[Od]:zd,[kd]:Vd,[ao]:Bd,[Fd]:Ud,[zd]:Od,[Vd]:kd,[Bd]:ao};class fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let n0=1234567;const aa=Math.PI/180,uo=180/Math.PI;function ci(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function Np(n,e){return(n%e+e)%e}function IT(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function DT(n,e,t){return n!==e?(t-n)/(e-n):0}function la(n,e,t){return(1-t)*n+t*e}function UT(n,e,t,i){return la(n,e,1-Math.exp(-t*i))}function FT(n,e=1){return e-Math.abs(Np(n,e*2)-e)}function OT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function kT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function BT(n,e){return n+Math.floor(Math.random()*(e-n+1))}function zT(n,e){return n+Math.random()*(e-n)}function VT(n){return n*(.5-Math.random())}function HT(n){n!==void 0&&(n0=n);let e=n0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function GT(n){return n*aa}function WT(n){return n*uo}function XT(n){return(n&n-1)===0&&n!==0}function YT(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function KT(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qT(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*m,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*m,a*c);break;case"ZYZ":n.set(l*m,l*p,a*u,a*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ip={DEG2RAD:aa,RAD2DEG:uo,generateUUID:ci,clamp:it,euclideanModulo:Np,mapLinear:IT,inverseLerp:DT,lerp:la,damp:UT,pingpong:FT,smoothstep:OT,smootherstep:kT,randInt:BT,randFloat:zT,randFloatSpread:VT,seededRandom:HT,degToRad:GT,radToDeg:WT,isPowerOfTwo:XT,ceilPowerOfTwo:YT,floorPowerOfTwo:KT,setQuaternionFromProperEuler:qT,normalize:ht,denormalize:ri},jp=class jp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jp.prototype.isVector2=!0;let Ye=jp;class ir{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],m=s[o+2],g=s[o+3];if(d!==g||l!==f||c!==p||u!==m){let v=l*f+c*p+u*m+d*g;v<0&&(f=-f,p=-p,m=-m,g=-g,v=-v);let h=1-a;if(v<.9995){const _=Math.acos(v),S=Math.sin(_);h=Math.sin(h*_)/S,a=Math.sin(a*_)/S,l=l*h+f*a,c=c*h+p*a,u=u*h+m*a,d=d*h+g*a}else{l=l*h+f*a,c=c*h+p*a,u=u*h+m*a,d=d*h+g*a;const _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],m=s[o+3];return e[t]=a*m+u*d+l*p-c*f,e[t+1]=l*m+u*f+c*d-a*p,e[t+2]=c*m+u*p+a*f-l*d,e[t+3]=u*m-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d-f*p*m;break;case"YXZ":this._x=f*u*d+c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d+f*p*m;break;case"ZXY":this._x=f*u*d-c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d-f*p*m;break;case"ZYX":this._x=f*u*d-c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d+f*p*m;break;case"YZX":this._x=f*u*d+c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d-f*p*m;break;case"XZY":this._x=f*u*d-c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d+f*p*m;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Zp=class Zp{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(i0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(i0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zu.copy(this).projectOnVector(e),this.sub(Zu)}reflect(e){return this.sub(Zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zp.prototype.isVector3=!0;let I=Zp;const Zu=new I,i0=new ir,Jp=class Jp{constructor(e,t,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],m=i[8],g=r[0],v=r[3],h=r[6],_=r[1],S=r[4],M=r[7],T=r[2],E=r[5],A=r[8];return s[0]=o*g+a*_+l*T,s[3]=o*v+a*S+l*E,s[6]=o*h+a*M+l*A,s[1]=c*g+u*_+d*T,s[4]=c*v+u*S+d*E,s[7]=c*h+u*M+d*A,s[2]=f*g+p*_+m*T,s[5]=f*v+p*S+m*E,s[8]=f*h+p*M+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,m=t*d+i*f+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=d*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ju.makeScale(e,t)),this}rotate(e){return Zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ju.makeRotation(-e)),this}translate(e,t){return Zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ju.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jp.prototype.isMatrix3=!0;let Ze=Jp;const Ju=new Ze,r0=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),s0=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $T(){const n={enabled:!0,workingColorSpace:Fn,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===dt&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(r.r=Js(r.r),r.g=Js(r.g),r.b=Js(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yr?Oc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fn]:{primaries:e,whitePoint:i,transfer:Oc,toXYZ:r0,fromXYZ:s0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:r0,fromXYZ:s0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}const at=$T();function qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let gs;class jT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gs===void 0&&(gs=Da("canvas")),gs.width=e.width,gs.height=e.height;const r=gs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=gs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Da("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qi(t[i]/255)*255):t[i]=qi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZT=0;class Dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qu(r[o].image)):s.push(Qu(r[o]))}else s=Qu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let JT=0;const ef=new I;class Zt extends fs{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=Si,r=Si,s=Xt,o=Wi,a=Kn,l=Nn,c=Zt.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JT++}),this.uuid=ci(),this.name="",this.source=new Dp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ef).x}get height(){return this.source.getSize(ef).y}get depth(){return this.source.getSize(ef).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case co:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case co:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Kx;Zt.DEFAULT_ANISOTROPY=1;const Qp=class Qp{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],m=l[9],g=l[2],v=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(m-v)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(m+v)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,M=(p+1)/2,T=(h+1)/2,E=(u+f)/4,A=(d+g)/4,x=(m+v)/4;return S>M&&S>T?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=E/i,s=A/i):M>T?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=x/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=x/s),this.set(i,r,s,t),this}let _=Math.sqrt((v-m)*(v-m)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(v-m)/_,this.y=(d-g)/_,this.z=(f-u)/_,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qp.prototype.isVector4=!0;let _t=Qp;class QT extends fs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Zt(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Dp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends QT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class iy extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ew extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gc=class Gc{constructor(e,t,i,r,s,o,a,l,c,u,d,f,p,m,g,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,p,m,g,v)}set(e,t,i,r,s,o,a,l,c,u,d,f,p,m,g,v){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=m,h[11]=g,h[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,m=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+m*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=m+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,m=c*u,g=c*d;t[0]=f+g*a,t[4]=m*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-m,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,m=c*u,g=c*d;t[0]=f-g*a,t[4]=-o*d,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,m=a*u,g=a*d;t[0]=l*u,t[4]=m*c-p,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=p*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,m=a*l,g=a*c;t[0]=l*u,t[4]=g-f*d,t[8]=m*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+m,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,p=o*c,m=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=o*u,t[9]=p*d-m,t[2]=m*d-p,t[6]=a*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tw,e,nw)}lookAt(e,t,i){const r=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),cr.crossVectors(i,Cn),cr.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),cr.crossVectors(i,Cn)),cr.normalize(),ml.crossVectors(Cn,cr),r[0]=cr.x,r[4]=ml.x,r[8]=Cn.x,r[1]=cr.y,r[5]=ml.y,r[9]=Cn.y,r[2]=cr.z,r[6]=ml.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],m=i[2],g=i[6],v=i[10],h=i[14],_=i[3],S=i[7],M=i[11],T=i[15],E=r[0],A=r[4],x=r[8],b=r[12],P=r[1],L=r[5],O=r[9],Z=r[13],te=r[2],k=r[6],$=r[10],Y=r[14],U=r[3],H=r[7],J=r[11],ce=r[15];return s[0]=o*E+a*P+l*te+c*U,s[4]=o*A+a*L+l*k+c*H,s[8]=o*x+a*O+l*$+c*J,s[12]=o*b+a*Z+l*Y+c*ce,s[1]=u*E+d*P+f*te+p*U,s[5]=u*A+d*L+f*k+p*H,s[9]=u*x+d*O+f*$+p*J,s[13]=u*b+d*Z+f*Y+p*ce,s[2]=m*E+g*P+v*te+h*U,s[6]=m*A+g*L+v*k+h*H,s[10]=m*x+g*O+v*$+h*J,s[14]=m*b+g*Z+v*Y+h*ce,s[3]=_*E+S*P+M*te+T*U,s[7]=_*A+S*L+M*k+T*H,s[11]=_*x+S*O+M*$+T*J,s[15]=_*b+S*Z+M*Y+T*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],m=e[3],g=e[7],v=e[11],h=e[15],_=l*p-c*f,S=a*p-c*d,M=a*f-l*d,T=o*p-c*u,E=o*f-l*u,A=o*d-a*u;return t*(g*_-v*S+h*M)-i*(m*_-v*T+h*E)+r*(m*S-g*T+h*A)-s*(m*M-g*E+v*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(s*u-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],m=e[12],g=e[13],v=e[14],h=e[15],_=t*a-i*o,S=t*l-r*o,M=t*c-s*o,T=i*l-r*a,E=i*c-s*a,A=r*c-s*l,x=u*g-d*m,b=u*v-f*m,P=u*h-p*m,L=d*v-f*g,O=d*h-p*g,Z=f*h-p*v,te=_*Z-S*O+M*L+T*P-E*b+A*x;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/te;return e[0]=(a*Z-l*O+c*L)*k,e[1]=(r*O-i*Z-s*L)*k,e[2]=(g*A-v*E+h*T)*k,e[3]=(f*E-d*A-p*T)*k,e[4]=(l*P-o*Z-c*b)*k,e[5]=(t*Z-r*P+s*b)*k,e[6]=(v*M-m*A-h*S)*k,e[7]=(u*A-f*M+p*S)*k,e[8]=(o*O-a*P+c*x)*k,e[9]=(i*P-t*O-s*x)*k,e[10]=(m*E-g*M+h*_)*k,e[11]=(d*M-u*E-p*_)*k,e[12]=(a*b-o*L-l*x)*k,e[13]=(t*L-i*b+r*x)*k,e[14]=(g*S-m*T-v*_)*k,e[15]=(u*T-d*S+f*_)*k,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,m=s*d,g=o*u,v=o*d,h=a*d,_=l*c,S=l*u,M=l*d,T=i.x,E=i.y,A=i.z;return r[0]=(1-(g+h))*T,r[1]=(p+M)*T,r[2]=(m-S)*T,r[3]=0,r[4]=(p-M)*E,r[5]=(1-(f+h))*E,r[6]=(v+_)*E,r[7]=0,r[8]=(m+S)*A,r[9]=(v-_)*A,r[10]=(1-(f+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=vs.set(r[0],r[1],r[2]).length();const a=vs.set(r[4],r[5],r[6]).length(),l=vs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Jn.copy(this);const c=1/o,u=1/a,d=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,t.setFromRotationMatrix(Jn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=Mi,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let m,g;if(l)m=s/(o-s),g=o*s/(o-s);else if(a===Mi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ia)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Mi,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let m,g;if(l)m=1/(o-s),g=o/(o-s);else if(a===Mi)m=-2/(o-s),g=-(o+s)/(o-s);else if(a===Ia)m=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Gc.prototype.isMatrix4=!0;let Qe=Gc;const vs=new I,Jn=new Qe,tw=new I(0,0,0),nw=new I(1,1,1),cr=new I,ml=new I,Cn=new I,o0=new Qe,a0=new ir;class Ur{constructor(e=0,t=0,i=0,r=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return o0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(o0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return a0.setFromEuler(this),this.setFromQuaternion(a0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class ry{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iw=0;const l0=new I,_s=new ir,Ii=new Qe,gl=new I,Io=new I,rw=new I,sw=new ir,c0=new I(1,0,0),u0=new I(0,1,0),f0=new I(0,0,1),d0={type:"added"},ow={type:"removed"},xs={type:"childadded",child:null},tf={type:"childremoved",child:null};class Ct extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iw++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new I,t=new Ur,i=new ir,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Ze}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ry,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(c0,e)}rotateY(e){return this.rotateOnAxis(u0,e)}rotateZ(e){return this.rotateOnAxis(f0,e)}translateOnAxis(e,t){return l0.copy(e).applyQuaternion(this.quaternion),this.position.add(l0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(c0,e)}translateY(e){return this.translateOnAxis(u0,e)}translateZ(e){return this.translateOnAxis(f0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?gl.copy(e):gl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Io,gl,this.up):Ii.lookAt(gl,Io,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),_s.setFromRotationMatrix(Ii),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(d0),xs.child=e,this.dispatchEvent(xs),xs.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ow),tf.child=e,this.dispatchEvent(tf),tf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(d0),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,rw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,sw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new I(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Er extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aw={type:"move"};class nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const v=t.getJointPose(g,i),h=this._getHandJoint(c,g);v!==null&&(h.matrix.fromArray(v.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=v.radius),h.visible=v!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Er;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const sy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},vl={h:0,s:0,l:0};function rf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=Np(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=rf(o,s,e+1/3),this.g=rf(o,s,e),this.b=rf(o,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=sy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return at.workingToColorSpace(ln.copy(this),e),Math.round(it(ln.r*255,0,255))*65536+Math.round(it(ln.g*255,0,255))*256+Math.round(it(ln.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(ln.copy(this),t);const i=ln.r,r=ln.g,s=ln.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Qt){at.workingToColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,r=ln.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+t,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ur),e.getHSL(vl);const i=la(ur.h,vl.h,t),r=la(ur.s,vl.s,t),s=la(ur.l,vl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new je;je.NAMES=sy;class Up{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=i}clone(){return new Up(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class lw extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Qn=new I,Di=new I,sf=new I,Ui=new I,ys=new I,Ss=new I,h0=new I,of=new I,af=new I,lf=new I,cf=new _t,uf=new _t,ff=new _t;class si{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qn.subVectors(e,t),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qn.subVectors(r,t),Di.subVectors(i,t),sf.subVectors(e,t);const o=Qn.dot(Qn),a=Qn.dot(Di),l=Qn.dot(sf),c=Di.dot(Di),u=Di.dot(sf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return cf.setScalar(0),uf.setScalar(0),ff.setScalar(0),cf.fromBufferAttribute(e,t),uf.fromBufferAttribute(e,i),ff.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(cf,s.x),o.addScaledVector(uf,s.y),o.addScaledVector(ff,s.z),o}static isFrontFacing(e,t,i,r){return Qn.subVectors(i,t),Di.subVectors(e,t),Qn.cross(Di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Qn.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return si.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ys.subVectors(r,i),Ss.subVectors(s,i),of.subVectors(e,i);const l=ys.dot(of),c=Ss.dot(of);if(l<=0&&c<=0)return t.copy(i);af.subVectors(e,r);const u=ys.dot(af),d=Ss.dot(af);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ys,o);lf.subVectors(e,s);const p=ys.dot(lf),m=Ss.dot(lf);if(m>=0&&p<=m)return t.copy(s);const g=p*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Ss,a);const v=u*m-p*d;if(v<=0&&d-u>=0&&p-m>=0)return h0.subVectors(s,r),a=(d-u)/(d-u+(p-m)),t.copy(r).addScaledVector(h0,a);const h=1/(v+g+f);return o=g*h,a=f*h,t.copy(i).addScaledVector(ys,o).addScaledVector(Ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_l.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_l.copy(i.boundingBox)),_l.applyMatrix4(e.matrixWorld),this.union(_l)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),xl.subVectors(this.max,Do),Ms.subVectors(e.a,Do),Es.subVectors(e.b,Do),Ts.subVectors(e.c,Do),fr.subVectors(Es,Ms),dr.subVectors(Ts,Es),Vr.subVectors(Ms,Ts);let t=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-Vr.z,Vr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,Vr.z,0,-Vr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-Vr.y,Vr.x,0];return!df(t,Ms,Es,Ts,xl)||(t=[1,0,0,0,1,0,0,0,1],!df(t,Ms,Es,Ts,xl))?!1:(yl.crossVectors(fr,dr),t=[yl.x,yl.y,yl.z],df(t,Ms,Es,Ts,xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new I,new I,new I,new I,new I,new I,new I,new I],ei=new I,_l=new rr,Ms=new I,Es=new I,Ts=new I,fr=new I,dr=new I,Vr=new I,Do=new I,xl=new I,yl=new I,Hr=new I;function df(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Hr.fromArray(n,s);const a=r.x*Math.abs(Hr.x)+r.y*Math.abs(Hr.y)+r.z*Math.abs(Hr.z),l=e.dot(Hr),c=t.dot(Hr),u=i.dot(Hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const kt=new I,Sl=new Ye;let cw=0;class _n extends fs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yh,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Sl.fromBufferAttribute(this,t),Sl.applyMatrix3(e),this.setXY(t,Sl.x,Sl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class oy extends _n{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ay extends _n{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tn extends _n{constructor(e,t,i){super(new Float32Array(e),t,i)}}const uw=new rr,Uo=new I,hf=new I;class Pi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):uw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const t=Uo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Uo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(hf)),this.expandByPoint(Uo.copy(e.center).sub(hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let fw=0;const Vn=new Qe,pf=new Ct,ws=new I,Pn=new rr,Fo=new rr,qt=new I;class bn extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fw++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(RT(e)?ay:oy)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return pf.lookAt(e),pf.updateMatrix(),this.applyMatrix4(pf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Pn.min,Fo.min),Pn.expandByPoint(qt),qt.addVectors(Pn.max,Fo.max),Pn.expandByPoint(qt)):(Pn.expandByPoint(Fo.min),Pn.expandByPoint(Fo.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qt.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(e,c),qt.add(ws)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new _n(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new I,l[x]=new I;const c=new I,u=new I,d=new I,f=new Ye,p=new Ye,m=new Ye,g=new I,v=new I;function h(x,b,P){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,P),f.fromBufferAttribute(s,x),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,P),u.sub(c),d.sub(c),p.sub(f),m.sub(f);const L=1/(p.x*m.y-m.x*p.y);isFinite(L)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(L),v.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(L),a[x].add(g),a[b].add(g),a[P].add(g),l[x].add(v),l[b].add(v),l[P].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let x=0,b=_.length;x<b;++x){const P=_[x],L=P.start,O=P.count;for(let Z=L,te=L+O;Z<te;Z+=3)h(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const S=new I,M=new I,T=new I,E=new I;function A(x){T.fromBufferAttribute(r,x),E.copy(T);const b=a[x];S.copy(b),S.sub(T.multiplyScalar(T.dot(b))).normalize(),M.crossVectors(E,b);const L=M.dot(l[x])<0?-1:1;o.setXYZW(x,S.x,S.y,S.z,L)}for(let x=0,b=_.length;x<b;++x){const P=_[x],L=P.start,O=P.count;for(let Z=L,te=L+O;Z<te;Z+=3)A(e.getX(Z+0)),A(e.getX(Z+1)),A(e.getX(Z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const m=e.getX(f+0),g=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,m=0;for(let g=0,v=l.length;g<v;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let h=0;h<u;h++)f[m++]=c[p++]}return new _n(f,u,d)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yh,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new I;class Fp{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){kc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new _n(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){kc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let hw=0;class bi extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hw++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=js,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=Dd,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Id&&(i.blendSrc=this.blendSrc),this.blendDst!==Dd&&(i.blendDst=this.blendDst),this.blendEquation!==qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Oi=new I,mf=new I,Ml=new I,hr=new I,gf=new I,El=new I,vf=new I;class au{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){mf.copy(e).add(t).multiplyScalar(.5),Ml.copy(t).sub(e).normalize(),hr.copy(this.origin).sub(mf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ml),a=hr.dot(this.direction),l=-hr.dot(Ml),c=hr.lengthSq(),u=Math.abs(1-o*o);let d,f,p,m;if(u>0)if(d=o*l-a,f=o*a-l,m=s*u,d>=0)if(f>=-m)if(f<=m){const g=1/u;d*=g,f*=g,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(mf).addScaledVector(Ml,f),p}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),r=Oi.dot(Oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,i,r,s){gf.subVectors(t,e),El.subVectors(i,e),vf.crossVectors(gf,El);let o=this.direction.dot(vf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hr.subVectors(this.origin,e);const l=a*this.direction.dot(El.crossVectors(hr,El));if(l<0)return null;const c=a*this.direction.dot(gf.cross(hr));if(c<0||l+c>o)return null;const u=-a*hr.dot(vf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oi extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=Bx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const p0=new Qe,Gr=new au,Tl=new Pi,m0=new I,wl=new I,Al=new I,bl=new I,_f=new I,Rl=new I,g0=new I,Cl=new I;class fn extends Ct{constructor(e=new bn,t=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Rl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(_f.fromBufferAttribute(d,e),o?Rl.addScaledVector(_f,u):Rl.addScaledVector(_f.sub(t),u))}t.add(Rl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(s),Gr.copy(e.ray).recast(e.near),!(Tl.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(Tl,m0)===null||Gr.origin.distanceToSquared(m0)>(e.far-e.near)**2))&&(p0.copy(s).invert(),Gr.copy(e.ray).applyMatrix4(p0),!(i.boundingBox!==null&&Gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){const v=f[m],h=o[v.materialIndex],_=Math.max(v.start,p.start),S=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let M=_,T=S;M<T;M+=3){const E=a.getX(M),A=a.getX(M+1),x=a.getX(M+2);r=Pl(this,h,e,i,c,u,d,E,A,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let v=m,h=g;v<h;v+=3){const _=a.getX(v),S=a.getX(v+1),M=a.getX(v+2);r=Pl(this,o,e,i,c,u,d,_,S,M),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){const v=f[m],h=o[v.materialIndex],_=Math.max(v.start,p.start),S=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let M=_,T=S;M<T;M+=3){const E=M,A=M+1,x=M+2;r=Pl(this,h,e,i,c,u,d,E,A,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let v=m,h=g;v<h;v+=3){const _=v,S=v+1,M=v+2;r=Pl(this,o,e,i,c,u,d,_,S,M),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function pw(n,e,t,i,r,s,o,a){let l;if(e.side===An?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Qi,a),l===null)return null;Cl.copy(a),Cl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Cl);return c<t.near||c>t.far?null:{distance:c,point:Cl.clone(),object:n}}function Pl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,wl),n.getVertexPosition(l,Al),n.getVertexPosition(c,bl);const u=pw(n,e,t,i,wl,Al,bl,g0);if(u){const d=new I;si.getBarycoord(g0,wl,Al,bl,d),r&&(u.uv=si.getInterpolatedAttribute(r,a,l,c,d,new Ye)),s&&(u.uv1=si.getInterpolatedAttribute(s,a,l,c,d,new Ye)),o&&(u.normal=si.getInterpolatedAttribute(o,a,l,c,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};si.getNormal(wl,Al,bl,f.normal),u.face=f,u.barycoord=d}return u}const Oo=new _t,v0=new _t,_0=new _t,mw=new _t,x0=new Qe,Ll=new I,xf=new Pi,y0=new Qe,yf=new au;class gw extends fn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qg,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new rr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ll),this.boundingBox.expandByPoint(Ll)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ll),this.boundingSphere.expandByPoint(Ll)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xf.copy(this.boundingSphere),xf.applyMatrix4(r),e.ray.intersectsSphere(xf)!==!1&&(y0.copy(r).invert(),yf.copy(e.ray).applyMatrix4(y0),!(this.boundingBox!==null&&yf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vT?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ve("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;v0.fromBufferAttribute(r.attributes.skinIndex,e),_0.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Oo.copy(t),t.set(0,0,0,0)):(Oo.set(...t,1),t.set(0,0,0)),Oo.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const o=_0.getComponent(s);if(o!==0){const a=v0.getComponent(s);x0.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(mw.copy(Oo).applyMatrix4(x0),o)}}return t.isVector4&&(t.w=Oo.w),t.applyMatrix4(this.bindMatrixInverse)}}class ly extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Op extends Zt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Wt,u=Wt,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const S0=new Qe,vw=new Qe;class kp{constructor(e=[],t=[]){this.uuid=ci(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ve("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:vw;S0.multiplyMatrices(a,t[s]),S0.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new kp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Op(t,e,e,Kn,Yn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(Ve("Skeleton: No bone found with UUID:",s),o=new ly),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Sh extends _n{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const As=new Qe,M0=new Qe,Nl=[],E0=new rr,_w=new Qe,ko=new fn,Bo=new Pi;class xw extends fn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,_w)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,As),E0.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(E0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,As),Bo.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(Bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ko.geometry=this.geometry,ko.material=this.material,ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bo.copy(this.boundingSphere),Bo.applyMatrix4(i),e.ray.intersectsSphere(Bo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,As),M0.multiplyMatrices(i,As),ko.matrixWorld=M0,ko.raycast(e,Nl);for(let o=0,a=Nl.length;o<a;o++){const l=Nl[o];l.instanceId=s,l.object=this,t.push(l)}Nl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Sh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Op(new Float32Array(r*this.count),r,this.count,Ap,Yn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Sf=new I,yw=new I,Sw=new Ze;class Vi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Sf.subVectors(i,t).cross(yw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Sf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Sw.getNormalMatrix(e),r=this.coplanarPoint(Sf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new Pi,Mw=new Ye(.5,.5),Il=new I;class Bp{constructor(e=new Vi,t=new Vi,i=new Vi,r=new Vi,s=new Vi,o=new Vi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],m=s[8],g=s[9],v=s[10],h=s[11],_=s[12],S=s[13],M=s[14],T=s[15];if(r[0].setComponents(c-o,p-u,h-m,T-_).normalize(),r[1].setComponents(c+o,p+u,h+m,T+_).normalize(),r[2].setComponents(c+a,p+d,h+g,T+S).normalize(),r[3].setComponents(c-a,p-d,h-g,T-S).normalize(),i)r[4].setComponents(l,f,v,M).normalize(),r[5].setComponents(c-l,p-f,h-v,T-M).normalize();else if(r[4].setComponents(c-l,p-f,h-v,T-M).normalize(),t===Mi)r[5].setComponents(c+l,p+f,h+v,T+M).normalize();else if(t===Ia)r[5].setComponents(l,f,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){Wr.center.set(0,0,0);const t=Mw.distanceTo(e.center);return Wr.radius=.7071067811865476+t,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Il.x=r.normal.x>0?e.max.x:e.min.x,Il.y=r.normal.y>0?e.max.y:e.min.y,Il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zp extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bc=new I,zc=new I,T0=new Qe,zo=new au,Dl=new Pi,Mf=new I,w0=new I;class Vp extends Ct{constructor(e=new bn,t=new zp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Bc.fromBufferAttribute(t,r-1),zc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Bc.distanceTo(zc);e.setAttribute("lineDistance",new tn(i,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(r),Dl.radius+=s,e.ray.intersectsSphere(Dl)===!1)return;T0.copy(r).invert(),zo.copy(e.ray).applyMatrix4(T0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=p,v=m-1;g<v;g+=c){const h=u.getX(g),_=u.getX(g+1),S=Ul(this,e,zo,l,h,_,g);S&&t.push(S)}if(this.isLineLoop){const g=u.getX(m-1),v=u.getX(p),h=Ul(this,e,zo,l,g,v,m-1);h&&t.push(h)}}else{const p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=p,v=m-1;g<v;g+=c){const h=Ul(this,e,zo,l,g,g+1,g);h&&t.push(h)}if(this.isLineLoop){const g=Ul(this,e,zo,l,m-1,p,m-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ul(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Bc.fromBufferAttribute(a,r),zc.fromBufferAttribute(a,s),t.distanceSqToSegment(Bc,zc,Mf,w0)>i)return;Mf.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Mf);if(!(c<e.near||c>e.far))return{distance:c,point:w0.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const A0=new I,b0=new I;class Ew extends Vp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)A0.fromBufferAttribute(t,r),b0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+A0.distanceTo(b0);e.setAttribute("lineDistance",new tn(i,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tw extends Vp{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class cy extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const R0=new Qe,Mh=new au,Fl=new Pi,Ol=new I;class ww extends Ct{constructor(e=new bn,t=new cy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(r),Fl.radius+=s,e.ray.intersectsSphere(Fl)===!1)return;R0.copy(r).invert(),Mh.copy(e.ray).applyMatrix4(R0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=f,g=p;m<g;m++){const v=c.getX(m);Ol.fromBufferAttribute(d,v),C0(Ol,v,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let m=f,g=p;m<g;m++)Ol.fromBufferAttribute(d,m),C0(Ol,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function C0(n,e,t,i,r,s,o){const a=Mh.distanceSqToPoint(n);if(a<t){const l=new I;Mh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class uy extends Zt{constructor(e=[],t=as,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fo extends Zt{constructor(e,t,i=Ri,r,s,o,a=Wt,l=Wt,c,u=tr,d=1){if(u!==tr&&u!==Qr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Aw extends fo{constructor(e,t=Ri,i=as,r,s,o=Wt,a=Wt,l,c=tr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fy extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ha extends bn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(d,2));function m(g,v,h,_,S,M,T,E,A,x,b){const P=M/A,L=T/x,O=M/2,Z=T/2,te=E/2,k=A+1,$=x+1;let Y=0,U=0;const H=new I;for(let J=0;J<$;J++){const ce=J*L-Z;for(let Se=0;Se<k;Se++){const qe=Se*P-O;H[g]=qe*_,H[v]=ce*S,H[h]=te,c.push(H.x,H.y,H.z),H[g]=0,H[v]=0,H[h]=E>0?1:-1,u.push(H.x,H.y,H.z),d.push(Se/A),d.push(1-J/x),Y+=1}}for(let J=0;J<x;J++)for(let ce=0;ce<A;ce++){const Se=f+ce+k*J,qe=f+ce+k*(J+1),rt=f+(ce+1)+k*(J+1),Ge=f+(ce+1)+k*J;l.push(Se,qe,Ge),l.push(qe,rt,Ge),U+=6}a.addGroup(p,U,b),p+=U,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Li{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ye:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new I,r=[],s=[],o=[],a=new I,l=new Qe;for(let p=0;p<=e;p++){const m=p/e;r[p]=this.getTangentAt(m,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(it(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(it(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class dy extends Li{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ye){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class bw extends dy{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Hp(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const P0=new I,L0=new I,Ef=new Hp,Tf=new Hp,wf=new Hp;class Rw extends Li{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new I){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(L0.subVectors(r[0],r[1]).add(r[0]),c=L0);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(P0.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=P0),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(u),p);g<1e-4&&(g=1),m<1e-4&&(m=g),v<1e-4&&(v=g),Ef.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,m,g,v),Tf.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,m,g,v),wf.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,m,g,v)}else this.curveType==="catmullrom"&&(Ef.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),Tf.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),wf.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(Ef.calc(l),Tf.calc(l),wf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function N0(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function Cw(n,e){const t=1-n;return t*t*e}function Pw(n,e){return 2*(1-n)*n*e}function Lw(n,e){return n*n*e}function ca(n,e,t,i){return Cw(n,e)+Pw(n,t)+Lw(n,i)}function Nw(n,e){const t=1-n;return t*t*t*e}function Iw(n,e){const t=1-n;return 3*t*t*n*e}function Dw(n,e){return 3*(1-n)*n*n*e}function Uw(n,e){return n*n*n*e}function ua(n,e,t,i,r){return Nw(n,e)+Iw(n,t)+Dw(n,i)+Uw(n,r)}class Fw extends Li{constructor(e=new Ye,t=new Ye,i=new Ye,r=new Ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ye){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ua(e,r.x,s.x,o.x,a.x),ua(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ow extends Li{constructor(e=new I,t=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ua(e,r.x,s.x,o.x,a.x),ua(e,r.y,s.y,o.y,a.y),ua(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kw extends Li{constructor(e=new Ye,t=new Ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ye){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ls extends Li{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bw extends Li{constructor(e=new Ye,t=new Ye,i=new Ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ye){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ca(e,r.x,s.x,o.x),ca(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gp extends Li{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ca(e,r.x,s.x,o.x),ca(e,r.y,s.y,o.y),ca(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zw extends Li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ye){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(N0(a,l.x,c.x,u.x,d.x),N0(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ye().fromArray(r))}return this}}var Eh=Object.freeze({__proto__:null,ArcCurve:bw,CatmullRomCurve3:Rw,CubicBezierCurve:Fw,CubicBezierCurve3:Ow,EllipseCurve:dy,LineCurve:kw,LineCurve3:Ls,QuadraticBezierCurve:Bw,QuadraticBezierCurve3:Gp,SplineCurve:zw});class Vw extends Li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eh[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Eh[r.type]().fromJSON(r))}return this}}class lu extends bn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,p=[],m=[],g=[],v=[];for(let h=0;h<u;h++){const _=h*f-o;for(let S=0;S<c;S++){const M=S*d-s;m.push(M,-_,0),g.push(0,0,1),v.push(S/a),v.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const S=_+c*h,M=_+c*(h+1),T=_+1+c*(h+1),E=_+1+c*h;p.push(S,M,E),p.push(M,T,E)}this.setIndex(p),this.setAttribute("position",new tn(m,3)),this.setAttribute("normal",new tn(g,3)),this.setAttribute("uv",new tn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wp extends bn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new I,f=new I,p=[],m=[],g=[],v=[];for(let h=0;h<=i;h++){const _=[],S=h/i,M=o+S*a,T=e*Math.cos(M),E=Math.sqrt(e*e-T*T);let A=0;h===0&&o===0?A=.5/t:h===i&&l===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){const b=x/t,P=r+b*s;d.x=-E*Math.cos(P),d.y=T,d.z=E*Math.sin(P),m.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),v.push(b+A,1-S),_.push(c++)}u.push(_)}for(let h=0;h<i;h++)for(let _=0;_<t;_++){const S=u[h][_+1],M=u[h][_],T=u[h+1][_],E=u[h+1][_+1];(h!==0||o>0)&&p.push(S,M,E),(h!==i-1||l<Math.PI)&&p.push(M,T,E)}this.setIndex(p),this.setAttribute("position",new tn(m,3)),this.setAttribute("normal",new tn(g,3)),this.setAttribute("uv",new tn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vc extends bn{constructor(e=new Gp(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new Ye;let u=new I;const d=[],f=[],p=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new tn(d,3)),this.setAttribute("normal",new tn(f,3)),this.setAttribute("uv",new tn(p,2));function g(){for(let S=0;S<t;S++)v(S);v(s===!1?t:0),_(),h()}function v(S){u=e.getPointAt(S/t,u);const M=o.normals[S],T=o.binormals[S];for(let E=0;E<=r;E++){const A=E/r*Math.PI*2,x=Math.sin(A),b=-Math.cos(A);l.x=b*M.x+x*T.x,l.y=b*M.y+x*T.y,l.z=b*M.z+x*T.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function h(){for(let S=1;S<=t;S++)for(let M=1;M<=r;M++){const T=(r+1)*(S-1)+(M-1),E=(r+1)*S+(M-1),A=(r+1)*S+M,x=(r+1)*(S-1)+M;m.push(T,E,x),m.push(E,A,x)}}function _(){for(let S=0;S<=t;S++)for(let M=0;M<=r;M++)c.x=S/t,c.y=M/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Vc(new Eh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ho(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(I0(r))r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(I0(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function mn(n){const e={};for(let t=0;t<n.length;t++){const i=ho(n[t]);for(const r in i)e[r]=i[r]}return e}function I0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Hw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hy(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Gw={clone:ho,merge:mn};var Ww=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ww,this.fragmentShader=Xw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=Hw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new je().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ye().fromArray(r.value);break;case"v3":this.uniforms[i].value=new I().fromArray(r.value);break;case"v4":this.uniforms[i].value=new _t().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Qe().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Yw extends Ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xp extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xh,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ni extends Xp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Kw extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qw extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function kl(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function $w(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function D0(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function jw(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class vo{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Zw extends vo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jg,endingEnd:jg}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zg:s=e,a=2*t-i;break;case Jg:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Zg:o=e,l=2*i-t;break;case Jg:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(i-t)/(r-t),g=m*m,v=g*m,h=-f*v+2*f*g-f*m,_=(1+f)*v+(-1.5-2*f)*g+(-.5+f)*m+1,S=(-1-p)*v+(1.5+p)*g+.5*m,M=p*v-p*g;for(let T=0;T!==a;++T)s[T]=h*o[u+T]+_*o[c+T]+S*o[l+T]+M*o[d+T];return s}}class Jw extends vo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}}class Qw extends vo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class e1 extends vo{interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){const m=(i-t)/(r-t),g=1-m;for(let v=0;v!==a;++v)s[v]=o[c+v]*g+o[l+v]*m;return s}const f=a*2,p=e-1;for(let m=0;m!==a;++m){const g=o[c+m],v=o[l+m],h=p*f+m*2,_=d[h],S=d[h+1],M=e*f+m*2,T=u[M],E=u[M+1];let A=(i-t)/(r-t),x,b,P,L,O;for(let Z=0;Z<8;Z++){x=A*A,b=x*A,P=1-A,L=P*P,O=L*P;const k=O*t+3*L*A*_+3*P*x*T+b*r-i;if(Math.abs(k)<1e-10)break;const $=3*L*(_-t)+6*P*A*(T-_)+3*x*(r-T);if(Math.abs($)<1e-10)break;A=A-k/$,A=Math.max(0,Math.min(1,A))}s[m]=O*g+3*L*A*S+3*P*x*E+b*v}return s}}class fi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kl(t,this.TimeBufferType),this.values=kl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:kl(e.times,Array),values:kl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Qw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new e1(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case La:t=this.InterpolantFactoryMethodDiscrete;break;case Na:t=this.InterpolantFactoryMethodLinear;break;case ju:t=this.InterpolantFactoryMethodSmooth;break;case $g:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ve("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return La;case this.InterpolantFactoryMethodLinear:return Na;case this.InterpolantFactoryMethodSmooth:return ju;case this.InterpolantFactoryMethodBezier:return $g}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){$e("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&CT(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){$e("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ju,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const d=a*i,f=d-i,p=d+i;for(let m=0;m!==i;++m){const g=t[d+m];if(g!==t[f+m]||g!==t[p+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Na;class _o extends fi{constructor(e,t,i){super(e,t,i)}}_o.prototype.ValueTypeName="bool";_o.prototype.ValueBufferType=Array;_o.prototype.DefaultInterpolation=La;_o.prototype.InterpolantFactoryMethodLinear=void 0;_o.prototype.InterpolantFactoryMethodSmooth=void 0;class py extends fi{constructor(e,t,i,r){super(e,t,i,r)}}py.prototype.ValueTypeName="color";class Ua extends fi{constructor(e,t,i,r){super(e,t,i,r)}}Ua.prototype.ValueTypeName="number";class t1 extends vo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ir.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Fa extends fi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new t1(this.times,this.values,this.getValueSize(),e)}}Fa.prototype.ValueTypeName="quaternion";Fa.prototype.InterpolantFactoryMethodSmooth=void 0;class xo extends fi{constructor(e,t,i){super(e,t,i)}}xo.prototype.ValueTypeName="string";xo.prototype.ValueBufferType=Array;xo.prototype.DefaultInterpolation=La;xo.prototype.InterpolantFactoryMethodLinear=void 0;xo.prototype.InterpolantFactoryMethodSmooth=void 0;class Hc extends fi{constructor(e,t,i,r){super(e,t,i,r)}}Hc.prototype.ValueTypeName="vector";class n1{constructor(e="",t=-1,i=[],r=_T){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ci(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(r1(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=i.length;s!==o;++s)t.push(fi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=$w(l);l=D0(l,1,u),c=D0(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ua(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let f=r[d];f||(r[d]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function i1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ua;case"vector":case"vector2":case"vector3":case"vector4":return Hc;case"color":return py;case"quaternion":return Fa;case"bool":case"boolean":return _o;case"string":return xo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function r1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=i1(n.type);if(n.times===void 0){const t=[],i=[];jw(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Xi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(U0(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!U0(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function U0(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class s1{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const o1=new s1;class yo{constructor(e){this.manager=e!==void 0?e:o1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}yo.DEFAULT_MATERIAL_NAME="__DEFAULT";const ki={};class a1 extends Error{constructor(e,t){super(e),this.response=t}}class my extends yo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Xi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:i,onError:r});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ve("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ki[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,m=p!==0;let g=0;const v=new ReadableStream({start(h){_();function _(){d.read().then(({done:S,value:M})=>{if(S)h.close();else{g+=M.byteLength;const T=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:p});for(let E=0,A=u.length;E<A;E++){const x=u[E];x.onProgress&&x.onProgress(T)}h.enqueue(M),_()}},S=>{h.error(S)})}}});return new Response(v)}else throw new a1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(m=>p.decode(m))}}}).then(c=>{Xi.add(`file:${e}`,c);const u=ki[e];delete ki[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=ki[e];if(u===void 0)throw this.manager.itemError(e),c;delete ki[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const bs=new WeakMap;class l1 extends yo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=bs.get(o);d===void 0&&(d=[],bs.set(o,d)),d.push({onLoad:t,onError:r})}return o}const a=Da("img");function l(){u(),t&&t(this);const d=bs.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}bs.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),Xi.remove(`image:${e}`);const f=bs.get(this)||[];for(let p=0;p<f.length;p++){const m=f[p];m.onError&&m.onError(d)}bs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Xi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class c1 extends yo{constructor(e){super(e)}load(e,t,i,r){const s=new Zt,o=new l1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Yp extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Af=new Qe,F0=new I,O0=new I;class Kp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bp,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;F0.setFromMatrixPosition(e.matrixWorld),t.position.copy(F0),O0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(O0),t.updateMatrixWorld(),Af.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Af,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ia||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Bl=new I,zl=new ir,pi=new I;class gy extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bl,zl,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,zl,pi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Bl,zl,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,zl,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pr=new I,k0=new Ye,B0=new Ye;class un extends gy{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,t){return this.getViewBounds(e,k0,B0),t.subVectors(B0,k0)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(aa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class u1 extends Kp{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=uo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class f1 extends Yp{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new u1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class d1 extends Kp{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}}class h1 extends Yp{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new d1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class cu extends gy{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class p1 extends Kp{constructor(){super(new cu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class m1 extends Yp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new p1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class fa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const bf=new WeakMap;class g1 extends yo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ve("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ve("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{bf.has(o)===!0?(r&&r(bf.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Xi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){r&&r(c),bf.set(l,c),Xi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Xi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Rs=-90,Cs=1;class v1 extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Rs,Cs,e,t);r.layers=this.layers,this.add(r);const s=new un(Rs,Cs,e,t);s.layers=this.layers,this.add(s);const o=new un(Rs,Cs,e,t);o.layers=this.layers,this.add(o);const a=new un(Rs,Cs,e,t);a.layers=this.layers,this.add(a);const l=new un(Rs,Cs,e,t);l.layers=this.layers,this.add(l);const c=new un(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class _1 extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const qp="\\[\\]\\.:\\/",x1=new RegExp("["+qp+"]","g"),$p="[^"+qp+"]",y1="[^"+qp.replace("\\.","")+"]",S1=/((?:WC+[\/:])*)/.source.replace("WC",$p),M1=/(WCOD+)?/.source.replace("WCOD",y1),E1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$p),T1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$p),w1=new RegExp("^"+S1+M1+E1+T1+"$"),A1=["material","materials","bones","map"];class b1{constructor(e,t,i){const r=i||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class pt{constructor(e,t,i){this.path=t,this.parsedPath=i||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,i):new pt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(x1,"")}static parseTrackName(e){const t=w1.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);A1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=b1;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const em=class em{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};em.prototype.isMatrix2=!0;let z0=em;function V0(n,e,t,i){const r=R1(i);switch(t){case Qx:return n*e;case Ap:return n*e/r.components*r.byteLength;case bp:return n*e/r.components*r.byteLength;case ls:return n*e*2/r.components*r.byteLength;case Rp:return n*e*2/r.components*r.byteLength;case ey:return n*e*3/r.components*r.byteLength;case Kn:return n*e*4/r.components*r.byteLength;case Cp:return n*e*4/r.components*r.byteLength;case sc:case oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ac:case lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gd:case Xd:return Math.max(n,16)*Math.max(e,8)/4;case Hd:case Wd:return Math.max(n,8)*Math.max(e,8)/2;case Yd:case Kd:case $d:case jd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qd:case Uc:case Zd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case th:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case nh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case rh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case oh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ah:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case lh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case uh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case dh:case hh:case ph:return Math.ceil(n/4)*Math.ceil(e/4)*16;case mh:case gh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fc:case vh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function R1(n){switch(n){case Nn:case $x:return{byteLength:1,components:1};case Ca:case jx:case er:return{byteLength:2,components:1};case Tp:case wp:return{byteLength:2,components:4};case Ri:case Ep:case Yn:return{byteLength:4,components:1};case Zx:case Jx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vy(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function C1(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){const m=d[f],g=d[p];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,d[f]=g)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){const g=d[p];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var P1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,N1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,O1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,B1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,G1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,W1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,j1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Z1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,J1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Q1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,nA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oA="gl_FragColor = linearToOutputTexel( gl_FragColor );",aA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_A=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,MA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,EA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,IA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,KA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$A=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,QA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ib=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ub=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,db=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ib=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ub=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ob=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$b=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:P1,alphahash_pars_fragment:L1,alphamap_fragment:N1,alphamap_pars_fragment:I1,alphatest_fragment:D1,alphatest_pars_fragment:U1,aomap_fragment:F1,aomap_pars_fragment:O1,batching_pars_vertex:k1,batching_vertex:B1,begin_vertex:z1,beginnormal_vertex:V1,bsdfs:H1,iridescence_fragment:G1,bumpmap_pars_fragment:W1,clipping_planes_fragment:X1,clipping_planes_pars_fragment:Y1,clipping_planes_pars_vertex:K1,clipping_planes_vertex:q1,color_fragment:$1,color_pars_fragment:j1,color_pars_vertex:Z1,color_vertex:J1,common:Q1,cube_uv_reflection_fragment:eA,defaultnormal_vertex:tA,displacementmap_pars_vertex:nA,displacementmap_vertex:iA,emissivemap_fragment:rA,emissivemap_pars_fragment:sA,colorspace_fragment:oA,colorspace_pars_fragment:aA,envmap_fragment:lA,envmap_common_pars_fragment:cA,envmap_pars_fragment:uA,envmap_pars_vertex:fA,envmap_physical_pars_fragment:MA,envmap_vertex:dA,fog_vertex:hA,fog_pars_vertex:pA,fog_fragment:mA,fog_pars_fragment:gA,gradientmap_pars_fragment:vA,lightmap_pars_fragment:_A,lights_lambert_fragment:xA,lights_lambert_pars_fragment:yA,lights_pars_begin:SA,lights_toon_fragment:EA,lights_toon_pars_fragment:TA,lights_phong_fragment:wA,lights_phong_pars_fragment:AA,lights_physical_fragment:bA,lights_physical_pars_fragment:RA,lights_fragment_begin:CA,lights_fragment_maps:PA,lights_fragment_end:LA,lightprobes_pars_fragment:NA,logdepthbuf_fragment:IA,logdepthbuf_pars_fragment:DA,logdepthbuf_pars_vertex:UA,logdepthbuf_vertex:FA,map_fragment:OA,map_pars_fragment:kA,map_particle_fragment:BA,map_particle_pars_fragment:zA,metalnessmap_fragment:VA,metalnessmap_pars_fragment:HA,morphinstance_vertex:GA,morphcolor_vertex:WA,morphnormal_vertex:XA,morphtarget_pars_vertex:YA,morphtarget_vertex:KA,normal_fragment_begin:qA,normal_fragment_maps:$A,normal_pars_fragment:jA,normal_pars_vertex:ZA,normal_vertex:JA,normalmap_pars_fragment:QA,clearcoat_normal_fragment_begin:eb,clearcoat_normal_fragment_maps:tb,clearcoat_pars_fragment:nb,iridescence_pars_fragment:ib,opaque_fragment:rb,packing:sb,premultiplied_alpha_fragment:ob,project_vertex:ab,dithering_fragment:lb,dithering_pars_fragment:cb,roughnessmap_fragment:ub,roughnessmap_pars_fragment:fb,shadowmap_pars_fragment:db,shadowmap_pars_vertex:hb,shadowmap_vertex:pb,shadowmask_pars_fragment:mb,skinbase_vertex:gb,skinning_pars_vertex:vb,skinning_vertex:_b,skinnormal_vertex:xb,specularmap_fragment:yb,specularmap_pars_fragment:Sb,tonemapping_fragment:Mb,tonemapping_pars_fragment:Eb,transmission_fragment:Tb,transmission_pars_fragment:wb,uv_pars_fragment:Ab,uv_pars_vertex:bb,uv_vertex:Rb,worldpos_vertex:Cb,background_vert:Pb,background_frag:Lb,backgroundCube_vert:Nb,backgroundCube_frag:Ib,cube_vert:Db,cube_frag:Ub,depth_vert:Fb,depth_frag:Ob,distance_vert:kb,distance_frag:Bb,equirect_vert:zb,equirect_frag:Vb,linedashed_vert:Hb,linedashed_frag:Gb,meshbasic_vert:Wb,meshbasic_frag:Xb,meshlambert_vert:Yb,meshlambert_frag:Kb,meshmatcap_vert:qb,meshmatcap_frag:$b,meshnormal_vert:jb,meshnormal_frag:Zb,meshphong_vert:Jb,meshphong_frag:Qb,meshphysical_vert:eR,meshphysical_frag:tR,meshtoon_vert:nR,meshtoon_frag:iR,points_vert:rR,points_frag:sR,shadow_vert:oR,shadow_frag:aR,sprite_vert:lR,sprite_frag:cR},Ce={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},_i={basic:{uniforms:mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:mn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:mn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new je(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:mn([Ce.points,Ce.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:mn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:mn([Ce.common,Ce.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:mn([Ce.sprite,Ce.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:mn([Ce.common,Ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:mn([Ce.lights,Ce.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};_i.physical={uniforms:mn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Vl={r:0,b:0,g:0},uR=new Qe,_y=new Ze;_y.set(-1,0,0,0,1,0,0,0,1);function fR(n,e,t,i,r,s){const o=new je(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function p(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){const M=_.backgroundBlurriness>0;S=e.get(S,M)}return S}function m(_){let S=!1;const M=p(_);M===null?v(o,a):M&&M.isColor&&(v(M,1),S=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(_,S){const M=p(S);M&&(M.isCubeTexture||M.mapping===ou)?(c===void 0&&(c=new fn(new Ha(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:ho(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(uR.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_y),c.material.toneMapped=at.getTransfer(M.colorSpace)!==dt,(u!==M||d!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new fn(new lu(2,2),new Ci({name:"BackgroundMaterial",uniforms:ho(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=at.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,f=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function v(_,S){_.getRGB(Vl,hy(n)),t.buffers.color.setClear(Vl.r,Vl.g,Vl.b,S,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,S=1){o.set(_),a=S,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,v(o,a)},render:m,addToRenderList:g,dispose:h}}function dR(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(L,O,Z,te,k){let $=!1;const Y=d(L,te,Z,O);s!==Y&&(s=Y,c(s.object)),$=p(L,te,Z,k),$&&m(L,te,Z,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,M(L,O,Z,te),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function d(L,O,Z,te){const k=te.wireframe===!0;let $=i[O.id];$===void 0&&($={},i[O.id]=$);const Y=L.isInstancedMesh===!0?L.id:0;let U=$[Y];U===void 0&&(U={},$[Y]=U);let H=U[Z.id];H===void 0&&(H={},U[Z.id]=H);let J=H[k];return J===void 0&&(J=f(l()),H[k]=J),J}function f(L){const O=[],Z=[],te=[];for(let k=0;k<t;k++)O[k]=0,Z[k]=0,te[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Z,attributeDivisors:te,object:L,attributes:{},index:null}}function p(L,O,Z,te){const k=s.attributes,$=O.attributes;let Y=0;const U=Z.getAttributes();for(const H in U)if(U[H].location>=0){const ce=k[H];let Se=$[H];if(Se===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(Se=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(Se=L.instanceColor)),ce===void 0||ce.attribute!==Se||Se&&ce.data!==Se.data)return!0;Y++}return s.attributesNum!==Y||s.index!==te}function m(L,O,Z,te){const k={},$=O.attributes;let Y=0;const U=Z.getAttributes();for(const H in U)if(U[H].location>=0){let ce=$[H];ce===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor));const Se={};Se.attribute=ce,ce&&ce.data&&(Se.data=ce.data),k[H]=Se,Y++}s.attributes=k,s.attributesNum=Y,s.index=te}function g(){const L=s.newAttributes;for(let O=0,Z=L.length;O<Z;O++)L[O]=0}function v(L){h(L,0)}function h(L,O){const Z=s.newAttributes,te=s.enabledAttributes,k=s.attributeDivisors;Z[L]=1,te[L]===0&&(n.enableVertexAttribArray(L),te[L]=1),k[L]!==O&&(n.vertexAttribDivisor(L,O),k[L]=O)}function _(){const L=s.newAttributes,O=s.enabledAttributes;for(let Z=0,te=O.length;Z<te;Z++)O[Z]!==L[Z]&&(n.disableVertexAttribArray(Z),O[Z]=0)}function S(L,O,Z,te,k,$,Y){Y===!0?n.vertexAttribIPointer(L,O,Z,k,$):n.vertexAttribPointer(L,O,Z,te,k,$)}function M(L,O,Z,te){g();const k=te.attributes,$=Z.getAttributes(),Y=O.defaultAttributeValues;for(const U in $){const H=$[U];if(H.location>=0){let J=k[U];if(J===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){const ce=J.normalized,Se=J.itemSize,qe=e.get(J);if(qe===void 0)continue;const rt=qe.buffer,Ge=qe.type,Q=qe.bytesPerElement,se=Ge===n.INT||Ge===n.UNSIGNED_INT||J.gpuType===Ep;if(J.isInterleavedBufferAttribute){const pe=J.data,Ke=pe.stride,He=J.offset;if(pe.isInstancedInterleavedBuffer){for(let Ie=0;Ie<H.locationSize;Ie++)h(H.location+Ie,pe.meshPerAttribute);L.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ie=0;Ie<H.locationSize;Ie++)v(H.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let Ie=0;Ie<H.locationSize;Ie++)S(H.location+Ie,Se/H.locationSize,Ge,ce,Ke*Q,(He+Se/H.locationSize*Ie)*Q,se)}else{if(J.isInstancedBufferAttribute){for(let pe=0;pe<H.locationSize;pe++)h(H.location+pe,J.meshPerAttribute);L.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let pe=0;pe<H.locationSize;pe++)v(H.location+pe);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let pe=0;pe<H.locationSize;pe++)S(H.location+pe,Se/H.locationSize,Ge,ce,Se*Q,Se/H.locationSize*pe*Q,se)}}else if(Y!==void 0){const ce=Y[U];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(H.location,ce);break;case 3:n.vertexAttrib3fv(H.location,ce);break;case 4:n.vertexAttrib4fv(H.location,ce);break;default:n.vertexAttrib1fv(H.location,ce)}}}}_()}function T(){b();for(const L in i){const O=i[L];for(const Z in O){const te=O[Z];for(const k in te){const $=te[k];for(const Y in $)u($[Y].object),delete $[Y];delete te[k]}}delete i[L]}}function E(L){if(i[L.id]===void 0)return;const O=i[L.id];for(const Z in O){const te=O[Z];for(const k in te){const $=te[k];for(const Y in $)u($[Y].object),delete $[Y];delete te[k]}}delete i[L.id]}function A(L){for(const O in i){const Z=i[O];for(const te in Z){const k=Z[te];if(k[L.id]===void 0)continue;const $=k[L.id];for(const Y in $)u($[Y].object),delete $[Y];delete k[L.id]}}}function x(L){for(const O in i){const Z=i[O],te=L.isInstancedMesh===!0?L.id:0,k=Z[te];if(k!==void 0){for(const $ in k){const Y=k[$];for(const U in Y)u(Y[U].object),delete Y[U];delete k[$]}delete Z[te],Object.keys(Z).length===0&&delete i[O]}}}function b(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:v,disableUnusedAttributes:_}}function hR(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function pR(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Kn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const x=A===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Nn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Yn&&!x)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:v,maxAttributes:h,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:M,maxSamples:T,samples:E}}function mR(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Vi,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const m=d.clippingPlanes,g=d.clipIntersection,v=d.clipShadows,h=n.get(d);if(!r||m===null||m.length===0||s&&!v)s?u(null):c();else{const _=s?0:i,S=_*4;let M=h.clippingState||null;l.value=M,M=u(m,f,S,p);for(let T=0;T!==S;++T)M[T]=t[T];h.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,m){const g=d!==null?d.length:0;let v=null;if(g!==0){if(v=l.value,m!==!0||v===null){const h=p+g*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(v===null||v.length<h)&&(v=new Float32Array(h));for(let S=0,M=p;S!==g;++S,M+=4)o.copy(d[S]).applyMatrix4(_,a),o.normal.toArray(v,M),v[M+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,v}}const Tr=4,H0=[.125,.215,.35,.446,.526,.582],$r=20,gR=256,Vo=new cu,G0=new je;let Rf=null,Cf=0,Pf=0,Lf=!1;const vR=new I;class W0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=vR}=s;Rf=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=K0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rf,Cf,Pf),this._renderer.xr.enabled=Lf,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rf=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:er,format:Kn,colorSpace:Fn,depthBuffer:!1},r=X0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=X0(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_R(s)),this._blurMaterial=yR(s,e,t),this._ggxMaterial=xR(s,e,t)}return r}_compileMaterial(e){const t=new fn(new bn,e);this._renderer.compile(t,Vo)}_sceneToCubeUV(e,t,i,r,s){const l=new un(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(G0),d.toneMapping=wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fn(new Ha,new oi({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,v=g.material;let h=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,h=!0):(v.color.copy(G0),h=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const T=this._cubeSize;Ps(r,M*T,S>2?T:0,T,T),d.setRenderTarget(r),h&&d.render(g,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===as||e.mapping===lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=K0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Y0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ps(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Vo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,p=d*f,{_lodMax:m}=this,g=this._sizeLods[i],v=3*g*(i>m-Tr?i-m+Tr:0),h=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-t,Ps(s,v,h,3*g,2*g),r.setRenderTarget(s),r.render(a,Vo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Ps(e,v,h,3*g,2*g),r.setRenderTarget(e),r.render(a,Vo)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$r-1),g=s/m,v=isFinite(s)?1+Math.floor(u*g):$r;v>$r&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${$r}`);const h=[];let _=0;for(let A=0;A<$r;++A){const x=A/g,b=Math.exp(-x*x/2);h.push(b),A===0?_+=b:A<v&&(_+=2*b)}for(let A=0;A<h.length;A++)h[A]=h[A]/_;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=m,f.mipInt.value=S-i;const M=this._sizeLods[r],T=3*M*(r>S-Tr?r-S+Tr:0),E=4*(this._cubeSize-M);Ps(t,T,E,3*M,2*M),l.setRenderTarget(t),l.render(d,Vo)}}function _R(n){const e=[],t=[],i=[];let r=n;const s=n-Tr+1+H0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Tr?l=H0[o-n+Tr-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,m=6,g=3,v=2,h=1,_=new Float32Array(g*m*p),S=new Float32Array(v*m*p),M=new Float32Array(h*m*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,x=E>2?0:-1,b=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];_.set(b,g*m*E),S.set(f,v*m*E);const P=[E,E,E,E,E,E];M.set(P,h*m*E)}const T=new bn;T.setAttribute("position",new _n(_,g)),T.setAttribute("uv",new _n(S,v)),T.setAttribute("faceIndex",new _n(M,h)),i.push(new fn(T,null)),r>Tr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function X0(n,e,t){const i=new Ai(n,e,t);return i.texture.mapping=ou,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ps(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function xR(n,e,t){return new Ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function yR(n,e,t){const i=new Float32Array($r),r=new I(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Y0(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function K0(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class xy extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new uy(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ha(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:ho(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:Ki});s.uniforms.tEquirect.value=t;const o=new fn(r,s),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=Xt),new v1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function SR(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?o(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===qu||p===$u)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const g=new xy(m.height);return g.fromEquirectangularTexture(n,f),e.set(f,g),f.addEventListener("dispose",c),a(g.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,m=p===qu||p===$u,g=p===as||p===lo;if(m||g){let v=t.get(f);const h=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new W0(n)),v=m?i.fromEquirectangular(f,v):i.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),v.texture;if(v!==void 0)return v.texture;{const _=f.image;return m&&_&&_.height>0||g&&_&&l(_)?(i===null&&(i=new W0(n)),v=m?i.fromEquirectangular(f):i.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),f.addEventListener("dispose",u),v.texture):null}}}return f}function a(f,p){return p===qu?f.mapping=as:p===$u&&(f.mapping=lo),f}function l(f){let p=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function MR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Zs("WebGLRenderer: "+i+" extension not supported."),r}}}function ER(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,m=d.attributes.position;let g=0;if(m===void 0)return;if(p!==null){const _=p.array;g=p.version;for(let S=0,M=_.length;S<M;S+=3){const T=_[S+0],E=_[S+1],A=_[S+2];f.push(T,E,E,A,A,T)}}else{const _=m.array;g=m.version;for(let S=0,M=_.length/3-1;S<M;S+=3){const T=S+0,E=S+1,A=S+2;f.push(T,E,E,A,A,T)}}const v=new(m.count>=65535?ay:oy)(f,1);v.version=g;const h=s.get(d);h&&e.remove(h),s.set(d,v)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function TR(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,s,d*o,p),t.update(f,i,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let g=0;for(let v=0;v<p;v++)g+=f[v];t.update(g,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function wR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:$e("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function AR(n,e,t){const i=new WeakMap,r=new _t;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let b=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;p===!0&&(S=1),m===!0&&(S=2),g===!0&&(S=3);let M=a.attributes.position.count*S,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const E=new Float32Array(M*T*4*d),A=new iy(E,M,T,d);A.type=Yn,A.needsUpdate=!0;const x=S*4;for(let P=0;P<d;P++){const L=v[P],O=h[P],Z=_[P],te=M*T*4*P;for(let k=0;k<L.count;k++){const $=k*x;p===!0&&(r.fromBufferAttribute(L,k),E[te+$+0]=r.x,E[te+$+1]=r.y,E[te+$+2]=r.z,E[te+$+3]=0),m===!0&&(r.fromBufferAttribute(O,k),E[te+$+4]=r.x,E[te+$+5]=r.y,E[te+$+6]=r.z,E[te+$+7]=0),g===!0&&(r.fromBufferAttribute(Z,k),E[te+$+8]=r.x,E[te+$+9]=r.y,E[te+$+10]=r.z,E[te+$+11]=Z.itemSize===4?r.w:1)}}f={count:d,texture:A,size:new Ye(M,T)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function bR(n,e,t,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const RR={[zx]:"LINEAR_TONE_MAPPING",[Vx]:"REINHARD_TONE_MAPPING",[Hx]:"CINEON_TONE_MAPPING",[Gx]:"ACES_FILMIC_TONE_MAPPING",[Xx]:"AGX_TONE_MAPPING",[Yx]:"NEUTRAL_TONE_MAPPING",[Wx]:"CUSTOM_TONE_MAPPING"};function CR(n,e,t,i,r,s){const o=new Ai(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new fo(e,t):void 0}),a=new Ai(e,t,{type:er,depthBuffer:!1,stencilBuffer:!1}),l=new bn;l.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new tn([0,2,0,0,2,0],2));const c=new Yw({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new fn(l,c),d=new cu(-1,1,1,-1,0,1);let f=null,p=null,m=!1,g,v=null,h=[],_=!1;this.setSize=function(S,M){o.setSize(S,M),a.setSize(S,M);for(let T=0;T<h.length;T++){const E=h[T];E.setSize&&E.setSize(S,M)}},this.setEffects=function(S){h=S,_=h.length>0&&h[0].isRenderPass===!0;const M=o.width,T=o.height;for(let E=0;E<h.length;E++){const A=h[E];A.setSize&&A.setSize(M,T)}},this.begin=function(S,M){if(m||S.toneMapping===wi&&h.length===0)return!1;if(v=M,M!==null){const T=M.width,E=M.height;(o.width!==T||o.height!==E)&&this.setSize(T,E)}return _===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=wi,!0},this.hasRenderPass=function(){return _},this.end=function(S,M){S.toneMapping=g,m=!0;let T=o,E=a;for(let A=0;A<h.length;A++){const x=h[A];if(x.enabled!==!1&&(x.render(S,E,T,M),x.needsSwap!==!1)){const b=T;T=E,E=b}}if(f!==S.outputColorSpace||p!==S.toneMapping){f=S.outputColorSpace,p=S.toneMapping,c.defines={},at.getTransfer(f)===dt&&(c.defines.SRGB_TRANSFER="");const A=RR[p];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(v),S.render(u,d),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const yy=new Zt,Th=new fo(1,1),Sy=new iy,My=new ew,Ey=new uy,q0=[],$0=[],j0=new Float32Array(16),Z0=new Float32Array(9),J0=new Float32Array(4);function So(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=q0[r];if(s===void 0&&(s=new Float32Array(r),q0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fu(n,e){let t=$0[e];t===void 0&&(t=new Int32Array(e),$0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function PR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function LR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function NR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function IR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function DR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,i))return;J0.set(i),n.uniformMatrix2fv(this.addr,!1,J0),Kt(t,i)}}function UR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,i))return;Z0.set(i),n.uniformMatrix3fv(this.addr,!1,Z0),Kt(t,i)}}function FR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,i))return;j0.set(i),n.uniformMatrix4fv(this.addr,!1,j0),Kt(t,i)}}function OR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function kR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function BR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function zR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function VR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function HR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function GR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function WR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function XR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Th.compareFunction=t.isReversedDepthBuffer()?Lp:Pp,s=Th):s=yy,t.setTexture2D(e||s,r)}function YR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||My,r)}function KR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ey,r)}function qR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Sy,r)}function $R(n){switch(n){case 5126:return PR;case 35664:return LR;case 35665:return NR;case 35666:return IR;case 35674:return DR;case 35675:return UR;case 35676:return FR;case 5124:case 35670:return OR;case 35667:case 35671:return kR;case 35668:case 35672:return BR;case 35669:case 35673:return zR;case 5125:return VR;case 36294:return HR;case 36295:return GR;case 36296:return WR;case 35678:case 36198:case 36298:case 36306:case 35682:return XR;case 35679:case 36299:case 36307:return YR;case 35680:case 36300:case 36308:case 36293:return KR;case 36289:case 36303:case 36311:case 36292:return qR}}function jR(n,e){n.uniform1fv(this.addr,e)}function ZR(n,e){const t=So(e,this.size,2);n.uniform2fv(this.addr,t)}function JR(n,e){const t=So(e,this.size,3);n.uniform3fv(this.addr,t)}function QR(n,e){const t=So(e,this.size,4);n.uniform4fv(this.addr,t)}function eC(n,e){const t=So(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tC(n,e){const t=So(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nC(n,e){const t=So(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iC(n,e){n.uniform1iv(this.addr,e)}function rC(n,e){n.uniform2iv(this.addr,e)}function sC(n,e){n.uniform3iv(this.addr,e)}function oC(n,e){n.uniform4iv(this.addr,e)}function aC(n,e){n.uniform1uiv(this.addr,e)}function lC(n,e){n.uniform2uiv(this.addr,e)}function cC(n,e){n.uniform3uiv(this.addr,e)}function uC(n,e){n.uniform4uiv(this.addr,e)}function fC(n,e,t){const i=this.cache,r=e.length,s=fu(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Th:o=yy;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function dC(n,e,t){const i=this.cache,r=e.length,s=fu(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||My,s[o])}function hC(n,e,t){const i=this.cache,r=e.length,s=fu(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ey,s[o])}function pC(n,e,t){const i=this.cache,r=e.length,s=fu(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Sy,s[o])}function mC(n){switch(n){case 5126:return jR;case 35664:return ZR;case 35665:return JR;case 35666:return QR;case 35674:return eC;case 35675:return tC;case 35676:return nC;case 5124:case 35670:return iC;case 35667:case 35671:return rC;case 35668:case 35672:return sC;case 35669:case 35673:return oC;case 5125:return aC;case 36294:return lC;case 36295:return cC;case 36296:return uC;case 35678:case 36198:case 36298:case 36306:case 35682:return fC;case 35679:case 36299:case 36307:return dC;case 35680:case 36300:case 36308:case 36293:return hC;case 36289:case 36303:case 36311:case 36292:return pC}}class gC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$R(t.type)}}class vC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mC(t.type)}}class _C{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Nf=/(\w+)(\])?(\[|\.)?/g;function Q0(n,e){n.seq.push(e),n.map[e.id]=e}function xC(n,e,t){const i=n.name,r=i.length;for(Nf.lastIndex=0;;){const s=Nf.exec(i),o=Nf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Q0(t,c===void 0?new gC(a,n,e):new vC(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new _C(a),Q0(t,d)),t=d}}}class cc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);xC(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ev(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const yC=37297;let SC=0;function MC(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const tv=new Ze;function EC(n){at._getMatrix(tv,at.workingColorSpace,n);const e=`mat3( ${tv.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case Oc:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function nv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+MC(n.getShaderSource(e),a)}else return s}function TC(n,e){const t=EC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const wC={[zx]:"Linear",[Vx]:"Reinhard",[Hx]:"Cineon",[Gx]:"ACESFilmic",[Xx]:"AgX",[Yx]:"Neutral",[Wx]:"Custom"};function AC(n,e){const t=wC[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hl=new I;function bC(){at.getLuminanceCoefficients(Hl);const n=Hl.x.toFixed(4),e=Hl.y.toFixed(4),t=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function CC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function PC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Zo(n){return n!==""}function iv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LC=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(n){return n.replace(LC,IC)}const NC=new Map;function IC(n,e){let t=tt[e];if(t===void 0){const i=NC.get(e);if(i!==void 0)t=tt[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return wh(t)}const DC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sv(n){return n.replace(DC,UC)}function UC(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ov(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const FC={[ic]:"SHADOWMAP_TYPE_PCF",[$o]:"SHADOWMAP_TYPE_VSM"};function OC(n){return FC[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kC={[as]:"ENVMAP_TYPE_CUBE",[lo]:"ENVMAP_TYPE_CUBE",[ou]:"ENVMAP_TYPE_CUBE_UV"};function BC(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":kC[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const zC={[lo]:"ENVMAP_MODE_REFRACTION"};function VC(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":zC[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const HC={[Bx]:"ENVMAP_BLENDING_MULTIPLY",[mT]:"ENVMAP_BLENDING_MIX",[gT]:"ENVMAP_BLENDING_ADD"};function GC(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":HC[n.combine]||"ENVMAP_BLENDING_NONE"}function WC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function XC(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=OC(t),c=BC(t),u=VC(t),d=GC(t),f=WC(t),p=RC(t),m=CC(s),g=r.createProgram();let v,h,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Zo).join(`
`),v.length>0&&(v+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Zo).join(`
`),h.length>0&&(h+=`
`)):(v=[ov(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),h=[ov(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?tt.tonemapping_pars_fragment:"",t.toneMapping!==wi?AC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,TC("linearToOutputTexel",t.outputColorSpace),bC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zo).join(`
`)),o=wh(o),o=iv(o,t),o=rv(o,t),a=wh(a),a=iv(a,t),a=rv(a,t),o=sv(o),a=sv(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,h=["#define varying in",t.glslVersion===e0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===e0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=_+v+o,M=_+h+a,T=ev(r,r.VERTEX_SHADER,S),E=ev(r,r.FRAGMENT_SHADER,M);r.attachShader(g,T),r.attachShader(g,E),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(L){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(g)||"",Z=r.getShaderInfoLog(T)||"",te=r.getShaderInfoLog(E)||"",k=O.trim(),$=Z.trim(),Y=te.trim();let U=!0,H=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,T,E);else{const J=nv(r,T,"vertex"),ce=nv(r,E,"fragment");$e("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+J+`
`+ce)}else k!==""?Ve("WebGLProgram: Program Info Log:",k):($===""||Y==="")&&(H=!1);H&&(L.diagnostics={runnable:U,programLog:k,vertexShader:{log:$,prefix:v},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(T),r.deleteShader(E),x=new cc(r,g),b=PC(r,g)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(g,yC)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SC++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=E,this}let YC=0;class KC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qC(e),t.set(e,i)),i}}class qC{constructor(e){this.id=YC++,this.code=e,this.usedTimes=0}}function $C(n){return n===ls||n===Uc||n===Fc}function jC(n,e,t,i,r,s){const o=new ry,a=new KC,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,b,P,L,O,Z){const te=L.fog,k=O.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,U=e.get(x.envMap||$,Y),H=U&&U.mapping===ou?U.image.height:null,J=p[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Ve("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ce=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Se=ce!==void 0?ce.length:0;let qe=0;k.morphAttributes.position!==void 0&&(qe=1),k.morphAttributes.normal!==void 0&&(qe=2),k.morphAttributes.color!==void 0&&(qe=3);let rt,Ge,Q,se;if(J){const ve=_i[J];rt=ve.vertexShader,Ge=ve.fragmentShader}else{rt=x.vertexShader,Ge=x.fragmentShader;const ve=a.getVertexShaderStage(x),ot=a.getFragmentShaderStage(x);a.update(x,ve,ot),Q=ve.id,se=ot.id}const pe=n.getRenderTarget(),Ke=n.state.buffers.depth.getReversed(),He=O.isInstancedMesh===!0,Ie=O.isBatchedMesh===!0,gt=!!x.map,z=!!x.matcap,Te=!!U,Pe=!!x.aoMap,ue=!!x.lightMap,he=!!x.bumpMap&&x.wireframe===!1,we=!!x.normalMap,W=!!x.displacementMap,V=!!x.emissiveMap,ge=!!x.metalnessMap,fe=!!x.roughnessMap,C=x.anisotropy>0,Oe=x.clearcoat>0,Be=x.dispersion>0,R=x.iridescence>0,y=x.sheen>0,D=x.transmission>0,B=C&&!!x.anisotropyMap,q=Oe&&!!x.clearcoatMap,me=Oe&&!!x.clearcoatNormalMap,ye=Oe&&!!x.clearcoatRoughnessMap,ee=R&&!!x.iridescenceMap,oe=R&&!!x.iridescenceThicknessMap,Ae=y&&!!x.sheenColorMap,ne=y&&!!x.sheenRoughnessMap,ae=!!x.specularMap,le=!!x.specularColorMap,Ee=!!x.specularIntensityMap,ke=D&&!!x.transmissionMap,Re=D&&!!x.thicknessMap,N=!!x.gradientMap,_e=!!x.alphaMap,ie=x.alphaTest>0,de=!!x.alphaHash,Me=!!x.extensions;let re=wi;x.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(re=n.toneMapping);const be={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:rt,fragmentShader:Ge,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&O._colorsTexture!==null,instancing:He,instancingColor:He&&O.instanceColor!==null,instancingMorph:He&&O.morphTexture!==null,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:gt,matcap:z,envMap:Te,envMapMode:Te&&U.mapping,envMapCubeUVHeight:H,aoMap:Pe,lightMap:ue,bumpMap:he,normalMap:we,displacementMap:W,emissiveMap:V,normalMapObjectSpace:we&&x.normalMapType===ST,normalMapTangentSpace:we&&x.normalMapType===xh,packedNormalMap:we&&x.normalMapType===xh&&$C(x.normalMap.format),metalnessMap:ge,roughnessMap:fe,anisotropy:C,anisotropyMap:B,clearcoat:Oe,clearcoatMap:q,clearcoatNormalMap:me,clearcoatRoughnessMap:ye,dispersion:Be,iridescence:R,iridescenceMap:ee,iridescenceThicknessMap:oe,sheen:y,sheenColorMap:Ae,sheenRoughnessMap:ne,specularMap:ae,specularColorMap:le,specularIntensityMap:Ee,transmission:D,transmissionMap:ke,thicknessMap:Re,gradientMap:N,opaque:x.transparent===!1&&x.blending===js&&x.alphaToCoverage===!1,alphaMap:_e,alphaTest:ie,alphaHash:de,combine:x.combine,mapUv:gt&&m(x.map.channel),aoMapUv:Pe&&m(x.aoMap.channel),lightMapUv:ue&&m(x.lightMap.channel),bumpMapUv:he&&m(x.bumpMap.channel),normalMapUv:we&&m(x.normalMap.channel),displacementMapUv:W&&m(x.displacementMap.channel),emissiveMapUv:V&&m(x.emissiveMap.channel),metalnessMapUv:ge&&m(x.metalnessMap.channel),roughnessMapUv:fe&&m(x.roughnessMap.channel),anisotropyMapUv:B&&m(x.anisotropyMap.channel),clearcoatMapUv:q&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:ne&&m(x.sheenRoughnessMap.channel),specularMapUv:ae&&m(x.specularMap.channel),specularColorMapUv:le&&m(x.specularColorMap.channel),specularIntensityMapUv:Ee&&m(x.specularIntensityMap.channel),transmissionMapUv:ke&&m(x.transmissionMap.channel),thicknessMapUv:Re&&m(x.thicknessMap.channel),alphaMapUv:_e&&m(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(we||C),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(gt||_e),fog:!!te,useFog:x.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&we===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ke,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:qe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:gt&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===dt,decodeVideoTextureEmissive:V&&x.emissiveMap.isVideoTexture===!0&&at.getTransfer(x.emissiveMap.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===yi,flipSided:x.side===An,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Me&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&x.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function v(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(h(b,x),_(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function h(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function _(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function S(x){const b=p[x.type];let P;if(b){const L=_i[b];P=Gw.clone(L.uniforms)}else P=x.uniforms;return P}function M(x,b){let P=u.get(b);return P!==void 0?++P.usedTimes:(P=new XC(n,b,x,r),c.push(P),u.set(b,P)),P}function T(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function A(){a.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:S,acquireProgram:M,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:A}}function ZC(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function JC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function av(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function lv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,m,g,v,h){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:p,material:m,materialVariant:o(f),groupOrder:g,renderOrder:f.renderOrder,z:v,group:h},n[e]=_):(_.id=f.id,_.object=f,_.geometry=p,_.material=m,_.materialVariant=o(f),_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=v,_.group=h),e++,_}function l(f,p,m,g,v,h){const _=a(f,p,m,g,v,h);m.transmission>0?i.push(_):m.transparent===!0?r.push(_):t.push(_)}function c(f,p,m,g,v,h){const _=a(f,p,m,g,v,h);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function u(f,p,m){t.length>1&&t.sort(f||JC),i.length>1&&i.sort(p||av),r.length>1&&r.sort(p||av),m&&(t.reverse(),i.reverse(),r.reverse())}function d(){for(let f=e,p=n.length;f<p;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function QC(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new lv,n.set(i,[o])):r>=s.length?(o=new lv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function eP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new je};break;case"SpotLight":t={position:new I,direction:new I,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function tP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nP=0;function iP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rP(n){const e=new eP,t=tP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new Qe,o=new Qe;function a(c){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,m=0,g=0,v=0,h=0,_=0,S=0,M=0,T=0,E=0,A=0;c.sort(iP);for(let b=0,P=c.length;b<P;b++){const L=c[b],O=L.color,Z=L.intensity,te=L.distance;let k=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ls?k=L.shadow.map.texture:k=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=O.r*Z,d+=O.g*Z,f+=O.b*Z;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],Z);A++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,U=t.get(L);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=L.shadow.matrix,_++}i.directional[p]=$,p++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(O).multiplyScalar(Z),$.distance=te,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[g]=$;const Y=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,Y.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[g]=Y.matrix,L.castShadow){const U=t.get(L);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,i.spotShadow[g]=U,i.spotShadowMap[g]=k,M++}g++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(O).multiplyScalar(Z),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=$,v++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const Y=L.shadow,U=t.get(L);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,U.shadowCameraNear=Y.camera.near,U.shadowCameraFar=Y.camera.far,i.pointShadow[m]=U,i.pointShadowMap[m]=k,i.pointShadowMatrix[m]=L.shadow.matrix,S++}i.point[m]=$,m++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(Z),$.groundColor.copy(L.groundColor).multiplyScalar(Z),i.hemi[h]=$,h++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==p||x.pointLength!==m||x.spotLength!==g||x.rectAreaLength!==v||x.hemiLength!==h||x.numDirectionalShadows!==_||x.numPointShadows!==S||x.numSpotShadows!==M||x.numSpotMaps!==T||x.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=v,i.point.length=m,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,x.directionalLength=p,x.pointLength=m,x.spotLength=g,x.rectAreaLength=v,x.hemiLength=h,x.numDirectionalShadows=_,x.numPointShadows=S,x.numSpotShadows=M,x.numSpotMaps=T,x.numLightProbes=A,i.version=nP++)}function l(c,u){let d=0,f=0,p=0,m=0,g=0;const v=u.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){const S=c[h];if(S.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),d++}else if(S.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),p++}else if(S.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(v),o.identity(),s.copy(S.matrixWorld),s.premultiply(v),o.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(v),f++}else if(S.isHemisphereLight){const M=i.hemi[g];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(v),g++}}}return{setup:a,setupView:l,state:i}}function cv(n){const e=new rP(n),t=[],i=[],r=[];function s(f){d.camera=f,t.length=0,i.length=0,r.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function sP(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new cv(n),e.set(r,[a])):s>=o.length?(a=new cv(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const oP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lP=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],cP=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],uv=new Qe,Ho=new I,If=new I;function uP(n,e,t){let i=new Bp;const r=new Ye,s=new Ye,o=new _t,a=new Kw,l=new qw,c={},u=t.maxTextureSize,d={[Qi]:An,[An]:Qi,[yi]:yi},f=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:oP,fragmentShader:aP}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new bn;m.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new fn(m,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ic;let h=this.type;this.render=function(E,A,x){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||E.length===0)return;this.type===jE&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ic);const b=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ki),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const Z=h!==this.type;Z&&A.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(k=>k.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,k=E.length;te<k;te++){const $=E[te],Y=$.shadow;if(Y===void 0){Ve("WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const U=Y.getFrameExtents();r.multiply(U),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/U.x),r.x=s.x*U.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/U.y),r.y=s.y*U.y,Y.mapSize.y=s.y));const H=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=H,Y.map===null||Z===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===$o){if($.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Ai(r.x,r.y,{format:ls,type:er,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),Y.map.texture.name=$.name+".shadowMap",Y.map.depthTexture=new fo(r.x,r.y,Yn),Y.map.depthTexture.name=$.name+".shadowMapDepth",Y.map.depthTexture.format=tr,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Wt,Y.map.depthTexture.magFilter=Wt}else $.isPointLight?(Y.map=new xy(r.x),Y.map.depthTexture=new Aw(r.x,Ri)):(Y.map=new Ai(r.x,r.y),Y.map.depthTexture=new fo(r.x,r.y,Ri)),Y.map.depthTexture.name=$.name+".shadowMap",Y.map.depthTexture.format=tr,this.type===ic?(Y.map.depthTexture.compareFunction=H?Lp:Pp,Y.map.depthTexture.minFilter=Xt,Y.map.depthTexture.magFilter=Xt):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Wt,Y.map.depthTexture.magFilter=Wt);Y.camera.updateProjectionMatrix()}const J=Y.map.isWebGLCubeRenderTarget?6:1;for(let ce=0;ce<J;ce++){if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,ce),n.clear();else{ce===0&&(n.setRenderTarget(Y.map),n.clear());const Se=Y.getViewport(ce);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),O.viewport(o)}if($.isPointLight){const Se=Y.camera,qe=Y.matrix,rt=$.distance||Se.far;rt!==Se.far&&(Se.far=rt,Se.updateProjectionMatrix()),Ho.setFromMatrixPosition($.matrixWorld),Se.position.copy(Ho),If.copy(Se.position),If.add(lP[ce]),Se.up.copy(cP[ce]),Se.lookAt(If),Se.updateMatrixWorld(),qe.makeTranslation(-Ho.x,-Ho.y,-Ho.z),uv.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(uv,Se.coordinateSystem,Se.reversedDepth)}else Y.updateMatrices($);i=Y.getFrustum(),M(A,x,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===$o&&_(Y,x),Y.needsUpdate=!1}h=this.type,v.needsUpdate=!1,n.setRenderTarget(b,P,L)};function _(E,A){const x=e.update(g);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ai(r.x,r.y,{format:ls,type:er})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,x,f,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,x,p,g,null)}function S(E,A,x,b){let P=null;const L=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)P=L;else if(P=x.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=P.uuid,Z=A.uuid;let te=c[O];te===void 0&&(te={},c[O]=te);let k=te[Z];k===void 0&&(k=P.clone(),te[Z]=k,A.addEventListener("dispose",T)),P=k}if(P.visible=A.visible,P.wireframe=A.wireframe,b===$o?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:d[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=n.properties.get(P);O.light=x}return P}function M(E,A,x,b,P){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===$o)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const Z=e.update(E),te=E.material;if(Array.isArray(te)){const k=Z.groups;for(let $=0,Y=k.length;$<Y;$++){const U=k[$],H=te[U.materialIndex];if(H&&H.visible){const J=S(E,H,b,P);E.onBeforeShadow(n,E,A,x,Z,J,U),n.renderBufferDirect(x,null,Z,J,E,U),E.onAfterShadow(n,E,A,x,Z,J,U)}}}else if(te.visible){const k=S(E,te,b,P);E.onBeforeShadow(n,E,A,x,Z,k,null),n.renderBufferDirect(x,null,Z,k,E,null),E.onAfterShadow(n,E,A,x,Z,k,null)}}const O=E.children;for(let Z=0,te=O.length;Z<te;Z++)M(O[Z],A,x,b,P)}function T(E){E.target.removeEventListener("dispose",T);for(const x in c){const b=c[x],P=E.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}function fP(n,e){function t(){let N=!1;const _e=new _t;let ie=null;const de=new _t(0,0,0,0);return{setMask:function(Me){ie!==Me&&!N&&(n.colorMask(Me,Me,Me,Me),ie=Me)},setLocked:function(Me){N=Me},setClear:function(Me,re,be,ve,ot){ot===!0&&(Me*=ve,re*=ve,be*=ve),_e.set(Me,re,be,ve),de.equals(_e)===!1&&(n.clearColor(Me,re,be,ve),de.copy(_e))},reset:function(){N=!1,ie=null,de.set(-1,0,0,0)}}}function i(){let N=!1,_e=!1,ie=null,de=null,Me=null;return{setReversed:function(re){if(_e!==re){const be=e.get("EXT_clip_control");re?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),_e=re;const ve=Me;Me=null,this.setClear(ve)}},getReversed:function(){return _e},setTest:function(re){re?pe(n.DEPTH_TEST):Ke(n.DEPTH_TEST)},setMask:function(re){ie!==re&&!N&&(n.depthMask(re),ie=re)},setFunc:function(re){if(_e&&(re=NT[re]),de!==re){switch(re){case Ud:n.depthFunc(n.NEVER);break;case Fd:n.depthFunc(n.ALWAYS);break;case Od:n.depthFunc(n.LESS);break;case ao:n.depthFunc(n.LEQUAL);break;case kd:n.depthFunc(n.EQUAL);break;case Bd:n.depthFunc(n.GEQUAL);break;case zd:n.depthFunc(n.GREATER);break;case Vd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=re}},setLocked:function(re){N=re},setClear:function(re){Me!==re&&(Me=re,_e&&(re=1-re),n.clearDepth(re))},reset:function(){N=!1,ie=null,de=null,Me=null,_e=!1}}}function r(){let N=!1,_e=null,ie=null,de=null,Me=null,re=null,be=null,ve=null,ot=null;return{setTest:function(et){N||(et?pe(n.STENCIL_TEST):Ke(n.STENCIL_TEST))},setMask:function(et){_e!==et&&!N&&(n.stencilMask(et),_e=et)},setFunc:function(et,zt,Vt){(ie!==et||de!==zt||Me!==Vt)&&(n.stencilFunc(et,zt,Vt),ie=et,de=zt,Me=Vt)},setOp:function(et,zt,Vt){(re!==et||be!==zt||ve!==Vt)&&(n.stencilOp(et,zt,Vt),re=et,be=zt,ve=Vt)},setLocked:function(et){N=et},setClear:function(et){ot!==et&&(n.clearStencil(et),ot=et)},reset:function(){N=!1,_e=null,ie=null,de=null,Me=null,re=null,be=null,ve=null,ot=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f={},p=new WeakMap,m=[],g=null,v=!1,h=null,_=null,S=null,M=null,T=null,E=null,A=null,x=new je(0,0,0),b=0,P=!1,L=null,O=null,Z=null,te=null,k=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,U=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=U>=1):H.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=U>=2);let J=null,ce={};const Se=n.getParameter(n.SCISSOR_BOX),qe=n.getParameter(n.VIEWPORT),rt=new _t().fromArray(Se),Ge=new _t().fromArray(qe);function Q(N,_e,ie,de){const Me=new Uint8Array(4),re=n.createTexture();n.bindTexture(N,re),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<ie;be++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(_e+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return re}const se={};se[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),o.setFunc(ao),he(!1),we(Wg),pe(n.CULL_FACE),Pe(Ki);function pe(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Ke(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function He(N,_e){return f[N]!==_e?(n.bindFramebuffer(N,_e),f[N]=_e,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=_e),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ie(N,_e){let ie=m,de=!1;if(N){ie=p.get(_e),ie===void 0&&(ie=[],p.set(_e,ie));const Me=N.textures;if(ie.length!==Me.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let re=0,be=Me.length;re<be;re++)ie[re]=n.COLOR_ATTACHMENT0+re;ie.length=Me.length,de=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,de=!0);de&&n.drawBuffers(ie)}function gt(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const z={[qr]:n.FUNC_ADD,[JE]:n.FUNC_SUBTRACT,[QE]:n.FUNC_REVERSE_SUBTRACT};z[eT]=n.MIN,z[tT]=n.MAX;const Te={[nT]:n.ZERO,[iT]:n.ONE,[rT]:n.SRC_COLOR,[Id]:n.SRC_ALPHA,[uT]:n.SRC_ALPHA_SATURATE,[lT]:n.DST_COLOR,[oT]:n.DST_ALPHA,[sT]:n.ONE_MINUS_SRC_COLOR,[Dd]:n.ONE_MINUS_SRC_ALPHA,[cT]:n.ONE_MINUS_DST_COLOR,[aT]:n.ONE_MINUS_DST_ALPHA,[fT]:n.CONSTANT_COLOR,[dT]:n.ONE_MINUS_CONSTANT_COLOR,[hT]:n.CONSTANT_ALPHA,[pT]:n.ONE_MINUS_CONSTANT_ALPHA};function Pe(N,_e,ie,de,Me,re,be,ve,ot,et){if(N===Ki){v===!0&&(Ke(n.BLEND),v=!1);return}if(v===!1&&(pe(n.BLEND),v=!0),N!==ZE){if(N!==h||et!==P){if((_!==qr||T!==qr)&&(n.blendEquation(n.FUNC_ADD),_=qr,T=qr),et)switch(N){case js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xg:n.blendFunc(n.ONE,n.ONE);break;case Yg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kg:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:$e("WebGLState: Invalid blending: ",N);break}else switch(N){case js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xg:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Yg:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kg:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",N);break}S=null,M=null,E=null,A=null,x.set(0,0,0),b=0,h=N,P=et}return}Me=Me||_e,re=re||ie,be=be||de,(_e!==_||Me!==T)&&(n.blendEquationSeparate(z[_e],z[Me]),_=_e,T=Me),(ie!==S||de!==M||re!==E||be!==A)&&(n.blendFuncSeparate(Te[ie],Te[de],Te[re],Te[be]),S=ie,M=de,E=re,A=be),(ve.equals(x)===!1||ot!==b)&&(n.blendColor(ve.r,ve.g,ve.b,ot),x.copy(ve),b=ot),h=N,P=!1}function ue(N,_e){N.side===yi?Ke(n.CULL_FACE):pe(n.CULL_FACE);let ie=N.side===An;_e&&(ie=!ie),he(ie),N.blending===js&&N.transparent===!1?Pe(Ki):Pe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const de=N.stencilWrite;a.setTest(de),de&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),V(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):Ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function he(N){L!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),L=N)}function we(N){N!==qE?(pe(n.CULL_FACE),N!==O&&(N===Wg?n.cullFace(n.BACK):N===$E?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ke(n.CULL_FACE),O=N}function W(N){N!==Z&&(Y&&n.lineWidth(N),Z=N)}function V(N,_e,ie){N?(pe(n.POLYGON_OFFSET_FILL),(te!==_e||k!==ie)&&(te=_e,k=ie,o.getReversed()&&(_e=-_e),n.polygonOffset(_e,ie))):Ke(n.POLYGON_OFFSET_FILL)}function ge(N){N?pe(n.SCISSOR_TEST):Ke(n.SCISSOR_TEST)}function fe(N){N===void 0&&(N=n.TEXTURE0+$-1),J!==N&&(n.activeTexture(N),J=N)}function C(N,_e,ie){ie===void 0&&(J===null?ie=n.TEXTURE0+$-1:ie=J);let de=ce[ie];de===void 0&&(de={type:void 0,texture:void 0},ce[ie]=de),(de.type!==N||de.texture!==_e)&&(J!==ie&&(n.activeTexture(ie),J=ie),n.bindTexture(N,_e||se[N]),de.type=N,de.texture=_e)}function Oe(){const N=ce[J];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Be(){try{n.compressedTexImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function y(){try{n.texSubImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function D(){try{n.texSubImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function B(){try{n.compressedTexSubImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function q(){try{n.compressedTexSubImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function me(){try{n.texStorage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function ye(){try{n.texStorage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function ee(){try{n.texImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function oe(){try{n.texImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function Ae(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function ne(N,_e){d[N]!==_e&&(n.pixelStorei(N,_e),d[N]=_e)}function ae(N){rt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),rt.copy(N))}function le(N){Ge.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Ge.copy(N))}function Ee(N,_e){let ie=c.get(_e);ie===void 0&&(ie=new WeakMap,c.set(_e,ie));let de=ie.get(N);de===void 0&&(de=n.getUniformBlockIndex(_e,N.name),ie.set(N,de))}function ke(N,_e){const de=c.get(_e).get(N);l.get(_e)!==de&&(n.uniformBlockBinding(_e,de,N.__bindingPointIndex),l.set(_e,de))}function Re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},J=null,ce={},f={},p=new WeakMap,m=[],g=null,v=!1,h=null,_=null,S=null,M=null,T=null,E=null,A=null,x=new je(0,0,0),b=0,P=!1,L=null,O=null,Z=null,te=null,k=null,rt.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:Ke,bindFramebuffer:He,drawBuffers:Ie,useProgram:gt,setBlending:Pe,setMaterial:ue,setFlipSided:he,setCullFace:we,setLineWidth:W,setPolygonOffset:V,setScissorTest:ge,activeTexture:fe,bindTexture:C,unbindTexture:Oe,compressedTexImage2D:Be,compressedTexImage3D:R,texImage2D:ee,texImage3D:oe,pixelStorei:ne,getParameter:Ae,updateUBOMapping:Ee,uniformBlockBinding:ke,texStorage2D:me,texStorage3D:ye,texSubImage2D:y,texSubImage3D:D,compressedTexSubImage2D:B,compressedTexSubImage3D:q,scissor:ae,viewport:le,reset:Re}}function dP(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap,d=new Set;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return m?new OffscreenCanvas(R,y):Da("canvas")}function v(R,y,D){let B=1;const q=Be(R);if((q.width>D||q.height>D)&&(B=D/Math.max(q.width,q.height)),B<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const me=Math.floor(B*q.width),ye=Math.floor(B*q.height);f===void 0&&(f=g(me,ye));const ee=y?g(me,ye):f;return ee.width=me,ee.height=ye,ee.getContext("2d").drawImage(R,0,0,me,ye),Ve("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+me+"x"+ye+")."),ee}else return"data"in R&&Ve("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),R;return R}function h(R){return R.generateMipmaps}function _(R){n.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(R,y,D,B,q,me=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ye;B&&(ye=e.get("EXT_texture_norm16"),ye||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=y;if(y===n.RED&&(D===n.FLOAT&&(ee=n.R32F),D===n.HALF_FLOAT&&(ee=n.R16F),D===n.UNSIGNED_BYTE&&(ee=n.R8),D===n.UNSIGNED_SHORT&&ye&&(ee=ye.R16_EXT),D===n.SHORT&&ye&&(ee=ye.R16_SNORM_EXT)),y===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(ee=n.R8UI),D===n.UNSIGNED_SHORT&&(ee=n.R16UI),D===n.UNSIGNED_INT&&(ee=n.R32UI),D===n.BYTE&&(ee=n.R8I),D===n.SHORT&&(ee=n.R16I),D===n.INT&&(ee=n.R32I)),y===n.RG&&(D===n.FLOAT&&(ee=n.RG32F),D===n.HALF_FLOAT&&(ee=n.RG16F),D===n.UNSIGNED_BYTE&&(ee=n.RG8),D===n.UNSIGNED_SHORT&&ye&&(ee=ye.RG16_EXT),D===n.SHORT&&ye&&(ee=ye.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(ee=n.RG8UI),D===n.UNSIGNED_SHORT&&(ee=n.RG16UI),D===n.UNSIGNED_INT&&(ee=n.RG32UI),D===n.BYTE&&(ee=n.RG8I),D===n.SHORT&&(ee=n.RG16I),D===n.INT&&(ee=n.RG32I)),y===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),D===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),D===n.UNSIGNED_INT&&(ee=n.RGB32UI),D===n.BYTE&&(ee=n.RGB8I),D===n.SHORT&&(ee=n.RGB16I),D===n.INT&&(ee=n.RGB32I)),y===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),D===n.UNSIGNED_INT&&(ee=n.RGBA32UI),D===n.BYTE&&(ee=n.RGBA8I),D===n.SHORT&&(ee=n.RGBA16I),D===n.INT&&(ee=n.RGBA32I)),y===n.RGB&&(D===n.UNSIGNED_SHORT&&ye&&(ee=ye.RGB16_EXT),D===n.SHORT&&ye&&(ee=ye.RGB16_SNORM_EXT),D===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),y===n.RGBA){const oe=me?Oc:at.getTransfer(q);D===n.FLOAT&&(ee=n.RGBA32F),D===n.HALF_FLOAT&&(ee=n.RGBA16F),D===n.UNSIGNED_BYTE&&(ee=oe===dt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT&&ye&&(ee=ye.RGBA16_EXT),D===n.SHORT&&ye&&(ee=ye.RGBA16_SNORM_EXT),D===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function T(R,y){let D;return R?y===null||y===Ri||y===Pa?D=n.DEPTH24_STENCIL8:y===Yn?D=n.DEPTH32F_STENCIL8:y===Ca&&(D=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ri||y===Pa?D=n.DEPTH_COMPONENT24:y===Yn?D=n.DEPTH_COMPONENT32F:y===Ca&&(D=n.DEPTH_COMPONENT16),D}function E(R,y){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==Wt&&R.minFilter!==Xt?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){const y=R.target;y.removeEventListener("dispose",A),b(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&d.delete(y)}function x(R){const y=R.target;y.removeEventListener("dispose",x),L(y)}function b(R){const y=i.get(R);if(y.__webglInit===void 0)return;const D=R.source,B=p.get(D);if(B){const q=B[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&P(R),Object.keys(B).length===0&&p.delete(D)}i.remove(R)}function P(R){const y=i.get(R);n.deleteTexture(y.__webglTexture);const D=R.source,B=p.get(D);delete B[y.__cacheKey],o.memory.textures--}function L(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(y.__webglFramebuffer[B]))for(let q=0;q<y.__webglFramebuffer[B].length;q++)n.deleteFramebuffer(y.__webglFramebuffer[B][q]);else n.deleteFramebuffer(y.__webglFramebuffer[B]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[B])}else{if(Array.isArray(y.__webglFramebuffer))for(let B=0;B<y.__webglFramebuffer.length;B++)n.deleteFramebuffer(y.__webglFramebuffer[B]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let B=0;B<y.__webglColorRenderbuffer.length;B++)y.__webglColorRenderbuffer[B]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[B]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const D=R.textures;for(let B=0,q=D.length;B<q;B++){const me=i.get(D[B]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(D[B])}i.remove(R)}let O=0;function Z(){O=0}function te(){return O}function k(R){O=R}function $(){const R=O;return R>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),O+=1,R}function Y(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function U(R,y){const D=i.get(R);if(R.isVideoTexture&&C(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&D.__version!==R.version){const B=R.image;if(B===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(D,R,y);return}}else R.isExternalTexture&&(D.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+y)}function H(R,y){const D=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&D.__version!==R.version){Ke(D,R,y);return}else R.isExternalTexture&&(D.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+y)}function J(R,y){const D=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&D.__version!==R.version){Ke(D,R,y);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+y)}function ce(R,y){const D=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&D.__version!==R.version){He(D,R,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+y)}const Se={[co]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[Dc]:n.MIRRORED_REPEAT},qe={[Wt]:n.NEAREST,[qx]:n.NEAREST_MIPMAP_NEAREST,[jo]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[rc]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},rt={[MT]:n.NEVER,[bT]:n.ALWAYS,[ET]:n.LESS,[Pp]:n.LEQUAL,[TT]:n.EQUAL,[Lp]:n.GEQUAL,[wT]:n.GREATER,[AT]:n.NOTEQUAL};function Ge(R,y){if(y.type===Yn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Xt||y.magFilter===rc||y.magFilter===jo||y.magFilter===Wi||y.minFilter===Xt||y.minFilter===rc||y.minFilter===jo||y.minFilter===Wi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Se[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Se[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Se[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,qe[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,qe[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,rt[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Wt||y.minFilter!==jo&&y.minFilter!==Wi||y.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Q(R,y){let D=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));const B=y.source;let q=p.get(B);q===void 0&&(q={},p.set(B,q));const me=Y(y);if(me!==R.__cacheKey){q[me]===void 0&&(q[me]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),q[me].usedTimes++;const ye=q[R.__cacheKey];ye!==void 0&&(q[R.__cacheKey].usedTimes--,ye.usedTimes===0&&P(y)),R.__cacheKey=me,R.__webglTexture=q[me].texture}return D}function se(R,y,D){return Math.floor(Math.floor(R/D)/y)}function pe(R,y,D,B){const me=R.updateRanges;if(me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,D,B,y.data);else{me.sort((ne,ae)=>ne.start-ae.start);let ye=0;for(let ne=1;ne<me.length;ne++){const ae=me[ye],le=me[ne],Ee=ae.start+ae.count,ke=se(le.start,y.width,4),Re=se(ae.start,y.width,4);le.start<=Ee+1&&ke===Re&&se(le.start+le.count-1,y.width,4)===ke?ae.count=Math.max(ae.count,le.start+le.count-ae.start):(++ye,me[ye]=le)}me.length=ye+1;const ee=t.getParameter(n.UNPACK_ROW_LENGTH),oe=t.getParameter(n.UNPACK_SKIP_PIXELS),Ae=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ne=0,ae=me.length;ne<ae;ne++){const le=me[ne],Ee=Math.floor(le.start/4),ke=Math.ceil(le.count/4),Re=Ee%y.width,N=Math.floor(Ee/y.width),_e=ke,ie=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Re,N,_e,ie,D,B,y.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function Ke(R,y,D){let B=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(B=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(B=n.TEXTURE_3D);const q=Q(R,y),me=y.source;t.bindTexture(B,R.__webglTexture,n.TEXTURE0+D);const ye=i.get(me);if(me.version!==ye.__version||q===!0){if(t.activeTexture(n.TEXTURE0+D),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ie=at.getPrimaries(at.workingColorSpace),de=y.colorSpace===yr?null:at.getPrimaries(y.colorSpace),Me=y.colorSpace===yr||ie===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let oe=v(y.image,!1,r.maxTextureSize);oe=Oe(y,oe);const Ae=s.convert(y.format,y.colorSpace),ne=s.convert(y.type);let ae=M(y.internalFormat,Ae,ne,y.normalized,y.colorSpace,y.isVideoTexture);Ge(B,y);let le;const Ee=y.mipmaps,ke=y.isVideoTexture!==!0,Re=ye.__version===void 0||q===!0,N=me.dataReady,_e=E(y,oe);if(y.isDepthTexture)ae=T(y.format===Qr,y.type),Re&&(ke?t.texStorage2D(n.TEXTURE_2D,1,ae,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,ae,oe.width,oe.height,0,Ae,ne,null));else if(y.isDataTexture)if(Ee.length>0){ke&&Re&&t.texStorage2D(n.TEXTURE_2D,_e,ae,Ee[0].width,Ee[0].height);for(let ie=0,de=Ee.length;ie<de;ie++)le=Ee[ie],ke?N&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,le.width,le.height,Ae,ne,le.data):t.texImage2D(n.TEXTURE_2D,ie,ae,le.width,le.height,0,Ae,ne,le.data);y.generateMipmaps=!1}else ke?(Re&&t.texStorage2D(n.TEXTURE_2D,_e,ae,oe.width,oe.height),N&&pe(y,oe,Ae,ne)):t.texImage2D(n.TEXTURE_2D,0,ae,oe.width,oe.height,0,Ae,ne,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ke&&Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ae,Ee[0].width,Ee[0].height,oe.depth);for(let ie=0,de=Ee.length;ie<de;ie++)if(le=Ee[ie],y.format!==Kn)if(Ae!==null)if(ke){if(N)if(y.layerUpdates.size>0){const Me=V0(le.width,le.height,y.format,y.type);for(const re of y.layerUpdates){const be=le.data.subarray(re*Me/le.data.BYTES_PER_ELEMENT,(re+1)*Me/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,re,le.width,le.height,1,Ae,be)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,le.width,le.height,oe.depth,Ae,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,ae,le.width,le.height,oe.depth,0,le.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,le.width,le.height,oe.depth,Ae,ne,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,ae,le.width,le.height,oe.depth,0,Ae,ne,le.data)}else{ke&&Re&&t.texStorage2D(n.TEXTURE_2D,_e,ae,Ee[0].width,Ee[0].height);for(let ie=0,de=Ee.length;ie<de;ie++)le=Ee[ie],y.format!==Kn?Ae!==null?ke?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,le.width,le.height,Ae,le.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,ae,le.width,le.height,0,le.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?N&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,le.width,le.height,Ae,ne,le.data):t.texImage2D(n.TEXTURE_2D,ie,ae,le.width,le.height,0,Ae,ne,le.data)}else if(y.isDataArrayTexture)if(ke){if(Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ae,oe.width,oe.height,oe.depth),N)if(y.layerUpdates.size>0){const ie=V0(oe.width,oe.height,y.format,y.type);for(const de of y.layerUpdates){const Me=oe.data.subarray(de*ie/oe.data.BYTES_PER_ELEMENT,(de+1)*ie/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,oe.width,oe.height,1,Ae,ne,Me)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ae,ne,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ae,oe.width,oe.height,oe.depth,0,Ae,ne,oe.data);else if(y.isData3DTexture)ke?(Re&&t.texStorage3D(n.TEXTURE_3D,_e,ae,oe.width,oe.height,oe.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ae,ne,oe.data)):t.texImage3D(n.TEXTURE_3D,0,ae,oe.width,oe.height,oe.depth,0,Ae,ne,oe.data);else if(y.isFramebufferTexture){if(Re)if(ke)t.texStorage2D(n.TEXTURE_2D,_e,ae,oe.width,oe.height);else{let ie=oe.width,de=oe.height;for(let Me=0;Me<_e;Me++)t.texImage2D(n.TEXTURE_2D,Me,ae,ie,de,0,Ae,ne,null),ie>>=1,de>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){const ie=n.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),oe.parentNode!==ie){ie.appendChild(oe),d.add(y),ie.onpaint=de=>{const Me=de.changedElements;for(const re of d)Me.includes(re.image)&&(re.needsUpdate=!0)},ie.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,oe);else{const Me=n.RGBA,re=n.RGBA,be=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Me,re,be,oe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(ke&&Re){const ie=Be(Ee[0]);t.texStorage2D(n.TEXTURE_2D,_e,ae,ie.width,ie.height)}for(let ie=0,de=Ee.length;ie<de;ie++)le=Ee[ie],ke?N&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Ae,ne,le):t.texImage2D(n.TEXTURE_2D,ie,ae,Ae,ne,le);y.generateMipmaps=!1}else if(ke){if(Re){const ie=Be(oe);t.texStorage2D(n.TEXTURE_2D,_e,ae,ie.width,ie.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,ne,oe)}else t.texImage2D(n.TEXTURE_2D,0,ae,Ae,ne,oe);h(y)&&_(B),ye.__version=me.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function He(R,y,D){if(y.image.length!==6)return;const B=Q(R,y),q=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+D);const me=i.get(q);if(q.version!==me.__version||B===!0){t.activeTexture(n.TEXTURE0+D);const ye=at.getPrimaries(at.workingColorSpace),ee=y.colorSpace===yr?null:at.getPrimaries(y.colorSpace),oe=y.colorSpace===yr||ye===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ae=y.isCompressedTexture||y.image[0].isCompressedTexture,ne=y.image[0]&&y.image[0].isDataTexture,ae=[];for(let re=0;re<6;re++)!Ae&&!ne?ae[re]=v(y.image[re],!0,r.maxCubemapSize):ae[re]=ne?y.image[re].image:y.image[re],ae[re]=Oe(y,ae[re]);const le=ae[0],Ee=s.convert(y.format,y.colorSpace),ke=s.convert(y.type),Re=M(y.internalFormat,Ee,ke,y.normalized,y.colorSpace),N=y.isVideoTexture!==!0,_e=me.__version===void 0||B===!0,ie=q.dataReady;let de=E(y,le);Ge(n.TEXTURE_CUBE_MAP,y);let Me;if(Ae){N&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Re,le.width,le.height);for(let re=0;re<6;re++){Me=ae[re].mipmaps;for(let be=0;be<Me.length;be++){const ve=Me[be];y.format!==Kn?Ee!==null?N?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,0,0,ve.width,ve.height,Ee,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,Re,ve.width,ve.height,0,ve.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,0,0,ve.width,ve.height,Ee,ke,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,Re,ve.width,ve.height,0,Ee,ke,ve.data)}}}else{if(Me=y.mipmaps,N&&_e){Me.length>0&&de++;const re=Be(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Re,re.width,re.height)}for(let re=0;re<6;re++)if(ne){N?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ae[re].width,ae[re].height,Ee,ke,ae[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Re,ae[re].width,ae[re].height,0,Ee,ke,ae[re].data);for(let be=0;be<Me.length;be++){const ot=Me[be].image[re].image;N?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,0,0,ot.width,ot.height,Ee,ke,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,Re,ot.width,ot.height,0,Ee,ke,ot.data)}}else{N?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ee,ke,ae[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Re,Ee,ke,ae[re]);for(let be=0;be<Me.length;be++){const ve=Me[be];N?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,0,0,Ee,ke,ve.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,Re,Ee,ke,ve.image[re])}}}h(y)&&_(n.TEXTURE_CUBE_MAP),me.__version=q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Ie(R,y,D,B,q,me){const ye=s.convert(D.format,D.colorSpace),ee=s.convert(D.type),oe=M(D.internalFormat,ye,ee,D.normalized,D.colorSpace),Ae=i.get(y),ne=i.get(D);if(ne.__renderTarget=y,!Ae.__hasExternalTextures){const ae=Math.max(1,y.width>>me),le=Math.max(1,y.height>>me);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,me,oe,ae,le,y.depth,0,ye,ee,null):t.texImage2D(q,me,oe,ae,le,0,ye,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),fe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,q,ne.__webglTexture,0,ge(y)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,B,q,ne.__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(R,y,D){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){const B=y.depthTexture,q=B&&B.isDepthTexture?B.type:null,me=T(y.stencilBuffer,q),ye=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge(y),me,y.width,y.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge(y),me,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,me,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,R)}else{const B=y.textures;for(let q=0;q<B.length;q++){const me=B[q],ye=s.convert(me.format,me.colorSpace),ee=s.convert(me.type),oe=M(me.internalFormat,ye,ee,me.normalized,me.colorSpace);fe(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge(y),oe,y.width,y.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge(y),oe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,oe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function z(R,y,D){const B=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=i.get(y.depthTexture);if(q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B){if(q.__webglInit===void 0&&(q.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),q.__webglTexture===void 0){q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,y.depthTexture);const Ae=s.convert(y.depthTexture.format),ne=s.convert(y.depthTexture.type);let ae;y.depthTexture.format===tr?ae=n.DEPTH_COMPONENT24:y.depthTexture.format===Qr&&(ae=n.DEPTH24_STENCIL8);for(let le=0;le<6;le++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ae,y.width,y.height,0,Ae,ne,null)}}else U(y.depthTexture,0);const me=q.__webglTexture,ye=ge(y),ee=B?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,oe=y.depthTexture.format===Qr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===tr)fe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ee,me,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,oe,ee,me,0);else if(y.depthTexture.format===Qr)fe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ee,me,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,oe,ee,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Te(R){const y=i.get(R),D=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const B=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),B){const q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,B.removeEventListener("dispose",q)};B.addEventListener("dispose",q),y.__depthDisposeCallback=q}y.__boundDepthTexture=B}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(D)for(let B=0;B<6;B++)z(y.__webglFramebuffer[B],R,B);else{const B=R.texture.mipmaps;B&&B.length>0?z(y.__webglFramebuffer[0],R,0):z(y.__webglFramebuffer,R,0)}else if(D){y.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[B]),y.__webglDepthbuffer[B]===void 0)y.__webglDepthbuffer[B]=n.createRenderbuffer(),gt(y.__webglDepthbuffer[B],R,!1);else{const q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=y.__webglDepthbuffer[B];n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,me)}}else{const B=R.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),gt(y.__webglDepthbuffer,R,!1);else{const q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(R,y,D){const B=i.get(R);y!==void 0&&Ie(B.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Te(R)}function ue(R){const y=R.texture,D=i.get(R),B=i.get(y);R.addEventListener("dispose",x);const q=R.textures,me=R.isWebGLCubeRenderTarget===!0,ye=q.length>1;if(ye||(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=y.version,o.memory.textures++),me){D.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer[ee]=[];for(let oe=0;oe<y.mipmaps.length;oe++)D.__webglFramebuffer[ee][oe]=n.createFramebuffer()}else D.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer=[];for(let ee=0;ee<y.mipmaps.length;ee++)D.__webglFramebuffer[ee]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ee=0,oe=q.length;ee<oe;ee++){const Ae=i.get(q[ee]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&fe(R)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ee=0;ee<q.length;ee++){const oe=q[ee];D.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ee]);const Ae=s.convert(oe.format,oe.colorSpace),ne=s.convert(oe.type),ae=M(oe.internalFormat,Ae,ne,oe.normalized,oe.colorSpace,R.isXRRenderTarget===!0),le=ge(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,le,ae,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,D.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),gt(D.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,y);for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)Ie(D.__webglFramebuffer[ee][oe],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,oe);else Ie(D.__webglFramebuffer[ee],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);h(y)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ee=0,oe=q.length;ee<oe;ee++){const Ae=q[ee],ne=i.get(Ae);let ae=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,ne.__webglTexture),Ge(ae,Ae),Ie(D.__webglFramebuffer,R,Ae,n.COLOR_ATTACHMENT0+ee,ae,0),h(Ae)&&_(ae)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,B.__webglTexture),Ge(ee,y),y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)Ie(D.__webglFramebuffer[oe],R,y,n.COLOR_ATTACHMENT0,ee,oe);else Ie(D.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,ee,0);h(y)&&_(ee),t.unbindTexture()}R.depthBuffer&&Te(R)}function he(R){const y=R.textures;for(let D=0,B=y.length;D<B;D++){const q=y[D];if(h(q)){const me=S(R),ye=i.get(q).__webglTexture;t.bindTexture(me,ye),_(me),t.unbindTexture()}}}const we=[],W=[];function V(R){if(R.samples>0){if(fe(R)===!1){const y=R.textures,D=R.width,B=R.height;let q=n.COLOR_BUFFER_BIT;const me=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(R),ee=y.length>1;if(ee)for(let Ae=0;Ae<y.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const oe=R.texture.mipmaps;oe&&oe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ae=0;Ae<y.length;Ae++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ae]);const ne=i.get(y[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,D,B,0,0,D,B,q,n.NEAREST),l===!0&&(we.length=0,W.length=0,we.push(n.COLOR_ATTACHMENT0+Ae),R.depthBuffer&&R.resolveDepthBuffer===!1&&(we.push(me),W.push(me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,W)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let Ae=0;Ae<y.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ae]);const ne=i.get(y[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ge(R){return Math.min(r.maxSamples,R.samples)}function fe(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function C(R){const y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function Oe(R,y){const D=R.colorSpace,B=R.format,q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||D!==Fn&&D!==yr&&(at.getTransfer(D)===dt?(B!==Kn||q!==Nn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",D)),y}function Be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=Z,this.getTextureUnits=te,this.setTextureUnits=k,this.setTexture2D=U,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=ce,this.rebindTextures=Pe,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function hP(n,e){function t(i,r=yr){let s;const o=at.getTransfer(r);if(i===Nn)return n.UNSIGNED_BYTE;if(i===Tp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zx)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jx)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$x)return n.BYTE;if(i===jx)return n.SHORT;if(i===Ca)return n.UNSIGNED_SHORT;if(i===Ep)return n.INT;if(i===Ri)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===er)return n.HALF_FLOAT;if(i===Qx)return n.ALPHA;if(i===ey)return n.RGB;if(i===Kn)return n.RGBA;if(i===tr)return n.DEPTH_COMPONENT;if(i===Qr)return n.DEPTH_STENCIL;if(i===Ap)return n.RED;if(i===bp)return n.RED_INTEGER;if(i===ls)return n.RG;if(i===Rp)return n.RG_INTEGER;if(i===Cp)return n.RGBA_INTEGER;if(i===sc||i===oc||i===ac||i===lc)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ac)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hd||i===Gd||i===Wd||i===Xd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Hd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yd||i===Kd||i===qd||i===$d||i===jd||i===Uc||i===Zd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yd||i===Kd)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===$d)return s.COMPRESSED_R11_EAC;if(i===jd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Uc)return s.COMPRESSED_RG11_EAC;if(i===Zd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jd||i===Qd||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===fh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===eh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===th)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ih)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ah)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ch)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dh||i===hh||i===ph)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===dh)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ph)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mh||i===gh||i===Fc||i===vh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===mh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const pP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new fy(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ci({vertexShader:pP,fragmentShader:mP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fn(new lu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vP extends fs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,m=null;const g=typeof XRWebGLBinding<"u",v=new gP,h={},_=t.getContextAttributes();let S=null,M=null;const T=[],E=[],A=new Ye;let x=null;const b=new un;b.viewport=new _t;const P=new un;P.viewport=new _t;const L=[b,P],O=new _1;let Z=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let se=T[Q];return se===void 0&&(se=new nf,T[Q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Q){let se=T[Q];return se===void 0&&(se=new nf,T[Q]=se),se.getGripSpace()},this.getHand=function(Q){let se=T[Q];return se===void 0&&(se=new nf,T[Q]=se),se.getHandSpace()};function k(Q){const se=E.indexOf(Q.inputSource);if(se===-1)return;const pe=T[se];pe!==void 0&&(pe.update(Q.inputSource,Q.frame,c||o),pe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function $(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<T.length;Q++){const se=E[Q];se!==null&&(E[Q]=null,T[Q].disconnect(se))}Z=null,te=null,v.reset();for(const Q in h)delete h[Q];e.setRenderTarget(S),p=null,f=null,d=null,r=null,M=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Y),_.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ke=null,He=null;_.depth&&(He=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=_.stencil?Qr:tr,Ke=_.stencil?Pa:Ri);const Ie={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Ai(f.textureWidth,f.textureHeight,{format:Kn,type:Nn,depthTexture:new fo(f.textureWidth,f.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const pe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ai(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(Q){for(let se=0;se<Q.removed.length;se++){const pe=Q.removed[se],Ke=E.indexOf(pe);Ke>=0&&(E[Ke]=null,T[Ke].disconnect(pe))}for(let se=0;se<Q.added.length;se++){const pe=Q.added[se];let Ke=E.indexOf(pe);if(Ke===-1){for(let Ie=0;Ie<T.length;Ie++)if(Ie>=E.length){E.push(pe),Ke=Ie;break}else if(E[Ie]===null){E[Ie]=pe,Ke=Ie;break}if(Ke===-1)break}const He=T[Ke];He&&He.connect(pe)}}const U=new I,H=new I;function J(Q,se,pe){U.setFromMatrixPosition(se.matrixWorld),H.setFromMatrixPosition(pe.matrixWorld);const Ke=U.distanceTo(H),He=se.projectionMatrix.elements,Ie=pe.projectionMatrix.elements,gt=He[14]/(He[10]-1),z=He[14]/(He[10]+1),Te=(He[9]+1)/He[5],Pe=(He[9]-1)/He[5],ue=(He[8]-1)/He[0],he=(Ie[8]+1)/Ie[0],we=gt*ue,W=gt*he,V=Ke/(-ue+he),ge=V*-ue;if(se.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ge),Q.translateZ(V),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),He[10]===-1)Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const fe=gt+V,C=z+V,Oe=we-ge,Be=W+(Ke-ge),R=Te*z/C*fe,y=Pe*z/C*fe;Q.projectionMatrix.makePerspective(Oe,Be,R,y,fe,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ce(Q,se){se===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(se.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let se=Q.near,pe=Q.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),O.near=P.near=b.near=se,O.far=P.far=b.far=pe,(Z!==O.near||te!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),Z=O.near,te=O.far),O.layers.mask=Q.layers.mask|6,b.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;const Ke=Q.parent,He=O.cameras;ce(O,Ke);for(let Ie=0;Ie<He.length;Ie++)ce(He[Ie],Ke);He.length===2?J(O,b,P):O.projectionMatrix.copy(b.projectionMatrix),Se(Q,O,Ke)};function Se(Q,se,pe){pe===null?Q.matrix.copy(se.matrixWorld):(Q.matrix.copy(pe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(se.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=uo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(O)},this.getCameraTexture=function(Q){return h[Q]};let qe=null;function rt(Q,se){if(u=se.getViewerPose(c||o),m=se,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Ke=!1;pe.length!==O.cameras.length&&(O.cameras.length=0,Ke=!0);for(let z=0;z<pe.length;z++){const Te=pe[z];let Pe=null;if(p!==null)Pe=p.getViewport(Te);else{const he=d.getViewSubImage(f,Te);Pe=he.viewport,z===0&&(e.setRenderTargetTextures(M,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(M))}let ue=L[z];ue===void 0&&(ue=new un,ue.layers.enable(z),ue.viewport=new _t,L[z]=ue),ue.matrix.fromArray(Te.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Te.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),z===0&&(O.matrix.copy(ue.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ke===!0&&O.cameras.push(ue)}const He=r.enabledFeatures;if(He&&He.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){d=i.getBinding();const z=d.getDepthInformation(pe[0]);z&&z.isValid&&z.texture&&v.init(z,r.renderState)}if(He&&He.includes("camera-access")&&g){e.state.unbindTexture(),d=i.getBinding();for(let z=0;z<pe.length;z++){const Te=pe[z].camera;if(Te){let Pe=h[Te];Pe||(Pe=new fy,h[Te]=Pe);const ue=d.getCameraImage(Te);Pe.sourceTexture=ue}}}}for(let pe=0;pe<T.length;pe++){const Ke=E[pe],He=T[pe];Ke!==null&&He!==void 0&&He.update(Ke,se,c||o)}qe&&qe(Q,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),m=null}const Ge=new vy;Ge.setAnimationLoop(rt),this.setAnimationLoop=function(Q){qe=Q},this.dispose=function(){}}}const _P=new Qe,Ty=new Ze;Ty.set(-1,0,0,0,1,0,0,0,1);function xP(n,e){function t(v,h){v.matrixAutoUpdate===!0&&v.updateMatrix(),h.value.copy(v.matrix)}function i(v,h){h.color.getRGB(v.fogColor.value,hy(n)),h.isFog?(v.fogNear.value=h.near,v.fogFar.value=h.far):h.isFogExp2&&(v.fogDensity.value=h.density)}function r(v,h,_,S,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(v,h):h.isMeshLambertMaterial?(s(v,h),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(v,h),d(v,h)):h.isMeshPhongMaterial?(s(v,h),u(v,h),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(v,h),f(v,h),h.isMeshPhysicalMaterial&&p(v,h,M)):h.isMeshMatcapMaterial?(s(v,h),m(v,h)):h.isMeshDepthMaterial?s(v,h):h.isMeshDistanceMaterial?(s(v,h),g(v,h)):h.isMeshNormalMaterial?s(v,h):h.isLineBasicMaterial?(o(v,h),h.isLineDashedMaterial&&a(v,h)):h.isPointsMaterial?l(v,h,_,S):h.isSpriteMaterial?c(v,h):h.isShadowMaterial?(v.color.value.copy(h.color),v.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(v,h){v.opacity.value=h.opacity,h.color&&v.diffuse.value.copy(h.color),h.emissive&&v.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(v.map.value=h.map,t(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,t(h.alphaMap,v.alphaMapTransform)),h.bumpMap&&(v.bumpMap.value=h.bumpMap,t(h.bumpMap,v.bumpMapTransform),v.bumpScale.value=h.bumpScale,h.side===An&&(v.bumpScale.value*=-1)),h.normalMap&&(v.normalMap.value=h.normalMap,t(h.normalMap,v.normalMapTransform),v.normalScale.value.copy(h.normalScale),h.side===An&&v.normalScale.value.negate()),h.displacementMap&&(v.displacementMap.value=h.displacementMap,t(h.displacementMap,v.displacementMapTransform),v.displacementScale.value=h.displacementScale,v.displacementBias.value=h.displacementBias),h.emissiveMap&&(v.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,v.emissiveMapTransform)),h.specularMap&&(v.specularMap.value=h.specularMap,t(h.specularMap,v.specularMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest);const _=e.get(h),S=_.envMap,M=_.envMapRotation;S&&(v.envMap.value=S,v.envMapRotation.value.setFromMatrix4(_P.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Ty),v.reflectivity.value=h.reflectivity,v.ior.value=h.ior,v.refractionRatio.value=h.refractionRatio),h.lightMap&&(v.lightMap.value=h.lightMap,v.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,v.lightMapTransform)),h.aoMap&&(v.aoMap.value=h.aoMap,v.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,v.aoMapTransform))}function o(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,h.map&&(v.map.value=h.map,t(h.map,v.mapTransform))}function a(v,h){v.dashSize.value=h.dashSize,v.totalSize.value=h.dashSize+h.gapSize,v.scale.value=h.scale}function l(v,h,_,S){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.size.value=h.size*_,v.scale.value=S*.5,h.map&&(v.map.value=h.map,t(h.map,v.uvTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,t(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function c(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.rotation.value=h.rotation,h.map&&(v.map.value=h.map,t(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,t(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function u(v,h){v.specular.value.copy(h.specular),v.shininess.value=Math.max(h.shininess,1e-4)}function d(v,h){h.gradientMap&&(v.gradientMap.value=h.gradientMap)}function f(v,h){v.metalness.value=h.metalness,h.metalnessMap&&(v.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,v.metalnessMapTransform)),v.roughness.value=h.roughness,h.roughnessMap&&(v.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,v.roughnessMapTransform)),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)}function p(v,h,_){v.ior.value=h.ior,h.sheen>0&&(v.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),v.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(v.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,v.sheenColorMapTransform)),h.sheenRoughnessMap&&(v.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,v.sheenRoughnessMapTransform))),h.clearcoat>0&&(v.clearcoat.value=h.clearcoat,v.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(v.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,v.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(v.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===An&&v.clearcoatNormalScale.value.negate())),h.dispersion>0&&(v.dispersion.value=h.dispersion),h.iridescence>0&&(v.iridescence.value=h.iridescence,v.iridescenceIOR.value=h.iridescenceIOR,v.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(v.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,v.iridescenceMapTransform)),h.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),h.transmission>0&&(v.transmission.value=h.transmission,v.transmissionSamplerMap.value=_.texture,v.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(v.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,v.transmissionMapTransform)),v.thickness.value=h.thickness,h.thicknessMap&&(v.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=h.attenuationDistance,v.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(v.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(v.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=h.specularIntensity,v.specularColor.value.copy(h.specularColor),h.specularColorMap&&(v.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,v.specularColorMapTransform)),h.specularIntensityMap&&(v.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,h){h.matcap&&(v.matcap.value=h.matcap)}function g(v,h){const _=e.get(h).light;v.referencePosition.value.setFromMatrixPosition(_.matrixWorld),v.nearDistance.value=_.shadow.camera.near,v.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yP(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const E=T.program;i.uniformBlockBinding(M,E)}function c(M,T){let E=r[M.id];E===void 0&&(v(M),E=u(M),r[M.id]=E,M.addEventListener("dispose",_));const A=T.program;i.updateUBOMapping(M,A);const x=e.render.frame;s[M.id]!==x&&(f(M),s[M.id]=x)}function u(M){const T=d();M.__bindingPointIndex=T;const E=n.createBuffer(),A=M.__size,x=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const T=r[M.id],E=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let x=0,b=E.length;x<b;x++){const P=E[x];if(Array.isArray(P))for(let L=0,O=P.length;L<O;L++)p(P[L],x,L,A);else p(P,x,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,T,E,A){if(g(M,T,E,A)===!0){const x=M.__offset,b=M.value;if(Array.isArray(b)){let P=0;for(let L=0;L<b.length;L++){const O=b[L],Z=h(O);m(O,M.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(b,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,M.__data)}}function m(M,T,E){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,E)}function g(M,T,E,A){const x=M.value,b=T+"_"+E;if(A[b]===void 0)return typeof x=="number"||typeof x=="boolean"?A[b]=x:ArrayBuffer.isView(x)?A[b]=x.slice():A[b]=x.clone(),!0;{const P=A[b];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return A[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function v(M){const T=M.uniforms;let E=0;const A=16;for(let b=0,P=T.length;b<P;b++){const L=Array.isArray(T[b])?T[b]:[T[b]];for(let O=0,Z=L.length;O<Z;O++){const te=L[O],k=Array.isArray(te.value)?te.value:[te.value];for(let $=0,Y=k.length;$<Y;$++){const U=k[$],H=h(U),J=E%A,ce=J%H.boundary,Se=J+ce;E+=ce,Se!==0&&A-Se<H.storage&&(E+=A-Se),te.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=E,E+=H.storage}}}const x=E%A;return x>0&&(E+=A-x),M.__size=E,M.__cache={},this}function h(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",M),T}function _(M){const T=M.target;T.removeEventListener("dispose",_);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function S(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:S}}const SP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mi=null;function MP(){return mi===null&&(mi=new Op(SP,16,16,ls,er),mi.name="DFG_LUT",mi.minFilter=Xt,mi.magFilter=Xt,mi.wrapS=Si,mi.wrapT=Si,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}class EP{constructor(e={}){const{canvas:t=PT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Nn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=p,v=new Set([Cp,Rp,bp]),h=new Set([Nn,Ri,Ca,Pa,Tp,wp]),_=new Uint32Array(4),S=new Int32Array(4),M=new I;let T=null,E=null;const A=[],x=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,O=null,Z=null,te=null,k=null;this._outputColorSpace=Qt;let $=0,Y=0,U=null,H=-1,J=null;const ce=new _t,Se=new _t;let qe=null;const rt=new je(0);let Ge=0,Q=t.width,se=t.height,pe=1,Ke=null,He=null;const Ie=new _t(0,0,Q,se),gt=new _t(0,0,Q,se);let z=!1;const Te=new Bp;let Pe=!1,ue=!1;const he=new Qe,we=new I,W=new _t,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function fe(){return U===null?pe:1}let C=i;function Oe(w,F){return t.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mp}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",zt,!1),C===null){const F="webgl2";if(C=Oe(F,w),C===null)throw Oe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw $e("WebGLRenderer: "+w.message),w}let Be,R,y,D,B,q,me,ye,ee,oe,Ae,ne,ae,le,Ee,ke,Re,N,_e,ie,de,Me,re;function be(){Be=new MR(C),Be.init(),de=new hP(C,Be),R=new pR(C,Be,e,de),y=new fP(C,Be),R.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),Z=C.createFramebuffer(),te=C.createFramebuffer(),k=C.createFramebuffer(),D=new wR(C),B=new ZC,q=new dP(C,Be,y,B,R,de,D),me=new SR(P),ye=new C1(C),Me=new dR(C,ye),ee=new ER(C,ye,D,Me),oe=new bR(C,ee,ye,Me,D),N=new AR(C,R,q),Ee=new mR(B),Ae=new jC(P,me,Be,R,Me,Ee),ne=new xP(P,B),ae=new QC,le=new sP(Be),Re=new fR(P,me,y,oe,m,l),ke=new uP(P,oe,R),re=new yP(C,D,R,y),_e=new hR(C,Be,D),ie=new TR(C,Be,D),D.programs=Ae.programs,P.capabilities=R,P.extensions=Be,P.properties=B,P.renderLists=ae,P.shadowMap=ke,P.state=y,P.info=D}be(),g!==Nn&&(b=new CR(g,t.width,t.height,a,r,s));const ve=new vP(P,C);this.xr=ve,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=Be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(w){w!==void 0&&(pe=w,this.setSize(Q,se,!1))},this.getSize=function(w){return w.set(Q,se)},this.setSize=function(w,F,K=!0){if(ve.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=w,se=F,t.width=Math.floor(w*pe),t.height=Math.floor(F*pe),K===!0&&(t.style.width=w+"px",t.style.height=F+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Q*pe,se*pe).floor()},this.setDrawingBufferSize=function(w,F,K){Q=w,se=F,pe=K,t.width=Math.floor(w*K),t.height=Math.floor(F*K),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(g===Nn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ce)},this.getViewport=function(w){return w.copy(Ie)},this.setViewport=function(w,F,K,G){w.isVector4?Ie.set(w.x,w.y,w.z,w.w):Ie.set(w,F,K,G),y.viewport(ce.copy(Ie).multiplyScalar(pe).round())},this.getScissor=function(w){return w.copy(gt)},this.setScissor=function(w,F,K,G){w.isVector4?gt.set(w.x,w.y,w.z,w.w):gt.set(w,F,K,G),y.scissor(Se.copy(gt).multiplyScalar(pe).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(w){y.setScissorTest(z=w)},this.setOpaqueSort=function(w){Ke=w},this.setTransparentSort=function(w){He=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,K=!0){let G=0;if(w){let X=!1;if(U!==null){const Ne=U.texture.format;X=v.has(Ne)}if(X){const Ne=U.texture.type,Ue=h.has(Ne),Le=Re.getClearColor(),ze=Re.getClearAlpha(),We=Le.r,Je=Le.g,nt=Le.b;Ue?(_[0]=We,_[1]=Je,_[2]=nt,_[3]=ze,C.clearBufferuiv(C.COLOR,0,_)):(S[0]=We,S[1]=Je,S[2]=nt,S[3]=ze,C.clearBufferiv(C.COLOR,0,S))}else G|=C.COLOR_BUFFER_BIT}F&&(G|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),O=w},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",zt,!1),Re.dispose(),ae.dispose(),le.dispose(),B.dispose(),me.dispose(),oe.dispose(),Me.dispose(),re.dispose(),Ae.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",nm),ve.removeEventListener("sessionend",im),zr.stop()};function ot(w){w.preventDefault(),kc("WebGLRenderer: Context Lost."),L=!0}function et(){kc("WebGLRenderer: Context Restored."),L=!1;const w=D.autoReset,F=ke.enabled,K=ke.autoUpdate,G=ke.needsUpdate,X=ke.type;be(),D.autoReset=w,ke.enabled=F,ke.autoUpdate=K,ke.needsUpdate=G,ke.type=X}function zt(w){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Vt(w){const F=w.target;F.removeEventListener("dispose",Vt),Br(F)}function Br(w){Cy(w),B.remove(w)}function Cy(w){const F=B.get(w).programs;F!==void 0&&(F.forEach(function(K){Ae.releaseProgram(K)}),w.isShaderMaterial&&Ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,K,G,X,Ne){F===null&&(F=V);const Ue=X.isMesh&&X.matrixWorld.determinantAffine()<0,Le=Ny(w,F,K,G,X);y.setMaterial(G,Ue);let ze=K.index,We=1;if(G.wireframe===!0){if(ze=ee.getWireframeAttribute(K),ze===void 0)return;We=2}const Je=K.drawRange,nt=K.attributes.position;let Xe=Je.start*We,vt=(Je.start+Je.count)*We;Ne!==null&&(Xe=Math.max(Xe,Ne.start*We),vt=Math.min(vt,(Ne.start+Ne.count)*We)),ze!==null?(Xe=Math.max(Xe,0),vt=Math.min(vt,ze.count)):nt!=null&&(Xe=Math.max(Xe,0),vt=Math.min(vt,nt.count));const Dt=vt-Xe;if(Dt<0||Dt===1/0)return;Me.setup(X,G,Le,K,ze);let Lt,xt=_e;if(ze!==null&&(Lt=ye.get(ze),xt=ie,xt.setIndex(Lt)),X.isMesh)G.wireframe===!0?(y.setLineWidth(G.wireframeLinewidth*fe()),xt.setMode(C.LINES)):xt.setMode(C.TRIANGLES);else if(X.isLine){let rn=G.linewidth;rn===void 0&&(rn=1),y.setLineWidth(rn*fe()),X.isLineSegments?xt.setMode(C.LINES):X.isLineLoop?xt.setMode(C.LINE_LOOP):xt.setMode(C.LINE_STRIP)}else X.isPoints?xt.setMode(C.POINTS):X.isSprite&&xt.setMode(C.TRIANGLES);if(X.isBatchedMesh)if(Be.get("WEBGL_multi_draw"))xt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const rn=X._multiDrawStarts,De=X._multiDrawCounts,Rn=X._multiDrawCount,ct=ze?ye.get(ze).bytesPerElement:1,Bn=B.get(G).currentProgram.getUniforms();for(let di=0;di<Rn;di++)Bn.setValue(C,"_gl_DrawID",di),xt.render(rn[di]/ct,De[di])}else if(X.isInstancedMesh)xt.renderInstances(Xe,Dt,X.count);else if(K.isInstancedBufferGeometry){const rn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,De=Math.min(K.instanceCount,rn);xt.renderInstances(Xe,Dt,De)}else xt.render(Xe,Dt)};function tm(w,F,K){w.transparent===!0&&w.side===yi&&w.forceSinglePass===!1?(w.side=An,w.needsUpdate=!0,Wa(w,F,K),w.side=Qi,w.needsUpdate=!0,Wa(w,F,K),w.side=yi):Wa(w,F,K)}this.compile=function(w,F,K=null){K===null&&(K=w),E=le.get(K),E.init(F),x.push(E),K.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),w!==K&&w.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights();const G=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ne=X.material;if(Ne)if(Array.isArray(Ne))for(let Ue=0;Ue<Ne.length;Ue++){const Le=Ne[Ue];tm(Le,K,X),G.add(Le)}else tm(Ne,K,X),G.add(Ne)}),E=x.pop(),G},this.compileAsync=function(w,F,K=null){const G=this.compile(w,F,K);return new Promise(X=>{function Ne(){if(G.forEach(function(Ue){B.get(Ue).currentProgram.isReady()&&G.delete(Ue)}),G.size===0){X(w);return}setTimeout(Ne,10)}Be.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let du=null;function Py(w){du&&du(w)}function nm(){zr.stop()}function im(){zr.start()}const zr=new vy;zr.setAnimationLoop(Py),typeof self<"u"&&zr.setContext(self),this.setAnimationLoop=function(w){du=w,ve.setAnimationLoop(w),w===null?zr.stop():zr.start()},ve.addEventListener("sessionstart",nm),ve.addEventListener("sessionend",im),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(w,F);const K=ve.enabled===!0&&ve.isPresenting===!0,G=b!==null&&(U===null||K)&&b.begin(P,U);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(F),F=ve.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,F,U),E=le.get(w,x.length),E.init(F),E.state.textureUnits=q.getTextureUnits(),x.push(E),he.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Te.setFromProjectionMatrix(he,Mi,F.reversedDepth),ue=this.localClippingEnabled,Pe=Ee.init(this.clippingPlanes,ue),T=ae.get(w,A.length),T.init(),A.push(T),ve.enabled===!0&&ve.isPresenting===!0){const Ue=P.xr.getDepthSensingMesh();Ue!==null&&hu(Ue,F,-1/0,P.sortObjects)}hu(w,F,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(Ke,He,F.reversedDepth),ge=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,ge&&Re.addToRenderList(T,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Pe===!0&&Ee.beginShadows();const X=E.state.shadowsArray;if(ke.render(X,w,F),Pe===!0&&Ee.endShadows(),(G&&b.hasRenderPass())===!1){const Ue=T.opaque,Le=T.transmissive;if(E.setupLights(),F.isArrayCamera){const ze=F.cameras;if(Le.length>0)for(let We=0,Je=ze.length;We<Je;We++){const nt=ze[We];sm(Ue,Le,w,nt)}ge&&Re.render(w);for(let We=0,Je=ze.length;We<Je;We++){const nt=ze[We];rm(T,w,nt,nt.viewport)}}else Le.length>0&&sm(Ue,Le,w,F),ge&&Re.render(w),rm(T,w,F)}U!==null&&Y===0&&(q.updateMultisampleRenderTarget(U),q.updateRenderTargetMipmap(U)),G&&b.end(P),w.isScene===!0&&w.onAfterRender(P,w,F),Me.resetDefaultState(),H=-1,J=null,x.pop(),x.length>0?(E=x[x.length-1],q.setTextureUnits(E.state.textureUnits),Pe===!0&&Ee.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,O!==null&&O.renderEnd()};function hu(w,F,K,G){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Te.intersectsSprite(w)){G&&W.setFromMatrixPosition(w.matrixWorld).applyMatrix4(he);const Ue=oe.update(w),Le=w.material;Le.visible&&T.push(w,Ue,Le,K,W.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Te.intersectsObject(w))){const Ue=oe.update(w),Le=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),W.copy(w.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),W.copy(Ue.boundingSphere.center)),W.applyMatrix4(w.matrixWorld).applyMatrix4(he)),Array.isArray(Le)){const ze=Ue.groups;for(let We=0,Je=ze.length;We<Je;We++){const nt=ze[We],Xe=Le[nt.materialIndex];Xe&&Xe.visible&&T.push(w,Ue,Xe,K,W.z,nt)}}else Le.visible&&T.push(w,Ue,Le,K,W.z,null)}}const Ne=w.children;for(let Ue=0,Le=Ne.length;Ue<Le;Ue++)hu(Ne[Ue],F,K,G)}function rm(w,F,K,G){const{opaque:X,transmissive:Ne,transparent:Ue}=w;E.setupLightsView(K),Pe===!0&&Ee.setGlobalState(P.clippingPlanes,K),G&&y.viewport(ce.copy(G)),X.length>0&&Ga(X,F,K),Ne.length>0&&Ga(Ne,F,K),Ue.length>0&&Ga(Ue,F,K),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function sm(w,F,K,G){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){const Xe=Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new Ai(1,1,{generateMipmaps:!0,type:Xe?er:Nn,minFilter:Wi,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const Ne=E.state.transmissionRenderTarget[G.id],Ue=G.viewport||ce;Ne.setSize(Ue.z*P.transmissionResolutionScale,Ue.w*P.transmissionResolutionScale);const Le=P.getRenderTarget(),ze=P.getActiveCubeFace(),We=P.getActiveMipmapLevel();P.setRenderTarget(Ne),P.getClearColor(rt),Ge=P.getClearAlpha(),Ge<1&&P.setClearColor(16777215,.5),P.clear(),ge&&Re.render(K);const Je=P.toneMapping;P.toneMapping=wi;const nt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),Pe===!0&&Ee.setGlobalState(P.clippingPlanes,G),Ga(w,K,G),q.updateMultisampleRenderTarget(Ne),q.updateRenderTargetMipmap(Ne),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let vt=0,Dt=F.length;vt<Dt;vt++){const Lt=F[vt],{object:xt,geometry:rn,material:De,group:Rn}=Lt;if(De.side===yi&&xt.layers.test(G.layers)){const ct=De.side;De.side=An,De.needsUpdate=!0,om(xt,K,G,rn,De,Rn),De.side=ct,De.needsUpdate=!0,Xe=!0}}Xe===!0&&(q.updateMultisampleRenderTarget(Ne),q.updateRenderTargetMipmap(Ne))}P.setRenderTarget(Le,ze,We),P.setClearColor(rt,Ge),nt!==void 0&&(G.viewport=nt),P.toneMapping=Je}function Ga(w,F,K){const G=F.isScene===!0?F.overrideMaterial:null;for(let X=0,Ne=w.length;X<Ne;X++){const Ue=w[X],{object:Le,geometry:ze,group:We}=Ue;let Je=Ue.material;Je.allowOverride===!0&&G!==null&&(Je=G),Le.layers.test(K.layers)&&om(Le,F,K,ze,Je,We)}}function om(w,F,K,G,X,Ne){w.onBeforeRender(P,F,K,G,X,Ne),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(P,F,K,G,w,Ne),X.transparent===!0&&X.side===yi&&X.forceSinglePass===!1?(X.side=An,X.needsUpdate=!0,P.renderBufferDirect(K,F,G,X,w,Ne),X.side=Qi,X.needsUpdate=!0,P.renderBufferDirect(K,F,G,X,w,Ne),X.side=yi):P.renderBufferDirect(K,F,G,X,w,Ne),w.onAfterRender(P,F,K,G,X,Ne)}function Wa(w,F,K){F.isScene!==!0&&(F=V);const G=B.get(w),X=E.state.lights,Ne=E.state.shadowsArray,Ue=X.state.version,Le=Ae.getParameters(w,X.state,Ne,F,K,E.state.lightProbeGridArray),ze=Ae.getProgramCacheKey(Le);let We=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;const Je=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=me.get(w.envMap||G.environment,Je),G.envMapRotation=G.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,We===void 0&&(w.addEventListener("dispose",Vt),We=new Map,G.programs=We);let nt=We.get(ze);if(nt!==void 0){if(G.currentProgram===nt&&G.lightsStateVersion===Ue)return lm(w,Le),nt}else Le.uniforms=Ae.getUniforms(w),O!==null&&w.isNodeMaterial&&O.build(w,K,Le),w.onBeforeCompile(Le,P),nt=Ae.acquireProgram(Le,ze),We.set(ze,nt),G.uniforms=Le.uniforms;const Xe=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=Ee.uniform),lm(w,Le),G.needsLights=Dy(w),G.lightsStateVersion=Ue,G.needsLights&&(Xe.ambientLightColor.value=X.state.ambient,Xe.lightProbe.value=X.state.probe,Xe.directionalLights.value=X.state.directional,Xe.directionalLightShadows.value=X.state.directionalShadow,Xe.spotLights.value=X.state.spot,Xe.spotLightShadows.value=X.state.spotShadow,Xe.rectAreaLights.value=X.state.rectArea,Xe.ltc_1.value=X.state.rectAreaLTC1,Xe.ltc_2.value=X.state.rectAreaLTC2,Xe.pointLights.value=X.state.point,Xe.pointLightShadows.value=X.state.pointShadow,Xe.hemisphereLights.value=X.state.hemi,Xe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xe.spotLightMatrix.value=X.state.spotLightMatrix,Xe.spotLightMap.value=X.state.spotLightMap,Xe.pointShadowMatrix.value=X.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=nt,G.uniformsList=null,nt}function am(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=cc.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function lm(w,F){const K=B.get(w);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function Ly(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let K=0,G=w.length;K<G;K++){const X=w[K];if(X.texture!==null&&X.boundingBox.containsPoint(M))return X}return null}function Ny(w,F,K,G,X){F.isScene!==!0&&(F=V),q.resetTextureUnits();const Ne=F.fog,Ue=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,Le=U===null?P.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:at.workingColorSpace,ze=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,We=me.get(G.envMap||Ue,ze),Je=G.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,nt=!!K.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Xe=!!K.morphAttributes.position,vt=!!K.morphAttributes.normal,Dt=!!K.morphAttributes.color;let Lt=wi;G.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Lt=P.toneMapping);const xt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,rn=xt!==void 0?xt.length:0,De=B.get(G),Rn=E.state.lights;if(Pe===!0&&(ue===!0||w!==J)){const Mt=w===J&&G.id===H;Ee.setState(G,w,Mt)}let ct=!1;G.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Rn.state.version||De.outputColorSpace!==Le||X.isBatchedMesh&&De.batching===!1||!X.isBatchedMesh&&De.batching===!0||X.isBatchedMesh&&De.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&De.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&De.instancing===!1||!X.isInstancedMesh&&De.instancing===!0||X.isSkinnedMesh&&De.skinning===!1||!X.isSkinnedMesh&&De.skinning===!0||X.isInstancedMesh&&De.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&De.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&De.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&De.instancingMorph===!1&&X.morphTexture!==null||De.envMap!==We||G.fog===!0&&De.fog!==Ne||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Ee.numPlanes||De.numIntersection!==Ee.numIntersection)||De.vertexAlphas!==Je||De.vertexTangents!==nt||De.morphTargets!==Xe||De.morphNormals!==vt||De.morphColors!==Dt||De.toneMapping!==Lt||De.morphTargetsCount!==rn||!!De.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,De.__version=G.version);let Bn=De.currentProgram;ct===!0&&(Bn=Wa(G,F,X),O&&G.isNodeMaterial&&O.onUpdateProgram(G,Bn,De));let di=!1,sr=!1,ds=!1;const yt=Bn.getUniforms(),Ut=De.uniforms;if(y.useProgram(Bn.program)&&(di=!0,sr=!0,ds=!0),G.id!==H&&(H=G.id,sr=!0),De.needsLights){const Mt=Ly(E.state.lightProbeGridArray,X);De.lightProbeGrid!==Mt&&(De.lightProbeGrid=Mt,sr=!0)}if(di||J!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),yt.setValue(C,"projectionMatrix",w.projectionMatrix),yt.setValue(C,"viewMatrix",w.matrixWorldInverse);const ar=yt.map.cameraPosition;ar!==void 0&&ar.setValue(C,we.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&yt.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&yt.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),J!==w&&(J=w,sr=!0,ds=!0)}if(De.needsLights&&(Rn.state.directionalShadowMap.length>0&&yt.setValue(C,"directionalShadowMap",Rn.state.directionalShadowMap,q),Rn.state.spotShadowMap.length>0&&yt.setValue(C,"spotShadowMap",Rn.state.spotShadowMap,q),Rn.state.pointShadowMap.length>0&&yt.setValue(C,"pointShadowMap",Rn.state.pointShadowMap,q)),X.isSkinnedMesh){yt.setOptional(C,X,"bindMatrix"),yt.setOptional(C,X,"bindMatrixInverse");const Mt=X.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),yt.setValue(C,"boneTexture",Mt.boneTexture,q))}X.isBatchedMesh&&(yt.setOptional(C,X,"batchingTexture"),yt.setValue(C,"batchingTexture",X._matricesTexture,q),yt.setOptional(C,X,"batchingIdTexture"),yt.setValue(C,"batchingIdTexture",X._indirectTexture,q),yt.setOptional(C,X,"batchingColorTexture"),X._colorsTexture!==null&&yt.setValue(C,"batchingColorTexture",X._colorsTexture,q));const or=K.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&N.update(X,K,Bn),(sr||De.receiveShadow!==X.receiveShadow)&&(De.receiveShadow=X.receiveShadow,yt.setValue(C,"receiveShadow",X.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(Ut.envMapIntensity.value=F.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=MP()),sr){if(yt.setValue(C,"toneMappingExposure",P.toneMappingExposure),De.needsLights&&Iy(Ut,ds),Ne&&G.fog===!0&&ne.refreshFogUniforms(Ut,Ne),ne.refreshMaterialUniforms(Ut,G,pe,se,E.state.transmissionRenderTarget[w.id]),De.needsLights&&De.lightProbeGrid){const Mt=De.lightProbeGrid;Ut.probesSH.value=Mt.texture,Ut.probesMin.value.copy(Mt.boundingBox.min),Ut.probesMax.value.copy(Mt.boundingBox.max),Ut.probesResolution.value.copy(Mt.resolution)}cc.upload(C,am(De),Ut,q)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(cc.upload(C,am(De),Ut,q),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&yt.setValue(C,"center",X.center),yt.setValue(C,"modelViewMatrix",X.modelViewMatrix),yt.setValue(C,"normalMatrix",X.normalMatrix),yt.setValue(C,"modelMatrix",X.matrixWorld),G.uniformsGroups!==void 0){const Mt=G.uniformsGroups;for(let ar=0,hs=Mt.length;ar<hs;ar++){const cm=Mt[ar];re.update(cm,Bn),re.bind(cm,Bn)}}return Bn}function Iy(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Dy(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,F,K){const G=B.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),B.get(w.texture).__webglTexture=F,B.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:K,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const K=B.get(w);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,K=0){U=w,$=F,Y=K;let G=null,X=!1,Ne=!1;if(w){const Le=B.get(w);if(Le.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(C.FRAMEBUFFER,Le.__webglFramebuffer),ce.copy(w.viewport),Se.copy(w.scissor),qe=w.scissorTest,y.viewport(ce),y.scissor(Se),y.setScissorTest(qe),H=-1;return}else if(Le.__webglFramebuffer===void 0)q.setupRenderTarget(w);else if(Le.__hasExternalTextures)q.rebindTextures(w,B.get(w.texture).__webglTexture,B.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Je=w.depthTexture;if(Le.__boundDepthTexture!==Je){if(Je!==null&&B.has(Je)&&(w.width!==Je.image.width||w.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(w)}}const ze=w.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ne=!0);const We=B.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[F])?G=We[F][K]:G=We[F],X=!0):w.samples>0&&q.useMultisampledRTT(w)===!1?G=B.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?G=We[K]:G=We,ce.copy(w.viewport),Se.copy(w.scissor),qe=w.scissorTest}else ce.copy(Ie).multiplyScalar(pe).floor(),Se.copy(gt).multiplyScalar(pe).floor(),qe=z;if(K!==0&&(G=Z),y.bindFramebuffer(C.FRAMEBUFFER,G)&&y.drawBuffers(w,G),y.viewport(ce),y.scissor(Se),y.setScissorTest(qe),X){const Le=B.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,Le.__webglTexture,K)}else if(Ne){const Le=F;for(let ze=0;ze<w.textures.length;ze++){const We=B.get(w.textures[ze]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ze,We.__webglTexture,K,Le)}}else if(w!==null&&K!==0){const Le=B.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Le.__webglTexture,K)}H=-1},this.readRenderTargetPixels=function(w,F,K,G,X,Ne,Ue,Le=0){if(!(w&&w.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=B.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){y.bindFramebuffer(C.FRAMEBUFFER,ze);try{const We=w.textures[Le],Je=We.format,nt=We.type;if(w.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Le),!R.textureFormatReadable(Je)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(nt)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-G&&K>=0&&K<=w.height-X&&C.readPixels(F,K,G,X,de.convert(Je),de.convert(nt),Ne)}finally{const We=U!==null?B.get(U).__webglFramebuffer:null;y.bindFramebuffer(C.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(w,F,K,G,X,Ne,Ue,Le=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=B.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze)if(F>=0&&F<=w.width-G&&K>=0&&K<=w.height-X){y.bindFramebuffer(C.FRAMEBUFFER,ze);const We=w.textures[Le],Je=We.format,nt=We.type;if(w.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Le),!R.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Xe),C.bufferData(C.PIXEL_PACK_BUFFER,Ne.byteLength,C.STREAM_READ),C.readPixels(F,K,G,X,de.convert(Je),de.convert(nt),0);const vt=U!==null?B.get(U).__webglFramebuffer:null;y.bindFramebuffer(C.FRAMEBUFFER,vt);const Dt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await LT(C,Dt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Xe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Ne),C.deleteBuffer(Xe),C.deleteSync(Dt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,K=0){const G=Math.pow(2,-K),X=Math.floor(w.image.width*G),Ne=Math.floor(w.image.height*G),Ue=F!==null?F.x:0,Le=F!==null?F.y:0;q.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,K,0,0,Ue,Le,X,Ne),y.unbindTexture()},this.copyTextureToTexture=function(w,F,K=null,G=null,X=0,Ne=0){let Ue,Le,ze,We,Je,nt,Xe,vt,Dt;const Lt=w.isCompressedTexture?w.mipmaps[Ne]:w.image;if(K!==null)Ue=K.max.x-K.min.x,Le=K.max.y-K.min.y,ze=K.isBox3?K.max.z-K.min.z:1,We=K.min.x,Je=K.min.y,nt=K.isBox3?K.min.z:0;else{const Ut=Math.pow(2,-X);Ue=Math.floor(Lt.width*Ut),Le=Math.floor(Lt.height*Ut),w.isDataArrayTexture?ze=Lt.depth:w.isData3DTexture?ze=Math.floor(Lt.depth*Ut):ze=1,We=0,Je=0,nt=0}G!==null?(Xe=G.x,vt=G.y,Dt=G.z):(Xe=0,vt=0,Dt=0);const xt=de.convert(F.format),rn=de.convert(F.type);let De;F.isData3DTexture?(q.setTexture3D(F,0),De=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(q.setTexture2DArray(F,0),De=C.TEXTURE_2D_ARRAY):(q.setTexture2D(F,0),De=C.TEXTURE_2D),y.activeTexture(C.TEXTURE0),y.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),y.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),y.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const Rn=y.getParameter(C.UNPACK_ROW_LENGTH),ct=y.getParameter(C.UNPACK_IMAGE_HEIGHT),Bn=y.getParameter(C.UNPACK_SKIP_PIXELS),di=y.getParameter(C.UNPACK_SKIP_ROWS),sr=y.getParameter(C.UNPACK_SKIP_IMAGES);y.pixelStorei(C.UNPACK_ROW_LENGTH,Lt.width),y.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Lt.height),y.pixelStorei(C.UNPACK_SKIP_PIXELS,We),y.pixelStorei(C.UNPACK_SKIP_ROWS,Je),y.pixelStorei(C.UNPACK_SKIP_IMAGES,nt);const ds=w.isDataArrayTexture||w.isData3DTexture,yt=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Ut=B.get(w),or=B.get(F),Mt=B.get(Ut.__renderTarget),ar=B.get(or.__renderTarget);y.bindFramebuffer(C.READ_FRAMEBUFFER,Mt.__webglFramebuffer),y.bindFramebuffer(C.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let hs=0;hs<ze;hs++)ds&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,B.get(w).__webglTexture,X,nt+hs),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,B.get(F).__webglTexture,Ne,Dt+hs)),C.blitFramebuffer(We,Je,Ue,Le,Xe,vt,Ue,Le,C.DEPTH_BUFFER_BIT,C.NEAREST);y.bindFramebuffer(C.READ_FRAMEBUFFER,null),y.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||B.has(w)){const Ut=B.get(w),or=B.get(F);y.bindFramebuffer(C.READ_FRAMEBUFFER,te),y.bindFramebuffer(C.DRAW_FRAMEBUFFER,k);for(let Mt=0;Mt<ze;Mt++)ds?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ut.__webglTexture,X,nt+Mt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ut.__webglTexture,X),yt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,or.__webglTexture,Ne,Dt+Mt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,or.__webglTexture,Ne),X!==0?C.blitFramebuffer(We,Je,Ue,Le,Xe,vt,Ue,Le,C.COLOR_BUFFER_BIT,C.NEAREST):yt?C.copyTexSubImage3D(De,Ne,Xe,vt,Dt+Mt,We,Je,Ue,Le):C.copyTexSubImage2D(De,Ne,Xe,vt,We,Je,Ue,Le);y.bindFramebuffer(C.READ_FRAMEBUFFER,null),y.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else yt?w.isDataTexture||w.isData3DTexture?C.texSubImage3D(De,Ne,Xe,vt,Dt,Ue,Le,ze,xt,rn,Lt.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(De,Ne,Xe,vt,Dt,Ue,Le,ze,xt,Lt.data):C.texSubImage3D(De,Ne,Xe,vt,Dt,Ue,Le,ze,xt,rn,Lt):w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Ne,Xe,vt,Ue,Le,xt,rn,Lt.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Ne,Xe,vt,Lt.width,Lt.height,xt,Lt.data):C.texSubImage2D(C.TEXTURE_2D,Ne,Xe,vt,Ue,Le,xt,rn,Lt);y.pixelStorei(C.UNPACK_ROW_LENGTH,Rn),y.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ct),y.pixelStorei(C.UNPACK_SKIP_PIXELS,Bn),y.pixelStorei(C.UNPACK_SKIP_ROWS,di),y.pixelStorei(C.UNPACK_SKIP_IMAGES,sr),Ne===0&&F.generateMipmaps&&C.generateMipmap(De),y.unbindTexture()},this.initRenderTarget=function(w){B.get(w).__webglFramebuffer===void 0&&q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?q.setTextureCube(w,0):w.isData3DTexture?q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?q.setTexture2DArray(w,0):q.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){$=0,Y=0,U=null,y.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}function fv(n,e){if(e===xT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===_h||e===ty){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===_h)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function TP(n){const e=new Map,t=new Map,i=n.clone();return wy(n,i,function(r,s){e.set(s,r),t.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function wy(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)wy(n.children[i],e.children[i],t)}class wP extends yo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new PP(t)}),this.register(function(t){return new LP(t)}),this.register(function(t){return new zP(t)}),this.register(function(t){return new VP(t)}),this.register(function(t){return new HP(t)}),this.register(function(t){return new IP(t)}),this.register(function(t){return new DP(t)}),this.register(function(t){return new UP(t)}),this.register(function(t){return new FP(t)}),this.register(function(t){return new CP(t)}),this.register(function(t){return new OP(t)}),this.register(function(t){return new NP(t)}),this.register(function(t){return new BP(t)}),this.register(function(t){return new kP(t)}),this.register(function(t){return new bP(t)}),this.register(function(t){return new dv(t,st.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new dv(t,st.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new GP(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=fa.extractUrlBase(e);o=fa.resolveURL(c,this.path)}else o=fa.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new my(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ay){try{o[st.KHR_BINARY_GLTF]=new WP(e)}catch(d){r&&r(d);return}s=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new iL(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(d){case st.KHR_MATERIALS_UNLIT:o[d]=new RP;break;case st.KHR_DRACO_MESH_COMPRESSION:o[d]=new XP(s,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[d]=new YP;break;case st.KHR_MESH_QUANTIZATION:o[d]=new KP;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function AP(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Ot(n,e,t){const i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class bP{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new je(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Fn);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new m1(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new h1(u),c.distance=d;break;case"spot":c=new f1(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),vi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class RP{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return oi}extendParams(e,t,i){const r=[];e.color=new je(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Fn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Qt))}return Promise.all(r)}}class CP{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class PP{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(s,s)}return Promise.all(r)}}class LP{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class NP{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}}class IP{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(t.sheenColor=new je(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Fn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Qt)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}}class DP{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}}class UP{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const s=i.attenuationColor||[1,1,1];return t.attenuationColor=new je().setRGB(s[0],s[1],s[2],Fn),Promise.all(r)}}class FP{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class OP{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const s=i.specularColorFactor||[1,1,1];return t.specularColor=new je().setRGB(s[0],s[1],s[2],Fn),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Qt)),Promise.all(r)}}class kP{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}}class BP{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}}class zP{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class VP{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class HP{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class dv{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(p),u,d,f,r.mode,r.filter),p})})}else return null}}class GP{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Hn.TRIANGLES&&c.mode!==Hn.TRIANGLE_STRIP&&c.mode!==Hn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const m of d){const g=new Qe,v=new I,h=new ir,_=new I(1,1,1),S=new xw(m.geometry,m.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&v.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,M),l.SCALE&&_.fromBufferAttribute(l.SCALE,M),S.setMatrixAt(M,g.compose(v,h,_));for(const M in l)if(M==="_COLOR_0"){const T=l[M];S.instanceColor=new Sh(T.array,T.itemSize,T.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,l[M]);Ct.prototype.copy.call(S,m),this.parser.assignFinalMaterial(S),p.push(S)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Ay="glTF",Go=12,hv={JSON:1313821514,BIN:5130562};class WP{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Go),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ay)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Go,s=new DataView(e,Go);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===hv.JSON){const c=new Uint8Array(e,Go+o,a);this.content=i.decode(c)}else if(l===hv.BIN){const c=Go+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class XP{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=Ah[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Ah[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],p=Qs[f.componentType];c[d]=p.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,f){r.decodeDracoFile(u,function(p){for(const m in p.attributes){const g=p.attributes[m],v=l[m];v!==void 0&&(g.normalized=v)}d(p)},a,c,Fn,f)})})}}class YP{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class KP{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class by extends vo{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,d=(i-t)/u,f=d*d,p=f*d,m=e*c,g=m-c,v=-2*p+3*f,h=p-f,_=1-v,S=h-f+d;for(let M=0;M!==a;M++){const T=o[g+M+a],E=o[g+M+l]*u,A=o[m+M+a],x=o[m+M]*u;s[M]=_*T+S*E+v*A+h*x}return s}}const qP=new ir;class $P extends by{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return qP.fromArray(s).normalize().toArray(s),s}}const Hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pv={9728:Wt,9729:Xt,9984:qx,9985:rc,9986:jo,9987:Wi},mv={33071:Si,33648:Dc,10497:co},Df={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ah={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jP={CUBICSPLINE:void 0,LINEAR:Na,STEP:La},Uf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ZP(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Xp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qi})),n.DefaultMaterial}function Xr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function vi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function JP(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(i){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(f)}if(r){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(f)}if(s){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],f=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function QP(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function eL(n){let e;const t=n.extensions&&n.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ff(t.attributes):e=n.indices+":"+Ff(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Ff(n.targets[i]);return e}function Ff(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function bh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function tL(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const nL=new Qe;class iL{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new AP,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new c1(this.options.manager):this.textureLoader=new g1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new my(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Xr(s,a,r),vi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(fa.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Df[r.type],a=Qs[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new _n(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Df[r.type],c=Qs[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,f=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let g,v;if(p&&p!==d){const h=Math.floor(f/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let S=t.cache.get(_);S||(g=new c(a,h*p,r.count*p/u),S=new dw(g,p/u),t.cache.add(_,S)),v=new Fp(S,l,f%p/u,m)}else a===null?g=new c(r.count*l):g=new c(a,f,r.count*l),v=new _n(g,l,m);if(r.sparse!==void 0){const h=Df.SCALAR,_=Qs[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,T=new _(o[1],S,r.sparse.count*h),E=new c(o[2],M,r.sparse.count*l);a!==null&&(v=new _n(v.array.slice(),v.itemSize,v.normalized)),v.normalized=!1;for(let A=0,x=T.length;A<x;A++){const b=T[A];if(v.setX(b,E[A*l]),l>=2&&v.setY(b,E[A*l+1]),l>=3&&v.setZ(b,E[A*l+2]),l>=4&&v.setW(b,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}v.normalized=m}return v})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=pv[f.magFilter]||Xt,u.minFilter=pv[f.minFilter]||Wi,u.wrapS=mv[f.wrapS]||co,u.wrapT=mv[f.wrapT]||co,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Wt&&u.minFilter!==Xt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let m=f;t.isImageBitmapLoader===!0&&(m=function(g){const v=new Zt(g);v.needsUpdate=!0,f(v)}),t.load(fa.resolveURL(d,s.path),m,void 0,p)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),vi(d,o),d.userData.mimeType=o.mimeType||tL(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new cy,bi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new zp,bi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Xp}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){const d=r[st.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new je(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Fn),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Qt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=yi);const u=s.alphaMode||Uf.OPAQUE;if(u===Uf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Uf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==oi&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ye(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==oi&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==oi){const d=s.emissiveFactor;a.emissive=new je().setRGB(d[0],d[1],d[2],Fn)}return s.emissiveTexture!==void 0&&o!==oi&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Qt)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),vi(d,s),t.associations.set(d,{materials:e}),s.extensions&&Xr(r,d,s),d})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return gv(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=eL(c),d=r[u];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=gv(new bn,c,t),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?ZP(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,m=u.length;p<m;p++){const g=u[p],v=o[p];let h;const _=c[p];if(v.mode===Hn.TRIANGLES||v.mode===Hn.TRIANGLE_STRIP||v.mode===Hn.TRIANGLE_FAN||v.mode===void 0)h=s.isSkinnedMesh===!0?new gw(g,_):new fn(g,_),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),v.mode===Hn.TRIANGLE_STRIP?h.geometry=fv(h.geometry,ty):v.mode===Hn.TRIANGLE_FAN&&(h.geometry=fv(h.geometry,_h));else if(v.mode===Hn.LINES)h=new Ew(g,_);else if(v.mode===Hn.LINE_STRIP)h=new Vp(g,_);else if(v.mode===Hn.LINE_LOOP)h=new Tw(g,_);else if(v.mode===Hn.POINTS)h=new ww(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(h.geometry.morphAttributes).length>0&&QP(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),vi(h,s),v.extensions&&Xr(r,h,v),t.assignFinalMaterial(h),d.push(h)}for(let p=0,m=d.length;p<m;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&Xr(r,d[0],s),d[0];const f=new Er;s.extensions&&Xr(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,m=d.length;p<m;p++)f.add(d[p]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new un(Ip.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new cu(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),vi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const f=new Qe;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new kp(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,f=r.channels.length;d<f;d++){const p=r.channels[d],m=r.samplers[p.sampler],g=p.target,v=g.node,h=r.parameters!==void 0?r.parameters[m.input]:m.input,_=r.parameters!==void 0?r.parameters[m.output]:m.output;g.node!==void 0&&(o.push(this.getDependency("node",v)),a.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",_)),c.push(m),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const f=d[0],p=d[1],m=d[2],g=d[3],v=d[4],h=[];for(let S=0,M=f.length;S<M;S++){const T=f[S],E=p[S],A=m[S],x=g[S],b=v[S];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const P=i._createAnimationTracks(T,E,A,x,b);if(P)for(let L=0;L<P.length;L++)h.push(P[L])}const _=new n1(s,void 0,h);return vi(_,r),_})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,nL)});for(let p=0,m=d.length;p<m;p++)u.add(d[p]);if(u.userData.pivot!==void 0&&d.length>0){const p=u.userData.pivot,m=d[0];u.pivot=new I().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new ly:c.length>1?u=new Er:c.length===1?u=c[0]:u=new Ct,u!==c[0])for(let d=0,f=c.length;d<f;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=o),vi(u,s),s.extensions&&Xr(i,u,s),s.matrix!==void 0){const d=new Qe;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const d=r.associations.get(u);r.associations.set(u,{...d})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Er;i.name&&(s.name=r.createUniqueName(i.name)),vi(s,i),i.extensions&&Xr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++){const f=l[u];f.parent!==null?s.add(TP(f)):s.add(f)}const c=u=>{const d=new Map;for(const[f,p]of r.associations)(f instanceof bi||f instanceof Zt)&&d.set(f,p);return u.traverse(f=>{const p=r.associations.get(f);p!=null&&d.set(f,p)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}mr[s.path]===mr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(mr[s.path]){case mr.weights:u=Ua;break;case mr.rotation:u=Fa;break;case mr.translation:case mr.scale:u=Hc;break;default:switch(i.itemSize){case 1:u=Ua;break;case 2:case 3:default:u=Hc;break}break}const d=r.interpolation!==void 0?jP[r.interpolation]:Na,f=this._getArrayFromAccessor(i);for(let p=0,m=l.length;p<m;p++){const g=new u(l[p]+"."+mr[s.path],t.array,f,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=bh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Fa?$P:by;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function rL(n,e,t){const i=e.attributes,r=new rr;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const u=bh(Qs[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],p=f.min,m=f.max;if(p!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),f.normalized){const g=bh(Qs[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Pi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function gv(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Ah[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return at.workingColorSpace!==Fn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),vi(n,e),rL(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?JP(n,e.targets,t):n})}const vv={otsuka:"大塚駅南口",higashi_ikebukuro:"東池袋駅4番出口",gokokuji:"護国寺駅1番出口",shin_otsuka_1:"新大塚 丸ノ内線1番出口",shin_otsuka_2:"新大塚 丸ノ内線2番出口",otsuka_ekimae:"大塚駅前",koubara_waseda:"向原 早稲田方面",koubara_micorowa:"向原 三ノ輪方面",hie_4chome_waseda:"東池袋四丁目 早稲田方面",hie_4chome_micorowa:"東池袋四丁目 三ノ輪方面"},_v=15686400,sL=16751949,oL=.3,aL=.5,lL=.5,cL=.55,Of=350,uL=.6,fL=50,dL=fL/Math.tan(Ip.degToRad(30)),kf=.16,xv=Ip.degToRad(30),Wo=3,yv=3,Gl=.45,Sv=.15;function Wl(n){return new I(n[0],n[2],-n[1])}function Mv(n,e){const t=new Vw,i=n.length;if(i<3){for(let a=0;a<i-1;a++)t.add(new Ls(n[a],n[a+1]));return t}const r=new I,s=new I;let o=n[0];for(let a=1;a<i-1;a++){const l=n[a];r.subVectors(l,n[a-1]),s.subVectors(n[a+1],l);const c=r.length(),u=s.length();if(c<1e-6||u<1e-6){t.add(new Ls(o,l)),o=l;continue}if(r.divideScalar(c),s.divideScalar(u),r.dot(s)>.985){t.add(new Ls(o,l)),o=l;continue}const d=Math.min(e,c*.5,u*.5),f=l.clone().addScaledVector(r,-d),p=l.clone().addScaledVector(s,d);t.add(new Ls(o,f)),t.add(new Gp(f,l,p)),o=p}return t.add(new Ls(o,n[i-1])),t}function hL(n){let e=0;for(let t=1;t<n.length;t++)e+=n[t-1].distanceTo(n[t]);return e}function pL({stationId:n="otsuka",viewpoint:e="walking",direction:t=1,speed:i=5,playing:r=!0,apiRef:s=null,onProgress:o=null,onCountdown:a=null,pipRef:l=null}){const c=St.useRef(null),u=St.useRef(null),d=St.useRef({stationId:n,viewpoint:e,direction:t,speed:i,playing:r});d.current={stationId:n,viewpoint:e,direction:t,speed:i,playing:r};const f=St.useRef({onProgress:o,onCountdown:a});return f.current={onProgress:o,onCountdown:a},St.useEffect(()=>{const p=c.current;if(!p)return;let m=!1,g=0;const v=new lw;v.fog=new Up(16777215,1800,4500);const h=new un(60,p.clientWidth/p.clientHeight,.1,5e3),_=new EP({alpha:!0,antialias:!0});_.setSize(p.clientWidth,p.clientHeight),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.setClearColor(0,0),p.appendChild(_.domElement);const S=new Er;S.rotation.x=-Math.PI/2,v.add(S);const M=document.createElement("div");M.textContent="地図を読み込んでいます…",M.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#8a8f98;font-size:14px;font-family:inherit;",p.appendChild(M);const T={t:0,lastTime:0};let E="countdown",A=Wo,x=0,b=1,P=-1,L=-1,O=0;const Z={current:null};let te=null;const k={};let $=[],Y=null,U=0,H=null,J=null,ce=null;const Se=[],qe=[new Vi,new Vi],rt=[],Ge={x:0,y:0,z:0};let Q=0;const se={yaw:0,pitch:0,zoom:1,panX:0,panY:0,panZ:0,fov:0},pe=Math.hypot(Of,uL*Of),Ke=Math.asin(Of/pe),He=new un(60,16/9,.1,5e3),Ie=new Set;let gt=null;const z=(ne,ae,le)=>Math.min(le,Math.max(ae,ne));function Te(){se.yaw=0,se.pitch=0,se.zoom=1,se.fov=0,se.panX=0,se.panY=0,se.panZ=0}function Pe(ne){if(!Y)return;const ae=Y.getPointAt(ne),le=Y.getTangentAt(ne);Ge.x=ae.x,Ge.y=ae.y,Ge.z=ae.z,Q=Math.atan2(le.x,le.z)}function ue(){const ne=d.current;if(!Z.current)return;H&&(v.remove(H),H.geometry.dispose(),H.material.dispose(),H=null),J&&(v.remove(J),J.geometry.dispose(),J.material.dispose(),J=null),ce&&(v.remove(ce),ce.geometry.dispose(),ce.material.dispose(),ce=null);const ae=vv[ne.stationId]||vv.otsuka,le=Z.current.routes.find(ve=>ve.station===ae);if(!le||le.points.length<2)return;let Ee=le.points;ne.direction===-1&&(Ee=[...Ee].reverse()),$=Ee.map(ve=>Wl(ve)),U=hL($),Y=Mv($,1);{const ve=Y.getPointAt(1),ot=ne.direction===1?te:k[ae],et=(ot?ot.x:ve.x)-ve.x,zt=(ot?ot.z:ve.z)-ve.z;if(Math.hypot(et,zt)>.01)O=Math.atan2(et,zt);else{const Vt=Y.getTangentAt(1);O=Math.atan2(Vt.x,Vt.z)}}const ke=Math.max(Math.round(U/.5),64),Re=new Vc(Y,ke,oL,8,!1),N=new oi({color:_v,transparent:!0,opacity:aL,depthWrite:!1});H=new fn(Re,N),H.renderOrder=10,v.add(H);const _e=$.map(ve=>new I(ve.x,ve.y-1.45,ve.z)),ie=Mv(_e,1),de=new Vc(ie,ke,.15,6,!1),Me=new oi({color:_v,transparent:!0,opacity:.55,depthWrite:!1});J=new fn(de,Me),J.renderOrder=9,v.add(J);const re=new Wp(1.5,16,12),be=new oi({color:sL});ce=new fn(re,be),v.add(ce),T.t=0,E="countdown",A=Wo,x=0,b=1,P=-1,L=-1,Pe(0),_.domElement.style.opacity=1,f.current.onProgress&&f.current.onProgress(0,Math.round(U))}function he(ne){if(!U||!Y)return;T.t=z(ne/U,0,1),x=0,b=1,_.domElement.style.opacity=1,T.t<=.001?(E="countdown",A=Wo):T.t>=.999?(E="arrive",A=yv):E="walking",Pe(T.t);const ae=Math.round(T.t*U);P=ae,f.current.onProgress&&f.current.onProgress(ae,Math.round(U));const le=E==="countdown"?Wo:null;L=le,f.current.onCountdown&&f.current.onCountdown(le)}function we(ne){const ae=ne*.8;(Ie.has("a")||Ie.has("arrowleft"))&&(se.yaw+=ae),(Ie.has("d")||Ie.has("arrowright"))&&(se.yaw-=ae);const le=ne*.6;(Ie.has("w")||Ie.has("arrowup"))&&(se.pitch+=le),(Ie.has("s")||Ie.has("arrowdown"))&&(se.pitch-=le);const Ee=d.current.viewpoint==="aerial"?80:20;Ie.has("q")&&(se.panY+=Ee*ne),Ie.has("e")&&(se.panY-=Ee*ne),se.pitch=z(se.pitch,-1.2,1.2)}async function W(){const ne="./map/",ae=new wP,[le,Ee]=await Promise.all([fetch(ne+"manifest.json"),fetch(ne+"routes.json")]),ke=await le.json();if(Z.current=await Ee.json(),m)return;te=Wl(ke.cresome.position);for(const N of ke.stations||[])k[N.name]=Wl(N.position);if(await Promise.all(ke.layers.map(N=>new Promise(_e=>{ae.load(ne+N.file,ie=>{if(m){_e();return}ie.scene.traverse(de=>{var be;const Me=!!((be=de.geometry)!=null&&be.attributes.color);if(de.isMesh){const ve=de.material,ot=N.id==="terrain",et=N.id==="lines";de.material=new oi({vertexColors:Me,polygonOffset:!0,polygonOffsetFactor:ot?1:.5,polygonOffsetUnits:ot?1:.5,transparent:et,opacity:et?lL:1}),ve.dispose()}else if(de.isLine){const ve=de.material;de.material=new zp({vertexColors:Me,transparent:!0,opacity:cL,depthWrite:!1}),ve.dispose()}else return;de.userData.pipBaseMat=de.material;const re=de.material.clone();de.isMesh?(re.transparent=!1,re.opacity=1,re.onBeforeCompile=ve=>{ve.fragmentShader=ve.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
	// PiP 俯瞰・視界外減光: 背景地図色 × ${kf}（白へ混合）
	diffuseColor.rgb = mix( vec3( 1.0 ), diffuseColor.rgb, ${kf} );`)}):(re.transparent=!0,re.opacity=kf),de.userData.pipFadedMat=re,Se.push(de),N.id==="lines"&&rt.push(de)}),S.add(ie.scene),_e()},void 0,ie=>{console.warn(`マップレイヤー読込失敗 (${N.id}):`,ie),_e()})}))),m)return;M.remove();const Re=Wl(ke.cresome.position);Ge.x=Re.x,Ge.y=Re.y,Ge.z=Re.z,h.position.set(Re.x+260,Re.y+210,Re.z+300),h.lookAt(Re),ue()}function V(ne){g=requestAnimationFrame(V);const ae=d.current,le=T.lastTime?(ne-T.lastTime)/1e3:0;T.lastTime=ne;let Ee=null;if(Y){if(ae.playing&&U>0)switch(E){case"countdown":A-=le,A<=0&&(E="walking");break;case"walking":T.t+=ae.speed*le/U,T.t>=1&&(T.t=1,E="arrive",A=yv);break;case"arrive":A-=le,x=Math.min(1,x+le*2.5),A<=0&&(E="fadeOut",A=Gl);break;case"fadeOut":A-=le,b=Math.max(0,A/Gl),A<=0&&(T.t=0,Pe(0),x=0,E="fadeIn",A=Gl);break;case"fadeIn":A-=le,b=Math.min(1,1-A/Gl),A<=0&&(b=1,E="countdown",A=Wo);break}U>0&&(_.domElement.style.opacity=b);const Re=Y.getPointAt(T.t);Ee=Re;const N=Y.getTangentAt(T.t);ce&&ce.position.copy(Re),H&&(H.visible=!1),J&&(J.visible=!1),ce&&(ce.visible=!1),we(le);const _e=le>0?1-Math.exp(-5*le):1;Ge.x+=(Re.x-Ge.x)*_e,Ge.y+=(Re.y-Ge.y)*_e,Ge.z+=(Re.z-Ge.z)*_e;let de=(E==="arrive"?O:Math.atan2(N.x,N.z))-Q;if(de=Math.atan2(Math.sin(de),Math.cos(de)),Q+=de*_e,gt!==null&&gt!==ae.viewpoint&&Pe(T.t),gt=ae.viewpoint,ae.viewpoint==="walking"){const Me=Q+se.yaw,re=z(se.pitch-.04+Sv*x,-1.2,1.2),be=Math.cos(re)*Math.sin(Me),ve=Math.sin(re),ot=Math.cos(re)*Math.cos(Me),et=50*(se.zoom-1),zt=Ge.x+se.panX+be*et,Vt=Ge.y+se.panY+ve*et,Br=Ge.z+se.panZ+ot*et;h.position.set(zt,Vt,Br),h.lookAt(zt+be*50,Vt+ve*50,Br+ot*50)}else{const Me=Ke+se.pitch,re=pe*se.zoom,be=se.yaw,ve=Math.cos(Me)*Math.sin(be)*re,ot=Math.sin(Me)*re,et=Math.cos(Me)*Math.cos(be)*re,zt=Ge.x+se.panX,Vt=Ge.y+se.panY,Br=Ge.z+se.panZ;h.position.set(zt+ve,Vt+ot,Br+et),h.lookAt(zt,Vt,Br)}}ae.viewpoint==="aerial"&&(J&&(J.visible=!0),ce&&(ce.visible=!0));for(const Re of rt)Re.visible=ae.viewpoint==="aerial";if(U>0){const Re=Math.round(T.t*U);Re!==P&&(P=Re,f.current.onProgress&&f.current.onProgress(Re,Math.round(U)));const N=E==="countdown"?Math.max(1,Math.ceil(A)):null;N!==L&&(L=N,f.current.onCountdown&&f.current.onCountdown(N))}_.setViewport(0,0,_.domElement.clientWidth,_.domElement.clientHeight),_.setScissorTest(!1),_.render(v,h),J&&(J.visible=!1),ce&&(ce.visible=!1);const ke=l?l.current:null;if(ke&&Ee){const Re=ke.getBoundingClientRect();if(Re.width>4&&Re.height>4){const N=Math.round(Re.left),_e=Math.round(_.domElement.clientHeight-Re.bottom),ie=Math.round(Re.width),de=Math.round(Re.height),Me=ae.viewpoint==="walking";if(Me)He.up.set(0,0,-1),He.position.set(Ee.x,Ee.y+dL,Ee.z),He.lookAt(Ee.x,Ee.y,Ee.z);else{const re=Q,be=-.04+Sv*x,ve=Math.cos(be)*Math.sin(re),ot=Math.sin(be),et=Math.cos(be)*Math.cos(re);He.up.set(0,1,0),He.position.set(Ee.x,Ee.y,Ee.z),He.lookAt(Ee.x+ve*50,Ee.y+ot*50,Ee.z+et*50)}He.aspect=ie/de,He.updateProjectionMatrix(),_.setViewport(N,_e,ie,de),_.setScissor(N,_e,ie,de),_.setScissorTest(!0);for(const re of rt)re.visible=Me;if(Me){for(const ve of Se)ve.material=ve.userData.pipFadedMat;_.render(v,He),S.visible=!1,H&&(H.visible=!0,H.material.depthWrite=!0),_.autoClear=!1,_.render(v,He),H&&(H.material.depthWrite=!1),S.visible=!0;for(const ve of Se)ve.material=ve.userData.pipBaseMat;const re=Q-xv;qe[0].normal.set(Math.cos(re),0,-Math.sin(re)),qe[0].constant=-(qe[0].normal.x*Ee.x+qe[0].normal.z*Ee.z);const be=Q+xv;qe[1].normal.set(-Math.cos(be),0,Math.sin(be)),qe[1].constant=-(qe[1].normal.x*Ee.x+qe[1].normal.z*Ee.z),_.autoClear=!1,_.clippingPlanes=qe,_.render(v,He),_.clippingPlanes=[],_.autoClear=!0}else _.render(v,He);Me&&H&&(H.visible=!1),_.setScissorTest(!1)}}}function ge(){const ne=p.clientWidth,ae=p.clientHeight;h.aspect=ne/ae,h.updateProjectionMatrix(),_.setSize(ne,ae)}window.addEventListener("resize",ge);function fe(ne){if(ne===document.body)return!0;if(!(ne instanceof Element)||ne.closest("button, a, input, select, textarea, [data-nav], .sidebar, .topbar, .drawer, .scrim, .map-controls, .bg-switcher"))return!1;const ae=typeof ne.className=="string"?ne.className:"";return/\b(main|page-wrap|page|map-bg|map-pip|map-bottom)\b/.test(ae)}let C=null,Oe=0,Be=0;function R(ne){fe(ne.target)&&(ne.button!==0&&ne.button!==2||(C=ne.button===2||ne.shiftKey?"pan":"rotate",Oe=ne.clientX,Be=ne.clientY,ne.preventDefault()))}function y(ne){if(!C)return;const ae=ne.clientX-Oe,le=ne.clientY-Be;if(Oe=ne.clientX,Be=ne.clientY,C==="rotate")se.yaw-=ae*.005,se.pitch=z(se.pitch-le*.005,-1.2,1.2);else{const Ee=d.current,ke=Ee.viewpoint==="walking"?Q+se.yaw:se.yaw,Re=(Ee.viewpoint==="aerial"?pe*se.zoom:50)*.002;se.panX+=Math.cos(ke)*ae*Re,se.panZ+=-Math.sin(ke)*ae*Re,se.panY+=le*Re}}function D(){C=null}function B(ne){fe(ne.target)&&(ne.preventDefault(),d.current.viewpoint==="aerial"?se.zoom=z(se.zoom*(1-ne.deltaY*.001),.3,4):se.zoom=z(se.zoom-ne.deltaY*.001,.2,2.5))}function q(ne){const ae=document.activeElement;if(ae&&/^(INPUT|TEXTAREA|SELECT)$/.test(ae.tagName))return;const le=ne.key.toLowerCase();if(le==="r"){Te();return}["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(le)&&(ne.preventDefault(),Ie.add(le))}function me(ne){Ie.delete(ne.key.toLowerCase())}function ye(ne){(C==="pan"||fe(ne.target))&&ne.preventDefault()}function ee(){Ie.clear()}window.addEventListener("pointerdown",R),window.addEventListener("pointermove",y),window.addEventListener("pointerup",D),window.addEventListener("pointercancel",D),window.addEventListener("wheel",B,{passive:!1}),window.addEventListener("keydown",q),window.addEventListener("keyup",me),window.addEventListener("contextmenu",ye),window.addEventListener("blur",ee);let oe=!0;function Ae(){document.hidden?(cancelAnimationFrame(g),oe=!1):oe||(oe=!0,T.lastTime=0,g=requestAnimationFrame(V))}return document.addEventListener("visibilitychange",Ae),W().catch(ne=>{console.warn("マップ背景の初期化失敗:",ne),M.parentNode&&M.remove()}),g=requestAnimationFrame(V),u.current={scene:v,camera:h,renderer:_,container:p,updateRoute:ue},s&&(s.current={seekTo:he}),()=>{m=!0,cancelAnimationFrame(g),window.removeEventListener("resize",ge),window.removeEventListener("pointerdown",R),window.removeEventListener("pointermove",y),window.removeEventListener("pointerup",D),window.removeEventListener("pointercancel",D),window.removeEventListener("wheel",B),window.removeEventListener("keydown",q),window.removeEventListener("keyup",me),window.removeEventListener("contextmenu",ye),window.removeEventListener("blur",ee),document.removeEventListener("visibilitychange",Ae),H&&(H.geometry.dispose(),H.material.dispose()),J&&(J.geometry.dispose(),J.material.dispose()),ce&&(ce.geometry.dispose(),ce.material.dispose()),S.traverse(ne=>{if(!ne.isMesh&&!ne.isLine)return;ne.geometry&&ne.geometry.dispose();const ae=ne.material;Array.isArray(ae)?ae.forEach(Ee=>Ee.dispose()):ae&&ae.dispose();const le=ne.userData.pipBaseMat;le&&le!==ae&&le.dispose(),ne.userData.pipFadedMat&&ne.userData.pipFadedMat.dispose()}),_.dispose(),_.domElement.parentNode&&_.domElement.parentNode.removeChild(_.domElement),M.parentNode&&M.remove(),u.current=null}},[]),St.useEffect(()=>{var p;(p=u.current)!=null&&p.updateRoute&&u.current.updateRoute()},[n,t]),j.jsx("div",{ref:c,className:"map-bg","aria-hidden":"true"})}const Ry=[{line:"JR山手線",stations:[{name:"大塚駅",exits:[{id:"otsuka",label:"南口"}]}]},{line:"有楽町線",stations:[{name:"東池袋駅",exits:[{id:"higashi_ikebukuro",label:"4番出口"}]},{name:"護国寺",exits:[{id:"gokokuji",label:"1番出口"}]}]},{line:"丸ノ内線",stations:[{name:"新大塚",exits:[{id:"shin_otsuka_1",label:"1番出口"},{id:"shin_otsuka_2",label:"2番出口"}]}]},{line:"都電荒川線",stations:[{name:"大塚駅前",id:"otsuka_ekimae"},{name:"向原",exits:[{id:"koubara_waseda",label:"早稲田方面"},{id:"koubara_micorowa",label:"三ノ輪方面"}]},{name:"東池袋四丁目",exits:[{id:"hie_4chome_waseda",label:"早稲田方面"},{id:"hie_4chome_micorowa",label:"三ノ輪方面"}]}]}],mL=Ry.flatMap(n=>n.stations.flatMap(e=>e.exits?e.exits.map(t=>t.id):[e.id]));function gL({stationId:n,onStationChange:e,viewpoint:t,onViewpointChange:i,direction:r,onDirectionChange:s,speed:o,onSpeedUp:a,onSpeedDown:l,playing:c,onPlay:u,onPause:d,onStop:f,progressM:p=0,routeLenM:m=0,onScrub:g}){return j.jsxs("div",{className:"map-controls",children:[j.jsxs("div",{className:"map-controls-group",children:[j.jsx("span",{className:"map-controls-sublabel",children:"始点"}),Ry.map(v=>j.jsxs("div",{className:"map-controls-station-group",children:[j.jsx("span",{className:"map-controls-station-group-label",children:v.line}),j.jsx("div",{className:"map-controls-station-items",children:v.stations.map(h=>h.exits?j.jsxs("div",{className:"map-controls-station-subgroup",children:[j.jsx("span",{className:"map-controls-station-name",children:h.name}),h.exits.map(_=>j.jsx("button",{type:"button",className:"map-controls-btn"+(n===_.id?" active":""),onClick:()=>e(_.id),children:_.label},_.id))]},h.name):j.jsx("button",{type:"button",className:"map-controls-btn"+(n===h.id?" active":""),onClick:()=>e(h.id),children:h.name},h.id))})]},v.line))]}),j.jsxs("div",{className:"map-controls-group",children:[j.jsx("span",{className:"map-controls-sublabel",children:"視点"}),j.jsxs("div",{className:"map-controls-toggle",children:[j.jsx("button",{type:"button",className:"map-controls-btn"+(t==="walking"?" active":""),onClick:()=>i("walking"),children:"歩行"}),j.jsx("button",{type:"button",className:"map-controls-btn"+(t==="aerial"?" active":""),onClick:()=>i("aerial"),children:"俯瞰"})]})]}),j.jsxs("div",{className:"map-controls-group",children:[j.jsx("span",{className:"map-controls-sublabel",children:"向き"}),j.jsxs("div",{className:"map-controls-toggle",children:[j.jsx("button",{type:"button",className:"map-controls-btn"+(r===1?" active":""),onClick:()=>s(1),children:"駅 → 社"}),j.jsx("button",{type:"button",className:"map-controls-btn"+(r===-1?" active":""),onClick:()=>s(-1),children:"社 → 駅"})]})]}),j.jsxs("div",{className:"map-controls-group map-controls-hint",children:[j.jsx("span",{className:"map-controls-sublabel",children:"カメラ操作"}),j.jsx("span",{className:"map-controls-hint-text",children:"ドラッグ: 視点回転 / ホイール: ズーム / 右ドラッグ: パン / WASD・矢印: 回転 / Q・E: 上下 / R: リセット"})]}),j.jsxs("div",{className:"map-controls-group map-controls-group-row",children:[j.jsx("span",{className:"map-controls-sublabel",children:"再生"}),j.jsxs("div",{className:"map-controls-player",children:[j.jsx("button",{type:"button",className:"map-controls-player-btn",title:"再生","aria-label":"再生",onClick:u,children:j.jsx("span",{className:"map-controls-icon map-controls-icon-play"})}),j.jsx("button",{type:"button",className:"map-controls-player-btn",title:"停止（先頭へ戻る）","aria-label":"停止（先頭へ戻る）",onClick:f,children:j.jsx("span",{className:"map-controls-icon map-controls-icon-stop"})}),j.jsx("button",{type:"button",className:"map-controls-player-btn",title:"一時停止","aria-label":"一時停止",onClick:d,children:j.jsx("span",{className:"map-controls-icon map-controls-icon-pause"})}),j.jsx("button",{type:"button",className:"map-controls-player-btn",title:"早戻し（速度 -2 m/s）","aria-label":"早戻し（速度を下げる）",onClick:l,children:j.jsx("span",{className:"map-controls-icon map-controls-icon-rw"})}),j.jsxs("span",{className:"map-controls-speed",children:[o.toFixed(1)," m/s"]}),j.jsx("input",{type:"range",className:"map-controls-slider map-controls-slider-progress",min:0,max:Math.max(m,1),step:1,value:Math.min(p,m||0),disabled:m<=0,onChange:v=>g(parseInt(v.target.value,10)),"aria-label":"移動量（メートル）"}),j.jsx("span",{className:"map-controls-progress-label",children:m>0?`${p} / ${m} m`:"--"}),j.jsx("button",{type:"button",className:"map-controls-player-btn",title:"早送り（速度 +2 m/s）","aria-label":"早送り（速度を上げる）",onClick:a,children:j.jsx("span",{className:"map-controls-icon map-controls-icon-ff"})})]})]})]})}function vL(){return j.jsxs(j.Fragment,{children:[j.jsxs("h1",{className:"hero-title",children:[j.jsx("span",{className:"accent",children:"こうしてほしい"}),"をいっしょにカタチに。"]}),j.jsxs("div",{className:"lead-group reveal",children:[j.jsx("p",{className:"lead",children:"UI/UXデザインからAI/LLM連携開発まで、アイデアを製品へとつなげることをお手伝いします。"}),j.jsx("p",{className:"lead",children:"お持ちの想いを、一緒にカタチにしていきましょう。"})]}),j.jsx("div",{className:"reveal",style:{marginTop:"60px"},children:j.jsxs("div",{className:"feature-grid",children:[j.jsx("div",{className:"feature",children:"UI/UXデザイン"}),j.jsx("div",{className:"feature",children:"技術コンサルティング"}),j.jsx("div",{className:"feature",children:"Webアプリ受託開発"}),j.jsx("div",{className:"feature",children:"AI/LLM連携開発"})]})})]})}const _L=[{title:"UI/UXデザイン",text:"直感的で美しい、ユーザーに愛される体験をデザインします。使いやすさと見た目の両立を大切にしています。"},{title:"技術コンサルティング",text:"目的に合った最適な技術選定とアーキテクチャを、分かりやすくご提案します。"},{title:"Webアプリ受託開発",text:"要件定義からリリースまで、高品質なWebアプリを丁寧なプロセスで開発します。"},{title:"AI/LLM連携開発",text:"LLMなどのAIを業務に組み込み、生産性を高める体験を実現します。"}];function xL(){return j.jsxs(j.Fragment,{children:[j.jsx("h2",{className:"section-title",children:"できること"}),j.jsx("p",{className:"lead reveal",children:"デザイン・開発・AI、さまざまな領域で、製品づくりを最初から最後まで一貫して支えます。"}),j.jsx("div",{className:"cards-grid",style:{marginTop:"46px",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px"},children:_L.map(n=>j.jsxs("div",{className:"card reveal",children:[j.jsx("h3",{children:n.title}),j.jsx("p",{children:n.text})]},n.title))})]})}const yL=[{num:"01",title:"ヒアリング",text:"現在の課題とゴールを丁寧に伺い、一緒にプロジェクトの方向性を考えます。"},{num:"02",title:"提案・設計",text:"最適なソリューションの提案と、UI/UX設計・技術設計を行います。"},{num:"03",title:"開発",text:"段階的に開発を積み上げながら、進捗を共有し続けていきます。"},{num:"04",title:"リリース・運用",text:"無事にリリースした後、運用フェーズでも安心して任せられる体制でサポートします。"}];function SL(){return j.jsxs(j.Fragment,{children:[j.jsx("h2",{className:"section-title",children:"開発フロー"}),j.jsx("p",{className:"lead reveal",children:"透明感のあるプロセスで、一緒に最適な形を育てていきます。"}),j.jsx("div",{style:{marginTop:"50px",maxWidth:"680px"},children:yL.map(n=>j.jsxs("div",{className:"flow-step reveal",children:[j.jsx("div",{className:"flow-num",children:n.num}),j.jsx("h3",{children:n.title}),j.jsx("p",{children:n.text})]},n.num))})]})}const ML=[{label:"会社名",value:"クリサム株式会社（Cresome Technical Works）"},{label:"所在地",value:"〒112-0012 東京都文京区大塚6丁目22番2号"},{label:"代表取締役",value:"栗原 智明"},{label:"電話番号",value:"03-6336-8542"},{label:"メール",value:"tomoaki.kurihara@cresome.tech",mail:!0},{label:"設立",value:"2023年4月"}];function EL(){return j.jsxs(j.Fragment,{children:[j.jsx("h2",{className:"section-title",children:"会社概要"}),j.jsxs("div",{className:"lead-group reveal",children:[j.jsx("p",{className:"lead",children:"お気軽にご連絡ください。"}),j.jsx("p",{className:"lead",children:"小さなご相談でも、お気軽にどうぞ。"})]}),j.jsx("div",{className:"reveal",style:{marginTop:"46px",maxWidth:"560px"},children:j.jsx("div",{className:"card",style:{padding:"14px 30px"},children:ML.map(n=>j.jsxs("div",{className:"info-row",children:[j.jsx("div",{className:"info-label",children:n.label}),j.jsx("div",{className:"info-value",children:n.mail?j.jsx("a",{href:"mailto:"+n.value,children:n.value}):n.value})]},n.label))})})]})}const Ev=[{id:"home",label:"トップ",Component:vL},{id:"business",label:"事業内容",Component:xL},{id:"flow",label:"開発フロー",Component:SL},{id:"company",label:"会社概要",Component:EL}],Tv="cresome.mapConfig",Bf={stationId:"otsuka",viewpoint:"walking",direction:1,speed:5,playing:!0};function TL(){const[n,e]=St.useState("home"),[t,i]=St.useState(!1),[r,s]=St.useState(!1),[o,a]=St.useState(!1),[l,c]=St.useState(()=>window.localStorage.getItem("cresome.bgMode")||"wave"),[u,d]=St.useState(()=>{try{const E=window.localStorage.getItem(Tv),A=E?JSON.parse(E):{};return{...Bf,...A,stationId:mL.includes(A.stationId)?A.stationId:Bf.stationId}}catch{return Bf}}),f=St.useRef(!1);St.useEffect(()=>{window.localStorage.setItem("cresome.bgMode",l)},[l]),St.useEffect(()=>{window.localStorage.setItem(Tv,JSON.stringify(u))},[u]),St.useEffect(()=>{const E=document.querySelectorAll(".reveal:not(.in)"),A=new IntersectionObserver(x=>{x.forEach(b=>{b.isIntersecting&&(b.target.classList.add("in"),A.unobserve(b.target))})},{threshold:.12});return E.forEach((x,b)=>{x.style.transitionDelay=b%5*70+"ms",A.observe(x)}),()=>A.disconnect()},[]);const p=E=>{E===n||f.current||(f.current=!0,a(!1),i(!0),setTimeout(()=>{e(E),i(!1),s(!0),setTimeout(()=>{s(!1),f.current=!1},560)},340))},m=Ev.map(E=>({id:E.id,label:E.label,active:E.id===n})),g=E=>{d(A=>({...A,...E}))},v=St.useRef(null),[h,_]=St.useState({m:0,len:0}),[S,M]=St.useState(null),T=St.useRef(null);return j.jsxs(j.Fragment,{children:[l==="wave"?j.jsx(vE,{}):l==="spacewars"?j.jsx(KE,{}):j.jsx(pL,{stationId:u.stationId,viewpoint:u.viewpoint,direction:u.direction,speed:u.speed,playing:u.playing,apiRef:v,onProgress:(E,A)=>_({m:E,len:A}),onCountdown:E=>M(E),pipRef:T}),j.jsx(cE,{items:m,onSelect:p,bgMode:l,onBgModeChange:c}),j.jsx(uE,{onMenu:()=>a(!0)}),j.jsx(fE,{items:m,open:o,onClose:()=>a(!1),onSelect:p,bgMode:l,onBgModeChange:c}),j.jsxs("main",{className:"main",children:[l==="map"&&u&&j.jsxs(j.Fragment,{children:[u.viewpoint==="walking"&&S!=null&&j.jsx("div",{className:"map-countdown","aria-hidden":"true",children:S},S),j.jsxs("div",{className:"map-bottom",children:[j.jsx(gL,{stationId:u.stationId,onStationChange:E=>g({stationId:E}),viewpoint:u.viewpoint,onViewpointChange:E=>g({viewpoint:E}),direction:u.direction,onDirectionChange:E=>g({direction:E}),speed:u.speed,onSpeedUp:()=>g({speed:Math.min(14,u.speed+2)}),onSpeedDown:()=>g({speed:Math.max(1.4,u.speed-2)}),playing:u.playing,onPlay:()=>g({playing:!0}),onPause:()=>g({playing:!1}),onStop:()=>{v.current&&v.current.seekTo(0),g({playing:!1})},progressM:h.m,routeLenM:h.len,onScrub:E=>{var A;return(A=v.current)==null?void 0:A.seekTo(E)}}),j.jsxs("div",{className:"map-pip",ref:T,children:[j.jsx("span",{className:"map-pip-label",children:u.viewpoint==="aerial"?"歩行":"俯瞰"}),u.viewpoint==="aerial"&&S!=null&&j.jsx("span",{className:"map-pip-countdown","aria-hidden":"true",children:S},S)]})]})]}),j.jsx("div",{className:"page-wrap",children:Ev.map(({id:E,Component:A})=>j.jsx("section",{id:"page-"+E,className:"page"+(E===n?" active":"")+(E===n&&t?" leave":"")+(E===n&&r?" enter":""),children:j.jsx(A,{})},E))})]})]})}zf.createRoot(document.getElementById("root")).render(j.jsx(Zy.StrictMode,{children:j.jsx(TL,{})}));
