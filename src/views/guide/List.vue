<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">List</div>
      
        <div class="section">
          <h3 class="tit02">sort</h3>

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

          <div class="sort_wrap">
            <div>총 1,438개</div>
            <div>
              <ul class="sort_group" role="listbox">
                <li role="none" class="on">
                  <button type="button" role="option" aria-selected="true">추천 순</button>
                </li>
                <li role="none">
                  <button type="button" role="option" aria-selected="false">마감일 순</button>
                </li>
              </ul>
            </div>
          </div>

          <div class="sort_wrap">
            <div>총 1342건 검색되었습니다</div>
          </div>

        </div> <!-- // section -->

        <div class="section">
          <h3 class="tit02">Ratings (vuetify)</h3>

					<div class="eval_wrap">
            <div class="eval_item">
              <h3 class="tit02">개통과정은 잘 되었나요?</h3>
              <div class="eval_star">
                <v-rating v-model="rating"></v-rating>
              </div>
              <div class="eval_desc">{{rating}}</div>
            </div>
            <div class="eval_item">
              <h3 class="tit02">개통과정은 잘 되었나요?</h3>
              <div class="eval_star">
                <v-rating v-model="rating2" item-aria-label="custom icon label text {0} of {1}"></v-rating>
              </div>
              <div class="eval_desc">{{rating2}}</div>
            </div>
					</div>

        </div> <!-- // section -->

        <div class="section">
          <h3 class="tit02">line_list</h3>

          <div class="line_list">
            <ul>
              <li>
                <a href="javascript:void(0);" class="list_con01">
                  <span class="tit">[안내] eSIM 안내</span>
                  <span class="date">2022.02.02</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="list_con01">
                  <span class="date_rel">발표일 2023.10.10</span>
                  <span class="tit">[안내] eSIM 안내</span>
                  <span class="date">2022.02.02</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="list_con01">
                  <span class="tit ty02">모두의 유심, 원칩 | 택배배송</span>
                  <span class="date">2022.02.02</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="list_con02">
                  <div class="cus">
                    <span class="name">김*파</span>
                    <div class="star_box">
                      <div class="star"></div>
                      <div class="star_active" style="width:40%;"></div>
                    </div>
                    <span class="score">0.0</span>
                    <span class="date">2023.04.11</span>
                  </div>
                  <span class="tit">[안내] eSIM 안내</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="list_con02">
                  <div class="cus">
                    <span class="name">김*파</span>
                  </div>
                  <span class="tit">댓글을 남겨주세요. (50자 이내) 50자 이내로 댓글을 남겨주세요. 댓글을 등록 하세요.</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="list_con02">
                  <div class="cus">
                    <span class="name">김*파</span>
                  </div>
                  <span class="tit reg">관리자에 의해 규제된 댓글입니다.</span>
                </a>
              </li>
              <li>
                <div class="list_con02">
                  <div class="cus comnt_cor">
                    <span class="name">김*파</span>
                    <div class="comnt_box">
                      <button type="button" id="comnt_mod">수정</button>
                      <button type="button" id="comnt_del">삭제</button>
                    </div>
                  </div>
                  <span class="tit" id="comnt_tex">댓글을 남겨주세요. (50자 이내) 50자 이내로 댓글을 남겨주세요. 댓글을 등록 하세요.</span>
                  <div class="textarea_box ty02" style="display:none;">
                    <textarea class="textarea" placeholder="문의 내용을 입력해 주세요" rows="1" maxlength="50"></textarea>
                    <div class="byte_check">
                      <span class="count">0</span><span class="total">50</span>
                    </div>
                    <button id="comnt_sub">등록</button>
                </div>
                </div>

              </li>
              <li>
                <a href="javascript:void(0);" class="list_con03">
                  <div class="list_lft">
                    <div class="cus">
                      <span class="name">김*파</span>
                      <span class="date">2023.04.11</span>
                    </div>
                    <span class="tit">가격도 저렴하고 끊김도 없습니다. 다만 휴일 근처에개통이 조금 오래걸리는 것이 불편했습...</span>
                  </div>
                  <div class="img">
                    <img src="/src/assets/images/data/img_thum.png" alt="블로그 리뷰 썸네일">
                  </div>
                </a>
              </li>
              <li>
                <div class="list_con03">
                  <div class="list_lft">
                    <div class="cus">
                      <span class="tit_bo">GS25상일동아점</span>
                      <strong class="tit_inven fc01">재고 4개</strong>
                    </div>
                    <span class="tit ty03">서울 강동구 상암로 405, 제101동 제상가1호 (상일동 473, 외 1필지 상일동아아파트)</span>
                    <div class="bag_list">
                      <span class="bag_clr_c02">유심판매</span>
                      <span class="bag_clr_c03">바로픽업</span>
                    </div>
                  </div>
                  <div class="bo_btn_list">
                    <button type="button" class="bo_btn_local">
                      <span class="blind">지도 보기</span>
                    </button>
                    <button type="button" class="bo_btn_call">
                      <span class="blind">전화 걸기</span>
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <a href="javascript:void(0);" class="list_con02">
                  <div class="addr_list"><span class="bag_clr_c09">도로명</span>⁠경기도 성남시 분당구 판교역로 164</div>
                  <div class="addr_list"><span class="bag_clr_c07">지번</span>⁠경기도 성남시 분당구 삼평동 640</div>
                </a>
              </li>
            </ul>
          </div>
          <div class="btn_group pc_hide mgt12">
            <a href="javascript:void(0);" role="button" class="btn md c05">더볼래요</a>
          </div>

          <div class="pagination pc_show">
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

        </div> <!-- // section -->

        <div class="section">
          <h3 class="tit02">item_list ty03</h3>

          <div class="item_list ty03">
            <p>ty01 (detail: true)</p>
            <compCard :cardInfo="{type: 'ty01', name: 'test1', detail: true }" />
            
            <br>
            <p>ty01 - lanking</p>
            <compCard :cardInfo="{type: 'ty01', lanking: 1, name: 'test11'}" />

            <br>
            <p>ty02</p>
            <compCard :cardInfo="{type: 'ty02', name: 'test2'}" />
          </div>
        </div> <!-- // section -->

        <div class="section">
          <h3 class="tit03">이벤트와 관련 있는 요금제에요</h3>
          <a href="/guide/swiper" target="_blank">swiper page로 이동 (/guide/swiper)</a>
        </div>

        <div class="section">
          <h3 class="tit02">None Data</h3>

          <div class="no_dt_sch">
            <p><span>날씨</span>에 대한 검색 결과가 없습니다.</p>
          </div>
          <div class="no_dt_his">
            <strong>
              지금 바로 셀프개통하고 <br>
              사용자 평점·후기를 남겨보세요!
            </strong>
            <p>
              일시적으로 추천활동 내역을 불러올 수 없습니다 <br>
              나중에 다시 시도해 주세요
            </p>
          </div>
        </div> <!-- // section -->

        <div class="section">
          <h3 class="tit02">Share List</h3>

          <div class="cir_icon_link">
            <ul>
              <li>
                <a href="javascript:void(0);" class="facebook_icon_link">
                  <span>페이스북</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="kakao_icon_link">
                  <span>카카오톡</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="url_icon_link">
                  <span>URL 복사</span>
                </a>
              </li>
            </ul>
          </div>
        </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import compCard from '@/components/Card.vue'

export default {
  name: 'GuideTemplate',
  emits: ['popupItem', 'setLayout'],
	data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },
			rating: 3,
			rating2: 4,
      flag: [false, false],
      tooltip: [false, false, false],
    }
  },
  components: {
    compCard,
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>
