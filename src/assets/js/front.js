import { setTimeout } from "core-js";

const front = {
  init(){
    this.device();
    scroll.isScroll();
    
    // 로딩순서 고려
    setTimeout(()=>{
      layout.footer();
      radioActive.init();
    }, 1);
    
    setTimeout(()=>{ layout.getFullH() }, 0);
    window.addEventListener("resize", layout.getFullH);

    // form input
    setTimeout(()=>{ input.init() }, 100);

    // swiper
    setTimeout(()=>{ swiper.init() }, 100);

  },
  device(){
    const elem = document.querySelector("html");
    const userAgent = navigator.userAgent;

    const mobile = /Android|webOS|iPhone|iPad|iPop|BlackBerry|IEmobile|Opera Mini/i;
    const ios = /iPhone|iPad|iPop/i;
    const aos = /Android/i;

    mobile.test(userAgent) ? elem.classList.add('mobile') : elem.classList.add('pc');
    ios.test(userAgent) ? elem.classList.add('ios') : null;
    aos.test(userAgent) ? elem.classList.add('android') : null;
    
    // ie check
    const msie = /MSIE/i;
    const trident = /Trident/i;

    if( msie.test(userAgent) && trident.test(userAgent) ) {
    const ieVer = document.documentMode; // IE 브라우저 버전
    elem.classList.add('ie' + ieVer);

    } else if( !msie.test(userAgent) && trident.test(userAgent)) {
    elem.classList.add('ie11');
    }

    // etc browser check
    const edge = /Edg/i;
    const opr = /OPR/i;
    const opera = /Opera/i;
    const chrome = /Chrome/i;
    const safari = /Safari/i;
    const firefox = /Firefox/i;

    edge.test(userAgent) ? elem.classList.add('edg') : null;
    ( opr.test(userAgent) || opera.test(userAgent) ) ? elem.classList.add('opera') : null;
    chrome.test(userAgent) ?  elem.classList.add('chrome') : null;
    safari.test(userAgent) ? elem.classList.add('safari') : null;
    firefox.test(userAgent) ? elem.classList.add('firefox') : null;
  }
}

const layout = {
  getFullH: function(){
    const fullH = document.querySelector(".fullH");
    if( fullH == null ) return;

    const isPC = document.querySelector("html").classList.contains("pc");
    if( !isPC ) return;

    const docH = window.innerHeight;
    fullH.style.minHeight = `${docH}px`;
  },
  footer: function(){
    const bottomFloat = document.querySelector(".bottom_float");
    if( bottomFloat == null ) return;

    const paddingB = bottomFloat.querySelector('.inner').offsetHeight;
    // .outerHeight(true);
    // console.log('_paddingB', paddingB);

    const footer = document.querySelector(".footer");
    let target = ( footer != null ) ? footer : document.querySelector(".container");

    target.style.paddingBottom = `${paddingB}px`;

    const asideFloat = document.querySelector(".aside_float");
    if( asideFloat == null ) return;

    const asideFloatInner = asideFloat.querySelector(".inner");
    let bottom = (getComputedStyle(asideFloatInner).bottom).replace("px", "") * 1;
    
    asideFloatInner.style.bottom = `${paddingB + bottom}px`;
  }
}

