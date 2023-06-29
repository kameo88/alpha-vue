window.addEventListener("load", function(){
  // console.log('dd');
  
  // tag.init();
})

const front = {
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

const sort = {
  open(){
    const sortLayerOpen = document.querySelectorAll(".sort_layer.open");
    if( sortLayerOpen.length ){
      this.close();
      return;
    }

    const _html = document.querySelector("html");
    const _body = document.querySelector("body");

    if (!_html.classList.contains('mobile')) _body.classList.add("noScroll");

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
    const _body = document.querySelector("body");
    const _sortLayer = document.querySelector('.sort_layer');
    const _sortLayerWrap = document.querySelector('.sort_layer_wrap');
    const _sortBtn = document.querySelector('.sort_btn');

    _sortLayer.classList.remove("open");
    _sortBtn.focus();

    _sortLayer.removeAttribute("style");
    
    _sortLayer.querySelector(".sort_s").remove();
    _sortLayer.querySelector(".sort_e").remove();

    _sortLayerWrap.removeAttribute("tabindex");

    if (_html.classList.contains('mobile')) _body.classList.remove("noScroll");
  },
  select(e){
    const  _this = e.target;
    let _li = _this.parentNode.parentNode.firstChild;
    while(_li){
      _li.classList.remove("on");
      _li.querySelector("button").setAttribute("aria-selected", false);
      _li = _li.nextElementSibling;
    }
    
    _this.setAttribute("aria-selected", true);
    _this.parentNode.classList.add("on");

    let sortLayer = _this.parentNode;
    while( sortLayer ){
      if( sortLayer.classList.contains("sort_layer") || sortLayer.nodeName == "BODY" ) break
      sortLayer = sortLayer.parentNode;
    }

    if( sortLayer.classList.contains("sort_layer") ){
      const text = _this.innerText;
      sortLayer.parentNode.querySelector(".sort_btn").innerText = text;
      this.close();
    }
  }  
}


const popup = {
  open : function(pop){
    const _body = document.querySelector("body");
    _body.classList.add("noScroll");

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

    setTimeout(() => {
      _popWrap.focus();
    }, 201); // style animation/transition 속도 고려

    sortS.addEventListener("focus", ()=>{ _popWrap.focus() });
    sortE.addEventListener("focus", ()=>{ _popWrap.focus() });

  },
  close : function(pop, btn){

    const _body = document.querySelector("body");
    const _pop = document.querySelector(pop);
    const _popWrap = _pop.querySelector(".pop_wrap");
    const _btn = document.querySelector(btn);

    _pop.classList.remove("open");
    _pop.removeAttribute("style");
    
    _pop.querySelector(".sort_s").remove();
    _pop.querySelector(".sort_e").remove();

    _popWrap.removeAttribute('tabindex');

    const _popupLayerOpen = document.querySelectorAll(".pop_layer.open");
    if( _popupLayerOpen.length < 1 ){
      _body.classList.remove("noScroll");
    }
    _btn.focus();
  }
}

const tab = {
  click(e){
    const _this = e.target;
    const _body = document.querySelector("body");
    
    let scrollTab = _this.parentNode;
    while( scrollTab ){
      if( scrollTab.classList.contains("scroll_tab") || scrollTab.nodeName == "BODY" ) break
      scrollTab = scrollTab.parentNode;
    }

    if( scrollTab.classList.contains("scroll_tab") ){
      // tabList.tabMove(_this);
      return;
    }

    let _li = _this.parentNode.parentNode.firstChild;
    while(_li){
      _li.classList.remove("on");
      _li.querySelector("button").setAttribute("aria-selected", false);
      _li = _li.nextElementSibling;
    }

    _this.setAttribute("aria-selected", true);
    _this.parentNode.classList.add("on");

    const _tabId = _this.getAttribute("aria-controls");
    const _tabPanel = document.querySelector(`#${_tabId}`);
    if( _tabPanel != null ){
      _tabPanel.setAttribute("aria-expanded", true);
    }

    let previous = _tabPanel.previousElementSibling;
    while( previous != null ){
      previous.setAttribute("aria-expanded", false);
      previous = previous.previousElementSibling;
    }
    let next = _tabPanel.nextElementSibling;
    while( next != null ){
      next.setAttribute("aria-expanded", false);
      next = next.nextElementSibling;
    }

    let popLayer = _this.parentNode;
    while( popLayer ){
      if( popLayer.classList.contains("pop_layer") || popLayer.nodeName == "BODY" ) break
      popLayer = popLayer.parentNode;
    }
    if( !popLayer.classList.contains("pop_layer") ){
      let _scroll = _body.scrollTop;
      const _tabList = _this.parentNode.parentNode;
      let _thisTop = _tabList.offsetTop;
      let _thisHeight = _tabList.offsetHeight;
      let _conTop = _tabPanel.offsetTop;

      _scroll = _conTop - ((_thisTop + _thisHeight) - _scroll);
      _body.scrollTo(0, _scroll);
    }

    // tablist02 일때만 move()
    let tab_list02 = _this.parentNode;
    while( tab_list02 ){
      if( tab_list02.classList.contains("tab_list02") || tab_list02.nodeName == "BODY" ) break;
      tab_list02 = tab_list02.parentNode;
    }
    if( tab_list02.classList.contains("tab_list02") ) this.move(_this);

  },
  move(e){
    const _tabList = e.parentNode.parentNode;

    const _tabListW = _tabList.offsetWidth; // 보여지는 가로 640
    const _tabListS = _tabList.scrollLeft;  // 스크롤값

    const _tabListL = _tabList.offsetLeft;
    const _thisL = e.offsetLeft - _tabListL;
    const _elemW = e.offsetWidth;

    const st = _tabListS;               // 탭 시작점
    const en = _tabListS + _tabListW;   // 탭 끝점

    const elSt = _thisL;
    const elEn = _thisL + _elemW;

    const gap = 10;
    const move = 100;

    let goto = _tabListS;

    if( st >= elSt-gap ) goto = goto - move;
    if( en <= elEn+gap ) goto = goto + move;

    // console.log('st:', st, ' en:', en, ' elSt:', elSt, ' elEn:', elEn, ' goto:', goto );

    _tabList.scrollTo(goto, 0);
  }
}

const tag = {
  click(e){
    const _this = e.target;
    
    // multi 클래스 가졌는지 체크
    let _tagList = _this.parentNode;
    while( _tagList ){
      if( _tagList.classList.contains("tag_list") || _tagList.nodeName == "BODY" ) break
      _tagList = _tagList.parentNode;
    }
    if( _tagList.classList.contains("multi") ){  // multi 아니면 this 제외 on 해제

      if( _this.getAttribute("aria-selected") == "true" ){
        _this.setAttribute("aria-selected", false);
        _this.parentNode.classList.remove("on");
      } else {
        _this.setAttribute("aria-selected", true);
        _this.parentNode.classList.add("on");
      }

    } else {  // multi
      // console.log('multi X');
      let _thisOn = ( _this.getAttribute("aria-selected") == "true" ) ? true : false;

      let _li = _this.parentNode.parentNode.firstChild;
      while(_li){
        _li.classList.remove("on");
        _li.querySelector("button").setAttribute("aria-selected", false);
        _li = _li.nextElementSibling;
      }

      if( !_thisOn ){
        _this.setAttribute("aria-selected", true);
        _this.parentNode.classList.add("on");
      }
    }

    this.move(_this);
  },
  move(e){
    const _tabList = e.parentNode.parentNode;

    const _tabListW = _tabList.offsetWidth; // 보여지는 가로 640
    const _tabListS = _tabList.scrollLeft;  // 스크롤값

    const _tabListL = _tabList.offsetLeft;
    const _thisL = e.offsetLeft - _tabListL;
    const _elemW = e.offsetWidth;

    const st = _tabListS;               // 탭 시작점
    const en = _tabListS + _tabListW;   // 탭 끝점

    const elSt = _thisL;
    const elEn = _thisL + _elemW;

    const gap = 100;
    const move = 200;

    let goto = _tabListS;

    if( st >= elSt-gap ) goto = goto - move;
    if( en <= elEn+gap ) goto = goto + move;

    // console.log('st:', st, ' en:', en, ' elSt:', elSt, ' elEn:', elEn, ' goto:', goto );

    _tabList.scrollTo(goto, 0);
  },
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


export default {
    install(Vue) {
        Vue.config.globalProperties.$front = front;
        Vue.config.globalProperties.$tab = tab;
        Vue.config.globalProperties.$sort = sort;
        Vue.config.globalProperties.$popup = popup;
        Vue.config.globalProperties.$tag = tag;
    }
}