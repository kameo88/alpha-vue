import{c as u,_ as r}from"./img_thum-adfc7c14.js";import{_ as h}from"./logo_partner18-8821ed74.js";import{a as b,_ as n}from"./logo_s_partner21-0506cfac.js";import{_ as m}from"./img_card_thum07-06c27a71.js";import{_ as y,r as f,o as g,c as k,a as s,b as _,f as d}from"./index-a60effe2.js";import"./logo_s_partner06-8125a8f4.js";import"./VTooltip-55d5415a.js";import"./VIcon-0bc779d6.js";import"./forwardRefs-a47df4ca.js";import"./lazy-8e8802f2.js";const x="/assets/img_card_thum05-dd1691ad.png",S="/assets/img_card_thum06-a07a2024.png",v="/assets/img_card_thum04-4b119ea9.png",w={name:"GuideSticky",emits:["popupItem","setLayout"],data(){return{layout:{header:"sub",footer:"",title:""},popupItem:["userReviewPop","blogReviewPop"],tooltip:[!1,!1,!1],sticky:{clickEvent:!1,headerH:0,tabH:0,scrollTop:0,stickyActiveSize:0,activeIdx:0,panelRealOffset:[0,0,0,0],panelOffset:[0,0,0,0]}}},methods:{onScroll(){if(this.sticky.scrollTop=Math.round(document.querySelector("html").scrollTop),this.getScrollData(),this.sticky.scrollTop>=this.sticky.stickyActiveSize?(document.querySelector(".scroll_fixed").classList.add("on"),document.querySelector(".scroll_fixed").style.height=`${this.sticky.tabH}px`,document.querySelector(".scroll_tab").style.top=`${this.sticky.headerH}px`):(document.querySelector(".scroll_fixed").classList.remove("on"),document.querySelector(".scroll_fixed").style.height="",document.querySelector(".scroll_tab").style.top=""),this.sticky.scrollTop==this.sticky.panelOffset[this.sticky.activeIdx]&&(this.sticky.clickEvent=!1),this.sticky.clickEvent)return;const l=-10;this.sticky.scrollTop<=this.sticky.panelOffset[1]+l?this.sticky.activeIdx=0:this.sticky.scrollTop<=this.sticky.panelOffset[2]+l?this.sticky.activeIdx=1:this.sticky.scrollTop<=this.sticky.panelOffset[3]+l?this.sticky.activeIdx=2:this.sticky.activeIdx=3,this.tabActive()},tabClick(l){this.sticky.clickEvent=!0;const e=l.target.parentNode;document.querySelectorAll(".scroll_tab > ul > li").forEach((o,a)=>{o==e&&(this.sticky.activeIdx=a)}),this.setScroll()},tabActive(){const l=document.querySelectorAll(".scroll_tab > ul > li"),t=document.querySelectorAll(".scroll_panel");l.forEach((e,c)=>{const o=e.querySelector("button");c==this.sticky.activeIdx?(o.setAttribute("aria-selected",!0),e.classList.add("on"),t[c].setAttribute("aria-expanded",!0)):(o.setAttribute("aria-selected",!1),e.classList.remove("on"),t[c].setAttribute("aria-expanded",!1))})},setScroll(){document.querySelector("html").scrollTo(0,this.sticky.panelOffset[this.sticky.activeIdx]),this.tabActive()},getScrollData(){this.sticky.headerH=document.querySelector("header.header").offsetHeight,this.sticky.tabH=document.querySelector(".scroll_fixed").offsetHeight,this.sticky.panelRealOffset[0]=document.querySelector("#scroll_panel_01").offsetTop,this.sticky.panelRealOffset[1]=document.querySelector("#scroll_panel_02").offsetTop,this.sticky.panelRealOffset[2]=document.querySelector("#scroll_panel_03").offsetTop,this.sticky.panelRealOffset[3]=document.querySelector("#scroll_panel_04").offsetTop,this.sticky.panelRealOffset.forEach((l,t)=>{l=l-this.sticky.headerH-this.sticky.tabH,this.sticky.panelOffset[t]=l}),this.sticky.stickyActiveSize=document.querySelector(".scroll_fixed").offsetTop-this.sticky.headerH}},mounted(){this.$emit("setLayout",this.layout),this.$emit("popupItem",this.popupItem),document.querySelector("html").style.scrollBehavior="smooth",window.addEventListener("scroll",()=>{this.onScroll()}),this.getScrollData()},components:{compCard:u}},C={class:"container"},q={class:"content",id:"content"},I=s("h2",{class:"title_nav"},"Guide",-1),R=s("div",{class:"page_info"},"Sticky",-1),T={class:"section"},A=d('<div class="partner_title"><div class="img"><img src="'+h+'" alt=""></div><strong class="tit">이야기모바일</strong><em class="tex">똑똑한 통신요금의 기준 이야기 알뜰폰</em><a href="javascript:void(0);" class="btn_text">4.5 <span>(56개)</span></a></div>',1),L={class:"scroll_fixed"},O={class:"scroll_tab"},H={role:"tablist"},j={role:"none",class:"on"},E={role:"none"},D={role:"none"},G={role:"none"},P=s("div",{class:"section scroll_panel",role:"tabpanel","aria-expanded":"true",tabindex:"0",id:"scroll_panel_01"},[s("h3",{class:"blind"},"기본정보"),s("div",{class:"partner_info"},[s("dl",null,[s("dt",null,"업무시간"),s("dd",null,"⁠평일 09시~ 18시(점심시간 12~13시 제외)")]),s("dl",null,[s("dt",null,"고객센터"),s("dd",null,"1670-0283")]),s("dl",null,[s("dt",null,"주소"),s("dd",null,"서울시 구로구 디지털로26길 61, 1304호 (구로동, 에이스하이엔드타워 2차)")]),s("dl",null,[s("dt",null,"홈페이지"),s("dd",null,[s("a",{href:"https://www.eyagi.co.kr/shop/index.php",target:"_blank"},"https://www.eyagi.co.kr/shop/index.php")])])])],-1),$={class:"section scroll_panel",role:"tabpanel","aria-expanded":"false",tabindex:"0",id:"scroll_panel_02"},U=s("h3",{class:"tit03"},"리뷰",-1),N={class:"tab_list"},B={role:"tablist"},z={role:"none",class:"on"},V={role:"none"},M={class:"tabpanel_wrap"},F={role:"tabpanel","aria-expanded":"true",tabindex:"0",id:"tab_panel_01_01"},J=s("h3",{class:"blind"},"사용자 리뷰",-1),K={class:"panel_cnt"},Q=d('<div class="review_point"><div class="rp_l"><div class="all"><strong>5.0</strong><span>(56개)</span></div></div><div class="rp_r"><div class="detail"><dl><dt>개통과정</dt><dd><div class="star_box"><div class="star"></div><div class="star_active" style="width:100%;"></div></div><strong>5.0</strong></dd></dl><dl><dt>고객상담</dt><dd><div class="star_box"><div class="star"></div><div class="star_active" style="width:40%;"></div></div><strong>4.0</strong></dd></dl><dl><dt>요금제 만족도</dt><dd><div class="star_box"><div class="star"></div><div class="star_active" style="width:80%;"></div></div><strong>4.0</strong></dd></dl></div></div></div>',1),W={class:"line_list ty02"},X=d('<ul><li><div class="list_con ty02"><div class="cus"><span class="name">김*파</span><div class="star_box"><div class="star"></div><div class="star_active" style="width:40%;"></div></div><span class="score">0.0</span><span class="date">2023.04.11</span></div><span class="tit"> 전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. </span></div></li><li><div class="list_con ty02"><div class="cus"><span class="name">김*파</span><div class="star_box"><div class="star"></div><div class="star_active" style="width:40%;"></div></div><span class="score">0.0</span><span class="date">2023.04.11</span></div><span class="tit"> 전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. </span></div></li><li><div class="list_con ty02"><div class="cus"><span class="name">김*파</span><div class="star_box"><div class="star"></div><div class="star_active" style="width:40%;"></div></div><span class="score">0.0</span><span class="date">2023.04.11</span></div><span class="tit"> 전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. </span></div></li></ul>',1),Y={class:"btn_group"},Z={role:"tabpanel","aria-expanded":"false",tabindex:"0",id:"tab_panel_01_02"},ss=s("h3",{class:"blind"},"블로그 리뷰",-1),ts={class:"panel_cnt"},ls={class:"line_list ty02"},is=d('<ul><li><a href="javascript:void(0);" class="list_con ty03"><div class="list_lft"><div class="cus"><span class="name">올리브소스 님</span><span class="date">2023.04.11</span></div><span class="tit ellipsis2"> 전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. </span></div><div class="img"><img src="'+r+'" alt="블로그 리뷰 썸네일"></div></a></li><li><a href="javascript:void(0);" class="list_con ty03"><div class="list_lft"><div class="cus"><span class="name">올리브소스 님</span><span class="date">2023.04.11</span></div><span class="tit ellipsis2"> 전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. </span></div><div class="img"><img src="'+r+'" alt="블로그 리뷰 썸네일"></div></a></li><li><a href="javascript:void(0);" class="list_con ty03"><div class="list_lft"><div class="cus"><span class="name">올리브소스 님</span><span class="date">2023.04.11</span></div><span class="tit ellipsis2"> 전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. </span></div><div class="img"><img src="'+r+'" alt="블로그 리뷰 썸네일"></div></a></li></ul>',1),as={class:"btn_group"},es={class:"section scroll_panel",role:"tabpanel","aria-expanded":"false",tabindex:"0",id:"scroll_panel_03"},cs=s("h3",{class:"tit03"},"요금제",-1),os={class:"item_list ty03"},ns=s("div",{class:"section scroll_panel",role:"tabpanel","aria-expanded":"false",tabindex:"0",id:"scroll_panel_04"},[s("h3",{class:"tit03"},"이벤트"),s("div",{class:"item_list ty02"},[s("ul",null,[s("li",null,[s("a",{href:"javascript:void(0);",class:"link_list"},[s("span",{class:"blind"},"이벤트 상세페이지 이동"),s("div",{class:"thum_item"},[s("div",{class:"thum_img"},[s("div",{class:"thum_top"},[s("div",{class:"bag_lft"},[s("div",{class:"bag evt dday"},[s("b",null,"D-1")]),s("div",{class:"bag evt ty01"},[s("b",null,"이번달 이벤트")])]),s("div",{class:"bag_rit"},[s("img",{src:b,alt:"tplus"})])]),s("img",{src:m,alt:"혜택 이벤트 썸네일"})]),s("div",{class:"thum_con"},[s("strong",null,"무제한이 9천원대! 오직 알파에서만"),s("span",null,"2023.02.02 - 2023.03.28")])])])]),s("li",null,[s("a",{href:"javascript:void(0);",class:"link_list"},[s("span",{class:"blind"},"이벤트 상세페이지 이동"),s("div",{class:"thum_item"},[s("div",{class:"thum_img"},[s("div",{class:"thum_top"},[s("div",{class:"bag_lft"},[s("div",{class:"bag evt dday"},[s("b",null,"D-5")]),s("div",{class:"bag evt ty02"},[s("b",null,"친구초대")])]),s("div",{class:"bag_rit"},[s("img",{src:n,alt:"tplus"})])]),s("img",{src:x,alt:"혜택 이벤트 썸네일"})]),s("div",{class:"thum_con"},[s("strong",null,"좋은 건 같이 써야죠~ 친구 추천 이벤트"),s("span",null,"2023.02.02 - 2023.03.28")])])])]),s("li",null,[s("a",{href:"javascript:void(0);",class:"link_list"},[s("span",{class:"blind"},"이벤트 상세페이지 이동"),s("div",{class:"thum_item"},[s("div",{class:"thum_img"},[s("div",{class:"thum_top"},[s("div",{class:"bag_lft"},[s("div",{class:"bag evt dday"},[s("b",null,"D-24")]),s("div",{class:"bag evt ty03"},[s("b",null,"제휴 이벤트")])]),s("div",{class:"bag_rit"},[s("img",{src:n,alt:"tplus"})])]),s("img",{src:S,alt:"혜택 이벤트 썸네일"})]),s("div",{class:"thum_con"},[s("strong",null,"알파 신규회원 대상 개통 시 Npay 5천원 선착순 증정 리뷰이벤트"),s("span",null,"2023.02.02 - 2023.03.28")])])])]),s("li",null,[s("a",{href:"javascript:void(0);",class:"link_list"},[s("span",{class:"blind"},"이벤트 상세페이지 이동"),s("div",{class:"thum_item"},[s("div",{class:"thum_img"},[s("div",{class:"thum_top"},[s("div",{class:"bag_lft"},[s("div",{class:"bag evt dday"},[s("b",null,"D-24")]),s("div",{class:"bag evt ty04"},[s("b",null,"제휴카드")])]),s("div",{class:"bag_rit"},[s("img",{src:n,alt:"tplus"})])]),s("img",{src:v,alt:"혜택 이벤트 썸네일"})]),s("div",{class:"thum_con"},[s("strong",null,"무제한이 9천원대! 오직 알파에서만"),s("span",null,"2023.02.02 - 2023.03.28")])])])]),s("li",null,[s("a",{href:"javascript:void(0);",class:"link_list end_thum"},[s("span",{class:"blind"},"이벤트 상세페이지 이동"),s("b",{class:"end_txt"},"본 이벤트는 종료되었습니다"),s("div",{class:"thum_item"},[s("div",{class:"thum_img"},[s("div",{class:"thum_top"},[s("div",{class:"bag_lft"},[s("div",{class:"bag evt dday"},[s("b",null,"D-24")]),s("div",{class:"bag evt ty04"},[s("b",null,"제휴카드")])]),s("div",{class:"bag_rit"},[s("img",{src:n,alt:"tplus"})])]),s("img",{src:v,alt:"혜택 이벤트 썸네일"})]),s("div",{class:"thum_con"},[s("strong",null,"무제한이 9천원대! 오직 알파에서만"),s("span",null,"2023.02.02 - 2023.03.28")])])])])]),s("div",{class:"btn_group"},[s("a",{href:"javascript:void(0);",role:"button",class:"btn md c05"},"더볼래요")])]),s("div",{class:"no_dt_his"},[s("p",null," 등록된 이벤트가 없습니다 ")])],-1);function ds(l,t,e,c,o,a){const p=f("compCard");return g(),k("div",C,[s("div",q,[I,R,s("div",T,[A,s("div",L,[s("div",O,[s("ul",H,[s("li",j,[s("button",{type:"button",role:"tab","aria-selected":"true","aria-controls":"scroll_panel_01",onClick:t[0]||(t[0]=(...i)=>a.tabClick&&a.tabClick(...i))},"기본정보")]),s("li",E,[s("button",{type:"button",role:"tab","aria-selected":"false","aria-controls":"scroll_panel_02",onClick:t[1]||(t[1]=(...i)=>a.tabClick&&a.tabClick(...i))},"리뷰")]),s("li",D,[s("button",{type:"button",role:"tab","aria-selected":"false","aria-controls":"scroll_panel_03",onClick:t[2]||(t[2]=(...i)=>a.tabClick&&a.tabClick(...i))},"요금제")]),s("li",G,[s("button",{type:"button",role:"tab","aria-selected":"false","aria-controls":"scroll_panel_04",onClick:t[3]||(t[3]=(...i)=>a.tabClick&&a.tabClick(...i))},"이벤트")])])])])]),P,s("div",$,[U,s("div",N,[s("ul",B,[s("li",z,[s("button",{type:"button",role:"tab","aria-selected":"true","aria-controls":"tab_panel_01_01",onClick:t[4]||(t[4]=(...i)=>l.$tab.click&&l.$tab.click(...i))},"사용자 리뷰")]),s("li",V,[s("button",{type:"button",role:"tab","aria-selected":"false","aria-controls":"tab_panel_01_02",onClick:t[5]||(t[5]=(...i)=>l.$tab.click&&l.$tab.click(...i))},"블로그 리뷰")])])]),s("div",M,[s("div",F,[J,s("div",K,[Q,s("div",W,[X,s("div",Y,[s("button",{type:"button",class:"btn md c05",id:"btn_userReviewPop",onClick:t[6]||(t[6]=i=>{l.$popup.open("#userReviewPop","#btn_userReviewPop")})},"전체보기")])])])]),s("div",Z,[ss,s("div",ts,[s("div",ls,[is,s("div",as,[s("button",{type:"button",class:"btn md c05",id:"btn_blogReviewPop",onClick:t[7]||(t[7]=i=>{l.$popup.open("#blogReviewPop","#btn_blogReviewPop")})},"전체보기")])])])])])]),s("div",es,[cs,s("div",os,[_(p,{cardInfo:{type:"ty01",name:"test1",detail:!0}}),_(p,{cardInfo:{type:"ty01",name:"test2"}})])]),ns])])}const gs=y(w,[["render",ds]]);export{gs as default};
