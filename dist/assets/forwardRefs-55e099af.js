import{ar as T,p,Y as $,j as c,m as U,s as Y,S as H,a0 as q,N as G,u as M,K,y as J,G as Q,L as Z,b as f,A as d,T as D,a4 as ee,H as te}from"./index-52b76466.js";import{a as ne,m as re,e as ae,u as se,d as I,c as oe,b as ie}from"./VIcon-18fdc565.js";const F=["top","bottom"],le=["start","end","left","right"];function ue(e,r){let[a,n]=e.split(" ");return n||(n=T(F,a)?"start":T(le,a)?"top":"center"),{side:N(a,r),align:N(n,r)}}function N(e,r){return e==="start"?r?"right":"left":e==="end"?r?"left":"right":e}function ye(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function pe(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function xe(e){return{side:e.align,align:e.side}}function Ce(e){return T(F,e.side)?"y":"x"}class B{constructor(r){let{x:a,y:n,width:s,height:t}=r;this.x=a,this.y=n,this.width=s,this.height=t}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function we(e,r){return{x:{before:Math.max(0,r.left-e.left),after:Math.max(0,e.right-r.right)},y:{before:Math.max(0,r.top-e.top),after:Math.max(0,e.bottom-r.bottom)}}}function Pe(e){const r=e.getBoundingClientRect(),a=getComputedStyle(e),n=a.transform;if(n){let s,t,o,l,i;if(n.startsWith("matrix3d("))s=n.slice(9,-1).split(/, /),t=+s[0],o=+s[5],l=+s[12],i=+s[13];else if(n.startsWith("matrix("))s=n.slice(7,-1).split(/, /),t=+s[0],o=+s[3],l=+s[4],i=+s[5];else return new B(r);const u=a.transformOrigin,g=r.x-l-(1-t)*parseFloat(u),m=r.y-i-(1-o)*parseFloat(u.slice(u.indexOf(" ")+1)),v=t?r.width/t:e.offsetWidth+1,h=o?r.height/o:e.offsetHeight+1;return new B({x:g,y:m,width:v,height:h})}else return new B(r)}function Se(e,r,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let n;try{n=e.animate(r,a)}catch{return{finished:Promise.resolve()}}return typeof n.finished>"u"&&(n.finished=new Promise(s=>{n.onfinish=()=>{s(n)}})),n}const Re="cubic-bezier(0.4, 0, 0.2, 1)",ce=[null,"default","comfortable","compact"],Be=p({density:{type:String,default:"default",validator:e=>ce.includes(e)}},"density");function Oe(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return{densityClasses:c(()=>`${r}--density-${e.density}`)}}function fe(e,r){const a=U(),n=Y(!1);if(H){const s=new IntersectionObserver(t=>{e==null||e(t,s),n.value=!!t.find(o=>o.isIntersecting)},r);q(()=>{s.disconnect()}),G(a,(t,o)=>{o&&(s.unobserve(o),n.value=!1),t&&s.observe(t)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const V={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},de=p({location:String},"location");function ge(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=M();return{locationStyles:c(()=>{if(!e.location)return{};const{side:t,align:o}=ue(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function l(u){return a?a(u):0}const i={};return t!=="center"&&(r?i[V[t]]=`calc(100% - ${l(t)}px)`:i[t]=0),o!=="center"?r?i[V[o]]=`calc(100% - ${l(o)}px)`:i[o]=0:(t==="center"?i.top=i.left="50%":i[{top:"left",bottom:"left",left:"top",right:"top"}[t]]="50%",i.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[t]),i})}}const me=p({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...ne(),...de({location:"top"}),...re(),...ae(),...K()},"VProgressLinear"),ve=J()({name:"VProgressLinear",props:me(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:a}=r;const n=Q(e,"modelValue"),{isRtl:s,rtlClasses:t}=M(),{themeClasses:o}=Z(e),{locationStyles:l}=ge(e),{textColorClasses:i,textColorStyles:u}=se(e,"color"),{backgroundColorClasses:g,backgroundColorStyles:m}=I(c(()=>e.bgColor||e.color)),{backgroundColorClasses:v,backgroundColorStyles:h}=I(e,"color"),{roundedClasses:j}=oe(e),{intersectionRef:C,isIntersecting:A}=fe(),w=c(()=>parseInt(e.max,10)),b=c(()=>parseInt(e.height,10)),P=c(()=>parseFloat(e.bufferValue)/w.value*100),S=c(()=>parseFloat(n.value)/w.value*100),x=c(()=>s.value!==e.reverse),W=c(()=>e.indeterminate?"fade-transition":"slide-x-transition"),L=c(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function X(y){if(!C.value)return;const{left:k,right:z,width:R}=C.value.getBoundingClientRect(),E=x.value?R-y.clientX+(z-R):y.clientX-k;n.value=Math.round(E/R*w.value)}return ie(()=>f(e.tag,{ref:C,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&A.value,"v-progress-linear--reverse":x.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},j.value,o.value,t.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?d(b.value):0,"--v-progress-linear-height":d(b.value),...l.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:S.value,onClick:e.clickable&&X},{default:()=>[e.stream&&f("div",{key:"stream",class:["v-progress-linear__stream",i.value],style:{...u.value,[x.value?"left":"right"]:d(-b.value),borderTop:`${d(b.value/2)} dotted`,opacity:L.value,top:`calc(50% - ${d(b.value/4)})`,width:d(100-P.value,"%"),"--v-progress-linear-stream-to":d(b.value*(x.value?1:-1))}},null),f("div",{class:["v-progress-linear__background",g.value],style:[m.value,{opacity:L.value,width:d(e.stream?P.value:100,"%")}]},null),f(D,{name:W.value},{default:()=>[e.indeterminate?f("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(y=>f("div",{key:y,class:["v-progress-linear__indeterminate",y,v.value],style:h.value},null))]):f("div",{class:["v-progress-linear__determinate",v.value],style:[h.value,{width:d(S.value,"%")}]},null)]}),a.default&&f("div",{class:"v-progress-linear__content"},[a.default({value:S.value,buffer:P.value})])]})),{}}}),_e=p({loading:[Boolean,String]},"loader");function Te(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return{loaderClasses:c(()=>({[`${r}--loading`]:e.loading}))}}function Le(e,r){var n;let{slots:a}=r;return f("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||f(ve,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Ie=p({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Ne=(e,r)=>{let{slots:a}=r;const{transition:n,disabled:s,...t}=e,{component:o=D,...l}=typeof n=="object"?n:{};return ee(o,te(typeof n=="string"?{name:s?"":n}:l,t,{disabled:s}),a)},O=Symbol("Forwarded refs");function _(e,r){let a=e;for(;a;){const n=Reflect.getOwnPropertyDescriptor(a,r);if(n)return n;a=Object.getPrototypeOf(a)}}function Ve(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];return e[O]=a,new Proxy(e,{get(s,t){if(Reflect.has(s,t))return Reflect.get(s,t);if(!(typeof t=="symbol"||t.startsWith("__"))){for(const o of a)if(o.value&&Reflect.has(o.value,t)){const l=Reflect.get(o.value,t);return typeof l=="function"?l.bind(o.value):l}}},has(s,t){if(Reflect.has(s,t))return!0;if(typeof t=="symbol"||t.startsWith("__"))return!1;for(const o of a)if(o.value&&Reflect.has(o.value,t))return!0;return!1},getOwnPropertyDescriptor(s,t){var l;const o=Reflect.getOwnPropertyDescriptor(s,t);if(o)return o;if(!(typeof t=="symbol"||t.startsWith("__"))){for(const i of a){if(!i.value)continue;const u=_(i.value,t)??("_"in i.value?_((l=i.value._)==null?void 0:l.setupState,t):void 0);if(u)return u}for(const i of a){const u=i.value&&i.value[O];if(!u)continue;const g=u.slice();for(;g.length;){const m=g.shift(),v=_(m.value,t);if(v)return v;const h=m.value&&m.value[O];h&&g.push(...h)}}}}})}export{B,Le as L,Ne as M,_e as a,Se as b,Be as c,Oe as d,fe as e,Ve as f,de as g,ge as h,ye as i,pe as j,xe as k,Ce as l,Ie as m,Pe as n,we as o,ue as p,Re as s,Te as u};