const sort = {
  open(){
    const sortLayerOpen = document.querySelectorAll(".sort_layer.open");
    if( sortLayerOpen.length ){
      this.close();
      return;
    }

    const _html = document.querySelector("html");
    // const _body = document.querySelector("body");

    // if (_html.classList.contains('mobile')) _body.classList.add("noScroll");
    if (_html.classList.contains('mobile')) scroll.noScroll();

    setTimeout(() => {
      const _sortLayer = document.querySelector('.sort_layer');
      const _sortLayerWrap = document.querySelector('.sort_layer_wrap');

      const sortS = document.createElement("div");
      sortS.classList.add("sort_s");
      sortS.setAttribute( 'tabindex', 0);
      _sortLayer.prepend(sortS);

      const sortE = document.createElement("div");
      sortE.classList.add("sort_e");
      sortE.setAttribute( 'tabindex', 0);
      _sortLayer.append(sortE);

      _sortLayerWrap.setAttribute('tabindex', 0);

      _sortLayer.classList.add('open');

      sortS.addEventListener("focus", ()=>{ _sortLayerWrap.focus() });
      sortE.addEventListener("focus", ()=>{ _sortLayerWrap.focus() });
    }, 1);

    setTimeout(() => {
      const _sortLayerWrap = document.querySelector('.sort_layer_wrap');
      _sortLayerWrap.focus();
    }, 201); // style animation/transition 속도 고려
  
  },
  close(){
    const _html = document.querySelector("html");
    // const _body = document.querySelector("body");
    const _sortLayer = document.querySelector('.sort_layer');
    const _sortLayerWrap = document.querySelector('.sort_layer_wrap');
    const _sortBtn = document.querySelector('.sort_btn');

    _sortLayer.classList.remove("open");
    _sortBtn.focus();

    _sortLayer.removeAttribute("style");
    
    _sortLayer.querySelector(".sort_s").remove();
    _sortLayer.querySelector(".sort_e").remove();

    _sortLayerWrap.removeAttribute("tabindex");

    // if (_html.classList.contains('mobile')) _body.classList.remove("noScroll");
    if ( _html.classList.contains('mobile') ) scroll.scroll();
  },
  select(e){
    const _this = e.target;
    const _this_li = _this.parentNode;
    const li = _this_li.parentNode.querySelectorAll("li");

    li.forEach( a => {
      const button = a.querySelector("button");
      if( button == _this ){
        a.classList.add("on");
        button.setAttribute("aria-selected", true);
      } else {
        a.classList.remove("on");
        button.setAttribute("aria-selected", false);
      }
    })

    const isSortLayer = [...document.querySelectorAll(".sort_layer.open .sort_group > li > button")].filter( a => a == _this ).length;
    if( isSortLayer ){
      const button = document.querySelector(".sort_layer.open").parentNode.querySelector(".sort_btn");
      const text = _this.innerText;
      button.innerText = text;
      this.close();
    }
  }  
}


const popup = {
  open : function(pop){
    scroll.noScroll();

    const _pop = document.querySelector(pop);
    const _popWrap = _pop.querySelector(".pop_wrap");
    
    const popLayerOpen = document.querySelectorAll(".pop_layer.open");
    if( popLayerOpen.length ){
      const _popIndex = getComputedStyle(_pop).zIndex * 1;
      const _length = popLayerOpen.length * 1;
      _pop.style.zIndex = _popIndex + _length;
    }
    
    const sortS = document.createElement("div");
    sortS.classList.add("sort_s");
    sortS.setAttribute( 'tabindex', 0);
    _pop.prepend(sortS);

    const sortE = document.createElement("div");
    sortE.classList.add("sort_e");
    sortE.setAttribute( 'tabindex', 0);
    _pop.append(sortE);

    _popWrap.setAttribute('tabindex', 0);

    _pop.classList.add('open');

    setTimeout(() => { _popWrap.focus() }, 201); // style animation/transition 속도 고려

    sortS.addEventListener("focus", ()=>{ _popWrap.focus() });
    sortE.addEventListener("focus", ()=>{ _popWrap.focus() });

  },
  close : function(pop, btn){

    const _pop = document.querySelector(pop);
    if( _pop == null ) return;

    const _isOpen = _pop.classList.contains("open");
    const _popWrap = _pop.querySelector(".pop_wrap");
    const _btn = document.querySelector(btn);

    _pop.classList.remove("open");
    _pop.removeAttribute("style");
    
    if( _isOpen ){
      _pop.querySelector(".sort_s").remove();
      _pop.querySelector(".sort_e").remove();
    }

    _popWrap.removeAttribute('tabindex');

    const _popupLayerOpen = document.querySelectorAll(".pop_layer.open");
    if( _popupLayerOpen.length < 1 ) scroll.scroll();

    _btn.focus();

  },
  select: function(pop, btn){
    let _this = event.target;
    while( _this ){
      if( _this.tagName == "BUTTON" ) break;
      _this = _this.parentNode;
    }

    const _data = _this.getAttribute("data-option");
    const _btn = document.querySelector(btn);
    _btn.innerText = _data;
    this.close(pop, btn);

    selectList.click(event);
  }
}

