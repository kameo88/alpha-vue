<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">form etc</div>

      <div class="section">
        <h3 class="tit02">kameo 추가</h3>
        <div class="radio_group">
            <div class="radio_item box_type">
                <input type="radio" id="item01" name="modelcode" checked>
                <label for="item01" class="label">item01</label>
            </div>
            <div class="radio_item box_type">
                <input type="radio" id="item02" name="modelcode">
                <label for="item02" class="label">item02</label>
            </div>
            <div class="radio_item box_type">
                <input type="radio" id="item03" name="modelcode">
                <label for="item03" class="label">item03</label>
            </div>
            <div class="radio_item box_type">
                <input type="radio" id="item04" name="modelcode">
                <label for="item04" class="label">item04</label>
            </div>
            <div class="radio_item box_type">
                <input type="radio" id="item05" name="modelcode">
                <label for="item05" class="label">item05</label>
            </div>
        </div>

        <h3 class="tit02">select_list02</h3>
        <ul class="select_list02" role="listbox">
          <li role="none" class="on">
            <button type="button" role="option" aria-selected="true" data-option="전체" @click="$selectList.click">
              <span class="img">
                전체
              </span>
              <span class="tex"></span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="A모바일" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner01.png" alt="">
              </span>
              <span class="tex">A모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="FLASH모바일" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner02.png" alt="">
              </span>
              <span class="tex">FLASH모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="KG모빌리언스" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner03.png" alt="">
              </span>
              <span class="tex">KG모빌리언스</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="U+유모바일" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner04.png" alt="">
              </span>
              <span class="tex">U+유모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="WELL" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner05.png" alt="">
              </span>
              <span class="tex">WELL</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="freeT" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner06.png" alt="">
              </span>
              <span class="tex">freeT</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="mobing" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner07.png" alt="">
              </span>
              <span class="tex">mobing</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="리브모바일" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner08.png" alt="">
              </span>
              <span class="tex">리브모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="마블프로듀스" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner09.png" alt="">
              </span>
              <span class="tex">마블프로듀스</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="벨류컴" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner10.png" alt="">
              </span>
              <span class="tex">벨류컴</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="슈가모바일" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner11.png" alt="">
              </span>
              <span class="tex">슈가모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="스노우맨" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner12.png" alt="">
              </span>
              <span class="tex">스노우맨</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="스마텔" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner13.png" alt="">
              </span>
              <span class="tex">스마텔</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="아이즈모바일" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner14.png" alt="">
              </span>
              <span class="tex">아이즈모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="앤텔레콤" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner15.png" alt="">
              </span>
              <span class="tex">앤텔레콤</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="에스원안심모바일" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner16.png" alt="">
              </span>
              <span class="tex">에스원안심모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="여유텔레콤" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner17.png" alt="">
              </span>
              <span class="tex">여유텔레콤</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="이야기모바일" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner18.png" alt="">
              </span>
              <span class="tex">이야기모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="이지모바일" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner19.png" alt="">
              </span>
              <span class="tex">이지모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="인스모바일" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner20.png" alt="">
              </span>
              <span class="tex">인스모바일</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="티플러스" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner21.png" alt="">
              </span>
              <span class="tex">티플러스</span>
            </button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="헬로모바일" @click="$selectList.click">
              <span class="img">
                <img src="@/assets/images/data/logo_partner22.png" alt="">
              </span>
              <span class="tex">헬로모바일</span>
            </button>
          </li>
        </ul>
      </div> <!-- // section -->



      <div class="section">
        <h3 class="tit02">radio_item ty01</h3>
        <div class="radio_item ty01">
          <input type="radio" id="radio01_01" name="radio01">
          <label for="radio01_01">radio01_01</label>
        </div>
        <div class="radio_item ty01">
          <input type="radio" id="radio01_02" name="radio01" checked>
          <label for="radio01_02">radio01_02</label>
        </div>
        <div class="radio_item ty01">
          <input type="radio" id="radio01_03" name="radio01" disabled>
          <label for="radio01_03">radio01_03</label>
        </div>
        <div class="radio_item ty01">
          <input type="radio" id="radio01_04" name="radio01" disabled>
          <label for="radio01_04">radio01_04</label>
        </div>
      </div><!-- .section -->


      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit02">radio_item ty01</h3>
          <span>item_list02 radio_active</span>
        </div>
        <div class="item_list02 radio_active">
          <ul>
            <li>
              <div class="radio_item ty01">
                <input type="radio" id="ty01_radio_01" name="ty01_radio">
                <label for="ty01_radio_01">전체</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty01">
                <input type="radio" id="ty01_radio_02" name="ty01_radio">
                <label for="ty01_radio_02">데이터 무제한</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty01">
                <input type="radio" id="ty01_radio_03" name="ty01_radio">
                <label for="ty01_radio_03">1GB 미만</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty01">
                <input type="radio" id="ty01_radio_04" name="ty01_radio">
                <label for="ty01_radio_04">1~5GB</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty01">
                <input type="radio" id="ty01_radio_05" name="ty01_radio">
                <label for="ty01_radio_05">5~15GB</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty01">
                <input type="radio" id="ty01_radio_06" name="ty01_radio">
                <label for="ty01_radio_06">15~50GB</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty01">
                <input type="radio" id="ty01_radio_07" name="ty01_radio">
                <label for="ty01_radio_07">50~100GB</label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list03 -->
      </div><!-- .section -->


      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit02">radio_item ty02</h3>
          <span>item_list radio_active</span>
        </div>
        <div class="item_list radio_active"> <!-- radio_active : 라디오 리스트 활성화 제어 -->
          <ul>
            <li>
              <div class="radio_item ty02">
                <input type="radio" id="ty02_radio_01" name="ty02_radio">
                <label for="ty02_radio_01">
                  <img src="@/assets/images/component/img_delivery.png" alt="">
                  바로배송/택배
                </label>
              </div>
            </li>
            <li>
              <div class="radio_item ty02">
                <input type="radio" id="ty02_radio_02" name="ty02_radio">
                <label for="ty02_radio_02">
                  <img src="@/assets/images/component/img_gs25.png" alt="">
                  GS25 바로픽업
                </label>
              </div>
            </li>
            <li>
              <div class="radio_item ty02">
                <input type="radio" id="ty02_radio_03" name="ty02_radio">
                <label for="ty02_radio_03">
                  <img src="@/assets/images/component/img_seven_eleven.png" alt="">
                  세븐일레븐 바로픽업
                </label>
              </div>
            </li>
            <li>
              <div class="radio_item ty02">
                <input type="radio" id="ty02_radio_04" name="ty02_radio">
                <label for="ty02_radio_04">
                  <img src="@/assets/images/component/img_emart.png" alt="">
                  이마트24 바로픽업
                </label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list -->
      </div><!-- .section -->


      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit02">radio_item ty02</h3>
          <span>item_list radio_active</span>
        </div>
        <div class="item_list radio_active"> <!-- radio_active : 라디오 리스트 활성화 제어 -->
          <ul>
            <li>
              <div class="radio_item ty02">
                <input type="radio" id="ty02_radio02_01" name="ty02_radio02">
                <label for="ty02_radio02_01">필요해요!</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty02">
                <input type="radio" id="ty02_radio02_02" name="ty02_radio02">
                <label for="ty02_radio02_02">필요하지 않아요</label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list -->
      </div><!-- .section -->


      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit02">radio_item ty03</h3>
          <span>item_list radio_active</span>
        </div>
        <div class="item_list radio_active">
          <ul>
            <li>
              <div class="radio_item ty03">
                <input type="radio" id="ty03_list_01_01" name="ty03_list_01">
                <label for="ty03_list_01_01">
                  <span class="text_box">
                    <span class="desc">
                      일반
                    </span>
                    <span class="info">
                      만 19세 이상의 성인이에요
                    </span>
                  </span>
                </label>
              </div>
            </li>
            <li>
              <div class="radio_item ty03">
                <input type="radio" id="ty03_list_01_02" name="ty03_list_01">
                <label for="ty03_list_01_02">
                  <span class="text_box">
                    <span class="desc">
                      미성년자
                    </span>
                    <span class="info">
                      만 19세 미만이에요
                    </span>
                  </span>
                </label>
              </div>
            </li>
            <li>
              <div class="radio_item ty03">
                <input type="radio" id="ty03_list_01_03" name="ty03_list_01">
                <label for="ty03_list_01_03">
                  <span class="text_box">
                    <span class="desc">
                      외국인(Foreigner)
                    </span>
                    <span class="info">
                      외국인 번호가 있어요
                    </span>
                  </span>
                </label>
              </div>
            </li>
            <li>
              <div class="radio_item ty03">
                <input type="radio" id="ty03_list_01_04" name="ty03_list_01">
                <label for="ty03_list_01_04">
                  <span class="text_box">
                    <span class="desc">
                      외국인 미성년자⁠(Foreigner Minors)
                    </span>
                    <span class="info">
                      만 19세 미만이고 외국인 번호가 있어요
                    </span>
                  </span>
                </label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list -->
      </div><!-- .section -->


      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit02">radio_item ty04</h3>
          <span>item_list radio_active</span>
        </div>
        <div class="item_list radio_active"> <!-- radio_active : 라디오 리스트 활성화 제어 -->
          <ul>
            <li>
              <div class="radio_item ty04">
                <input type="radio" id="ty04_radio_01" name="ty04_radio">
                <label for="ty04_radio_01">
                  <span class="text_box">
                    <span class="desc">
                      초고화질의 영상을 자주보고,
                      게임 등 다양한 컨텐츠 소비를 해요
                    </span>
                    <span class="info">
                      100GB 보다 많이 사용
                    </span>
                  </span>
                  <img src="@/assets/images/component/img_game.png" alt="">
                </label>
              </div>
            </li>
            <li>
              <div class="radio_item ty04">
                <input type="radio" id="ty04_radio_02" name="ty04_radio">
                <label for="ty04_radio_02">
                  <span class="text_box">
                    <span class="desc">
                      1-2시간 이상 영상을 보고,
                      SNS 등 사용량이 많아요
                    </span>
                    <span class="info">
                      약 50~100B 사용
                    </span>
                  </span>
                  <img src="@/assets/images/component/img_thum.png" alt="">
                </label>
              </div>
            </li>
            <li>
              <div class="radio_item ty04">
                <input type="radio" id="ty04_radio_03" name="ty04_radio">
                <label for="ty04_radio_03">
                  <span class="text_box">
                    <span class="desc">
                      카톡이나 SNS, 인터넷 검색 등에
                      주로 데이터를 사용해요
                    </span>
                    <span class="info">
                      약 10~50GB 사용
                    </span>
                  </span>
                  <img src="@/assets/images/component/img_sns.png" alt="">
                </label>
              </div>
            </li>
            <li>
              <div class="radio_item ty04">
                <input type="radio" id="ty04_radio_04" name="ty04_radio">
                <label for="ty04_radio_04">
                  <span class="text_box">
                    <span class="desc">
                      와이파이를 주로 이용하고,
                      데이터는 거의 사용하지 않아요
                    </span>
                    <span class="info">
                      약 10GB 미만 사용
                    </span>
                  </span>
                  <img src="@/assets/images/component/img_wifi.png" alt="">
                </label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list -->
      </div><!-- .section -->


      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit02">radio_item ty05</h3>
          <span>item_list radio_active</span>
        </div>
        <div class="item_list radio_active"> <!-- radio_active : 라디오 리스트 활성화 제어 -->
          <ul>
            <li>
              <div class="radio_item ty05">
                <input type="radio" id="ty05_radio_01" name="ty05_radio">
                <label for="ty05_radio_01">
                  <span class="text_box">
                    <span class="desc">
                      번호이동
                      <span class="bag clr c06">혜택</span>
                    </span>
                    <span class="info">
                      지금 쓰고 있는 내 번호 그대로!
                    </span>
                  </span>
                  <img src="@/assets/images/component/img_num_move.png" alt="">
                </label>
              </div>
            </li>
            <li>
              <div class="radio_item ty05">
                <input type="radio" id="ty05_radio_02" name="ty05_radio">
                <label for="ty05_radio_02">
                  <span class="text_box">
                    <span class="desc">
                      신규가입
                    </span>
                    <span class="info">
                      새로운 번호가 필요해요!
                    </span>
                  </span>
                  <img src="@/assets/images/component/img_num_new.png" alt="">
                </label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list -->
      </div><!-- .section -->


      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit02">radio_item ty06</h3>
          <span>item_list02</span>
        </div>
        <div class="item_list02">
          <ul>
            <li>
              <div class="radio_item ty06">
                <input type="radio" id="ty06_radio_01" name="ty06_radio">
                <label for="ty06_radio_01" class="img_os01">아이폰</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty06">
                <input type="radio" id="ty06_radio_02" name="ty06_radio">
                <label for="ty06_radio_02" class="img_os02">갤럭시</label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list02 -->
      </div><!-- .section -->


      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit02">radio_item ty07</h3>
          <span>item_list03</span>
        </div>
        <div class="item_list03">
          <ul>
            <li>
              <div class="radio_item ty07">
                <input type="radio" id="ty07_radio_01" name="ty07_radio">
                <label for="ty07_radio_01" class="img_pay ty01">신용카드</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty07">
                <input type="radio" id="ty07_radio_02" name="ty07_radio">
                <label for="ty07_radio_02" class="img_pay ty02">실시간 계좌이체</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty07">
                <input type="radio" id="ty07_radio_03" name="ty07_radio">
                <label for="ty07_radio_03" class="img_pay ty03">삼성페이</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty07">
                <input type="radio" id="ty07_radio_04" name="ty07_radio">
                <label for="ty07_radio_04" class="img_pay ty04">카카오페이</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty07">
                <input type="radio" id="ty07_radio_05" name="ty07_radio">
                <label for="ty07_radio_05" class="img_pay ty05">네이버페이</label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list03 -->
      </div> <!-- // section -->

      <!-- <div class="section">
        <h3 class="tit02">radio_item ty01</h3>
        <div class="form_list">
          <ul>
            <li>              
              <div class="form_item item_list02">
                <ul>
                  <li>
                    <div class="radio_item ty01">
                      <input type="radio" id="radio04_01" name="radio04">
                      <label for="radio04_01">아이폰</label>
                    </div>
                  </li>
                  <li>
                    <div class="radio_item ty01">
                      <input type="radio" id="radio04_02" name="radio04">
                      <label for="radio04_02">갤럭시</label>
                    </div>
                  </li>
                  <li>
                    <div class="radio_item ty01">
                      <input type="radio" id="radio04_03" name="radio04">
                      <label for="radio04_03">아이폰</label>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="error">...</div>
            </li>
          </ul>
        </div>
      </div> -->





    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'GuideFormEtc',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>
