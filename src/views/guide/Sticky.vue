<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>
          
      <div class="page_info">Sticky</div>

      <div class="section">        
        <div class="partner_title">
          <div class="img">
            <img src="@/assets/images/data/logo_partner18.png" alt="">
          </div>
          <strong class="tit">이야기모바일</strong>
          <em class="tex">똑똑한 통신요금의 기준 이야기 알뜰폰</em>
          <a href="javascript:void(0);" class="text_btn">4.5 <span>(56개)</span></a>
        </div>

        <div class="scroll_fixed">
          <div class="scroll_tab">
            <ul role="tablist">
              <li role="none" class="on">
                <button type="button" role="tab" aria-selected="true" aria-controls="scroll_panel_01" @click="tabClick">기본정보</button>
              </li>
              <li role="none">
                <button type="button" role="tab" aria-selected="false" aria-controls="scroll_panel_02" @click="tabClick">리뷰</button>
              </li>
              <li role="none">
                <button type="button" role="tab" aria-selected="false" aria-controls="scroll_panel_03" @click="tabClick">요금제</button>
              </li>
              <li role="none">
                <button type="button" role="tab" aria-selected="false" aria-controls="scroll_panel_04" @click="tabClick">이벤트</button>
              </li>
            </ul>
          </div>
        </div>

      </div><!-- .section -->





      <div class="section scroll_panel" role="tabpanel" aria-expanded="true" tabindex="0" id="scroll_panel_01">
        <h3 class="blind">기본정보</h3>
        <div class="partner_info">
          <dl>
            <dt>업무시간</dt>
            <dd>⁠평일 09시~ 18시(점심시간 12~13시 제외)</dd>
          </dl>
          <dl>
            <dt>고객센터</dt>
            <dd>1670-0283</dd>
          </dl>
          <dl>
            <dt>주소</dt>
            <dd>서울시 구로구 디지털로26길 61, 1304호 (구로동, 에이스하이엔드타워 2차)</dd>
          </dl>
          <dl>
            <dt>홈페이지</dt>
            <dd><a href="https://www.eyagi.co.kr/shop/index.php" target="_blank">https://www.eyagi.co.kr/shop/index.php</a></dd>
          </dl>
        </div>
      </div> <!-- // section -->

      <div class="section scroll_panel" role="tabpanel" aria-expanded="false" tabindex="0" id="scroll_panel_02">
        <h3 class="tit03">리뷰</h3>

        <div class="tab_list">
          <ul role="tablist">
            <li role="none" class="on">
              <button type="button" role="tab" aria-selected="true" aria-controls="tab_panel_01_01" @click="$tab.click">사용자 리뷰</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_01_02" @click="$tab.click">블로그 리뷰</button>
            </li>
          </ul>
        </div>
        <div class="tabpanel_wrap">
          <div role="tabpanel" aria-expanded="true" tabindex="0" id="tab_panel_01_01">
            <h3 class="blind">사용자 리뷰</h3>

            <div class="panel_cnt">
                
              <div class="review_point">
                <div class="rp_l">
                  <div class="all">
                    <strong>5.0</strong>
                    <span>(56개)</span>
                  </div>
                </div>
                <div class="rp_r">
                  <div class="detail">
                    <dl>
                      <dt>개통과정</dt>
                      <dd>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width:100%;"></div>
                        </div>
                        <strong>5.0</strong>
                      </dd>
                    </dl>
                    <dl>
                      <dt>고객상담</dt>
                      <dd>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width:40%;"></div>
                        </div>
                        <strong>4.0</strong>
                      </dd>
                    </dl>
                    <dl>
                      <dt>요금제 만족도</dt>
                      <dd>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width:80%;"></div>
                        </div>
                        <strong>4.0</strong>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div> <!-- // review_point -->

              <div class="line_list ty02">
                <ul>
                  <li>
                    <div class="list_con02">
                      <div class="cus">
                        <span class="name">김*파</span>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width:40%;"></div>
                        </div>
                        <span class="score">0.0</span>
                        <span class="date">2023.04.11</span>
                      </div>
                      <span class="tit">
                        전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. 
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="list_con02">
                      <div class="cus">
                        <span class="name">김*파</span>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width:40%;"></div>
                        </div>
                        <span class="score">0.0</span>
                        <span class="date">2023.04.11</span>
                      </div>
                      <span class="tit">
                        전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. 
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="list_con02">
                      <div class="cus">
                        <span class="name">김*파</span>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width:40%;"></div>
                        </div>
                        <span class="score">0.0</span>
                        <span class="date">2023.04.11</span>
                      </div>
                      <span class="tit">
                        전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. 
                      </span>
                    </div>
                  </li>
                </ul>
                <div class="btn_group">
                  <button type="button" class="btn md c05" id="btn_userReviewPop" @click="$popup.open('#userReviewPop', '#btn_userReviewPop');">전체보기</button>
                </div>
              </div>
            </div>
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_01_02">
            <h3 class="blind">블로그 리뷰</h3>

            <div class="panel_cnt">
              <div class="line_list ty02">
                <ul>
                  <li>
                    <a href="javascript:void(0);" class="list_con03">
                      <div class="list_lft">
                        <div class="cus">
                          <span class="name">올리브소스 님</span>
                          <span class="date">2023.04.11</span>
                        </div>
                        <span class="tit ellipsis2">
                          전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. 
                        </span>
                      </div>
                      <div class="img">
                        <img src="@/assets/images/data/img_thum.png" alt="블로그 리뷰 썸네일">
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="list_con03">
                      <div class="list_lft">
                        <div class="cus">
                          <span class="name">올리브소스 님</span>
                          <span class="date">2023.04.11</span>
                        </div>
                        <span class="tit ellipsis2">
                          전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. 
                        </span>
                      </div>
                      <div class="img">
                        <img src="@/assets/images/data/img_thum.png" alt="블로그 리뷰 썸네일">
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="list_con03">
                      <div class="list_lft">
                        <div class="cus">
                          <span class="name">올리브소스 님</span>
                          <span class="date">2023.04.11</span>
                        </div>
                        <span class="tit ellipsis2">
                          전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. 
                        </span>
                      </div>
                      <div class="img">
                        <img src="@/assets/images/data/img_thum.png" alt="블로그 리뷰 썸네일">
                      </div>
                    </a>
                  </li>
                </ul>
                <div class="btn_group">
                  <button type="button" class="btn md c05" id="btn_blogReviewPop" @click="$popup.open('#blogReviewPop', '#btn_blogReviewPop');">전체보기</button>
                </div>
              </div>
            </div>
          </div> <!-- // tabpanel -->
        </div> <!-- // tabpanel_wrap -->

      </div> <!-- // section -->

      <div class="section scroll_panel" role="tabpanel" aria-expanded="false" tabindex="0" id="scroll_panel_03">
        <h3 class="tit03">요금제</h3>

        <div class="item_list ty03">
            <compCard :cardInfo="{type: 'ty01', name: 'test1', detail: true }" />
          <compCard :cardInfo="{type: 'ty01', name: 'test2'}" />
        </div>

      </div> <!-- // section -->

      <div class="section scroll_panel" role="tabpanel" aria-expanded="false" tabindex="0" id="scroll_panel_04">
        <h3 class="tit03">이벤트</h3>

        <div class="item_list ty02">
          <ul>
            <li>
              <a href="javascript:void(0);" class="link_list">
                <span class="blind">이벤트 상세페이지 이동</span>
                <div class="thum_item">
                  <div class="thum_img">
                    <div class="thum_top">
                      <div class="bag_lft">
                        <div class="bag_evt_d"><b>D-1</b></div>
                        <div class="bag_evt_ty01"><b>이번달 이벤트</b></div>
                      </div>
                      <div class="bag_rit">
                        <img src="@/assets/images/data/logo_s_partner21.png" alt="tplus">
                      </div>
                    </div>
                    <img src="@/assets/images/data/img_card_thum07.png" alt="혜택 이벤트 썸네일">
                  </div>
                  <div class="thum_con">
                    <strong>무제한이 9천원대! 오직 알파에서만</strong>
                    <span>2023.02.02 - 2023.03.28</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" class="link_list">
                <span class="blind">이벤트 상세페이지 이동</span>
                <div class="thum_item">
                  <div class="thum_img">
                    <div class="thum_top">
                      <div class="bag_lft">
                        <div class="bag_evt_d"><b>D-5</b></div>
                        <div class="bag_evt_ty02"><b>친구초대</b></div>
                      </div>
                      <div class="bag_rit">
                        <img src="@/assets/images/data/logo_s_alpha_w.png" alt="tplus">
                      </div>
                    </div>
                    
                    <img src="@/assets/images/data/img_card_thum05.png" alt="혜택 이벤트 썸네일">
                  </div>
                  <div class="thum_con">
                    <strong>좋은 건 같이 써야죠~ 친구 추천 이벤트</strong>
                    <span>2023.02.02 - 2023.03.28</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" class="link_list">
                <span class="blind">이벤트 상세페이지 이동</span>
                <div class="thum_item">
                  <div class="thum_img">
                    <div class="thum_top">
                      <div class="bag_lft">
                        <div class="bag_evt_d"><b>D-24</b></div>
                        <div class="bag_evt_ty03"><b>제휴 이벤트</b></div>
                      </div>
                      <div class="bag_rit">
                        <img src="@/assets/images/data/logo_s_alpha_w.png" alt="tplus">
                      </div>
                    </div>
                    
                    <img src="@/assets/images/data/img_card_thum06.png" alt="혜택 이벤트 썸네일">
                  </div>
                  <div class="thum_con">
                    <strong>알파 신규회원 대상 개통 시 Npay 5천원 선착순 증정 리뷰이벤트</strong>
                    <span>2023.02.02 - 2023.03.28</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" class="link_list">
                <span class="blind">이벤트 상세페이지 이동</span>
                <div class="thum_item">
                  <div class="thum_img">
                    <div class="thum_top">
                      <div class="bag_lft">
                        <div class="bag_evt_d"><b>D-24</b></div>
                        <div class="bag_evt_ty04"><b>제휴카드</b></div>
                      </div>
                      <div class="bag_rit">
                        <img src="@/assets/images/data/logo_s_alpha_w.png" alt="tplus">
                      </div>
                    </div>
                      
                    <img src="@/assets/images/data/img_card_thum04.png" alt="혜택 이벤트 썸네일">
                  </div>
                  <div class="thum_con">
                    <strong>무제한이 9천원대! 오직 알파에서만</strong>
                    <span>2023.02.02 - 2023.03.28</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" class="link_list end_thum">
                <span class="blind">이벤트 상세페이지 이동</span>
                <b class="end_txt">본 이벤트는 종료되었습니다</b>
                <div class="thum_item">
                  <div class="thum_img">
                    <div class="thum_top">
                      <div class="bag_lft">
                        <div class="bag_evt_d"><b>D-24</b></div>
                        <div class="bag_evt_ty04"><b>제휴카드</b></div>
                      </div>
                      <div class="bag_rit">
                        <img src="@/assets/images/data/logo_s_alpha_w.png" alt="tplus">
                      </div>
                    </div>
                    
                    <img src="@/assets/images/data/img_card_thum04.png" alt="혜택 이벤트 썸네일">
                  </div>
                  <div class="thum_con">
                    <strong>무제한이 9천원대! 오직 알파에서만</strong>
                    <span>2023.02.02 - 2023.03.28</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <div class="btn_group">
            <a href="javascript:void(0);" role="button" class="btn md c05">더볼래요</a>
          </div>
        </div>

        <div class="no_dt_his">
          <p>
            등록된 이벤트가 없습니다
          </p>
        </div>

      </div> <!-- // section -->


    </div> <!-- // content -->
  </div> <!-- // container -->