const scroll = {
  isScroll: function(){
    window.addEventListener("scroll", ()=>{
      const scroll = document.querySelector("html").scrollTop;
      const body = document.querySelector("body");
      
      ( scroll > 10 ) ? body.classList.add("scroll") : body.classList.remove("scroll");
    })
  },
  top: function(){
    const html = document.querySelector("html");
    html.style.scrollBehavior = 'smooth';
    
    document.querySelector("html").scrollTo(0,0);

    setTimeout(()=>{ html.style.scrollBehavior = '' }, 500)
  },
  noScroll: function(){
    if( document.querySelector("html").style[0] == '--v-scrollTop' ) return;  // 이미 계산되어 있는 경우 제외
    
    const HTMLScollTop = document.querySelector("html").scrollTop * -1;
    document.documentElement.style.setProperty('--v-scrollTop', `${HTMLScollTop}px`);

    const _body = document.querySelector("body");
    _body.classList.add('noScroll');
  },
  scroll: function(){
    let HTMLScrollTop = getComputedStyle(document.querySelector("body")).top;
    HTMLScrollTop = HTMLScrollTop.replace("px", '') * -1;

    const _body = document.querySelector("body");
    const _html = document.querySelector("html");
    _body.classList.remove('noScroll');
    _html.scrollTo(0, HTMLScrollTop);

    document.documentElement.style = "";
  },
}

const tab = {
  click(e){
    const _this = e.target;
    const _this_li = _this.parentNode;
    const li = _this_li.parentNode.querySelectorAll("li");
    let _thisId = '';

    li.forEach( a => {
      const button = a.querySelector("button");
      if( a == _this_li ){
        _thisId = button.getAttribute("aria-controls");
        button.setAttribute("aria-selected", true);
        a.classList.add("on");
      } else {
        button.setAttribute("aria-selected", false);
        a.classList.remove("on");
      }
    })

    const _this_tabPanel = document.querySelector(`#${_thisId}`);
    const tabPanel = document.querySelector(`#${_thisId}`).parentNode.querySelectorAll("[role='tabpanel']");
    tabPanel.forEach( a => ( a == _this_tabPanel ) ? a.setAttribute("aria-expanded", true) : a.setAttribute("aria-expanded", false));


    // 이건 어디에 쓰는거지
    // const _body = document.querySelector("body");
    // let popLayer = _this.parentNode;
    // while( popLayer ){
    //   if( popLayer.classList.contains("pop_layer") || popLayer.nodeName == "BODY" ) break
    //   popLayer = popLayer.parentNode;
    // }
    // if( !popLayer.classList.contains("pop_layer") ){
    //   let _scroll = _body.scrollTop;
    //   const _tabList = _this.parentNode.parentNode;
    //   let _thisTop = _tabList.offsetTop;
    //   let _thisHeight = _tabList.offsetHeight;
    //   let _conTop = _this_tabPanel.offsetTop;

    //   _scroll = _conTop - ((_thisTop + _thisHeight) - _scroll);
    //   _body.scrollTo(0, _scroll);
    // }


    // tablist02 일때만 move() (좌우 스크롤)
    const isTablist02 = [...document.querySelectorAll(".tab_list02")].map( a => [...a.querySelectorAll("button[role='tab']")].filter( b => b == _this )).flat().length;
    if( isTablist02 ) this.move(_this);
  },
  move(e){
    const _data = {
      itemLeft: [],
      itemWidth: [],
    };

    const _this = e;
    const _this_li = _this.parentNode;
    const _li = _this_li.parentNode.querySelectorAll("li");

    const _tabList = e.parentNode.parentNode;

    _data.tablist_width = _tabList.offsetWidth; // 보여지는 가로 640
    _data.tablist_offsetLeft = _tabList.offsetLeft;
    _data.tabList_paddingLeft = (getComputedStyle(_tabList).paddingLeft).replace("px", "") * 1;
    _data.tabList_paddingRight = (getComputedStyle(_tabList).paddingRight).replace("px", "") * 1;

    _data.scrollWidth = _tabList.scrollWidth;
    _data.scrollLeft = _tabList.scrollLeft;
    _data.maxScroll = _data.scrollWidth - _data.tablist_width;

    _li.forEach( (a, i) =>{
      if( a == _this_li ) _data.idx = i;

      _data.itemWidth.push(a.offsetWidth);

      const itemLeft = a.offsetLeft - _data.tablist_offsetLeft;
      _data.itemLeft.push(itemLeft);

      _data.maxLength = i;
    });

    _data.chkStart = _data.scrollLeft;


    _data.chkEnd = _data.scrollLeft + _data.tablist_width - _data.tabList_paddingRight;
    _data.chkHalf = (_data.chkStart + _data.chkEnd) / 2;
    _data.thisItemLeft = _data.itemLeft[_data.idx];
    _data.thisItemWidth = _data.itemWidth[_data.idx];

    _data.prevIdx = ( _data.idx > 1 ) ?  _data.idx-1 : _data.idx;
    _data.nextIdx = ( _data.idx < _data.maxLength ) ? _data.idx+1 : _data.idx;

    _data.result = 0;
    _data.gap = 100;
    if( document.querySelector("html").classList.contains("mobile") ){
      _data.gap = 50;
    }
    

    if( _li[0].classList.contains("other") ){
      // console.log("other");
      _data.result = _data.thisItemLeft - _data.itemLeft[1];
      _tabList.scrollLeft = _data.result;
      return;
    }

    if( _data.chkStart + _data.gap >= _data.thisItemLeft ){
      _data.result = _data.scrollLeft - _data.itemWidth[_data.prevIdx] - _data.gap;
      _tabList.scrollLeft = _data.result;

    } else if ( _data.chkEnd - _data.gap <= _data.thisItemLeft + _data.thisItemWidth ){
      _data.result = _data.scrollLeft + _data.itemWidth[_data.nextIdx] + _data.gap;
      _tabList.scrollLeft = _data.result;
    }

    // console.log(_data);
    // _tabList.scrollLeft = 399;
  }
}

