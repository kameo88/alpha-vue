import{p as j,y as G,j as v,b as t,B as X,D as le,I as K,J as Q,K as ue,L as fe,u as ve,M as me,m as L,l as _e,N as be,F as U,H as q,A as he,O as ye,P as ge,S as xe,G as Ce,Q as pe,C as Ve,R as Ie,U as te,V as ke,_ as Pe,o as Fe,c as Se,a as l}from"./index-a60effe2.js";import{a as Be,b as $e}from"./index-fc8b8d0b.js";import{a as Y,b as W,m as Te,c as we,d as Re,u as Le}from"./VIcon-0bc779d6.js";import{m as Ae,M as Ee,a as Oe,u as De,L as Me,n as Ne,b as Ue,s as qe,f as je}from"./forwardRefs-a47df4ca.js";import{b as Ge,m as We,u as ae,c as ze,a as He,V as ne}from"./VLabel-780bd938.js";const Je=j({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Y(),...Ae({transition:{component:Be}})},"VCounter"),Ke=G()({name:"VCounter",functional:!0,props:Je(),setup(e,o){let{slots:a}=o;const s=v(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return W(()=>t(Ee,{transition:e.transition},{default:()=>[X(t("div",{class:["v-counter",e.class],style:e.style},[a.default?a.default({counter:s.value,max:e.max,value:e.value}):s.value]),[[le,e.active]])]})),{}}});const Qe=j({floating:Boolean,...Y()},"VFieldLabel"),N=G()({name:"VFieldLabel",props:Qe(),setup(e,o){let{slots:a}=o;return W(()=>t(Ge,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),Xe=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],ie=j({appendInnerIcon:K,bgColor:String,clearable:Boolean,clearIcon:{type:K,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:K,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Xe.includes(e)},"onClick:clear":Q(),"onClick:appendInner":Q(),"onClick:prependInner":Q(),...Y(),...Oe(),...Te(),...ue()},"VField"),oe=G()({name:"VField",inheritAttrs:!1,props:{id:String,...We(),...ie()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:a,emit:s,slots:n}=o;const{themeClasses:d}=fe(e),{loaderClasses:h}=De(e),{focusClasses:F,isFocused:S,focus:p,blur:V}=ae(e),{InputIcon:I}=ze(e),{roundedClasses:A}=we(e),{rtlClasses:E}=ve(),P=v(()=>e.dirty||e.active),y=v(()=>!e.singleLine&&!!(e.label||n.label)),z=me(),c=v(()=>e.id||`input-${z}`),H=v(()=>`${c.value}-messages`),O=L(),B=L(),D=L(),i=v(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:m,backgroundColorStyles:_}=Re(_e(e,"bgColor")),{textColorClasses:g,textColorStyles:Z}=Le(v(()=>e.error||e.disabled?void 0:P.value&&S.value?e.color:e.baseColor));be(P,u=>{if(y.value){const r=O.value.$el,x=B.value.$el;requestAnimationFrame(()=>{const C=Ne(r),f=x.getBoundingClientRect(),T=f.x-C.x,w=f.y-C.y-(C.height/2-f.height/2),k=f.width/.75,R=Math.abs(k-C.width)>1?{maxWidth:he(k)}:void 0,M=getComputedStyle(r),ee=getComputedStyle(x),re=parseFloat(M.transitionDuration)*1e3||150,de=parseFloat(ee.getPropertyValue("--v-field-label-scale")),ce=ee.getPropertyValue("color");r.style.visibility="visible",x.style.visibility="hidden",Ue(r,{transform:`translate(${T}px, ${w}px) scale(${de})`,color:ce,...R},{duration:re,easing:qe,direction:u?"normal":"reverse"}).finished.then(()=>{r.style.removeProperty("visibility"),x.style.removeProperty("visibility")})})}},{flush:"post"});const $=v(()=>({isActive:P,isFocused:S,controlRef:D,blur:V,focus:p}));function J(u){u.target!==document.activeElement&&u.preventDefault()}return W(()=>{var T,w,k;const u=e.variant==="outlined",r=n["prepend-inner"]||e.prependInnerIcon,x=!!(e.clearable||n.clear),C=!!(n["append-inner"]||e.appendInnerIcon||x),f=n.label?n.label({...$.value,label:e.label,props:{for:c.value}}):e.label;return t("div",q({class:["v-field",{"v-field--active":P.value,"v-field--appended":C,"v-field--center-affix":e.centerAffix??!i.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":r,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!f,[`v-field--variant-${e.variant}`]:!0},d.value,m.value,F.value,h.value,A.value,E.value,e.class],style:[_.value,Z.value,e.style],onClick:J},a),[t("div",{class:"v-field__overlay"},null),t(Me,{name:"v-field",active:!!e.loading,color:e.error?"error":e.color},{default:n.loader}),r&&t("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&t(I,{key:"prepend-icon",name:"prependInner"},null),(T=n["prepend-inner"])==null?void 0:T.call(n,$.value)]),t("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&y.value&&t(N,{key:"floating-label",ref:B,class:[g.value],floating:!0,for:c.value},{default:()=>[f]}),t(N,{ref:O,for:c.value},{default:()=>[f]}),(w=n.default)==null?void 0:w.call(n,{...$.value,props:{id:c.value,class:"v-field__input","aria-describedby":H.value},focus:p,blur:V})]),x&&t($e,{key:"clear"},{default:()=>[X(t("div",{class:"v-field__clearable",onMousedown:R=>{R.preventDefault(),R.stopPropagation()}},[n.clear?n.clear():t(I,{name:"clear"},null)]),[[le,e.dirty]])]}),C&&t("div",{key:"append",class:"v-field__append-inner"},[(k=n["append-inner"])==null?void 0:k.call(n,$.value),e.appendInnerIcon&&t(I,{key:"append-icon",name:"appendInner"},null)]),t("div",{class:["v-field__outline",g.value]},[u&&t(U,null,[t("div",{class:"v-field__outline__start"},null),y.value&&t("div",{class:"v-field__outline__notch"},[t(N,{ref:B,floating:!0,for:c.value},{default:()=>[f]})]),t("div",{class:"v-field__outline__end"},null)]),i.value&&y.value&&t(N,{ref:B,floating:!0,for:c.value},{default:()=>[f]})])])}),{controlRef:D}}});function Ye(e){const o=Object.keys(oe.props).filter(a=>!ye(a)&&a!=="class"&&a!=="style");return ge(e,o)}function Ze(e,o){if(!xe)return;const a=o.modifiers||{},s=o.value,{handler:n,options:d}=typeof s=="object"?s:{handler:s,options:{}},h=new IntersectionObserver(function(){var I;let F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],S=arguments.length>1?arguments[1]:void 0;const p=(I=e._observe)==null?void 0:I[o.instance.$.uid];if(!p)return;const V=F.some(A=>A.isIntersecting);n&&(!a.quiet||p.init)&&(!a.once||V||p.init)&&n(V,F,S),V&&a.once?se(e,o):p.init=!0},d);e._observe=Object(e._observe),e._observe[o.instance.$.uid]={init:!1,observer:h},h.observe(e)}function se(e,o){var s;const a=(s=e._observe)==null?void 0:s[o.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[o.instance.$.uid])}const et={mounted:Ze,unmounted:se},tt=et,nt=["color","file","time","date","datetime-local","week","month"],lt=j({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},modelModifiers:Object,...He(),...ie()},"VTextField"),b=G()({name:"VTextField",directives:{Intersect:tt},inheritAttrs:!1,props:lt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:a,emit:s,slots:n}=o;const d=Ce(e,"modelValue"),{isFocused:h,focus:F,blur:S}=ae(e),p=v(()=>typeof e.counterValue=="function"?e.counterValue(d.value):(d.value??"").toString().length),V=v(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),I=v(()=>["plain","underlined"].includes(e.variant));function A(i,m){var _,g;!e.autofocus||!i||(g=(_=m[0].target)==null?void 0:_.focus)==null||g.call(_)}const E=L(),P=L(),y=L(),z=v(()=>nt.includes(e.type)||e.persistentPlaceholder||h.value||e.active);function c(){var i;y.value!==document.activeElement&&((i=y.value)==null||i.focus()),h.value||F()}function H(i){s("mousedown:control",i),i.target!==y.value&&(c(),i.preventDefault())}function O(i){c(),s("click:control",i)}function B(i){i.stopPropagation(),c(),te(()=>{d.value=null,ke(e["onClick:clear"],i)})}function D(i){var _;const m=i.target;if(d.value=m.value,(_=e.modelModifiers)!=null&&_.trim&&["text","search","password","tel","url"].includes(e.type)){const g=[m.selectionStart,m.selectionEnd];te(()=>{m.selectionStart=g[0],m.selectionEnd=g[1]})}}return W(()=>{const i=!!(n.counter||e.counter||e.counterValue),m=!!(i||n.details),[_,g]=pe(a),[{modelValue:Z,...$}]=ne.filterProps(e),[J]=Ye(e);return t(ne,q({ref:E,modelValue:d.value,"onUpdate:modelValue":u=>d.value=u,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--plain-underlined":["plain","underlined"].includes(e.variant)},e.class],style:e.style},_,$,{centerAffix:!I.value,focused:h.value}),{...n,default:u=>{let{id:r,isDisabled:x,isDirty:C,isReadonly:f,isValid:T}=u;return t(oe,q({ref:P,onMousedown:H,onClick:O,"onClick:clear":B,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},J,{id:r.value,active:z.value||C.value,dirty:C.value||e.dirty,disabled:x.value,focused:h.value,error:T.value===!1}),{...n,default:w=>{let{props:{class:k,...R}}=w;const M=X(t("input",q({ref:y,value:d.value,onInput:D,autofocus:e.autofocus,readonly:f.value,disabled:x.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:c,onBlur:S},R,g),null),[[Ve("intersect"),{handler:A},null,{once:!0}]]);return t(U,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),n.default?t("div",{class:k,"data-no-activator":""},[n.default(),M]):Ie(M,{class:k}),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:m?u=>{var r;return t(U,null,[(r=n.details)==null?void 0:r.call(n,u),i&&t(U,null,[t("span",null,null),t(Ke,{active:e.persistentCounter||h.value,value:p.value,max:V.value},n.counter)])])}:void 0})}),je({},E,P,y)}}),at={name:"GuideTemplate",data:()=>({rules:{required:e=>!!e||"Field is required"}})},it={class:"container"},ot={class:"content",id:"content"},st=l("h2",{class:"title_nav"},"Guide",-1),rt=l("div",{class:"page_info"},"Form",-1),dt={class:"section"},ct=l("h3",{class:"tit02"},"form_wrap",-1),ut={class:"form_wrap"},ft={class:"form_group"},vt=l("div",{class:"form_label"},"수령인",-1),mt={class:"form_item"},_t={class:"form_item"},bt={class:"form_group"},ht={class:"form_item"},yt={class:"form_group"},gt=l("div",{class:"form_label"},"휴대폰 번호",-1),xt={class:"form_item"},Ct=l("button",{type:"button",class:"btn md c03"},"인증번호 받기",-1),pt={class:"form_item auth_num"},Vt=l("div",{class:"timer"},[l("span",null,"0:01"),l("button",{type:"button"},"시간연장하기")],-1),It={class:"section"},kt=l("h3",{class:"tit02"},"input",-1),Pt={class:"form_group"},Ft=l("div",{class:"form_label"},"수령인",-1),St={class:"form_item"};function Bt(e,o,a,s,n,d){return Fe(),Se("div",it,[l("div",ot,[st,rt,l("div",dt,[ct,l("div",ut,[l("div",ft,[vt,l("div",mt,[t(b,{placeholder:"이름 입력",variant:"outlined",required:"","hide-details":"auto",clearable:""})]),l("div",_t,[t(b,{type:"password",placeholder:"비밀번호 입력",variant:"outlined","hide-details":"auto",clearable:""})])]),l("div",bt,[l("div",ht,[t(b,{placeholder:"검색어를 입력해주세요","append-inner-icon":"mdi-magnify",variant:"outlined","hide-details":"auto",clearable:""})])]),l("div",yt,[gt,l("div",xt,[t(b,{placeholder:"'-'없이 숫자만 입력",variant:"outlined","hide-details":"auto",clearable:""}),Ct]),l("div",pt,[t(b,{variant:"outlined","hide-details":"auto",clearable:""}),Vt])])])]),l("div",It,[kt,l("div",Pt,[Ft,l("div",St,[t(b,{placeholder:"고객명",variant:"outlined",clearable:""})])]),t(b,{placeholder:"고객명 disabled",variant:"outlined",disabled:""}),t(b,{placeholder:"고객명 readonly",variant:"outlined",readonly:""}),t(b,{prefix:"010-***",placeholder:"전화번호 입력",variant:"outlined"}),t(b,{placeholder:"검색어를 입력해주세요","append-inner-icon":"mdi-magnify",variant:"outlined",clearable:""}),t(b,{rules:[e.rules.required],placeholder:"필수항목",variant:"outlined",clearable:""},null,8,["rules"])])])])}const At=Pe(at,[["render",Bt]]);export{At as default};
