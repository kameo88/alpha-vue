import{_ as s,o,c as a,a as t,t as i}from"./index-52b76466.js";const n={name:"GuideTemplate",emits:["popupItem","setLayout"],data(){return{layout:{header:"sub",footer:"",title:"Guide"}}},mounted(){this.$emit("setLayout",this.layout)}},c={class:"container"},_={class:"content",id:"content"},l={class:"title_nav"},d=t("div",{class:"page_info"},"page info",-1),r=t("div",{class:"section"},[t("h3",{class:"tit02"},"sub title in section")],-1);function p(u,h,m,f,e,y){return o(),a("div",c,[t("div",_,[t("h2",l,i(e.layout.title),1),d,r])])}const $=s(n,[["render",p]]);export{$ as default};