const tag = {
  click(e){
    const _this = e.target;
    const _thisOn = ( _this.getAttribute("aria-selected") == "true" ) ? true : false;
    const _this_li = _this.parentNode;

    if( _thisOn ){
      _this.setAttribute("aria-selected", false);
      _this_li.classList.remove("on");
      return;
    }

    const li = _this_li.parentNode.querySelectorAll("li");
    const isMulti = [...document.querySelectorAll(".tag_list.multi")].map( a => [...a.querySelectorAll("li > button")].filter( b => b == _this )).flat().length;


    li.forEach( a => {
      const button = a.querySelector("button");

      if( button == _this ){
        button.setAttribute("aria-selected", true);
        a.classList.add("on");
      } else {
        if( !isMulti ){
          button.setAttribute("aria-selected", false);
          a.classList.remove("on");
        }
      }
    });
    // this.move(_this);
    tab.move(_this);
  },
  // move(e){
    // const _tabList = e.parentNode.parentNode;

    // const _tabListW = _tabList.offsetWidth; // 보여지는 가로 640
    // const _tabListS = _tabList.scrollLeft;  // 스크롤값

    // const _tabListL = _tabList.offsetLeft;
    // const _thisL = e.offsetLeft - _tabListL;
    // const _elemW = e.offsetWidth;

    // const st = _tabListS;               // 탭 시작점
    // const en = _tabListS + _tabListW;   // 탭 끝점

    // const elSt = _thisL;
    // const elEn = _thisL + _elemW;

    // const gap = 100;
    // const move = 200;

    // let goto = _tabListS;

    // if( st >= elSt-gap ) goto = goto - move;
    // if( en <= elEn+gap ) goto = goto + move;

    // // console.log('st:', st, ' en:', en, ' elSt:', elSt, ' elEn:', elEn, ' goto:', goto );

    // _tabList.scrollTo(goto, 0);
  // },
  delete(e){
    const _this = e.target;
    const _li = _this.parentNode;
    _li.remove();
  },
  variable: {
    click(e){
      const _this = e.target;
      const _tagList = _this.parentNode;

      const isExpanded = _this.getAttribute("aria-expanded") == "true";
      ( isExpanded ) ? this.close(_tagList, _this) : this.open(_tagList, _this);
    },
    open(_tagList, _this){
      _tagList.classList.add("on");
      _this.setAttribute("aria-expanded", true);
    },
    close(_tagList, _this){
      _tagList.classList.remove("on");
      _this.setAttribute("aria-expanded", false);
    },
    resize(){

      let _tagList = document.querySelectorAll(".tagList:not(.block)");
      _tagList = [..._tagList].filter( e => e.querySelectorAll("button[aria-expanded]").length > 0 );

      const tagListResize = function(){
        _tagList.forEach( e =>{
          
          const ulWidth = e.querySelector("ul").offsetWidth;
          const li = e.querySelectorAll("ul > li");
          let liWidth = 0;
          li.forEach( el =>{ liWidth += el.offsetWidth })
          
          if( liWidth > ulWidth ){
            e.classList.add("variable");
          } else {
            e.classList.remove("variable");
          }
        })
      }

      window.addEventListener("resize", tagListResize );
      tagListResize();
    }
  },
  other: {
    open(e){
      const _this = e.target;

      let _tagList = _this.parentNode.parentNode.parentNode;
      let _otherPop = _tagList.querySelector(".other_pop");

      if( _this.classList.contains("on") ){
        // 닫기
        _this.classList.remove("on");
        _otherPop.classList.remove("on");
      } else {
        // 열기
        _this.classList.add("on");
        _otherPop.classList.add("on");
      }

    },
    close(_otherPop, _button){
      _button.classList.remove("on");
      _otherPop.classList.remove("on");
    },
    select(e){
      const _this = e.target;
      const _thisLi = _this.parentNode;
      const _listBox = _this.parentNode.parentNode;

      const _tagList = _this.parentNode.parentNode.parentNode.parentNode;
      const _button = _tagList.querySelector(".other").querySelector("button");

      const _otherPop = _tagList.querySelector(".other_pop");

      _listBox.querySelectorAll("li").forEach((e)=>{
        const btn = e.querySelector("button");

        if( e == _thisLi ){
          e.classList.add("on");
          btn.setAttribute("aria-selected", true);

          _button.innerText = e.querySelector("button").innerText;
        } else {
          e.classList.remove("on");
          btn.setAttribute("aria-selected", false);
        }
      })

      this.close(_otherPop, _button);

    }
  }
}