</template>

<script>
import compCard from '@/components/Card.vue'

export default {
  name: "GuideSticky",
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },
      popupItem: ['userReviewPop', 'blogReviewPop'],
      tooltip: [false, false, false],

      sticky: {
        clickEvent: false,
        headerH: 0,
        tabH: 0,

        scrollTop: 0,
        stickyActiveSize: 0,
        activeIdx: 0,
        panelRealOffset: [0, 0, 0, 0],
        panelOffset: [0, 0, 0, 0],
      },
    }
  },
  methods: {
    onScroll(){
      this.sticky.scrollTop = Math.round(document.querySelector("html").scrollTop);
      this.getScrollData();

      if( this.sticky.scrollTop >= this.sticky.stickyActiveSize ){
        document.querySelector(".scroll_fixed").classList.add("on");
        document.querySelector(".scroll_fixed").style.height = `${this.sticky.tabH}px`;
        document.querySelector(".scroll_tab").style.top = `${this.sticky.headerH}px`;
      } else {
        document.querySelector(".scroll_fixed").classList.remove("on");
        document.querySelector(".scroll_fixed").style.height = "";
        document.querySelector(".scroll_tab").style.top = "";
      }

      if( this.sticky.scrollTop == this.sticky.panelOffset[this.sticky.activeIdx] ) this.sticky.clickEvent = false;
      if( this.sticky.clickEvent ) return;

      const gap = -10;
      if( this.sticky.scrollTop <= this.sticky.panelOffset[1] + gap ){            this.sticky.activeIdx = 0;
      } else if ( this.sticky.scrollTop <= this.sticky.panelOffset[2] + gap ){    this.sticky.activeIdx = 1;
      } else if ( this.sticky.scrollTop <= this.sticky.panelOffset[3] + gap ){    this.sticky.activeIdx = 2;
      } else {                                                      this.sticky.activeIdx = 3;
      }

      this.tabActive();

    },
    tabClick(e){
      this.sticky.clickEvent = true;
      const _this = e.target;
      const _this_li = _this.parentNode;
      const _li = document.querySelectorAll(".scroll_tab > ul > li");

      // let idx = 0;
      _li.forEach(( a, i ) => { if( a == _this_li ) this.sticky.activeIdx = i });

      this.setScroll();
    },
    tabActive(){
      const li = document.querySelectorAll(".scroll_tab > ul > li");
      const panel = document.querySelectorAll(".scroll_panel");

      li.forEach(( a, i )=>{
        const button = a.querySelector("button");
        if( i == this.sticky.activeIdx ){
          button.setAttribute("aria-selected", true);
          a.classList.add("on");
          panel[i].setAttribute("aria-expanded", true);
        } else {
          button.setAttribute("aria-selected", false);
          a.classList.remove("on");
          panel[i].setAttribute("aria-expanded", false);
        }
      });

    },
    setScroll(){
      document.querySelector("html").scrollTo(0, this.sticky.panelOffset[this.sticky.activeIdx]);
      this.tabActive();
    },
    getScrollData(){
      this.sticky.headerH = document.querySelector("header.header").offsetHeight;
      this.sticky.tabH = document.querySelector(".scroll_fixed").offsetHeight;

      this.sticky.panelRealOffset[0] = document.querySelector("#scroll_panel_01").offsetTop;
      this.sticky.panelRealOffset[1] = document.querySelector("#scroll_panel_02").offsetTop;
      this.sticky.panelRealOffset[2] = document.querySelector("#scroll_panel_03").offsetTop;
      this.sticky.panelRealOffset[3] = document.querySelector("#scroll_panel_04").offsetTop;

      this.sticky.panelRealOffset.forEach( (a, i) => {
        a = a - this.sticky.headerH - this.sticky.tabH;
        this.sticky.panelOffset[i] = a;
      })

      this.sticky.stickyActiveSize = document.querySelector(".scroll_fixed").offsetTop - this.sticky.headerH;
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);

    document.querySelector("html").style.scrollBehavior = "smooth";

    window.addEventListener("scroll", ()=>{ this.onScroll() });
    this.getScrollData();
  },
  components: {
    compCard,
  }
};
</script>
