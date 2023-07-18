<template>

  <div class="container">
    <div class="content cont_ratePlan" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>


      <div class="section"> <!-- bnr none/block-->
        <div class="swiper bnrSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:void(0);">
                <img src="@/assets/images/data/img_bnr01.jpg" alt="혜택을 가지고 다시 돌아왔어요! 데이터 프리덤 300GB" class="pc_hide">
                <img src="@/assets/images/data/img_bnr01_pc.jpg" alt="혜택을 가지고 다시 돌아왔어요! 데이터 프리덤 300GB" class="pc_show">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:void(0);">
                <img src="@/assets/images/data/img_bnr01.jpg" alt="혜택을 가지고 다시 돌아왔어요! 데이터 프리덤 300GB" class="pc_hide">
                <img src="@/assets/images/data/img_bnr01_pc.jpg" alt="혜택을 가지고 다시 돌아왔어요! 데이터 프리덤 300GB" class="pc_show">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:void(0);">
                <img src="@/assets/images/data/img_bnr01.jpg" alt="혜택을 가지고 다시 돌아왔어요! 데이터 프리덤 300GB" class="pc_hide">
                <img src="@/assets/images/data/img_bnr01_pc.jpg" alt="혜택을 가지고 다시 돌아왔어요! 데이터 프리덤 300GB" class="pc_show">
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div> <!-- // section -->

      <div class="crp_wrap">
        <div class="crp_l">

          <div class="section">

            <div class="scroll_fixed">
              <div class="filter_wrap">
                  
                <div class="filter_other">
                  <div class="item_list02">
                    <ul>
                      <li>
                        <div class="radio_ty00">
                          <input type="radio" id="filter_other_01" name="filter_other" checked>
                          <label for="filter_other_01">후불유심요금제</label>
                        </div>
                      </li>
                      <li>
                        <div class="radio_ty00">
                          <input type="radio" id="filter_other_02" name="filter_other">
                          <label for="filter_other_02">선불유심요금제</label>
                        </div>
                      </li>
                    </ul>
                  </div> <!-- // item_list02 -->
                </div>

                <div class="filter_tit">추천 카테고리에요</div>

                <div class="tag_list multi tagList variable">
                  <button type="button" aria-expanded="false" @click="$tag.variable.click"><span class="blind">펼쳐 보기</span></button>
                  <ul>
                    <li role="none" class="other">
                      <button type="button" aria-haspopup="true">후불유심요금제</button>
                    </li>
                    <li role="none" class="on"><button type="button" role="option" aria-selected="true" @click="$tag.click">지금 HOT한</button></li>
                    <li role="none"><button type="button" role="option" aria-selected="false" @click="$tag.click">이달의 추천</button></li>
                    <li role="none"><button type="button" role="option" aria-selected="false" @click="$tag.click">데이터x통화 무제한</button></li>
                    <li role="none"><button type="button" role="option" aria-selected="false" @click="$tag.click">사은품 팡팡</button></li>
                    <li role="none"><button type="button" role="option" aria-selected="false" @click="$tag.click">인터넷 결합 요금제</button></li>
                    <li role="none"><button type="button" role="option" aria-selected="false" @click="$tag.click">카톡/인터넷용</button></li>
                    <li role="none"><button type="button" role="option" aria-selected="false" @click="$tag.click">5G 요금제</button></li>
                    <li role="none"><button type="button" role="option" aria-selected="false" @click="$tag.click">부모님 추천</button></li>
                    <li role="none"><button type="button" role="option" aria-selected="false" @click="$tag.click">초저가요금제</button></li>
                    <li role="none"><button type="button" role="option" aria-selected="false" @click="$tag.click">통화무제한</button></li>
                  </ul>
                  <div class="other_pop">
                    <ul role="listbox">
                      <li role="none" class="on"><button type="button" role="option" aria-selected="true">후불유심요금제</button></li>
                      <li role="none"><button type="button" role="option" aria-selected="false">선불유심요금제</button></li>
                    </ul>
                  </div>
                </div>

                <div class="filter_tit">골라서 보고싶어요</div>

                <div class="check_wrap">
                  <div class="inner">
                    <div class="check_st">
                      <input type="checkbox" id="checkbox01_01" name="">
                      <label for="checkbox01_01">U+결합요금제</label>
                    </div>
                    <div class="check_st">
                      <input type="checkbox" id="checkbox01_02" name="">
                      <label for="checkbox01_02">바로배송</label>
                    </div>
                  </div>
                  <button type="button" class="filter_detail on" id="btn_filterPop" @click="$popup.open('#filterPop', '#btn_filterPop');">꼼꼼하게 찾기</button> <!-- 꼼꼼하게 찾기 옵션 유 = class="filter_detail on" -->
                  
                  <div class="filter_keyword_pc">
                    <div class="tag_list02">
                      <ul>
                        <li><button type="button" @click="$tag.delete">데이터 무제한 <span class="blind">삭제</span></button></li>
                        <li><button type="button" @click="$tag.delete">10Mbps <span class="blind">삭제</span></button></li>
                        <li><button type="button" @click="$tag.delete">데이터 무제한 <span class="blind">삭제</span></button></li>
                        <li><button type="button" @click="$tag.delete">10Mbps <span class="blind">삭제</span></button></li>
                        <li><button type="button" @click="$tag.delete">데이터 무제한 <span class="blind">삭제</span></button></li>
                        <li><button type="button" @click="$tag.delete">10Mbps <span class="blind">삭제</span></button></li>
                        <li><button type="button" @click="$tag.delete">데이터 무제한 <span class="blind">삭제</span></button></li>
                        <li><button type="button" @click="$tag.delete">10Mbps <span class="blind">삭제</span></button></li>
                        <li><button type="button" @click="$tag.delete">데이터 무제한 <span class="blind">삭제</span></button></li>
                        <li><button type="button" @click="$tag.delete">10Mbps <span class="blind">삭제</span></button></li>
                        <li><button type="button" @click="$tag.delete">데이터 무제한 <span class="blind">삭제</span></button></li>
                        <li><button type="button" @click="$tag.delete">10Mbps <span class="blind">삭제</span></button></li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div> <!-- // filter_wrap -->
            </div> <!-- // scroll_fixed -->

            <div class="partner_bnr">
              <a href="javascript:void(0);">
                <div class="partner">
                  <img src="@/assets/images/data/logo_s_partner06.png" alt="프리티">
                  <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
                </div>
                <strong>프리티 자세히보기</strong>
              </a>
            </div>

            <div class="bnr_area">
              <a href="javascript:void(0);">
                <img src="@/assets/images/data/img_bnr02.jpg" alt="나에게 꼭 맞는 요금제 +알파에서 간편하게 찾아보세요!">
              </a>
            </div>

          </div> <!-- // section -->

        </div> <!-- // crp_l -->
        <div class="crp_r">

          <div class="section">

            <div class="sort_wrap">
              <div>총 1,438개</div>
              <div>
                <div class="sort_pop">
                  <button type="button" class="sort_btn" aria-haspopup="true" @click="$sort.open">추천 순</button>
                  <div class="sort_layer">
                    <div class="sort_layer_wrap">
                      <div class="sort_layer_header">
                        <h3>안내</h3>
                      </div>
                      <div class="sort_layer_content">
                        <ul class="sort_group" role="listbox">
                          <li role="none" class="on">
                            <button type="button" role="option" aria-selected="true" @click="$sort.select">추천 순</button>
                          </li>
                          <li role="none">
                            <button type="button" role="option" aria-selected="false" @click="$sort.select">낮은 가격 순</button>
                          </li>
                          <li role="none">
                            <button type="button" role="option" aria-selected="false" @click="$sort.select">할인 적용 후 낮은 가격 순</button>
                          </li>
                          <li role="none">
                            <button type="button" role="option" aria-selected="false" @click="$sort.select">선택 순</button>
                          </li>
                          <li role="none">
                            <button type="button" role="option" aria-selected="false" @click="$sort.select">데이터 많은 순</button>
                          </li>
                        </ul>
                      </div> <!-- // item_list -->
                      <button type="button" class="sort_layer_close" data-action="close" @click="$sort.close"><span class="blind">팝업 닫기</span></button>
                    </div>
                  </div> <!-- // sort_layer -->
                </div> <!-- // sort_pop -->
              </div>
            </div> <!-- // sort_wrap -->

            <div class="item_list ty02">
              <compCard :cardInfo="{type: 'ty01', name: 'pr01', detail: false }" />
              <compCard :cardInfo="{type: 'ty01', name: 'pr02', detail: false }" />
              <compCard :cardInfo="{type: 'ty01', name: 'pr03', detail: false }" />
              <compCard :cardInfo="{type: 'ty01', name: 'pr04', detail: false }" />
              <compCard :cardInfo="{type: 'ty01', name: 'pr05', detail: false }" />
              <compCard :cardInfo="{type: 'ty01', name: 'pr06', detail: false }" />
              <compCard :cardInfo="{type: 'ty01', name: 'pr07', detail: false }" />
              <compCard :cardInfo="{type: 'ty01', name: 'pr08', detail: false }" />
              <compCard :cardInfo="{type: 'ty01', name: 'pr09', detail: false }" />
              <compCard :cardInfo="{type: 'ty01', name: 'pr10', detail: false }" />

              <div class="btn_group">
                <a href="javascript:void(0);" role="button" class="btn md c05">더볼래요</a>
              </div>

              <div class="pagination">
                <button type="button" class="first" aria-label="처음 페이지로 이동">처음 페이지로 이동</button>
                <button type="button" class="prev" aria-label="이전 페이지로 이동">이전 페이지로 이동</button>
                <ul>
                  <li><button type="button" aria-label="페이지 1">1</button></li>
                  <li class="on"><button type="button" aria-label="페이지 2" title="현재 페이지">2</button></li>
                  <li><button type="button" aria-label="페이지 3">3</button></li>
                  <li><button type="button" aria-label="페이지 4">4</button></li>
                  <li><button type="button" aria-label="페이지 5">5</button></li>
                  <li><button type="button" aria-label="페이지 6">6</button></li>
                  <li><button type="button" aria-label="페이지 7">7</button></li>
                  <li><button type="button" aria-label="페이지 8">8</button></li>
                  <li><button type="button" aria-label="페이지 9">9</button></li>
                  <li><button type="button" aria-label="페이지 10">10</button></li>
                </ul>
                <button type="button" class="next" aria-label="다음 페이지로 이동">다음 페이지로 이동</button>
                <button type="button" class="last" aria-label="마지막 페이지로 이동">마지막 페이지로 이동</button>
              </div>

            </div> <!-- // item_list -->

          </div> <!-- // section -->

          <div class="section pc_hide">
            <div class="bnr_area">
              <a href="javascript:void(0);">
                <img src="@/assets/images/data/img_bnr02.jpg" alt="나에게 꼭 맞는 요금제 +알파에서 간편하게 찾아보세요!">
              </a>
            </div>
          </div> <!-- // section -->

          <div class="section">
            <div class="tit_wrap">
              <h3 class="tit03">내가 찜한 요금제</h3>
              <a href="javascript:void(0);" class="more">더보기</a>
            </div>

            <div class="swiper cardSwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="javascript:void(0);">
                    <div class="plan_item">
                      <div class="card_top">
                        <div class="partner">
                          <img src="@/assets/images/data/logo_s_partner06.png" alt="프리티">
                          <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
                        </div>
                      </div>
                      <div class="card_mid">
                        <span class="plan_tit">데이터안심15G+</span>
                        <strong class="plan_tit_sub">월 11GB + 매일 2GB + 3Mbps</strong>
                      </div>
                      <div class="combi">
                        <div class="combi_inner">
                          <strong>월 10,890원</strong>
                          <span class="period">6개월 이후 38,900원</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0);">
                    <div class="plan_item">
                      <div class="card_top">
                        <div class="partner">
                          <img src="@/assets/images/data/logo_s_partner06.png" alt="프리티">
                          <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
                        </div>
                      </div>
                      <div class="card_mid">
                        <span class="plan_tit">데이터안심15G+</span>
                        <strong class="plan_tit_sub">월 11GB + 매일 2GB + 3Mbps</strong>
                      </div>
                      <div class="combi">
                        <div class="combi_inner">
                          <strong>월 10,890원</strong>
                          <span class="period">6개월 이후 38,900원</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0);">
                    <div class="plan_item">
                      <div class="card_top">
                        <div class="partner">
                          <img src="@/assets/images/data/logo_s_partner06.png" alt="프리티">
                          <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
                        </div>
                      </div>
                      <div class="card_mid">
                        <span class="plan_tit">데이터안심15G+</span>
                        <strong class="plan_tit_sub">월 11GB + 매일 2GB + 3Mbps</strong>
                      </div>
                      <div class="combi">
                        <div class="combi_inner">
                          <strong>월 10,890원</strong>
                          <span class="period">6개월 이후 38,900원</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0);">
                    <div class="plan_item">
                      <div class="card_top">
                        <div class="partner">
                          <img src="@/assets/images/data/logo_s_partner06.png" alt="프리티">
                          <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
                        </div>
                      </div>
                      <div class="card_mid">
                        <span class="plan_tit">데이터안심15G+</span>
                        <strong class="plan_tit_sub">월 11GB + 매일 2GB + 3Mbps</strong>
                      </div>
                      <div class="combi">
                        <div class="combi_inner">
                          <strong>월 10,890원</strong>
                          <span class="period">6개월 이후 38,900원</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <!-- swiper_control -->
              <div class="card_swiper_control">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
              <!-- //swiper_control -->
            </div>

          </div> <!-- // section -->

          <div class="section">
            <div class="tit_wrap">
              <h3 class="tit03">최근 본 요금제</h3>
              <a href="javascript:void(0);" class="more">더보기</a>
            </div>

            <div class="swiper cardSwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="javascript:void(0);">
                    <div class="plan_item">
                      <div class="card_top">
                        <div class="partner">
                          <img src="@/assets/images/data/logo_s_partner06.png" alt="프리티">
                          <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
                        </div>
                      </div>
                      <div class="card_mid">
                        <span class="plan_tit">데이터안심15G+</span>
                        <strong class="plan_tit_sub">월 11GB + 매일 2GB + 3Mbps</strong>
                      </div>
                      <div class="combi">
                        <div class="combi_inner">
                          <strong>월 10,890원</strong>
                          <span class="period">6개월 이후 38,900원</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0);">
                    <div class="plan_item">
                      <div class="card_top">
                        <div class="partner">
                          <img src="@/assets/images/data/logo_s_partner06.png" alt="프리티">
                          <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
                        </div>
                      </div>
                      <div class="card_mid">
                        <span class="plan_tit">데이터안심15G+</span>
                        <strong class="plan_tit_sub">월 11GB + 매일 2GB + 3Mbps</strong>
                      </div>
                      <div class="combi">
                        <div class="combi_inner">
                          <strong>월 10,890원</strong>
                          <span class="period">6개월 이후 38,900원</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0);">
                    <div class="plan_item">
                      <div class="card_top">
                        <div class="partner">
                          <img src="@/assets/images/data/logo_s_partner06.png" alt="프리티">
                          <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
                        </div>
                      </div>
                      <div class="card_mid">
                        <span class="plan_tit">데이터안심15G+</span>
                        <strong class="plan_tit_sub">월 11GB + 매일 2GB + 3Mbps</strong>
                      </div>
                      <div class="combi">
                        <div class="combi_inner">
                          <strong>월 10,890원</strong>
                          <span class="period">6개월 이후 38,900원</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0);">
                    <div class="plan_item">
                      <div class="card_top">
                        <div class="partner">
                          <img src="@/assets/images/data/logo_s_partner06.png" alt="프리티">
                          <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
                        </div>
                      </div>
                      <div class="card_mid">
                        <span class="plan_tit">데이터안심15G+</span>
                        <strong class="plan_tit_sub">월 11GB + 매일 2GB + 3Mbps</strong>
                      </div>
                      <div class="combi">
                        <div class="combi_inner">
                          <strong>월 10,890원</strong>
                          <span class="period">6개월 이후 38,900원</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <!-- swiper_control -->
              <div class="card_swiper_control">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
              <!-- //swiper_control -->
            </div>

          </div> <!-- // section -->

        </div> <!-- // crp_r -->
      </div> <!-- // crp_wrap -->

      <div class="bottom_float">
        <div class="inner">
          <div class="compare_pop" :class="{ 'open' : this.state.compare }">
            <button type="button" class="comp_hea" @click="compare">
              <span>비교하기</span>
              <em>1</em>
            </button>
            <Transition name="compCon">
              <div v-if="this.state.compare">
                <div class="comp_con">
                  <p class="info pc_hide">최대 2개의 상품을 비교할 수 있습니다</p>
                  <p class="info pc_show">최대 3개의 상품을 비교할 수 있습니다</p>
                  <div class="comp_item_area">
                    <div class="comp_item">
                      <div>
                        <em>인스 모바일 인터넷결합 5G 150GB+</em>
                        <strong>월 <span>14,900</span>원</strong>
                        <button type="button">삭제</button>
                      </div>
                    </div>
                    <div class="comp_item">
                      <p>요금제를 선택해주세요</p>
                    </div>
                    <div class="comp_item pc_show">
                      <p>요금제를 선택해주세요</p>
                    </div>
                  </div>
                  <div class="btn_group">
                    <button type="button" class="btn lg c01" id="btn_comparePop" @click="$popup.open('#comparePop', '#content');">비교하기</button>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div> <!-- // bottom_float -->


    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
import compCard from '@/components/Card.vue'

export default {
  name: 'ALFM-PR01-PG00',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '요금제 목록', floatMenu: 'none' },
      popupItem: ['filterPop', 'comparePop'],
      state: { compare: false, }
    }
  },
  methods: {
    compare(){
      this.state.compare = !this.state.compare;
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);
    // this.$swiper.cardSwiper();
    // this.$swiper.bnrSwiper();
  },
  components: {
    compCard
  }
}
</script>
  