const swiper = {
  init: function(){
    const cardSwiper = document.querySelectorAll(".cardSwiper").length;
    const flowSwiper = document.querySelectorAll(".flowSwiper").length;
    const bnrSwiper = document.querySelectorAll(".bnrSwiper").length;
    const noticePop = document.querySelectorAll("#noticePop").length;

    if( cardSwiper > 0 ) this.cardSwiper();
    if( flowSwiper > 0 ) this.flowSwiper();
    if( bnrSwiper > 0 ) this.bnrSwiper();
    if( noticePop > 0 ) this.notice();
  },
  cardSwiper: function(){
    var swiperItem = new Swiper(".cardSwiper", {
      slidesPerView: "auto",
      spaceBetween: 12,
      grabCursor: true,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: ('.swiper-button-next'),
        prevEl: ('.swiper-button-prev'),
      },
      on: {
        slideChange	:function(a){

          const el = a.$el[0];

          const isTY04 = el.classList.contains("ty04");
          const isHTML = document.querySelector("html").classList.contains("pc");
          if( isTY04 ||!isHTML ) return;

          const wrapW = a.width;

          const swiperW = a.virtualSize;
          const Translate = a.translate;
          const gap = 20;

          // console.log( a, swiperW + Translate - gap,  wrapW, swiperW, Translate, gap, ( swiperW + Translate - gap > wrapW ));

          if( swiperW + Translate - gap > wrapW ){
              ( a.activeIndex != 0 ) ? el.classList.add("activeIndex") : el.classList.remove("activeIndex");
          }
        }
      }
    });
  },
  flowSwiper: function(){
    var swiperItem = new Swiper(".flowSwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 32,
      loop: true,
      autoplay: {
        delay: 0,
      },
      speed: 5000,
      observer: true,
      observeParents: true,
    });
  },
  bnrSwiper: function(){
    var swiperItem = new Swiper(".bnrSwiper", {
      slidesPerView: 1,
      spaceBetween: 17,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      observer: true,
      observeParents: true,
    });
  },
  notice: function(){
    var swiperItem = new Swiper("#noticePop .swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      observer: true,
      observeParents: true,
    });
  }
}

