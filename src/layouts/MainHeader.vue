<template>

  <header class="header" v-if="layout.header != 'none'">
    <div class="inner">
      <div class="h_left">
        <a href="javascript:void(0);" class="h_home" v-if="layout.header == 'main'"><span class="blind">+알파</span></a>
        <button type="button" class="h_back" v-if="layout.header != 'main'"><span class="blind">이전 화면으로 이동</span></button>
        <h2 class="h_title" v-if="layout.header != 'main'">{{ layout.title }}</h2>
      </div>
      <div class="h_right">
        <button type="button" class="h_rcmd" v-if="layout.header != 'sub2'"><span class="blind">친구추천</span></button>
        <button type="button" class="h_menu" v-if="layout.header != 'sub2'" @click="asideOpen"><span class="blind">전체메뉴 열기</span></button>
        <!-- <button type="button" class="h_close"><span class="blind">닫기</span></button> -->
      </div>
    </div>

    <div class="pc_header">
      <div class="inner">
        <h1><a href="javascript:void(0);"><span class="blind">+알파</span></a></h1>
        <nav class="nav" @mouseenter="gnbOpen" @mouseleave="gnbClose">
          <ul>
            <li>
              <a href="javascript:void(0);" class="menu_class">유심구매</a>
              <Transition name="gnb">
                <div class="sub_menu" v-if="gnbOn">
                  <ul>
                    <li><a href="javascript:void(0);" class="img_delivery"><span class="blind">바로배송</span></a></li>
                    <li><a href="javascript:void(0);">편의점 픽업</a></li>
                  </ul>
                </div>
              </Transition>
            </li>
            <li>
              <a href="javascript:void(0);" class="menu_class on">요금제</a>
              <Transition name="gnb">
                <div class="sub_menu" v-if="gnbOn">
                  <ul>
                    <li class="on"><a href="javascript:void(0);">목록</a></li>
                    <li><a href="javascript:void(0);">내게 맞는 요금제 찾기</a></li>
                    <li><a href="javascript:void(0);">가입신청</a></li>
                  </ul>
                </div>
              </Transition>
            </li>
            <li>
              <a href="javascript:void(0);" class="menu_class">혜택</a>
              <Transition name="gnb">
                <div class="sub_menu" v-if="gnbOn">
                  <ul>
                    <li><a href="javascript:void(0);"><sup>+</sup>알파 활용하기</a></li>
                    <li><a href="javascript:void(0);">이벤트</a></li>
                    <li><a href="javascript:void(0);">당첨자 발표</a></li>
                    <li><a href="javascript:void(0);">제휴카드 안내</a></li>
                    <li><a href="javascript:void(0);">가족/친구 추천하기</a></li>
                  </ul>
                </div>
              </Transition>
            </li>
            <li>
              <a href="javascript:void(0);" class="menu_class">고객지원</a>
              <Transition name="gnb">
                <div class="sub_menu" v-if="gnbOn">
                  <ul>
                    <li><a href="javascript:void(0);">내 주변 매장 찾기</a></li>
                    <li><a href="javascript:void(0);">공지사항</a></li>
                    <li><a href="javascript:void(0);">자주하는 질문</a></li>
                    <li><a href="javascript:void(0);" @focusout="gnbClose">1:1 문의하기</a></li>
                  </ul>
                </div>
              </Transition>
            </li>
          </ul>
        </nav>
        <div class="header_menu">
          <ul>
            <li><a href="javascript:void(0);">로그인</a></li>
            <li><a href="javascript:void(0);">회원가입</a></li>
            <li><a href="javascript:void(0);">로그아웃</a></li>
            <li><a href="javascript:void(0);">마이페이지</a></li>
          </ul>
        </div>
      </div>
    </div>

  </header>
  <!-- // header -->
  <aside class="aside" v-if=" layout.header == 'main' || layout.header == 'sub' ">
    <div class="inner">
      <div class="aside_header">
        <div class="user">
          <div class="tit">
            <a href="javascript:void(0);" class="link_login">로그인</a> 후 <br> 이용하실 수 있어요
          </div>
          <a href="javascript:void(0);" class="link_join">회원가입</a>
        </div>
        <div class="user">
          <div class="tit">
            안녕하세요 <br>
            <a href="javascript:void(0);" class="link_set">김알파님</a>
          </div>
          <a href="javascript:void(0);" class="link_logout">로그아웃</a>
        </div>
        <a href="javascript:void(0);" class="link_my">마이페이지</a>
      </div>
      <nav class="aside_nav">
        <ul>
          <li>
            <button type="button" aria-expanded="false" @click="asideMenuClick">유심구매</button>
            <TransitionGroup name="subMenu">
              <div class="sub_menu" role="region" v-if="aside[0]">
                <ul>
                  <li><a href="javascript:void(0);" class="img_delivery"><span class="blind">바로배송</span></a></li>
                  <li><a href="javascript:void(0);">편의점 픽업</a></li>
                </ul>
              </div>
            </TransitionGroup>
          </li>
          <li>
            <button type="button" aria-expanded="false" @click="asideMenuClick">요금제</button>
            <transition name="subMenu">
              <div class="sub_menu" role="region" v-if="aside[1]">
                <ul>
                  <li class="on"><a href="javascript:void(0);">목록</a></li>
                  <li><a href="javascript:void(0);">내게 맞는 요금제 찾기</a></li>
                  <li><a href="javascript:void(0);">가입신청</a></li>
                </ul>
              </div>
            </transition>
          </li>
          <li>
            <button type="button" aria-expanded="false" @click="asideMenuClick">혜택</button>
            <transition name="subMenu">
              <div class="sub_menu" role="region" v-if="aside[2]">
                <ul>
                  <li><a href="javascript:void(0);"><sup>+</sup>알파 활용하기</a></li>
                  <li><a href="javascript:void(0);">이벤트</a></li>
                  <li><a href="javascript:void(0);">당첨자 발표</a></li>
                  <li><a href="javascript:void(0);">제휴카드 안내</a></li>
                  <li><a href="javascript:void(0);">가족/친구 추천하기</a></li>
                </ul>
              </div>
            </transition>
          </li>
          <li>
            <button type="button" aria-expanded="false" @click="asideMenuClick">고객지원</button>
            <transition name="subMenu">
              <div class="sub_menu" role="region" v-if="aside[3]">
                <ul>
                  <li><a href="javascript:void(0);">내 주변 매장 찾기</a></li>
                  <li><a href="javascript:void(0);">공지사항</a></li>
                  <li><a href="javascript:void(0);">자주하는 질문</a></li>
                  <li><a href="javascript:void(0);">1:1 문의하기</a></li>
                </ul>
              </div>
            </transition>
          </li>
        </ul>
      </nav>
      <div class="aside_footer">
          <a href="javascript:void(0);" class="link_event">친구 추천 이벤트</a>
          <a href="javascript:void(0);" class="link_plus">결합하고 할인받자</a>
      </div>
        
      <div class="asd_top">
        <a href="javascript:void(0);" class="asd_home"><span class="blind">home</span></a>
        <button type="button" class="asd_close" @click="asideClose"><span class="blind">전체메뉴 닫기</span></button>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'MainHeader',
  data(){
    return {
      gnbOn: false,
      aside: [false, false, false, false],
    }
  },
  methods: {
    gnbOpen(){
      if( this.gnbOn == true ) return;

      const nav = document.querySelector("nav.nav");
      nav.classList.add("on");
      this.gnbOn = true;
    },
    gnbClose(){
      if( this.gnbOn == false ) return;

      const nav = document.querySelector("nav.nav");
      nav.classList.remove("on");
      this.gnbOn = false;
    },
    asideOpen(){
      const aside = document.querySelector("aside.aside");
      const inner = aside.querySelector(".inner");
      aside.classList.add("open");

      const focusS = document.createElement("div");
      focusS.classList.add("focus_s");
      focusS.setAttribute( 'tabindex', 0);
      aside.prepend(focusS);

      const focusE = document.createElement("div");
      focusE.classList.add("focus_e");
      focusE.setAttribute( 'tabindex', 0);
      aside.append(focusE);

      inner.setAttribute("tabindex", 0);

      setTimeout(() => { inner.focus() }, 200); // style animation/transition 속도 고려

      focusS.addEventListener("focus", ()=>{ inner.focus() });
      focusE.addEventListener("focus", ()=>{ inner.focus() });

      document.querySelector("body").classList.add("noScroll");
      document.querySelector("html").classList.add("noScroll");

    },
    asideClose(){
      const _html = document.querySelector("html");
      const aside = document.querySelector("aside.aside");
      const inner = aside.querySelector(".inner");
      const btn = document.querySelector("header.header .h_menu");
      
      aside.classList.remove("open");
      btn.focus();
    
      aside.querySelector(".focus_s").remove();
      aside.querySelector(".focus_e").remove();
      inner.removeAttribute("tabindex");
      
      if (_html.classList.contains('mobile')) {
        document.querySelector("body").classList.remove("noScroll");
        document.querySelector("html").classList.remove("noScroll");
      }
    },
    asideMenuClick(e){
      const btn = e.target;
      const isExpanded = btn.getAttribute("aria-expanded");
      
      const li = e.target.parentNode;

      if( isExpanded == "false" ){
        li.classList.add("on");
        btn.setAttribute("aria-expanded", true);
        document.querySelectorAll(".aside_nav > ul > li").forEach(( a, i )=>{
          if( a==li ) this.aside[i] = true;
        });

      } else {
        li.classList.remove("on");
        btn.setAttribute("aria-expanded", false);
        document.querySelectorAll(".aside_nav > ul > li").forEach(( a, i )=>{
          if( a==li ) this.aside[i] = false;
        });
        
      }
    }
  },
  props: {
    layout: Object,
  }
}
</script>