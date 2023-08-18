"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("vue");const T="__SCROLL_EL_ID__",de=T,q=100;function me(t){return{"--soy-header-height":`${t.headerHeight}px`,"--soy-header-z-index":t.headerZIndex,"--soy-tab-height":`${t.tabHeight}px`,"--soy-tab-z-index":t.tabZIndex,"--soy-sider-width":`${t.siderWidth}px`,"--soy-sider-collapsed-width":`${t.siderCollapsedWidth}px`,"--soy-sider-z-index":t.siderZIndex,"--soy-mobile-sider-z-index":t.mobileSiderZIndex,"--soy-footer-height":`${t.footerHeight}px`,"--soy-footer-z-index":t.footerZIndex}}function he(t){const{mode:e,isMobile:a,maxZIndex:n=q,headerHeight:r,tabHeight:s,siderWidth:i,siderCollapsedWidth:u,footerHeight:m}=t,c=n-3,p=n-5,k=e==="vertical"||a?n-1:n-4,B=a?n-2:0,_=n-5;return me({headerHeight:r,headerZIndex:c,tabHeight:s,tabZIndex:p,siderWidth:i,siderZIndex:k,mobileSiderZIndex:B,siderCollapsedWidth:u,footerHeight:m,footerZIndex:_})}const h={"layout-header":"_layout-header_c343q_3","layout-header-placement":"_layout-header-placement_c343q_4","layout-tab":"_layout-tab_c343q_12","layout-tab-placement":"_layout-tab-placement_c343q_18","layout-sider":"_layout-sider_c343q_22","layout-mobile-sider":"_layout-mobile-sider_c343q_27","layout-mobile-sider-mask":"_layout-mobile-sider-mask_c343q_31","layout-sider_collapsed":"_layout-sider_collapsed_c343q_35","layout-footer":"_layout-footer_c343q_40","layout-footer-placement":"_layout-footer-placement_c343q_41","left-gap":"_left-gap_c343q_49","left-gap_collapsed":"_left-gap_collapsed_c343q_53","sider-padding-top":"_sider-padding-top_c343q_57","sider-padding-bottom":"_sider-padding-bottom_c343q_61"},be=["id"],fe=["id"],te=o.defineComponent({name:"AdminLayout",__name:"index",props:{mode:{default:"vertical"},isMobile:{type:Boolean},scrollMode:{default:"content"},scrollElId:{default:T},scrollElClass:{},scrollWrapperClass:{},commonClass:{default:"transition-all-300"},fixedTop:{type:Boolean,default:!0},maxZIndex:{default:q},headerVisible:{type:Boolean,default:!0},headerClass:{},headerHeight:{default:56},tabVisible:{type:Boolean,default:!0},tabClass:{},tabHeight:{default:48},siderVisible:{type:Boolean,default:!0},siderClass:{},mobileSiderClass:{},siderCollapse:{type:Boolean,default:!1},siderWidth:{default:220},siderCollapsedWidth:{default:64},contentClass:{},fullContent:{type:Boolean},footerVisible:{type:Boolean,default:!0},fixedFooter:{type:Boolean},footerClass:{},footerHeight:{default:48},rightFooter:{type:Boolean,default:!1}},emits:["click-mobile-sider-mask"],setup(t,{emit:e}){const a=t,n=o.useSlots(),r=o.computed(()=>he(a)),s=o.computed(()=>!!n.header&&a.headerVisible),i=o.computed(()=>!!n.tab&&a.tabVisible),u=o.computed(()=>!a.isMobile&&!!n.sider&&a.siderVisible),m=o.computed(()=>a.isMobile&&!!n.sider&&a.siderVisible),c=o.computed(()=>!!n.footer&&a.footerVisible),p=o.computed(()=>a.scrollMode==="wrapper"),k=o.computed(()=>a.scrollMode==="content"),B=o.computed(()=>a.mode==="vertical"),_=o.computed(()=>a.mode==="horizontal"),C=o.computed(()=>a.fixedTop||_.value&&p.value),N=o.computed(()=>!a.fullContent&&u.value?a.siderCollapse?h["left-gap_collapsed"]:h["left-gap"]:""),Z=o.computed(()=>B.value?N.value:""),P=o.computed(()=>{const l=B.value,F=_.value&&p.value&&!a.fixedFooter,ce=!!(_.value&&a.rightFooter);return l||F||ce?N.value:""}),ie=o.computed(()=>{let l="";return s.value&&!Z.value&&(l+=h["sider-padding-top"]),c.value&&!P.value&&(l+=` ${h["sider-padding-bottom"]}`),l});function ue(){e("click-mobile-sider-mask")}return(l,F)=>(o.openBlock(),o.createElementBlock("div",{class:o.normalizeClass(["soybeanjs-qyp971",l.commonClass]),style:o.normalizeStyle(r.value)},[o.createElementVNode("div",{id:p.value?l.scrollElId:void 0,class:o.normalizeClass(["soybeanjs-jpgwa8",l.commonClass,l.scrollWrapperClass,{"soybeanjs-n12do3":p.value}])},[s.value?(o.openBlock(),o.createElementBlock(o.Fragment,{key:0},[o.withDirectives(o.createElementVNode("header",{class:o.normalizeClass([o.unref(h)["layout-header"],"soybeanjs-gpr0x9",l.commonClass,l.headerClass,Z.value,{"soybeanjs-ihf5pz":C.value}])},[o.renderSlot(l.$slots,"header")],2),[[o.vShow,!l.fullContent]]),o.withDirectives(o.createElementVNode("div",{class:o.normalizeClass([o.unref(h)["layout-header-placement"],"soybeanjs-hg8qlw"])},null,2),[[o.vShow,!l.fullContent&&C.value]])],64)):o.createCommentVNode("",!0),i.value?(o.openBlock(),o.createElementBlock(o.Fragment,{key:1},[o.withDirectives(o.createElementVNode("div",{class:o.normalizeClass([o.unref(h)["layout-tab"],"soybeanjs-gpr0x9",l.commonClass,l.tabClass,{"top-0!":!s.value},N.value,{"soybeanjs-elvq0l":C.value}])},[o.renderSlot(l.$slots,"tab")],2),[[o.vShow,!l.fullContent]]),o.withDirectives(o.createElementVNode("div",{class:o.normalizeClass([o.unref(h)["layout-tab-placement"],"soybeanjs-hg8qlw"])},null,2),[[o.vShow,!l.fullContent&&C.value]])],64)):o.createCommentVNode("",!0),u.value?o.withDirectives((o.openBlock(),o.createElementBlock("aside",{key:2,class:o.normalizeClass(["soybeanjs-sbowzg",l.commonClass,l.siderClass,ie.value,l.siderCollapse?o.unref(h)["layout-sider_collapsed"]:o.unref(h)["layout-sider"]])},[o.renderSlot(l.$slots,"sider")],2)),[[o.vShow,!l.fullContent]]):o.createCommentVNode("",!0),m.value?(o.openBlock(),o.createElementBlock(o.Fragment,{key:3},[o.createElementVNode("aside",{class:o.normalizeClass(["soybeanjs-lor397",l.commonClass,l.mobileSiderClass,o.unref(h)["layout-mobile-sider"],l.siderCollapse?"overflow-hidden":o.unref(h)["layout-sider"]])},[o.renderSlot(l.$slots,"sider")],2),o.withDirectives(o.createElementVNode("div",{class:o.normalizeClass(["soybeanjs-4ibers",o.unref(h)["layout-mobile-sider-mask"]]),onClick:ue},null,2),[[o.vShow,!l.siderCollapse]])],64)):o.createCommentVNode("",!0),o.createElementVNode("main",{id:k.value?l.scrollElId:void 0,class:o.normalizeClass(["soybeanjs-fg4g4j",l.commonClass,l.contentClass,N.value,{"soybeanjs-n12do3":k.value}])},[o.renderSlot(l.$slots,"default")],10,fe),c.value?(o.openBlock(),o.createElementBlock(o.Fragment,{key:4},[o.withDirectives(o.createElementVNode("footer",{class:o.normalizeClass([o.unref(h)["layout-footer"],"soybeanjs-gpr0x9",l.commonClass,l.footerClass,P.value,{"soybeanjs-muaizb":l.fixedFooter}])},[o.renderSlot(l.$slots,"footer")],2),[[o.vShow,!l.fullContent]]),o.withDirectives(o.createElementVNode("div",{class:o.normalizeClass([o.unref(h)["layout-footer-placement"],"soybeanjs-hg8qlw"])},null,2),[[o.vShow,!l.fullContent&&l.fixedFooter]])],64)):o.createCommentVNode("",!0)],10,be)],6))}});var pe={grad:.9,turn:360,rad:360/(2*Math.PI)},g=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},d=function(t,e,a){return e===void 0&&(e=0),a===void 0&&(a=Math.pow(10,e)),Math.round(a*t)/a+0},f=function(t,e,a){return e===void 0&&(e=0),a===void 0&&(a=1),t>a?a:t>e?t:e},oe=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},W=function(t){return{r:f(t.r,0,255),g:f(t.g,0,255),b:f(t.b,0,255),a:f(t.a)}},x=function(t){return{r:d(t.r),g:d(t.g),b:d(t.b),a:d(t.a,3)}},ye=/^#([0-9a-f]{3,8})$/i,S=function(t){var e=t.toString(16);return e.length<2?"0"+e:e},ae=function(t){var e=t.r,a=t.g,n=t.b,r=t.a,s=Math.max(e,a,n),i=s-Math.min(e,a,n),u=i?s===e?(a-n)/i:s===a?2+(n-e)/i:4+(e-a)/i:0;return{h:60*(u<0?u+6:u),s:s?i/s*100:0,v:s/255*100,a:r}},ne=function(t){var e=t.h,a=t.s,n=t.v,r=t.a;e=e/360*6,a/=100,n/=100;var s=Math.floor(e),i=n*(1-a),u=n*(1-(e-s)*a),m=n*(1-(1-e+s)*a),c=s%6;return{r:255*[n,u,i,i,m,n][c],g:255*[m,n,n,u,i,i][c],b:255*[i,i,m,n,n,u][c],a:r}},G=function(t){return{h:oe(t.h),s:f(t.s,0,100),l:f(t.l,0,100),a:f(t.a)}},U=function(t){return{h:d(t.h),s:d(t.s),l:d(t.l),a:d(t.a,3)}},X=function(t){return ne((a=(e=t).s,{h:e.h,s:(a*=((n=e.l)<50?n:100-n)/100)>0?2*a/(n+a)*100:0,v:n+a,a:e.a}));var e,a,n},$=function(t){return{h:(e=ae(t)).h,s:(r=(200-(a=e.s))*(n=e.v)/100)>0&&r<200?a*n/100/(r<=100?r:200-r)*100:0,l:r/2,a:e.a};var e,a,n,r},ve=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ge=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,_e=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ce=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,L={string:[[function(t){var e=ye.exec(t);return e?(t=e[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?d(parseInt(t[3]+t[3],16)/255,2):1}:t.length===6||t.length===8?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:t.length===8?d(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var e=_e.exec(t)||Ce.exec(t);return e?e[2]!==e[4]||e[4]!==e[6]?null:W({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(t){var e=ve.exec(t)||ge.exec(t);if(!e)return null;var a,n,r=G({h:(a=e[1],n=e[2],n===void 0&&(n="deg"),Number(a)*(pe[n]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return X(r)},"hsl"]],object:[[function(t){var e=t.r,a=t.g,n=t.b,r=t.a,s=r===void 0?1:r;return g(e)&&g(a)&&g(n)?W({r:Number(e),g:Number(a),b:Number(n),a:Number(s)}):null},"rgb"],[function(t){var e=t.h,a=t.s,n=t.l,r=t.a,s=r===void 0?1:r;if(!g(e)||!g(a)||!g(n))return null;var i=G({h:Number(e),s:Number(a),l:Number(n),a:Number(s)});return X(i)},"hsl"],[function(t){var e=t.h,a=t.s,n=t.v,r=t.a,s=r===void 0?1:r;if(!g(e)||!g(a)||!g(n))return null;var i=function(u){return{h:oe(u.h),s:f(u.s,0,100),v:f(u.v,0,100),a:f(u.a)}}({h:Number(e),s:Number(a),v:Number(n),a:Number(s)});return ne(i)},"hsv"]]},Y=function(t,e){for(var a=0;a<e.length;a++){var n=e[a][0](t);if(n)return[n,e[a][1]]}return[null,void 0]},ke=function(t){return typeof t=="string"?Y(t.trim(),L.string):typeof t=="object"&&t!==null?Y(t,L.object):[null,void 0]},M=function(t,e){var a=$(t);return{h:a.h,s:f(a.s+100*e,0,100),l:a.l,a:a.a}},E=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},J=function(t,e){var a=$(t);return{h:a.h,s:a.s,l:f(a.l+100*e,0,100),a:a.a}},H=function(){function t(e){this.parsed=ke(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return this.parsed!==null},t.prototype.brightness=function(){return d(E(this.rgba),2)},t.prototype.isDark=function(){return E(this.rgba)<.5},t.prototype.isLight=function(){return E(this.rgba)>=.5},t.prototype.toHex=function(){return e=x(this.rgba),a=e.r,n=e.g,r=e.b,i=(s=e.a)<1?S(d(255*s)):"","#"+S(a)+S(n)+S(r)+i;var e,a,n,r,s,i},t.prototype.toRgb=function(){return x(this.rgba)},t.prototype.toRgbString=function(){return e=x(this.rgba),a=e.r,n=e.g,r=e.b,(s=e.a)<1?"rgba("+a+", "+n+", "+r+", "+s+")":"rgb("+a+", "+n+", "+r+")";var e,a,n,r,s},t.prototype.toHsl=function(){return U($(this.rgba))},t.prototype.toHslString=function(){return e=U($(this.rgba)),a=e.h,n=e.s,r=e.l,(s=e.a)<1?"hsla("+a+", "+n+"%, "+r+"%, "+s+")":"hsl("+a+", "+n+"%, "+r+"%)";var e,a,n,r,s},t.prototype.toHsv=function(){return e=ae(this.rgba),{h:d(e.h),s:d(e.s),v:d(e.v),a:d(e.a,3)};var e},t.prototype.invert=function(){return b({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},t.prototype.saturate=function(e){return e===void 0&&(e=.1),b(M(this.rgba,e))},t.prototype.desaturate=function(e){return e===void 0&&(e=.1),b(M(this.rgba,-e))},t.prototype.grayscale=function(){return b(M(this.rgba,-1))},t.prototype.lighten=function(e){return e===void 0&&(e=.1),b(J(this.rgba,e))},t.prototype.darken=function(e){return e===void 0&&(e=.1),b(J(this.rgba,-e))},t.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},t.prototype.alpha=function(e){return typeof e=="number"?b({r:(a=this.rgba).r,g:a.g,b:a.b,a:e}):d(this.rgba.a,3);var a},t.prototype.hue=function(e){var a=$(this.rgba);return typeof e=="number"?b({h:e,s:a.s,l:a.l,a:a.a}):d(a.h)},t.prototype.isEqual=function(e){return this.toHex()===b(e).toHex()},t}(),b=function(t){return t instanceof H?t:new H(t)},K=[],Be=function(t){t.forEach(function(e){K.indexOf(e)<0&&(e(H,L),K.push(e))})},v=function(t,e,a){return e===void 0&&(e=0),a===void 0&&(a=1),t>a?a:t>e?t:e},I=function(t){var e=t/255;return e<.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)},j=function(t){return 255*(t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t)},O=96.422,D=100,R=82.521,we=function(t){var e,a,n={x:.9555766*(e=t).x+-.0230393*e.y+.0631636*e.z,y:-.0282895*e.x+1.0099416*e.y+.0210077*e.z,z:.0122982*e.x+-.020483*e.y+1.3299098*e.z};return a={r:j(.032404542*n.x-.015371385*n.y-.004985314*n.z),g:j(-.00969266*n.x+.018760108*n.y+41556e-8*n.z),b:j(556434e-9*n.x-.002040259*n.y+.010572252*n.z),a:t.a},{r:v(a.r,0,255),g:v(a.g,0,255),b:v(a.b,0,255),a:v(a.a)}},$e=function(t){var e=I(t.r),a=I(t.g),n=I(t.b);return function(r){return{x:v(r.x,0,O),y:v(r.y,0,D),z:v(r.z,0,R),a:v(r.a)}}(function(r){return{x:1.0478112*r.x+.0228866*r.y+-.050127*r.z,y:.0295424*r.x+.9904844*r.y+-.0170491*r.z,z:-.0092345*r.x+.0150436*r.y+.7521316*r.z,a:r.a}}({x:100*(.4124564*e+.3575761*a+.1804375*n),y:100*(.2126729*e+.7151522*a+.072175*n),z:100*(.0193339*e+.119192*a+.9503041*n),a:t.a}))},z=216/24389,w=24389/27,Q=function(t){var e=$e(t),a=e.x/O,n=e.y/D,r=e.z/R;return a=a>z?Math.cbrt(a):(w*a+16)/116,{l:116*(n=n>z?Math.cbrt(n):(w*n+16)/116)-16,a:500*(a-n),b:200*(n-(r=r>z?Math.cbrt(r):(w*r+16)/116)),alpha:e.a}},ze=function(t,e,a){var n,r=Q(t),s=Q(e);return function(i){var u=(i.l+16)/116,m=i.a/500+u,c=u-i.b/200;return we({x:(Math.pow(m,3)>z?Math.pow(m,3):(116*m-16)/w)*O,y:(i.l>8?Math.pow((i.l+16)/116,3):i.l/w)*D,z:(Math.pow(c,3)>z?Math.pow(c,3):(116*c-16)/w)*R,a:i.alpha})}({l:v((n={l:r.l*(1-a)+s.l*a,a:r.a*(1-a)+s.a*a,b:r.b*(1-a)+s.b*a,alpha:r.alpha*(1-a)+s.alpha*a}).l,0,400),a:n.a,b:n.b,alpha:v(n.alpha)})};function Ne(t){function e(a,n,r){r===void 0&&(r=5);for(var s=[],i=1/(r-1),u=0;u<=r-1;u++)s.push(a.mix(n,i*u));return s}t.prototype.mix=function(a,n){n===void 0&&(n=.5);var r=a instanceof t?a:new t(a),s=ze(this.toRgb(),r.toRgb(),n);return new t(s)},t.prototype.tints=function(a){return e(this,"#fff",a)},t.prototype.shades=function(a){return e(this,"#000",a)},t.prototype.tones=function(a){return e(this,"#808080",a)}}Be([Ne]);function re(t,e){t.component(e.name,e)}function V(t,e){return b(t).alpha(e).toHex()}function ee(t,e,a="#ffffff"){const n=V(t,e),{r,g:s,b:i}=b(n).toRgb(),{r:u,g:m,b:c}=b(a).toRgb();function p(B,_,C){return _+(B-_)*C}const k={r:p(r,u,e),g:p(s,m,e),b:p(i,c,e)};return b(k).toHex()}te.install=re;const Se="#1890ff";function Ve(t){return{"--soy-primary-color":t.primaryColor,"--soy-primary-color1":t.primaryColor1,"--soy-primary-color2":t.primaryColor2,"--soy-primary-color-opacity1":t.primaryColorOpacity1,"--soy-primary-color-opacity2":t.primaryColorOpacity2,"--soy-primary-color-opacity3":t.primaryColorOpacity3}}function xe(t){const e={primaryColor:t,primaryColor1:ee(t,.1,"#ffffff"),primaryColor2:ee(t,.3,"#000000"),primaryColorOpacity1:V(t,.1),primaryColorOpacity2:V(t,.15),primaryColorOpacity3:V(t,.3)};return Ve(e)}const Me={style:{width:"100%",height:"100%"}},Ee=o.createStaticVNode('<defs><symbol id="geometry-left" viewBox="0 0 214 36"><path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z"></path></symbol><symbol id="geometry-right" viewBox="0 0 214 36"><use xlink:href="#geometry-left"></use></symbol><clipPath><rect width="100%" height="100%" x="0"></rect></clipPath></defs><svg width="51%" height="100%"><use xlink:href="#geometry-left" width="214" height="36" fill="currentColor"></use></svg><g transform="scale(-1, 1)"><svg width="51%" height="100%" x="-100%" y="0"><use xlink:href="#geometry-right" width="214" height="36" fill="currentColor"></use></svg></g>',3),Ie=[Ee],je=o.defineComponent({name:"ChromeTabBg",__name:"chrome-tab-bg",setup(t){return(e,a)=>(o.openBlock(),o.createElementBlock("svg",Me,Ie))}}),y={"button-tab":"_button-tab_15sm7_3","button-tab_dark":"_button-tab_dark_15sm7_7","button-tab_active":"_button-tab_active_15sm7_16","button-tab_active_dark":"_button-tab_active_dark_15sm7_22","icon-close":"_icon-close_15sm7_26","chrome-tab":"_chrome-tab_15sm7_36","chrome-tab_active":"_chrome-tab_active_15sm7_40","chrome-tab__bg":"_chrome-tab__bg_15sm7_45","chrome-tab_active_dark":"_chrome-tab_active_dark_15sm7_53","chrome-tab_dark":"_chrome-tab_dark_15sm7_65","chrome-tab-divider":"_chrome-tab-divider_15sm7_87"},se=o.defineComponent({name:"ChromeTab",__name:"chrome-tab",props:{darkMode:{type:Boolean},mode:{},commonClass:{},buttonClass:{},chromeClass:{},active:{type:Boolean},activeColor:{},closable:{type:Boolean}},setup(t){return(e,a)=>(o.openBlock(),o.createElementBlock("div",{class:o.normalizeClass(["soybeanjs-yxkfns",o.unref(y)["chrome-tab"],{[o.unref(y)["chrome-tab_dark"]]:e.darkMode},{[o.unref(y)["chrome-tab_active"]]:e.active},{[o.unref(y)["chrome-tab_active_dark"]]:e.active&&e.darkMode}])},[o.createElementVNode("div",{class:o.normalizeClass(["soybeanjs-pr5008",o.unref(y)["chrome-tab__bg"]])},[o.createVNode(je)],2),o.renderSlot(e.$slots,"prefix"),o.renderSlot(e.$slots,"default"),o.renderSlot(e.$slots,"suffix"),o.createElementVNode("div",{class:o.normalizeClass(["soybeanjs-714u3q",o.unref(y)["chrome-tab-divider"]])},null,2)],2))}}),le=o.defineComponent({name:"ButtonTab",__name:"button-tab",props:{darkMode:{type:Boolean},mode:{},commonClass:{},buttonClass:{},chromeClass:{},active:{type:Boolean},activeColor:{},closable:{type:Boolean}},setup(t){return(e,a)=>(o.openBlock(),o.createElementBlock("div",{class:o.normalizeClass(["soybeanjs-x463fz",o.unref(y)["button-tab"],{[o.unref(y)["button-tab_dark"]]:e.darkMode},{[o.unref(y)["button-tab_active"]]:e.active},{[o.unref(y)["button-tab_active_dark"]]:e.active&&e.darkMode}])},[o.renderSlot(e.$slots,"prefix"),o.renderSlot(e.$slots,"default"),o.renderSlot(e.$slots,"suffix")],2))}}),Le=["onClick"],He=o.createElementVNode("svg",{width:"1em",height:"1em",viewBox:"0 0 1024 1024"},[o.createElementVNode("path",{fill:"currentColor",d:"m563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8L295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512L196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1l216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"})],-1),Te=[He],qe=o.defineComponent({name:"IconClose",__name:"icon-close",emits:["click"],setup(t,{emit:e}){function a(){e("click")}return(n,r)=>(o.openBlock(),o.createElementBlock("div",{class:"soybeanjs-bj4ztj",onClick:o.withModifiers(a,["stop"])},Te,8,Le))}}),A=o.defineComponent({name:"PageTab",__name:"index",props:{darkMode:{type:Boolean},mode:{default:"chrome"},commonClass:{default:"transition-all-300"},buttonClass:{},chromeClass:{},active:{type:Boolean},activeColor:{default:Se},closable:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:e}){const a=t,n=o.computed(()=>{const{mode:u,chromeClass:m,buttonClass:c}=a;return{chrome:{component:se,class:m},button:{component:le,class:c}}[u]}),r=o.computed(()=>xe(a.activeColor)),s=o.computed(()=>{const{chromeClass:u,buttonClass:m,...c}=a;return c});function i(){e("close")}return(u,m)=>(o.openBlock(),o.createBlock(o.resolveDynamicComponent(n.value.component),o.mergeProps({class:n.value.class,style:r.value},s.value),{prefix:o.withCtx(()=>[o.renderSlot(u.$slots,"prefix")]),suffix:o.withCtx(()=>[o.renderSlot(u.$slots,"suffix",{},()=>[u.closable?(o.openBlock(),o.createBlock(qe,{key:0,class:o.normalizeClass([o.unref(y)["icon-close"]]),onClick:i},null,8,["class"])):o.createCommentVNode("",!0)])]),default:o.withCtx(()=>[o.renderSlot(u.$slots,"default")]),_:3},16,["class","style"]))}});A.install=re;const Oe=A,De=le,Re=se;exports.AdminLayout=te;exports.AdminTab=Oe;exports.ButtonTab=De;exports.ChromeTab=Re;exports.LAYOUT_MAX_Z_INDEX=q;exports.LAYOUT_SCROLL_EL_ID=T;exports.PageTab=A;exports.SCROLL_EL_ID=de;