const input = {
  inputItem: [],
  textareaItem: [],
  btnDel: [],
  init: function(){
    const _input = document.querySelectorAll("input[type='text'], input[type='number'], input[type='email'], input[type='password'], input[type='search'], input[type='tel'], input[type='url']");
    const _btnDel = document.querySelectorAll(".input_box .btn_del");
    const _textarea = document.querySelectorAll(".textarea_box textarea");
    // if( !isInput ) return;
    _input.forEach( a => { this.inputItem.push(a); this.setBtnDel(a) });
    _btnDel.forEach( a => { this.btnDel.push(a) });
    _textarea.forEach( a => { this.textareaItem.push(a) });
    
    this.input();
    this.clear();

  },
  input: function(){
    this.inputItem.forEach( a => { a.addEventListener("input", ()=>{ this.setBtnDel(a) })} );
    this.textareaItem.forEach( a => { a.addEventListener("input", ()=>{ this.textarea(a) })});
  },
  setBtnDel: function(input){
    const _this = input;
    const _btnDel = _this.parentNode.querySelector(".btn_del");
   
    const isDisabled = _this.getAttribute("disabled") != null;
    const isReadonly = _this.getAttribute("readonly") != null;

    if( _this.value.length ){
      if( isDisabled || isReadonly ) return;
      _btnDel.classList.add("on");
    } else {
      _btnDel.classList.remove("on");
    }
  },
  clear: function(){
    this.btnDel.forEach( a =>{ a.addEventListener("click", ()=>{
      const _this = a;
      const _input = a.parentNode.querySelector("input");
      _this.classList.remove("on");
      _input.value = "";
      _input.focus();
    })})
  },
  textarea: function(textarea){
    const _this = textarea;
    const _textareaBox = _this.parentNode;
    const _count = _textareaBox.querySelector(".byte_check .count");
    
    if( _this.value.length ){
      _textareaBox.classList.add("on");
      _count.innerText = _this.value.length;
    } else {
      _textareaBox.classList.remove("on");
    }

    const isTy02 = _textareaBox.classList.contains("ty02");
    if( isTy02 ) this.textareaResize(_this);
  },
  textareaResize: function(textarea){
    const _this = textarea;
    _this.style.height = "auto";

    const _height = _this.scrollHeight;
    _this.style.height = `${_height}px`;
  }
}

const selectList = {
  click: function(e){

    let _this = e.target;
    while( _this ){
      if( _this.tagName == "BUTTON" ) break;
      _this = _this.parentNode;
    }
    
    const _this_li = _this.parentNode;
    const _li = _this_li.parentNode.querySelectorAll("li");

    _li.forEach( a => {
      const button = a.querySelector("button");
      if( button == _this ){
        a.classList.add("on");
        button.setAttribute("aria-selected", true);
      } else {
        a.classList.remove("on");
        button.setAttribute("aria-selected", false);
      }
    })
  }
}

const radioActive = {
  item: [],
  init: function(){
    const item = document.querySelectorAll(".radio_active input");
    this.item = []; // reset
    item.forEach( a => this.item.push(a) );

    this.click();
  },
  click: function(){
    this.item.forEach( a => { a.addEventListener("change", ()=>{

      const _this = a;
      const _this_li = _this.parentNode.parentNode;
      const _li = _this_li.parentNode.querySelectorAll("li");

      _li.forEach( a => {
        const input = a.querySelector("input");
        if( input == _this ){
          a.classList.add("on");
          a.classList.remove("off");
        } else {
          a.classList.add("off");
          a.classList.remove("on");
        }
      })
    })})

  }
}


export default {
    install(Vue) {
        Vue.config.globalProperties.$front = front;
        Vue.config.globalProperties.$scroll = scroll;
        Vue.config.globalProperties.$layout = layout;
        Vue.config.globalProperties.$tab = tab;
        Vue.config.globalProperties.$sort = sort;
        Vue.config.globalProperties.$popup = popup;
        Vue.config.globalProperties.$tag = tag;
        Vue.config.globalProperties.$swiper = swiper;
        Vue.config.globalProperties.$input = input;
        Vue.config.globalProperties.$selectList = selectList;
        Vue.config.globalProperties.$radioActive = radioActive;
    }
}