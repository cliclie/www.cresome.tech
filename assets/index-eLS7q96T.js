(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Ly(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var yv={exports:{}},zc={},Sv={exports:{}},st={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),Ny=Symbol.for("react.portal"),Iy=Symbol.for("react.fragment"),Dy=Symbol.for("react.strict_mode"),Uy=Symbol.for("react.profiler"),Fy=Symbol.for("react.provider"),Oy=Symbol.for("react.context"),ky=Symbol.for("react.forward_ref"),By=Symbol.for("react.suspense"),zy=Symbol.for("react.memo"),Vy=Symbol.for("react.lazy"),om=Symbol.iterator;function Hy(n){return n===null||typeof n!="object"?null:(n=om&&n[om]||n["@@iterator"],typeof n=="function"?n:null)}var Mv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ev=Object.assign,Tv={};function ho(n,e,t){this.props=n,this.context=e,this.refs=Tv,this.updater=t||Mv}ho.prototype.isReactComponent={};ho.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ho.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function wv(){}wv.prototype=ho.prototype;function Th(n,e,t){this.props=n,this.context=e,this.refs=Tv,this.updater=t||Mv}var wh=Th.prototype=new wv;wh.constructor=Th;Ev(wh,ho.prototype);wh.isPureReactComponent=!0;var am=Array.isArray,Av=Object.prototype.hasOwnProperty,Ah={current:null},bv={key:!0,ref:!0,__self:!0,__source:!0};function Rv(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Av.call(e,i)&&!bv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ua,type:n,key:s,ref:o,props:r,_owner:Ah.current}}function Gy(n,e){return{$$typeof:Ua,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function bh(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ua}function Wy(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var lm=/\/+/g;function uu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Wy(""+n.key):e.toString(36)}function Vl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Ua:case Ny:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+uu(o,0):i,am(r)?(t="",n!=null&&(t=n.replace(lm,"$&/")+"/"),Vl(r,e,t,"",function(c){return c})):r!=null&&(bh(r)&&(r=Gy(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(lm,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",am(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+uu(s,a);o+=Vl(s,e,t,l,r)}else if(l=Hy(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+uu(s,a++),o+=Vl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ga(n,e,t){if(n==null)return n;var i=[],r=0;return Vl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Xy(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var vn={current:null},Hl={transition:null},Yy={ReactCurrentDispatcher:vn,ReactCurrentBatchConfig:Hl,ReactCurrentOwner:Ah};function Cv(){throw Error("act(...) is not supported in production builds of React.")}st.Children={map:Ga,forEach:function(n,e,t){Ga(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ga(n,function(){e++}),e},toArray:function(n){return Ga(n,function(e){return e})||[]},only:function(n){if(!bh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};st.Component=ho;st.Fragment=Iy;st.Profiler=Uy;st.PureComponent=Th;st.StrictMode=Dy;st.Suspense=By;st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yy;st.act=Cv;st.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Ev({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ah.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Av.call(e,l)&&!bv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ua,type:n.type,key:r,ref:s,props:i,_owner:o}};st.createContext=function(n){return n={$$typeof:Oy,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Fy,_context:n},n.Consumer=n};st.createElement=Rv;st.createFactory=function(n){var e=Rv.bind(null,n);return e.type=n,e};st.createRef=function(){return{current:null}};st.forwardRef=function(n){return{$$typeof:ky,render:n}};st.isValidElement=bh;st.lazy=function(n){return{$$typeof:Vy,_payload:{_status:-1,_result:n},_init:Xy}};st.memo=function(n,e){return{$$typeof:zy,type:n,compare:e===void 0?null:e}};st.startTransition=function(n){var e=Hl.transition;Hl.transition={};try{n()}finally{Hl.transition=e}};st.unstable_act=Cv;st.useCallback=function(n,e){return vn.current.useCallback(n,e)};st.useContext=function(n){return vn.current.useContext(n)};st.useDebugValue=function(){};st.useDeferredValue=function(n){return vn.current.useDeferredValue(n)};st.useEffect=function(n,e){return vn.current.useEffect(n,e)};st.useId=function(){return vn.current.useId()};st.useImperativeHandle=function(n,e,t){return vn.current.useImperativeHandle(n,e,t)};st.useInsertionEffect=function(n,e){return vn.current.useInsertionEffect(n,e)};st.useLayoutEffect=function(n,e){return vn.current.useLayoutEffect(n,e)};st.useMemo=function(n,e){return vn.current.useMemo(n,e)};st.useReducer=function(n,e,t){return vn.current.useReducer(n,e,t)};st.useRef=function(n){return vn.current.useRef(n)};st.useState=function(n){return vn.current.useState(n)};st.useSyncExternalStore=function(n,e,t){return vn.current.useSyncExternalStore(n,e,t)};st.useTransition=function(){return vn.current.useTransition()};st.version="18.3.1";Sv.exports=st;var Et=Sv.exports;const Ky=Ly(Et);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qy=Et,$y=Symbol.for("react.element"),jy=Symbol.for("react.fragment"),Zy=Object.prototype.hasOwnProperty,Jy=qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qy={key:!0,ref:!0,__self:!0,__source:!0};function Pv(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Zy.call(e,i)&&!Qy.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:$y,type:n,key:s,ref:o,props:r,_owner:Jy.current}}zc.Fragment=jy;zc.jsx=Pv;zc.jsxs=Pv;yv.exports=zc;var ee=yv.exports,Ff={},Lv={exports:{}},Un={},Nv={exports:{}},Iv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,J){var ne=U.length;U.push(J);e:for(;0<ne;){var ue=ne-1>>>1,xe=U[ue];if(0<r(xe,J))U[ue]=J,U[ne]=xe,ne=ue;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var J=U[0],ne=U.pop();if(ne!==J){U[0]=ne;e:for(var ue=0,xe=U.length,$e=xe>>>1;ue<$e;){var ot=2*(ue+1)-1,Qe=U[ot],te=ot+1,ve=U[te];if(0>r(Qe,ne))te<xe&&0>r(ve,Qe)?(U[ue]=ve,U[te]=ne,ue=te):(U[ue]=Qe,U[ot]=ne,ue=ot);else if(te<xe&&0>r(ve,ne))U[ue]=ve,U[te]=ne,ue=te;else break e}}return J}function r(U,J){var ne=U.sortIndex-J.sortIndex;return ne!==0?ne:U.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,m=!1,g=!1,v=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(U){for(var J=t(c);J!==null;){if(J.callback===null)i(c);else if(J.startTime<=U)i(c),J.sortIndex=J.expirationTime,e(l,J);else break;J=t(c)}}function x(U){if(g=!1,M(U),!m)if(t(l)!==null)m=!0,Q(E);else{var J=t(c);J!==null&&Y(x,J.startTime-U)}}function E(U,J){m=!1,g&&(g=!1,h(y),y=-1),p=!0;var ne=f;try{for(M(J),d=t(l);d!==null&&(!(d.expirationTime>J)||U&&!L());){var ue=d.callback;if(typeof ue=="function"){d.callback=null,f=d.priorityLevel;var xe=ue(d.expirationTime<=J);J=n.unstable_now(),typeof xe=="function"?d.callback=xe:d===t(l)&&i(l),M(J)}else i(l);d=t(l)}if(d!==null)var $e=!0;else{var ot=t(c);ot!==null&&Y(x,ot.startTime-J),$e=!1}return $e}finally{d=null,f=ne,p=!1}}var w=!1,b=null,y=-1,C=5,P=-1;function L(){return!(n.unstable_now()-P<C)}function F(){if(b!==null){var U=n.unstable_now();P=U;var J=!0;try{J=b(!0,U)}finally{J?j():(w=!1,b=null)}}else w=!1}var j;if(typeof _=="function")j=function(){_(F)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,z=B.port2;B.port1.onmessage=F,j=function(){z.postMessage(null)}}else j=function(){v(F,0)};function Q(U){b=U,w||(w=!0,j())}function Y(U,J){y=v(function(){U(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){m||p||(m=!0,Q(E))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(f){case 1:case 2:case 3:var J=3;break;default:J=f}var ne=f;f=J;try{return U()}finally{f=ne}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,J){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ne=f;f=U;try{return J()}finally{f=ne}},n.unstable_scheduleCallback=function(U,J,ne){var ue=n.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ue+ne:ue):ne=ue,U){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=ne+xe,U={id:u++,callback:J,priorityLevel:U,startTime:ne,expirationTime:xe,sortIndex:-1},ne>ue?(U.sortIndex=ne,e(c,U),t(l)===null&&U===t(c)&&(g?(h(y),y=-1):g=!0,Y(x,ne-ue))):(U.sortIndex=xe,e(l,U),m||p||(m=!0,Q(E))),U},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(U){var J=f;return function(){var ne=f;f=J;try{return U.apply(this,arguments)}finally{f=ne}}}})(Iv);Nv.exports=Iv;var eS=Nv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tS=Et,In=eS;function me(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dv=new Set,ua={};function ls(n,e){Qs(n,e),Qs(n+"Capture",e)}function Qs(n,e){for(ua[n]=e,n=0;n<e.length;n++)Dv.add(e[n])}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Of=Object.prototype.hasOwnProperty,nS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cm={},um={};function iS(n){return Of.call(um,n)?!0:Of.call(cm,n)?!1:nS.test(n)?um[n]=!0:(cm[n]=!0,!1)}function rS(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function sS(n,e,t,i){if(e===null||typeof e>"u"||rS(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _n(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var en={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){en[n]=new _n(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];en[e]=new _n(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){en[n]=new _n(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){en[n]=new _n(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){en[n]=new _n(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){en[n]=new _n(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){en[n]=new _n(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){en[n]=new _n(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){en[n]=new _n(n,5,!1,n.toLowerCase(),null,!1,!1)});var Rh=/[\-:]([a-z])/g;function Ch(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Rh,Ch);en[e]=new _n(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Rh,Ch);en[e]=new _n(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Rh,Ch);en[e]=new _n(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){en[n]=new _n(n,1,!1,n.toLowerCase(),null,!1,!1)});en.xlinkHref=new _n("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){en[n]=new _n(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ph(n,e,t,i){var r=en.hasOwnProperty(e)?en[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sS(e,t,r,i)&&(t=null),i||r===null?iS(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var nr=tS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),Lh=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),Uv=Symbol.for("react.provider"),Fv=Symbol.for("react.context"),Nh=Symbol.for("react.forward_ref"),Bf=Symbol.for("react.suspense"),zf=Symbol.for("react.suspense_list"),Ih=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),Ov=Symbol.for("react.offscreen"),fm=Symbol.iterator;function So(n){return n===null||typeof n!="object"?null:(n=fm&&n[fm]||n["@@iterator"],typeof n=="function"?n:null)}var Ct=Object.assign,fu;function Go(n){if(fu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);fu=e&&e[1]||""}return`
`+fu+n}var du=!1;function hu(n,e){if(!n||du)return"";du=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{du=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Go(n):""}function oS(n){switch(n.tag){case 5:return Go(n.type);case 16:return Go("Lazy");case 13:return Go("Suspense");case 19:return Go("SuspenseList");case 0:case 2:case 15:return n=hu(n.type,!1),n;case 11:return n=hu(n.type.render,!1),n;case 1:return n=hu(n.type,!0),n;default:return""}}function Vf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ns:return"Fragment";case Ls:return"Portal";case kf:return"Profiler";case Lh:return"StrictMode";case Bf:return"Suspense";case zf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Fv:return(n.displayName||"Context")+".Consumer";case Uv:return(n._context.displayName||"Context")+".Provider";case Nh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ih:return e=n.displayName||null,e!==null?e:Vf(n.type)||"Memo";case gr:e=n._payload,n=n._init;try{return Vf(n(e))}catch{}}return null}function aS(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vf(e);case 8:return e===Lh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function kv(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lS(n){var e=kv(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Xa(n){n._valueTracker||(n._valueTracker=lS(n))}function Bv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=kv(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function oc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Hf(n,e){var t=e.checked;return Ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function dm(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ir(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zv(n,e){e=e.checked,e!=null&&Ph(n,"checked",e,!1)}function Gf(n,e){zv(n,e);var t=Ir(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Wf(n,e.type,t):e.hasOwnProperty("defaultValue")&&Wf(n,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function hm(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Wf(n,e,t){(e!=="number"||oc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Wo=Array.isArray;function Gs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ir(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Xf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(me(91));return Ct({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function pm(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(me(92));if(Wo(t)){if(1<t.length)throw Error(me(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ir(t)}}function Vv(n,e){var t=Ir(e.value),i=Ir(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function mm(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Hv(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Hv(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ya,Gv=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ya=Ya||document.createElement("div"),Ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ya.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function fa(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cS=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(n){cS.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),jo[e]=jo[n]})});function Wv(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||jo.hasOwnProperty(n)&&jo[n]?(""+e).trim():e+"px"}function Xv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Wv(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var uS=Ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kf(n,e){if(e){if(uS[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(me(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(me(62))}}function qf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $f=null;function Dh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var jf=null,Ws=null,Xs=null;function gm(n){if(n=ka(n)){if(typeof jf!="function")throw Error(me(280));var e=n.stateNode;e&&(e=Xc(e),jf(n.stateNode,n.type,e))}}function Yv(n){Ws?Xs?Xs.push(n):Xs=[n]:Ws=n}function Kv(){if(Ws){var n=Ws,e=Xs;if(Xs=Ws=null,gm(n),e)for(n=0;n<e.length;n++)gm(e[n])}}function qv(n,e){return n(e)}function $v(){}var pu=!1;function jv(n,e,t){if(pu)return n(e,t);pu=!0;try{return qv(n,e,t)}finally{pu=!1,(Ws!==null||Xs!==null)&&($v(),Kv())}}function da(n,e){var t=n.stateNode;if(t===null)return null;var i=Xc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(me(231,e,typeof t));return t}var Zf=!1;if($i)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Zf=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Zf=!1}function fS(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Zo=!1,ac=null,lc=!1,Jf=null,dS={onError:function(n){Zo=!0,ac=n}};function hS(n,e,t,i,r,s,o,a,l){Zo=!1,ac=null,fS.apply(dS,arguments)}function pS(n,e,t,i,r,s,o,a,l){if(hS.apply(this,arguments),Zo){if(Zo){var c=ac;Zo=!1,ac=null}else throw Error(me(198));lc||(lc=!0,Jf=c)}}function cs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Zv(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function vm(n){if(cs(n)!==n)throw Error(me(188))}function mS(n){var e=n.alternate;if(!e){if(e=cs(n),e===null)throw Error(me(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return vm(r),n;if(s===i)return vm(r),e;s=s.sibling}throw Error(me(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(me(189))}}if(t.alternate!==i)throw Error(me(190))}if(t.tag!==3)throw Error(me(188));return t.stateNode.current===t?n:e}function Jv(n){return n=mS(n),n!==null?Qv(n):null}function Qv(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Qv(n);if(e!==null)return e;n=n.sibling}return null}var e_=In.unstable_scheduleCallback,_m=In.unstable_cancelCallback,gS=In.unstable_shouldYield,vS=In.unstable_requestPaint,Ft=In.unstable_now,_S=In.unstable_getCurrentPriorityLevel,Uh=In.unstable_ImmediatePriority,t_=In.unstable_UserBlockingPriority,cc=In.unstable_NormalPriority,xS=In.unstable_LowPriority,n_=In.unstable_IdlePriority,Vc=null,Ei=null;function yS(n){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(Vc,n,void 0,(n.current.flags&128)===128)}catch{}}var si=Math.clz32?Math.clz32:ES,SS=Math.log,MS=Math.LN2;function ES(n){return n>>>=0,n===0?32:31-(SS(n)/MS|0)|0}var Ka=64,qa=4194304;function Xo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function uc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Xo(a):(s&=o,s!==0&&(i=Xo(s)))}else o=t&~r,o!==0?i=Xo(o):s!==0&&(i=Xo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-si(e),r=1<<t,i|=n[t],e&=~r;return i}function TS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-si(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=TS(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Qf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function i_(){var n=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),n}function mu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Fa(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-si(e),n[e]=t}function AS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-si(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Fh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-si(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ht=0;function r_(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var s_,Oh,o_,a_,l_,ed=!1,$a=[],wr=null,Ar=null,br=null,ha=new Map,pa=new Map,_r=[],bS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xm(n,e){switch(n){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(e.pointerId)}}function Eo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ka(e),e!==null&&Oh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function RS(n,e,t,i,r){switch(e){case"focusin":return wr=Eo(wr,n,e,t,i,r),!0;case"dragenter":return Ar=Eo(Ar,n,e,t,i,r),!0;case"mouseover":return br=Eo(br,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ha.set(s,Eo(ha.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,pa.set(s,Eo(pa.get(s)||null,n,e,t,i,r)),!0}return!1}function c_(n){var e=$r(n.target);if(e!==null){var t=cs(e);if(t!==null){if(e=t.tag,e===13){if(e=Zv(t),e!==null){n.blockedOn=e,l_(n.priority,function(){o_(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Gl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=td(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);$f=i,t.target.dispatchEvent(i),$f=null}else return e=ka(t),e!==null&&Oh(e),n.blockedOn=t,!1;e.shift()}return!0}function ym(n,e,t){Gl(n)&&t.delete(e)}function CS(){ed=!1,wr!==null&&Gl(wr)&&(wr=null),Ar!==null&&Gl(Ar)&&(Ar=null),br!==null&&Gl(br)&&(br=null),ha.forEach(ym),pa.forEach(ym)}function To(n,e){n.blockedOn===e&&(n.blockedOn=null,ed||(ed=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,CS)))}function ma(n){function e(r){return To(r,n)}if(0<$a.length){To($a[0],n);for(var t=1;t<$a.length;t++){var i=$a[t];i.blockedOn===n&&(i.blockedOn=null)}}for(wr!==null&&To(wr,n),Ar!==null&&To(Ar,n),br!==null&&To(br,n),ha.forEach(e),pa.forEach(e),t=0;t<_r.length;t++)i=_r[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<_r.length&&(t=_r[0],t.blockedOn===null);)c_(t),t.blockedOn===null&&_r.shift()}var Ys=nr.ReactCurrentBatchConfig,fc=!0;function PS(n,e,t,i){var r=ht,s=Ys.transition;Ys.transition=null;try{ht=1,kh(n,e,t,i)}finally{ht=r,Ys.transition=s}}function LS(n,e,t,i){var r=ht,s=Ys.transition;Ys.transition=null;try{ht=4,kh(n,e,t,i)}finally{ht=r,Ys.transition=s}}function kh(n,e,t,i){if(fc){var r=td(n,e,t,i);if(r===null)wu(n,e,i,dc,t),xm(n,i);else if(RS(r,n,e,t,i))i.stopPropagation();else if(xm(n,i),e&4&&-1<bS.indexOf(n)){for(;r!==null;){var s=ka(r);if(s!==null&&s_(s),s=td(n,e,t,i),s===null&&wu(n,e,i,dc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else wu(n,e,i,null,t)}}var dc=null;function td(n,e,t,i){if(dc=null,n=Dh(i),n=$r(n),n!==null)if(e=cs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Zv(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return dc=n,null}function u_(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_S()){case Uh:return 1;case t_:return 4;case cc:case xS:return 16;case n_:return 536870912;default:return 16}default:return 16}}var Sr=null,Bh=null,Wl=null;function f_(){if(Wl)return Wl;var n,e=Bh,t=e.length,i,r="value"in Sr?Sr.value:Sr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Wl=r.slice(n,1<i?1-i:void 0)}function Xl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ja(){return!0}function Sm(){return!1}function Fn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ja:Sm,this.isPropagationStopped=Sm,this}return Ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),e}var po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zh=Fn(po),Oa=Ct({},po,{view:0,detail:0}),NS=Fn(Oa),gu,vu,wo,Hc=Ct({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wo&&(wo&&n.type==="mousemove"?(gu=n.screenX-wo.screenX,vu=n.screenY-wo.screenY):vu=gu=0,wo=n),gu)},movementY:function(n){return"movementY"in n?n.movementY:vu}}),Mm=Fn(Hc),IS=Ct({},Hc,{dataTransfer:0}),DS=Fn(IS),US=Ct({},Oa,{relatedTarget:0}),_u=Fn(US),FS=Ct({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),OS=Fn(FS),kS=Ct({},po,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),BS=Fn(kS),zS=Ct({},po,{data:0}),Em=Fn(zS),VS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function WS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=GS[n])?!!e[n]:!1}function Vh(){return WS}var XS=Ct({},Oa,{key:function(n){if(n.key){var e=VS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Xl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?HS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vh,charCode:function(n){return n.type==="keypress"?Xl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Xl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),YS=Fn(XS),KS=Ct({},Hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tm=Fn(KS),qS=Ct({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vh}),$S=Fn(qS),jS=Ct({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZS=Fn(jS),JS=Ct({},Hc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),QS=Fn(JS),eM=[9,13,27,32],Hh=$i&&"CompositionEvent"in window,Jo=null;$i&&"documentMode"in document&&(Jo=document.documentMode);var tM=$i&&"TextEvent"in window&&!Jo,d_=$i&&(!Hh||Jo&&8<Jo&&11>=Jo),wm=" ",Am=!1;function h_(n,e){switch(n){case"keyup":return eM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p_(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Is=!1;function nM(n,e){switch(n){case"compositionend":return p_(e);case"keypress":return e.which!==32?null:(Am=!0,wm);case"textInput":return n=e.data,n===wm&&Am?null:n;default:return null}}function iM(n,e){if(Is)return n==="compositionend"||!Hh&&h_(n,e)?(n=f_(),Wl=Bh=Sr=null,Is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return d_&&e.locale!=="ko"?null:e.data;default:return null}}var rM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!rM[n.type]:e==="textarea"}function m_(n,e,t,i){Yv(i),e=hc(e,"onChange"),0<e.length&&(t=new zh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Qo=null,ga=null;function sM(n){A_(n,0)}function Gc(n){var e=Fs(n);if(Bv(e))return n}function oM(n,e){if(n==="change")return e}var g_=!1;if($i){var xu;if($i){var yu="oninput"in document;if(!yu){var Rm=document.createElement("div");Rm.setAttribute("oninput","return;"),yu=typeof Rm.oninput=="function"}xu=yu}else xu=!1;g_=xu&&(!document.documentMode||9<document.documentMode)}function Cm(){Qo&&(Qo.detachEvent("onpropertychange",v_),ga=Qo=null)}function v_(n){if(n.propertyName==="value"&&Gc(ga)){var e=[];m_(e,ga,n,Dh(n)),jv(sM,e)}}function aM(n,e,t){n==="focusin"?(Cm(),Qo=e,ga=t,Qo.attachEvent("onpropertychange",v_)):n==="focusout"&&Cm()}function lM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Gc(ga)}function cM(n,e){if(n==="click")return Gc(e)}function uM(n,e){if(n==="input"||n==="change")return Gc(e)}function fM(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var li=typeof Object.is=="function"?Object.is:fM;function va(n,e){if(li(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Of.call(e,r)||!li(n[r],e[r]))return!1}return!0}function Pm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Lm(n,e){var t=Pm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Pm(t)}}function __(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?__(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function x_(){for(var n=window,e=oc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=oc(n.document)}return e}function Gh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function dM(n){var e=x_(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&__(t.ownerDocument.documentElement,t)){if(i!==null&&Gh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Lm(t,s);var o=Lm(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var hM=$i&&"documentMode"in document&&11>=document.documentMode,Ds=null,nd=null,ea=null,id=!1;function Nm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;id||Ds==null||Ds!==oc(i)||(i=Ds,"selectionStart"in i&&Gh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ea&&va(ea,i)||(ea=i,i=hc(nd,"onSelect"),0<i.length&&(e=new zh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ds)))}function Za(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Us={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},Su={},y_={};$i&&(y_=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Wc(n){if(Su[n])return Su[n];if(!Us[n])return n;var e=Us[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in y_)return Su[n]=e[t];return n}var S_=Wc("animationend"),M_=Wc("animationiteration"),E_=Wc("animationstart"),T_=Wc("transitionend"),w_=new Map,Im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(n,e){w_.set(n,e),ls(e,[n])}for(var Mu=0;Mu<Im.length;Mu++){var Eu=Im[Mu],pM=Eu.toLowerCase(),mM=Eu[0].toUpperCase()+Eu.slice(1);Fr(pM,"on"+mM)}Fr(S_,"onAnimationEnd");Fr(M_,"onAnimationIteration");Fr(E_,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(T_,"onTransitionEnd");Qs("onMouseEnter",["mouseout","mouseover"]);Qs("onMouseLeave",["mouseout","mouseover"]);Qs("onPointerEnter",["pointerout","pointerover"]);Qs("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function Dm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,pS(i,e,void 0,n),n.currentTarget=null}function A_(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Dm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Dm(r,a,c),s=l}}}if(lc)throw n=Jf,lc=!1,Jf=null,n}function Mt(n,e){var t=e[ld];t===void 0&&(t=e[ld]=new Set);var i=n+"__bubble";t.has(i)||(b_(e,n,2,!1),t.add(i))}function Tu(n,e,t){var i=0;e&&(i|=4),b_(t,n,i,e)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function _a(n){if(!n[Ja]){n[Ja]=!0,Dv.forEach(function(t){t!=="selectionchange"&&(gM.has(t)||Tu(t,!1,n),Tu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ja]||(e[Ja]=!0,Tu("selectionchange",!1,e))}}function b_(n,e,t,i){switch(u_(e)){case 1:var r=PS;break;case 4:r=LS;break;default:r=kh}t=r.bind(null,e,t,n),r=void 0,!Zf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function wu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=$r(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}jv(function(){var c=s,u=Dh(t),d=[];e:{var f=w_.get(n);if(f!==void 0){var p=zh,m=n;switch(n){case"keypress":if(Xl(t)===0)break e;case"keydown":case"keyup":p=YS;break;case"focusin":m="focus",p=_u;break;case"focusout":m="blur",p=_u;break;case"beforeblur":case"afterblur":p=_u;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=DS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=$S;break;case S_:case M_:case E_:p=OS;break;case T_:p=ZS;break;case"scroll":p=NS;break;case"wheel":p=QS;break;case"copy":case"cut":case"paste":p=BS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Tm}var g=(e&4)!==0,v=!g&&n==="scroll",h=g?f!==null?f+"Capture":null:f;g=[];for(var _=c,M;_!==null;){M=_;var x=M.stateNode;if(M.tag===5&&x!==null&&(M=x,h!==null&&(x=da(_,h),x!=null&&g.push(xa(_,x,M)))),v)break;_=_.return}0<g.length&&(f=new p(f,m,null,t,u),d.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==$f&&(m=t.relatedTarget||t.fromElement)&&($r(m)||m[ji]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=t.relatedTarget||t.toElement,p=c,m=m?$r(m):null,m!==null&&(v=cs(m),m!==v||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(g=Mm,x="onMouseLeave",h="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(g=Tm,x="onPointerLeave",h="onPointerEnter",_="pointer"),v=p==null?f:Fs(p),M=m==null?f:Fs(m),f=new g(x,_+"leave",p,t,u),f.target=v,f.relatedTarget=M,x=null,$r(u)===c&&(g=new g(h,_+"enter",m,t,u),g.target=M,g.relatedTarget=v,x=g),v=x,p&&m)t:{for(g=p,h=m,_=0,M=g;M;M=hs(M))_++;for(M=0,x=h;x;x=hs(x))M++;for(;0<_-M;)g=hs(g),_--;for(;0<M-_;)h=hs(h),M--;for(;_--;){if(g===h||h!==null&&g===h.alternate)break t;g=hs(g),h=hs(h)}g=null}else g=null;p!==null&&Um(d,f,p,g,!1),m!==null&&v!==null&&Um(d,v,m,g,!0)}}e:{if(f=c?Fs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var E=oM;else if(bm(f))if(g_)E=uM;else{E=lM;var w=aM}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=cM);if(E&&(E=E(n,c))){m_(d,E,t,u);break e}w&&w(n,f,c),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Wf(f,"number",f.value)}switch(w=c?Fs(c):window,n){case"focusin":(bm(w)||w.contentEditable==="true")&&(Ds=w,nd=c,ea=null);break;case"focusout":ea=nd=Ds=null;break;case"mousedown":id=!0;break;case"contextmenu":case"mouseup":case"dragend":id=!1,Nm(d,t,u);break;case"selectionchange":if(hM)break;case"keydown":case"keyup":Nm(d,t,u)}var b;if(Hh)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Is?h_(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(d_&&t.locale!=="ko"&&(Is||y!=="onCompositionStart"?y==="onCompositionEnd"&&Is&&(b=f_()):(Sr=u,Bh="value"in Sr?Sr.value:Sr.textContent,Is=!0)),w=hc(c,y),0<w.length&&(y=new Em(y,n,null,t,u),d.push({event:y,listeners:w}),b?y.data=b:(b=p_(t),b!==null&&(y.data=b)))),(b=tM?nM(n,t):iM(n,t))&&(c=hc(c,"onBeforeInput"),0<c.length&&(u=new Em("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=b))}A_(d,e)})}function xa(n,e,t){return{instance:n,listener:e,currentTarget:t}}function hc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=da(n,t),s!=null&&i.unshift(xa(n,s,r)),s=da(n,e),s!=null&&i.push(xa(n,s,r))),n=n.return}return i}function hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Um(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=da(t,s),l!=null&&o.unshift(xa(t,l,a))):r||(l=da(t,s),l!=null&&o.push(xa(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var vM=/\r\n?/g,_M=/\u0000|\uFFFD/g;function Fm(n){return(typeof n=="string"?n:""+n).replace(vM,`
`).replace(_M,"")}function Qa(n,e,t){if(e=Fm(e),Fm(n)!==e&&t)throw Error(me(425))}function pc(){}var rd=null,sd=null;function od(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,xM=typeof clearTimeout=="function"?clearTimeout:void 0,Om=typeof Promise=="function"?Promise:void 0,yM=typeof queueMicrotask=="function"?queueMicrotask:typeof Om<"u"?function(n){return Om.resolve(null).then(n).catch(SM)}:ad;function SM(n){setTimeout(function(){throw n})}function Au(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ma(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ma(e)}function Rr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function km(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var mo=Math.random().toString(36).slice(2),xi="__reactFiber$"+mo,ya="__reactProps$"+mo,ji="__reactContainer$"+mo,ld="__reactEvents$"+mo,MM="__reactListeners$"+mo,EM="__reactHandles$"+mo;function $r(n){var e=n[xi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ji]||t[xi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=km(n);n!==null;){if(t=n[xi])return t;n=km(n)}return e}n=t,t=n.parentNode}return null}function ka(n){return n=n[xi]||n[ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(me(33))}function Xc(n){return n[ya]||null}var cd=[],Os=-1;function Or(n){return{current:n}}function Tt(n){0>Os||(n.current=cd[Os],cd[Os]=null,Os--)}function St(n,e){Os++,cd[Os]=n.current,n.current=e}var Dr={},un=Or(Dr),Sn=Or(!1),ts=Dr;function eo(n,e){var t=n.type.contextTypes;if(!t)return Dr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(n){return n=n.childContextTypes,n!=null}function mc(){Tt(Sn),Tt(un)}function Bm(n,e,t){if(un.current!==Dr)throw Error(me(168));St(un,e),St(Sn,t)}function R_(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(me(108,aS(n)||"Unknown",r));return Ct({},t,i)}function gc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Dr,ts=un.current,St(un,n),St(Sn,Sn.current),!0}function zm(n,e,t){var i=n.stateNode;if(!i)throw Error(me(169));t?(n=R_(n,e,ts),i.__reactInternalMemoizedMergedChildContext=n,Tt(Sn),Tt(un),St(un,n)):Tt(Sn),St(Sn,t)}var zi=null,Yc=!1,bu=!1;function C_(n){zi===null?zi=[n]:zi.push(n)}function TM(n){Yc=!0,C_(n)}function kr(){if(!bu&&zi!==null){bu=!0;var n=0,e=ht;try{var t=zi;for(ht=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}zi=null,Yc=!1}catch(r){throw zi!==null&&(zi=zi.slice(n+1)),e_(Uh,kr),r}finally{ht=e,bu=!1}}return null}var ks=[],Bs=0,vc=null,_c=0,Vn=[],Hn=0,ns=null,Hi=1,Gi="";function Xr(n,e){ks[Bs++]=_c,ks[Bs++]=vc,vc=n,_c=e}function P_(n,e,t){Vn[Hn++]=Hi,Vn[Hn++]=Gi,Vn[Hn++]=ns,ns=n;var i=Hi;n=Gi;var r=32-si(i)-1;i&=~(1<<r),t+=1;var s=32-si(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Hi=1<<32-si(e)+r|t<<r|i,Gi=s+n}else Hi=1<<s|t<<r|i,Gi=n}function Wh(n){n.return!==null&&(Xr(n,1),P_(n,1,0))}function Xh(n){for(;n===vc;)vc=ks[--Bs],ks[Bs]=null,_c=ks[--Bs],ks[Bs]=null;for(;n===ns;)ns=Vn[--Hn],Vn[Hn]=null,Gi=Vn[--Hn],Vn[Hn]=null,Hi=Vn[--Hn],Vn[Hn]=null}var Nn=null,Ln=null,wt=!1,ti=null;function L_(n,e){var t=Gn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Vm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Nn=n,Ln=Rr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Nn=n,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ns!==null?{id:Hi,overflow:Gi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Gn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Nn=n,Ln=null,!0):!1;default:return!1}}function ud(n){return(n.mode&1)!==0&&(n.flags&128)===0}function fd(n){if(wt){var e=Ln;if(e){var t=e;if(!Vm(n,e)){if(ud(n))throw Error(me(418));e=Rr(t.nextSibling);var i=Nn;e&&Vm(n,e)?L_(i,t):(n.flags=n.flags&-4097|2,wt=!1,Nn=n)}}else{if(ud(n))throw Error(me(418));n.flags=n.flags&-4097|2,wt=!1,Nn=n}}}function Hm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Nn=n}function el(n){if(n!==Nn)return!1;if(!wt)return Hm(n),wt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!od(n.type,n.memoizedProps)),e&&(e=Ln)){if(ud(n))throw N_(),Error(me(418));for(;e;)L_(n,e),e=Rr(e.nextSibling)}if(Hm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(me(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Ln=Rr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Ln=null}}else Ln=Nn?Rr(n.stateNode.nextSibling):null;return!0}function N_(){for(var n=Ln;n;)n=Rr(n.nextSibling)}function to(){Ln=Nn=null,wt=!1}function Yh(n){ti===null?ti=[n]:ti.push(n)}var wM=nr.ReactCurrentBatchConfig;function Ao(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(me(309));var i=t.stateNode}if(!i)throw Error(me(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(me(284));if(!t._owner)throw Error(me(290,n))}return n}function tl(n,e){throw n=Object.prototype.toString.call(e),Error(me(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Gm(n){var e=n._init;return e(n._payload)}function I_(n){function e(h,_){if(n){var M=h.deletions;M===null?(h.deletions=[_],h.flags|=16):M.push(_)}}function t(h,_){if(!n)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=Nr(h,_),h.index=0,h.sibling=null,h}function s(h,_,M){return h.index=M,n?(M=h.alternate,M!==null?(M=M.index,M<_?(h.flags|=2,_):M):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,_,M,x){return _===null||_.tag!==6?(_=Du(M,h.mode,x),_.return=h,_):(_=r(_,M),_.return=h,_)}function l(h,_,M,x){var E=M.type;return E===Ns?u(h,_,M.props.children,x,M.key):_!==null&&(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===gr&&Gm(E)===_.type)?(x=r(_,M.props),x.ref=Ao(h,_,M),x.return=h,x):(x=Jl(M.type,M.key,M.props,null,h.mode,x),x.ref=Ao(h,_,M),x.return=h,x)}function c(h,_,M,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==M.containerInfo||_.stateNode.implementation!==M.implementation?(_=Uu(M,h.mode,x),_.return=h,_):(_=r(_,M.children||[]),_.return=h,_)}function u(h,_,M,x,E){return _===null||_.tag!==7?(_=es(M,h.mode,x,E),_.return=h,_):(_=r(_,M),_.return=h,_)}function d(h,_,M){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Du(""+_,h.mode,M),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Wa:return M=Jl(_.type,_.key,_.props,null,h.mode,M),M.ref=Ao(h,null,_),M.return=h,M;case Ls:return _=Uu(_,h.mode,M),_.return=h,_;case gr:var x=_._init;return d(h,x(_._payload),M)}if(Wo(_)||So(_))return _=es(_,h.mode,M,null),_.return=h,_;tl(h,_)}return null}function f(h,_,M,x){var E=_!==null?_.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return E!==null?null:a(h,_,""+M,x);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Wa:return M.key===E?l(h,_,M,x):null;case Ls:return M.key===E?c(h,_,M,x):null;case gr:return E=M._init,f(h,_,E(M._payload),x)}if(Wo(M)||So(M))return E!==null?null:u(h,_,M,x,null);tl(h,M)}return null}function p(h,_,M,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(M)||null,a(_,h,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wa:return h=h.get(x.key===null?M:x.key)||null,l(_,h,x,E);case Ls:return h=h.get(x.key===null?M:x.key)||null,c(_,h,x,E);case gr:var w=x._init;return p(h,_,M,w(x._payload),E)}if(Wo(x)||So(x))return h=h.get(M)||null,u(_,h,x,E,null);tl(_,x)}return null}function m(h,_,M,x){for(var E=null,w=null,b=_,y=_=0,C=null;b!==null&&y<M.length;y++){b.index>y?(C=b,b=null):C=b.sibling;var P=f(h,b,M[y],x);if(P===null){b===null&&(b=C);break}n&&b&&P.alternate===null&&e(h,b),_=s(P,_,y),w===null?E=P:w.sibling=P,w=P,b=C}if(y===M.length)return t(h,b),wt&&Xr(h,y),E;if(b===null){for(;y<M.length;y++)b=d(h,M[y],x),b!==null&&(_=s(b,_,y),w===null?E=b:w.sibling=b,w=b);return wt&&Xr(h,y),E}for(b=i(h,b);y<M.length;y++)C=p(b,h,y,M[y],x),C!==null&&(n&&C.alternate!==null&&b.delete(C.key===null?y:C.key),_=s(C,_,y),w===null?E=C:w.sibling=C,w=C);return n&&b.forEach(function(L){return e(h,L)}),wt&&Xr(h,y),E}function g(h,_,M,x){var E=So(M);if(typeof E!="function")throw Error(me(150));if(M=E.call(M),M==null)throw Error(me(151));for(var w=E=null,b=_,y=_=0,C=null,P=M.next();b!==null&&!P.done;y++,P=M.next()){b.index>y?(C=b,b=null):C=b.sibling;var L=f(h,b,P.value,x);if(L===null){b===null&&(b=C);break}n&&b&&L.alternate===null&&e(h,b),_=s(L,_,y),w===null?E=L:w.sibling=L,w=L,b=C}if(P.done)return t(h,b),wt&&Xr(h,y),E;if(b===null){for(;!P.done;y++,P=M.next())P=d(h,P.value,x),P!==null&&(_=s(P,_,y),w===null?E=P:w.sibling=P,w=P);return wt&&Xr(h,y),E}for(b=i(h,b);!P.done;y++,P=M.next())P=p(b,h,y,P.value,x),P!==null&&(n&&P.alternate!==null&&b.delete(P.key===null?y:P.key),_=s(P,_,y),w===null?E=P:w.sibling=P,w=P);return n&&b.forEach(function(F){return e(h,F)}),wt&&Xr(h,y),E}function v(h,_,M,x){if(typeof M=="object"&&M!==null&&M.type===Ns&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Wa:e:{for(var E=M.key,w=_;w!==null;){if(w.key===E){if(E=M.type,E===Ns){if(w.tag===7){t(h,w.sibling),_=r(w,M.props.children),_.return=h,h=_;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===gr&&Gm(E)===w.type){t(h,w.sibling),_=r(w,M.props),_.ref=Ao(h,w,M),_.return=h,h=_;break e}t(h,w);break}else e(h,w);w=w.sibling}M.type===Ns?(_=es(M.props.children,h.mode,x,M.key),_.return=h,h=_):(x=Jl(M.type,M.key,M.props,null,h.mode,x),x.ref=Ao(h,_,M),x.return=h,h=x)}return o(h);case Ls:e:{for(w=M.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===M.containerInfo&&_.stateNode.implementation===M.implementation){t(h,_.sibling),_=r(_,M.children||[]),_.return=h,h=_;break e}else{t(h,_);break}else e(h,_);_=_.sibling}_=Uu(M,h.mode,x),_.return=h,h=_}return o(h);case gr:return w=M._init,v(h,_,w(M._payload),x)}if(Wo(M))return m(h,_,M,x);if(So(M))return g(h,_,M,x);tl(h,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,_!==null&&_.tag===6?(t(h,_.sibling),_=r(_,M),_.return=h,h=_):(t(h,_),_=Du(M,h.mode,x),_.return=h,h=_),o(h)):t(h,_)}return v}var no=I_(!0),D_=I_(!1),xc=Or(null),yc=null,zs=null,Kh=null;function qh(){Kh=zs=yc=null}function $h(n){var e=xc.current;Tt(xc),n._currentValue=e}function dd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ks(n,e){yc=n,Kh=zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(yn=!0),n.firstContext=null)}function Kn(n){var e=n._currentValue;if(Kh!==n)if(n={context:n,memoizedValue:e,next:null},zs===null){if(yc===null)throw Error(me(308));zs=n,yc.dependencies={lanes:0,firstContext:n}}else zs=zs.next=n;return e}var jr=null;function jh(n){jr===null?jr=[n]:jr.push(n)}function U_(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,jh(e)):(t.next=r.next,r.next=t),e.interleaved=t,Zi(n,i)}function Zi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var vr=!1;function Zh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function F_(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Yi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,lt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Zi(n,t)}return r=i.interleaved,r===null?(e.next=e,jh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Zi(n,t)}function Yl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Fh(n,t)}}function Wm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Sc(n,e,t,i){var r=n.updateQueue;vr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=n,g=a;switch(f=e,p=t,g.tag){case 1:if(m=g.payload,typeof m=="function"){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m=="function"?m.call(p,d,f):m,f==null)break e;d=Ct({},d,f);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);rs|=o,n.lanes=o,n.memoizedState=d}}function Xm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(me(191,r));r.call(i)}}}var Ba={},Ti=Or(Ba),Sa=Or(Ba),Ma=Or(Ba);function Zr(n){if(n===Ba)throw Error(me(174));return n}function Jh(n,e){switch(St(Ma,e),St(Sa,n),St(Ti,Ba),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Yf(e,n)}Tt(Ti),St(Ti,e)}function io(){Tt(Ti),Tt(Sa),Tt(Ma)}function O_(n){Zr(Ma.current);var e=Zr(Ti.current),t=Yf(e,n.type);e!==t&&(St(Sa,n),St(Ti,t))}function Qh(n){Sa.current===n&&(Tt(Ti),Tt(Sa))}var At=Or(0);function Mc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ru=[];function ep(){for(var n=0;n<Ru.length;n++)Ru[n]._workInProgressVersionPrimary=null;Ru.length=0}var Kl=nr.ReactCurrentDispatcher,Cu=nr.ReactCurrentBatchConfig,is=0,bt=null,zt=null,Kt=null,Ec=!1,ta=!1,Ea=0,AM=0;function nn(){throw Error(me(321))}function tp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!li(n[t],e[t]))return!1;return!0}function np(n,e,t,i,r,s){if(is=s,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Kl.current=n===null||n.memoizedState===null?PM:LM,n=t(i,r),ta){s=0;do{if(ta=!1,Ea=0,25<=s)throw Error(me(301));s+=1,Kt=zt=null,e.updateQueue=null,Kl.current=NM,n=t(i,r)}while(ta)}if(Kl.current=Tc,e=zt!==null&&zt.next!==null,is=0,Kt=zt=bt=null,Ec=!1,e)throw Error(me(300));return n}function ip(){var n=Ea!==0;return Ea=0,n}function gi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?bt.memoizedState=Kt=n:Kt=Kt.next=n,Kt}function qn(){if(zt===null){var n=bt.alternate;n=n!==null?n.memoizedState:null}else n=zt.next;var e=Kt===null?bt.memoizedState:Kt.next;if(e!==null)Kt=e,zt=n;else{if(n===null)throw Error(me(310));zt=n,n={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Kt===null?bt.memoizedState=Kt=n:Kt=Kt.next=n}return Kt}function Ta(n,e){return typeof e=="function"?e(n):e}function Pu(n){var e=qn(),t=e.queue;if(t===null)throw Error(me(311));t.lastRenderedReducer=n;var i=zt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((is&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,bt.lanes|=u,rs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,li(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,bt.lanes|=s,rs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Lu(n){var e=qn(),t=e.queue;if(t===null)throw Error(me(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);li(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function k_(){}function B_(n,e){var t=bt,i=qn(),r=e(),s=!li(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,rp(H_.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Kt!==null&&Kt.memoizedState.tag&1){if(t.flags|=2048,wa(9,V_.bind(null,t,i,r,e),void 0,null),qt===null)throw Error(me(349));is&30||z_(t,e,r)}return r}function z_(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function V_(n,e,t,i){e.value=t,e.getSnapshot=i,G_(e)&&W_(n)}function H_(n,e,t){return t(function(){G_(e)&&W_(n)})}function G_(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!li(n,t)}catch{return!0}}function W_(n){var e=Zi(n,1);e!==null&&oi(e,n,1,-1)}function Ym(n){var e=gi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:n},e.queue=n,n=n.dispatch=CM.bind(null,bt,n),[e.memoizedState,n]}function wa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function X_(){return qn().memoizedState}function ql(n,e,t,i){var r=gi();bt.flags|=n,r.memoizedState=wa(1|e,t,void 0,i===void 0?null:i)}function Kc(n,e,t,i){var r=qn();i=i===void 0?null:i;var s=void 0;if(zt!==null){var o=zt.memoizedState;if(s=o.destroy,i!==null&&tp(i,o.deps)){r.memoizedState=wa(e,t,s,i);return}}bt.flags|=n,r.memoizedState=wa(1|e,t,s,i)}function Km(n,e){return ql(8390656,8,n,e)}function rp(n,e){return Kc(2048,8,n,e)}function Y_(n,e){return Kc(4,2,n,e)}function K_(n,e){return Kc(4,4,n,e)}function q_(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function $_(n,e,t){return t=t!=null?t.concat([n]):null,Kc(4,4,q_.bind(null,e,n),t)}function sp(){}function j_(n,e){var t=qn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&tp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Z_(n,e){var t=qn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&tp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function J_(n,e,t){return is&21?(li(t,e)||(t=i_(),bt.lanes|=t,rs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,yn=!0),n.memoizedState=t)}function bM(n,e){var t=ht;ht=t!==0&&4>t?t:4,n(!0);var i=Cu.transition;Cu.transition={};try{n(!1),e()}finally{ht=t,Cu.transition=i}}function Q_(){return qn().memoizedState}function RM(n,e,t){var i=Lr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},ex(n))tx(e,t);else if(t=U_(n,e,t,i),t!==null){var r=mn();oi(t,n,i,r),nx(t,e,i)}}function CM(n,e,t){var i=Lr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(ex(n))tx(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,li(a,o)){var l=e.interleaved;l===null?(r.next=r,jh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=U_(n,e,r,i),t!==null&&(r=mn(),oi(t,n,i,r),nx(t,e,i))}}function ex(n){var e=n.alternate;return n===bt||e!==null&&e===bt}function tx(n,e){ta=Ec=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function nx(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Fh(n,t)}}var Tc={readContext:Kn,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},PM={readContext:Kn,useCallback:function(n,e){return gi().memoizedState=[n,e===void 0?null:e],n},useContext:Kn,useEffect:Km,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,ql(4194308,4,q_.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ql(4194308,4,n,e)},useInsertionEffect:function(n,e){return ql(4,2,n,e)},useMemo:function(n,e){var t=gi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=gi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=RM.bind(null,bt,n),[i.memoizedState,n]},useRef:function(n){var e=gi();return n={current:n},e.memoizedState=n},useState:Ym,useDebugValue:sp,useDeferredValue:function(n){return gi().memoizedState=n},useTransition:function(){var n=Ym(!1),e=n[0];return n=bM.bind(null,n[1]),gi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=bt,r=gi();if(wt){if(t===void 0)throw Error(me(407));t=t()}else{if(t=e(),qt===null)throw Error(me(349));is&30||z_(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Km(H_.bind(null,i,s,n),[n]),i.flags|=2048,wa(9,V_.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=gi(),e=qt.identifierPrefix;if(wt){var t=Gi,i=Hi;t=(i&~(1<<32-si(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ea++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=AM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},LM={readContext:Kn,useCallback:j_,useContext:Kn,useEffect:rp,useImperativeHandle:$_,useInsertionEffect:Y_,useLayoutEffect:K_,useMemo:Z_,useReducer:Pu,useRef:X_,useState:function(){return Pu(Ta)},useDebugValue:sp,useDeferredValue:function(n){var e=qn();return J_(e,zt.memoizedState,n)},useTransition:function(){var n=Pu(Ta)[0],e=qn().memoizedState;return[n,e]},useMutableSource:k_,useSyncExternalStore:B_,useId:Q_,unstable_isNewReconciler:!1},NM={readContext:Kn,useCallback:j_,useContext:Kn,useEffect:rp,useImperativeHandle:$_,useInsertionEffect:Y_,useLayoutEffect:K_,useMemo:Z_,useReducer:Lu,useRef:X_,useState:function(){return Lu(Ta)},useDebugValue:sp,useDeferredValue:function(n){var e=qn();return zt===null?e.memoizedState=n:J_(e,zt.memoizedState,n)},useTransition:function(){var n=Lu(Ta)[0],e=qn().memoizedState;return[n,e]},useMutableSource:k_,useSyncExternalStore:B_,useId:Q_,unstable_isNewReconciler:!1};function Qn(n,e){if(n&&n.defaultProps){e=Ct({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function hd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ct({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var qc={isMounted:function(n){return(n=n._reactInternals)?cs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=mn(),r=Lr(n),s=Yi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Cr(n,s,r),e!==null&&(oi(e,n,r,i),Yl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=mn(),r=Lr(n),s=Yi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Cr(n,s,r),e!==null&&(oi(e,n,r,i),Yl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=mn(),i=Lr(n),r=Yi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Cr(n,r,i),e!==null&&(oi(e,n,i,t),Yl(e,n,i))}};function qm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!va(t,i)||!va(r,s):!0}function ix(n,e,t){var i=!1,r=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Kn(s):(r=Mn(e)?ts:un.current,i=e.contextTypes,s=(i=i!=null)?eo(n,r):Dr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function $m(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&qc.enqueueReplaceState(e,e.state,null)}function pd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Zh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Kn(s):(s=Mn(e)?ts:un.current,r.context=eo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&qc.enqueueReplaceState(r,r.state,null),Sc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ro(n,e){try{var t="",i=e;do t+=oS(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Nu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function md(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var IM=typeof WeakMap=="function"?WeakMap:Map;function rx(n,e,t){t=Yi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ac||(Ac=!0,wd=i),md(n,e)},t}function sx(n,e,t){t=Yi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){md(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){md(n,e),typeof i!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function jm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new IM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=KM.bind(null,n,e,t),e.then(n,n))}function Zm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Jm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Yi(-1,1),e.tag=2,Cr(t,e,1))),t.lanes|=1),n)}var DM=nr.ReactCurrentOwner,yn=!1;function pn(n,e,t,i){e.child=n===null?D_(e,null,t,i):no(e,n.child,t,i)}function Qm(n,e,t,i,r){t=t.render;var s=e.ref;return Ks(e,r),i=np(n,e,t,i,s,r),t=ip(),n!==null&&!yn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ji(n,e,r)):(wt&&t&&Wh(e),e.flags|=1,pn(n,e,i,r),e.child)}function eg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!hp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,ox(n,e,s,i,r)):(n=Jl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:va,t(o,i)&&n.ref===e.ref)return Ji(n,e,r)}return e.flags|=1,n=Nr(s,i),n.ref=e.ref,n.return=e,e.child=n}function ox(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(va(s,i)&&n.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(yn=!0);else return e.lanes=n.lanes,Ji(n,e,r)}return gd(n,e,t,i,r)}function ax(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},St(Hs,Cn),Cn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,St(Hs,Cn),Cn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,St(Hs,Cn),Cn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,St(Hs,Cn),Cn|=i;return pn(n,e,r,t),e.child}function lx(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function gd(n,e,t,i,r){var s=Mn(t)?ts:un.current;return s=eo(e,s),Ks(e,r),t=np(n,e,t,i,s,r),i=ip(),n!==null&&!yn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ji(n,e,r)):(wt&&i&&Wh(e),e.flags|=1,pn(n,e,t,r),e.child)}function tg(n,e,t,i,r){if(Mn(t)){var s=!0;gc(e)}else s=!1;if(Ks(e,r),e.stateNode===null)$l(n,e),ix(e,t,i),pd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Kn(c):(c=Mn(t)?ts:un.current,c=eo(e,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&$m(e,o,i,c),vr=!1;var f=e.memoizedState;o.state=f,Sc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Sn.current||vr?(typeof u=="function"&&(hd(e,t,u,i),l=e.memoizedState),(a=vr||qm(e,t,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,F_(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Qn(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Kn(l):(l=Mn(t)?ts:un.current,l=eo(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&$m(e,o,i,l),vr=!1,f=e.memoizedState,o.state=f,Sc(e,i,o,r);var m=e.memoizedState;a!==d||f!==m||Sn.current||vr?(typeof p=="function"&&(hd(e,t,p,i),m=e.memoizedState),(c=vr||qm(e,t,c,i,f,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return vd(n,e,t,i,s,r)}function vd(n,e,t,i,r,s){lx(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&zm(e,t,!1),Ji(n,e,s);i=e.stateNode,DM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=no(e,n.child,null,s),e.child=no(e,null,a,s)):pn(n,e,a,s),e.memoizedState=i.state,r&&zm(e,t,!0),e.child}function cx(n){var e=n.stateNode;e.pendingContext?Bm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Bm(n,e.context,!1),Jh(n,e.containerInfo)}function ng(n,e,t,i,r){return to(),Yh(r),e.flags|=256,pn(n,e,t,i),e.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function xd(n){return{baseLanes:n,cachePool:null,transitions:null}}function ux(n,e,t){var i=e.pendingProps,r=At.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),St(At,r&1),n===null)return fd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zc(o,i,0,null),n=es(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=xd(t),e.memoizedState=_d,n):op(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return UM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Nr(a,s):(s=es(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?xd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=_d,i}return s=n.child,n=s.sibling,i=Nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function op(n,e){return e=Zc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function nl(n,e,t,i){return i!==null&&Yh(i),no(e,n.child,null,t),n=op(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function UM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Nu(Error(me(422))),nl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Zc({mode:"visible",children:i.children},r,0,null),s=es(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&no(e,n.child,null,o),e.child.memoizedState=xd(o),e.memoizedState=_d,s);if(!(e.mode&1))return nl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(me(419)),i=Nu(s,i,void 0),nl(n,e,o,i)}if(a=(o&n.childLanes)!==0,yn||a){if(i=qt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Zi(n,r),oi(i,n,r,-1))}return dp(),i=Nu(Error(me(421))),nl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=qM.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Ln=Rr(r.nextSibling),Nn=e,wt=!0,ti=null,n!==null&&(Vn[Hn++]=Hi,Vn[Hn++]=Gi,Vn[Hn++]=ns,Hi=n.id,Gi=n.overflow,ns=e),e=op(e,i.children),e.flags|=4096,e)}function ig(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),dd(n.return,e,t)}function Iu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function fx(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(pn(n,e,i.children,t),i=At.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ig(n,t,e);else if(n.tag===19)ig(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(St(At,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Mc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Iu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Mc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Iu(e,!0,t,null,s);break;case"together":Iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $l(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ji(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),rs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(me(153));if(e.child!==null){for(n=e.child,t=Nr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Nr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function FM(n,e,t){switch(e.tag){case 3:cx(e),to();break;case 5:O_(e);break;case 1:Mn(e.type)&&gc(e);break;case 4:Jh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;St(xc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(St(At,At.current&1),e.flags|=128,null):t&e.child.childLanes?ux(n,e,t):(St(At,At.current&1),n=Ji(n,e,t),n!==null?n.sibling:null);St(At,At.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return fx(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),St(At,At.current),i)break;return null;case 22:case 23:return e.lanes=0,ax(n,e,t)}return Ji(n,e,t)}var dx,yd,hx,px;dx=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};yd=function(){};hx=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Zr(Ti.current);var s=null;switch(t){case"input":r=Hf(n,r),i=Hf(n,i),s=[];break;case"select":r=Ct({},r,{value:void 0}),i=Ct({},i,{value:void 0}),s=[];break;case"textarea":r=Xf(n,r),i=Xf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=pc)}Kf(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ua.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ua.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Mt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};px=function(n,e,t,i){t!==i&&(e.flags|=4)};function bo(n,e){if(!wt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function rn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function OM(n,e,t){var i=e.pendingProps;switch(Xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(e),null;case 1:return Mn(e.type)&&mc(),rn(e),null;case 3:return i=e.stateNode,io(),Tt(Sn),Tt(un),ep(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(el(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ti!==null&&(Rd(ti),ti=null))),yd(n,e),rn(e),null;case 5:Qh(e);var r=Zr(Ma.current);if(t=e.type,n!==null&&e.stateNode!=null)hx(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(me(166));return rn(e),null}if(n=Zr(Ti.current),el(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[xi]=e,i[ya]=s,n=(e.mode&1)!==0,t){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(r=0;r<Yo.length;r++)Mt(Yo[r],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":dm(i,s),Mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Mt("invalid",i);break;case"textarea":pm(i,s),Mt("invalid",i)}Kf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,a,n),r=["children",""+a]):ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Mt("scroll",i)}switch(t){case"input":Xa(i),hm(i,s,!0);break;case"textarea":Xa(i),mm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=pc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Hv(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[xi]=e,n[ya]=i,dx(n,e,!1,!1),e.stateNode=n;e:{switch(o=qf(t,i),t){case"dialog":Mt("cancel",n),Mt("close",n),r=i;break;case"iframe":case"object":case"embed":Mt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Yo.length;r++)Mt(Yo[r],n);r=i;break;case"source":Mt("error",n),r=i;break;case"img":case"image":case"link":Mt("error",n),Mt("load",n),r=i;break;case"details":Mt("toggle",n),r=i;break;case"input":dm(n,i),r=Hf(n,i),Mt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ct({},i,{value:void 0}),Mt("invalid",n);break;case"textarea":pm(n,i),r=Xf(n,i),Mt("invalid",n);break;default:r=i}Kf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Xv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&fa(n,l):typeof l=="number"&&fa(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Mt("scroll",n):l!=null&&Ph(n,s,l,o))}switch(t){case"input":Xa(n),hm(n,i,!1);break;case"textarea":Xa(n),mm(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ir(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Gs(n,!!i.multiple,s,!1):i.defaultValue!=null&&Gs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=pc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rn(e),null;case 6:if(n&&e.stateNode!=null)px(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(me(166));if(t=Zr(Ma.current),Zr(Ti.current),el(e)){if(i=e.stateNode,t=e.memoizedProps,i[xi]=e,(s=i.nodeValue!==t)&&(n=Nn,n!==null))switch(n.tag){case 3:Qa(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Qa(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[xi]=e,e.stateNode=i}return rn(e),null;case 13:if(Tt(At),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(wt&&Ln!==null&&e.mode&1&&!(e.flags&128))N_(),to(),e.flags|=98560,s=!1;else if(s=el(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(me(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(me(317));s[xi]=e}else to(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rn(e),s=!1}else ti!==null&&(Rd(ti),ti=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||At.current&1?Vt===0&&(Vt=3):dp())),e.updateQueue!==null&&(e.flags|=4),rn(e),null);case 4:return io(),yd(n,e),n===null&&_a(e.stateNode.containerInfo),rn(e),null;case 10:return $h(e.type._context),rn(e),null;case 17:return Mn(e.type)&&mc(),rn(e),null;case 19:if(Tt(At),s=e.memoizedState,s===null)return rn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)bo(s,!1);else{if(Vt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Mc(n),o!==null){for(e.flags|=128,bo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return St(At,At.current&1|2),e.child}n=n.sibling}s.tail!==null&&Ft()>so&&(e.flags|=128,i=!0,bo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Mc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!wt)return rn(e),null}else 2*Ft()-s.renderingStartTime>so&&t!==1073741824&&(e.flags|=128,i=!0,bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ft(),e.sibling=null,t=At.current,St(At,i?t&1|2:t&1),e):(rn(e),null);case 22:case 23:return fp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Cn&1073741824&&(rn(e),e.subtreeFlags&6&&(e.flags|=8192)):rn(e),null;case 24:return null;case 25:return null}throw Error(me(156,e.tag))}function kM(n,e){switch(Xh(e),e.tag){case 1:return Mn(e.type)&&mc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return io(),Tt(Sn),Tt(un),ep(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Qh(e),null;case 13:if(Tt(At),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(me(340));to()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Tt(At),null;case 4:return io(),null;case 10:return $h(e.type._context),null;case 22:case 23:return fp(),null;case 24:return null;default:return null}}var il=!1,an=!1,BM=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Vs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){It(n,e,i)}else t.current=null}function Sd(n,e,t){try{t()}catch(i){It(n,e,i)}}var rg=!1;function zM(n,e){if(rd=fc,n=x_(),Gh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(sd={focusedElem:n,selectionRange:t},fc=!1,Ie=e;Ie!==null;)if(e=Ie,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ie=n;else for(;Ie!==null;){e=Ie;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var g=m.memoizedProps,v=m.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:Qn(e.type,g),v);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(me(163))}}catch(x){It(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,Ie=n;break}Ie=e.return}return m=rg,rg=!1,m}function na(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Sd(e,t,s)}r=r.next}while(r!==i)}}function $c(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Md(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function mx(n){var e=n.alternate;e!==null&&(n.alternate=null,mx(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[xi],delete e[ya],delete e[ld],delete e[MM],delete e[EM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function gx(n){return n.tag===5||n.tag===3||n.tag===4}function sg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||gx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ed(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=pc));else if(i!==4&&(n=n.child,n!==null))for(Ed(n,e,t),n=n.sibling;n!==null;)Ed(n,e,t),n=n.sibling}function Td(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Td(n,e,t),n=n.sibling;n!==null;)Td(n,e,t),n=n.sibling}var jt=null,ei=!1;function lr(n,e,t){for(t=t.child;t!==null;)vx(n,e,t),t=t.sibling}function vx(n,e,t){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(Vc,t)}catch{}switch(t.tag){case 5:an||Vs(t,e);case 6:var i=jt,r=ei;jt=null,lr(n,e,t),jt=i,ei=r,jt!==null&&(ei?(n=jt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):jt.removeChild(t.stateNode));break;case 18:jt!==null&&(ei?(n=jt,t=t.stateNode,n.nodeType===8?Au(n.parentNode,t):n.nodeType===1&&Au(n,t),ma(n)):Au(jt,t.stateNode));break;case 4:i=jt,r=ei,jt=t.stateNode.containerInfo,ei=!0,lr(n,e,t),jt=i,ei=r;break;case 0:case 11:case 14:case 15:if(!an&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sd(t,e,o),r=r.next}while(r!==i)}lr(n,e,t);break;case 1:if(!an&&(Vs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){It(t,e,a)}lr(n,e,t);break;case 21:lr(n,e,t);break;case 22:t.mode&1?(an=(i=an)||t.memoizedState!==null,lr(n,e,t),an=i):lr(n,e,t);break;default:lr(n,e,t)}}function og(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new BM),e.forEach(function(i){var r=$M.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function $n(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,ei=!1;break e;case 3:jt=a.stateNode.containerInfo,ei=!0;break e;case 4:jt=a.stateNode.containerInfo,ei=!0;break e}a=a.return}if(jt===null)throw Error(me(160));vx(s,o,r),jt=null,ei=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){It(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_x(e,n),e=e.sibling}function _x(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if($n(e,n),hi(n),i&4){try{na(3,n,n.return),$c(3,n)}catch(g){It(n,n.return,g)}try{na(5,n,n.return)}catch(g){It(n,n.return,g)}}break;case 1:$n(e,n),hi(n),i&512&&t!==null&&Vs(t,t.return);break;case 5:if($n(e,n),hi(n),i&512&&t!==null&&Vs(t,t.return),n.flags&32){var r=n.stateNode;try{fa(r,"")}catch(g){It(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&zv(r,s),qf(a,o);var c=qf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Xv(r,d):u==="dangerouslySetInnerHTML"?Gv(r,d):u==="children"?fa(r,d):Ph(r,u,d,c)}switch(a){case"input":Gf(r,s);break;case"textarea":Vv(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Gs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Gs(r,!!s.multiple,s.defaultValue,!0):Gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ya]=s}catch(g){It(n,n.return,g)}}break;case 6:if($n(e,n),hi(n),i&4){if(n.stateNode===null)throw Error(me(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){It(n,n.return,g)}}break;case 3:if($n(e,n),hi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ma(e.containerInfo)}catch(g){It(n,n.return,g)}break;case 4:$n(e,n),hi(n);break;case 13:$n(e,n),hi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(cp=Ft())),i&4&&og(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(an=(c=an)||u,$n(e,n),an=c):$n(e,n),hi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Ie=n,u=n.child;u!==null;){for(d=Ie=u;Ie!==null;){switch(f=Ie,p=f.child,f.tag){case 0:case 11:case 14:case 15:na(4,f,f.return);break;case 1:Vs(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(g){It(i,t,g)}}break;case 5:Vs(f,f.return);break;case 22:if(f.memoizedState!==null){lg(d);continue}}p!==null?(p.return=f,Ie=p):lg(d)}u=u.sibling}e:for(u=null,d=n;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Wv("display",o))}catch(g){It(n,n.return,g)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(g){It(n,n.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:$n(e,n),hi(n),i&4&&og(n);break;case 21:break;default:$n(e,n),hi(n)}}function hi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(gx(t)){var i=t;break e}t=t.return}throw Error(me(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(fa(r,""),i.flags&=-33);var s=sg(n);Td(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=sg(n);Ed(n,a,o);break;default:throw Error(me(161))}}catch(l){It(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function VM(n,e,t){Ie=n,xx(n)}function xx(n,e,t){for(var i=(n.mode&1)!==0;Ie!==null;){var r=Ie,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||il;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||an;a=il;var c=an;if(il=o,(an=l)&&!c)for(Ie=r;Ie!==null;)o=Ie,l=o.child,o.tag===22&&o.memoizedState!==null?cg(r):l!==null?(l.return=o,Ie=l):cg(r);for(;s!==null;)Ie=s,xx(s),s=s.sibling;Ie=r,il=a,an=c}ag(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ie=s):ag(n)}}function ag(n){for(;Ie!==null;){var e=Ie;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:an||$c(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!an)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Qn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Xm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ma(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(me(163))}an||e.flags&512&&Md(e)}catch(f){It(e,e.return,f)}}if(e===n){Ie=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ie=t;break}Ie=e.return}}function lg(n){for(;Ie!==null;){var e=Ie;if(e===n){Ie=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ie=t;break}Ie=e.return}}function cg(n){for(;Ie!==null;){var e=Ie;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{$c(4,e)}catch(l){It(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){It(e,r,l)}}var s=e.return;try{Md(e)}catch(l){It(e,s,l)}break;case 5:var o=e.return;try{Md(e)}catch(l){It(e,o,l)}}}catch(l){It(e,e.return,l)}if(e===n){Ie=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ie=a;break}Ie=e.return}}var HM=Math.ceil,wc=nr.ReactCurrentDispatcher,ap=nr.ReactCurrentOwner,Yn=nr.ReactCurrentBatchConfig,lt=0,qt=null,Bt=null,Jt=0,Cn=0,Hs=Or(0),Vt=0,Aa=null,rs=0,jc=0,lp=0,ia=null,xn=null,cp=0,so=1/0,Bi=null,Ac=!1,wd=null,Pr=null,rl=!1,Mr=null,bc=0,ra=0,Ad=null,jl=-1,Zl=0;function mn(){return lt&6?Ft():jl!==-1?jl:jl=Ft()}function Lr(n){return n.mode&1?lt&2&&Jt!==0?Jt&-Jt:wM.transition!==null?(Zl===0&&(Zl=i_()),Zl):(n=ht,n!==0||(n=window.event,n=n===void 0?16:u_(n.type)),n):1}function oi(n,e,t,i){if(50<ra)throw ra=0,Ad=null,Error(me(185));Fa(n,t,i),(!(lt&2)||n!==qt)&&(n===qt&&(!(lt&2)&&(jc|=t),Vt===4&&xr(n,Jt)),En(n,i),t===1&&lt===0&&!(e.mode&1)&&(so=Ft()+500,Yc&&kr()))}function En(n,e){var t=n.callbackNode;wS(n,e);var i=uc(n,n===qt?Jt:0);if(i===0)t!==null&&_m(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&_m(t),e===1)n.tag===0?TM(ug.bind(null,n)):C_(ug.bind(null,n)),yM(function(){!(lt&6)&&kr()}),t=null;else{switch(r_(i)){case 1:t=Uh;break;case 4:t=t_;break;case 16:t=cc;break;case 536870912:t=n_;break;default:t=cc}t=bx(t,yx.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function yx(n,e){if(jl=-1,Zl=0,lt&6)throw Error(me(327));var t=n.callbackNode;if(qs()&&n.callbackNode!==t)return null;var i=uc(n,n===qt?Jt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Rc(n,i);else{e=i;var r=lt;lt|=2;var s=Mx();(qt!==n||Jt!==e)&&(Bi=null,so=Ft()+500,Qr(n,e));do try{XM();break}catch(a){Sx(n,a)}while(!0);qh(),wc.current=s,lt=r,Bt!==null?e=0:(qt=null,Jt=0,e=Vt)}if(e!==0){if(e===2&&(r=Qf(n),r!==0&&(i=r,e=bd(n,r))),e===1)throw t=Aa,Qr(n,0),xr(n,i),En(n,Ft()),t;if(e===6)xr(n,i);else{if(r=n.current.alternate,!(i&30)&&!GM(r)&&(e=Rc(n,i),e===2&&(s=Qf(n),s!==0&&(i=s,e=bd(n,s))),e===1))throw t=Aa,Qr(n,0),xr(n,i),En(n,Ft()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(me(345));case 2:Yr(n,xn,Bi);break;case 3:if(xr(n,i),(i&130023424)===i&&(e=cp+500-Ft(),10<e)){if(uc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){mn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=ad(Yr.bind(null,n,xn,Bi),e);break}Yr(n,xn,Bi);break;case 4:if(xr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-si(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*HM(i/1960))-i,10<i){n.timeoutHandle=ad(Yr.bind(null,n,xn,Bi),i);break}Yr(n,xn,Bi);break;case 5:Yr(n,xn,Bi);break;default:throw Error(me(329))}}}return En(n,Ft()),n.callbackNode===t?yx.bind(null,n):null}function bd(n,e){var t=ia;return n.current.memoizedState.isDehydrated&&(Qr(n,e).flags|=256),n=Rc(n,e),n!==2&&(e=xn,xn=t,e!==null&&Rd(e)),n}function Rd(n){xn===null?xn=n:xn.push.apply(xn,n)}function GM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!li(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(n,e){for(e&=~lp,e&=~jc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-si(e),i=1<<t;n[t]=-1,e&=~i}}function ug(n){if(lt&6)throw Error(me(327));qs();var e=uc(n,0);if(!(e&1))return En(n,Ft()),null;var t=Rc(n,e);if(n.tag!==0&&t===2){var i=Qf(n);i!==0&&(e=i,t=bd(n,i))}if(t===1)throw t=Aa,Qr(n,0),xr(n,e),En(n,Ft()),t;if(t===6)throw Error(me(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Yr(n,xn,Bi),En(n,Ft()),null}function up(n,e){var t=lt;lt|=1;try{return n(e)}finally{lt=t,lt===0&&(so=Ft()+500,Yc&&kr())}}function ss(n){Mr!==null&&Mr.tag===0&&!(lt&6)&&qs();var e=lt;lt|=1;var t=Yn.transition,i=ht;try{if(Yn.transition=null,ht=1,n)return n()}finally{ht=i,Yn.transition=t,lt=e,!(lt&6)&&kr()}}function fp(){Cn=Hs.current,Tt(Hs)}function Qr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,xM(t)),Bt!==null)for(t=Bt.return;t!==null;){var i=t;switch(Xh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&mc();break;case 3:io(),Tt(Sn),Tt(un),ep();break;case 5:Qh(i);break;case 4:io();break;case 13:Tt(At);break;case 19:Tt(At);break;case 10:$h(i.type._context);break;case 22:case 23:fp()}t=t.return}if(qt=n,Bt=n=Nr(n.current,null),Jt=Cn=e,Vt=0,Aa=null,lp=jc=rs=0,xn=ia=null,jr!==null){for(e=0;e<jr.length;e++)if(t=jr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}jr=null}return n}function Sx(n,e){do{var t=Bt;try{if(qh(),Kl.current=Tc,Ec){for(var i=bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ec=!1}if(is=0,Kt=zt=bt=null,ta=!1,Ea=0,ap.current=null,t===null||t.return===null){Vt=1,Aa=e,Bt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Zm(o);if(p!==null){p.flags&=-257,Jm(p,o,a,s,e),p.mode&1&&jm(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var g=new Set;g.add(l),e.updateQueue=g}else m.add(l);break e}else{if(!(e&1)){jm(s,c,e),dp();break e}l=Error(me(426))}}else if(wt&&a.mode&1){var v=Zm(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Jm(v,o,a,s,e),Yh(ro(l,a));break e}}s=l=ro(l,a),Vt!==4&&(Vt=2),ia===null?ia=[s]:ia.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=rx(s,l,e);Wm(s,h);break e;case 1:a=l;var _=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Pr===null||!Pr.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=sx(s,a,e);Wm(s,x);break e}}s=s.return}while(s!==null)}Tx(t)}catch(E){e=E,Bt===t&&t!==null&&(Bt=t=t.return);continue}break}while(!0)}function Mx(){var n=wc.current;return wc.current=Tc,n===null?Tc:n}function dp(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),qt===null||!(rs&268435455)&&!(jc&268435455)||xr(qt,Jt)}function Rc(n,e){var t=lt;lt|=2;var i=Mx();(qt!==n||Jt!==e)&&(Bi=null,Qr(n,e));do try{WM();break}catch(r){Sx(n,r)}while(!0);if(qh(),lt=t,wc.current=i,Bt!==null)throw Error(me(261));return qt=null,Jt=0,Vt}function WM(){for(;Bt!==null;)Ex(Bt)}function XM(){for(;Bt!==null&&!gS();)Ex(Bt)}function Ex(n){var e=Ax(n.alternate,n,Cn);n.memoizedProps=n.pendingProps,e===null?Tx(n):Bt=e,ap.current=null}function Tx(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=kM(t,e),t!==null){t.flags&=32767,Bt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Vt=6,Bt=null;return}}else if(t=OM(t,e,Cn),t!==null){Bt=t;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=n}while(e!==null);Vt===0&&(Vt=5)}function Yr(n,e,t){var i=ht,r=Yn.transition;try{Yn.transition=null,ht=1,YM(n,e,t,i)}finally{Yn.transition=r,ht=i}return null}function YM(n,e,t,i){do qs();while(Mr!==null);if(lt&6)throw Error(me(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(me(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(AS(n,s),n===qt&&(Bt=qt=null,Jt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||rl||(rl=!0,bx(cc,function(){return qs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Yn.transition,Yn.transition=null;var o=ht;ht=1;var a=lt;lt|=4,ap.current=null,zM(n,t),_x(t,n),dM(sd),fc=!!rd,sd=rd=null,n.current=t,VM(t),vS(),lt=a,ht=o,Yn.transition=s}else n.current=t;if(rl&&(rl=!1,Mr=n,bc=r),s=n.pendingLanes,s===0&&(Pr=null),yS(t.stateNode),En(n,Ft()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ac)throw Ac=!1,n=wd,wd=null,n;return bc&1&&n.tag!==0&&qs(),s=n.pendingLanes,s&1?n===Ad?ra++:(ra=0,Ad=n):ra=0,kr(),null}function qs(){if(Mr!==null){var n=r_(bc),e=Yn.transition,t=ht;try{if(Yn.transition=null,ht=16>n?16:n,Mr===null)var i=!1;else{if(n=Mr,Mr=null,bc=0,lt&6)throw Error(me(331));var r=lt;for(lt|=4,Ie=n.current;Ie!==null;){var s=Ie,o=s.child;if(Ie.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ie=c;Ie!==null;){var u=Ie;switch(u.tag){case 0:case 11:case 15:na(8,u,s)}var d=u.child;if(d!==null)d.return=u,Ie=d;else for(;Ie!==null;){u=Ie;var f=u.sibling,p=u.return;if(mx(u),u===c){Ie=null;break}if(f!==null){f.return=p,Ie=f;break}Ie=p}}}var m=s.alternate;if(m!==null){var g=m.child;if(g!==null){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(g!==null)}}Ie=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ie=o;else e:for(;Ie!==null;){if(s=Ie,s.flags&2048)switch(s.tag){case 0:case 11:case 15:na(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ie=h;break e}Ie=s.return}}var _=n.current;for(Ie=_;Ie!==null;){o=Ie;var M=o.child;if(o.subtreeFlags&2064&&M!==null)M.return=o,Ie=M;else e:for(o=_;Ie!==null;){if(a=Ie,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$c(9,a)}}catch(E){It(a,a.return,E)}if(a===o){Ie=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Ie=x;break e}Ie=a.return}}if(lt=r,kr(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(Vc,n)}catch{}i=!0}return i}finally{ht=t,Yn.transition=e}}return!1}function fg(n,e,t){e=ro(t,e),e=rx(n,e,1),n=Cr(n,e,1),e=mn(),n!==null&&(Fa(n,1,e),En(n,e))}function It(n,e,t){if(n.tag===3)fg(n,n,t);else for(;e!==null;){if(e.tag===3){fg(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pr===null||!Pr.has(i))){n=ro(t,n),n=sx(e,n,1),e=Cr(e,n,1),n=mn(),e!==null&&(Fa(e,1,n),En(e,n));break}}e=e.return}}function KM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=mn(),n.pingedLanes|=n.suspendedLanes&t,qt===n&&(Jt&t)===t&&(Vt===4||Vt===3&&(Jt&130023424)===Jt&&500>Ft()-cp?Qr(n,0):lp|=t),En(n,e)}function wx(n,e){e===0&&(n.mode&1?(e=qa,qa<<=1,!(qa&130023424)&&(qa=4194304)):e=1);var t=mn();n=Zi(n,e),n!==null&&(Fa(n,e,t),En(n,t))}function qM(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),wx(n,t)}function $M(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(me(314))}i!==null&&i.delete(e),wx(n,t)}var Ax;Ax=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Sn.current)yn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return yn=!1,FM(n,e,t);yn=!!(n.flags&131072)}else yn=!1,wt&&e.flags&1048576&&P_(e,_c,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;$l(n,e),n=e.pendingProps;var r=eo(e,un.current);Ks(e,t),r=np(null,e,i,n,r,t);var s=ip();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(s=!0,gc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zh(e),r.updater=qc,e.stateNode=r,r._reactInternals=e,pd(e,i,n,t),e=vd(null,e,i,!0,s,t)):(e.tag=0,wt&&s&&Wh(e),pn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch($l(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ZM(i),n=Qn(i,n),r){case 0:e=gd(null,e,i,n,t);break e;case 1:e=tg(null,e,i,n,t);break e;case 11:e=Qm(null,e,i,n,t);break e;case 14:e=eg(null,e,i,Qn(i.type,n),t);break e}throw Error(me(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),gd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),tg(n,e,i,r,t);case 3:e:{if(cx(e),n===null)throw Error(me(387));i=e.pendingProps,s=e.memoizedState,r=s.element,F_(n,e),Sc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ro(Error(me(423)),e),e=ng(n,e,i,t,r);break e}else if(i!==r){r=ro(Error(me(424)),e),e=ng(n,e,i,t,r);break e}else for(Ln=Rr(e.stateNode.containerInfo.firstChild),Nn=e,wt=!0,ti=null,t=D_(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(to(),i===r){e=Ji(n,e,t);break e}pn(n,e,i,t)}e=e.child}return e;case 5:return O_(e),n===null&&fd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,od(i,r)?o=null:s!==null&&od(i,s)&&(e.flags|=32),lx(n,e),pn(n,e,o,t),e.child;case 6:return n===null&&fd(e),null;case 13:return ux(n,e,t);case 4:return Jh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=no(e,null,i,t):pn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Qm(n,e,i,r,t);case 7:return pn(n,e,e.pendingProps,t),e.child;case 8:return pn(n,e,e.pendingProps.children,t),e.child;case 12:return pn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,St(xc,i._currentValue),i._currentValue=o,s!==null)if(li(s.value,o)){if(s.children===r.children&&!Sn.current){e=Ji(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Yi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),dd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(me(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),dd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ks(e,t),r=Kn(r),i=i(r),e.flags|=1,pn(n,e,i,t),e.child;case 14:return i=e.type,r=Qn(i,e.pendingProps),r=Qn(i.type,r),eg(n,e,i,r,t);case 15:return ox(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),$l(n,e),e.tag=1,Mn(i)?(n=!0,gc(e)):n=!1,Ks(e,t),ix(e,i,r),pd(e,i,r,t),vd(null,e,i,!0,n,t);case 19:return fx(n,e,t);case 22:return ax(n,e,t)}throw Error(me(156,e.tag))};function bx(n,e){return e_(n,e)}function jM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(n,e,t,i){return new jM(n,e,t,i)}function hp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ZM(n){if(typeof n=="function")return hp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Nh)return 11;if(n===Ih)return 14}return 2}function Nr(n,e){var t=n.alternate;return t===null?(t=Gn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Jl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")hp(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ns:return es(t.children,r,s,e);case Lh:o=8,r|=8;break;case kf:return n=Gn(12,t,e,r|2),n.elementType=kf,n.lanes=s,n;case Bf:return n=Gn(13,t,e,r),n.elementType=Bf,n.lanes=s,n;case zf:return n=Gn(19,t,e,r),n.elementType=zf,n.lanes=s,n;case Ov:return Zc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Uv:o=10;break e;case Fv:o=9;break e;case Nh:o=11;break e;case Ih:o=14;break e;case gr:o=16,i=null;break e}throw Error(me(130,n==null?n:typeof n,""))}return e=Gn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function es(n,e,t,i){return n=Gn(7,n,i,e),n.lanes=t,n}function Zc(n,e,t,i){return n=Gn(22,n,i,e),n.elementType=Ov,n.lanes=t,n.stateNode={isHidden:!1},n}function Du(n,e,t){return n=Gn(6,n,null,e),n.lanes=t,n}function Uu(n,e,t){return e=Gn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function JM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mu(0),this.expirationTimes=mu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function pp(n,e,t,i,r,s,o,a,l){return n=new JM(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zh(s),n}function QM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ls,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Rx(n){if(!n)return Dr;n=n._reactInternals;e:{if(cs(n)!==n||n.tag!==1)throw Error(me(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(me(171))}if(n.tag===1){var t=n.type;if(Mn(t))return R_(n,t,e)}return e}function Cx(n,e,t,i,r,s,o,a,l){return n=pp(t,i,!0,n,r,s,o,a,l),n.context=Rx(null),t=n.current,i=mn(),r=Lr(t),s=Yi(i,r),s.callback=e??null,Cr(t,s,r),n.current.lanes=r,Fa(n,r,i),En(n,i),n}function Jc(n,e,t,i){var r=e.current,s=mn(),o=Lr(r);return t=Rx(t),e.context===null?e.context=t:e.pendingContext=t,e=Yi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Cr(r,e,o),n!==null&&(oi(n,r,o,s),Yl(n,r,o)),o}function Cc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function dg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function mp(n,e){dg(n,e),(n=n.alternate)&&dg(n,e)}function eE(){return null}var Px=typeof reportError=="function"?reportError:function(n){console.error(n)};function gp(n){this._internalRoot=n}Qc.prototype.render=gp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(me(409));Jc(n,e,null,null)};Qc.prototype.unmount=gp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ss(function(){Jc(null,n,null,null)}),e[ji]=null}};function Qc(n){this._internalRoot=n}Qc.prototype.unstable_scheduleHydration=function(n){if(n){var e=a_();n={blockedOn:null,target:n,priority:e};for(var t=0;t<_r.length&&e!==0&&e<_r[t].priority;t++);_r.splice(t,0,n),t===0&&c_(n)}};function vp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function eu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function hg(){}function tE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Cc(o);s.call(c)}}var o=Cx(e,i,n,0,null,!1,!1,"",hg);return n._reactRootContainer=o,n[ji]=o.current,_a(n.nodeType===8?n.parentNode:n),ss(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Cc(l);a.call(c)}}var l=pp(n,0,!1,null,null,!1,!1,"",hg);return n._reactRootContainer=l,n[ji]=l.current,_a(n.nodeType===8?n.parentNode:n),ss(function(){Jc(e,l,t,i)}),l}function tu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Cc(o);a.call(l)}}Jc(e,o,n,r)}else o=tE(t,e,n,r,i);return Cc(o)}s_=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Xo(e.pendingLanes);t!==0&&(Fh(e,t|1),En(e,Ft()),!(lt&6)&&(so=Ft()+500,kr()))}break;case 13:ss(function(){var i=Zi(n,1);if(i!==null){var r=mn();oi(i,n,1,r)}}),mp(n,1)}};Oh=function(n){if(n.tag===13){var e=Zi(n,134217728);if(e!==null){var t=mn();oi(e,n,134217728,t)}mp(n,134217728)}};o_=function(n){if(n.tag===13){var e=Lr(n),t=Zi(n,e);if(t!==null){var i=mn();oi(t,n,e,i)}mp(n,e)}};a_=function(){return ht};l_=function(n,e){var t=ht;try{return ht=n,e()}finally{ht=t}};jf=function(n,e,t){switch(e){case"input":if(Gf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Xc(i);if(!r)throw Error(me(90));Bv(i),Gf(i,r)}}}break;case"textarea":Vv(n,t);break;case"select":e=t.value,e!=null&&Gs(n,!!t.multiple,e,!1)}};qv=up;$v=ss;var nE={usingClientEntryPoint:!1,Events:[ka,Fs,Xc,Yv,Kv,up]},Ro={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iE={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Jv(n),n===null?null:n.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||eE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{Vc=sl.inject(iE),Ei=sl}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nE;Un.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vp(e))throw Error(me(200));return QM(n,e,null,t)};Un.createRoot=function(n,e){if(!vp(n))throw Error(me(299));var t=!1,i="",r=Px;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=pp(n,1,!1,null,null,t,!1,i,r),n[ji]=e.current,_a(n.nodeType===8?n.parentNode:n),new gp(e)};Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(me(188)):(n=Object.keys(n).join(","),Error(me(268,n)));return n=Jv(e),n=n===null?null:n.stateNode,n};Un.flushSync=function(n){return ss(n)};Un.hydrate=function(n,e,t){if(!eu(e))throw Error(me(200));return tu(null,n,e,!0,t)};Un.hydrateRoot=function(n,e,t){if(!vp(n))throw Error(me(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Px;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Cx(e,null,n,1,t??null,r,!1,s,o),n[ji]=e.current,_a(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Qc(e)};Un.render=function(n,e,t){if(!eu(e))throw Error(me(200));return tu(null,n,e,!1,t)};Un.unmountComponentAtNode=function(n){if(!eu(n))throw Error(me(40));return n._reactRootContainer?(ss(function(){tu(null,null,n,!1,function(){n._reactRootContainer=null,n[ji]=null})}),!0):!1};Un.unstable_batchedUpdates=up;Un.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!eu(t))throw Error(me(200));if(n==null||n._reactInternals===void 0)throw Error(me(38));return tu(n,e,t,!1,i)};Un.version="18.3.1-next-f1338f8080-20240426";function Lx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lx)}catch(n){console.error(n)}}Lx(),Lv.exports=Un;var rE=Lv.exports,pg=rE;Ff.createRoot=pg.createRoot,Ff.hydrateRoot=pg.hydrateRoot;const Nx=""+new URL("cresome_logo-CMRIFPFN.svg",import.meta.url).href;function Ix({value:n,onChange:e}){return ee.jsxs("div",{className:"bg-switcher",children:[ee.jsx("div",{className:"bg-switcher-label",children:"背景"}),ee.jsxs("div",{className:"bg-switcher-options",children:[ee.jsx("button",{type:"button",className:"bg-switcher-btn"+(n==="wave"?" active":""),onClick:()=>e("wave"),children:"波"}),ee.jsx("button",{type:"button",className:"bg-switcher-btn"+(n==="spacewars"?" active":""),onClick:()=>e("spacewars"),children:"宇宙船"}),ee.jsx("button",{type:"button",className:"bg-switcher-btn"+(n==="map"?" active":""),onClick:()=>e("map"),children:"地図"})]})]})}function sE({items:n,onSelect:e,bgMode:t,onBgModeChange:i}){return ee.jsxs("aside",{className:"sidebar",children:[ee.jsxs("div",{className:"brand",children:[ee.jsx("img",{src:Nx,alt:"cresome"}),ee.jsx("div",{className:"brand-name",children:"クリサム株式会社"})]}),ee.jsx("nav",{className:"nav",children:n.map(r=>ee.jsx("div",{className:"nav-item"+(r.active?" active":""),"data-nav":r.id,onClick:()=>e(r.id),children:r.label},r.id))}),ee.jsx(Ix,{value:t,onChange:i}),ee.jsxs("div",{className:"sidebar-foot",children:["© cresome.tech",ee.jsx("br",{}),"Cresome Technical Works"]})]})}function oE({onMenu:n}){return ee.jsxs("div",{className:"topbar",children:[ee.jsx("div",{className:"brand",children:ee.jsx("img",{src:Nx,alt:"cresome"})}),ee.jsx("button",{className:"menu-btn","aria-label":"メニュー",onClick:n,children:ee.jsxs("span",{className:"menu-bars",children:[ee.jsx("span",{}),ee.jsx("span",{}),ee.jsx("span",{})]})})]})}function aE({items:n,open:e,onClose:t,onSelect:i,bgMode:r,onBgModeChange:s}){return ee.jsxs(ee.Fragment,{children:[ee.jsx("div",{className:"scrim"+(e?" open":""),onClick:t}),ee.jsxs("aside",{className:"drawer"+(e?" open":""),children:[ee.jsxs("div",{className:"drawer-top",children:[ee.jsx("div",{className:"brand"}),ee.jsx("button",{className:"drawer-close","aria-label":"閉じる",onClick:t})]}),ee.jsx("nav",{className:"nav",children:n.map(o=>ee.jsx("div",{className:"nav-item"+(o.active?" active":""),"data-nav":o.id,onClick:()=>i(o.id),children:o.label},o.id))}),ee.jsx(Ix,{value:r,onChange:s}),ee.jsx("div",{className:"drawer-foot",children:"© cresome.tech"})]})]})}const mg=Math.PI*2,gg="200, 200, 210",vg=150,_g=1e3,xg=24,lE=240,yg=600,cE=.2,uE=1,fE=40,dE=(n,e,t)=>64*Math.sin(n*.006+e*.002+t*.3)+24*Math.sin(e*.009-t*.22+1.7)+12*Math.sin((n+e)*.004+t*.18+3.9)+6*Math.sin((e-n*.6)*.005-t*.14);function hE(){const n=Et.useRef(null);return Et.useEffect(()=>{const e=n.current;if(!e)return;const t=e.getContext("2d");if(!t)return;const i=window.matchMedia("(prefers-reduced-motion: reduce)");let r=null,s=null,o=0,a=0,l=0;const c=()=>{t.clearRect(0,0,a,l);const v=l*cE,h=a/2;for(let _=_g;_>=vg;_-=xg){const M=yg/_,x=(a/2+20)*_/yg;let E=xg;const w=E*M;w<11?E=11/M:w>42&&(E=42/M);const b=Math.ceil(x/E),y=Math.min(1,(_-vg)/220)*Math.min(1,(_g-_)/320);if(!(y<=.02))for(let C=-b;C<=b;C++){const P=C*E,L=dE(P,_,o),F=h+P*M,j=v+(lE-L)*M;if(F<-20||F>a+20||j<-20||j>l+20)continue;const B=Math.min(1,Math.max(0,(L/fE+1)/2)),z=y*(.16+.52*B);if(z<=.02)continue;const Q=Math.min(1.8*M,uE);t.fillStyle=`rgba(${gg}, ${z*.25})`,t.beginPath(),t.arc(F,j,Q*3,0,mg),t.fill(),t.fillStyle=`rgba(${gg}, ${z})`,t.beginPath(),t.arc(F,j,Q,0,mg),t.fill()}}},u=()=>{const v=Math.min(window.devicePixelRatio||1,2);a=window.innerWidth,l=window.innerHeight,e.width=Math.round(a*v),e.height=Math.round(l*v),t.setTransform(v,0,0,v,0,0),c()},d=v=>{s!==null&&(o+=Math.min((v-s)/1e3,.1)),s=v,c(),r=requestAnimationFrame(d)},f=()=>{r!==null&&(cancelAnimationFrame(r),r=null)},p=()=>{r===null&&!i.matches&&(s=null,r=requestAnimationFrame(d))},m=()=>{document.hidden?f():p()},g=()=>{f(),i.matches?c():p()};return u(),window.addEventListener("resize",u),document.addEventListener("visibilitychange",m),i.addEventListener("change",g),p(),()=>{window.removeEventListener("resize",u),document.removeEventListener("visibilitychange",m),i.removeEventListener("change",g),f()}},[]),ee.jsx("canvas",{ref:n,className:"wave-bg","aria-hidden":"true"})}const ct=Math.PI*2,fn="31, 42, 84",pE=80,Fu=.5,Ou=.5,Sg=.36,mE=42e4,gE=25,kn=40,Mg=64,ol=98,Eg=235,Tg=2.4,ku=520,Bu=8,vE=.1,_E=2,wg=4,xE=.3,yE=2,SE=.25,Ag=.6,al=40,ME=800,EE=.4,ll=.9,cl=.55,Co=13,TE=20,zu=15,wE=4,AE=10,bE=6,bg=100,Rg=30.75,Cg=17,ul=41,Pg=40,RE=1,Lg=.45,Vu=4,Hu=.75,CE=1,PE=10,LE=.85,Ng=140,fl=210,NE=.7,Ig=2,Dg=5,IE=10,Ug=16,DE=Math.PI/6,Fg=Math.PI/4,Og=.6,UE=.02,FE=12,OE=8,kE=11,BE=40,zE=110,VE=3,HE=8,kg=12,dl=80,Po=[[[16,0],[-11,9]],[[-11,9],[-5,3.5]],[[-5,3.5],[-8,0]],[[-8,0],[-5,-3.5]],[[-5,-3.5],[-11,-9]],[[-11,-9],[16,0]]],Lo=(()=>{const n=[],i=ct-1.06;for(let r=0;r<9;r++){const s=1.06+(i-1.06)*r/9,o=1.06+(i-1.06)*(r+1)/9;n.push([[8*Math.cos(s),8*Math.sin(s)],[8*Math.cos(o),8*Math.sin(o)]])}return n.push([[3.9,7],[11,0]],[[11,0],[3.9,-7]],[[-7,4],[-17,8]],[[-17,8],[-27,8]],[[-7,-4],[-17,-8]],[[-17,-8],[-27,-8]]),n})(),Gu=[[[-3,0],[3,0]],[[-3,-2],[-6,-4]],[[-3,2],[-6,4]]],Bg=[{x:-30,y:-13},{x:-30,y:13},{x:-30,y:-21},{x:-30,y:21}],Nt=(n,e)=>n+Math.random()*(e-n);function GE(){const n=Et.useRef(null);return Et.useEffect(()=>{const e=n.current;if(!e)return;const t=e.getContext("2d");if(!t)return;const i=window.matchMedia("(prefers-reduced-motion: reduce)");let r=null,s=null,o=0,a=0,l=0,c=3,u=0,d=0,f=0,p=[],m=null,g=null,v=[],h=[],_=[],M=0,x=[];const E={w:!1,a:!1,s:!1,d:!1,space:!1},w=()=>{p=Array.from({length:pE},()=>({x:Math.random()*a,y:Math.random()*l,r:Nt(.5,1.3),a:Nt(.05,.16),vx:Nt(-1.5,1.5),vy:Nt(-1,1)})),m={x:a*.3,y:l*.45,angle:-Math.PI/2,velX:0,velY:0,warp:{t0:o},pendingBoost:!0},g={x:a*.75,y:l*.3,angle:Nt(0,ct),velX:0,velY:0,turn:0,thrust:!1,thrustUntil:0,brake:!1,brakeUntil:0,nextAction:o+Nt(2,4),arms:{phase:"idle",nextLoad:o+5,loadStart:0,fireIdx:0,nextFire:0,lastEnd:0},warp:{t0:o+.15},pendingBoost:!0},M=o+Nt(1,3)},b=H=>{H.x<-kn?H.x=a+kn:H.x>a+kn&&(H.x=-kn),H.y<-kn?H.y=l+kn:H.y>l+kn&&(H.y=-kn)},y=(H,Me,be,se)=>{se<=.01||(t.fillStyle=`rgba(${fn}, ${se})`,t.beginPath(),t.arc(H,Me,Math.max(be,.4),0,ct),t.fill())},C=(H,Me,be)=>{const se=.4+.6*Math.abs(Math.sin(o*24+be));for(let fe=0;fe<2;fe++){const Ee=2.5+fe*3,G=(1.6+fe*1.2)*(.75+.5*Math.random()),V=(.22-fe*.08)*se;y(8,H*(4.5+Ee)+(Math.random()-.5),G,V),y(-8,Me*(5+Ee)+(Math.random()-.5),G,V)}},P=H=>{const Me=.4+.6*Math.abs(Math.sin(o*26+H));for(let be=0;be<3;be++){const se=2.5+be*2.5,fe=(1.5+be*1)*(.75+.5*Math.random()),Ee=(.26-be*.06)*Me;y(-3.5-se,(Math.random()-.5)*1.2,fe,Ee)}},L=(H,Me)=>{const be=H>0?-1:1,se=H>0?1:-1,fe=.4+.6*Math.abs(Math.sin(o*24+Me)),Ee=Math.cos(Fg),G=Math.sin(Fg);for(let V=0;V<2;V++){const he=2+V*2.5,oe=(1.4+V*.9)*(.75+.5*Math.random()),R=(.24-V*.08)*fe;y(2.5-Ee*he,be*(1.2+G*he)+(Math.random()-.5)*.8,oe,R),y(-2.5-Ee*he,se*(1.2+G*he)+(Math.random()-.5)*.8,oe,R)}},F=()=>{const H=Nt(OE,kE),Me=40,be=Math.floor(Math.random()*4);let se,fe,Ee;be===0?(se=Nt(0,a),fe=-Me,Ee=Math.PI/2):be===1?(se=a+Me,fe=Nt(0,l),Ee=Math.PI):be===2?(se=Nt(0,a),fe=l+Me,Ee=-Math.PI/2):(se=-Me,fe=Nt(0,l),Ee=0);const G=Ee+Nt(-1.2,1.2),V=Nt(BE,zE),he=7+Math.floor(Math.random()*3),oe=[];for(let R=0;R<he;R++){const ce=R/he*ct,Se=H*Nt(.72,1.18);oe.push([Math.cos(ce)*Se,Math.sin(ce)*Se])}_.push({x:se,y:fe,velX:Math.cos(G)*V,velY:Math.sin(G)*V,r:H,angle:Nt(0,ct),angleV:Nt(-.7,.7),pts:oe,segs:oe.map((R,ce)=>[R,oe[(ce+1)%oe.length]])})},j=()=>{const H=a*Fu,Me=l*Ou,be=Math.min(a,l)*Sg*.8;for(let se=0;se<12;se++){const fe=60+Math.random()*Math.max(a-120,1),Ee=60+Math.random()*Math.max(l-120,1);if(Math.hypot(fe-H,Ee-Me)>be)return{x:fe,y:Ee}}return{x:a*.2,y:l*.2}},B=(H,Me,be,se,fe=!1)=>{const Ee=Math.cos(H.angle),G=Math.sin(H.angle),V=Me.map(([he,oe])=>{const R=he[0]*Ee-he[1]*G,ce=he[0]*G+he[1]*Ee,Se=oe[0]*Ee-oe[1]*G,A=oe[0]*G+oe[1]*Ee,S=(R+Se)/2,N=(ce+A)/2;return{ax:R,ay:ce,bx:Se,by:A,ang0:Math.atan2(N,S),r0:Math.max(Math.hypot(S,N),4),vr:50+Math.random()*110,w:(Math.random()<.5?-1:1)*(1.5+Math.random()*3)}});x.push({x:H.x,y:H.y,vx:be,vy:se,t0:o,segs:V,noRing:fe})},z=(H,Me,be,se)=>{H.dead||(H.dead=!0,H.deadUntil=o+ll,B(H,Me,be,se))},Q=H=>{const Me=j();H.x=Me.x,H.y=Me.y,H.angle=Math.random()*ct,H.velX=0,H.velY=0,H.thrustUntil=0,H.dead=!1,H.warp={t0:o},H.pendingBoost=!0},Y=H=>{const Me=(o-H.warp.t0)/cl;if(Me<0||Me>=1||i.matches)return;const be=.4*(1-Me);t.lineWidth=1,t.strokeStyle=`rgba(${fn}, ${be})`,t.beginPath();for(let se=0;se<8;se++){const fe=H.angle+se*ct/8+o*2.5,Ee=6+10*Me,G=Ee+12+40*Me;t.moveTo(H.x+Math.cos(fe)*Ee,H.y+Math.sin(fe)*Ee),t.lineTo(H.x+Math.cos(fe)*G,H.y+Math.sin(fe)*G)}t.stroke(),t.strokeStyle=`rgba(${fn}, ${.3*(1-Me)})`,t.beginPath(),t.arc(H.x,H.y,4+50*Me,0,ct),t.stroke()},U=H=>{if(!H.warp||i.matches)return 1;const Me=(o-H.warp.t0)/cl;return Me<.55?0:Math.min((Me-.55)/.45,1)},J=H=>{for(const G of p)G.x+=G.vx*H,G.y+=G.vy*H,G.x<-2?G.x+=a+4:G.x>a+2&&(G.x-=a+4),G.y<-2?G.y+=l+4:G.y>l+2&&(G.y-=l+4);if(!m.dead){const G=Math.cos(m.angle),V=Math.sin(m.angle);E.w&&(m.velX+=G*ol*H,m.velY+=V*ol*H),E.s&&(m.velX-=G*ol*H,m.velY-=V*ol*H);const he=Math.hypot(m.velX,m.velY);if(he>Eg){const oe=Eg/he;m.velX*=oe,m.velY*=oe}m.x+=m.velX*H,m.y+=m.velY*H,E.a&&(m.angle-=Tg*H),E.d&&(m.angle+=Tg*H),b(m)}const Me=a*Fu,be=l*Ou,se=Math.min(a,l)*Sg,fe=G=>{const V=Me-G.x,he=be-G.y,oe=Math.hypot(V,he);if(oe>=se||oe===0)return null;const R=Math.max(oe,gE),ce=Math.min(mE/(R*R),900);return{x:V/oe*ce,y:he/oe*ce}},Ee=fe(m);if(Ee&&(m.velX+=Ee.x*H,m.velY+=Ee.y*H),m.dead)f=0,d=0;else{const G=v.reduce((V,he)=>V+(he.o==="p"?1:0),0);E.space&&o>=d&&f<Bu&&G<Bu&&(v.push({x:m.x+Math.cos(m.angle)*20,y:m.y+Math.sin(m.angle)*20,a:m.angle,o:"p"}),f+=1,f>=Bu?(f=0,d=o+_E):d=o+vE),!E.space&&f>0&&(f=0,d=0)}if(!g.dead){if(o>=g.nextAction){const R=Math.random();g.turn=R<.3?Lg:R<.55?-Lg:0;const ce=Math.random();ce<.45?(g.thrust=!0,g.thrustUntil=o+RE,g.brake=!1):ce<.62?(g.thrust=!1,g.brake=!0,g.brakeUntil=o+Nt(1,2)):(g.thrust=!1,g.brake=!1),g.nextAction=o+Nt(3,7)}g.brake&&o>=g.brakeUntil&&(g.brake=!1),g.thrust&&o>=g.thrustUntil&&(g.thrust=!1),g.angle+=g.turn*H;const G=g.velX*Math.cos(g.angle)+g.velY*Math.sin(g.angle);g.thrust&&G<Pg&&(g.velX+=Math.cos(g.angle)*Rg*H,g.velY+=Math.sin(g.angle)*Rg*H),g.brake&&(g.velX-=Math.cos(g.angle)*Cg*H,g.velY-=Math.sin(g.angle)*Cg*H);const V=fe(g);V&&(g.velX+=V.x*H,g.velY+=V.y*H);const he=Math.hypot(g.velX,g.velY);if(he>ul){const R=ul/he;g.velX*=R,g.velY*=R}g.x+=g.velX*H,g.y+=g.velY*H,b(g);const oe=g.arms;if(oe.phase==="idle"&&o>=oe.nextLoad)oe.phase="loading",oe.loadStart=o;else if(oe.phase==="loading"&&o-oe.loadStart>=Vu*Hu)oe.phase="firing",oe.fireIdx=0,oe.nextFire=o+.4;else if(oe.phase==="firing"){let R=!1;if(!m.dead){const Se=Math.hypot(m.x-g.x,m.y-g.y)/fl,A=m.x+m.velX*Se,S=m.y+m.velY*Se;let k=((Math.atan2(S-g.y,A-g.x)-g.angle)%ct+ct)%ct;k>Math.PI&&(k-=ct),R=Math.abs(k)<=DE}if(R&&o>=oe.nextFire&&oe.fireIdx<Vu){const ce=Bg[oe.fireIdx],Se=Math.cos(g.angle),A=Math.sin(g.angle);h.push({x:g.x+ce.x*Se-ce.y*A,y:g.y+ce.x*A+ce.y*Se,angle:g.angle,velX:g.velX,velY:g.velY,born:o,turnDir:0,trail:[],trailAt:0}),oe.fireIdx+=1,oe.nextFire=o+CE}oe.fireIdx>=Vu&&(oe.phase="waiting")}else oe.phase==="waiting"&&h.length===0&&o-oe.lastEnd>=PE&&(oe.phase="idle",oe.nextLoad=o);if(o>=c&&!m.dead){const ce=Math.hypot(m.x-g.x,m.y-g.y)/ku,Se=m.x+m.velX*ce*Ag+Nt(-al,al),A=m.y+m.velY*ce*Ag+Nt(-al,al);let N=((Math.atan2(A-g.y,Se-g.x)-g.angle)%ct+ct)%ct;N>Math.PI&&(N-=ct),Math.abs(N)<=SE&&(v.push({x:g.x+Math.cos(g.angle)*14,y:g.y+Math.sin(g.angle)*14,a:g.angle,o:"e"}),u+=1,c=u>=wg?o+yE:o+xE,u>=wg&&(u=0))}}for(let G=v.length-1;G>=0;G--){const V=v[G];V.x+=Math.cos(V.a)*ku*H,V.y+=Math.sin(V.a)*ku*H,(V.x<-kn||V.x>a+kn||V.y<-kn||V.y>l+kn)&&v.splice(G,1)}for(const G of h){const V=o-G.born,he=V>=Dg,oe=m.dead||m.x<0||m.x>a||m.y<0||m.y>l;if(V>=NE&&!he&&!oe){let A=((Math.atan2(m.y-G.y,m.x-G.x)-G.angle)%ct+ct)%ct;if(A>Math.PI&&(A-=ct),Math.abs(A)<=Math.PI/2){const S=m.x-G.x,N=m.y-G.y,k=m.velX-G.velX,K=m.velY-G.velY,ae=k*k+K*K;let re=ae<1e-6?0:-(S*k+N*K)/ae;re<0&&(re=0);const q=m.x+m.velX*re,Z=m.y+m.velY*re;let ge=((Math.atan2(Z-G.y,q-G.x)-G.angle)%ct+ct)%ct;ge>Math.PI&&(ge-=ct);const ye=LE*H,_e=Math.max(-ye,Math.min(ye,ge));G.turnDir=Math.abs(ge)>.05?ge>0?1:-1:0,G.angle+=_e}else G.turnDir=0}else G.turnDir=0;he||(G.velX+=Math.cos(G.angle)*Ng*H,G.velY+=Math.sin(G.angle)*Ng*H);const ce=Math.hypot(G.velX,G.velY);if(ce>fl){const Se=fl/ce;G.velX*=Se,G.velY*=Se}for(G.x+=G.velX*H,G.y+=G.velY*H,!he&&o-G.trailAt>=UE&&(G.trail.push({x:G.x,y:G.y,t:o}),G.trailAt=o);G.trail.length&&o-G.trail[0].t>Og;)G.trail.shift()}for(let G=h.length-1;G>=0;G--){const V=h[G],he=o-V.born<Ig,oe=!he&&!m.dead&&Math.hypot(V.x-m.x,V.y-m.y)<Ug,R=!he&&!g.dead&&Math.hypot(V.x-g.x,V.y-g.y)<Ug,ce=Math.hypot(V.x-Me,V.y-be)<Co,Se=o-V.born>=IE,A=V.x<0||V.x>a||V.y<0||V.y>l;!oe&&!R&&!ce&&!Se&&!A||(oe&&z(m,Po,m.velX,m.velY),R&&z(g,Lo,g.velX,g.velY),(oe||R||Se)&&B(V,Gu,V.velX*.4,V.velY*.4,!0),h.splice(G,1),g.arms.lastEnd=o)}o>=M?_.length<FE?(F(),M=o+Nt(VE,HE)):M=o+.5:_.length===0&&(M=o+Math.min(M-o,1.5));for(let G=_.length-1;G>=0;G--){const V=_[G],he=fe(V);he&&(V.velX+=he.x*H,V.velY+=he.y*H),V.x+=V.velX*H,V.y+=V.velY*H,V.angle+=V.angleV*H;let oe=!1;!m.dead&&Math.hypot(V.x-m.x,V.y-m.y)<V.r+kg&&(z(m,Po,m.velX,m.velY),oe=!0),!g.dead&&Math.hypot(V.x-g.x,V.y-g.y)<V.r+kg&&(z(g,Lo,g.velX,g.velY),oe=!0),!oe&&Math.hypot(V.x-Me,V.y-be)<Co+V.r&&(oe=!0);const R=V.x<-dl||V.x>a+dl||V.y<-dl||V.y>l+dl;oe&&B(V,V.segs,V.velX*.4,V.velY*.4,!0),(oe||R)&&_.splice(G,1)}{const G=new Set;for(let V=0;V<_.length;V++)for(let he=V+1;he<_.length;he++){const oe=_[V],R=_[he];Math.hypot(oe.x-R.x,oe.y-R.y)<oe.r+R.r&&(G.add(V),G.add(he))}if(G.size>0){for(const V of G)B(_[V],_[V].segs,_[V].velX*.4,_[V].velY*.4,!0);_=_.filter((V,he)=>!G.has(he))}}for(let G=v.length-1;G>=0;G--){const V=v[G];let he=!1;const oe=V.o==="p"?g:m;if(!oe.dead&&Math.hypot(V.x-oe.x,V.y-oe.y)<zu)if(V.o==="p")he=!0,z(g,Lo,g.velX,g.velY);else{const R=Math.hypot(m.x-g.x,m.y-g.y),ce=EE*Math.min(1,R/ME);if(Math.random()>=ce)he=!0,z(m,Po,m.velX,m.velY);else{const Se=V.x-m.x,A=V.y-m.y,S=Math.hypot(Se,A)||1,N=Se/S,k=A/S,K=Math.cos(V.a),ae=Math.sin(V.a),re=K*N+ae*k;V.a=Math.atan2(ae-2*re*k,K-2*re*N),V.o="p",V.x=m.x+N*(zu+2),V.y=m.y+k*(zu+2)}}if(!he&&Math.hypot(V.x-Me,V.y-be)<Co&&(he=!0),!he)for(let R=_.length-1;R>=0;R--){const ce=_[R];if(Math.hypot(V.x-ce.x,V.y-ce.y)<ce.r+wE){B(ce,ce.segs,ce.velX*.4,ce.velY*.4,!0),_.splice(R,1),he=!0;break}}if(!he)for(let R=h.length-1;R>=0;R--){const ce=h[R];if(Math.hypot(V.x-ce.x,V.y-ce.y)<AE){B(ce,Gu,ce.velX*.4,ce.velY*.4,!0),h.splice(R,1),g.arms.lastEnd=o,he=!0;break}}he&&v.splice(G,1)}for(let G=h.length-1;G>=0;G--){const V=h[G];if(!(o-V.born<Ig))for(let he=_.length-1;he>=0;he--){const oe=_[he];if(Math.hypot(V.x-oe.x,V.y-oe.y)<oe.r+bE){B(V,Gu,V.velX*.4,V.velY*.4,!0),B(oe,oe.segs,oe.velX*.4,oe.velY*.4,!0),h.splice(G,1),_.splice(he,1),g.arms.lastEnd=o;break}}}!m.dead&&Math.hypot(m.x-Me,m.y-be)<Co&&z(m,Po,m.velX,m.velY),!g.dead&&Math.hypot(g.x-Me,g.y-be)<Co&&z(g,Lo,g.velX,g.velY),!m.dead&&!g.dead&&Math.hypot(m.x-g.x,m.y-g.y)<TE&&(z(m,Po,m.velX,m.velY),z(g,Lo,g.velX,g.velY)),m.dead&&o>=m.deadUntil&&Q(m),g.dead&&o>=g.deadUntil&&(Q(g),g.arms={phase:"idle",nextLoad:o+5,loadStart:0,fireIdx:0,nextFire:0,lastEnd:0},u=0,c=o+3),m.pendingBoost&&o>=m.warp.t0+cl&&(m.velX=Math.cos(m.angle)*bg,m.velY=Math.sin(m.angle)*bg,m.pendingBoost=!1),g.pendingBoost&&o>=g.warp.t0+cl&&(g.velX=Math.cos(g.angle)*ul,g.velY=Math.sin(g.angle)*ul,g.pendingBoost=!1),x=x.filter(G=>o-G.t0<ll)},ne=()=>{t.clearRect(0,0,a,l);for(const se of p)t.fillStyle=`rgba(${fn}, ${se.a})`,t.beginPath(),t.arc(se.x,se.y,se.r,0,ct),t.fill();const H=a*Fu,Me=l*Ou;t.lineWidth=1;const be=o*.25;t.strokeStyle=`rgba(${fn}, 0.42)`;for(let se=0;se<3;se++){const fe=be+se*ct/3,Ee=14;t.beginPath(),t.moveTo(H-Math.cos(fe)*Ee,Me-Math.sin(fe)*Ee),t.lineTo(H+Math.cos(fe)*Ee,Me+Math.sin(fe)*Ee),t.stroke()}t.strokeStyle=`rgba(${fn}, 0.14)`,t.beginPath(),t.arc(H,Me,9,0,ct),t.stroke(),t.strokeStyle=`rgba(${fn}, 0.4)`;for(const se of _){const fe=Math.cos(se.angle),Ee=Math.sin(se.angle);t.beginPath(),se.pts.forEach(([G,V],he)=>{const oe=se.x+G*fe-V*Ee,R=se.y+G*Ee+V*fe;he===0?t.moveTo(oe,R):t.lineTo(oe,R)}),t.closePath(),t.stroke()}t.strokeStyle=`rgba(${fn}, 0.45)`;for(const se of v)t.beginPath(),t.moveTo(se.x-Math.cos(se.a)*9,se.y-Math.sin(se.a)*9),t.lineTo(se.x,se.y),t.stroke();for(const se of h)for(const fe of se.trail){const Ee=1-(o-fe.t)/Og;Ee<=0||y(fe.x,fe.y,1.1+(1-Ee)*2.2,.14*Ee)}t.strokeStyle=`rgba(${fn}, 0.5)`;for(let se=0;se<h.length;se++){const fe=h[se],Ee=Math.cos(fe.angle),G=Math.sin(fe.angle);t.beginPath(),t.moveTo(fe.x-Ee*3.5,fe.y-G*3.5),t.lineTo(fe.x+Ee*3.5,fe.y+G*3.5),t.stroke(),t.save(),t.translate(fe.x,fe.y),t.rotate(fe.angle),o-fe.born<Dg&&Math.hypot(fe.velX,fe.velY)<fl&&P(se*.6),fe.turnDir!==0&&L(fe.turnDir,se*.6),t.restore()}t.lineWidth=1;for(const se of x){const fe=o-se.t0;if(fe<0||fe>=ll)continue;const G=.5*(fe<.5?1:1-(fe-.5)/(ll-.5)),V=se.x+se.vx*fe,he=se.y+se.vy*fe;!se.noRing&&fe<.4&&(t.strokeStyle=`rgba(${fn}, ${.35*(1-fe/.4)})`,t.beginPath(),t.arc(V,he,5+fe*220,0,ct),t.stroke()),t.strokeStyle=`rgba(${fn}, ${G})`,t.beginPath();for(const oe of se.segs){const R=oe.ang0+oe.w*fe,ce=oe.r0+oe.vr*fe,Se=V+Math.cos(R)*ce,A=he+Math.sin(R)*ce,S=oe.w*.5*fe,N=Math.cos(S),k=Math.sin(S),K=(oe.bx-oe.ax)/2,ae=(oe.by-oe.ay)/2,re=K*N-ae*k,q=K*k+ae*N;t.moveTo(Se-re,A-q),t.lineTo(Se+re,A+q)}t.stroke()}if(!g.dead){const se=U(g);t.lineWidth=1,t.save(),t.translate(g.x,g.y),t.rotate(g.angle),t.strokeStyle=`rgba(${fn}, ${.32*se})`,t.beginPath(),t.arc(0,0,8,1.06,ct-1.06),t.moveTo(3.9,7),t.lineTo(11,0),t.lineTo(3.9,-7),t.stroke(),t.beginPath(),t.moveTo(-7,4),t.lineTo(-17,8),t.lineTo(-27,8),t.moveTo(-7,-4),t.lineTo(-17,-8),t.lineTo(-27,-8),t.stroke();const fe=g.velX*Math.cos(g.angle)+g.velY*Math.sin(g.angle);if(se>=1&&g.thrust&&fe<Pg){const G=.4+.6*Math.abs(Math.sin(o*26));for(let V=0;V<3;V++){const he=5+V*5,oe=(3+V*2.4)*(.75+.5*Math.random());y(-9-he,(Math.random()-.5)*2.4,oe,(.26-V*.06)*G)}}if(se>=1&&g.brake){const G=(.26+.16*Math.abs(Math.cos(o*26)))*se;t.strokeStyle=`rgba(${fn}, ${G})`,t.beginPath(),t.moveTo(12,3),t.lineTo(18,4.5),t.moveTo(12,-3),t.lineTo(18,-4.5),t.stroke()}se>=1&&g.turn!==0&&C(g.turn>0?-1:1,g.turn>0?1:-1,.7);const Ee=g.arms;(Ee.phase==="loading"||Ee.phase==="firing")&&Bg.forEach((G,V)=>{const he=Ee.phase==="firing"?V>=Ee.fireIdx?1:0:Math.min(Math.max((o-Ee.loadStart-V*Hu)/Hu,0),1);he<=0||(t.strokeStyle=`rgba(${fn}, ${.32*he*se})`,t.beginPath(),t.moveTo(G.x-2.5,G.y),t.lineTo(G.x+2.5,G.y),t.stroke())}),t.restore(),g.warp&&Y(g)}if(!m.dead){const se=U(m);if(t.save(),t.translate(m.x,m.y),t.rotate(m.angle),t.strokeStyle=`rgba(${fn}, ${.5*se})`,t.beginPath(),t.moveTo(16,0),t.lineTo(-11,9),t.lineTo(-5,3.5),t.lineTo(-8,0),t.lineTo(-5,-3.5),t.lineTo(-11,-9),t.closePath(),t.stroke(),se>=1&&E.w){const fe=.4+.6*Math.abs(Math.sin(o*26));for(let Ee=0;Ee<3;Ee++){const G=5+Ee*5,V=(3+Ee*2.4)*(.75+.5*Math.random());y(-9-G,(Math.random()-.5)*2.4,V,(.26-Ee*.06)*fe)}}if(se>=1&&E.s){const fe=.4+.6*Math.abs(Math.cos(o*24));[6,-6].forEach(Ee=>{for(let G=0;G<2;G++){const V=3+G*3.5,he=(1.7+G*1.1)*(.75+.5*Math.random());y(9+V,Ee*(1+.16*V)+(Math.random()-.5)*1.2,he,(.2-G*.07)*fe)}})}se>=1&&(E.a||E.d)&&C(E.d?-1:1,E.d?1:-1,1.3),t.restore(),m.warp&&Y(m)}},ue=()=>{const H=Math.min(window.devicePixelRatio||1,2);a=window.innerWidth-2*Mg,l=window.innerHeight-2*Mg,e.width=Math.round(a*H),e.height=Math.round(l*H),t.setTransform(H,0,0,H,0,0),m||w(),ne()},xe=H=>{if(s!==null){const Me=Math.min((H-s)/1e3,.1);o+=Me,J(Me)}s=H,ne(),r=requestAnimationFrame(xe)},$e=()=>{r!==null&&(cancelAnimationFrame(r),r=null)},ot=()=>{r===null&&!i.matches&&(s=null,r=requestAnimationFrame(xe))},Qe=()=>{document.hidden?($e(),We()):ot()},te=()=>{$e(),i.matches?ne():ot()},ve=H=>{switch(H.code){case"KeyW":return"w";case"KeyA":return"a";case"KeyS":return"s";case"KeyD":return"d";case"Space":return"space";default:return""}},de=H=>H==="w"||H==="a"||H==="s"||H==="d"||H==="space",We=()=>{E.w=!1,E.a=!1,E.s=!1,E.d=!1,E.space=!1},Xe=H=>{const Me=ve(H);if(!de(Me)||H.ctrlKey||H.metaKey||H.altKey)return;const be=H.target;be&&(be.tagName==="INPUT"||be.tagName==="TEXTAREA"||be.isContentEditable)||(E[Me]=!0,Me==="space"&&H.preventDefault())},Be=H=>{const Me=ve(H);de(Me)&&(E[Me]=!1)},pt=()=>{We()};return ue(),window.addEventListener("resize",ue),window.addEventListener("keydown",Xe),window.addEventListener("keyup",Be),window.addEventListener("blur",pt),document.addEventListener("visibilitychange",Qe),i.addEventListener("change",te),ot(),()=>{window.removeEventListener("resize",ue),window.removeEventListener("keydown",Xe),window.removeEventListener("keyup",Be),window.removeEventListener("blur",pt),document.removeEventListener("visibilitychange",Qe),i.removeEventListener("change",te),$e()}},[]),ee.jsx("canvas",{ref:n,className:"sw-bg","aria-hidden":"true"})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _p="185",WE=0,zg=1,XE=2,Ql=1,YE=2,Ko=3,Qi=0,Tn=1,yi=2,Ki=0,$s=1,Vg=2,Hg=3,Gg=4,KE=5,Kr=100,qE=101,$E=102,jE=103,ZE=104,JE=200,QE=201,eT=202,tT=203,Cd=204,Pd=205,nT=206,iT=207,rT=208,sT=209,oT=210,aT=211,lT=212,cT=213,uT=214,Ld=0,Nd=1,Id=2,oo=3,Dd=4,Ud=5,Fd=6,Od=7,Dx=0,fT=1,dT=2,wi=0,Ux=1,Fx=2,Ox=3,kx=4,Bx=5,zx=6,Vx=7,Wg="attached",hT="detached",Hx=300,os=301,ao=302,Wu=303,Xu=304,nu=306,lo=1e3,Si=1001,Pc=1002,Ht=1003,Gx=1004,qo=1005,Gt=1006,ec=1007,Wi=1008,Pn=1009,Wx=1010,Xx=1011,ba=1012,xp=1013,Ri=1014,Wn=1015,er=1016,yp=1017,Sp=1018,Ra=1020,Yx=35902,Kx=35899,qx=1021,$x=1022,Xn=1023,tr=1026,Jr=1027,Mp=1028,Ep=1029,as=1030,Tp=1031,wp=1033,tc=33776,nc=33777,ic=33778,rc=33779,kd=35840,Bd=35841,zd=35842,Vd=35843,Hd=36196,Gd=37492,Wd=37496,Xd=37488,Yd=37489,Lc=37490,Kd=37491,qd=37808,$d=37809,jd=37810,Zd=37811,Jd=37812,Qd=37813,eh=37814,th=37815,nh=37816,ih=37817,rh=37818,sh=37819,oh=37820,ah=37821,lh=36492,ch=36494,uh=36495,fh=36283,dh=36284,Nc=36285,hh=36286,Ca=2300,Pa=2301,Yu=2302,Xg=2303,Yg=2400,Kg=2401,qg=2402,pT=2500,mT=0,jx=1,ph=2,gT=3200,mh=0,vT=1,yr="",Zt="srgb",Dn="srgb-linear",Ic="linear",ut="srgb",ps=7680,$g=519,_T=512,xT=513,yT=514,Ap=515,ST=516,MT=517,bp=518,ET=519,gh=35044,jg="300 es",Mi=2e3,La=2001;function TT(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wT(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function AT(){const n=Na("canvas");return n.style.display="block",n}const Zg={};function Dc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Zx(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){n=Zx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ye(...n){n=Zx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function js(...n){const e=n.join(" ");e in Zg||(Zg[e]=!0,Oe(...n))}function bT(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const RT={[Ld]:Nd,[Id]:Fd,[Dd]:Od,[oo]:Ud,[Nd]:Ld,[Fd]:Id,[Od]:Dd,[Ud]:oo};class us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jg=1234567;const sa=Math.PI/180,co=180/Math.PI;function ai(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function Rp(n,e){return(n%e+e)%e}function CT(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function PT(n,e,t){return n!==e?(t-n)/(e-n):0}function oa(n,e,t){return(1-t)*n+t*e}function LT(n,e,t,i){return oa(n,e,1-Math.exp(-t*i))}function NT(n,e=1){return e-Math.abs(Rp(n,e*2)-e)}function IT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function DT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function UT(n,e){return n+Math.floor(Math.random()*(e-n+1))}function FT(n,e){return n+Math.random()*(e-n)}function OT(n){return n*(.5-Math.random())}function kT(n){n!==void 0&&(Jg=n);let e=Jg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function BT(n){return n*sa}function zT(n){return n*co}function VT(n){return(n&n-1)===0&&n!==0}function HT(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function GT(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function WT(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*m,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*m,a*c);break;case"ZYZ":n.set(l*m,l*p,a*u,a*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Cp={DEG2RAD:sa,RAD2DEG:co,generateUUID:ai,clamp:nt,euclideanModulo:Rp,mapLinear:CT,inverseLerp:PT,lerp:oa,damp:LT,pingpong:NT,smoothstep:IT,smootherstep:DT,randInt:UT,randFloat:FT,randFloatSpread:OT,seededRandom:kT,degToRad:BT,radToDeg:zT,isPowerOfTwo:VT,ceilPowerOfTwo:HT,floorPowerOfTwo:GT,setQuaternionFromProperEuler:WT,normalize:ft,denormalize:ni},Yp=class Yp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yp.prototype.isVector2=!0;let Ge=Yp;class ir{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],m=s[o+2],g=s[o+3];if(d!==g||l!==f||c!==p||u!==m){let v=l*f+c*p+u*m+d*g;v<0&&(f=-f,p=-p,m=-m,g=-g,v=-v);let h=1-a;if(v<.9995){const _=Math.acos(v),M=Math.sin(_);h=Math.sin(h*_)/M,a=Math.sin(a*_)/M,l=l*h+f*a,c=c*h+p*a,u=u*h+m*a,d=d*h+g*a}else{l=l*h+f*a,c=c*h+p*a,u=u*h+m*a,d=d*h+g*a;const _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],m=s[o+3];return e[t]=a*m+u*d+l*p-c*f,e[t+1]=l*m+u*f+c*d-a*p,e[t+2]=c*m+u*p+a*f-l*d,e[t+3]=u*m-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d-f*p*m;break;case"YXZ":this._x=f*u*d+c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d+f*p*m;break;case"ZXY":this._x=f*u*d-c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d-f*p*m;break;case"ZYX":this._x=f*u*d-c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d+f*p*m;break;case"YZX":this._x=f*u*d+c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d-f*p*m;break;case"XZY":this._x=f*u*d-c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d+f*p*m;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kp=class Kp{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ku.copy(this).projectOnVector(e),this.sub(Ku)}reflect(e){return this.sub(Ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kp.prototype.isVector3=!0;let I=Kp;const Ku=new I,Qg=new ir,qp=class qp{constructor(e,t,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],m=i[8],g=r[0],v=r[3],h=r[6],_=r[1],M=r[4],x=r[7],E=r[2],w=r[5],b=r[8];return s[0]=o*g+a*_+l*E,s[3]=o*v+a*M+l*w,s[6]=o*h+a*x+l*b,s[1]=c*g+u*_+d*E,s[4]=c*v+u*M+d*w,s[7]=c*h+u*x+d*b,s[2]=f*g+p*_+m*E,s[5]=f*v+p*M+m*w,s[8]=f*h+p*x+m*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,m=t*d+i*f+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=d*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qu.makeScale(e,t)),this}rotate(e){return js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qu.makeRotation(-e)),this}translate(e,t){return js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qp.prototype.isMatrix3=!0;let qe=qp;const qu=new qe,e0=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),t0=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XT(){const n={enabled:!0,workingColorSpace:Dn,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=Zs(r.r),r.g=Zs(r.g),r.b=Zs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yr?Ic:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Dn]:{primaries:e,whitePoint:i,transfer:Ic,toXYZ:e0,fromXYZ:t0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:e0,fromXYZ:t0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),n}const rt=XT();function qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ms;class YT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ms===void 0&&(ms=Na("canvas")),ms.width=e.width,ms.height=e.height;const r=ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ms}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Na("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qi(t[i]/255)*255):t[i]=qi(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KT=0;class Pp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($u(r[o].image)):s.push($u(r[o]))}else s=$u(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function $u(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?YT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let qT=0;const ju=new I;class $t extends us{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=Si,r=Si,s=Gt,o=Wi,a=Xn,l=Pn,c=$t.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qT++}),this.uuid=ai(),this.name="",this.source=new Pp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ju).x}get height(){return this.source.getSize(ju).y}get depth(){return this.source.getSize(ju).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lo:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lo:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Hx;$t.DEFAULT_ANISOTROPY=1;const $p=class $p{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],m=l[9],g=l[2],v=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(m-v)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(m+v)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(p+1)/2,E=(h+1)/2,w=(u+f)/4,b=(d+g)/4,y=(m+v)/4;return M>x&&M>E?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=b/i):x>E?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=y/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=b/s,r=y/s),this.set(i,r,s,t),this}let _=Math.sqrt((v-m)*(v-m)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(v-m)/_,this.y=(d-g)/_,this.z=(f-u)/_,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$p.prototype.isVector4=!0;let gt=$p;class $T extends us{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new $t(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Pp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends $T{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jx extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jT extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bc=class Bc{constructor(e,t,i,r,s,o,a,l,c,u,d,f,p,m,g,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,p,m,g,v)}set(e,t,i,r,s,o,a,l,c,u,d,f,p,m,g,v){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=m,h[11]=g,h[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/gs.setFromMatrixColumn(e,0).length(),s=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,m=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+m*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=m+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,m=c*u,g=c*d;t[0]=f+g*a,t[4]=m*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-m,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,m=c*u,g=c*d;t[0]=f-g*a,t[4]=-o*d,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,m=a*u,g=a*d;t[0]=l*u,t[4]=m*c-p,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=p*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,m=a*l,g=a*c;t[0]=l*u,t[4]=g-f*d,t[8]=m*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+m,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,p=o*c,m=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=o*u,t[9]=p*d-m,t[2]=m*d-p,t[6]=a*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZT,e,JT)}lookAt(e,t,i){const r=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),cr.crossVectors(i,bn),cr.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),cr.crossVectors(i,bn)),cr.normalize(),hl.crossVectors(bn,cr),r[0]=cr.x,r[4]=hl.x,r[8]=bn.x,r[1]=cr.y,r[5]=hl.y,r[9]=bn.y,r[2]=cr.z,r[6]=hl.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],m=i[2],g=i[6],v=i[10],h=i[14],_=i[3],M=i[7],x=i[11],E=i[15],w=r[0],b=r[4],y=r[8],C=r[12],P=r[1],L=r[5],F=r[9],j=r[13],B=r[2],z=r[6],Q=r[10],Y=r[14],U=r[3],J=r[7],ne=r[11],ue=r[15];return s[0]=o*w+a*P+l*B+c*U,s[4]=o*b+a*L+l*z+c*J,s[8]=o*y+a*F+l*Q+c*ne,s[12]=o*C+a*j+l*Y+c*ue,s[1]=u*w+d*P+f*B+p*U,s[5]=u*b+d*L+f*z+p*J,s[9]=u*y+d*F+f*Q+p*ne,s[13]=u*C+d*j+f*Y+p*ue,s[2]=m*w+g*P+v*B+h*U,s[6]=m*b+g*L+v*z+h*J,s[10]=m*y+g*F+v*Q+h*ne,s[14]=m*C+g*j+v*Y+h*ue,s[3]=_*w+M*P+x*B+E*U,s[7]=_*b+M*L+x*z+E*J,s[11]=_*y+M*F+x*Q+E*ne,s[15]=_*C+M*j+x*Y+E*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],m=e[3],g=e[7],v=e[11],h=e[15],_=l*p-c*f,M=a*p-c*d,x=a*f-l*d,E=o*p-c*u,w=o*f-l*u,b=o*d-a*u;return t*(g*_-v*M+h*x)-i*(m*_-v*E+h*w)+r*(m*M-g*E+h*b)-s*(m*x-g*w+v*b)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(s*u-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],m=e[12],g=e[13],v=e[14],h=e[15],_=t*a-i*o,M=t*l-r*o,x=t*c-s*o,E=i*l-r*a,w=i*c-s*a,b=r*c-s*l,y=u*g-d*m,C=u*v-f*m,P=u*h-p*m,L=d*v-f*g,F=d*h-p*g,j=f*h-p*v,B=_*j-M*F+x*L+E*P-w*C+b*y;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return e[0]=(a*j-l*F+c*L)*z,e[1]=(r*F-i*j-s*L)*z,e[2]=(g*b-v*w+h*E)*z,e[3]=(f*w-d*b-p*E)*z,e[4]=(l*P-o*j-c*C)*z,e[5]=(t*j-r*P+s*C)*z,e[6]=(v*x-m*b-h*M)*z,e[7]=(u*b-f*x+p*M)*z,e[8]=(o*F-a*P+c*y)*z,e[9]=(i*P-t*F-s*y)*z,e[10]=(m*w-g*x+h*_)*z,e[11]=(d*x-u*w-p*_)*z,e[12]=(a*C-o*L-l*y)*z,e[13]=(t*L-i*C+r*y)*z,e[14]=(g*M-m*E-v*_)*z,e[15]=(u*E-d*M+f*_)*z,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,m=s*d,g=o*u,v=o*d,h=a*d,_=l*c,M=l*u,x=l*d,E=i.x,w=i.y,b=i.z;return r[0]=(1-(g+h))*E,r[1]=(p+x)*E,r[2]=(m-M)*E,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(f+h))*w,r[6]=(v+_)*w,r[7]=0,r[8]=(m+M)*b,r[9]=(v-_)*b,r[10]=(1-(f+g))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=gs.set(r[0],r[1],r[2]).length();const a=gs.set(r[4],r[5],r[6]).length(),l=gs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),jn.copy(this);const c=1/o,u=1/a,d=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,t.setFromRotationMatrix(jn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=Mi,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let m,g;if(l)m=s/(o-s),g=o*s/(o-s);else if(a===Mi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===La)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Mi,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let m,g;if(l)m=1/(o-s),g=o/(o-s);else if(a===Mi)m=-2/(o-s),g=-(o+s)/(o-s);else if(a===La)m=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Bc.prototype.isMatrix4=!0;let Je=Bc;const gs=new I,jn=new Je,ZT=new I(0,0,0),JT=new I(1,1,1),cr=new I,hl=new I,bn=new I,n0=new Je,i0=new ir;class Ur{constructor(e=0,t=0,i=0,r=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return n0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(n0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return i0.setFromEuler(this),this.setFromQuaternion(i0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class Qx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QT=0;const r0=new I,vs=new ir,Ii=new Je,pl=new I,No=new I,ew=new I,tw=new ir,s0=new I(1,0,0),o0=new I(0,1,0),a0=new I(0,0,1),l0={type:"added"},nw={type:"removed"},_s={type:"childadded",child:null},Zu={type:"childremoved",child:null};class Rt extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QT++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new I,t=new Ur,i=new ir,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new qe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(s0,e)}rotateY(e){return this.rotateOnAxis(o0,e)}rotateZ(e){return this.rotateOnAxis(a0,e)}translateOnAxis(e,t){return r0.copy(e).applyQuaternion(this.quaternion),this.position.add(r0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(s0,e)}translateY(e){return this.translateOnAxis(o0,e)}translateZ(e){return this.translateOnAxis(a0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pl.copy(e):pl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(No,pl,this.up):Ii.lookAt(pl,No,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),vs.setFromRotationMatrix(Ii),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(l0),_s.child=e,this.dispatchEvent(_s),_s.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nw),Zu.child=e,this.dispatchEvent(Zu),Zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(l0),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,ew),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,tw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new I(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Er extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iw={type:"move"};class Ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const v=t.getJointPose(g,i),h=this._getHandJoint(c,g);v!==null&&(h.matrix.fromArray(v.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=v.radius),h.visible=v!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Er;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ey={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},ml={h:0,s:0,l:0};function Qu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=Rp(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Qu(o,s,e+1/3),this.g=Qu(o,s,e),this.b=Qu(o,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=Zt){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const i=ey[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return rt.workingToColorSpace(on.copy(this),e),Math.round(nt(on.r*255,0,255))*65536+Math.round(nt(on.g*255,0,255))*256+Math.round(nt(on.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(on.copy(this),t);const i=on.r,r=on.g,s=on.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Zt){rt.workingToColorSpace(on.copy(this),e);const t=on.r,i=on.g,r=on.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+t,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ur),e.getHSL(ml);const i=oa(ur.h,ml.h,t),r=oa(ur.s,ml.s,t),s=oa(ur.l,ml.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new Ke;Ke.NAMES=ey;class Lp{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=i}clone(){return new Lp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class rw extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Zn=new I,Di=new I,ef=new I,Ui=new I,xs=new I,ys=new I,c0=new I,tf=new I,nf=new I,rf=new I,sf=new gt,of=new gt,af=new gt;class ii{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Zn.subVectors(e,t),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Zn.subVectors(r,t),Di.subVectors(i,t),ef.subVectors(e,t);const o=Zn.dot(Zn),a=Zn.dot(Di),l=Zn.dot(ef),c=Di.dot(Di),u=Di.dot(ef),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return sf.setScalar(0),of.setScalar(0),af.setScalar(0),sf.fromBufferAttribute(e,t),of.fromBufferAttribute(e,i),af.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(sf,s.x),o.addScaledVector(of,s.y),o.addScaledVector(af,s.z),o}static isFrontFacing(e,t,i,r){return Zn.subVectors(i,t),Di.subVectors(e,t),Zn.cross(Di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Zn.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;xs.subVectors(r,i),ys.subVectors(s,i),tf.subVectors(e,i);const l=xs.dot(tf),c=ys.dot(tf);if(l<=0&&c<=0)return t.copy(i);nf.subVectors(e,r);const u=xs.dot(nf),d=ys.dot(nf);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(xs,o);rf.subVectors(e,s);const p=xs.dot(rf),m=ys.dot(rf);if(m>=0&&p<=m)return t.copy(s);const g=p*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(ys,a);const v=u*m-p*d;if(v<=0&&d-u>=0&&p-m>=0)return c0.subVectors(s,r),a=(d-u)/(d-u+(p-m)),t.copy(r).addScaledVector(c0,a);const h=1/(v+g+f);return o=g*h,a=f*h,t.copy(i).addScaledVector(xs,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gl.copy(i.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),vl.subVectors(this.max,Io),Ss.subVectors(e.a,Io),Ms.subVectors(e.b,Io),Es.subVectors(e.c,Io),fr.subVectors(Ms,Ss),dr.subVectors(Es,Ms),zr.subVectors(Ss,Es);let t=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-zr.z,zr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,zr.z,0,-zr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-zr.y,zr.x,0];return!lf(t,Ss,Ms,Es,vl)||(t=[1,0,0,0,1,0,0,0,1],!lf(t,Ss,Ms,Es,vl))?!1:(_l.crossVectors(fr,dr),t=[_l.x,_l.y,_l.z],lf(t,Ss,Ms,Es,vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new I,new I,new I,new I,new I,new I,new I,new I],Jn=new I,gl=new rr,Ss=new I,Ms=new I,Es=new I,fr=new I,dr=new I,zr=new I,Io=new I,vl=new I,_l=new I,Vr=new I;function lf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Vr.fromArray(n,s);const a=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),l=e.dot(Vr),c=t.dot(Vr),u=i.dot(Vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const kt=new I,xl=new Ge;let sw=0;class gn extends us{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gh,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xl.fromBufferAttribute(this,t),xl.applyMatrix3(e),this.setXY(t,xl.x,xl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ty extends gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ny extends gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qt extends gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const ow=new rr,Do=new I,cf=new I;class Pi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ow.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const t=Do.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Do,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(cf)),this.expandByPoint(Do.copy(e.center).sub(cf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let aw=0;const Bn=new Je,uf=new Rt,Ts=new I,Rn=new rr,Uo=new rr,Yt=new I;class wn extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aw++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(TT(e)?ny:ty)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,i){return Bn.makeTranslation(e,t,i),this.applyMatrix4(Bn),this}scale(e,t,i){return Bn.makeScale(e,t,i),this.applyMatrix4(Bn),this}lookAt(e){return uf.lookAt(e),uf.updateMatrix(),this.applyMatrix4(uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Rn.min,Uo.min),Rn.expandByPoint(Yt),Yt.addVectors(Rn.max,Uo.max),Rn.expandByPoint(Yt)):(Rn.expandByPoint(Uo.min),Rn.expandByPoint(Uo.max))}Rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),Yt.add(Ts)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new gn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new I,l[y]=new I;const c=new I,u=new I,d=new I,f=new Ge,p=new Ge,m=new Ge,g=new I,v=new I;function h(y,C,P){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,P),f.fromBufferAttribute(s,y),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,P),u.sub(c),d.sub(c),p.sub(f),m.sub(f);const L=1/(p.x*m.y-m.x*p.y);isFinite(L)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(L),v.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(L),a[y].add(g),a[C].add(g),a[P].add(g),l[y].add(v),l[C].add(v),l[P].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let y=0,C=_.length;y<C;++y){const P=_[y],L=P.start,F=P.count;for(let j=L,B=L+F;j<B;j+=3)h(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const M=new I,x=new I,E=new I,w=new I;function b(y){E.fromBufferAttribute(r,y),w.copy(E);const C=a[y];M.copy(C),M.sub(E.multiplyScalar(E.dot(C))).normalize(),x.crossVectors(w,C);const L=x.dot(l[y])<0?-1:1;o.setXYZW(y,M.x,M.y,M.z,L)}for(let y=0,C=_.length;y<C;++y){const P=_[y],L=P.start,F=P.count;for(let j=L,B=L+F;j<B;j+=3)b(e.getX(j+0)),b(e.getX(j+1)),b(e.getX(j+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const m=e.getX(f+0),g=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,m=0;for(let g=0,v=l.length;g<v;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let h=0;h<u;h++)f[m++]=c[p++]}return new gn(f,u,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gh,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new I;class Np{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Dc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Np(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Dc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let cw=0;class bi extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cw++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=$s,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Pd,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cd&&(i.blendSrc=this.blendSrc),this.blendDst!==Pd&&(i.blendDst=this.blendDst),this.blendEquation!==Kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$g&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ge().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Oi=new I,ff=new I,yl=new I,hr=new I,df=new I,Sl=new I,hf=new I;class iu{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ff.copy(e).add(t).multiplyScalar(.5),yl.copy(t).sub(e).normalize(),hr.copy(this.origin).sub(ff);const s=e.distanceTo(t)*.5,o=-this.direction.dot(yl),a=hr.dot(this.direction),l=-hr.dot(yl),c=hr.lengthSq(),u=Math.abs(1-o*o);let d,f,p,m;if(u>0)if(d=o*l-a,f=o*a-l,m=s*u,d>=0)if(f>=-m)if(f<=m){const g=1/u;d*=g,f*=g,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ff).addScaledVector(yl,f),p}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),r=Oi.dot(Oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,i,r,s){df.subVectors(t,e),Sl.subVectors(i,e),hf.crossVectors(df,Sl);let o=this.direction.dot(hf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hr.subVectors(this.origin,e);const l=a*this.direction.dot(Sl.crossVectors(hr,Sl));if(l<0)return null;const c=a*this.direction.dot(df.cross(hr));if(c<0||l+c>o)return null;const u=-a*hr.dot(hf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ri extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=Dx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const u0=new Je,Hr=new iu,Ml=new Pi,f0=new I,El=new I,Tl=new I,wl=new I,pf=new I,Al=new I,d0=new I,bl=new I;class cn extends Rt{constructor(e=new wn,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Al.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(pf.fromBufferAttribute(d,e),o?Al.addScaledVector(pf,u):Al.addScaledVector(pf.sub(t),u))}t.add(Al)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(s),Hr.copy(e.ray).recast(e.near),!(Ml.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Ml,f0)===null||Hr.origin.distanceToSquared(f0)>(e.far-e.near)**2))&&(u0.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(u0),!(i.boundingBox!==null&&Hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){const v=f[m],h=o[v.materialIndex],_=Math.max(v.start,p.start),M=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let x=_,E=M;x<E;x+=3){const w=a.getX(x),b=a.getX(x+1),y=a.getX(x+2);r=Rl(this,h,e,i,c,u,d,w,b,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let v=m,h=g;v<h;v+=3){const _=a.getX(v),M=a.getX(v+1),x=a.getX(v+2);r=Rl(this,o,e,i,c,u,d,_,M,x),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){const v=f[m],h=o[v.materialIndex],_=Math.max(v.start,p.start),M=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let x=_,E=M;x<E;x+=3){const w=x,b=x+1,y=x+2;r=Rl(this,h,e,i,c,u,d,w,b,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let v=m,h=g;v<h;v+=3){const _=v,M=v+1,x=v+2;r=Rl(this,o,e,i,c,u,d,_,M,x),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function uw(n,e,t,i,r,s,o,a){let l;if(e.side===Tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Qi,a),l===null)return null;bl.copy(a),bl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(bl);return c<t.near||c>t.far?null:{distance:c,point:bl.clone(),object:n}}function Rl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,El),n.getVertexPosition(l,Tl),n.getVertexPosition(c,wl);const u=uw(n,e,t,i,El,Tl,wl,d0);if(u){const d=new I;ii.getBarycoord(d0,El,Tl,wl,d),r&&(u.uv=ii.getInterpolatedAttribute(r,a,l,c,d,new Ge)),s&&(u.uv1=ii.getInterpolatedAttribute(s,a,l,c,d,new Ge)),o&&(u.normal=ii.getInterpolatedAttribute(o,a,l,c,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};ii.getNormal(El,Tl,wl,f.normal),u.face=f,u.barycoord=d}return u}const Fo=new gt,h0=new gt,p0=new gt,fw=new gt,m0=new Je,Cl=new I,mf=new Pi,g0=new Je,gf=new iu;class dw extends cn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wg,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new rr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Cl),this.boundingBox.expandByPoint(Cl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Cl),this.boundingSphere.expandByPoint(Cl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mf.copy(this.boundingSphere),mf.applyMatrix4(r),e.ray.intersectsSphere(mf)!==!1&&(g0.copy(r).invert(),gf.copy(e.ray).applyMatrix4(g0),!(this.boundingBox!==null&&gf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hT?this.bindMatrixInverse.copy(this.bindMatrix).invert():Oe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;h0.fromBufferAttribute(r.attributes.skinIndex,e),p0.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Fo.copy(t),t.set(0,0,0,0)):(Fo.set(...t,1),t.set(0,0,0)),Fo.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const o=p0.getComponent(s);if(o!==0){const a=h0.getComponent(s);m0.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(fw.copy(Fo).applyMatrix4(m0),o)}}return t.isVector4&&(t.w=Fo.w),t.applyMatrix4(this.bindMatrixInverse)}}class iy extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ip extends $t{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Ht,u=Ht,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const v0=new Je,hw=new Je;class Dp{constructor(e=[],t=[]){this.uuid=ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Oe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Je;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:hw;v0.multiplyMatrices(a,t[s]),v0.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Dp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ip(t,e,e,Xn,Wn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(Oe("Skeleton: No bone found with UUID:",s),o=new iy),this.bones.push(o),this.boneInverses.push(new Je().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class vh extends gn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ws=new Je,_0=new Je,Pl=[],x0=new rr,pw=new Je,Oo=new cn,ko=new Pi;class mw extends cn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,pw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ws),x0.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(x0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ws),ko.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Oo.geometry=this.geometry,Oo.material=this.material,Oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(i),e.ray.intersectsSphere(ko)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ws),_0.multiplyMatrices(i,ws),Oo.matrixWorld=_0,Oo.raycast(e,Pl);for(let o=0,a=Pl.length;o<a;o++){const l=Pl[o];l.instanceId=s,l.object=this,t.push(l)}Pl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ip(new Float32Array(r*this.count),r,this.count,Mp,Wn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const vf=new I,gw=new I,vw=new qe;class Vi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=vf.subVectors(i,t).cross(gw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(vf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vw.getNormalMatrix(e),r=this.coplanarPoint(vf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Pi,_w=new Ge(.5,.5),Ll=new I;class Up{constructor(e=new Vi,t=new Vi,i=new Vi,r=new Vi,s=new Vi,o=new Vi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],m=s[8],g=s[9],v=s[10],h=s[11],_=s[12],M=s[13],x=s[14],E=s[15];if(r[0].setComponents(c-o,p-u,h-m,E-_).normalize(),r[1].setComponents(c+o,p+u,h+m,E+_).normalize(),r[2].setComponents(c+a,p+d,h+g,E+M).normalize(),r[3].setComponents(c-a,p-d,h-g,E-M).normalize(),i)r[4].setComponents(l,f,v,x).normalize(),r[5].setComponents(c-l,p-f,h-v,E-x).normalize();else if(r[4].setComponents(c-l,p-f,h-v,E-x).normalize(),t===Mi)r[5].setComponents(c+l,p+f,h+v,E+x).normalize();else if(t===La)r[5].setComponents(l,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){Gr.center.set(0,0,0);const t=_w.distanceTo(e.center);return Gr.radius=.7071067811865476+t,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ll.x=r.normal.x>0?e.max.x:e.min.x,Ll.y=r.normal.y>0?e.max.y:e.min.y,Ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fp extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uc=new I,Fc=new I,y0=new Je,Bo=new iu,Nl=new Pi,_f=new I,S0=new I;class Op extends Rt{constructor(e=new wn,t=new Fp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Uc.fromBufferAttribute(t,r-1),Fc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Uc.distanceTo(Fc);e.setAttribute("lineDistance",new Qt(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(r),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;y0.copy(r).invert(),Bo.copy(e.ray).applyMatrix4(y0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=p,v=m-1;g<v;g+=c){const h=u.getX(g),_=u.getX(g+1),M=Il(this,e,Bo,l,h,_,g);M&&t.push(M)}if(this.isLineLoop){const g=u.getX(m-1),v=u.getX(p),h=Il(this,e,Bo,l,g,v,m-1);h&&t.push(h)}}else{const p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=p,v=m-1;g<v;g+=c){const h=Il(this,e,Bo,l,g,g+1,g);h&&t.push(h)}if(this.isLineLoop){const g=Il(this,e,Bo,l,m-1,p,m-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Il(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Uc.fromBufferAttribute(a,r),Fc.fromBufferAttribute(a,s),t.distanceSqToSegment(Uc,Fc,_f,S0)>i)return;_f.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(_f);if(!(c<e.near||c>e.far))return{distance:c,point:S0.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const M0=new I,E0=new I;class xw extends Op{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)M0.fromBufferAttribute(t,r),E0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+M0.distanceTo(E0);e.setAttribute("lineDistance",new Qt(i,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yw extends Op{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ry extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const T0=new Je,_h=new iu,Dl=new Pi,Ul=new I;class Sw extends Rt{constructor(e=new wn,t=new ry){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(r),Dl.radius+=s,e.ray.intersectsSphere(Dl)===!1)return;T0.copy(r).invert(),_h.copy(e.ray).applyMatrix4(T0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=f,g=p;m<g;m++){const v=c.getX(m);Ul.fromBufferAttribute(d,v),w0(Ul,v,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let m=f,g=p;m<g;m++)Ul.fromBufferAttribute(d,m),w0(Ul,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function w0(n,e,t,i,r,s,o){const a=_h.distanceSqToPoint(n);if(a<t){const l=new I;_h.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class sy extends $t{constructor(e=[],t=os,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uo extends $t{constructor(e,t,i=Ri,r,s,o,a=Ht,l=Ht,c,u=tr,d=1){if(u!==tr&&u!==Jr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Mw extends uo{constructor(e,t=Ri,i=os,r,s,o=Ht,a=Ht,l,c=tr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class oy extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class za extends wn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function m(g,v,h,_,M,x,E,w,b,y,C){const P=x/b,L=E/y,F=x/2,j=E/2,B=w/2,z=b+1,Q=y+1;let Y=0,U=0;const J=new I;for(let ne=0;ne<Q;ne++){const ue=ne*L-j;for(let xe=0;xe<z;xe++){const $e=xe*P-F;J[g]=$e*_,J[v]=ue*M,J[h]=B,c.push(J.x,J.y,J.z),J[g]=0,J[v]=0,J[h]=w>0?1:-1,u.push(J.x,J.y,J.z),d.push(xe/b),d.push(1-ne/y),Y+=1}}for(let ne=0;ne<y;ne++)for(let ue=0;ue<b;ue++){const xe=f+ue+z*ne,$e=f+ue+z*(ne+1),ot=f+(ue+1)+z*(ne+1),Qe=f+(ue+1)+z*ne;l.push(xe,$e,Qe),l.push($e,ot,Qe),U+=6}a.addGroup(p,U,C),p+=U,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Li{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ge:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new I,r=[],s=[],o=[],a=new I,l=new Je;for(let p=0;p<=e;p++){const m=p/e;r[p]=this.getTangentAt(m,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(nt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(nt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ay extends Li{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ge){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ew extends ay{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function kp(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const A0=new I,b0=new I,xf=new kp,yf=new kp,Sf=new kp;class Tw extends Li{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new I){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(b0.subVectors(r[0],r[1]).add(r[0]),c=b0);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(A0.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=A0),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(u),p);g<1e-4&&(g=1),m<1e-4&&(m=g),v<1e-4&&(v=g),xf.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,m,g,v),yf.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,m,g,v),Sf.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,m,g,v)}else this.curveType==="catmullrom"&&(xf.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),yf.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Sf.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(xf.calc(l),yf.calc(l),Sf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function R0(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function ww(n,e){const t=1-n;return t*t*e}function Aw(n,e){return 2*(1-n)*n*e}function bw(n,e){return n*n*e}function aa(n,e,t,i){return ww(n,e)+Aw(n,t)+bw(n,i)}function Rw(n,e){const t=1-n;return t*t*t*e}function Cw(n,e){const t=1-n;return 3*t*t*n*e}function Pw(n,e){return 3*(1-n)*n*n*e}function Lw(n,e){return n*n*n*e}function la(n,e,t,i,r){return Rw(n,e)+Cw(n,t)+Pw(n,i)+Lw(n,r)}class Nw extends Li{constructor(e=new Ge,t=new Ge,i=new Ge,r=new Ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ge){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(la(e,r.x,s.x,o.x,a.x),la(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Iw extends Li{constructor(e=new I,t=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(la(e,r.x,s.x,o.x,a.x),la(e,r.y,s.y,o.y,a.y),la(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dw extends Li{constructor(e=new Ge,t=new Ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ge){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ps extends Li{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uw extends Li{constructor(e=new Ge,t=new Ge,i=new Ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ge){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(aa(e,r.x,s.x,o.x),aa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bp extends Li{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(aa(e,r.x,s.x,o.x),aa(e,r.y,s.y,o.y),aa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fw extends Li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ge){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(R0(a,l.x,c.x,u.x,d.x),R0(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ge().fromArray(r))}return this}}var xh=Object.freeze({__proto__:null,ArcCurve:Ew,CatmullRomCurve3:Tw,CubicBezierCurve:Nw,CubicBezierCurve3:Iw,EllipseCurve:ay,LineCurve:Dw,LineCurve3:Ps,QuadraticBezierCurve:Uw,QuadraticBezierCurve3:Bp,SplineCurve:Fw});class Ow extends Li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xh[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new xh[r.type]().fromJSON(r))}return this}}class ru extends wn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,p=[],m=[],g=[],v=[];for(let h=0;h<u;h++){const _=h*f-o;for(let M=0;M<c;M++){const x=M*d-s;m.push(x,-_,0),g.push(0,0,1),v.push(M/a),v.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const M=_+c*h,x=_+c*(h+1),E=_+1+c*(h+1),w=_+1+c*h;p.push(M,x,w),p.push(x,E,w)}this.setIndex(p),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(g,3)),this.setAttribute("uv",new Qt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ru(e.width,e.height,e.widthSegments,e.heightSegments)}}class zp extends wn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new I,f=new I,p=[],m=[],g=[],v=[];for(let h=0;h<=i;h++){const _=[],M=h/i,x=o+M*a,E=e*Math.cos(x),w=Math.sqrt(e*e-E*E);let b=0;h===0&&o===0?b=.5/t:h===i&&l===Math.PI&&(b=-.5/t);for(let y=0;y<=t;y++){const C=y/t,P=r+C*s;d.x=-w*Math.cos(P),d.y=E,d.z=w*Math.sin(P),m.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),v.push(C+b,1-M),_.push(c++)}u.push(_)}for(let h=0;h<i;h++)for(let _=0;_<t;_++){const M=u[h][_+1],x=u[h][_],E=u[h+1][_],w=u[h+1][_+1];(h!==0||o>0)&&p.push(M,x,w),(h!==i-1||l<Math.PI)&&p.push(x,E,w)}this.setIndex(p),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(g,3)),this.setAttribute("uv",new Qt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Oc extends wn{constructor(e=new Bp(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new Ge;let u=new I;const d=[],f=[],p=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(p,2));function g(){for(let M=0;M<t;M++)v(M);v(s===!1?t:0),_(),h()}function v(M){u=e.getPointAt(M/t,u);const x=o.normals[M],E=o.binormals[M];for(let w=0;w<=r;w++){const b=w/r*Math.PI*2,y=Math.sin(b),C=-Math.cos(b);l.x=C*x.x+y*E.x,l.y=C*x.y+y*E.y,l.z=C*x.z+y*E.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function h(){for(let M=1;M<=t;M++)for(let x=1;x<=r;x++){const E=(r+1)*(M-1)+(x-1),w=(r+1)*M+(x-1),b=(r+1)*M+x,y=(r+1)*(M-1)+x;m.push(E,w,y),m.push(w,b,y)}}function _(){for(let M=0;M<=t;M++)for(let x=0;x<=r;x++)c.x=M/t,c.y=x/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Oc(new xh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function fo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(C0(r))r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(C0(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function hn(n){const e={};for(let t=0;t<n.length;t++){const i=fo(n[t]);for(const r in i)e[r]=i[r]}return e}function C0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function kw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ly(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Bw={clone:fo,merge:hn};var zw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zw,this.fragmentShader=Vw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=kw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"v3":this.uniforms[i].value=new I().fromArray(r.value);break;case"v4":this.uniforms[i].value=new gt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new qe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Je().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Hw extends Ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vp extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ni extends Vp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Gw extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ww extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Fl(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Xw(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function P0(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Yw(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class go{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Kw extends go{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yg,endingEnd:Yg}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kg:s=e,a=2*t-i;break;case qg:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Kg:o=e,l=2*i-t;break;case qg:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(i-t)/(r-t),g=m*m,v=g*m,h=-f*v+2*f*g-f*m,_=(1+f)*v+(-1.5-2*f)*g+(-.5+f)*m+1,M=(-1-p)*v+(1.5+p)*g+.5*m,x=p*v-p*g;for(let E=0;E!==a;++E)s[E]=h*o[u+E]+_*o[c+E]+M*o[l+E]+x*o[d+E];return s}}class qw extends go{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}}class $w extends go{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class jw extends go{interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){const m=(i-t)/(r-t),g=1-m;for(let v=0;v!==a;++v)s[v]=o[c+v]*g+o[l+v]*m;return s}const f=a*2,p=e-1;for(let m=0;m!==a;++m){const g=o[c+m],v=o[l+m],h=p*f+m*2,_=d[h],M=d[h+1],x=e*f+m*2,E=u[x],w=u[x+1];let b=(i-t)/(r-t),y,C,P,L,F;for(let j=0;j<8;j++){y=b*b,C=y*b,P=1-b,L=P*P,F=L*P;const z=F*t+3*L*b*_+3*P*y*E+C*r-i;if(Math.abs(z)<1e-10)break;const Q=3*L*(_-t)+6*P*b*(E-_)+3*y*(r-E);if(Math.abs(Q)<1e-10)break;b=b-z/Q,b=Math.max(0,Math.min(1,b))}s[m]=F*g+3*L*b*M+3*P*y*w+C*v}return s}}class ci{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fl(t,this.TimeBufferType),this.values=Fl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fl(e.times,Array),values:Fl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $w(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new jw(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ca:t=this.InterpolantFactoryMethodDiscrete;break;case Pa:t=this.InterpolantFactoryMethodLinear;break;case Yu:t=this.InterpolantFactoryMethodSmooth;break;case Xg:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Oe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ca;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return Yu;case this.InterpolantFactoryMethodBezier:return Xg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ye("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&wT(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Yu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const d=a*i,f=d-i,p=d+i;for(let m=0;m!==i;++m){const g=t[d+m];if(g!==t[f+m]||g!==t[p+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Pa;class vo extends ci{constructor(e,t,i){super(e,t,i)}}vo.prototype.ValueTypeName="bool";vo.prototype.ValueBufferType=Array;vo.prototype.DefaultInterpolation=Ca;vo.prototype.InterpolantFactoryMethodLinear=void 0;vo.prototype.InterpolantFactoryMethodSmooth=void 0;class cy extends ci{constructor(e,t,i,r){super(e,t,i,r)}}cy.prototype.ValueTypeName="color";class Ia extends ci{constructor(e,t,i,r){super(e,t,i,r)}}Ia.prototype.ValueTypeName="number";class Zw extends go{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ir.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Da extends ci{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Zw(this.times,this.values,this.getValueSize(),e)}}Da.prototype.ValueTypeName="quaternion";Da.prototype.InterpolantFactoryMethodSmooth=void 0;class _o extends ci{constructor(e,t,i){super(e,t,i)}}_o.prototype.ValueTypeName="string";_o.prototype.ValueBufferType=Array;_o.prototype.DefaultInterpolation=Ca;_o.prototype.InterpolantFactoryMethodLinear=void 0;_o.prototype.InterpolantFactoryMethodSmooth=void 0;class kc extends ci{constructor(e,t,i,r){super(e,t,i,r)}}kc.prototype.ValueTypeName="vector";class Jw{constructor(e="",t=-1,i=[],r=pT){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ai(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(e1(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=i.length;s!==o;++s)t.push(ci.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Xw(l);l=P0(l,1,u),c=P0(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ia(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let f=r[d];f||(r[d]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Qw(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ia;case"vector":case"vector2":case"vector3":case"vector4":return kc;case"color":return cy;case"quaternion":return Da;case"bool":case"boolean":return vo;case"string":return _o}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function e1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Qw(n.type);if(n.times===void 0){const t=[],i=[];Yw(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Xi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(L0(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!L0(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function L0(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class t1{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const n1=new t1;class xo{constructor(e){this.manager=e!==void 0?e:n1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}xo.DEFAULT_MATERIAL_NAME="__DEFAULT";const ki={};class i1 extends Error{constructor(e,t){super(e),this.response=t}}class uy extends xo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Xi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:i,onError:r});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ki[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,m=p!==0;let g=0;const v=new ReadableStream({start(h){_();function _(){d.read().then(({done:M,value:x})=>{if(M)h.close();else{g+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:p});for(let w=0,b=u.length;w<b;w++){const y=u[w];y.onProgress&&y.onProgress(E)}h.enqueue(x),_()}},M=>{h.error(M)})}}});return new Response(v)}else throw new i1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(m=>p.decode(m))}}}).then(c=>{Xi.add(`file:${e}`,c);const u=ki[e];delete ki[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=ki[e];if(u===void 0)throw this.manager.itemError(e),c;delete ki[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const As=new WeakMap;class r1 extends xo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=As.get(o);d===void 0&&(d=[],As.set(o,d)),d.push({onLoad:t,onError:r})}return o}const a=Na("img");function l(){u(),t&&t(this);const d=As.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}As.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),Xi.remove(`image:${e}`);const f=As.get(this)||[];for(let p=0;p<f.length;p++){const m=f[p];m.onError&&m.onError(d)}As.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Xi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class s1 extends xo{constructor(e){super(e)}load(e,t,i,r){const s=new $t,o=new r1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Hp extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Mf=new Je,N0=new I,I0=new I;class Gp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Up,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;N0.setFromMatrixPosition(e.matrixWorld),t.position.copy(N0),I0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(I0),t.updateMatrixWorld(),Mf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===La||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ol=new I,kl=new ir,pi=new I;class fy extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ol,kl,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,kl,pi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ol,kl,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,kl,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pr=new I,D0=new Ge,U0=new Ge;class ln extends fy{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,t){return this.getViewBounds(e,D0,U0),t.subVectors(U0,D0)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class o1 extends Gp{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=co*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class a1 extends Hp{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new o1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class l1 extends Gp{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}}class c1 extends Hp{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new l1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class su extends fy{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class u1 extends Gp{constructor(){super(new su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class f1 extends Hp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new u1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ca{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ef=new WeakMap;class d1 extends xo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Oe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Oe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{Ef.has(o)===!0?(r&&r(Ef.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Xi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){r&&r(c),Ef.set(l,c),Xi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Xi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const bs=-90,Rs=1;class h1 extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(bs,Rs,e,t);r.layers=this.layers,this.add(r);const s=new ln(bs,Rs,e,t);s.layers=this.layers,this.add(s);const o=new ln(bs,Rs,e,t);o.layers=this.layers,this.add(o);const a=new ln(bs,Rs,e,t);a.layers=this.layers,this.add(a);const l=new ln(bs,Rs,e,t);l.layers=this.layers,this.add(l);const c=new ln(bs,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===La)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class p1 extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Wp="\\[\\]\\.:\\/",m1=new RegExp("["+Wp+"]","g"),Xp="[^"+Wp+"]",g1="[^"+Wp.replace("\\.","")+"]",v1=/((?:WC+[\/:])*)/.source.replace("WC",Xp),_1=/(WCOD+)?/.source.replace("WCOD",g1),x1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xp),y1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xp),S1=new RegExp("^"+v1+_1+x1+y1+"$"),M1=["material","materials","bones","map"];class E1{constructor(e,t,i){const r=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class dt{constructor(e,t,i){this.path=t,this.parsedPath=i||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,i):new dt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(m1,"")}static parseTrackName(e){const t=S1.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);M1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=E1;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const jp=class jp{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};jp.prototype.isMatrix2=!0;let F0=jp;function O0(n,e,t,i){const r=T1(i);switch(t){case qx:return n*e;case Mp:return n*e/r.components*r.byteLength;case Ep:return n*e/r.components*r.byteLength;case as:return n*e*2/r.components*r.byteLength;case Tp:return n*e*2/r.components*r.byteLength;case $x:return n*e*3/r.components*r.byteLength;case Xn:return n*e*4/r.components*r.byteLength;case wp:return n*e*4/r.components*r.byteLength;case tc:case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ic:case rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bd:case Vd:return Math.max(n,16)*Math.max(e,8)/4;case kd:case zd:return Math.max(n,8)*Math.max(e,8)/2;case Hd:case Gd:case Xd:case Yd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wd:case Lc:case Kd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case eh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case th:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ih:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case sh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case oh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ah:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lh:case ch:case uh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fh:case dh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Nc:case hh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function T1(n){switch(n){case Pn:case Wx:return{byteLength:1,components:1};case ba:case Xx:case er:return{byteLength:2,components:1};case yp:case Sp:return{byteLength:2,components:4};case Ri:case xp:case Wn:return{byteLength:4,components:1};case Yx:case Kx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_p}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_p);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dy(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function w1(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){const m=d[f],g=d[p];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,d[f]=g)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){const g=d[p];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var A1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b1=`#ifdef USE_ALPHAHASH
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
#endif`,R1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N1=`#ifdef USE_AOMAP
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
#endif`,I1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D1=`#ifdef USE_BATCHING
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
#endif`,U1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B1=`#ifdef USE_IRIDESCENCE
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
#endif`,z1=`#ifdef USE_BUMPMAP
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
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Y1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,K1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,q1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$1=`#define PI 3.141592653589793
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
} // validated`,j1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Z1=`vec3 transformedNormal = objectNormal;
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
#endif`,J1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nA="gl_FragColor = linearToOutputTexel( gl_FragColor );",iA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rA=`#ifdef USE_ENVMAP
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
#endif`,sA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,oA=`#ifdef USE_ENVMAP
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
#endif`,aA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lA=`#ifdef USE_ENVMAP
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
#endif`,cA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hA=`#ifdef USE_GRADIENTMAP
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
}`,pA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vA=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_A=`#ifdef USE_ENVMAP
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
#endif`,xA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EA=`PhysicalMaterial material;
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
#endif`,TA=`uniform sampler2D dfgLUT;
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
}`,wA=`
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
#endif`,AA=`#if defined( RE_IndirectDiffuse )
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
#endif`,bA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RA=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,CA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FA=`#if defined( USE_POINTS_UV )
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
#endif`,OA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HA=`#ifdef USE_MORPHTARGETS
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
#endif`,GA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,XA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,YA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$A=`#ifdef USE_NORMALMAP
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
#endif`,jA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ub=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fb=`float getShadowMask() {
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
}`,db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hb=`#ifdef USE_SKINNING
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
#endif`,pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mb=`#ifdef USE_SKINNING
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
#endif`,gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yb=`#ifdef USE_TRANSMISSION
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
#endif`,Sb=`#ifdef USE_TRANSMISSION
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
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bb=`uniform sampler2D t2D;
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
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`#include <common>
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
}`,Ib=`#if DEPTH_PACKING == 3200
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
}`,Db=`#define DISTANCE
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
}`,Ub=`#define DISTANCE
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
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ob=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`uniform float scale;
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
}`,Bb=`uniform vec3 diffuse;
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
}`,zb=`#include <common>
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
}`,Vb=`uniform vec3 diffuse;
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
}`,Hb=`#define LAMBERT
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
}`,Gb=`#define LAMBERT
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
}`,Wb=`#define MATCAP
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
}`,Xb=`#define MATCAP
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
}`,Yb=`#define NORMAL
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
}`,Kb=`#define NORMAL
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
}`,qb=`#define PHONG
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
}`,$b=`#define PHONG
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
}`,jb=`#define STANDARD
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
}`,Zb=`#define STANDARD
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
}`,Jb=`#define TOON
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
}`,Qb=`#define TOON
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
}`,eR=`uniform float size;
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
}`,tR=`uniform vec3 diffuse;
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
}`,nR=`#include <common>
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
}`,iR=`uniform vec3 color;
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
}`,rR=`uniform float rotation;
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
}`,sR=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:A1,alphahash_pars_fragment:b1,alphamap_fragment:R1,alphamap_pars_fragment:C1,alphatest_fragment:P1,alphatest_pars_fragment:L1,aomap_fragment:N1,aomap_pars_fragment:I1,batching_pars_vertex:D1,batching_vertex:U1,begin_vertex:F1,beginnormal_vertex:O1,bsdfs:k1,iridescence_fragment:B1,bumpmap_pars_fragment:z1,clipping_planes_fragment:V1,clipping_planes_pars_fragment:H1,clipping_planes_pars_vertex:G1,clipping_planes_vertex:W1,color_fragment:X1,color_pars_fragment:Y1,color_pars_vertex:K1,color_vertex:q1,common:$1,cube_uv_reflection_fragment:j1,defaultnormal_vertex:Z1,displacementmap_pars_vertex:J1,displacementmap_vertex:Q1,emissivemap_fragment:eA,emissivemap_pars_fragment:tA,colorspace_fragment:nA,colorspace_pars_fragment:iA,envmap_fragment:rA,envmap_common_pars_fragment:sA,envmap_pars_fragment:oA,envmap_pars_vertex:aA,envmap_physical_pars_fragment:_A,envmap_vertex:lA,fog_vertex:cA,fog_pars_vertex:uA,fog_fragment:fA,fog_pars_fragment:dA,gradientmap_pars_fragment:hA,lightmap_pars_fragment:pA,lights_lambert_fragment:mA,lights_lambert_pars_fragment:gA,lights_pars_begin:vA,lights_toon_fragment:xA,lights_toon_pars_fragment:yA,lights_phong_fragment:SA,lights_phong_pars_fragment:MA,lights_physical_fragment:EA,lights_physical_pars_fragment:TA,lights_fragment_begin:wA,lights_fragment_maps:AA,lights_fragment_end:bA,lightprobes_pars_fragment:RA,logdepthbuf_fragment:CA,logdepthbuf_pars_fragment:PA,logdepthbuf_pars_vertex:LA,logdepthbuf_vertex:NA,map_fragment:IA,map_pars_fragment:DA,map_particle_fragment:UA,map_particle_pars_fragment:FA,metalnessmap_fragment:OA,metalnessmap_pars_fragment:kA,morphinstance_vertex:BA,morphcolor_vertex:zA,morphnormal_vertex:VA,morphtarget_pars_vertex:HA,morphtarget_vertex:GA,normal_fragment_begin:WA,normal_fragment_maps:XA,normal_pars_fragment:YA,normal_pars_vertex:KA,normal_vertex:qA,normalmap_pars_fragment:$A,clearcoat_normal_fragment_begin:jA,clearcoat_normal_fragment_maps:ZA,clearcoat_pars_fragment:JA,iridescence_pars_fragment:QA,opaque_fragment:eb,packing:tb,premultiplied_alpha_fragment:nb,project_vertex:ib,dithering_fragment:rb,dithering_pars_fragment:sb,roughnessmap_fragment:ob,roughnessmap_pars_fragment:ab,shadowmap_pars_fragment:lb,shadowmap_pars_vertex:cb,shadowmap_vertex:ub,shadowmask_pars_fragment:fb,skinbase_vertex:db,skinning_pars_vertex:hb,skinning_vertex:pb,skinnormal_vertex:mb,specularmap_fragment:gb,specularmap_pars_fragment:vb,tonemapping_fragment:_b,tonemapping_pars_fragment:xb,transmission_fragment:yb,transmission_pars_fragment:Sb,uv_pars_fragment:Mb,uv_pars_vertex:Eb,uv_vertex:Tb,worldpos_vertex:wb,background_vert:Ab,background_frag:bb,backgroundCube_vert:Rb,backgroundCube_frag:Cb,cube_vert:Pb,cube_frag:Lb,depth_vert:Nb,depth_frag:Ib,distance_vert:Db,distance_frag:Ub,equirect_vert:Fb,equirect_frag:Ob,linedashed_vert:kb,linedashed_frag:Bb,meshbasic_vert:zb,meshbasic_frag:Vb,meshlambert_vert:Hb,meshlambert_frag:Gb,meshmatcap_vert:Wb,meshmatcap_frag:Xb,meshnormal_vert:Yb,meshnormal_frag:Kb,meshphong_vert:qb,meshphong_frag:$b,meshphysical_vert:jb,meshphysical_frag:Zb,meshtoon_vert:Jb,meshtoon_frag:Qb,points_vert:eR,points_frag:tR,shadow_vert:nR,shadow_frag:iR,sprite_vert:rR,sprite_frag:sR},Ae={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},_i={basic:{uniforms:hn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:hn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:hn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:hn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:hn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:hn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:hn([Ae.points,Ae.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:hn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:hn([Ae.common,Ae.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:hn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:hn([Ae.sprite,Ae.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:hn([Ae.common,Ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:hn([Ae.lights,Ae.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};_i.physical={uniforms:hn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Bl={r:0,b:0,g:0},oR=new Je,hy=new qe;hy.set(-1,0,0,0,1,0,0,0,1);function aR(n,e,t,i,r,s){const o=new Ke(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function p(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){const x=_.backgroundBlurriness>0;M=e.get(M,x)}return M}function m(_){let M=!1;const x=p(_);x===null?v(o,a):x&&x.isColor&&(v(x,1),M=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(_,M){const x=p(M);x&&(x.isCubeTexture||x.mapping===nu)?(c===void 0&&(c=new cn(new za(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:fo(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(oR.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(hy),c.material.toneMapped=rt.getTransfer(x.colorSpace)!==ut,(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new cn(new ru(2,2),new Ci({name:"BackgroundMaterial",uniforms:fo(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=rt.getTransfer(x.colorSpace)!==ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function v(_,M){_.getRGB(Bl,ly(n)),t.buffers.color.setClear(Bl.r,Bl.g,Bl.b,M,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,v(o,a)},render:m,addToRenderList:g,dispose:h}}function lR(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(L,F,j,B,z){let Q=!1;const Y=d(L,B,j,F);s!==Y&&(s=Y,c(s.object)),Q=p(L,B,j,z),Q&&m(L,B,j,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,x(L,F,j,B),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function d(L,F,j,B){const z=B.wireframe===!0;let Q=i[F.id];Q===void 0&&(Q={},i[F.id]=Q);const Y=L.isInstancedMesh===!0?L.id:0;let U=Q[Y];U===void 0&&(U={},Q[Y]=U);let J=U[j.id];J===void 0&&(J={},U[j.id]=J);let ne=J[z];return ne===void 0&&(ne=f(l()),J[z]=ne),ne}function f(L){const F=[],j=[],B=[];for(let z=0;z<t;z++)F[z]=0,j[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:B,object:L,attributes:{},index:null}}function p(L,F,j,B){const z=s.attributes,Q=F.attributes;let Y=0;const U=j.getAttributes();for(const J in U)if(U[J].location>=0){const ue=z[J];let xe=Q[J];if(xe===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(xe=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(xe=L.instanceColor)),ue===void 0||ue.attribute!==xe||xe&&ue.data!==xe.data)return!0;Y++}return s.attributesNum!==Y||s.index!==B}function m(L,F,j,B){const z={},Q=F.attributes;let Y=0;const U=j.getAttributes();for(const J in U)if(U[J].location>=0){let ue=Q[J];ue===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor));const xe={};xe.attribute=ue,ue&&ue.data&&(xe.data=ue.data),z[J]=xe,Y++}s.attributes=z,s.attributesNum=Y,s.index=B}function g(){const L=s.newAttributes;for(let F=0,j=L.length;F<j;F++)L[F]=0}function v(L){h(L,0)}function h(L,F){const j=s.newAttributes,B=s.enabledAttributes,z=s.attributeDivisors;j[L]=1,B[L]===0&&(n.enableVertexAttribArray(L),B[L]=1),z[L]!==F&&(n.vertexAttribDivisor(L,F),z[L]=F)}function _(){const L=s.newAttributes,F=s.enabledAttributes;for(let j=0,B=F.length;j<B;j++)F[j]!==L[j]&&(n.disableVertexAttribArray(j),F[j]=0)}function M(L,F,j,B,z,Q,Y){Y===!0?n.vertexAttribIPointer(L,F,j,z,Q):n.vertexAttribPointer(L,F,j,B,z,Q)}function x(L,F,j,B){g();const z=B.attributes,Q=j.getAttributes(),Y=F.defaultAttributeValues;for(const U in Q){const J=Q[U];if(J.location>=0){let ne=z[U];if(ne===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor)),ne!==void 0){const ue=ne.normalized,xe=ne.itemSize,$e=e.get(ne);if($e===void 0)continue;const ot=$e.buffer,Qe=$e.type,te=$e.bytesPerElement,ve=Qe===n.INT||Qe===n.UNSIGNED_INT||ne.gpuType===xp;if(ne.isInterleavedBufferAttribute){const de=ne.data,We=de.stride,Xe=ne.offset;if(de.isInstancedInterleavedBuffer){for(let Be=0;Be<J.locationSize;Be++)h(J.location+Be,de.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Be=0;Be<J.locationSize;Be++)v(J.location+Be);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let Be=0;Be<J.locationSize;Be++)M(J.location+Be,xe/J.locationSize,Qe,ue,We*te,(Xe+xe/J.locationSize*Be)*te,ve)}else{if(ne.isInstancedBufferAttribute){for(let de=0;de<J.locationSize;de++)h(J.location+de,ne.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let de=0;de<J.locationSize;de++)v(J.location+de);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let de=0;de<J.locationSize;de++)M(J.location+de,xe/J.locationSize,Qe,ue,xe*te,xe/J.locationSize*de*te,ve)}}else if(Y!==void 0){const ue=Y[U];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(J.location,ue);break;case 3:n.vertexAttrib3fv(J.location,ue);break;case 4:n.vertexAttrib4fv(J.location,ue);break;default:n.vertexAttrib1fv(J.location,ue)}}}}_()}function E(){C();for(const L in i){const F=i[L];for(const j in F){const B=F[j];for(const z in B){const Q=B[z];for(const Y in Q)u(Q[Y].object),delete Q[Y];delete B[z]}}delete i[L]}}function w(L){if(i[L.id]===void 0)return;const F=i[L.id];for(const j in F){const B=F[j];for(const z in B){const Q=B[z];for(const Y in Q)u(Q[Y].object),delete Q[Y];delete B[z]}}delete i[L.id]}function b(L){for(const F in i){const j=i[F];for(const B in j){const z=j[B];if(z[L.id]===void 0)continue;const Q=z[L.id];for(const Y in Q)u(Q[Y].object),delete Q[Y];delete z[L.id]}}}function y(L){for(const F in i){const j=i[F],B=L.isInstancedMesh===!0?L.id:0,z=j[B];if(z!==void 0){for(const Q in z){const Y=z[Q];for(const U in Y)u(Y[U].object),delete Y[U];delete z[Q]}delete j[B],Object.keys(j).length===0&&delete i[F]}}}function C(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:v,disableUnusedAttributes:_}}function cR(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function uR(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==Xn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const y=b===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Pn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Wn&&!y)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Oe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:v,maxAttributes:h,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:x,maxSamples:E,samples:w}}function fR(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Vi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const m=d.clippingPlanes,g=d.clipIntersection,v=d.clipShadows,h=n.get(d);if(!r||m===null||m.length===0||s&&!v)s?u(null):c();else{const _=s?0:i,M=_*4;let x=h.clippingState||null;l.value=x,x=u(m,f,M,p);for(let E=0;E!==M;++E)x[E]=t[E];h.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,m){const g=d!==null?d.length:0;let v=null;if(g!==0){if(v=l.value,m!==!0||v===null){const h=p+g*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(v===null||v.length<h)&&(v=new Float32Array(h));for(let M=0,x=p;M!==g;++M,x+=4)o.copy(d[M]).applyMatrix4(_,a),o.normal.toArray(v,x),v[x+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,v}}const Tr=4,k0=[.125,.215,.35,.446,.526,.582],qr=20,dR=256,zo=new su,B0=new Ke;let Tf=null,wf=0,Af=0,bf=!1;const hR=new I;class z0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=hR}=s;Tf=this._renderer.getRenderTarget(),wf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Tf,wf,Af),this._renderer.xr.enabled=bf,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tf=this._renderer.getRenderTarget(),wf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:er,format:Xn,colorSpace:Dn,depthBuffer:!1},r=V0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=V0(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pR(s)),this._blurMaterial=gR(s,e,t),this._ggxMaterial=mR(s,e,t)}return r}_compileMaterial(e){const t=new cn(new wn,e);this._renderer.compile(t,zo)}_sceneToCubeUV(e,t,i,r,s){const l=new ln(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(B0),d.toneMapping=wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new cn(new za,new ri({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,v=g.material;let h=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,h=!0):(v.color.copy(B0),h=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const E=this._cubeSize;Cs(r,x*E,M>2?E:0,E,E),d.setRenderTarget(r),h&&d.render(g,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===os||e.mapping===ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=G0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=H0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Cs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,zo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,p=d*f,{_lodMax:m}=this,g=this._sizeLods[i],v=3*g*(i>m-Tr?i-m+Tr:0),h=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-t,Cs(s,v,h,3*g,2*g),r.setRenderTarget(s),r.render(a,zo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Cs(e,v,h,3*g,2*g),r.setRenderTarget(e),r.render(a,zo)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*qr-1),g=s/m,v=isFinite(s)?1+Math.floor(u*g):qr;v>qr&&Oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${qr}`);const h=[];let _=0;for(let b=0;b<qr;++b){const y=b/g,C=Math.exp(-y*y/2);h.push(C),b===0?_+=C:b<v&&(_+=2*C)}for(let b=0;b<h.length;b++)h[b]=h[b]/_;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-i;const x=this._sizeLods[r],E=3*x*(r>M-Tr?r-M+Tr:0),w=4*(this._cubeSize-x);Cs(t,E,w,3*x,2*x),l.setRenderTarget(t),l.render(d,zo)}}function pR(n){const e=[],t=[],i=[];let r=n;const s=n-Tr+1+k0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Tr?l=k0[o-n+Tr-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,m=6,g=3,v=2,h=1,_=new Float32Array(g*m*p),M=new Float32Array(v*m*p),x=new Float32Array(h*m*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,y=w>2?0:-1,C=[b,y,0,b+2/3,y,0,b+2/3,y+1,0,b,y,0,b+2/3,y+1,0,b,y+1,0];_.set(C,g*m*w),M.set(f,v*m*w);const P=[w,w,w,w,w,w];x.set(P,h*m*w)}const E=new wn;E.setAttribute("position",new gn(_,g)),E.setAttribute("uv",new gn(M,v)),E.setAttribute("faceIndex",new gn(x,h)),i.push(new cn(E,null)),r>Tr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function V0(n,e,t){const i=new Ai(n,e,t);return i.texture.mapping=nu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function mR(n,e,t){return new Ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function gR(n,e,t){const i=new Float32Array(qr),r=new I(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function H0(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function G0(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function ou(){return`

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
	`}class py extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new sy(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new za(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Ki});s.uniforms.tEquirect.value=t;const o=new cn(r,s),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=Gt),new h1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function vR(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?o(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===Wu||p===Xu)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const g=new py(m.height);return g.fromEquirectangularTexture(n,f),e.set(f,g),f.addEventListener("dispose",c),a(g.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,m=p===Wu||p===Xu,g=p===os||p===ao;if(m||g){let v=t.get(f);const h=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new z0(n)),v=m?i.fromEquirectangular(f,v):i.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),v.texture;if(v!==void 0)return v.texture;{const _=f.image;return m&&_&&_.height>0||g&&_&&l(_)?(i===null&&(i=new z0(n)),v=m?i.fromEquirectangular(f):i.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),f.addEventListener("dispose",u),v.texture):null}}}return f}function a(f,p){return p===Wu?f.mapping=os:p===Xu&&(f.mapping=ao),f}function l(f){let p=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function _R(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&js("WebGLRenderer: "+i+" extension not supported."),r}}}function xR(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,m=d.attributes.position;let g=0;if(m===void 0)return;if(p!==null){const _=p.array;g=p.version;for(let M=0,x=_.length;M<x;M+=3){const E=_[M+0],w=_[M+1],b=_[M+2];f.push(E,w,w,b,b,E)}}else{const _=m.array;g=m.version;for(let M=0,x=_.length/3-1;M<x;M+=3){const E=M+0,w=M+1,b=M+2;f.push(E,w,w,b,b,E)}}const v=new(m.count>=65535?ny:ty)(f,1);v.version=g;const h=s.get(d);h&&e.remove(h),s.set(d,v)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function yR(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,s,d*o,p),t.update(f,i,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let g=0;for(let v=0;v<p;v++)g+=f[v];t.update(g,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function SR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Ye("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function MR(n,e,t){const i=new WeakMap,r=new gt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let C=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;p===!0&&(M=1),m===!0&&(M=2),g===!0&&(M=3);let x=a.attributes.position.count*M,E=1;x>e.maxTextureSize&&(E=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const w=new Float32Array(x*E*4*d),b=new Jx(w,x,E,d);b.type=Wn,b.needsUpdate=!0;const y=M*4;for(let P=0;P<d;P++){const L=v[P],F=h[P],j=_[P],B=x*E*4*P;for(let z=0;z<L.count;z++){const Q=z*y;p===!0&&(r.fromBufferAttribute(L,z),w[B+Q+0]=r.x,w[B+Q+1]=r.y,w[B+Q+2]=r.z,w[B+Q+3]=0),m===!0&&(r.fromBufferAttribute(F,z),w[B+Q+4]=r.x,w[B+Q+5]=r.y,w[B+Q+6]=r.z,w[B+Q+7]=0),g===!0&&(r.fromBufferAttribute(j,z),w[B+Q+8]=r.x,w[B+Q+9]=r.y,w[B+Q+10]=r.z,w[B+Q+11]=j.itemSize===4?r.w:1)}}f={count:d,texture:b,size:new Ge(x,E)},i.set(a,f),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function ER(n,e,t,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const TR={[Ux]:"LINEAR_TONE_MAPPING",[Fx]:"REINHARD_TONE_MAPPING",[Ox]:"CINEON_TONE_MAPPING",[kx]:"ACES_FILMIC_TONE_MAPPING",[zx]:"AGX_TONE_MAPPING",[Vx]:"NEUTRAL_TONE_MAPPING",[Bx]:"CUSTOM_TONE_MAPPING"};function wR(n,e,t,i,r,s){const o=new Ai(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new uo(e,t):void 0}),a=new Ai(e,t,{type:er,depthBuffer:!1,stencilBuffer:!1}),l=new wn;l.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const c=new Hw({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new cn(l,c),d=new su(-1,1,1,-1,0,1);let f=null,p=null,m=!1,g,v=null,h=[],_=!1;this.setSize=function(M,x){o.setSize(M,x),a.setSize(M,x);for(let E=0;E<h.length;E++){const w=h[E];w.setSize&&w.setSize(M,x)}},this.setEffects=function(M){h=M,_=h.length>0&&h[0].isRenderPass===!0;const x=o.width,E=o.height;for(let w=0;w<h.length;w++){const b=h[w];b.setSize&&b.setSize(x,E)}},this.begin=function(M,x){if(m||M.toneMapping===wi&&h.length===0)return!1;if(v=x,x!==null){const E=x.width,w=x.height;(o.width!==E||o.height!==w)&&this.setSize(E,w)}return _===!1&&M.setRenderTarget(o),g=M.toneMapping,M.toneMapping=wi,!0},this.hasRenderPass=function(){return _},this.end=function(M,x){M.toneMapping=g,m=!0;let E=o,w=a;for(let b=0;b<h.length;b++){const y=h[b];if(y.enabled!==!1&&(y.render(M,w,E,x),y.needsSwap!==!1)){const C=E;E=w,w=C}}if(f!==M.outputColorSpace||p!==M.toneMapping){f=M.outputColorSpace,p=M.toneMapping,c.defines={},rt.getTransfer(f)===ut&&(c.defines.SRGB_TRANSFER="");const b=TR[p];b&&(c.defines[b]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(v),M.render(u,d),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const my=new $t,yh=new uo(1,1),gy=new Jx,vy=new jT,_y=new sy,W0=[],X0=[],Y0=new Float32Array(16),K0=new Float32Array(9),q0=new Float32Array(4);function yo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=W0[r];if(s===void 0&&(s=new Float32Array(r),W0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function au(n,e){let t=X0[e];t===void 0&&(t=new Int32Array(e),X0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function AR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function RR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function CR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function PR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;q0.set(i),n.uniformMatrix2fv(this.addr,!1,q0),Xt(t,i)}}function LR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;K0.set(i),n.uniformMatrix3fv(this.addr,!1,K0),Xt(t,i)}}function NR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Y0.set(i),n.uniformMatrix4fv(this.addr,!1,Y0),Xt(t,i)}}function IR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function DR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function UR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function FR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function OR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function BR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function zR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function VR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(yh.compareFunction=t.isReversedDepthBuffer()?bp:Ap,s=yh):s=my,t.setTexture2D(e||s,r)}function HR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vy,r)}function GR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||_y,r)}function WR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||gy,r)}function XR(n){switch(n){case 5126:return AR;case 35664:return bR;case 35665:return RR;case 35666:return CR;case 35674:return PR;case 35675:return LR;case 35676:return NR;case 5124:case 35670:return IR;case 35667:case 35671:return DR;case 35668:case 35672:return UR;case 35669:case 35673:return FR;case 5125:return OR;case 36294:return kR;case 36295:return BR;case 36296:return zR;case 35678:case 36198:case 36298:case 36306:case 35682:return VR;case 35679:case 36299:case 36307:return HR;case 35680:case 36300:case 36308:case 36293:return GR;case 36289:case 36303:case 36311:case 36292:return WR}}function YR(n,e){n.uniform1fv(this.addr,e)}function KR(n,e){const t=yo(e,this.size,2);n.uniform2fv(this.addr,t)}function qR(n,e){const t=yo(e,this.size,3);n.uniform3fv(this.addr,t)}function $R(n,e){const t=yo(e,this.size,4);n.uniform4fv(this.addr,t)}function jR(n,e){const t=yo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ZR(n,e){const t=yo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function JR(n,e){const t=yo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function QR(n,e){n.uniform1iv(this.addr,e)}function eC(n,e){n.uniform2iv(this.addr,e)}function tC(n,e){n.uniform3iv(this.addr,e)}function nC(n,e){n.uniform4iv(this.addr,e)}function iC(n,e){n.uniform1uiv(this.addr,e)}function rC(n,e){n.uniform2uiv(this.addr,e)}function sC(n,e){n.uniform3uiv(this.addr,e)}function oC(n,e){n.uniform4uiv(this.addr,e)}function aC(n,e,t){const i=this.cache,r=e.length,s=au(t,r);Wt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=yh:o=my;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function lC(n,e,t){const i=this.cache,r=e.length,s=au(t,r);Wt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vy,s[o])}function cC(n,e,t){const i=this.cache,r=e.length,s=au(t,r);Wt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||_y,s[o])}function uC(n,e,t){const i=this.cache,r=e.length,s=au(t,r);Wt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||gy,s[o])}function fC(n){switch(n){case 5126:return YR;case 35664:return KR;case 35665:return qR;case 35666:return $R;case 35674:return jR;case 35675:return ZR;case 35676:return JR;case 5124:case 35670:return QR;case 35667:case 35671:return eC;case 35668:case 35672:return tC;case 35669:case 35673:return nC;case 5125:return iC;case 36294:return rC;case 36295:return sC;case 36296:return oC;case 35678:case 36198:case 36298:case 36306:case 35682:return aC;case 35679:case 36299:case 36307:return lC;case 35680:case 36300:case 36308:case 36293:return cC;case 36289:case 36303:case 36311:case 36292:return uC}}class dC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=XR(t.type)}}class hC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fC(t.type)}}class pC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Rf=/(\w+)(\])?(\[|\.)?/g;function $0(n,e){n.seq.push(e),n.map[e.id]=e}function mC(n,e,t){const i=n.name,r=i.length;for(Rf.lastIndex=0;;){const s=Rf.exec(i),o=Rf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){$0(t,c===void 0?new dC(a,n,e):new hC(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new pC(a),$0(t,d)),t=d}}}class sc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);mC(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function j0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const gC=37297;let vC=0;function _C(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Z0=new qe;function xC(n){rt._getMatrix(Z0,rt.workingColorSpace,n);const e=`mat3( ${Z0.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case Ic:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function J0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+_C(n.getShaderSource(e),a)}else return s}function yC(n,e){const t=xC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const SC={[Ux]:"Linear",[Fx]:"Reinhard",[Ox]:"Cineon",[kx]:"ACESFilmic",[zx]:"AgX",[Vx]:"Neutral",[Bx]:"Custom"};function MC(n,e){const t=SC[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zl=new I;function EC(){rt.getLuminanceCoefficients(zl);const n=zl.x.toFixed(4),e=zl.y.toFixed(4),t=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function wC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function $o(n){return n!==""}function Q0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ev(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(n){return n.replace(bC,CC)}const RC=new Map;function CC(n,e){let t=et[e];if(t===void 0){const i=RC.get(e);if(i!==void 0)t=et[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Sh(t)}const PC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tv(n){return n.replace(PC,LC)}function LC(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nv(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const NC={[Ql]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function IC(n){return NC[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const DC={[os]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE",[nu]:"ENVMAP_TYPE_CUBE_UV"};function UC(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":DC[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const FC={[ao]:"ENVMAP_MODE_REFRACTION"};function OC(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":FC[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kC={[Dx]:"ENVMAP_BLENDING_MULTIPLY",[fT]:"ENVMAP_BLENDING_MIX",[dT]:"ENVMAP_BLENDING_ADD"};function BC(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":kC[n.combine]||"ENVMAP_BLENDING_NONE"}function zC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function VC(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=IC(t),c=UC(t),u=OC(t),d=BC(t),f=zC(t),p=TC(t),m=wC(s),g=r.createProgram();let v,h,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter($o).join(`
`),v.length>0&&(v+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter($o).join(`
`),h.length>0&&(h+=`
`)):(v=[nv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),h=[nv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?et.tonemapping_pars_fragment:"",t.toneMapping!==wi?MC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,yC("linearToOutputTexel",t.outputColorSpace),EC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($o).join(`
`)),o=Sh(o),o=Q0(o,t),o=ev(o,t),a=Sh(a),a=Q0(a,t),a=ev(a,t),o=tv(o),a=tv(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,h=["#define varying in",t.glslVersion===jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=_+v+o,x=_+h+a,E=j0(r,r.VERTEX_SHADER,M),w=j0(r,r.FRAGMENT_SHADER,x);r.attachShader(g,E),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function b(L){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(g)||"",j=r.getShaderInfoLog(E)||"",B=r.getShaderInfoLog(w)||"",z=F.trim(),Q=j.trim(),Y=B.trim();let U=!0,J=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,E,w);else{const ne=J0(r,E,"vertex"),ue=J0(r,w,"fragment");Ye("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+ne+`
`+ue)}else z!==""?Oe("WebGLProgram: Program Info Log:",z):(Q===""||Y==="")&&(J=!1);J&&(L.diagnostics={runnable:U,programLog:z,vertexShader:{log:Q,prefix:v},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(E),r.deleteShader(w),y=new sc(r,g),C=AC(r,g)}let y;this.getUniforms=function(){return y===void 0&&b(this),y};let C;this.getAttributes=function(){return C===void 0&&b(this),C};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(g,gC)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vC++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=w,this}let HC=0;class GC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new WC(e),t.set(e,i)),i}}class WC{constructor(e){this.id=HC++,this.code=e,this.usedTimes=0}}function XC(n){return n===as||n===Lc||n===Nc}function YC(n,e,t,i,r,s){const o=new Qx,a=new GC,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,C,P,L,F,j){const B=L.fog,z=F.geometry,Q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,Y=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,U=e.get(y.envMap||Q,Y),J=U&&U.mapping===nu?U.image.height:null,ne=p[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Oe("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ue=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,xe=ue!==void 0?ue.length:0;let $e=0;z.morphAttributes.position!==void 0&&($e=1),z.morphAttributes.normal!==void 0&&($e=2),z.morphAttributes.color!==void 0&&($e=3);let ot,Qe,te,ve;if(ne){const De=_i[ne];ot=De.vertexShader,Qe=De.fragmentShader}else{ot=y.vertexShader,Qe=y.fragmentShader;const De=a.getVertexShaderStage(y),Pt=a.getFragmentShaderStage(y);a.update(y,De,Pt),te=De.id,ve=Pt.id}const de=n.getRenderTarget(),We=n.state.buffers.depth.getReversed(),Xe=F.isInstancedMesh===!0,Be=F.isBatchedMesh===!0,pt=!!y.map,H=!!y.matcap,Me=!!U,be=!!y.aoMap,se=!!y.lightMap,fe=!!y.bumpMap&&y.wireframe===!1,Ee=!!y.normalMap,G=!!y.displacementMap,V=!!y.emissiveMap,he=!!y.metalnessMap,oe=!!y.roughnessMap,R=y.anisotropy>0,ce=y.clearcoat>0,Se=y.dispersion>0,A=y.iridescence>0,S=y.sheen>0,N=y.transmission>0,k=R&&!!y.anisotropyMap,K=ce&&!!y.clearcoatMap,ae=ce&&!!y.clearcoatNormalMap,re=ce&&!!y.clearcoatRoughnessMap,q=A&&!!y.iridescenceMap,Z=A&&!!y.iridescenceThicknessMap,pe=S&&!!y.sheenColorMap,ge=S&&!!y.sheenRoughnessMap,ye=!!y.specularMap,_e=!!y.specularColorMap,Ue=!!y.specularIntensityMap,Ve=N&&!!y.transmissionMap,je=N&&!!y.thicknessMap,D=!!y.gradientMap,Te=!!y.alphaMap,ie=y.alphaTest>0,we=!!y.alphaHash,Pe=!!y.extensions;let le=wi;y.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(le=n.toneMapping);const ke={shaderID:ne,shaderType:y.type,shaderName:y.name,vertexShader:ot,fragmentShader:Qe,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Be,batchingColor:Be&&F._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&F.instanceColor!==null,instancingMorph:Xe&&F.morphTexture!==null,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:pt,matcap:H,envMap:Me,envMapMode:Me&&U.mapping,envMapCubeUVHeight:J,aoMap:be,lightMap:se,bumpMap:fe,normalMap:Ee,displacementMap:G,emissiveMap:V,normalMapObjectSpace:Ee&&y.normalMapType===vT,normalMapTangentSpace:Ee&&y.normalMapType===mh,packedNormalMap:Ee&&y.normalMapType===mh&&XC(y.normalMap.format),metalnessMap:he,roughnessMap:oe,anisotropy:R,anisotropyMap:k,clearcoat:ce,clearcoatMap:K,clearcoatNormalMap:ae,clearcoatRoughnessMap:re,dispersion:Se,iridescence:A,iridescenceMap:q,iridescenceThicknessMap:Z,sheen:S,sheenColorMap:pe,sheenRoughnessMap:ge,specularMap:ye,specularColorMap:_e,specularIntensityMap:Ue,transmission:N,transmissionMap:Ve,thicknessMap:je,gradientMap:D,opaque:y.transparent===!1&&y.blending===$s&&y.alphaToCoverage===!1,alphaMap:Te,alphaTest:ie,alphaHash:we,combine:y.combine,mapUv:pt&&m(y.map.channel),aoMapUv:be&&m(y.aoMap.channel),lightMapUv:se&&m(y.lightMap.channel),bumpMapUv:fe&&m(y.bumpMap.channel),normalMapUv:Ee&&m(y.normalMap.channel),displacementMapUv:G&&m(y.displacementMap.channel),emissiveMapUv:V&&m(y.emissiveMap.channel),metalnessMapUv:he&&m(y.metalnessMap.channel),roughnessMapUv:oe&&m(y.roughnessMap.channel),anisotropyMapUv:k&&m(y.anisotropyMap.channel),clearcoatMapUv:K&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ge&&m(y.sheenRoughnessMap.channel),specularMapUv:ye&&m(y.specularMap.channel),specularColorMapUv:_e&&m(y.specularColorMap.channel),specularIntensityMapUv:Ue&&m(y.specularIntensityMap.channel),transmissionMapUv:Ve&&m(y.transmissionMap.channel),thicknessMapUv:je&&m(y.thicknessMap.channel),alphaMapUv:Te&&m(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ee||R),vertexNormals:!!z.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(pt||Te),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||z.attributes.normal===void 0&&Ee===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:We,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:$e,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:le,decodeVideoTexture:pt&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===ut,decodeVideoTextureEmissive:V&&y.emissiveMap.isVideoTexture===!0&&rt.getTransfer(y.emissiveMap.colorSpace)===ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yi,flipSided:y.side===Tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Pe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&y.extensions.multiDraw===!0||Be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function v(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)C.push(P),C.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(h(C,y),_(C,y),C.push(n.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function h(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function _(y,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function M(y){const C=p[y.type];let P;if(C){const L=_i[C];P=Bw.clone(L.uniforms)}else P=y.uniforms;return P}function x(y,C){let P=u.get(C);return P!==void 0?++P.usedTimes:(P=new VC(n,C,y,r),c.push(P),u.set(C,P)),P}function E(y){if(--y.usedTimes===0){const C=c.indexOf(y);c[C]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function w(y){a.remove(y)}function b(){a.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:x,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:b}}function KC(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function qC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function iv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,m,g,v,h){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:p,material:m,materialVariant:o(f),groupOrder:g,renderOrder:f.renderOrder,z:v,group:h},n[e]=_):(_.id=f.id,_.object=f,_.geometry=p,_.material=m,_.materialVariant=o(f),_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=v,_.group=h),e++,_}function l(f,p,m,g,v,h){const _=a(f,p,m,g,v,h);m.transmission>0?i.push(_):m.transparent===!0?r.push(_):t.push(_)}function c(f,p,m,g,v,h){const _=a(f,p,m,g,v,h);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function u(f,p,m){t.length>1&&t.sort(f||qC),i.length>1&&i.sort(p||iv),r.length>1&&r.sort(p||iv),m&&(t.reverse(),i.reverse(),r.reverse())}function d(){for(let f=e,p=n.length;f<p;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function $C(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new rv,n.set(i,[o])):r>=s.length?(o=new rv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function jC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ke};break;case"SpotLight":t={position:new I,direction:new I,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function ZC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let JC=0;function QC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function eP(n){const e=new jC,t=ZC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new Je,o=new Je;function a(c){let u=0,d=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,m=0,g=0,v=0,h=0,_=0,M=0,x=0,E=0,w=0,b=0;c.sort(QC);for(let C=0,P=c.length;C<P;C++){const L=c[C],F=L.color,j=L.intensity,B=L.distance;let z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===as?z=L.shadow.map.texture:z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=F.r*j,d+=F.g*j,f+=F.b*j;else if(L.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(L.sh.coefficients[Q],j);b++}else if(L.isDirectionalLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,U=t.get(L);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=L.shadow.matrix,_++}i.directional[p]=Q,p++}else if(L.isSpotLight){const Q=e.get(L);Q.position.setFromMatrixPosition(L.matrixWorld),Q.color.copy(F).multiplyScalar(j),Q.distance=B,Q.coneCos=Math.cos(L.angle),Q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Q.decay=L.decay,i.spot[g]=Q;const Y=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,Y.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[g]=Y.matrix,L.castShadow){const U=t.get(L);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,i.spotShadow[g]=U,i.spotShadowMap[g]=z,x++}g++}else if(L.isRectAreaLight){const Q=e.get(L);Q.color.copy(F).multiplyScalar(j),Q.halfWidth.set(L.width*.5,0,0),Q.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=Q,v++}else if(L.isPointLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),Q.distance=L.distance,Q.decay=L.decay,L.castShadow){const Y=L.shadow,U=t.get(L);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,U.shadowCameraNear=Y.camera.near,U.shadowCameraFar=Y.camera.far,i.pointShadow[m]=U,i.pointShadowMap[m]=z,i.pointShadowMatrix[m]=L.shadow.matrix,M++}i.point[m]=Q,m++}else if(L.isHemisphereLight){const Q=e.get(L);Q.skyColor.copy(L.color).multiplyScalar(j),Q.groundColor.copy(L.groundColor).multiplyScalar(j),i.hemi[h]=Q,h++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==p||y.pointLength!==m||y.spotLength!==g||y.rectAreaLength!==v||y.hemiLength!==h||y.numDirectionalShadows!==_||y.numPointShadows!==M||y.numSpotShadows!==x||y.numSpotMaps!==E||y.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=v,i.point.length=m,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=b,y.directionalLength=p,y.pointLength=m,y.spotLength=g,y.rectAreaLength=v,y.hemiLength=h,y.numDirectionalShadows=_,y.numPointShadows=M,y.numSpotShadows=x,y.numSpotMaps=E,y.numLightProbes=b,i.version=JC++)}function l(c,u){let d=0,f=0,p=0,m=0,g=0;const v=u.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){const M=c[h];if(M.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),d++}else if(M.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),p++}else if(M.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(v),o.identity(),s.copy(M.matrixWorld),s.premultiply(v),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(v),f++}else if(M.isHemisphereLight){const x=i.hemi[g];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(v),g++}}}return{setup:a,setupView:l,state:i}}function sv(n){const e=new eP(n),t=[],i=[],r=[];function s(f){d.camera=f,t.length=0,i.length=0,r.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function tP(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new sv(n),e.set(r,[a])):s>=o.length?(a=new sv(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const nP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iP=`uniform sampler2D shadow_pass;
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
}`,rP=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],sP=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],ov=new Je,Vo=new I,Cf=new I;function oP(n,e,t){let i=new Up;const r=new Ge,s=new Ge,o=new gt,a=new Gw,l=new Ww,c={},u=t.maxTextureSize,d={[Qi]:Tn,[Tn]:Qi,[yi]:yi},f=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:nP,fragmentShader:iP}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new wn;m.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new cn(m,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let h=this.type;this.render=function(w,b,y){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;this.type===YE&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ql);const C=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Ki),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const j=h!==this.type;j&&b.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(z=>z.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,z=w.length;B<z;B++){const Q=w[B],Y=Q.shadow;if(Y===void 0){Oe("WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const U=Y.getFrameExtents();r.multiply(U),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/U.x),r.x=s.x*U.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/U.y),r.y=s.y*U.y,Y.mapSize.y=s.y));const J=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=J,Y.map===null||j===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Ko){if(Q.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Ai(r.x,r.y,{format:as,type:er,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),Y.map.texture.name=Q.name+".shadowMap",Y.map.depthTexture=new uo(r.x,r.y,Wn),Y.map.depthTexture.name=Q.name+".shadowMapDepth",Y.map.depthTexture.format=tr,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ht,Y.map.depthTexture.magFilter=Ht}else Q.isPointLight?(Y.map=new py(r.x),Y.map.depthTexture=new Mw(r.x,Ri)):(Y.map=new Ai(r.x,r.y),Y.map.depthTexture=new uo(r.x,r.y,Ri)),Y.map.depthTexture.name=Q.name+".shadowMap",Y.map.depthTexture.format=tr,this.type===Ql?(Y.map.depthTexture.compareFunction=J?bp:Ap,Y.map.depthTexture.minFilter=Gt,Y.map.depthTexture.magFilter=Gt):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ht,Y.map.depthTexture.magFilter=Ht);Y.camera.updateProjectionMatrix()}const ne=Y.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<ne;ue++){if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,ue),n.clear();else{ue===0&&(n.setRenderTarget(Y.map),n.clear());const xe=Y.getViewport(ue);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),F.viewport(o)}if(Q.isPointLight){const xe=Y.camera,$e=Y.matrix,ot=Q.distance||xe.far;ot!==xe.far&&(xe.far=ot,xe.updateProjectionMatrix()),Vo.setFromMatrixPosition(Q.matrixWorld),xe.position.copy(Vo),Cf.copy(xe.position),Cf.add(rP[ue]),xe.up.copy(sP[ue]),xe.lookAt(Cf),xe.updateMatrixWorld(),$e.makeTranslation(-Vo.x,-Vo.y,-Vo.z),ov.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(ov,xe.coordinateSystem,xe.reversedDepth)}else Y.updateMatrices(Q);i=Y.getFrustum(),x(b,y,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===Ko&&_(Y,y),Y.needsUpdate=!1}h=this.type,v.needsUpdate=!1,n.setRenderTarget(C,P,L)};function _(w,b){const y=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ai(r.x,r.y,{format:as,type:er})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(b,null,y,f,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(b,null,y,p,g,null)}function M(w,b,y,C){let P=null;const L=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)P=L;else if(P=y.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const F=P.uuid,j=b.uuid;let B=c[F];B===void 0&&(B={},c[F]=B);let z=B[j];z===void 0&&(z=P.clone(),B[j]=z,b.addEventListener("dispose",E)),P=z}if(P.visible=b.visible,P.wireframe=b.wireframe,C===Ko?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:d[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=n.properties.get(P);F.light=y}return P}function x(w,b,y,C,P){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Ko)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const j=e.update(w),B=w.material;if(Array.isArray(B)){const z=j.groups;for(let Q=0,Y=z.length;Q<Y;Q++){const U=z[Q],J=B[U.materialIndex];if(J&&J.visible){const ne=M(w,J,C,P);w.onBeforeShadow(n,w,b,y,j,ne,U),n.renderBufferDirect(y,null,j,ne,w,U),w.onAfterShadow(n,w,b,y,j,ne,U)}}}else if(B.visible){const z=M(w,B,C,P);w.onBeforeShadow(n,w,b,y,j,z,null),n.renderBufferDirect(y,null,j,z,w,null),w.onAfterShadow(n,w,b,y,j,z,null)}}const F=w.children;for(let j=0,B=F.length;j<B;j++)x(F[j],b,y,C,P)}function E(w){w.target.removeEventListener("dispose",E);for(const y in c){const C=c[y],P=w.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function aP(n,e){function t(){let D=!1;const Te=new gt;let ie=null;const we=new gt(0,0,0,0);return{setMask:function(Pe){ie!==Pe&&!D&&(n.colorMask(Pe,Pe,Pe,Pe),ie=Pe)},setLocked:function(Pe){D=Pe},setClear:function(Pe,le,ke,De,Pt){Pt===!0&&(Pe*=De,le*=De,ke*=De),Te.set(Pe,le,ke,De),we.equals(Te)===!1&&(n.clearColor(Pe,le,ke,De),we.copy(Te))},reset:function(){D=!1,ie=null,we.set(-1,0,0,0)}}}function i(){let D=!1,Te=!1,ie=null,we=null,Pe=null;return{setReversed:function(le){if(Te!==le){const ke=e.get("EXT_clip_control");le?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Te=le;const De=Pe;Pe=null,this.setClear(De)}},getReversed:function(){return Te},setTest:function(le){le?de(n.DEPTH_TEST):We(n.DEPTH_TEST)},setMask:function(le){ie!==le&&!D&&(n.depthMask(le),ie=le)},setFunc:function(le){if(Te&&(le=RT[le]),we!==le){switch(le){case Ld:n.depthFunc(n.NEVER);break;case Nd:n.depthFunc(n.ALWAYS);break;case Id:n.depthFunc(n.LESS);break;case oo:n.depthFunc(n.LEQUAL);break;case Dd:n.depthFunc(n.EQUAL);break;case Ud:n.depthFunc(n.GEQUAL);break;case Fd:n.depthFunc(n.GREATER);break;case Od:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=le}},setLocked:function(le){D=le},setClear:function(le){Pe!==le&&(Pe=le,Te&&(le=1-le),n.clearDepth(le))},reset:function(){D=!1,ie=null,we=null,Pe=null,Te=!1}}}function r(){let D=!1,Te=null,ie=null,we=null,Pe=null,le=null,ke=null,De=null,Pt=null;return{setTest:function(xt){D||(xt?de(n.STENCIL_TEST):We(n.STENCIL_TEST))},setMask:function(xt){Te!==xt&&!D&&(n.stencilMask(xt),Te=xt)},setFunc:function(xt,ui,fi){(ie!==xt||we!==ui||Pe!==fi)&&(n.stencilFunc(xt,ui,fi),ie=xt,we=ui,Pe=fi)},setOp:function(xt,ui,fi){(le!==xt||ke!==ui||De!==fi)&&(n.stencilOp(xt,ui,fi),le=xt,ke=ui,De=fi)},setLocked:function(xt){D=xt},setClear:function(xt){Pt!==xt&&(n.clearStencil(xt),Pt=xt)},reset:function(){D=!1,Te=null,ie=null,we=null,Pe=null,le=null,ke=null,De=null,Pt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f={},p=new WeakMap,m=[],g=null,v=!1,h=null,_=null,M=null,x=null,E=null,w=null,b=null,y=new Ke(0,0,0),C=0,P=!1,L=null,F=null,j=null,B=null,z=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,U=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=U>=1):J.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=U>=2);let ne=null,ue={};const xe=n.getParameter(n.SCISSOR_BOX),$e=n.getParameter(n.VIEWPORT),ot=new gt().fromArray(xe),Qe=new gt().fromArray($e);function te(D,Te,ie,we){const Pe=new Uint8Array(4),le=n.createTexture();n.bindTexture(D,le),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<ie;ke++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(Te+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return le}const ve={};ve[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(n.DEPTH_TEST),o.setFunc(oo),fe(!1),Ee(zg),de(n.CULL_FACE),be(Ki);function de(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function We(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Xe(D,Te){return f[D]!==Te?(n.bindFramebuffer(D,Te),f[D]=Te,D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Te),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function Be(D,Te){let ie=m,we=!1;if(D){ie=p.get(Te),ie===void 0&&(ie=[],p.set(Te,ie));const Pe=D.textures;if(ie.length!==Pe.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let le=0,ke=Pe.length;le<ke;le++)ie[le]=n.COLOR_ATTACHMENT0+le;ie.length=Pe.length,we=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,we=!0);we&&n.drawBuffers(ie)}function pt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const H={[Kr]:n.FUNC_ADD,[qE]:n.FUNC_SUBTRACT,[$E]:n.FUNC_REVERSE_SUBTRACT};H[jE]=n.MIN,H[ZE]=n.MAX;const Me={[JE]:n.ZERO,[QE]:n.ONE,[eT]:n.SRC_COLOR,[Cd]:n.SRC_ALPHA,[oT]:n.SRC_ALPHA_SATURATE,[rT]:n.DST_COLOR,[nT]:n.DST_ALPHA,[tT]:n.ONE_MINUS_SRC_COLOR,[Pd]:n.ONE_MINUS_SRC_ALPHA,[sT]:n.ONE_MINUS_DST_COLOR,[iT]:n.ONE_MINUS_DST_ALPHA,[aT]:n.CONSTANT_COLOR,[lT]:n.ONE_MINUS_CONSTANT_COLOR,[cT]:n.CONSTANT_ALPHA,[uT]:n.ONE_MINUS_CONSTANT_ALPHA};function be(D,Te,ie,we,Pe,le,ke,De,Pt,xt){if(D===Ki){v===!0&&(We(n.BLEND),v=!1);return}if(v===!1&&(de(n.BLEND),v=!0),D!==KE){if(D!==h||xt!==P){if((_!==Kr||E!==Kr)&&(n.blendEquation(n.FUNC_ADD),_=Kr,E=Kr),xt)switch(D){case $s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vg:n.blendFunc(n.ONE,n.ONE);break;case Hg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gg:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ye("WebGLState: Invalid blending: ",D);break}else switch(D){case $s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vg:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hg:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gg:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",D);break}M=null,x=null,w=null,b=null,y.set(0,0,0),C=0,h=D,P=xt}return}Pe=Pe||Te,le=le||ie,ke=ke||we,(Te!==_||Pe!==E)&&(n.blendEquationSeparate(H[Te],H[Pe]),_=Te,E=Pe),(ie!==M||we!==x||le!==w||ke!==b)&&(n.blendFuncSeparate(Me[ie],Me[we],Me[le],Me[ke]),M=ie,x=we,w=le,b=ke),(De.equals(y)===!1||Pt!==C)&&(n.blendColor(De.r,De.g,De.b,Pt),y.copy(De),C=Pt),h=D,P=!1}function se(D,Te){D.side===yi?We(n.CULL_FACE):de(n.CULL_FACE);let ie=D.side===Tn;Te&&(ie=!ie),fe(ie),D.blending===$s&&D.transparent===!1?be(Ki):be(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const we=D.stencilWrite;a.setTest(we),we&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),V(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):We(n.SAMPLE_ALPHA_TO_COVERAGE)}function fe(D){L!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),L=D)}function Ee(D){D!==WE?(de(n.CULL_FACE),D!==F&&(D===zg?n.cullFace(n.BACK):D===XE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):We(n.CULL_FACE),F=D}function G(D){D!==j&&(Y&&n.lineWidth(D),j=D)}function V(D,Te,ie){D?(de(n.POLYGON_OFFSET_FILL),(B!==Te||z!==ie)&&(B=Te,z=ie,o.getReversed()&&(Te=-Te),n.polygonOffset(Te,ie))):We(n.POLYGON_OFFSET_FILL)}function he(D){D?de(n.SCISSOR_TEST):We(n.SCISSOR_TEST)}function oe(D){D===void 0&&(D=n.TEXTURE0+Q-1),ne!==D&&(n.activeTexture(D),ne=D)}function R(D,Te,ie){ie===void 0&&(ne===null?ie=n.TEXTURE0+Q-1:ie=ne);let we=ue[ie];we===void 0&&(we={type:void 0,texture:void 0},ue[ie]=we),(we.type!==D||we.texture!==Te)&&(ne!==ie&&(n.activeTexture(ie),ne=ie),n.bindTexture(D,Te||ve[D]),we.type=D,we.texture=Te)}function ce(){const D=ue[ne];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Se(){try{n.compressedTexImage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function S(){try{n.texSubImage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function N(){try{n.texSubImage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function ae(){try{n.texStorage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function re(){try{n.texStorage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function q(){try{n.texImage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function Z(){try{n.texImage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function pe(D){return d[D]!==void 0?d[D]:n.getParameter(D)}function ge(D,Te){d[D]!==Te&&(n.pixelStorei(D,Te),d[D]=Te)}function ye(D){ot.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ot.copy(D))}function _e(D){Qe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Qe.copy(D))}function Ue(D,Te){let ie=c.get(Te);ie===void 0&&(ie=new WeakMap,c.set(Te,ie));let we=ie.get(D);we===void 0&&(we=n.getUniformBlockIndex(Te,D.name),ie.set(D,we))}function Ve(D,Te){const we=c.get(Te).get(D);l.get(Te)!==we&&(n.uniformBlockBinding(Te,we,D.__bindingPointIndex),l.set(Te,we))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,ue={},f={},p=new WeakMap,m=[],g=null,v=!1,h=null,_=null,M=null,x=null,E=null,w=null,b=null,y=new Ke(0,0,0),C=0,P=!1,L=null,F=null,j=null,B=null,z=null,ot.set(0,0,n.canvas.width,n.canvas.height),Qe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:de,disable:We,bindFramebuffer:Xe,drawBuffers:Be,useProgram:pt,setBlending:be,setMaterial:se,setFlipSided:fe,setCullFace:Ee,setLineWidth:G,setPolygonOffset:V,setScissorTest:he,activeTexture:oe,bindTexture:R,unbindTexture:ce,compressedTexImage2D:Se,compressedTexImage3D:A,texImage2D:q,texImage3D:Z,pixelStorei:ge,getParameter:pe,updateUBOMapping:Ue,uniformBlockBinding:Ve,texStorage2D:ae,texStorage3D:re,texSubImage2D:S,texSubImage3D:N,compressedTexSubImage2D:k,compressedTexSubImage3D:K,scissor:ye,viewport:_e,reset:je}}function lP(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap,d=new Set;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return m?new OffscreenCanvas(A,S):Na("canvas")}function v(A,S,N){let k=1;const K=Se(A);if((K.width>N||K.height>N)&&(k=N/Math.max(K.width,K.height)),k<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ae=Math.floor(k*K.width),re=Math.floor(k*K.height);f===void 0&&(f=g(ae,re));const q=S?g(ae,re):f;return q.width=ae,q.height=re,q.getContext("2d").drawImage(A,0,0,ae,re),Oe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ae+"x"+re+")."),q}else return"data"in A&&Oe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function h(A){return A.generateMipmaps}function _(A){n.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(A,S,N,k,K,ae=!1){if(A!==null){if(n[A]!==void 0)return n[A];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let re;k&&(re=e.get("EXT_texture_norm16"),re||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=S;if(S===n.RED&&(N===n.FLOAT&&(q=n.R32F),N===n.HALF_FLOAT&&(q=n.R16F),N===n.UNSIGNED_BYTE&&(q=n.R8),N===n.UNSIGNED_SHORT&&re&&(q=re.R16_EXT),N===n.SHORT&&re&&(q=re.R16_SNORM_EXT)),S===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.R8UI),N===n.UNSIGNED_SHORT&&(q=n.R16UI),N===n.UNSIGNED_INT&&(q=n.R32UI),N===n.BYTE&&(q=n.R8I),N===n.SHORT&&(q=n.R16I),N===n.INT&&(q=n.R32I)),S===n.RG&&(N===n.FLOAT&&(q=n.RG32F),N===n.HALF_FLOAT&&(q=n.RG16F),N===n.UNSIGNED_BYTE&&(q=n.RG8),N===n.UNSIGNED_SHORT&&re&&(q=re.RG16_EXT),N===n.SHORT&&re&&(q=re.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RG8UI),N===n.UNSIGNED_SHORT&&(q=n.RG16UI),N===n.UNSIGNED_INT&&(q=n.RG32UI),N===n.BYTE&&(q=n.RG8I),N===n.SHORT&&(q=n.RG16I),N===n.INT&&(q=n.RG32I)),S===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RGB8UI),N===n.UNSIGNED_SHORT&&(q=n.RGB16UI),N===n.UNSIGNED_INT&&(q=n.RGB32UI),N===n.BYTE&&(q=n.RGB8I),N===n.SHORT&&(q=n.RGB16I),N===n.INT&&(q=n.RGB32I)),S===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),N===n.UNSIGNED_INT&&(q=n.RGBA32UI),N===n.BYTE&&(q=n.RGBA8I),N===n.SHORT&&(q=n.RGBA16I),N===n.INT&&(q=n.RGBA32I)),S===n.RGB&&(N===n.UNSIGNED_SHORT&&re&&(q=re.RGB16_EXT),N===n.SHORT&&re&&(q=re.RGB16_SNORM_EXT),N===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),S===n.RGBA){const Z=ae?Ic:rt.getTransfer(K);N===n.FLOAT&&(q=n.RGBA32F),N===n.HALF_FLOAT&&(q=n.RGBA16F),N===n.UNSIGNED_BYTE&&(q=Z===ut?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT&&re&&(q=re.RGBA16_EXT),N===n.SHORT&&re&&(q=re.RGBA16_SNORM_EXT),N===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function E(A,S){let N;return A?S===null||S===Ri||S===Ra?N=n.DEPTH24_STENCIL8:S===Wn?N=n.DEPTH32F_STENCIL8:S===ba&&(N=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ri||S===Ra?N=n.DEPTH_COMPONENT24:S===Wn?N=n.DEPTH_COMPONENT32F:S===ba&&(N=n.DEPTH_COMPONENT16),N}function w(A,S){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ht&&A.minFilter!==Gt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function b(A){const S=A.target;S.removeEventListener("dispose",b),C(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function y(A){const S=A.target;S.removeEventListener("dispose",y),L(S)}function C(A){const S=i.get(A);if(S.__webglInit===void 0)return;const N=A.source,k=p.get(N);if(k){const K=k[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(A),Object.keys(k).length===0&&p.delete(N)}i.remove(A)}function P(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const N=A.source,k=p.get(N);delete k[S.__cacheKey],o.memory.textures--}function L(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(S.__webglFramebuffer[k]))for(let K=0;K<S.__webglFramebuffer[k].length;K++)n.deleteFramebuffer(S.__webglFramebuffer[k][K]);else n.deleteFramebuffer(S.__webglFramebuffer[k]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[k])}else{if(Array.isArray(S.__webglFramebuffer))for(let k=0;k<S.__webglFramebuffer.length;k++)n.deleteFramebuffer(S.__webglFramebuffer[k]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let k=0;k<S.__webglColorRenderbuffer.length;k++)S.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[k]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const N=A.textures;for(let k=0,K=N.length;k<K;k++){const ae=i.get(N[k]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),o.memory.textures--),i.remove(N[k])}i.remove(A)}let F=0;function j(){F=0}function B(){return F}function z(A){F=A}function Q(){const A=F;return A>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),F+=1,A}function Y(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function U(A,S){const N=i.get(A);if(A.isVideoTexture&&R(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&N.__version!==A.version){const k=A.image;if(k===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{We(N,A,S);return}}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+S)}function J(A,S){const N=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){We(N,A,S);return}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+S)}function ne(A,S){const N=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){We(N,A,S);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+S)}function ue(A,S){const N=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&N.__version!==A.version){Xe(N,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+S)}const xe={[lo]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[Pc]:n.MIRRORED_REPEAT},$e={[Ht]:n.NEAREST,[Gx]:n.NEAREST_MIPMAP_NEAREST,[qo]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[ec]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},ot={[_T]:n.NEVER,[ET]:n.ALWAYS,[xT]:n.LESS,[Ap]:n.LEQUAL,[yT]:n.EQUAL,[bp]:n.GEQUAL,[ST]:n.GREATER,[MT]:n.NOTEQUAL};function Qe(A,S){if(S.type===Wn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Gt||S.magFilter===ec||S.magFilter===qo||S.magFilter===Wi||S.minFilter===Gt||S.minFilter===ec||S.minFilter===qo||S.minFilter===Wi)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,xe[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,xe[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,xe[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,$e[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,$e[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ot[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ht||S.minFilter!==qo&&S.minFilter!==Wi||S.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function te(A,S){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",b));const k=S.source;let K=p.get(k);K===void 0&&(K={},p.set(k,K));const ae=Y(S);if(ae!==A.__cacheKey){K[ae]===void 0&&(K[ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),K[ae].usedTimes++;const re=K[A.__cacheKey];re!==void 0&&(K[A.__cacheKey].usedTimes--,re.usedTimes===0&&P(S)),A.__cacheKey=ae,A.__webglTexture=K[ae].texture}return N}function ve(A,S,N){return Math.floor(Math.floor(A/N)/S)}function de(A,S,N,k){const ae=A.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,N,k,S.data);else{ae.sort((ge,ye)=>ge.start-ye.start);let re=0;for(let ge=1;ge<ae.length;ge++){const ye=ae[re],_e=ae[ge],Ue=ye.start+ye.count,Ve=ve(_e.start,S.width,4),je=ve(ye.start,S.width,4);_e.start<=Ue+1&&Ve===je&&ve(_e.start+_e.count-1,S.width,4)===Ve?ye.count=Math.max(ye.count,_e.start+_e.count-ye.start):(++re,ae[re]=_e)}ae.length=re+1;const q=t.getParameter(n.UNPACK_ROW_LENGTH),Z=t.getParameter(n.UNPACK_SKIP_PIXELS),pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let ge=0,ye=ae.length;ge<ye;ge++){const _e=ae[ge],Ue=Math.floor(_e.start/4),Ve=Math.ceil(_e.count/4),je=Ue%S.width,D=Math.floor(Ue/S.width),Te=Ve,ie=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,je),t.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,je,D,Te,ie,N,k,S.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(n.UNPACK_SKIP_ROWS,pe)}}function We(A,S,N){let k=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(k=n.TEXTURE_3D);const K=te(A,S),ae=S.source;t.bindTexture(k,A.__webglTexture,n.TEXTURE0+N);const re=i.get(ae);if(ae.version!==re.__version||K===!0){if(t.activeTexture(n.TEXTURE0+N),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ie=rt.getPrimaries(rt.workingColorSpace),we=S.colorSpace===yr?null:rt.getPrimaries(S.colorSpace),Pe=S.colorSpace===yr||ie===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let Z=v(S.image,!1,r.maxTextureSize);Z=ce(S,Z);const pe=s.convert(S.format,S.colorSpace),ge=s.convert(S.type);let ye=x(S.internalFormat,pe,ge,S.normalized,S.colorSpace,S.isVideoTexture);Qe(k,S);let _e;const Ue=S.mipmaps,Ve=S.isVideoTexture!==!0,je=re.__version===void 0||K===!0,D=ae.dataReady,Te=w(S,Z);if(S.isDepthTexture)ye=E(S.format===Jr,S.type),je&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,ye,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,ye,Z.width,Z.height,0,pe,ge,null));else if(S.isDataTexture)if(Ue.length>0){Ve&&je&&t.texStorage2D(n.TEXTURE_2D,Te,ye,Ue[0].width,Ue[0].height);for(let ie=0,we=Ue.length;ie<we;ie++)_e=Ue[ie],Ve?D&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,_e.width,_e.height,pe,ge,_e.data):t.texImage2D(n.TEXTURE_2D,ie,ye,_e.width,_e.height,0,pe,ge,_e.data);S.generateMipmaps=!1}else Ve?(je&&t.texStorage2D(n.TEXTURE_2D,Te,ye,Z.width,Z.height),D&&de(S,Z,pe,ge)):t.texImage2D(n.TEXTURE_2D,0,ye,Z.width,Z.height,0,pe,ge,Z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,ye,Ue[0].width,Ue[0].height,Z.depth);for(let ie=0,we=Ue.length;ie<we;ie++)if(_e=Ue[ie],S.format!==Xn)if(pe!==null)if(Ve){if(D)if(S.layerUpdates.size>0){const Pe=O0(_e.width,_e.height,S.format,S.type);for(const le of S.layerUpdates){const ke=_e.data.subarray(le*Pe/_e.data.BYTES_PER_ELEMENT,(le+1)*Pe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,le,_e.width,_e.height,1,pe,ke)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,_e.width,_e.height,Z.depth,pe,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,ye,_e.width,_e.height,Z.depth,0,_e.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,_e.width,_e.height,Z.depth,pe,ge,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,ye,_e.width,_e.height,Z.depth,0,pe,ge,_e.data)}else{Ve&&je&&t.texStorage2D(n.TEXTURE_2D,Te,ye,Ue[0].width,Ue[0].height);for(let ie=0,we=Ue.length;ie<we;ie++)_e=Ue[ie],S.format!==Xn?pe!==null?Ve?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,_e.width,_e.height,pe,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,ye,_e.width,_e.height,0,_e.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?D&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,_e.width,_e.height,pe,ge,_e.data):t.texImage2D(n.TEXTURE_2D,ie,ye,_e.width,_e.height,0,pe,ge,_e.data)}else if(S.isDataArrayTexture)if(Ve){if(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,ye,Z.width,Z.height,Z.depth),D)if(S.layerUpdates.size>0){const ie=O0(Z.width,Z.height,S.format,S.type);for(const we of S.layerUpdates){const Pe=Z.data.subarray(we*ie/Z.data.BYTES_PER_ELEMENT,(we+1)*ie/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,we,Z.width,Z.height,1,pe,ge,Pe)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,pe,ge,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,Z.width,Z.height,Z.depth,0,pe,ge,Z.data);else if(S.isData3DTexture)Ve?(je&&t.texStorage3D(n.TEXTURE_3D,Te,ye,Z.width,Z.height,Z.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,pe,ge,Z.data)):t.texImage3D(n.TEXTURE_3D,0,ye,Z.width,Z.height,Z.depth,0,pe,ge,Z.data);else if(S.isFramebufferTexture){if(je)if(Ve)t.texStorage2D(n.TEXTURE_2D,Te,ye,Z.width,Z.height);else{let ie=Z.width,we=Z.height;for(let Pe=0;Pe<Te;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,ye,ie,we,0,pe,ge,null),ie>>=1,we>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){const ie=n.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),Z.parentNode!==ie){ie.appendChild(Z),d.add(S),ie.onpaint=we=>{const Pe=we.changedElements;for(const le of d)Pe.includes(le.image)&&(le.needsUpdate=!0)},ie.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{const Pe=n.RGBA,le=n.RGBA,ke=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Pe,le,ke,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Ve&&je){const ie=Se(Ue[0]);t.texStorage2D(n.TEXTURE_2D,Te,ye,ie.width,ie.height)}for(let ie=0,we=Ue.length;ie<we;ie++)_e=Ue[ie],Ve?D&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,pe,ge,_e):t.texImage2D(n.TEXTURE_2D,ie,ye,pe,ge,_e);S.generateMipmaps=!1}else if(Ve){if(je){const ie=Se(Z);t.texStorage2D(n.TEXTURE_2D,Te,ye,ie.width,ie.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,ge,Z)}else t.texImage2D(n.TEXTURE_2D,0,ye,pe,ge,Z);h(S)&&_(k),re.__version=ae.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Xe(A,S,N){if(S.image.length!==6)return;const k=te(A,S),K=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+N);const ae=i.get(K);if(K.version!==ae.__version||k===!0){t.activeTexture(n.TEXTURE0+N);const re=rt.getPrimaries(rt.workingColorSpace),q=S.colorSpace===yr?null:rt.getPrimaries(S.colorSpace),Z=S.colorSpace===yr||re===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const pe=S.isCompressedTexture||S.image[0].isCompressedTexture,ge=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let le=0;le<6;le++)!pe&&!ge?ye[le]=v(S.image[le],!0,r.maxCubemapSize):ye[le]=ge?S.image[le].image:S.image[le],ye[le]=ce(S,ye[le]);const _e=ye[0],Ue=s.convert(S.format,S.colorSpace),Ve=s.convert(S.type),je=x(S.internalFormat,Ue,Ve,S.normalized,S.colorSpace),D=S.isVideoTexture!==!0,Te=ae.__version===void 0||k===!0,ie=K.dataReady;let we=w(S,_e);Qe(n.TEXTURE_CUBE_MAP,S);let Pe;if(pe){D&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,je,_e.width,_e.height);for(let le=0;le<6;le++){Pe=ye[le].mipmaps;for(let ke=0;ke<Pe.length;ke++){const De=Pe[ke];S.format!==Xn?Ue!==null?D?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,0,0,De.width,De.height,Ue,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,je,De.width,De.height,0,De.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,0,0,De.width,De.height,Ue,Ve,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,je,De.width,De.height,0,Ue,Ve,De.data)}}}else{if(Pe=S.mipmaps,D&&Te){Pe.length>0&&we++;const le=Se(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,je,le.width,le.height)}for(let le=0;le<6;le++)if(ge){D?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ye[le].width,ye[le].height,Ue,Ve,ye[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,ye[le].width,ye[le].height,0,Ue,Ve,ye[le].data);for(let ke=0;ke<Pe.length;ke++){const Pt=Pe[ke].image[le].image;D?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,0,0,Pt.width,Pt.height,Ue,Ve,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,je,Pt.width,Pt.height,0,Ue,Ve,Pt.data)}}else{D?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ue,Ve,ye[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,Ue,Ve,ye[le]);for(let ke=0;ke<Pe.length;ke++){const De=Pe[ke];D?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,0,0,Ue,Ve,De.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,je,Ue,Ve,De.image[le])}}}h(S)&&_(n.TEXTURE_CUBE_MAP),ae.__version=K.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Be(A,S,N,k,K,ae){const re=s.convert(N.format,N.colorSpace),q=s.convert(N.type),Z=x(N.internalFormat,re,q,N.normalized,N.colorSpace),pe=i.get(S),ge=i.get(N);if(ge.__renderTarget=S,!pe.__hasExternalTextures){const ye=Math.max(1,S.width>>ae),_e=Math.max(1,S.height>>ae);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,ae,Z,ye,_e,S.depth,0,re,q,null):t.texImage2D(K,ae,Z,ye,_e,0,re,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),oe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,K,ge.__webglTexture,0,he(S)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,K,ge.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(A,S,N){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){const k=S.depthTexture,K=k&&k.isDepthTexture?k.type:null,ae=E(S.stencilBuffer,K),re=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;oe(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he(S),ae,S.width,S.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,he(S),ae,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ae,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,A)}else{const k=S.textures;for(let K=0;K<k.length;K++){const ae=k[K],re=s.convert(ae.format,ae.colorSpace),q=s.convert(ae.type),Z=x(ae.internalFormat,re,q,ae.normalized,ae.colorSpace);oe(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he(S),Z,S.width,S.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,he(S),Z,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Z,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function H(A,S,N){const k=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(S.depthTexture);if(K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k){if(K.__webglInit===void 0&&(K.__webglInit=!0,S.depthTexture.addEventListener("dispose",b)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,S.depthTexture);const pe=s.convert(S.depthTexture.format),ge=s.convert(S.depthTexture.type);let ye;S.depthTexture.format===tr?ye=n.DEPTH_COMPONENT24:S.depthTexture.format===Jr&&(ye=n.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ye,S.width,S.height,0,pe,ge,null)}}else U(S.depthTexture,0);const ae=K.__webglTexture,re=he(S),q=k?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,Z=S.depthTexture.format===Jr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===tr)oe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,q,ae,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,Z,q,ae,0);else if(S.depthTexture.format===Jr)oe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,q,ae,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,Z,q,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Me(A){const S=i.get(A),N=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const k=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),k){const K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,k.removeEventListener("dispose",K)};k.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=k}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(N)for(let k=0;k<6;k++)H(S.__webglFramebuffer[k],A,k);else{const k=A.texture.mipmaps;k&&k.length>0?H(S.__webglFramebuffer[0],A,0):H(S.__webglFramebuffer,A,0)}else if(N){S.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[k]),S.__webglDepthbuffer[k]===void 0)S.__webglDepthbuffer[k]=n.createRenderbuffer(),pt(S.__webglDepthbuffer[k],A,!1);else{const K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ae)}}else{const k=A.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),pt(S.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ae)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(A,S,N){const k=i.get(A);S!==void 0&&Be(k.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Me(A)}function se(A){const S=A.texture,N=i.get(A),k=i.get(S);A.addEventListener("dispose",y);const K=A.textures,ae=A.isWebGLCubeRenderTarget===!0,re=K.length>1;if(re||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=S.version,o.memory.textures++),ae){N.__webglFramebuffer=[];for(let q=0;q<6;q++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[q]=[];for(let Z=0;Z<S.mipmaps.length;Z++)N.__webglFramebuffer[q][Z]=n.createFramebuffer()}else N.__webglFramebuffer[q]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let q=0;q<S.mipmaps.length;q++)N.__webglFramebuffer[q]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(re)for(let q=0,Z=K.length;q<Z;q++){const pe=i.get(K[q]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&oe(A)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let q=0;q<K.length;q++){const Z=K[q];N.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[q]);const pe=s.convert(Z.format,Z.colorSpace),ge=s.convert(Z.type),ye=x(Z.internalFormat,pe,ge,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),_e=he(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,ye,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,N.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),pt(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,S);for(let q=0;q<6;q++)if(S.mipmaps&&S.mipmaps.length>0)for(let Z=0;Z<S.mipmaps.length;Z++)Be(N.__webglFramebuffer[q][Z],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Z);else Be(N.__webglFramebuffer[q],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);h(S)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let q=0,Z=K.length;q<Z;q++){const pe=K[q],ge=i.get(pe);let ye=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ye=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,ge.__webglTexture),Qe(ye,pe),Be(N.__webglFramebuffer,A,pe,n.COLOR_ATTACHMENT0+q,ye,0),h(pe)&&_(ye)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(q=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,k.__webglTexture),Qe(q,S),S.mipmaps&&S.mipmaps.length>0)for(let Z=0;Z<S.mipmaps.length;Z++)Be(N.__webglFramebuffer[Z],A,S,n.COLOR_ATTACHMENT0,q,Z);else Be(N.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,q,0);h(S)&&_(q),t.unbindTexture()}A.depthBuffer&&Me(A)}function fe(A){const S=A.textures;for(let N=0,k=S.length;N<k;N++){const K=S[N];if(h(K)){const ae=M(A),re=i.get(K).__webglTexture;t.bindTexture(ae,re),_(ae),t.unbindTexture()}}}const Ee=[],G=[];function V(A){if(A.samples>0){if(oe(A)===!1){const S=A.textures,N=A.width,k=A.height;let K=n.COLOR_BUFFER_BIT;const ae=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(A),q=S.length>1;if(q)for(let pe=0;pe<S.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const Z=A.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[pe]);const ge=i.get(S[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ge,0)}n.blitFramebuffer(0,0,N,k,0,0,N,k,K,n.NEAREST),l===!0&&(Ee.length=0,G.length=0,Ee.push(n.COLOR_ATTACHMENT0+pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ee.push(ae),G.push(ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,G)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let pe=0;pe<S.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,re.__webglColorRenderbuffer[pe]);const ge=i.get(S[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function he(A){return Math.min(r.maxSamples,A.samples)}function oe(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function R(A){const S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function ce(A,S){const N=A.colorSpace,k=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==Dn&&N!==yr&&(rt.getTransfer(N)===ut?(k!==Xn||K!==Pn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",N)),S}function Se(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=j,this.getTextureUnits=B,this.setTextureUnits=z,this.setTexture2D=U,this.setTexture2DArray=J,this.setTexture3D=ne,this.setTextureCube=ue,this.rebindTextures=be,this.setupRenderTarget=se,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function cP(n,e){function t(i,r=yr){let s;const o=rt.getTransfer(r);if(i===Pn)return n.UNSIGNED_BYTE;if(i===yp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yx)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kx)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wx)return n.BYTE;if(i===Xx)return n.SHORT;if(i===ba)return n.UNSIGNED_SHORT;if(i===xp)return n.INT;if(i===Ri)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===er)return n.HALF_FLOAT;if(i===qx)return n.ALPHA;if(i===$x)return n.RGB;if(i===Xn)return n.RGBA;if(i===tr)return n.DEPTH_COMPONENT;if(i===Jr)return n.DEPTH_STENCIL;if(i===Mp)return n.RED;if(i===Ep)return n.RED_INTEGER;if(i===as)return n.RG;if(i===Tp)return n.RG_INTEGER;if(i===wp)return n.RGBA_INTEGER;if(i===tc||i===nc||i===ic||i===rc)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===tc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===tc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kd||i===Bd||i===zd||i===Vd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===kd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hd||i===Gd||i===Wd||i===Xd||i===Yd||i===Lc||i===Kd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hd||i===Gd)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xd)return s.COMPRESSED_R11_EAC;if(i===Yd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Lc)return s.COMPRESSED_RG11_EAC;if(i===Kd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qd||i===$d||i===jd||i===Zd||i===Jd||i===Qd||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$d)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===th)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ih)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ah)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lh||i===ch||i===uh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===lh)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ch)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fh||i===dh||i===Nc||i===hh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===fh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ra?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const uP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fP=`
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

}`;class dP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new oy(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ci({vertexShader:uP,fragmentShader:fP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new cn(new ru(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hP extends us{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,m=null;const g=typeof XRWebGLBinding<"u",v=new dP,h={},_=t.getContextAttributes();let M=null,x=null;const E=[],w=[],b=new Ge;let y=null;const C=new ln;C.viewport=new gt;const P=new ln;P.viewport=new gt;const L=[C,P],F=new p1;let j=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ve=E[te];return ve===void 0&&(ve=new Ju,E[te]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(te){let ve=E[te];return ve===void 0&&(ve=new Ju,E[te]=ve),ve.getGripSpace()},this.getHand=function(te){let ve=E[te];return ve===void 0&&(ve=new Ju,E[te]=ve),ve.getHandSpace()};function z(te){const ve=w.indexOf(te.inputSource);if(ve===-1)return;const de=E[ve];de!==void 0&&(de.update(te.inputSource,te.frame,c||o),de.dispatchEvent({type:te.type,data:te.inputSource}))}function Q(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",Y);for(let te=0;te<E.length;te++){const ve=w[te];ve!==null&&(w[te]=null,E[te].disconnect(ve))}j=null,B=null,v.reset();for(const te in h)delete h[te];e.setRenderTarget(M),p=null,f=null,d=null,r=null,x=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",Y),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(b),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,We=null,Xe=null;_.depth&&(Xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=_.stencil?Jr:tr,We=_.stencil?Ra:Ri);const Be={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Ai(f.textureWidth,f.textureHeight,{format:Xn,type:Pn,depthTexture:new uo(f.textureWidth,f.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Ai(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(te){for(let ve=0;ve<te.removed.length;ve++){const de=te.removed[ve],We=w.indexOf(de);We>=0&&(w[We]=null,E[We].disconnect(de))}for(let ve=0;ve<te.added.length;ve++){const de=te.added[ve];let We=w.indexOf(de);if(We===-1){for(let Be=0;Be<E.length;Be++)if(Be>=w.length){w.push(de),We=Be;break}else if(w[Be]===null){w[Be]=de,We=Be;break}if(We===-1)break}const Xe=E[We];Xe&&Xe.connect(de)}}const U=new I,J=new I;function ne(te,ve,de){U.setFromMatrixPosition(ve.matrixWorld),J.setFromMatrixPosition(de.matrixWorld);const We=U.distanceTo(J),Xe=ve.projectionMatrix.elements,Be=de.projectionMatrix.elements,pt=Xe[14]/(Xe[10]-1),H=Xe[14]/(Xe[10]+1),Me=(Xe[9]+1)/Xe[5],be=(Xe[9]-1)/Xe[5],se=(Xe[8]-1)/Xe[0],fe=(Be[8]+1)/Be[0],Ee=pt*se,G=pt*fe,V=We/(-se+fe),he=V*-se;if(ve.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(he),te.translateZ(V),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Xe[10]===-1)te.projectionMatrix.copy(ve.projectionMatrix),te.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const oe=pt+V,R=H+V,ce=Ee-he,Se=G+(We-he),A=Me*H/R*oe,S=be*H/R*oe;te.projectionMatrix.makePerspective(ce,Se,A,S,oe,R),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ue(te,ve){ve===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ve.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ve=te.near,de=te.far;v.texture!==null&&(v.depthNear>0&&(ve=v.depthNear),v.depthFar>0&&(de=v.depthFar)),F.near=P.near=C.near=ve,F.far=P.far=C.far=de,(j!==F.near||B!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),j=F.near,B=F.far),F.layers.mask=te.layers.mask|6,C.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;const We=te.parent,Xe=F.cameras;ue(F,We);for(let Be=0;Be<Xe.length;Be++)ue(Xe[Be],We);Xe.length===2?ne(F,C,P):F.projectionMatrix.copy(C.projectionMatrix),xe(te,F,We)};function xe(te,ve,de){de===null?te.matrix.copy(ve.matrixWorld):(te.matrix.copy(de.matrixWorld),te.matrix.invert(),te.matrix.multiply(ve.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ve.projectionMatrix),te.projectionMatrixInverse.copy(ve.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=co*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(F)},this.getCameraTexture=function(te){return h[te]};let $e=null;function ot(te,ve){if(u=ve.getViewerPose(c||o),m=ve,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let We=!1;de.length!==F.cameras.length&&(F.cameras.length=0,We=!0);for(let H=0;H<de.length;H++){const Me=de[H];let be=null;if(p!==null)be=p.getViewport(Me);else{const fe=d.getViewSubImage(f,Me);be=fe.viewport,H===0&&(e.setRenderTargetTextures(x,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(x))}let se=L[H];se===void 0&&(se=new ln,se.layers.enable(H),se.viewport=new gt,L[H]=se),se.matrix.fromArray(Me.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Me.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(be.x,be.y,be.width,be.height),H===0&&(F.matrix.copy(se.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),We===!0&&F.cameras.push(se)}const Xe=r.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){d=i.getBinding();const H=d.getDepthInformation(de[0]);H&&H.isValid&&H.texture&&v.init(H,r.renderState)}if(Xe&&Xe.includes("camera-access")&&g){e.state.unbindTexture(),d=i.getBinding();for(let H=0;H<de.length;H++){const Me=de[H].camera;if(Me){let be=h[Me];be||(be=new oy,h[Me]=be);const se=d.getCameraImage(Me);be.sourceTexture=se}}}}for(let de=0;de<E.length;de++){const We=w[de],Xe=E[de];We!==null&&Xe!==void 0&&Xe.update(We,ve,c||o)}$e&&$e(te,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),m=null}const Qe=new dy;Qe.setAnimationLoop(ot),this.setAnimationLoop=function(te){$e=te},this.dispose=function(){}}}const pP=new Je,xy=new qe;xy.set(-1,0,0,0,1,0,0,0,1);function mP(n,e){function t(v,h){v.matrixAutoUpdate===!0&&v.updateMatrix(),h.value.copy(v.matrix)}function i(v,h){h.color.getRGB(v.fogColor.value,ly(n)),h.isFog?(v.fogNear.value=h.near,v.fogFar.value=h.far):h.isFogExp2&&(v.fogDensity.value=h.density)}function r(v,h,_,M,x){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(v,h):h.isMeshLambertMaterial?(s(v,h),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(v,h),d(v,h)):h.isMeshPhongMaterial?(s(v,h),u(v,h),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(v,h),f(v,h),h.isMeshPhysicalMaterial&&p(v,h,x)):h.isMeshMatcapMaterial?(s(v,h),m(v,h)):h.isMeshDepthMaterial?s(v,h):h.isMeshDistanceMaterial?(s(v,h),g(v,h)):h.isMeshNormalMaterial?s(v,h):h.isLineBasicMaterial?(o(v,h),h.isLineDashedMaterial&&a(v,h)):h.isPointsMaterial?l(v,h,_,M):h.isSpriteMaterial?c(v,h):h.isShadowMaterial?(v.color.value.copy(h.color),v.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(v,h){v.opacity.value=h.opacity,h.color&&v.diffuse.value.copy(h.color),h.emissive&&v.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(v.map.value=h.map,t(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,t(h.alphaMap,v.alphaMapTransform)),h.bumpMap&&(v.bumpMap.value=h.bumpMap,t(h.bumpMap,v.bumpMapTransform),v.bumpScale.value=h.bumpScale,h.side===Tn&&(v.bumpScale.value*=-1)),h.normalMap&&(v.normalMap.value=h.normalMap,t(h.normalMap,v.normalMapTransform),v.normalScale.value.copy(h.normalScale),h.side===Tn&&v.normalScale.value.negate()),h.displacementMap&&(v.displacementMap.value=h.displacementMap,t(h.displacementMap,v.displacementMapTransform),v.displacementScale.value=h.displacementScale,v.displacementBias.value=h.displacementBias),h.emissiveMap&&(v.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,v.emissiveMapTransform)),h.specularMap&&(v.specularMap.value=h.specularMap,t(h.specularMap,v.specularMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest);const _=e.get(h),M=_.envMap,x=_.envMapRotation;M&&(v.envMap.value=M,v.envMapRotation.value.setFromMatrix4(pP.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(xy),v.reflectivity.value=h.reflectivity,v.ior.value=h.ior,v.refractionRatio.value=h.refractionRatio),h.lightMap&&(v.lightMap.value=h.lightMap,v.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,v.lightMapTransform)),h.aoMap&&(v.aoMap.value=h.aoMap,v.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,v.aoMapTransform))}function o(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,h.map&&(v.map.value=h.map,t(h.map,v.mapTransform))}function a(v,h){v.dashSize.value=h.dashSize,v.totalSize.value=h.dashSize+h.gapSize,v.scale.value=h.scale}function l(v,h,_,M){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.size.value=h.size*_,v.scale.value=M*.5,h.map&&(v.map.value=h.map,t(h.map,v.uvTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,t(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function c(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.rotation.value=h.rotation,h.map&&(v.map.value=h.map,t(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,t(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function u(v,h){v.specular.value.copy(h.specular),v.shininess.value=Math.max(h.shininess,1e-4)}function d(v,h){h.gradientMap&&(v.gradientMap.value=h.gradientMap)}function f(v,h){v.metalness.value=h.metalness,h.metalnessMap&&(v.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,v.metalnessMapTransform)),v.roughness.value=h.roughness,h.roughnessMap&&(v.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,v.roughnessMapTransform)),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)}function p(v,h,_){v.ior.value=h.ior,h.sheen>0&&(v.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),v.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(v.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,v.sheenColorMapTransform)),h.sheenRoughnessMap&&(v.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,v.sheenRoughnessMapTransform))),h.clearcoat>0&&(v.clearcoat.value=h.clearcoat,v.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(v.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,v.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(v.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Tn&&v.clearcoatNormalScale.value.negate())),h.dispersion>0&&(v.dispersion.value=h.dispersion),h.iridescence>0&&(v.iridescence.value=h.iridescence,v.iridescenceIOR.value=h.iridescenceIOR,v.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(v.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,v.iridescenceMapTransform)),h.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),h.transmission>0&&(v.transmission.value=h.transmission,v.transmissionSamplerMap.value=_.texture,v.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(v.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,v.transmissionMapTransform)),v.thickness.value=h.thickness,h.thicknessMap&&(v.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=h.attenuationDistance,v.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(v.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(v.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=h.specularIntensity,v.specularColor.value.copy(h.specularColor),h.specularColorMap&&(v.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,v.specularColorMapTransform)),h.specularIntensityMap&&(v.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,h){h.matcap&&(v.matcap.value=h.matcap)}function g(v,h){const _=e.get(h).light;v.referencePosition.value.setFromMatrixPosition(_.matrixWorld),v.nearDistance.value=_.shadow.camera.near,v.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gP(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const w=E.program;i.uniformBlockBinding(x,w)}function c(x,E){let w=r[x.id];w===void 0&&(v(x),w=u(x),r[x.id]=w,x.addEventListener("dispose",_));const b=E.program;i.updateUBOMapping(x,b);const y=e.render.frame;s[x.id]!==y&&(f(x),s[x.id]=y)}function u(x){const E=d();x.__bindingPointIndex=E;const w=n.createBuffer(),b=x.__size,y=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,b,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,w),w}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const E=r[x.id],w=x.uniforms,b=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let y=0,C=w.length;y<C;y++){const P=w[y];if(Array.isArray(P))for(let L=0,F=P.length;L<F;L++)p(P[L],y,L,b);else p(P,y,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,E,w,b){if(g(x,E,w,b)===!0){const y=x.__offset,C=x.value;if(Array.isArray(C)){let P=0;for(let L=0;L<C.length;L++){const F=C[L],j=h(F);m(F,x.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(C,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,x.__data)}}function m(x,E,w){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,w)}function g(x,E,w,b){const y=x.value,C=E+"_"+w;if(b[C]===void 0)return typeof y=="number"||typeof y=="boolean"?b[C]=y:ArrayBuffer.isView(y)?b[C]=y.slice():b[C]=y.clone(),!0;{const P=b[C];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return b[C]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function v(x){const E=x.uniforms;let w=0;const b=16;for(let C=0,P=E.length;C<P;C++){const L=Array.isArray(E[C])?E[C]:[E[C]];for(let F=0,j=L.length;F<j;F++){const B=L[F],z=Array.isArray(B.value)?B.value:[B.value];for(let Q=0,Y=z.length;Q<Y;Q++){const U=z[Q],J=h(U),ne=w%b,ue=ne%J.boundary,xe=ne+ue;w+=ue,xe!==0&&b-xe<J.storage&&(w+=b-xe),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=w,w+=J.storage}}}const y=w%b;return y>0&&(w+=b-y),x.__size=w,x.__cache={},this}function h(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",x),E}function _(x){const E=x.target;E.removeEventListener("dispose",_);const w=o.indexOf(E.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function M(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:M}}const vP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mi=null;function _P(){return mi===null&&(mi=new Ip(vP,16,16,as,er),mi.name="DFG_LUT",mi.minFilter=Gt,mi.magFilter=Gt,mi.wrapS=Si,mi.wrapT=Si,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}class xP{constructor(e={}){const{canvas:t=AT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Pn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=p,v=new Set([wp,Tp,Ep]),h=new Set([Pn,Ri,ba,Ra,yp,Sp]),_=new Uint32Array(4),M=new Int32Array(4),x=new I;let E=null,w=null;const b=[],y=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,F=null,j=null,B=null,z=null;this._outputColorSpace=Zt;let Q=0,Y=0,U=null,J=-1,ne=null;const ue=new gt,xe=new gt;let $e=null;const ot=new Ke(0);let Qe=0,te=t.width,ve=t.height,de=1,We=null,Xe=null;const Be=new gt(0,0,te,ve),pt=new gt(0,0,te,ve);let H=!1;const Me=new Up;let be=!1,se=!1;const fe=new Je,Ee=new I,G=new gt,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function oe(){return U===null?de:1}let R=i;function ce(T,O){return t.getContext(T,O)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_p}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",xt,!1),t.addEventListener("webglcontextcreationerror",ui,!1),R===null){const O="webgl2";if(R=ce(O,T),R===null)throw ce(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Ye("WebGLRenderer: "+T.message),T}let Se,A,S,N,k,K,ae,re,q,Z,pe,ge,ye,_e,Ue,Ve,je,D,Te,ie,we,Pe,le;function ke(){Se=new _R(R),Se.init(),we=new cP(R,Se),A=new uR(R,Se,e,we),S=new aP(R,Se),A.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),j=R.createFramebuffer(),B=R.createFramebuffer(),z=R.createFramebuffer(),N=new SR(R),k=new KC,K=new lP(R,Se,S,k,A,we,N),ae=new vR(P),re=new w1(R),Pe=new lR(R,re),q=new xR(R,re,N,Pe),Z=new ER(R,q,re,Pe,N),D=new MR(R,A,K),Ue=new fR(k),pe=new YC(P,ae,Se,A,Pe,Ue),ge=new mP(P,k),ye=new $C,_e=new tP(Se),je=new aR(P,ae,S,Z,m,l),Ve=new oP(P,Z,A),le=new gP(R,N,A,S),Te=new cR(R,Se,N),ie=new yR(R,Se,N),N.programs=pe.programs,P.capabilities=A,P.extensions=Se,P.properties=k,P.renderLists=ye,P.shadowMap=Ve,P.state=S,P.info=N}ke(),g!==Pn&&(C=new wR(g,t.width,t.height,a,r,s));const De=new hP(P,R);this.xr=De,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(T){T!==void 0&&(de=T,this.setSize(te,ve,!1))},this.getSize=function(T){return T.set(te,ve)},this.setSize=function(T,O,$=!0){if(De.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}te=T,ve=O,t.width=Math.floor(T*de),t.height=Math.floor(O*de),$===!0&&(t.style.width=T+"px",t.style.height=O+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(te*de,ve*de).floor()},this.setDrawingBufferSize=function(T,O,$){te=T,ve=O,de=$,t.width=Math.floor(T*$),t.height=Math.floor(O*$),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(g===Pn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ue)},this.getViewport=function(T){return T.copy(Be)},this.setViewport=function(T,O,$,W){T.isVector4?Be.set(T.x,T.y,T.z,T.w):Be.set(T,O,$,W),S.viewport(ue.copy(Be).multiplyScalar(de).round())},this.getScissor=function(T){return T.copy(pt)},this.setScissor=function(T,O,$,W){T.isVector4?pt.set(T.x,T.y,T.z,T.w):pt.set(T,O,$,W),S.scissor(xe.copy(pt).multiplyScalar(de).round())},this.getScissorTest=function(){return H},this.setScissorTest=function(T){S.setScissorTest(H=T)},this.setOpaqueSort=function(T){We=T},this.setTransparentSort=function(T){Xe=T},this.getClearColor=function(T){return T.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,$=!0){let W=0;if(T){let X=!1;if(U!==null){const Ce=U.texture.format;X=v.has(Ce)}if(X){const Ce=U.texture.type,Ne=h.has(Ce),Re=je.getClearColor(),Fe=je.getClearAlpha(),ze=Re.r,Ze=Re.g,tt=Re.b;Ne?(_[0]=ze,_[1]=Ze,_[2]=tt,_[3]=Fe,R.clearBufferuiv(R.COLOR,0,_)):(M[0]=ze,M[1]=Ze,M[2]=tt,M[3]=Fe,R.clearBufferiv(R.COLOR,0,M))}else W|=R.COLOR_BUFFER_BIT}O&&(W|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&R.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",ui,!1),je.dispose(),ye.dispose(),_e.dispose(),k.dispose(),ae.dispose(),Z.dispose(),Pe.dispose(),le.dispose(),pe.dispose(),De.dispose(),De.removeEventListener("sessionstart",Jp),De.removeEventListener("sessionend",Qp),Br.stop()};function Pt(T){T.preventDefault(),Dc("WebGLRenderer: Context Lost."),L=!0}function xt(){Dc("WebGLRenderer: Context Restored."),L=!1;const T=N.autoReset,O=Ve.enabled,$=Ve.autoUpdate,W=Ve.needsUpdate,X=Ve.type;ke(),N.autoReset=T,Ve.enabled=O,Ve.autoUpdate=$,Ve.needsUpdate=W,Ve.type=X}function ui(T){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function fi(T){const O=T.target;O.removeEventListener("dispose",fi),Ty(O)}function Ty(T){wy(T),k.remove(T)}function wy(T){const O=k.get(T).programs;O!==void 0&&(O.forEach(function($){pe.releaseProgram($)}),T.isShaderMaterial&&pe.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,$,W,X,Ce){O===null&&(O=V);const Ne=X.isMesh&&X.matrixWorld.determinantAffine()<0,Re=Ry(T,O,$,W,X);S.setMaterial(W,Ne);let Fe=$.index,ze=1;if(W.wireframe===!0){if(Fe=q.getWireframeAttribute($),Fe===void 0)return;ze=2}const Ze=$.drawRange,tt=$.attributes.position;let He=Ze.start*ze,mt=(Ze.start+Ze.count)*ze;Ce!==null&&(He=Math.max(He,Ce.start*ze),mt=Math.min(mt,(Ce.start+Ce.count)*ze)),Fe!==null?(He=Math.max(He,0),mt=Math.min(mt,Fe.count)):tt!=null&&(He=Math.max(He,0),mt=Math.min(mt,tt.count));const Dt=mt-He;if(Dt<0||Dt===1/0)return;Pe.setup(X,W,Re,$,Fe);let Lt,vt=Te;if(Fe!==null&&(Lt=re.get(Fe),vt=ie,vt.setIndex(Lt)),X.isMesh)W.wireframe===!0?(S.setLineWidth(W.wireframeLinewidth*oe()),vt.setMode(R.LINES)):vt.setMode(R.TRIANGLES);else if(X.isLine){let tn=W.linewidth;tn===void 0&&(tn=1),S.setLineWidth(tn*oe()),X.isLineSegments?vt.setMode(R.LINES):X.isLineLoop?vt.setMode(R.LINE_LOOP):vt.setMode(R.LINE_STRIP)}else X.isPoints?vt.setMode(R.POINTS):X.isSprite&&vt.setMode(R.TRIANGLES);if(X.isBatchedMesh)if(Se.get("WEBGL_multi_draw"))vt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const tn=X._multiDrawStarts,Le=X._multiDrawCounts,An=X._multiDrawCount,at=Fe?re.get(Fe).bytesPerElement:1,On=k.get(W).currentProgram.getUniforms();for(let di=0;di<An;di++)On.setValue(R,"_gl_DrawID",di),vt.render(tn[di]/at,Le[di])}else if(X.isInstancedMesh)vt.renderInstances(He,Dt,X.count);else if($.isInstancedBufferGeometry){const tn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Le=Math.min($.instanceCount,tn);vt.renderInstances(He,Dt,Le)}else vt.render(He,Dt)};function Zp(T,O,$){T.transparent===!0&&T.side===yi&&T.forceSinglePass===!1?(T.side=Tn,T.needsUpdate=!0,Ha(T,O,$),T.side=Qi,T.needsUpdate=!0,Ha(T,O,$),T.side=yi):Ha(T,O,$)}this.compile=function(T,O,$=null){$===null&&($=T),w=_e.get($),w.init(O),y.push(w),$.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),T!==$&&T.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights();const W=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ce=X.material;if(Ce)if(Array.isArray(Ce))for(let Ne=0;Ne<Ce.length;Ne++){const Re=Ce[Ne];Zp(Re,$,X),W.add(Re)}else Zp(Ce,$,X),W.add(Ce)}),w=y.pop(),W},this.compileAsync=function(T,O,$=null){const W=this.compile(T,O,$);return new Promise(X=>{function Ce(){if(W.forEach(function(Ne){k.get(Ne).currentProgram.isReady()&&W.delete(Ne)}),W.size===0){X(T);return}setTimeout(Ce,10)}Se.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let lu=null;function Ay(T){lu&&lu(T)}function Jp(){Br.stop()}function Qp(){Br.start()}const Br=new dy;Br.setAnimationLoop(Ay),typeof self<"u"&&Br.setContext(self),this.setAnimationLoop=function(T){lu=T,De.setAnimationLoop(T),T===null?Br.stop():Br.start()},De.addEventListener("sessionstart",Jp),De.addEventListener("sessionend",Qp),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(T,O);const $=De.enabled===!0&&De.isPresenting===!0,W=C!==null&&(U===null||$)&&C.begin(P,U);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(O),O=De.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,O,U),w=_e.get(T,y.length),w.init(O),w.state.textureUnits=K.getTextureUnits(),y.push(w),fe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Me.setFromProjectionMatrix(fe,Mi,O.reversedDepth),se=this.localClippingEnabled,be=Ue.init(this.clippingPlanes,se),E=ye.get(T,b.length),E.init(),b.push(E),De.enabled===!0&&De.isPresenting===!0){const Ne=P.xr.getDepthSensingMesh();Ne!==null&&cu(Ne,O,-1/0,P.sortObjects)}cu(T,O,0,P.sortObjects),E.finish(),P.sortObjects===!0&&E.sort(We,Xe,O.reversedDepth),he=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,he&&je.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),be===!0&&Ue.beginShadows();const X=w.state.shadowsArray;if(Ve.render(X,T,O),be===!0&&Ue.endShadows(),(W&&C.hasRenderPass())===!1){const Ne=E.opaque,Re=E.transmissive;if(w.setupLights(),O.isArrayCamera){const Fe=O.cameras;if(Re.length>0)for(let ze=0,Ze=Fe.length;ze<Ze;ze++){const tt=Fe[ze];tm(Ne,Re,T,tt)}he&&je.render(T);for(let ze=0,Ze=Fe.length;ze<Ze;ze++){const tt=Fe[ze];em(E,T,tt,tt.viewport)}}else Re.length>0&&tm(Ne,Re,T,O),he&&je.render(T),em(E,T,O)}U!==null&&Y===0&&(K.updateMultisampleRenderTarget(U),K.updateRenderTargetMipmap(U)),W&&C.end(P),T.isScene===!0&&T.onAfterRender(P,T,O),Pe.resetDefaultState(),J=-1,ne=null,y.pop(),y.length>0?(w=y[y.length-1],K.setTextureUnits(w.state.textureUnits),be===!0&&Ue.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,b.pop(),b.length>0?E=b[b.length-1]:E=null,F!==null&&F.renderEnd()};function cu(T,O,$,W){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Me.intersectsSprite(T)){W&&G.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const Ne=Z.update(T),Re=T.material;Re.visible&&E.push(T,Ne,Re,$,G.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Me.intersectsObject(T))){const Ne=Z.update(T),Re=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),G.copy(T.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),G.copy(Ne.boundingSphere.center)),G.applyMatrix4(T.matrixWorld).applyMatrix4(fe)),Array.isArray(Re)){const Fe=Ne.groups;for(let ze=0,Ze=Fe.length;ze<Ze;ze++){const tt=Fe[ze],He=Re[tt.materialIndex];He&&He.visible&&E.push(T,Ne,He,$,G.z,tt)}}else Re.visible&&E.push(T,Ne,Re,$,G.z,null)}}const Ce=T.children;for(let Ne=0,Re=Ce.length;Ne<Re;Ne++)cu(Ce[Ne],O,$,W)}function em(T,O,$,W){const{opaque:X,transmissive:Ce,transparent:Ne}=T;w.setupLightsView($),be===!0&&Ue.setGlobalState(P.clippingPlanes,$),W&&S.viewport(ue.copy(W)),X.length>0&&Va(X,O,$),Ce.length>0&&Va(Ce,O,$),Ne.length>0&&Va(Ne,O,$),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function tm(T,O,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){const He=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new Ai(1,1,{generateMipmaps:!0,type:He?er:Pn,minFilter:Wi,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const Ce=w.state.transmissionRenderTarget[W.id],Ne=W.viewport||ue;Ce.setSize(Ne.z*P.transmissionResolutionScale,Ne.w*P.transmissionResolutionScale);const Re=P.getRenderTarget(),Fe=P.getActiveCubeFace(),ze=P.getActiveMipmapLevel();P.setRenderTarget(Ce),P.getClearColor(ot),Qe=P.getClearAlpha(),Qe<1&&P.setClearColor(16777215,.5),P.clear(),he&&je.render($);const Ze=P.toneMapping;P.toneMapping=wi;const tt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),be===!0&&Ue.setGlobalState(P.clippingPlanes,W),Va(T,$,W),K.updateMultisampleRenderTarget(Ce),K.updateRenderTargetMipmap(Ce),Se.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let mt=0,Dt=O.length;mt<Dt;mt++){const Lt=O[mt],{object:vt,geometry:tn,material:Le,group:An}=Lt;if(Le.side===yi&&vt.layers.test(W.layers)){const at=Le.side;Le.side=Tn,Le.needsUpdate=!0,nm(vt,$,W,tn,Le,An),Le.side=at,Le.needsUpdate=!0,He=!0}}He===!0&&(K.updateMultisampleRenderTarget(Ce),K.updateRenderTargetMipmap(Ce))}P.setRenderTarget(Re,Fe,ze),P.setClearColor(ot,Qe),tt!==void 0&&(W.viewport=tt),P.toneMapping=Ze}function Va(T,O,$){const W=O.isScene===!0?O.overrideMaterial:null;for(let X=0,Ce=T.length;X<Ce;X++){const Ne=T[X],{object:Re,geometry:Fe,group:ze}=Ne;let Ze=Ne.material;Ze.allowOverride===!0&&W!==null&&(Ze=W),Re.layers.test($.layers)&&nm(Re,O,$,Fe,Ze,ze)}}function nm(T,O,$,W,X,Ce){T.onBeforeRender(P,O,$,W,X,Ce),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(P,O,$,W,T,Ce),X.transparent===!0&&X.side===yi&&X.forceSinglePass===!1?(X.side=Tn,X.needsUpdate=!0,P.renderBufferDirect($,O,W,X,T,Ce),X.side=Qi,X.needsUpdate=!0,P.renderBufferDirect($,O,W,X,T,Ce),X.side=yi):P.renderBufferDirect($,O,W,X,T,Ce),T.onAfterRender(P,O,$,W,X,Ce)}function Ha(T,O,$){O.isScene!==!0&&(O=V);const W=k.get(T),X=w.state.lights,Ce=w.state.shadowsArray,Ne=X.state.version,Re=pe.getParameters(T,X.state,Ce,O,$,w.state.lightProbeGridArray),Fe=pe.getProgramCacheKey(Re);let ze=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,W.fog=O.fog;const Ze=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=ae.get(T.envMap||W.environment,Ze),W.envMapRotation=W.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,ze===void 0&&(T.addEventListener("dispose",fi),ze=new Map,W.programs=ze);let tt=ze.get(Fe);if(tt!==void 0){if(W.currentProgram===tt&&W.lightsStateVersion===Ne)return rm(T,Re),tt}else Re.uniforms=pe.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,$,Re),T.onBeforeCompile(Re,P),tt=pe.acquireProgram(Re,Fe),ze.set(Fe,tt),W.uniforms=Re.uniforms;const He=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=Ue.uniform),rm(T,Re),W.needsLights=Py(T),W.lightsStateVersion=Ne,W.needsLights&&(He.ambientLightColor.value=X.state.ambient,He.lightProbe.value=X.state.probe,He.directionalLights.value=X.state.directional,He.directionalLightShadows.value=X.state.directionalShadow,He.spotLights.value=X.state.spot,He.spotLightShadows.value=X.state.spotShadow,He.rectAreaLights.value=X.state.rectArea,He.ltc_1.value=X.state.rectAreaLTC1,He.ltc_2.value=X.state.rectAreaLTC2,He.pointLights.value=X.state.point,He.pointLightShadows.value=X.state.pointShadow,He.hemisphereLights.value=X.state.hemi,He.directionalShadowMatrix.value=X.state.directionalShadowMatrix,He.spotLightMatrix.value=X.state.spotLightMatrix,He.spotLightMap.value=X.state.spotLightMap,He.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=w.state.lightProbeGridArray.length>0,W.currentProgram=tt,W.uniformsList=null,tt}function im(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=sc.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function rm(T,O){const $=k.get(T);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function by(T,O){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(O.matrixWorld);for(let $=0,W=T.length;$<W;$++){const X=T[$];if(X.texture!==null&&X.boundingBox.containsPoint(x))return X}return null}function Ry(T,O,$,W,X){O.isScene!==!0&&(O=V),K.resetTextureUnits();const Ce=O.fog,Ne=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?O.environment:null,Re=U===null?P.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:rt.workingColorSpace,Fe=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,ze=ae.get(W.envMap||Ne,Fe),Ze=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,tt=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),He=!!$.morphAttributes.position,mt=!!$.morphAttributes.normal,Dt=!!$.morphAttributes.color;let Lt=wi;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Lt=P.toneMapping);const vt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,tn=vt!==void 0?vt.length:0,Le=k.get(W),An=w.state.lights;if(be===!0&&(se===!0||T!==ne)){const yt=T===ne&&W.id===J;Ue.setState(W,T,yt)}let at=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==An.state.version||Le.outputColorSpace!==Re||X.isBatchedMesh&&Le.batching===!1||!X.isBatchedMesh&&Le.batching===!0||X.isBatchedMesh&&Le.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Le.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Le.instancing===!1||!X.isInstancedMesh&&Le.instancing===!0||X.isSkinnedMesh&&Le.skinning===!1||!X.isSkinnedMesh&&Le.skinning===!0||X.isInstancedMesh&&Le.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Le.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Le.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Le.instancingMorph===!1&&X.morphTexture!==null||Le.envMap!==ze||W.fog===!0&&Le.fog!==Ce||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Ue.numPlanes||Le.numIntersection!==Ue.numIntersection)||Le.vertexAlphas!==Ze||Le.vertexTangents!==tt||Le.morphTargets!==He||Le.morphNormals!==mt||Le.morphColors!==Dt||Le.toneMapping!==Lt||Le.morphTargetsCount!==tn||!!Le.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Le.__version=W.version);let On=Le.currentProgram;at===!0&&(On=Ha(W,O,X),F&&W.isNodeMaterial&&F.onUpdateProgram(W,On,Le));let di=!1,sr=!1,fs=!1;const _t=On.getUniforms(),Ut=Le.uniforms;if(S.useProgram(On.program)&&(di=!0,sr=!0,fs=!0),W.id!==J&&(J=W.id,sr=!0),Le.needsLights){const yt=by(w.state.lightProbeGridArray,X);Le.lightProbeGrid!==yt&&(Le.lightProbeGrid=yt,sr=!0)}if(di||ne!==T){S.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),_t.setValue(R,"projectionMatrix",T.projectionMatrix),_t.setValue(R,"viewMatrix",T.matrixWorldInverse);const ar=_t.map.cameraPosition;ar!==void 0&&ar.setValue(R,Ee.setFromMatrixPosition(T.matrixWorld)),A.logarithmicDepthBuffer&&_t.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_t.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),ne!==T&&(ne=T,sr=!0,fs=!0)}if(Le.needsLights&&(An.state.directionalShadowMap.length>0&&_t.setValue(R,"directionalShadowMap",An.state.directionalShadowMap,K),An.state.spotShadowMap.length>0&&_t.setValue(R,"spotShadowMap",An.state.spotShadowMap,K),An.state.pointShadowMap.length>0&&_t.setValue(R,"pointShadowMap",An.state.pointShadowMap,K)),X.isSkinnedMesh){_t.setOptional(R,X,"bindMatrix"),_t.setOptional(R,X,"bindMatrixInverse");const yt=X.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),_t.setValue(R,"boneTexture",yt.boneTexture,K))}X.isBatchedMesh&&(_t.setOptional(R,X,"batchingTexture"),_t.setValue(R,"batchingTexture",X._matricesTexture,K),_t.setOptional(R,X,"batchingIdTexture"),_t.setValue(R,"batchingIdTexture",X._indirectTexture,K),_t.setOptional(R,X,"batchingColorTexture"),X._colorsTexture!==null&&_t.setValue(R,"batchingColorTexture",X._colorsTexture,K));const or=$.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&D.update(X,$,On),(sr||Le.receiveShadow!==X.receiveShadow)&&(Le.receiveShadow=X.receiveShadow,_t.setValue(R,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&O.environment!==null&&(Ut.envMapIntensity.value=O.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=_P()),sr){if(_t.setValue(R,"toneMappingExposure",P.toneMappingExposure),Le.needsLights&&Cy(Ut,fs),Ce&&W.fog===!0&&ge.refreshFogUniforms(Ut,Ce),ge.refreshMaterialUniforms(Ut,W,de,ve,w.state.transmissionRenderTarget[T.id]),Le.needsLights&&Le.lightProbeGrid){const yt=Le.lightProbeGrid;Ut.probesSH.value=yt.texture,Ut.probesMin.value.copy(yt.boundingBox.min),Ut.probesMax.value.copy(yt.boundingBox.max),Ut.probesResolution.value.copy(yt.resolution)}sc.upload(R,im(Le),Ut,K)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(sc.upload(R,im(Le),Ut,K),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_t.setValue(R,"center",X.center),_t.setValue(R,"modelViewMatrix",X.modelViewMatrix),_t.setValue(R,"normalMatrix",X.normalMatrix),_t.setValue(R,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const yt=W.uniformsGroups;for(let ar=0,ds=yt.length;ar<ds;ar++){const sm=yt[ar];le.update(sm,On),le.bind(sm,On)}}return On}function Cy(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Py(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(T,O,$){const W=k.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),k.get(T.texture).__webglTexture=O,k.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const $=k.get(T);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,$=0){U=T,Q=O,Y=$;let W=null,X=!1,Ce=!1;if(T){const Re=k.get(T);if(Re.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(R.FRAMEBUFFER,Re.__webglFramebuffer),ue.copy(T.viewport),xe.copy(T.scissor),$e=T.scissorTest,S.viewport(ue),S.scissor(xe),S.setScissorTest($e),J=-1;return}else if(Re.__webglFramebuffer===void 0)K.setupRenderTarget(T);else if(Re.__hasExternalTextures)K.rebindTextures(T,k.get(T.texture).__webglTexture,k.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ze=T.depthTexture;if(Re.__boundDepthTexture!==Ze){if(Ze!==null&&k.has(Ze)&&(T.width!==Ze.image.width||T.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(T)}}const Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ce=!0);const ze=k.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?W=ze[O][$]:W=ze[O],X=!0):T.samples>0&&K.useMultisampledRTT(T)===!1?W=k.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?W=ze[$]:W=ze,ue.copy(T.viewport),xe.copy(T.scissor),$e=T.scissorTest}else ue.copy(Be).multiplyScalar(de).floor(),xe.copy(pt).multiplyScalar(de).floor(),$e=H;if($!==0&&(W=j),S.bindFramebuffer(R.FRAMEBUFFER,W)&&S.drawBuffers(T,W),S.viewport(ue),S.scissor(xe),S.setScissorTest($e),X){const Re=k.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,$)}else if(Ce){const Re=O;for(let Fe=0;Fe<T.textures.length;Fe++){const ze=k.get(T.textures[Fe]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Fe,ze.__webglTexture,$,Re)}}else if(T!==null&&$!==0){const Re=k.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Re.__webglTexture,$)}J=-1},this.readRenderTargetPixels=function(T,O,$,W,X,Ce,Ne,Re=0){if(!(T&&T.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=k.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){S.bindFramebuffer(R.FRAMEBUFFER,Fe);try{const ze=T.textures[Re],Ze=ze.format,tt=ze.type;if(T.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Re),!A.textureFormatReadable(Ze)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(tt)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-W&&$>=0&&$<=T.height-X&&R.readPixels(O,$,W,X,we.convert(Ze),we.convert(tt),Ce)}finally{const ze=U!==null?k.get(U).__webglFramebuffer:null;S.bindFramebuffer(R.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(T,O,$,W,X,Ce,Ne,Re=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=k.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe)if(O>=0&&O<=T.width-W&&$>=0&&$<=T.height-X){S.bindFramebuffer(R.FRAMEBUFFER,Fe);const ze=T.textures[Re],Ze=ze.format,tt=ze.type;if(T.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Re),!A.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,He),R.bufferData(R.PIXEL_PACK_BUFFER,Ce.byteLength,R.STREAM_READ),R.readPixels(O,$,W,X,we.convert(Ze),we.convert(tt),0);const mt=U!==null?k.get(U).__webglFramebuffer:null;S.bindFramebuffer(R.FRAMEBUFFER,mt);const Dt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await bT(R,Dt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,He),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Ce),R.deleteBuffer(He),R.deleteSync(Dt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,$=0){const W=Math.pow(2,-$),X=Math.floor(T.image.width*W),Ce=Math.floor(T.image.height*W),Ne=O!==null?O.x:0,Re=O!==null?O.y:0;K.setTexture2D(T,0),R.copyTexSubImage2D(R.TEXTURE_2D,$,0,0,Ne,Re,X,Ce),S.unbindTexture()},this.copyTextureToTexture=function(T,O,$=null,W=null,X=0,Ce=0){let Ne,Re,Fe,ze,Ze,tt,He,mt,Dt;const Lt=T.isCompressedTexture?T.mipmaps[Ce]:T.image;if($!==null)Ne=$.max.x-$.min.x,Re=$.max.y-$.min.y,Fe=$.isBox3?$.max.z-$.min.z:1,ze=$.min.x,Ze=$.min.y,tt=$.isBox3?$.min.z:0;else{const Ut=Math.pow(2,-X);Ne=Math.floor(Lt.width*Ut),Re=Math.floor(Lt.height*Ut),T.isDataArrayTexture?Fe=Lt.depth:T.isData3DTexture?Fe=Math.floor(Lt.depth*Ut):Fe=1,ze=0,Ze=0,tt=0}W!==null?(He=W.x,mt=W.y,Dt=W.z):(He=0,mt=0,Dt=0);const vt=we.convert(O.format),tn=we.convert(O.type);let Le;O.isData3DTexture?(K.setTexture3D(O,0),Le=R.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(K.setTexture2DArray(O,0),Le=R.TEXTURE_2D_ARRAY):(K.setTexture2D(O,0),Le=R.TEXTURE_2D),S.activeTexture(R.TEXTURE0),S.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),S.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),S.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment);const An=S.getParameter(R.UNPACK_ROW_LENGTH),at=S.getParameter(R.UNPACK_IMAGE_HEIGHT),On=S.getParameter(R.UNPACK_SKIP_PIXELS),di=S.getParameter(R.UNPACK_SKIP_ROWS),sr=S.getParameter(R.UNPACK_SKIP_IMAGES);S.pixelStorei(R.UNPACK_ROW_LENGTH,Lt.width),S.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Lt.height),S.pixelStorei(R.UNPACK_SKIP_PIXELS,ze),S.pixelStorei(R.UNPACK_SKIP_ROWS,Ze),S.pixelStorei(R.UNPACK_SKIP_IMAGES,tt);const fs=T.isDataArrayTexture||T.isData3DTexture,_t=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const Ut=k.get(T),or=k.get(O),yt=k.get(Ut.__renderTarget),ar=k.get(or.__renderTarget);S.bindFramebuffer(R.READ_FRAMEBUFFER,yt.__webglFramebuffer),S.bindFramebuffer(R.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let ds=0;ds<Fe;ds++)fs&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,k.get(T).__webglTexture,X,tt+ds),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,k.get(O).__webglTexture,Ce,Dt+ds)),R.blitFramebuffer(ze,Ze,Ne,Re,He,mt,Ne,Re,R.DEPTH_BUFFER_BIT,R.NEAREST);S.bindFramebuffer(R.READ_FRAMEBUFFER,null),S.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||k.has(T)){const Ut=k.get(T),or=k.get(O);S.bindFramebuffer(R.READ_FRAMEBUFFER,B),S.bindFramebuffer(R.DRAW_FRAMEBUFFER,z);for(let yt=0;yt<Fe;yt++)fs?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ut.__webglTexture,X,tt+yt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ut.__webglTexture,X),_t?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,or.__webglTexture,Ce,Dt+yt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,or.__webglTexture,Ce),X!==0?R.blitFramebuffer(ze,Ze,Ne,Re,He,mt,Ne,Re,R.COLOR_BUFFER_BIT,R.NEAREST):_t?R.copyTexSubImage3D(Le,Ce,He,mt,Dt+yt,ze,Ze,Ne,Re):R.copyTexSubImage2D(Le,Ce,He,mt,ze,Ze,Ne,Re);S.bindFramebuffer(R.READ_FRAMEBUFFER,null),S.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else _t?T.isDataTexture||T.isData3DTexture?R.texSubImage3D(Le,Ce,He,mt,Dt,Ne,Re,Fe,vt,tn,Lt.data):O.isCompressedArrayTexture?R.compressedTexSubImage3D(Le,Ce,He,mt,Dt,Ne,Re,Fe,vt,Lt.data):R.texSubImage3D(Le,Ce,He,mt,Dt,Ne,Re,Fe,vt,tn,Lt):T.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Ce,He,mt,Ne,Re,vt,tn,Lt.data):T.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Ce,He,mt,Lt.width,Lt.height,vt,Lt.data):R.texSubImage2D(R.TEXTURE_2D,Ce,He,mt,Ne,Re,vt,tn,Lt);S.pixelStorei(R.UNPACK_ROW_LENGTH,An),S.pixelStorei(R.UNPACK_IMAGE_HEIGHT,at),S.pixelStorei(R.UNPACK_SKIP_PIXELS,On),S.pixelStorei(R.UNPACK_SKIP_ROWS,di),S.pixelStorei(R.UNPACK_SKIP_IMAGES,sr),Ce===0&&O.generateMipmaps&&R.generateMipmap(Le),S.unbindTexture()},this.initRenderTarget=function(T){k.get(T).__webglFramebuffer===void 0&&K.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?K.setTextureCube(T,0):T.isData3DTexture?K.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?K.setTexture2DArray(T,0):K.setTexture2D(T,0),S.unbindTexture()},this.resetState=function(){Q=0,Y=0,U=null,S.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}function av(n,e){if(e===mT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===ph||e===jx){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===ph)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function yP(n){const e=new Map,t=new Map,i=n.clone();return yy(n,i,function(r,s){e.set(s,r),t.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function yy(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)yy(n.children[i],e.children[i],t)}class SP extends xo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new AP(t)}),this.register(function(t){return new bP(t)}),this.register(function(t){return new FP(t)}),this.register(function(t){return new OP(t)}),this.register(function(t){return new kP(t)}),this.register(function(t){return new CP(t)}),this.register(function(t){return new PP(t)}),this.register(function(t){return new LP(t)}),this.register(function(t){return new NP(t)}),this.register(function(t){return new wP(t)}),this.register(function(t){return new IP(t)}),this.register(function(t){return new RP(t)}),this.register(function(t){return new UP(t)}),this.register(function(t){return new DP(t)}),this.register(function(t){return new EP(t)}),this.register(function(t){return new lv(t,it.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new lv(t,it.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new BP(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ca.extractUrlBase(e);o=ca.resolveURL(c,this.path)}else o=ca.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new uy(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Sy){try{o[it.KHR_BINARY_GLTF]=new zP(e)}catch(d){r&&r(d);return}s=JSON.parse(o[it.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new QP(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(d){case it.KHR_MATERIALS_UNLIT:o[d]=new TP;break;case it.KHR_DRACO_MESH_COMPRESSION:o[d]=new VP(s,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:o[d]=new HP;break;case it.KHR_MESH_QUANTIZATION:o[d]=new GP;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function MP(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Ot(n,e,t){const i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class EP{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ke(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Dn);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new f1(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new c1(u),c.distance=d;break;case"spot":c=new a1(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),vi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class TP{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return ri}extendParams(e,t,i){const r=[];e.color=new Ke(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Dn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Zt))}return Promise.all(r)}}class wP{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class AP{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ge(s,s)}return Promise.all(r)}}class bP{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class RP{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}}class CP{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Dn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Zt)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}}class PP{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}}class LP{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const s=i.attenuationColor||[1,1,1];return t.attenuationColor=new Ke().setRGB(s[0],s[1],s[2],Dn),Promise.all(r)}}class NP{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class IP{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const s=i.specularColorFactor||[1,1,1];return t.specularColor=new Ke().setRGB(s[0],s[1],s[2],Dn),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Zt)),Promise.all(r)}}class DP{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}}class UP{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Ot(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}}class FP{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class OP{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class kP{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class lv{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(p),u,d,f,r.mode,r.filter),p})})}else return null}}class BP{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==zn.TRIANGLES&&c.mode!==zn.TRIANGLE_STRIP&&c.mode!==zn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const m of d){const g=new Je,v=new I,h=new ir,_=new I(1,1,1),M=new mw(m.geometry,m.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&v.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),M.setMatrixAt(x,g.compose(v,h,_));for(const x in l)if(x==="_COLOR_0"){const E=l[x];M.instanceColor=new vh(E.array,E.itemSize,E.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,l[x]);Rt.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),p.push(M)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Sy="glTF",Ho=12,cv={JSON:1313821514,BIN:5130562};class zP{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ho),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Ho,s=new DataView(e,Ho);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===cv.JSON){const c=new Uint8Array(e,Ho+o,a);this.content=i.decode(c)}else if(l===cv.BIN){const c=Ho+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class VP{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=Mh[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Mh[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],p=Js[f.componentType];c[d]=p.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,f){r.decodeDracoFile(u,function(p){for(const m in p.attributes){const g=p.attributes[m],v=l[m];v!==void 0&&(g.normalized=v)}d(p)},a,c,Dn,f)})})}}class HP{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class GP{constructor(){this.name=it.KHR_MESH_QUANTIZATION}}class My extends go{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,d=(i-t)/u,f=d*d,p=f*d,m=e*c,g=m-c,v=-2*p+3*f,h=p-f,_=1-v,M=h-f+d;for(let x=0;x!==a;x++){const E=o[g+x+a],w=o[g+x+l]*u,b=o[m+x+a],y=o[m+x]*u;s[x]=_*E+M*w+v*b+h*y}return s}}const WP=new ir;class XP extends My{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return WP.fromArray(s).normalize().toArray(s),s}}const zn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},uv={9728:Ht,9729:Gt,9984:Gx,9985:ec,9986:qo,9987:Wi},fv={33071:Si,33648:Pc,10497:lo},Pf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},YP={CUBICSPLINE:void 0,LINEAR:Pa,STEP:Ca},Lf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function KP(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Vp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qi})),n.DefaultMaterial}function Wr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function vi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qP(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(i){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(f)}if(r){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(f)}if(s){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],f=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function $P(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jP(n){let e;const t=n.extensions&&n.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nf(t.attributes):e=n.indices+":"+Nf(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Nf(n.targets[i]);return e}function Nf(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Eh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ZP(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const JP=new Je;class QP{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new MP,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new s1(this.options.manager):this.textureLoader=new d1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new uy(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Wr(s,a,r),vi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(ca.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Pf[r.type],a=Js[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new gn(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Pf[r.type],c=Js[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,f=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let g,v;if(p&&p!==d){const h=Math.floor(f/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let M=t.cache.get(_);M||(g=new c(a,h*p,r.count*p/u),M=new lw(g,p/u),t.cache.add(_,M)),v=new Np(M,l,f%p/u,m)}else a===null?g=new c(r.count*l):g=new c(a,f,r.count*l),v=new gn(g,l,m);if(r.sparse!==void 0){const h=Pf.SCALAR,_=Js[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,E=new _(o[1],M,r.sparse.count*h),w=new c(o[2],x,r.sparse.count*l);a!==null&&(v=new gn(v.array.slice(),v.itemSize,v.normalized)),v.normalized=!1;for(let b=0,y=E.length;b<y;b++){const C=E[b];if(v.setX(C,w[b*l]),l>=2&&v.setY(C,w[b*l+1]),l>=3&&v.setZ(C,w[b*l+2]),l>=4&&v.setW(C,w[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}v.normalized=m}return v})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=uv[f.magFilter]||Gt,u.minFilter=uv[f.minFilter]||Wi,u.wrapS=fv[f.wrapS]||lo,u.wrapT=fv[f.wrapT]||lo,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ht&&u.minFilter!==Gt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let m=f;t.isImageBitmapLoader===!0&&(m=function(g){const v=new $t(g);v.needsUpdate=!0,f(v)}),t.load(ca.resolveURL(d,s.path),m,void 0,p)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),vi(d,o),d.userData.mimeType=o.mimeType||ZP(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[it.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new ry,bi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Fp,bi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Vp}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[it.KHR_MATERIALS_UNLIT]){const d=r[it.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Ke(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Dn),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Zt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=yi);const u=s.alphaMode||Lf.OPAQUE;if(u===Lf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Lf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ri&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ge(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==ri&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ri){const d=s.emissiveFactor;a.emissive=new Ke().setRGB(d[0],d[1],d[2],Dn)}return s.emissiveTexture!==void 0&&o!==ri&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Zt)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),vi(d,s),t.associations.set(d,{materials:e}),s.extensions&&Wr(r,d,s),d})}createUniqueName(e){const t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return dv(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=jP(c),d=r[u];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[it.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=dv(new wn,c,t),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?KP(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,m=u.length;p<m;p++){const g=u[p],v=o[p];let h;const _=c[p];if(v.mode===zn.TRIANGLES||v.mode===zn.TRIANGLE_STRIP||v.mode===zn.TRIANGLE_FAN||v.mode===void 0)h=s.isSkinnedMesh===!0?new dw(g,_):new cn(g,_),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),v.mode===zn.TRIANGLE_STRIP?h.geometry=av(h.geometry,jx):v.mode===zn.TRIANGLE_FAN&&(h.geometry=av(h.geometry,ph));else if(v.mode===zn.LINES)h=new xw(g,_);else if(v.mode===zn.LINE_STRIP)h=new Op(g,_);else if(v.mode===zn.LINE_LOOP)h=new yw(g,_);else if(v.mode===zn.POINTS)h=new Sw(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(h.geometry.morphAttributes).length>0&&$P(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),vi(h,s),v.extensions&&Wr(r,h,v),t.assignFinalMaterial(h),d.push(h)}for(let p=0,m=d.length;p<m;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&Wr(r,d[0],s),d[0];const f=new Er;s.extensions&&Wr(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,m=d.length;p<m;p++)f.add(d[p]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new ln(Cp.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new su(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),vi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const f=new Je;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Dp(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,f=r.channels.length;d<f;d++){const p=r.channels[d],m=r.samplers[p.sampler],g=p.target,v=g.node,h=r.parameters!==void 0?r.parameters[m.input]:m.input,_=r.parameters!==void 0?r.parameters[m.output]:m.output;g.node!==void 0&&(o.push(this.getDependency("node",v)),a.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",_)),c.push(m),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const f=d[0],p=d[1],m=d[2],g=d[3],v=d[4],h=[];for(let M=0,x=f.length;M<x;M++){const E=f[M],w=p[M],b=m[M],y=g[M],C=v[M];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const P=i._createAnimationTracks(E,w,b,y,C);if(P)for(let L=0;L<P.length;L++)h.push(P[L])}const _=new Jw(s,void 0,h);return vi(_,r),_})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,JP)});for(let p=0,m=d.length;p<m;p++)u.add(d[p]);if(u.userData.pivot!==void 0&&d.length>0){const p=u.userData.pivot,m=d[0];u.pivot=new I().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new iy:c.length>1?u=new Er:c.length===1?u=c[0]:u=new Rt,u!==c[0])for(let d=0,f=c.length;d<f;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=o),vi(u,s),s.extensions&&Wr(i,u,s),s.matrix!==void 0){const d=new Je;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const d=r.associations.get(u);r.associations.set(u,{...d})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Er;i.name&&(s.name=r.createUniqueName(i.name)),vi(s,i),i.extensions&&Wr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++){const f=l[u];f.parent!==null?s.add(yP(f)):s.add(f)}const c=u=>{const d=new Map;for(const[f,p]of r.associations)(f instanceof bi||f instanceof $t)&&d.set(f,p);return u.traverse(f=>{const p=r.associations.get(f);p!=null&&d.set(f,p)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}mr[s.path]===mr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(mr[s.path]){case mr.weights:u=Ia;break;case mr.rotation:u=Da;break;case mr.translation:case mr.scale:u=kc;break;default:switch(i.itemSize){case 1:u=Ia;break;case 2:case 3:default:u=kc;break}break}const d=r.interpolation!==void 0?YP[r.interpolation]:Pa,f=this._getArrayFromAccessor(i);for(let p=0,m=l.length;p<m;p++){const g=new u(l[p]+"."+mr[s.path],t.array,f,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Eh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Da?XP:My;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function eL(n,e,t){const i=e.attributes,r=new rr;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const u=Eh(Js[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],p=f.min,m=f.max;if(p!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),f.normalized){const g=Eh(Js[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Pi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function dv(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Mh[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return rt.workingColorSpace!==Dn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),vi(n,e),eL(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?qP(n,e.targets,t):n})}const hv={otsuka:"大塚駅南口",higashi_ikebukuro:"東池袋駅4番出口",gokokuji:"護国寺駅1番出口",shin_otsuka_1:"新大塚 丸ノ内線1番出口",shin_otsuka_2:"新大塚 丸ノ内線2番出口",otsuka_ekimae:"大塚駅前",koubara_waseda:"向原 早稲田方面",koubara_micorowa:"向原 三ノ輪方面",hie_4chome_waseda:"東池袋四丁目 早稲田方面",hie_4chome_micorowa:"東池袋四丁目 三ノ輪方面"},pv=15686400,tL=16751949,nL=.3,iL=.5,rL=.5,sL=.55,If=350,oL=.6,aL=50,lL=aL/Math.tan(Cp.degToRad(30)),Df=.16,mv=Cp.degToRad(30);function gv(n){return new I(n[0],n[2],-n[1])}function vv(n,e){const t=new Ow,i=n.length;if(i<3){for(let a=0;a<i-1;a++)t.add(new Ps(n[a],n[a+1]));return t}const r=new I,s=new I;let o=n[0];for(let a=1;a<i-1;a++){const l=n[a];r.subVectors(l,n[a-1]),s.subVectors(n[a+1],l);const c=r.length(),u=s.length();if(c<1e-6||u<1e-6){t.add(new Ps(o,l)),o=l;continue}if(r.divideScalar(c),s.divideScalar(u),r.dot(s)>.985){t.add(new Ps(o,l)),o=l;continue}const d=Math.min(e,c*.5,u*.5),f=l.clone().addScaledVector(r,-d),p=l.clone().addScaledVector(s,d);t.add(new Ps(o,f)),t.add(new Bp(f,l,p)),o=p}return t.add(new Ps(o,n[i-1])),t}function cL(n){let e=0;for(let t=1;t<n.length;t++)e+=n[t-1].distanceTo(n[t]);return e}function uL({stationId:n="otsuka",viewpoint:e="walking",direction:t=1,speed:i=5,playing:r=!0,resetToken:s=0,pipRef:o=null}){const a=Et.useRef(null),l=Et.useRef(null),c=Et.useRef({stationId:n,viewpoint:e,direction:t,speed:i,playing:r});return c.current={stationId:n,viewpoint:e,direction:t,speed:i,playing:r},Et.useEffect(()=>{const u=a.current;if(!u)return;let d=!1,f=0;const p=new rw;p.fog=new Lp(16777215,1800,4500);const m=new ln(60,u.clientWidth/u.clientHeight,.1,5e3),g=new xP({alpha:!0,antialias:!0});g.setSize(u.clientWidth,u.clientHeight),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.setClearColor(0,0),u.appendChild(g.domElement);const v=new Er;v.rotation.x=-Math.PI/2,p.add(v);const h=document.createElement("div");h.textContent="地図を読み込んでいます…",h.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#8a8f98;font-size:14px;font-family:inherit;",u.appendChild(h);const _={t:0,lastTime:0},M={current:null};let x=[],E=null,w=0,b=null,y=null,C=null;const P=[],L=[new Vi,new Vi],F={x:0,y:0,z:0};let j=0;const B={yaw:0,pitch:0,zoom:1,panX:0,panY:0,panZ:0,fov:0},z=Math.hypot(If,oL*If),Q=Math.asin(If/z),Y=new ln(60,16/9,.1,5e3),U=new Set;let J=null;const ne=(R,ce,Se)=>Math.min(Se,Math.max(ce,R));function ue(){B.yaw=0,B.pitch=0,B.zoom=1,B.fov=0,B.panX=0,B.panY=0,B.panZ=0}function xe(R){if(!E)return;const ce=E.getPointAt(R),Se=E.getTangentAt(R);F.x=ce.x,F.y=ce.y,F.z=ce.z,j=Math.atan2(Se.x,Se.z)}function $e(){const R=c.current;if(!M.current)return;b&&(p.remove(b),b.geometry.dispose(),b.material.dispose(),b=null),y&&(p.remove(y),y.geometry.dispose(),y.material.dispose(),y=null),C&&(p.remove(C),C.geometry.dispose(),C.material.dispose(),C=null);const ce=hv[R.stationId]||hv.otsuka,Se=M.current.routes.find(ge=>ge.station===ce);if(!Se||Se.points.length<2)return;let A=Se.points;R.direction===-1&&(A=[...A].reverse()),x=A.map(ge=>gv(ge)),w=cL(x),E=vv(x,1);const S=Math.max(Math.round(w/.5),64),N=new Oc(E,S,nL,8,!1),k=new ri({color:pv,transparent:!0,opacity:iL,depthWrite:!1});b=new cn(N,k),b.renderOrder=10,p.add(b);const K=x.map(ge=>new I(ge.x,ge.y-1.45,ge.z)),ae=vv(K,1),re=new Oc(ae,S,.15,6,!1),q=new ri({color:pv,transparent:!0,opacity:.55,depthWrite:!1});y=new cn(re,q),y.renderOrder=9,p.add(y);const Z=new zp(1.5,16,12),pe=new ri({color:tL});C=new cn(Z,pe),p.add(C),_.t=0,xe(0)}function ot(){_.t=0,xe(0)}function Qe(R){const ce=R*.8;(U.has("a")||U.has("arrowleft"))&&(B.yaw+=ce),(U.has("d")||U.has("arrowright"))&&(B.yaw-=ce);const Se=R*.6;(U.has("w")||U.has("arrowup"))&&(B.pitch+=Se),(U.has("s")||U.has("arrowdown"))&&(B.pitch-=Se);const A=c.current.viewpoint==="aerial"?80:20;U.has("q")&&(B.panY+=A*R),U.has("e")&&(B.panY-=A*R),B.pitch=ne(B.pitch,-1.2,1.2)}async function te(){const R="./map/",ce=new SP,[Se,A]=await Promise.all([fetch(R+"manifest.json"),fetch(R+"routes.json")]),S=await Se.json();if(M.current=await A.json(),d||(await Promise.all(S.layers.map(k=>new Promise(K=>{ce.load(R+k.file,ae=>{if(d){K();return}ae.scene.traverse(re=>{var pe;const q=!!((pe=re.geometry)!=null&&pe.attributes.color);if(re.isMesh){const ge=re.material,ye=k.id==="terrain",_e=k.id==="lines";re.material=new ri({vertexColors:q,polygonOffset:!0,polygonOffsetFactor:ye?1:.5,polygonOffsetUnits:ye?1:.5,transparent:_e,opacity:_e?rL:1}),ge.dispose()}else if(re.isLine){const ge=re.material;re.material=new Fp({vertexColors:q,transparent:!0,opacity:sL,depthWrite:!1}),ge.dispose()}else return;re.userData.pipBaseMat=re.material;const Z=re.material.clone();re.isMesh?(Z.transparent=!1,Z.opacity=1,Z.onBeforeCompile=ge=>{ge.fragmentShader=ge.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
	// PiP 俯瞰・視界外減光: 背景地図色 × ${Df}（白へ混合）
	diffuseColor.rgb = mix( vec3( 1.0 ), diffuseColor.rgb, ${Df} );`)}):(Z.transparent=!0,Z.opacity=Df),re.userData.pipFadedMat=Z,P.push(re)}),v.add(ae.scene),K()},void 0,ae=>{console.warn(`マップレイヤー読込失敗 (${k.id}):`,ae),K()})}))),d))return;h.remove();const N=gv(S.cresome.position);F.x=N.x,F.y=N.y,F.z=N.z,m.position.set(N.x+260,N.y+210,N.z+300),m.lookAt(N),$e()}function ve(R){f=requestAnimationFrame(ve);const ce=c.current,Se=_.lastTime?(R-_.lastTime)/1e3:0;_.lastTime=R;let A=null;if(E){ce.playing&&w>0&&(_.t+=ce.speed*Se/w,_.t>1&&(_.t-=1));const N=E.getPointAt(_.t);A=N;const k=E.getTangentAt(_.t);C&&C.position.copy(N),b&&(b.visible=!1),y&&(y.visible=!1),C&&(C.visible=!1),Qe(Se);const K=Se>0?1-Math.exp(-5*Se):1;F.x+=(N.x-F.x)*K,F.y+=(N.y-F.y)*K,F.z+=(N.z-F.z)*K;let ae=Math.atan2(k.x,k.z)-j;if(ae=Math.atan2(Math.sin(ae),Math.cos(ae)),j+=ae*K,J!==null&&J!==ce.viewpoint&&xe(_.t),J=ce.viewpoint,ce.viewpoint==="walking"){const re=j+B.yaw,q=ne(B.pitch-.04,-1.2,1.2),Z=Math.cos(q)*Math.sin(re),pe=Math.sin(q),ge=Math.cos(q)*Math.cos(re),ye=50*(B.zoom-1),_e=F.x+B.panX+Z*ye,Ue=F.y+B.panY+pe*ye,Ve=F.z+B.panZ+ge*ye;m.position.set(_e,Ue,Ve),m.lookAt(_e+Z*50,Ue+pe*50,Ve+ge*50)}else{const re=Q+B.pitch,q=z*B.zoom,Z=B.yaw,pe=Math.cos(re)*Math.sin(Z)*q,ge=Math.sin(re)*q,ye=Math.cos(re)*Math.cos(Z)*q,_e=F.x+B.panX,Ue=F.y+B.panY,Ve=F.z+B.panZ;m.position.set(_e+pe,Ue+ge,Ve+ye),m.lookAt(_e,Ue,Ve)}}ce.viewpoint==="aerial"&&(y&&(y.visible=!0),C&&(C.visible=!0)),g.setViewport(0,0,g.domElement.clientWidth,g.domElement.clientHeight),g.setScissorTest(!1),g.render(p,m),y&&(y.visible=!1),C&&(C.visible=!1);const S=o?o.current:null;if(S&&A){const N=S.getBoundingClientRect();if(N.width>4&&N.height>4){const k=Math.round(N.left),K=Math.round(g.domElement.clientHeight-N.bottom),ae=Math.round(N.width),re=Math.round(N.height),q=ce.viewpoint==="walking";if(q)Y.up.set(0,0,-1),Y.position.set(A.x,A.y+lL,A.z),Y.lookAt(A.x,A.y,A.z);else{const Z=j,pe=-.04,ge=Math.cos(pe)*Math.sin(Z),ye=Math.sin(pe),_e=Math.cos(pe)*Math.cos(Z);Y.up.set(0,1,0),Y.position.set(A.x,A.y,A.z),Y.lookAt(A.x+ge*50,A.y+ye*50,A.z+_e*50)}if(Y.aspect=ae/re,Y.updateProjectionMatrix(),g.setViewport(k,K,ae,re),g.setScissor(k,K,ae,re),g.setScissorTest(!0),q){b&&(b.visible=!1);for(const ge of P)ge.material=ge.userData.pipFadedMat;g.render(p,Y),v.visible=!1,b&&(b.visible=!0,b.material.depthWrite=!0),g.autoClear=!1,g.render(p,Y),b&&(b.material.depthWrite=!1),v.visible=!0;for(const ge of P)ge.material=ge.userData.pipBaseMat;const Z=j-mv;L[0].normal.set(Math.cos(Z),0,-Math.sin(Z)),L[0].constant=-(L[0].normal.x*A.x+L[0].normal.z*A.z);const pe=j+mv;L[1].normal.set(-Math.cos(pe),0,Math.sin(pe)),L[1].constant=-(L[1].normal.x*A.x+L[1].normal.z*A.z),g.autoClear=!1,g.clippingPlanes=L,g.render(p,Y),g.clippingPlanes=[],g.autoClear=!0}else g.render(p,Y);q&&b&&(b.visible=!1),g.setScissorTest(!1)}}}function de(){const R=u.clientWidth,ce=u.clientHeight;m.aspect=R/ce,m.updateProjectionMatrix(),g.setSize(R,ce)}window.addEventListener("resize",de);function We(R){if(R===document.body)return!0;if(!(R instanceof Element)||R.closest("button, a, input, select, textarea, [data-nav], .sidebar, .topbar, .drawer, .scrim, .map-controls, .bg-switcher"))return!1;const ce=typeof R.className=="string"?R.className:"";return/\b(main|page-wrap|page|map-bg|map-pip|map-bottom)\b/.test(ce)}let Xe=null,Be=0,pt=0;function H(R){We(R.target)&&(R.button!==0&&R.button!==2||(Xe=R.button===2||R.shiftKey?"pan":"rotate",Be=R.clientX,pt=R.clientY,R.preventDefault()))}function Me(R){if(!Xe)return;const ce=R.clientX-Be,Se=R.clientY-pt;if(Be=R.clientX,pt=R.clientY,Xe==="rotate")B.yaw-=ce*.005,B.pitch=ne(B.pitch-Se*.005,-1.2,1.2);else{const A=c.current,S=A.viewpoint==="walking"?j+B.yaw:B.yaw,N=(A.viewpoint==="aerial"?z*B.zoom:50)*.002;B.panX+=Math.cos(S)*ce*N,B.panZ+=-Math.sin(S)*ce*N,B.panY+=Se*N}}function be(){Xe=null}function se(R){We(R.target)&&(R.preventDefault(),c.current.viewpoint==="aerial"?B.zoom=ne(B.zoom*(1-R.deltaY*.001),.3,4):B.zoom=ne(B.zoom-R.deltaY*.001,.2,2.5))}function fe(R){const ce=document.activeElement;if(ce&&/^(INPUT|TEXTAREA|SELECT)$/.test(ce.tagName))return;const Se=R.key.toLowerCase();if(Se==="r"){ue();return}["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(Se)&&(R.preventDefault(),U.add(Se))}function Ee(R){U.delete(R.key.toLowerCase())}function G(R){(Xe==="pan"||We(R.target))&&R.preventDefault()}function V(){U.clear()}window.addEventListener("pointerdown",H),window.addEventListener("pointermove",Me),window.addEventListener("pointerup",be),window.addEventListener("pointercancel",be),window.addEventListener("wheel",se,{passive:!1}),window.addEventListener("keydown",fe),window.addEventListener("keyup",Ee),window.addEventListener("contextmenu",G),window.addEventListener("blur",V);let he=!0;function oe(){document.hidden?(cancelAnimationFrame(f),he=!1):he||(he=!0,_.lastTime=0,f=requestAnimationFrame(ve))}return document.addEventListener("visibilitychange",oe),te().catch(R=>{console.warn("マップ背景の初期化失敗:",R),h.parentNode&&h.remove()}),f=requestAnimationFrame(ve),l.current={scene:p,camera:m,renderer:g,container:u,updateRoute:$e,resetRoute:ot},()=>{d=!0,cancelAnimationFrame(f),window.removeEventListener("resize",de),window.removeEventListener("pointerdown",H),window.removeEventListener("pointermove",Me),window.removeEventListener("pointerup",be),window.removeEventListener("pointercancel",be),window.removeEventListener("wheel",se),window.removeEventListener("keydown",fe),window.removeEventListener("keyup",Ee),window.removeEventListener("contextmenu",G),window.removeEventListener("blur",V),document.removeEventListener("visibilitychange",oe),b&&(b.geometry.dispose(),b.material.dispose()),y&&(y.geometry.dispose(),y.material.dispose()),C&&(C.geometry.dispose(),C.material.dispose()),v.traverse(R=>{if(!R.isMesh&&!R.isLine)return;R.geometry&&R.geometry.dispose();const ce=R.material;Array.isArray(ce)?ce.forEach(A=>A.dispose()):ce&&ce.dispose();const Se=R.userData.pipBaseMat;Se&&Se!==ce&&Se.dispose(),R.userData.pipFadedMat&&R.userData.pipFadedMat.dispose()}),g.dispose(),g.domElement.parentNode&&g.domElement.parentNode.removeChild(g.domElement),h.parentNode&&h.remove(),l.current=null}},[]),Et.useEffect(()=>{var u;(u=l.current)!=null&&u.updateRoute&&l.current.updateRoute()},[n,t]),Et.useEffect(()=>{var u;s>0&&((u=l.current)!=null&&u.resetRoute)&&l.current.resetRoute()},[s]),ee.jsx("div",{ref:a,className:"map-bg","aria-hidden":"true"})}const Ey=[{line:"JR山手線",items:[{id:"otsuka",label:"大塚駅"}]},{line:"有楽町線",items:[{id:"higashi_ikebukuro",label:"東池袋駅"},{id:"gokokuji",label:"護国寺駅"}]},{line:"丸ノ内線",items:[{id:"shin_otsuka_1",label:"新大塚 1番出口"},{id:"shin_otsuka_2",label:"新大塚 2番出口"}]},{line:"荒川線",items:[{id:"otsuka_ekimae",label:"大塚駅前"},{id:"koubara_waseda",label:"向原（早稲田側）"},{id:"koubara_micorowa",label:"向原（三ノ輪側）"},{id:"hie_4chome_waseda",label:"東池袋四丁目（早稲田側）"},{id:"hie_4chome_micorowa",label:"東池袋四丁目（三ノ輪側）"}]}],fL=Ey.flatMap(n=>n.items.map(e=>e.id)),dL=1.4,hL=14;function pL({stationId:n,onStationChange:e,viewpoint:t,onViewpointChange:i,direction:r,onDirectionChange:s,speed:o,onSpeedChange:a,playing:l=!0,onPlayingChange:c,onResetRoute:u}){return ee.jsxs("div",{className:"map-controls",children:[ee.jsxs("div",{className:"map-controls-group",children:[ee.jsx("span",{className:"map-controls-sublabel",children:"始点"}),Ey.map(d=>ee.jsxs("div",{className:"map-controls-station-group",children:[ee.jsx("span",{className:"map-controls-station-group-label",children:d.line}),ee.jsx("div",{className:"map-controls-station-items",children:d.items.map(f=>ee.jsx("button",{type:"button",className:"map-controls-btn"+(n===f.id?" active":""),onClick:()=>e(f.id),children:f.label},f.id))})]},d.line))]}),ee.jsxs("div",{className:"map-controls-group",children:[ee.jsx("span",{className:"map-controls-sublabel",children:"視点"}),ee.jsxs("div",{className:"map-controls-toggle",children:[ee.jsx("button",{type:"button",className:"map-controls-btn"+(t==="walking"?" active":""),onClick:()=>i("walking"),children:"歩行"}),ee.jsx("button",{type:"button",className:"map-controls-btn"+(t==="aerial"?" active":""),onClick:()=>i("aerial"),children:"俯瞰"})]})]}),ee.jsxs("div",{className:"map-controls-group",children:[ee.jsx("span",{className:"map-controls-sublabel",children:"向き"}),ee.jsxs("div",{className:"map-controls-toggle",children:[ee.jsx("button",{type:"button",className:"map-controls-btn"+(r===1?" active":""),onClick:()=>s(1),children:"駅 → 社"}),ee.jsx("button",{type:"button",className:"map-controls-btn"+(r===-1?" active":""),onClick:()=>s(-1),children:"社 → 駅"})]})]}),ee.jsxs("div",{className:"map-controls-group",children:[ee.jsxs("span",{className:"map-controls-sublabel",children:["速度（",o.toFixed(1)," m/s）"]}),ee.jsx("input",{type:"range",className:"map-controls-slider",min:dL,max:hL,step:.1,value:o,onChange:d=>a(parseFloat(d.target.value))}),ee.jsxs("div",{className:"map-controls-slider-labels",children:[ee.jsx("span",{children:"徒歩"}),ee.jsx("span",{children:"車"})]})]}),ee.jsxs("div",{className:"map-controls-group",children:[ee.jsx("span",{className:"map-controls-sublabel",children:"再生"}),ee.jsxs("div",{className:"map-controls-player",children:[ee.jsx("button",{type:"button",className:"map-controls-player-btn",title:"停止（最初へ）","aria-label":"停止（最初へ）",onClick:u,children:ee.jsx("span",{className:"map-controls-icon map-controls-icon-rewind"})}),ee.jsx("button",{type:"button",className:"map-controls-player-btn map-controls-player-main"+(l?"":" paused"),title:l?"中断":"再開（再生）","aria-label":l?"中断":"再開（再生）",onClick:()=>c(!l),children:ee.jsx("span",{className:"map-controls-icon "+(l?"map-controls-icon-pause":"map-controls-icon-play")})})]})]}),ee.jsxs("div",{className:"map-controls-group map-controls-hint",children:[ee.jsx("span",{className:"map-controls-sublabel",children:"カメラ操作"}),ee.jsxs("div",{className:"map-controls-hint-text",children:["ドラッグ: 視点回転 / ホイール: ズーム / 右ドラッグ: カメラパン",ee.jsx("br",{}),"WASD・矢印: 視点回転 / Q/E: 上下移動 / R: リセット"]})]})]})}function mL(){return ee.jsxs(ee.Fragment,{children:[ee.jsxs("h1",{className:"hero-title",children:[ee.jsx("span",{className:"accent",children:"こうしてほしい"}),"をいっしょにカタチに。"]}),ee.jsxs("div",{className:"lead-group reveal",children:[ee.jsx("p",{className:"lead",children:"UI/UXデザインからAI/LLM連携開発まで、アイデアを製品へとつなげることをお手伝いします。"}),ee.jsx("p",{className:"lead",children:"お持ちの想いを、一緒にカタチにしていきましょう。"})]}),ee.jsx("div",{className:"reveal",style:{marginTop:"60px"},children:ee.jsxs("div",{className:"feature-grid",children:[ee.jsx("div",{className:"feature",children:"UI/UXデザイン"}),ee.jsx("div",{className:"feature",children:"技術コンサルティング"}),ee.jsx("div",{className:"feature",children:"Webアプリ受託開発"}),ee.jsx("div",{className:"feature",children:"AI/LLM連携開発"})]})})]})}const gL=[{title:"UI/UXデザイン",text:"直感的で美しい、ユーザーに愛される体験をデザインします。使いやすさと見た目の両立を大切にしています。"},{title:"技術コンサルティング",text:"目的に合った最適な技術選定とアーキテクチャを、分かりやすくご提案します。"},{title:"Webアプリ受託開発",text:"要件定義からリリースまで、高品質なWebアプリを丁寧なプロセスで開発します。"},{title:"AI/LLM連携開発",text:"LLMなどのAIを業務に組み込み、生産性を高める体験を実現します。"}];function vL(){return ee.jsxs(ee.Fragment,{children:[ee.jsx("h2",{className:"section-title",children:"できること"}),ee.jsx("p",{className:"lead reveal",children:"デザイン・開発・AI、さまざまな領域で、製品づくりを最初から最後まで一貫して支えます。"}),ee.jsx("div",{className:"cards-grid",style:{marginTop:"46px",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px"},children:gL.map(n=>ee.jsxs("div",{className:"card reveal",children:[ee.jsx("h3",{children:n.title}),ee.jsx("p",{children:n.text})]},n.title))})]})}const _L=[{num:"01",title:"ヒアリング",text:"現在の課題とゴールを丁寧に伺い、一緒にプロジェクトの方向性を考えます。"},{num:"02",title:"提案・設計",text:"最適なソリューションの提案と、UI/UX設計・技術設計を行います。"},{num:"03",title:"開発",text:"段階的に開発を積み上げながら、進捗を共有し続けていきます。"},{num:"04",title:"リリース・運用",text:"無事にリリースした後、運用フェーズでも安心して任せられる体制でサポートします。"}];function xL(){return ee.jsxs(ee.Fragment,{children:[ee.jsx("h2",{className:"section-title",children:"開発フロー"}),ee.jsx("p",{className:"lead reveal",children:"透明感のあるプロセスで、一緒に最適な形を育てていきます。"}),ee.jsx("div",{style:{marginTop:"50px",maxWidth:"680px"},children:_L.map(n=>ee.jsxs("div",{className:"flow-step reveal",children:[ee.jsx("div",{className:"flow-num",children:n.num}),ee.jsx("h3",{children:n.title}),ee.jsx("p",{children:n.text})]},n.num))})]})}const yL=[{label:"会社名",value:"クリサム株式会社（Cresome Technical Works）"},{label:"所在地",value:"〒112-0012 東京都文京区大塚6丁目22番2号"},{label:"代表取締役",value:"栗原 智明"},{label:"電話番号",value:"03-6336-8542"},{label:"メール",value:"tomoaki.kurihara@cresome.tech",mail:!0},{label:"設立",value:"2023年4月"}];function SL(){return ee.jsxs(ee.Fragment,{children:[ee.jsx("h2",{className:"section-title",children:"会社概要"}),ee.jsxs("div",{className:"lead-group reveal",children:[ee.jsx("p",{className:"lead",children:"お気軽にご連絡ください。"}),ee.jsx("p",{className:"lead",children:"小さなご相談でも、お気軽にどうぞ。"})]}),ee.jsx("div",{className:"reveal",style:{marginTop:"46px",maxWidth:"560px"},children:ee.jsx("div",{className:"card",style:{padding:"14px 30px"},children:yL.map(n=>ee.jsxs("div",{className:"info-row",children:[ee.jsx("div",{className:"info-label",children:n.label}),ee.jsx("div",{className:"info-value",children:n.mail?ee.jsx("a",{href:"mailto:"+n.value,children:n.value}):n.value})]},n.label))})})]})}const _v=[{id:"home",label:"トップ",Component:mL},{id:"business",label:"事業内容",Component:vL},{id:"flow",label:"開発フロー",Component:xL},{id:"company",label:"会社概要",Component:SL}],xv="cresome.mapConfig",Uf={stationId:"otsuka",viewpoint:"walking",direction:1,speed:5,playing:!0};function ML(){const[n,e]=Et.useState("home"),[t,i]=Et.useState(!1),[r,s]=Et.useState(!1),[o,a]=Et.useState(!1),[l,c]=Et.useState(()=>window.localStorage.getItem("cresome.bgMode")||"wave"),[u,d]=Et.useState(()=>{try{const x=window.localStorage.getItem(xv),E=x?JSON.parse(x):{};return{...Uf,...E,stationId:fL.includes(E.stationId)?E.stationId:Uf.stationId}}catch{return Uf}}),f=Et.useRef(!1);Et.useEffect(()=>{window.localStorage.setItem("cresome.bgMode",l)},[l]),Et.useEffect(()=>{window.localStorage.setItem(xv,JSON.stringify(u))},[u]),Et.useEffect(()=>{const x=document.querySelectorAll(".reveal:not(.in)"),E=new IntersectionObserver(w=>{w.forEach(b=>{b.isIntersecting&&(b.target.classList.add("in"),E.unobserve(b.target))})},{threshold:.12});return x.forEach((w,b)=>{w.style.transitionDelay=b%5*70+"ms",E.observe(w)}),()=>E.disconnect()},[]);const p=x=>{x===n||f.current||(f.current=!0,a(!1),i(!0),setTimeout(()=>{e(x),i(!1),s(!0),setTimeout(()=>{s(!1),f.current=!1},560)},340))},m=_v.map(x=>({id:x.id,label:x.label,active:x.id===n})),g=x=>{d(E=>({...E,...x}))},[v,h]=Et.useState(0),_=()=>h(x=>x+1),M=Et.useRef(null);return ee.jsxs(ee.Fragment,{children:[l==="wave"?ee.jsx(hE,{}):l==="spacewars"?ee.jsx(GE,{}):ee.jsx(uL,{stationId:u.stationId,viewpoint:u.viewpoint,direction:u.direction,speed:u.speed,playing:u.playing,resetToken:v,pipRef:M}),ee.jsx(sE,{items:m,onSelect:p,bgMode:l,onBgModeChange:c}),ee.jsx(oE,{onMenu:()=>a(!0)}),ee.jsx(aE,{items:m,open:o,onClose:()=>a(!1),onSelect:p,bgMode:l,onBgModeChange:c}),ee.jsxs("main",{className:"main",children:[l==="map"&&u&&ee.jsxs("div",{className:"map-bottom",children:[ee.jsx(pL,{stationId:u.stationId,onStationChange:x=>g({stationId:x}),viewpoint:u.viewpoint,onViewpointChange:x=>g({viewpoint:x}),direction:u.direction,onDirectionChange:x=>g({direction:x}),speed:u.speed,onSpeedChange:x=>g({speed:x}),playing:u.playing,onPlayingChange:x=>g({playing:x}),onResetRoute:_}),ee.jsx("div",{className:"map-pip",ref:M,children:ee.jsx("span",{className:"map-pip-label",children:u.viewpoint==="aerial"?"歩行":"俯瞰"})})]}),ee.jsx("div",{className:"page-wrap",children:_v.map(({id:x,Component:E})=>ee.jsx("section",{id:"page-"+x,className:"page"+(x===n?" active":"")+(x===n&&t?" leave":"")+(x===n&&r?" enter":""),children:ee.jsx(E,{})},x))})]})]})}Ff.createRoot(document.getElementById("root")).render(ee.jsx(Ky.StrictMode,{children:ee.jsx(ML,{})}));
