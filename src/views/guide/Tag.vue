<template>
  <div class="wrap">
    <CompHeader />

    <div class="container">
      <div class="content" id="content">
        <h2 class="title_nav">Guide</h2>

        <div class="page_info">Filter & Tag</div>

        <div class="tag_list">
          <ul>
            <li><button type="button" disabled @click="$tag.click">지금 HOT한</button></li>
            <li><button type="button" disabled @click="$tag.click">이달의 추천</button></li>
            <li><button type="button" disabled @click="$tag.click">데이터x통화 무제한</button></li>
            <li><button type="button" disabled @click="$tag.click">사은품 팡팡</button></li>
            <li><button type="button" disabled @click="$tag.click">인터넷 결합 요금제</button></li>
            <li><button type="button" disabled @click="$tag.click">카톡/인터넷용</button></li>
            <li><button type="button" disabled @click="$tag.click">5G 요금제</button></li>
            <li><button type="button" disabled @click="$tag.click">부모님 추천</button></li>
            <li><button type="button" disabled @click="$tag.click">초저가요금제</button></li>
            <li><button type="button" disabled @click="$tag.click">통화무제한</button></li>
          </ul>
        </div>
            
        <div class="tag_list tagList">
          <button type="button" aria-expanded="false" @click="$tag.variable.click"><span class="blind">펼쳐 보기</span></button>
          <ul>
            <li role="none" class="on"><button type="button" aria-selected="true" @click="$tag.click">지금 HOT한</button></li>
            <li role="none"><button type="button" aria-selected="false" @click="$tag.click">이달의 추천</button></li>
            <li role="none"><button type="button" aria-selected="false" @click="$tag.click">데이터x통화 무제한</button></li>
            <li role="none"><button type="button" aria-selected="false" @click="$tag.click">사은품 팡팡</button></li>
            <li role="none"><button type="button" aria-selected="false" @click="$tag.click">인터넷 결합 요금제</button></li>
            <li role="none"><button type="button" aria-selected="false" @click="$tag.click">카톡/인터넷용</button></li>
            <li role="none"><button type="button" aria-selected="false" @click="$tag.click">5G 요금제</button></li>
            <li role="none"><button type="button" aria-selected="false" @click="$tag.click">부모님 추천</button></li>
            <li role="none"><button type="button" aria-selected="false" @click="$tag.click">초저가요금제</button></li>
            <li role="none"><button type="button" aria-selected="false" @click="$tag.click">통화무제한</button></li>
          </ul>
        </div>

        <div class="tag_list multi tagList"> <!-- .tag_list : 스타일, .tagList : tagList.init() , .multi : 다중선택 -->
          <!-- <button type="button" aria-expanded="false"><span class="blind">펼쳐 보기</span></button> -->
          <ul>
            <li role="none" class="on"><button type="button" role="checkbox" aria-selected="true" @click="$tag.click">지금 HOT한</button></li>
            <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">이달의 추천</button></li>
            <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">데이터x통화 무제한</button></li>
          </ul>
        </div>

        <div class="tag_list multi tagList"> <!-- .tag_list : 스타일, .tagList : tagList.init() , .multi : 다중선택 -->
          <button type="button" aria-expanded="false" @click="$tag.variable.click"><span class="blind">펼쳐 보기</span></button>
          <ul>
            <li role="none" class="on"><button type="button" role="checkbox" aria-selected="true" @click="$tag.click">지금 HOT한</button></li>
            <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">이달의 추천</button></li>
            <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">데이터x통화 무제한</button></li>
          </ul>
        </div>
          
        <div class="tag_list block tagList"> <!-- .tag_list : 가변 스타일, .tag_list.block : 블록 스타일 -->
          <button type="button" aria-expanded="false" @click="$tag.variable.click"><span class="blind">펼쳐 보기</span></button>
          <ul>
            <li role="none" class="on"><button type="button" aria-selected="true" @click="$tag.click">지금 HOT한</button></li>
            <li role="none"><button type="button" aria-selected="false" @click="$tag.click">이달의 추천</button></li>
            <li role="none"><button type="button" aria-selected="false" @click="$tag.click">데이터x통화 무제한</button></li>
            <li role="none"><button type="button" aria-selected="false" @click="$tag.click">사은품 팡팡</button></li>
            <li role="none"><button type="button" aria-selected="false" @click="$tag.click">인터넷 결합 요금제</button></li>
            <li role="none"><button type="button" aria-selected="false" @click="$tag.click">카톡/인터넷용</button></li>
            <li role="none"><button type="button" aria-selected="false" @click="$tag.click">5G 요금제</button></li>
            <li role="none"><button type="button" aria-selected="false" @click="$tag.click">부모님 추천</button></li>
            <li role="none"><button type="button" aria-selected="false" @click="$tag.click">초저가요금제</button></li>
            <li role="none"><button type="button" aria-selected="false" @click="$tag.click">통화무제한</button></li>
          </ul>
        </div>

        <div class="section">
          <h3 class="tit02">Tag list</h3>
            
          <div class="tag_list tagList">
            <button type="button" aria-expanded="false" @click="$tag.variable.click"><span class="blind">펼쳐 보기</span></button>
            <ul>
              <li role="none" class="on"><button type="button" aria-selected="true" @click="$tag.click">지금 HOT한</button></li>
              <li role="none"><button type="button" aria-selected="false" @click="$tag.click">이달의 추천</button></li>
              <li role="none"><button type="button" aria-selected="false" @click="$tag.click">데이터x통화 무제한</button></li>
              <li role="none"><button type="button" aria-selected="false" @click="$tag.click">사은품 팡팡</button></li>
              <li role="none"><button type="button" aria-selected="false" @click="$tag.click">인터넷 결합 요금제</button></li>
              <li role="none"><button type="button" aria-selected="false" @click="$tag.click">카톡/인터넷용</button></li>
              <li role="none"><button type="button" aria-selected="false" @click="$tag.click">5G 요금제</button></li>
              <li role="none"><button type="button" aria-selected="false" @click="$tag.click">부모님 추천</button></li>
              <li role="none"><button type="button" aria-selected="false" @click="$tag.click">초저가요금제</button></li>
              <li role="none"><button type="button" aria-selected="false" @click="$tag.click">통화무제한</button></li>
            </ul>
          </div>
            
          <div class="tag_list multi tagList">
            <button type="button" aria-expanded="false" @click="$tag.variable.click"><span class="blind">펼쳐 보기</span></button>
            <ul>
              <li role="none" class="on"><button type="button" role="checkbox" aria-selected="true" @click="$tag.click">지금 HOT한</button></li>
              <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">이달의 추천</button></li>
              <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">데이터x통화 무제한</button></li>
              <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">사은품 팡팡</button></li>
              <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">인터넷 결합 요금제</button></li>
              <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">카톡/인터넷용</button></li>
              <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">5G 요금제</button></li>
              <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">부모님 추천</button></li>
              <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">초저가요금제</button></li>
              <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">통화무제한</button></li>
            </ul>
          </div>
            
          <div class="tag_list block tagList">
            <button type="button" aria-expanded="false"><span class="blind">펼쳐 보기</span></button>
            <ul>
              <li role="none" class="on"><button type="button" aria-selected="true" @click="$tag.click">지금 HOT한</button></li>
              <li role="none"><button type="button" aria-selected="false" @click="$tag.click">이달의 추천</button></li>
              <li role="none"><button type="button" aria-selected="false" @click="$tag.click">데이터x통화 무제한</button></li>
              <li role="none"><button type="button" aria-selected="false" @click="$tag.click">사은품 팡팡</button></li>
              <li role="none"><button type="button" aria-selected="false" @click="$tag.click">인터넷 결합 요금제</button></li>
              <li role="none"><button type="button" aria-selected="false" @click="$tag.click">카톡/인터넷용</button></li>
              <li role="none"><button type="button" aria-selected="false" @click="$tag.click">5G 요금제</button></li>
              <li role="none"><button type="button" aria-selected="false" @click="$tag.click">부모님 추천</button></li>
              <li role="none"><button type="button" aria-selected="false" @click="$tag.click">초저가요금제</button></li>
              <li role="none"><button type="button" aria-selected="false" @click="$tag.click">통화무제한</button></li>
            </ul>
          </div>
            
          <div class="tag_list multi tagList">
            <button type="button" aria-expanded="false" @click="$tag.variable.click"><span class="blind">펼쳐 보기</span></button>
            <ul>
              <li role="none" class="other">
                <button type="button" aria-haspopup="true" @click="$tag.other.open">후불유심요금제</button>
              </li>
              <li role="none" class="on"><button type="button" role="checkbox" aria-selected="true" @click="$tag.click">지금 HOT한</button></li>
              <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">이달의 추천</button></li>
              <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">데이터x통화 무제한</button></li>
              <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">사은품 팡팡</button></li>
              <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">인터넷 결합 요금제</button></li>
              <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">카톡/인터넷용</button></li>
              <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">5G 요금제</button></li>
              <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">부모님 추천</button></li>
              <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">초저가요금제</button></li>
              <li role="none"><button type="button" role="checkbox" aria-selected="false" @click="$tag.click">통화무제한</button></li>
            </ul>
            <div class="other_pop">
              <ul role="listbox">
                <li role="none" class="on"><button type="button" role="option" aria-selected="true" @click="$tag.other.select">후불유심요금제</button></li>
                <li role="none"><button type="button" role="option" aria-selected="false" @click="$tag.other.select">선불유심요금제</button></li>
              </ul>
            </div>
          </div>

        </div> <!-- // section -->

        <div class="section">
          <h3 class="tit02">Tag list02</h3>
          
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
        </div> <!-- // section -->

        <div class="section">
          <h3 class="tit02">filter</h3>

          <div class="filter_wrap">
            <div class="tag_list multi tagList">
              <button type="button" aria-expanded="false" @click="$tag.variable.click"><span class="blind">펼쳐 보기</span></button>
              <ul>
                <li role="none" class="other">
                  <button type="button" aria-haspopup="true" @click="$tag.other.open">후불유심요금제</button>
                </li>
                <li role="none" class="on"><button type="button">지금 HOT한</button></li>
                <li role="none"><button type="button">이달의 추천</button></li>
                <li role="none"><button type="button">데이터x통화 무제한</button></li>
                <li role="none"><button type="button">사은품 팡팡</button></li>
                <li role="none"><button type="button">인터넷 결합 요금제</button></li>
                <li role="none"><button type="button">카톡/인터넷용</button></li>
                <li role="none"><button type="button">5G 요금제</button></li>
                <li role="none"><button type="button">부모님 추천</button></li>
                <li role="none"><button type="button">초저가요금제</button></li>
                <li role="none"><button type="button">통화무제한</button></li>
              </ul>
              <div class="other_pop">
                <ul role="listbox">
                  <li role="none" class="on"><button type="button" role="option" aria-selected="true" @click="$tag.other.select">후불유심요금제</button></li>
                  <li role="none"><button type="button" role="option" aria-selected="false" @click="$tag.other.select">선불유심요금제</button></li>
                </ul>
              </div>
            </div>

            <div class="tag_list variable tagList">
              <button type="button" aria-expanded="false" @click="$tag.variable.click"><span class="blind">펼쳐 보기</span></button>
              <ul>
                <li role="none" class="on"><button type="button">지금 HOT한</button></li>
                <li role="none"><button type="button">이달의 추천</button></li>
                <li role="none"><button type="button">데이터x통화 무제한</button></li>
                <li role="none"><button type="button">사은품 팡팡</button></li>
                <li role="none"><button type="button">인터넷 결합 요금제</button></li>
                <li role="none"><button type="button">카톡/인터넷용</button></li>
                <li role="none"><button type="button">5G 요금제</button></li>
                <li role="none"><button type="button">부모님 추천</button></li>
                <li role="none"><button type="button">초저가요금제</button></li>
                <li role="none"><button type="button">통화무제한</button></li>
              </ul>
            </div>

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
              <button type="button" class="filter_detail" id="btn_filterPop" @click="$popup.open('#filterPop', '#btn_filterPop');">꼼꼼하게 찾기</button> <!-- class="filter_detail on" -->
            </div>

          </div> <!-- // filter_wrap -->

        </div> <!-- // section -->

      </div> <!-- // content -->
    </div> <!-- // container -->

  </div><!-- // wrap -->





  <div class="pop_layer normal filter_pop" id="filterPop">
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
        <div class="group_btn">
          <button type="button" class="btn_sM_reset">초기화</button>
          <button type="button" class="btn_sM_c01"><span>1,232</span>개의 결과 보기</button>
        </div>
      </div>
      <button type="button" class="pop_close" data-action="close" @click="$popup.close('#filterPop', '#btn_filterPop')"><span class="blind">팝업 닫기</span></button>

    </div><!-- .pop_wrap -->
  </div><!-- // pop_layer -->
</template>



<script>
import CompHeader from "@/components/Header.vue";

export default {
  name: "GuideTag",
  data(){
    return {
      value: [0, 60000],
    }
  },
  methods: {
    rangeChange(e){
      this.value[0] = e.target.getAttribute("data-min");
      this.value[1] = e.target.getAttribute("data-max");
    }
  },
  components: {
    CompHeader,
  },
  mounted(){
    this.$tag.variable.resize();
  }
};
</script>

<style>
.v-slider.v-input--horizontal .v-slider-thumb {left: calc(var(--v-slider-thumb-position) - var(--v-slider-thumb-size) / 2)}
.v-slider-thumb__surface{width:1.6rem!important; height:1.6rem!important; box-sizing:border-box; background:#fff!important; border:0.2rem solid #fc6969;}
.v-slider-track__fill{height:0.4rem!important;}
.v-slider-thumb__ripple {display:none!important;}
.v-slider.v-input--horizontal > .v-input__control {min-height:0.4rem!important;}
.v-input__details{display:none!important;}
</style>
