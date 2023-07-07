<template>
<div>
  <div class="pop_layer alert" id="popup01" v-show="popup.popup01"> <!-- alert, normal, full -->
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>안내</h3>
      </div>
      <div class="pop_content">
          <div class="info_con">
            지금 팝업을 닫으시면, <br>꼭 맞는 요금제 찾기가 중단되요. <br>정말 닫으시겠어요?
          </div>
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn sm c07" data-action="close" @click="$popup.close('#popup01', '#btn_popup01')">취소</button>
          <button type="button" class="btn sm c02" @click="$popup.close('#popup01', '#btn_popup01'); $popup.close('#popup03', '#btn_popup01');">확인</button>
        </div>
      </div>
    </div>
  </div> <!-- // pop_layer -->


  <div class="pop_layer normal" id="popup02" v-show="popup.popup02">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>안내</h3>
      </div>
      <div class="pop_content">
        content <br>content <br>content <br>content <br>content <br>content <br>content <br>content <br>content <br>content

        <br><br>
        데이터 소진 시 유튜브 화질 1080p로
        <span class="tooltip">
          <button type="button" aria-expanded="false"><span class="blind">툴팁</span></button>
          <span class="info" role="region">데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요</span>
        </span>
        원활히 볼 수 있어요

        <br>content <br>content <br>content <br>content <br>content <br>content <br>content <br>content <br>content
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn md c03">확인</button>
        </div>
      </div>
      <button type="button" class="pop_close" data-action="close" @click="$popup.close('#popup02', '#btn_popup02')"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->


  <div class="pop_layer full" id="popup03" v-show="popup.popup03">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>안내</h3>
      </div>
      <div class="pop_content">
        <div class="section">
            
          <div class="btn_group">
            <button type="button" class="btn lg c01" id="btn_popup04" @click="$popup.open('#popup01', '#btn_popup04');">팝업 and 팝업</button>
          </div>

        </div> <!-- // section -->
        <div class="section">
          section <br>content <br>content <br>content <br>content <br>content <br>content <br>content <br>content <br>content

          <br><br>
          데이터 소진 시 유튜브 화질 1080p로
          <span class="tooltip">
            <button type="button" aria-expanded="false"><span class="blind">툴팁</span></button>
            <span class="info" role="tooltip">데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요</span>
          </span>
          원활히 볼 수 있어요

          <br>content <br>content <br>content <br>content <br>content <br>content <br>content <br>content <br>content
        </div> <!-- // section -->
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn lg c03">확인</button>
        </div>
        <div class="btn_group">
          <button type="button" class="btn lg c03">확인</button>
        </div>
      </div>
      <button type="button" class="pop_close" data-action="close" @click="$popup.close('#popup03', '#btn_popup03');"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->
  

  <div class="pop_layer notice" id="noticePop" v-show="popup.noticePop">
    <div class="pop_wrap">
      <div class="pop_content">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:void(0);">
                <img src="@/assets/images/data/img_notice.jpg" alt="개통 시 Npay 5천원 선착순 증정 리뷰이벤트 2023.02.02 - 2023.03.28">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:void(0);">
                <img src="@/assets/images/data/img_notice.jpg" alt="개통 시 Npay 5천원 선착순 증정 리뷰이벤트 2023.02.02 - 2023.03.28">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:void(0);">
                <img src="@/assets/images/data/img_notice.jpg" alt="개통 시 Npay 5천원 선착순 증정 리뷰이벤트 2023.02.02 - 2023.03.28">
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="pop_footer">
        <button type="button" @click="$popup.close('#noticePop', '#btn_noticePop');">오늘은 더 안볼래요</button>
        <button type="button" class="close" data-action="close" @click="$popup.close('#noticePop', '#btn_noticePop');">닫기</button>
      </div>
    </div>
  </div> <!-- // pop_layer -->


  <!-- 공유하기 -->
  <div class="pop_layer alert" id="sharePop" v-show="popup.sharePop">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>공유하기</h3>
      </div>
      <div class="pop_content">
        <div class="cir_icon_link">
          <ul>
            <li>
              <a href="javascript:void(0);" class="facebook_icon_link"> <!-- onclick="popUp.close('#popup01', '#btn_popup01');" -->
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
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn sm c02" data-action="close" @click="$popup.close('#sharePop', '#btn_share')">닫기</button>
        </div>
      </div>
    </div>
  </div> <!-- // pop_layer -->


  <div class="pop_layer normal filter_pop" id="filterPop" v-show="popup.filterPop">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>꼼꼼하게 찾기</h3>
      </div>
      <div class="pop_content">
        <div class="tab_list02">
          <ul role="tablist">
            <li role="none" class="active on">
              <button type="button" role="tab" aria-selected="true" aria-controls="tab_panel_filter_01" @click="$tab.click">데이터</button>
            </li>
            <li role="none" class="active">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_filter_02" @click="$tab.click">소진시 속도</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_filter_03" @click="$tab.click">가격</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_filter_04" @click="$tab.click">통화량</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_filter_05" @click="$tab.click">문자량</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_filter_06" @click="$tab.click">파트너사</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_filter_07" @click="$tab.click">통신기술</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_filter_08" @click="$tab.click">할인 기간</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_filter_09" @click="$tab.click">부가서비스</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_filter_10" @click="$tab.click">전용요금제</button>
            </li>
          </ul>
        </div>

        <div class="tabpanel_wrap">
          <div role="tabpanel" aria-expanded="true" tabindex="0" id="tab_panel_filter_01">
            <h3 class="blind">데이터</h3>
            
            <div class="item_list02">
              <ul>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio01_01" name="filter_radio01" checked>
                    <label for="filter_radio01_01">전체</label>
                  </div>
                </li>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio01_02" name="filter_radio01">
                    <label for="filter_radio01_02">데이터 무제한</label>
                  </div>
                </li>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio01_03" name="filter_radio01">
                    <label for="filter_radio01_03">1GB 미만</label>
                  </div>
                </li>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio01_04" name="filter_radio01">
                    <label for="filter_radio01_04">1~5GB</label>
                  </div>
                </li>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio01_05" name="filter_radio01">
                    <label for="filter_radio01_05">5~15GB</label>
                  </div>
                </li>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio01_06" name="filter_radio01">
                    <label for="filter_radio01_06">15~50GB</label>
                  </div>
                </li>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio01_07" name="filter_radio01">
                    <label for="filter_radio01_07">50~100GB</label>
                  </div>
                </li>
              </ul>
            </div> <!-- // item_list02 -->
          </div> <!-- // tabpanel -->

          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_filter_02">
            <h3 class="blind">소진시 속도</h3>
            
            <div class="item_list ty03">
              <ul>
                <li>
                  <div class="check_st st02">
                    <input type="checkbox" id="filter_checkbox01_01" name="">
                    <label for="filter_checkbox01_01">
                      1Mbps 미만
                      <span>웹서핑이 느릴 수 있어요</span>
                    </label>
                  </div>
                </li>
                <li>
                  <div class="check_st st02">
                    <input type="checkbox" id="filter_checkbox01_02" name="">
                    <label for="filter_checkbox01_02">
                      1Mbps
                      <span>카톡 텍스트는 되지만 사진은 느려요</span>
                    </label>
                  </div>
                </li>
                <li>
                  <div class="check_st st02">
                    <input type="checkbox" id="filter_checkbox01_03" name="">
                    <label for="filter_checkbox01_03">
                      3Mbps
                      <span>유튜브 p720화질을 무난히 볼 수 있어요</span>
                    </label>
                  </div>
                </li>
                <li>
                  <div class="check_st st02">
                    <input type="checkbox" id="filter_checkbox01_04" name="">
                    <label for="filter_checkbox01_04">
                      5Mbps
                      <span>유튜브 p1080화질을 무난히 볼 수 있어요</span>
                    </label>
                  </div>
                </li>
                <li>
                  <div class="check_st st02">
                    <input type="checkbox" id="filter_checkbox01_05" name="">
                    <label for="filter_checkbox01_05">
                      10Mbps
                      <span>유튜브 p1080화질을 아주 원활히 볼 수 있어요</span>
                    </label>
                  </div>
                </li>
              </ul>
            </div> <!-- // item_list ty03 -->
          </div> <!-- // tabpanel -->

          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_filter_03">
            <h3 class="blind">가격</h3>

            <div class="range_area">
              <div class="value">
                <input type="text" id="range_val" :value="`${value[0]}원 ~ ${value[1]}원`" readonly>
              </div>
              <div class="slider">

                <v-range-slider v-model="value" min="0" max="60000" step="1000" track-color="#ddd" track-fill-color="#fc6969" strict></v-range-slider>
                
                <!-- <div id="filter_range"></div> -->
              </div>
            </div>
            
            <div class="item_list02">
              <ul>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio02_01" name="filter_radio02" data-min="0" data-max="60000" checked @change="rangeChange">
                    <label for="filter_radio02_01">전체</label>
                  </div>
                </li>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio02_02" name="filter_radio02" data-min="0" data-max="10000" @change="rangeChange">
                    <label for="filter_radio02_02">1만원 이하</label>
                  </div>
                </li>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio02_03" name="filter_radio02" data-min="10000" data-max="20000" @change="rangeChange">
                    <label for="filter_radio02_03">1만원 대</label>
                  </div>
                </li>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio02_04" name="filter_radio02" data-min="20000" data-max="30000" @change="rangeChange">
                    <label for="filter_radio02_04">2만원 대</label>
                  </div>
                </li>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio02_05" name="filter_radio02" data-min="30000" data-max="40000" @change="rangeChange">
                    <label for="filter_radio02_05">3만원 대</label>
                  </div>
                </li>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio02_06" name="filter_radio02" data-min="40000" data-max="50000" @change="rangeChange">
                    <label for="filter_radio02_06">4만원 대</label>
                  </div>
                </li>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio02_07" name="filter_radio02" data-min="50000" data-max="100000" @change="rangeChange">
                    <label for="filter_radio02_07">5만원 이상</label>
                  </div>
                </li>
              </ul>
            </div> <!-- // item_list02 -->
          </div> <!-- // tabpanel -->

          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_filter_04">
            <h3 class="blind">통화량</h3>
            
            <div class="item_list ty03">
              <ul>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox02_01" name="">
                    <label for="filter_checkbox02_01">통화 무제한</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox02_02" name="">
                    <label for="filter_checkbox02_02">60분 미만</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox02_03" name="">
                    <label for="filter_checkbox02_03">60-180분</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox02_04" name="">
                    <label for="filter_checkbox02_04">180-300분</label>
                  </div>
                </li>
              </ul>
            </div> <!-- // item_list ty03 -->
          </div> <!-- // tabpanel -->

          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_filter_05">
            <h3 class="blind">문자량</h3>
            
            <div class="item_list ty03">
              <ul>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox03_01" name="">
                    <label for="filter_checkbox03_01">문자 무제한</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox03_02" name="">
                    <label for="filter_checkbox03_02">50건 미만</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox03_03" name="">
                    <label for="filter_checkbox03_03">50-100건</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox03_04" name="">
                    <label for="filter_checkbox03_04">100-300건</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox03_05" name="">
                    <label for="filter_checkbox03_05">300-500건</label>
                  </div>
                </li>
              </ul>
            </div> <!-- // item_list ty03 -->
          </div> <!-- // tabpanel -->

          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_filter_06">
            <h3 class="blind">파트너사</h3>
            
            <div class="item_list02 ty02">
              <ul>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_01" name="">
                    <label for="filter_checkbox04_01">A모바일</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_02" name="">
                    <label for="filter_checkbox04_02">FLASH모바일</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_03" name="">
                    <label for="filter_checkbox04_03">KG모빌리언스</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_04" name="">
                    <label for="filter_checkbox04_04">U+유모바일</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_05" name="">
                    <label for="filter_checkbox04_05">WELL</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_06" name="">
                    <label for="filter_checkbox04_06">freeT</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_07" name="">
                    <label for="filter_checkbox04_07">mobing</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_08" name="">
                    <label for="filter_checkbox04_08">리브모바일</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_09" name="">
                    <label for="filter_checkbox04_09">마블프로듀스</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_10" name="">
                    <label for="filter_checkbox04_10">밸류컴</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_11" name="">
                    <label for="filter_checkbox04_11">서경모바일</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_12" name="">
                    <label for="filter_checkbox04_12">슈가모바일</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_13" name="">
                    <label for="filter_checkbox04_13">스노우맨</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_14" name="">
                    <label for="filter_checkbox04_14">스마텔</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_15" name="">
                    <label for="filter_checkbox04_15">아이즈모바일</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_16" name="">
                    <label for="filter_checkbox04_16">앤텔레콤</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_17" name="">
                    <label for="filter_checkbox04_17">에스원안심모바일</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_18" name="">
                    <label for="filter_checkbox04_18">여유텔레콤</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_19" name="">
                    <label for="filter_checkbox04_19">이야기모바일</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_20" name="">
                    <label for="filter_checkbox04_20">이지모바일</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_21" name="">
                    <label for="filter_checkbox04_21">인스모바일</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_22" name="">
                    <label for="filter_checkbox04_22">티플러스</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox04_23" name="">
                    <label for="filter_checkbox04_23">헬로모바일</label>
                  </div>
                </li>
              </ul>
            </div> <!-- // item_list02 ty02 -->
          </div> <!-- // tabpanel -->

          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_filter_07">
            <h3 class="blind">통신기술</h3>
            
            <div class="item_list02">
              <ul>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio03_01" name="filter_radio03" checked>
                    <label for="filter_radio03_01">전체</label>
                  </div>
                </li>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio03_02" name="filter_radio03">
                    <label for="filter_radio03_02">4G(LTE)</label>
                  </div>
                </li>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio03_03" name="filter_radio03">
                    <label for="filter_radio03_03">5G</label>
                  </div>
                </li>
              </ul>
            </div> <!-- // item_list02 -->
          </div> <!-- // tabpanel -->

          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_filter_08">
            <h3 class="blind">할인 기간</h3>
            
            <div class="item_list02">
              <ul>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio04_01" name="filter_radio04" checked>
                    <label for="filter_radio04_01">전체</label>
                  </div>
                </li>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio04_02" name="filter_radio04">
                    <label for="filter_radio04_02">6개월 미만</label>
                  </div>
                </li>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio04_03" name="filter_radio04">
                    <label for="filter_radio04_03">6~12개월</label>
                  </div>
                </li>
                <li>
                  <div class="radio_ty00">
                    <input type="radio" id="filter_radio04_04" name="filter_radio04">
                    <label for="filter_radio04_04">12개월 이상</label>
                  </div>
                </li>
              </ul>
            </div> <!-- // item_list02 -->
          </div> <!-- // tabpanel -->
            
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_filter_09">
            <h3 class="blind">부가서비스</h3>
            
            <div class="item_list ty03">
              <ul>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox05_01" name="">
                    <label for="filter_checkbox05_01">NFC 지원</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox05_02" name="">
                    <label for="filter_checkbox05_02">소액결제</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox05_03" name="">
                    <label for="filter_checkbox05_03">유심무료</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox05_04" name="">
                    <label for="filter_checkbox05_04">모바일 핫스팟</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox05_05" name="">
                    <label for="filter_checkbox05_05">데이터 쉐어링</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox05_06" name="">
                    <label for="filter_checkbox05_06">eSIM 지원</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox05_07" name="">
                    <label for="filter_checkbox05_07">해외 로밍</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox05_08" name="">
                    <label for="filter_checkbox05_08">가족 결합</label>
                  </div>
                </li>
              </ul>
            </div> <!-- // item_list ty03 -->
          </div> <!-- // tabpanel -->

          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_filter_10">
            <h3 class="blind">전용요금제</h3>
            
            <div class="item_list ty03">
              <ul>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox06_01" name="">
                    <label for="filter_checkbox06_01">시니어 요금제</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox06_02" name="">
                    <label for="filter_checkbox06_02">청소년 요금제</label>
                  </div>
                </li>
                <li>
                  <div class="check_st">
                    <input type="checkbox" id="filter_checkbox06_03" name="">
                    <label for="filter_checkbox06_03">복지 요금제</label>
                  </div>
                </li>
              </ul>
            </div> <!-- // item_list ty03 -->
          </div> <!-- // tabpanel -->

        </div> <!-- // tabpanel_wrap -->
      </div><!-- .pop_content -->

      <div class="pop_footer">
        <div class="filter_keyword">
          <!-- <p class="none">항목을 선택해 주세요</p> -->
          <div class="tag_list02">
            <ul>
              <li><button type="button" @click="$tag.delete">지금 HOT한 <span class="blind">삭제</span></button></li>
              <li><button type="button" @click="$tag.delete">이달의 추천 <span class="blind">삭제</span></button></li>
              <li><button type="button" @click="$tag.delete">데이터x통화 무제한 <span class="blind">삭제</span></button></li>
              <li><button type="button" @click="$tag.delete">사은품 팡팡 <span class="blind">삭제</span></button></li>
              <li><button type="button" @click="$tag.delete">인터넷 결합 요금제 <span class="blind">삭제</span></button></li>
              <li><button type="button" @click="$tag.delete">카톡/인터넷용 <span class="blind">삭제</span></button></li>
              <li><button type="button" @click="$tag.delete">5G 요금제 <span class="blind">삭제</span></button></li>
              <li><button type="button" @click="$tag.delete">부모님 추천 <span class="blind">삭제</span></button></li>
              <li><button type="button" @click="$tag.delete">초저가요금제 <span class="blind">삭제</span></button></li>
              <li><button type="button" @click="$tag.delete">통화무제한 <span class="blind">삭제</span></button></li>
            </ul>
          </div>
        </div>
        <div class="btn_group">
          <button type="button" class="btn md reset">초기화</button>
          <button type="button" class="btn md c01"><span>1,232</span>개의 결과 보기</button>
        </div>
      </div>
      <button type="button" class="pop_close" data-action="close" @click="$popup.close('#filterPop', '#btn_filterPop')"><span class="blind">팝업 닫기</span></button>

    </div><!-- .pop_wrap -->
  </div><!-- // pop_layer -->


  <div class="pop_layer normal" id="selectPop01" v-show="popup.selectPop01">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>선택</h3>
      </div>
      <div class="pop_content">
        <ul class="select_list" role="listbox">
          <li role="none" class="on">
            <button type="button" role="option" aria-selected="true" data-option="은행계좌 자동이체" @click="$popup.select('#selectPop01', '#btn_selectPop01');">은행계좌 자동이체</button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="신용카드 자동결제" @click="$popup.select('#selectPop01', '#btn_selectPop01');">신용카드 자동결제</button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="지로납부" @click="$popup.select('#selectPop01', '#btn_selectPop01');">지로납부</button>
          </li>
        </ul>
      </div>
      <button type="button" class="pop_close" data-action="close" @click="$popup.close('#selectPop01', '#btn_selectPop01')"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->


  <div class="pop_layer normal" id="selectPop02" v-show="popup.selectPop02">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>통신사 선택</h3>
      </div>
      <div class="pop_content">
        <ul class="select_list02" role="listbox">
          <li role="none" class="on">
            <button type="button" role="option" aria-selected="true" data-option="전체" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                전체
              </span>
              <span class="tex"></span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="A모바일" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner01.png" alt="">
              </span>
              <span class="tex">A모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="FLASH모바일" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner02.png" alt="">
              </span>
              <span class="tex">FLASH모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="KG모빌리언스" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner03.png" alt="">
              </span>
              <span class="tex">KG모빌리언스</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="U+유모바일" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner04.png" alt="">
              </span>
              <span class="tex">U+유모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="WELL" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner05.png" alt="">
              </span>
              <span class="tex">WELL</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="freeT" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner06.png" alt="">
              </span>
              <span class="tex">freeT</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="mobing" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner07.png" alt="">
              </span>
              <span class="tex">mobing</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="리브모바일" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner08.png" alt="">
              </span>
              <span class="tex">리브모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="마블프로듀스" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner09.png" alt="">
              </span>
              <span class="tex">마블프로듀스</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="벨류컴" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner10.png" alt="">
              </span>
              <span class="tex">벨류컴</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="슈가모바일" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner11.png" alt="">
              </span>
              <span class="tex">슈가모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="스노우맨" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner12.png" alt="">
              </span>
              <span class="tex">스노우맨</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="스마텔" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner13.png" alt="">
              </span>
              <span class="tex">스마텔</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="아이즈모바일" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner14.png" alt="">
              </span>
              <span class="tex">아이즈모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="앤텔레콤" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner15.png" alt="">
              </span>
              <span class="tex">앤텔레콤</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="에스원안심모바일" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner16.png" alt="">
              </span>
              <span class="tex">에스원안심모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="여유텔레콤" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner17.png" alt="">
              </span>
              <span class="tex">여유텔레콤</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="이야기모바일" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner18.png" alt="">
              </span>
              <span class="tex">이야기모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="이지모바일" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner19.png" alt="">
              </span>
              <span class="tex">이지모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="인스모바일" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner20.png" alt="">
              </span>
              <span class="tex">인스모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="티플러스" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner21.png" alt="">
              </span>
              <span class="tex">티플러스</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="헬로모바일" @click="$popup.select('#selectPop02', '#btn_selectPop02');">
              <span class="img">
                <img src="@/assets/images/data/logo_partner22.png" alt="">
              </span>
              <span class="tex">헬로모바일</span>
            </button>
          </li>
        </ul>
      </div>
      <button type="button" class="pop_close" data-action="close" @click="$popup.close('#selectPop02', '#btn_selectPop02')"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->

  <div class="pop_layer full" id="userReviewPop" v-show="popup.userReviewPop">
		<div class="pop_wrap">
			<div class="pop_header">
					<h3>사용자 리뷰</h3>
			</div>
			<div class="pop_content">
				<div class="section">
						
					<div class="line_list">
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
					</div>

				</div> <!-- // section -->
			</div>
      <button type="button" class="pop_close" data-action="close" @click="$popup.close('#userReviewPop', '#btn_userReviewPop')"><span class="blind">팝업 닫기</span></button>

		</div>
	</div> <!-- // pop_layer -->

	<div class="pop_layer full" id="blogReviewPop" v-show="popup.blogReviewPop">
		<div class="pop_wrap">
			<div class="pop_header">
					<h3>블로그 리뷰</h3>
			</div>
			<div class="pop_content">
				<div class="section">
						
					<div class="line_list">
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
					</div>

				</div> <!-- // section -->
			</div>
      <button type="button" class="pop_close" data-action="close" @click="$popup.close('#blogReviewPop', '#btn_blogReviewPop')"><span class="blind">팝업 닫기</span></button>
		</div>
	</div> <!-- // pop_layer -->


</div>

</template>
  
<script>
export default {
  name: 'compPopup',
  data(){
    return {
      value: [0, 60000],
      popup: { "popup01" : false },
    }
  },
  methods: {
    rangeChange(e){
      this.value[0] = e.target.getAttribute("data-min");
      this.value[1] = e.target.getAttribute("data-max");
    }
  },
  props: {
    popupItem: Array,
  },
  mounted(){
    setTimeout(() => { this.popupItem.forEach( a => { this.popup[a] = true }) }, 0);
  }
}
</script>
  