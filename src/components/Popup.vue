<template>
<div>
  <div class="pop_layer alert" id="popup01" v-if="popup.popup01"> <!-- alert, normal, full -->
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
          <button type="button" class="btn sm c07" data-action="close" @click="$popup.close('#popup01', '#btn_popup01')">계속할래요</button>
          <button type="button" class="btn sm c02" @click="$popup.close('#popup01', '#btn_popup01'); $popup.close('#popup03', '#btn_popup01'); $popup.close('#findRatePlanIntro', '#btn_findRatePlanIntro'); $popup.close('#findRatePlan01', '#btn_findRatePlan01'); $popup.close('#findRatePlan02', '#btn_findRatePlan02'); $popup.close('#findRatePlan03', '#btn_findRatePlan03'); $popup.close('#findRatePlan04', '#btn_findRatePlan04'); $popup.close('#findRatePlan05', '#btn_findRatePlan05'); $popup.close('#findRatePlan06', '#btn_findRatePlan06'); $popup.close('#findRatePlan07', '#btn_findRatePlan07'); $popup.close('#findRatePlan08', '#btn_findRatePlan08');">닫을래요</button>
        </div>
      </div>
    </div>
  </div> <!-- // pop_layer -->


  <div class="pop_layer normal" id="popup02" v-if="popup.popup02">
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


  <div class="pop_layer full" id="popup03" v-if="popup.popup03">
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
  

  <div class="pop_layer notice" id="noticePop" v-if="popup.noticePop">
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





  




  <!-- [공통][ALFM-CM05-PO00] 우편번호 검색 -->
  <div class="pop_layer full" id="popup05" v-if="popup.popup05">
    <div class="pop_wrap height_fix">
      <div class="pop_header">
        <h3>⁠우편번호 검색</h3>
      </div>
      <div class="pop_content">
        <div class="section">
          <div class="form_list">
            <ul>
              <li>
                <div class="input_box search">
                  <input type="text" class="input" placeholder="⁠도로명+건물번호 / 지역명(동/리)+번지">
                  <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
                  <button type="button" class="btn_search"><span class="blind">검색</span></button>
                </div>
              </li>
              <li>
                <div class="addr_search_info"> <!-- 우편번호 검색 시 미노출 -->
                  <span class="info_desc">⁠아래와 같은 조합으로 검색을 하시면 더욱 정확한 결과가 검색됩니다.</span>
                  <ul>
                    <li>
                      <span class="tit">⁠도로명 주소 검색</span>
                      <span class="fc03">예) 한강대로 32</span>
                    </li>
                    <li>
                      <span class="tit">⁠도로명+건물번호 검색</span>
                      <span class="fc03">예) 한강대로 32</span>
                    </li>
                    <li>
                      <span class="tit">⁠건물명 검색</span>
                      <span class="fc03">예) 엘지유플러스</span>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="sort_wrap">
                  <div>총 1342건 검색되었습니다</div>
                </div>

                <div class="line_list">
                  <ul>
                    <li>
                      <a href="javascript:void(0);" class="list_con02">
                        <div class="addr_list"><span class="bag_clr_c09">도로명</span>⁠경기도 성남시 분당구 판교역로 164</div>
                        <div class="addr_list"><span class="bag_clr_c07">지번</span>⁠경기도 성남시 분당구 삼평동 640</div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="list_con02">
                        <div class="addr_list"><span class="bag_clr_c09">도로명</span>⁠경기도 성남시 분당구 판교역로 164</div>
                        <div class="addr_list"><span class="bag_clr_c07">지번</span>⁠경기도 성남시 분당구 삼평동 640</div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="list_con02">
                        <div class="addr_list"><span class="bag_clr_c09">도로명</span>⁠경기도 성남시 분당구 판교역로 164</div>
                        <div class="addr_list"><span class="bag_clr_c07">지번</span>⁠경기도 성남시 분당구 삼평동 640</div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="list_con02">
                        <div class="addr_list"><span class="bag_clr_c09">도로명</span>⁠경기도 성남시 분당구 판교역로 164</div>
                        <div class="addr_list"><span class="bag_clr_c07">지번</span>⁠경기도 성남시 분당구 삼평동 640</div>
                      </a>
                    </li>
                  </ul>
                  <div class="btn_group">
                    <button type="button"  role="button" class="btn md c05">더볼래요</button>
                  </div>

                  <div class="form_item mgt20"><!-- 주소 선택 시 노출 -->
                    <div class="input_box">
                      <input type="text" class="input" placeholder="⁠상세주소 입력">
                      <button type="button" class="btn_del"><span class="blind">입력 내용 삭제</span></button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="no_dt_sch">
            <p>
              검색 결과가 없습니다.<br>
              ⁠정확한 주소인지 다시 한번 확인해주세요.
            </p>
          </div>
        </div> <!-- // section -->
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn md c03" id="nextBtn">확인</button>
        </div>
      </div>
      
      <button type="button" class="pop_close" @click="$popup.close('#popup05', '#btn_popup05');"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->


  <!-- [공통][ALFM-CM06-PO00] 약관 상세 팝업 : 약관 상세 -->
  <div class="pop_layer full" id="popup06" v-if="popup.popup06">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>약관 상세</h3>
      </div>
      <div class="pop_content">
        <div class="section">
            
          <div class="terms_area">
            위치정보  활용정보 제공에 관한 동의서 <br>
            <br>
            제 1조(목적) <br>
            (주)뉴플로이(이하 ‘회사’라 한다)의 뉴플로이에 관한 모든 관련 서비스(이하 ‘서비스’라 한다)는 회원님에게 보다 다양한 정보를 제공하고, 서비스의 질을 향상시키기 위하여 당사의 제휴사에게 「개인정보보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률 」및 「신용정보의 이용 및 보호에 관한 법률」의 규정을 준수하여 회원님의 개인(신용)정보를 제3자에게 상품소개 및 홍보 등 영업목적으로 제공할 수 있습니다. <br>
            <br>
            제 2조(수집 및 활용 관련 정보) <br>
            개인정보가 제공되는 비즈니스 파트너사, 제공 정보, 제공된 정보의 이용목적은 아래와 같습니다. 회원님들 중 이 개인정보의 제3자 마케팅 활용동의서 등에 동의하신 회원님들의 정보만이 제공되며, 제공된 정보는 명시된 이용목적을 벗어나 이용되지 않고, 개인정보의 유출 등 사고가 일어나지 않도록 더욱 철저한 보안이 이루어지도록 노력하고 있습니다. <br>
            <br>
            제 3조(제3자 정보제공의 동의 철회) <br>
            본 동의서에 동의하고 가입하신 신규회원 중 제3자 정보제공을 철회하고 싶은 회원은 이미 제3자에게 제공된 개인정보라 하더라도, 언제든지 열람, 정정, 삭제를 요구할 수 있습니다. 열람, 정정, 삭제 및 정보제공 동의 철회는 뉴플로이 고객센터(02-6956-4660)를 통해 본인확인 후 요청할 수 있습니다. 해당 요청의 근거자료를 남기기 위해 해당 통화내역은 녹취될 수 있으며 회원은 이에 동의하는 것으로 간주합니다. <br>
            이미 제공된 회원정보를 철회하는 데는 최대 10일의 기간이 소요됩니다. 활용동의 철회를 요청하시더라도 위와 같은 이유로 해당 철회 적용 이전까지 마케팅에 활용 될 수 있음을 알려드립니다. <br>
            회사는 회원님의 소중한 정보를 보호하기 위하여 신속하게 처리되도록 최선의 노력을 다하겠습니다. <br>
          </div>

        </div> <!-- // section -->
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn md c03" data-action="close" @click="$popup.close('#popup06','#btn_popup06')">확인</button>
        </div>
      </div>
      <button type="button" class="pop_close" data-action="close" @click="$popup.close('#popup06','#btn_popup06')"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->


  <!-- [공통][ALFM-CM06-PO00] 약관 상세 팝업 : 위치정보 활용 동의 -->
  <div class="pop_layer full" id="popup06_2" v-if="popup.popup06_2">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>위치정보 활용 동의</h3>
      </div>
      <div class="pop_content">
        <div class="section">
          <div class="terms_area">
            위치정보  활용정보 제공에 관한 동의서 <br>
            <br>
            제 1조(목적) <br>
            (주)뉴플로이(이하 ‘회사’라 한다)의 뉴플로이에 관한 모든 관련 서비스(이하 ‘서비스’라 한다)는 회원님에게 보다 다양한 정보를 제공하고, 서비스의 질을 향상시키기 위하여 당사의 제휴사에게 「개인정보보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률 」및 「신용정보의 이용 및 보호에 관한 법률」의 규정을 준수하여 회원님의 개인(신용)정보를 제3자에게 상품소개 및 홍보 등 영업목적으로 제공할 수 있습니다. <br>
            <br>
            제 2조(수집 및 활용 관련 정보) <br>
            개인정보가 제공되는 비즈니스 파트너사, 제공 정보, 제공된 정보의 이용목적은 아래와 같습니다. 회원님들 중 이 개인정보의 제3자 마케팅 활용동의서 등에 동의하신 회원님들의 정보만이 제공되며, 제공된 정보는 명시된 이용목적을 벗어나 이용되지 않고, 개인정보의 유출 등 사고가 일어나지 않도록 더욱 철저한 보안이 이루어지도록 노력하고 있습니다. <br>
            <br>
            제 3조(제3자 정보제공의 동의 철회) <br>
            본 동의서에 동의하고 가입하신 신규회원 중 제3자 정보제공을 철회하고 싶은 회원은 이미 제3자에게 제공된 개인정보라 하더라도, 언제든지 열람, 정정, 삭제를 요구할 수 있습니다. 열람, 정정, 삭제 및 정보제공 동의 철회는 뉴플로이 고객센터(02-6956-4660)를 통해 본인확인 후 요청할 수 있습니다. 해당 요청의 근거자료를 남기기 위해 해당 통화내역은 녹취될 수 있으며 회원은 이에 동의하는 것으로 간주합니다. <br>
            이미 제공된 회원정보를 철회하는 데는 최대 10일의 기간이 소요됩니다. 활용동의 철회를 요청하시더라도 위와 같은 이유로 해당 철회 적용 이전까지 마케팅에 활용 될 수 있음을 알려드립니다. <br>
            회사는 회원님의 소중한 정보를 보호하기 위하여 신속하게 처리되도록 최선의 노력을 다하겠습니다. <br>
          </div>
        </div> <!-- // section -->
      </div>
      <div class="pop_footer">
        <div class="terms_consent mgb32">
          <div class="cst_box check_st">
            <input type="checkbox" id="check_01" name="">
            <label for="check_01">매장안내를 받기 위해 위치정보 활용 이용약관에 동의합니다. (필수)</label>
          </div>
        </div>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_popup06_3" @click="popup06_2_termsCheck();">확인</button>
        </div>
      </div>
      <button type="button" class="pop_close" data-action="close" @click="$popup.close('#popup06_2','#btn_popup06_2')"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->


  <!-- [공통][ALFM-CM06-PO00] 약관 상세 팝업 : 위치정보 활용 동의 : 동의체크 X -->
  <div class="pop_layer alert" id="popup06_3" v-if="popup.popup06_2">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>위치정보 활용 동의 안내</h3>
      </div>
      <div class="pop_content">
        <div class="info_con">
          [내 주변 매장 찾기] 메뉴를 <br>이용하기 위해서는 <br>위치정보 활용 동의가 꼭 필요해요!
        </div>
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn sm c02" data-action="close" @click="$popup.close('#popup06_3', '#btn_popup06_3');">확인</button>
        </div>
      </div>
    </div>
  </div> <!-- // pop_layer -->


  <!-- [공통][ALFM-CM07-PO00] 지도 보기 팝업 -->
  <div class="pop_layer full map_pop" id="popup07" v-if="popup.popup07">
    <div class="pop_wrap height_fix">
      <div class="pop_header">
        <h3>지도 보기</h3>
      </div>
      <div class="pop_content">
        <div class="map_address">
          <dl>
            <dt>GS25상일동아점</dt>
            <dd>서울 강동구 상암로 405, 제101동 제상가1호 (상일동 473, 외 1필지 상일동아아파트)</dd>
          </dl>
          <div class="btn_group">
            <a href="javascript:void(0);" class="btn md c03">전화하기</a>
          </div>
        </div>
        <div class="map_area">
          <span style="display:block; padding:5rem; text-align:center;">지도</span>

          <div class="map_pin_shop" style="position:absolute; left:150px; top:200px;">
            <i>
              <img src="@/assets/images/component/img_gs25.png" alt="gs25">
                <!--
                <img src="@/assets/images/component/img_cu.png" alt="cu">
                <img src="@/assets/images/component/img_emart.png" alt="emart">
                <img src="@/assets/images/component/img_seven_eleven.png" alt="seven eleven">
                -->
            </i>
          </div>
        </div>
      </div>
      <button type="button" class="pop_close" data-action="close" @click="$popup.close('#popup07', '#btn_popup07')"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->


  <!-- [공통][ALFM-CM08-PO00] eSIM 활성화 방법 팝업 -->
  <div class="pop_layer full" id="popup08" v-if="popup.popup08">
    <div class="pop_wrap height_fix">
      <div class="pop_header">
        <h3>eSIM 활성화 방법</h3>
      </div>
      <div class="pop_content">
        <div class="section">
          <div class="box_red ty02">
            <div class="noti_img"></div>
            <strong class="fc01">eSIM을 활성화 하기 위해서는 <br>반드시 인터넷에 연결 되어 있어야 해요</strong>
          </div>
          <div class="box_gray mgt12">
            <ul class="text_list_bull">
              <li>eSIM을 가입하면, 내 휴대폰 설정 메뉴 또는 QR코드를 스캔해서 eSIM을 활성화 후 바로 사용할 수 있어요.</li>
              <li>한개의 단말에 동일 명의의 번호만 사용 가능해요!</li>
            </ul>
          </div>
        </div> <!-- // section -->


        <div class="section">
          <v-expansion-panels class="acd_wrap"  v-model="toggle08" multiple>
            <v-expansion-panel class="acd_item">
              <div class="acd_title">
                <v-expansion-panel-title>QR 스캔해서 개통하는 방법</v-expansion-panel-title>
              </div>
              <div class="acd_panel">
                <v-expansion-panel-text>
                  <div class="qr_wrap">
                    <div class="qr_img">
                      <img src="@/assets/images/content/img_qr.png" alt="">
                    </div>
                    <strong>
                      eSIM 개통할 휴대폰으로 <br>
                      QR코드를 스캔해주세요
                    </strong>
                  </div>
                </v-expansion-panel-text>
              </div>
            </v-expansion-panel>

            <v-expansion-panel class="acd_item">
              <div class="acd_title">
                <v-expansion-panel-title>내 휴대폰 설정에서 개통하는 방법</v-expansion-panel-title>
              </div>
              <div class="acd_panel">
                <v-expansion-panel-text>
                  
                  <strong>아이폰</strong>
                
                  <div class="swiper cardSwiper ty04">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="guid_img_item ty03">
                          <strong class="fs12 fc01">step 01</strong>
                          <h3 class="tit02">eSIM을 개통한 아이폰에 오는 <br>Push 메시지를 눌러주세요</h3>
                          <div class="guid_img">
                            <img src="@/assets/images/content/img_ios_set01.png" alt="">
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="guid_img_item">
                          <strong class="fs12 fc01">step 02</strong>
                          <h3 class="tit02">eSIM 활성화를 해주세요</h3>
                          <div class="guid_img">
                            <img src="@/assets/images/content/img_ios_set02.png" alt="">
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="guid_img_item">
                          <strong class="fs12 fc01">step 03</strong>
                          <h3 class="tit02">새로 개통할 eSIM 요금제 <br>레이블을 선택해주세요</h3>
                          <div class="guid_img">
                            <img src="@/assets/images/content/img_ios_set03.png" alt="">
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="guid_img_item">
                          <strong class="fs12 fc01">step 04</strong>
                          <h3 class="tit02">기본회선을 선택하고 <br>계속을 눌러주세요</h3>
                          <div class="guid_img">
                            <img src="@/assets/images/content/img_ios_set04.png" alt="">
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="guid_img_item">
                          <strong class="fs12 fc01">step 05</strong>
                          <h3 class="tit02">애플 ID를 연동할 회선을 <br>선택하고 계속을 눌러주세요!</h3>
                          <div class="guid_img">
                            <img src="@/assets/images/content/img_ios_set05.png" alt="">
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="guid_img_item">
                          <strong class="fs12 fc01">step 06</strong>
                          <h3 class="tit02">셀룰러 데이터에 사용할 회선을 <br>선택 후 계속을 누르면 끝!</h3>
                          <div class="guid_img">
                            <img src="@/assets/images/content/img_ios_set06.png" alt="">
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- swiper_control -->
                    <div class="card_swiper_control">
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                    </div>
                    <!-- //swiper_control -->
                      
                  </div>

                  <strong>갤럭시(안드로이드)</strong>
                    
                  <div class="swiper cardSwiper ty04">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="guid_img_item ty03">
                          <strong class="fs12 fc01">step 01</strong>
                          <h3 class="tit02">휴대폰 [설정] 메뉴의 <br>[연결]을 눌러주세요</h3>
                          <div class="guid_img">
                            <img src="@/assets/images/content/img_and_set01.png" alt="">
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="guid_img_item">
                          <strong class="fs12 fc01">step 02</strong>
                          <h3 class="tit02">[SIM 카드 관리자] 메뉴를 <br>눌러주세요</h3>
                          <div class="guid_img">
                            <img src="@/assets/images/content/img_and_set02.png" alt="">
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="guid_img_item">
                          <strong class="fs12 fc01">step 03</strong>
                          <h3 class="tit02">[모바일 요금제 추가] 메뉴를 <br>눌러주세요</h3>
                          <div class="guid_img">
                            <img src="@/assets/images/content/img_and_set03.png" alt="">
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="guid_img_item">
                          <strong class="fs12 fc01">step 04</strong>
                          <h3 class="tit02">요금제 추가 되는 동안 <br>잠시만 기다려주세요!</h3>
                          <div class="guid_img">
                            <img src="@/assets/images/content/img_and_set04.png" alt="">
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="guid_img_item">
                          <strong class="fs12 fc01">step 05</strong>
                          <h3 class="tit02">[확인]버튼을 눌러주세요!</h3>
                          <div class="guid_img">
                            <img src="@/assets/images/content/img_and_set05.png" alt="">
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- swiper_control -->
                    <div class="card_swiper_control">
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                    </div>
                    <!-- //swiper_control -->

                  </div>

                </v-expansion-panel-text>
              </div>
            </v-expansion-panel>
          </v-expansion-panels>
        </div><!-- .section -->
      </div>
      
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn md c03" @click="$popup.close('#popup08', '#btn_popup08');">확인</button>
        </div>
      </div>
      <button type="button" class="pop_close" @click="$popup.close('#popup08', '#btn_popup08');"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->


  <!-- [공통][ALFM-CM09-PO00] 가입신청 프로세스 이탈 안내 팝업 -->
  <div class="pop_layer alert" id="popup09" v-if="popup.popup09">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>안내</h3>
      </div>
      <div class="pop_content">
        <div class="info_con">
          ⁠신청을 종료하시겠어요? <br>
          ⁠진행중인 내용은 저장됩니다.
        </div>
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn sm c07" data-action="close" @click="$popup.close('#popup09', '#btn_popup09')">취소</button>
          <button type="button" class="btn sm c02" data-action="close" @click="$popup.close('#popup09', '#btn_popup09')">종료하기</button>
        </div>
      </div>
    </div>
  </div> <!-- // pop_layer -->
  

  <!-- [공통][ALFM-CM10-PO00] 가입신청 이어하기 안내 팝업 -->
  <div class="pop_layer alert" id="popup10" v-if="popup.popup10">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>안내</h3>
      </div>
      <div class="pop_content">
        <div class="info_con">
          ⁠작성중인 신청서가 있습니다.<br>
          ⁠이어서 신청할까요?
        </div>
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn sm c07" data-action="close" @click="$popup.close('#popup10', '#btn_popup10')">취소</button>
          <button type="button" class="btn sm c02" data-action="close" @click="$popup.close('#popup10', '#btn_popup10')">이어하기</button>
        </div>
      </div>
    </div>
  </div> <!-- // pop_layer -->


  <!-- [공통][ALFM-CM12-PG00] 공유하기 -->
  <div class="pop_layer alert" id="popup12" v-if="popup.popup12">
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
          <button type="button" class="btn sm c02" data-action="close" @click="$popup.close('#popup12', '#btn_popup12')">닫기</button>
        </div>
      </div>
    </div>
  </div> <!-- // pop_layer -->









  <div class="pop_layer normal filter_pop" id="filterPop" v-if="popup.filterPop">
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


  <div class="pop_layer full" id="comparePop" v-if="popup.comparePop">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>요금제 비교</h3>
      </div>
      <div class="pop_content">
        <div class="section">
            
          <div class="comp_item_area">
            <div class="comp_item">
              <div>
                <em>인스 모바일 인터넷결합 5G 150GB+</em>
                <strong>월 <span>14,900</span>원</strong>
                <button type="button">삭제</button>
              </div>
            </div>
            <div class="comp_item">
              <button type="button" @click="$popup.close('#comparePop', '#content');">요금제를 선택해주세요</button>
            </div>
            <div class="comp_item pc_show">
              <button type="button" @click="$popup.close('#comparePop', '#content');">요금제를 선택해주세요</button>
            </div>
          </div>

          <div class="comp_item_info">
            <dl>
                <dt>파트너사</dt>
                <dd>
                    <div class="comp_dat">
                        <div class="img"><img src="@/assets/images/data/logo_partner20.png" alt=""></div>
                        <b>인스모바일</b>
                    </div>
                </dd>
                <dd></dd>
                <dd class="pc_show"></dd>
            </dl>
            <dl>
              <dt>월 요금</dt>
              <dd>
                <div class="comp_dat">
                  <strong>월 <span>14,900</span>원</strong>
                  <em>6개월 이후 38,900원 (VAT 포함)</em>
                </div>
              </dd>
              <dd></dd>
              <dd class="pc_show"></dd>
            </dl>
            <dl>
              <dt>데이터</dt>
              <dd>
                <div class="comp_dat">
                  <strong>150GB</strong>
                  <em>매일 2GB+3Mbps 속도로 무제한</em>
                </div>
              </dd>
              <dd></dd>
              <dd class="pc_show"></dd>
            </dl>
            <dl>
              <dt>음성</dt>
              <dd>
                <div class="comp_dat">
                  <strong>기본제공</strong>
                  <em>부가/영상 100분</em>
                </div>
              </dd>
              <dd></dd>
              <dd class="pc_show"></dd>
            </dl>
            <dl>
              <dt>문자</dt>
              <dd>
                <div class="comp_dat">
                  <strong>기본제공</strong>
                </div>
              </dd>
              <dd></dd>
              <dd class="pc_show"></dd>
            </dl>
            <dl>
              <dt>초과 이용요금</dt>
              <dd>
                <ul class="text_list_bull">
                  <li>음성통화(초) 1.98원, 영상통화(초) 3.3원</li>
                  <li>문자 SMS(건) 22원, LMS(건) 44원</li>
                  <li>MMS 사진/그림/배경음악(건) 220원</li>
                  <li>MMS 동영상 첨부(건) 440원</li>
                  <li>데이터 22.528원</li>
                </ul>
              </dd>
              <dd></dd>
              <dd class="pc_show"></dd>
            </dl>
            <dl>
              <dt>유의사항</dt>
              <dd>
                <ul class="text_list_bull">
                  <li>
                    잔여 음성/문자/데이터는 이월불가<br>
                    ※ [예시] USIM LTE 35 고객이 2016년 5월에 데이터를 550MB사용 200MB 미사용 시 200MB 소멸 (6월로 이월 불가)
                  </li>
                  <li>요금제의 변경신청을 하는 경우에는 변경신청일 당일부터 변경된 요금을 적용합니다.</li>
                </ul>
              </dd>
              <dd></dd>
              <dd class="pc_show"></dd>
            </dl>
          </div>

        </div> <!-- // section -->
      </div>
      <button type="button" class="pop_close" data-action="close" @click="$popup.close('#comparePop','#content')"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->


  <div class="pop_layer normal" id="selectPop01" v-if="popup.selectPop01">
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


  <div class="pop_layer normal" id="selectPop02" v-if="popup.selectPop02">
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

  <div class="pop_layer full" id="userReviewPop" v-if="popup.userReviewPop">
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

	<div class="pop_layer full" id="blogReviewPop" v-if="popup.blogReviewPop">
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

  <div class="pop_layer full" id="inspectionPopup01" v-if="popup.inspectionPopup01">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>안내</h3>
      </div>
      <div class="pop_content">
        <div class="section error_area ty02">
          <div class="ttl">
            <h2>지금은<br>시스템 점검중입니다</h2>
            <p>
              다 나은 서비스 제공을 위해<br>
              서비스 점검 작업을 진행하고 있습니다.<br>
              이용에 불편을 드려 죄송합니다.<br>
              빠른 시간 내에 정상적인 서비스가 가능하도록<br>
              최선을 다하겠습니다.<br><br>

              감사합니다.
            </p>
            <div class="error_time">
              <strong>점검시간</strong>
              <span>1월25일 00:00 ~ 1월 25일 04:00</span>
            </div>
          </div>
        </div> <!-- // section -->
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn lg c01" data-action="close" @click="$popup.close('#inspectionPopup01','#btn_inspectionPopup01')">이전 화면으로 돌아가기</button>
        </div>
      </div>
      <button type="button" class="pop_close" data-action="close" @click="$popup.close('#inspectionPopup01','#btn_inspectionPopup01')"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->

  <!-- [ALFM-FT02-PG00] 개인정보처리방침 -->
  <div class="pop_layer normal" id="termsVerPop" v-if="popup.termsVerPop">
		<div class="pop_wrap">
			<div class="pop_header">
					<h3>선택</h3>
			</div>
			<div class="pop_content">
        <ul class="select_list" role="listbox">
          <li role="none" class="on">
            <button type="button" role="option" aria-selected="true" data-option="버전 V.20230204" @click="$popup.select('#termsVerPop', '#btn_termsVerPop');">⁠버전 V.20230204</button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="버전 V.20230203" @click="$popup.select('#termsVerPop', '#btn_termsVerPop');">버전 V.20230203</button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="버전 V.20230103" @click="$popup.select('#termsVerPop', '#btn_termsVerPop');">버전 V.20230103</button>
          </li>
        </ul>
			</div>
      <button type="button" class="pop_close" data-action="close" @click="$popup.close('#termsVerPop', '#btn_termsVerPop')"><span class="blind">팝업 닫기</span></button>
		</div>
	</div> <!-- // pop_layer -->

  <!-- login [ALFM-LG01-PO00] alert popup01 -->
  <div class="pop_layer alert" id="loginPop01" v-if="popup.loginPop01">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>회원가입 안내</h3>
      </div>
      <div class="pop_content">
          <div class="info_con">
            아직 <sup>+</sup>알파의 회원이 아니신가요? <br>지금 바로 가입하시고 <br> 회원만의 혜택을 놓치지 마세요!
          </div>
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn sm c07" data-action="close" @click="$popup.close('#loginPop01', '#btn_loginPop01');">취소</button>
          <button type="button" class="btn sm c02" data-action="close" @click="$popup.close('#loginPop01', '#btn_loginPop01');" >회원가입</button>
        </div>
      </div>
    </div>
  </div> <!-- // pop_layer -->

  <!-- login [ALFM-LG01-PO00] alert popup02 -->
  <div class="pop_layer alert" id="loginPop02" v-if="popup.loginPop02">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>사이트 이용 제한 안내</h3>
      </div>
      <div class="pop_content">
          <div class="info_con">
            관리자 요청에 의해 <br> 사이트 이용이 제한된 계정입니다. <br>문의사항이 있으실 경우,<br> 1:1 문의하기를 이용해 주세요.
          </div>
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn sm c02" data-action="close" @click="$popup.close('#loginPop02', '#btn_loginPop02');">확인</button>
        </div>
      </div>
    </div>
  </div> <!-- // pop_layer -->

  <!-- login [ALFM-LG04-PO00] alert popup03 -->
  <div class="pop_layer alert" id="loginPop03" v-if="popup.loginPop03">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>안내</h3>
      </div>
      <div class="pop_content">
          <div class="info_con">
            이용 가능한 메일 주소입니다!<br>가입을 계속 진행해주세요.
          </div>
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn sm c02" data-action="close" @click="$popup.close('#loginPop03', '#btn_loginPop03');">확인</button>
        </div>
      </div>
    </div>
  </div> <!-- // pop_layer -->

  <!-- login [ALFM-LG04-PO00] alert popup04 -->
  <div class="pop_layer alert" id="loginPop04" v-if="popup.loginPop04">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>안내</h3>
      </div>
      <div class="pop_content">
          <div class="info_con">
            입력하신 이메일 주소는 <br> 이미 사용중이거나 탈퇴한 계정입니다. <br> 다른 이메일 주소를 입력해 주세요.
          </div>
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn sm c02" data-action="close" @click="$popup.close('#loginPop04', '#btn_loginPop04');">확인</button>
        </div>
      </div>
    </div>
  </div> <!-- // pop_layer -->

  <!-- login [ALFM-LG04-PG02] select popup -->
  <div class="pop_layer normal" id="selectDomainPop" v-if="popup.selectDomainPop">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>도메인 선택</h3>
      </div>
      <div class="pop_content">
        <ul class="select_list" role="listbox">
          <li role="none" class="on">
            <button type="button" role="option" aria-selected="true" data-option="직접입력" @click="$popup.select('#selectDomainPop', '#btn_selectDomainPop');">직접입력</button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="naver.com" @click="$popup.select('#selectDomainPop', '#btn_selectDomainPop');">naver.com</button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="daum.net" @click="$popup.select('#selectDomainPop', '#btn_selectDomainPop');">daum.net</button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="hanmail.net" @click="$popup.select('#selectDomainPop', '#btn_selectDomainPop');">hanmail.net</button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="nate.com" @click="$popup.select('#selectDomainPop', '#btn_selectDomainPop');">nate.com</button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="gmail.com" @click="$popup.select('#selectDomainPop', '#btn_selectDomainPop');">gmail.com</button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="dreamwiz.com" @click="$popup.select('#selectDomainPop', '#btn_selectDomainPop');">dreamwiz.com</button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="lycos.co.kr" @click="$popup.select('#selectDomainPop', '#btn_selectDomainPop');">lycos.co.kr</button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="chol.com" @click="$popup.select('#selectDomainPop', '#btn_selectDomainPop');">chol.com</button>
          </li>
        </ul>
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn md c03" data-action="close" @click="$popup.close('#selectDomainPop', '#btn_selectDomainPop')">확인</button>
        </div>
      </div>
      <button type="button" class="pop_close" data-action="close" @click="$popup.close('#selectDomainPop', '#btn_selectDomainPop')"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->

  <div class="pop_layer full" id="starbucks" v-if="popup.starbucks">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>스타벅스</h3>
      </div>
      <div class="pop_content">
        <div class="section">
          <img src="@/assets/images/data/img_benefits02.png" alt="" style="width:100%">
        </div>
      </div>
      <button type="button" class="pop_close" data-action="close" @click="$popup.close('#starbucks', '#btn_starbucks')"><span class="blind">팝업 닫기</span></button>
    </div>
  </div>



  <!-- [ALFM-PR02-PO00] 내게 맞는 요금제 찾기 : intro -->
  <div class="pop_layer full" id="findRatePlanIntro" v-if="popup.findRatePlanIntro">
    <div class="pop_wrap height_fix">
      <div class="pop_header">
        <h3>내게 맞는 요금제 찾기</h3>
      </div>
      <div class="pop_content">
        <div class="page_info">
          고객님에게 꼭 맞는 <br>
          요금제를 추천해드리기 위해 <br>
          몇가지만 물어볼게요!
        </div>
        <div class="section">
          <div class="mypl_char">
            <compLottie name="plan02" />
          </div>
        </div> <!-- // section -->
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn lg c01">시작하기</button>
        </div>
      </div>
      <button type="button" class="pop_close" id="btn_popup01" @click="$popup.open('#popup01', '#btn_popup01');"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->

  <!-- [ALFM-PR02-PO01] 내게 맞는 요금제 찾기 : STEP1 통신사 선택 -->
  <div class="pop_layer full" id="findRatePlan01" v-if="popup.findRatePlan01">
    <div class="pop_wrap height_fix">
      <div class="pop_header">
        <h3>내게 맞는 요금제 찾기</h3>
      </div>
      <div class="pop_content">
        <div class="page_info">
          현재 사용하고 있는<br>
          <span class="fc01">통신사</span>는 어디인가요?
        </div>

        <div class="section">
          <div class="item_list radio_active"> <!-- radio_active : 라디오 리스트 활성화 제어 -->
            <ul>
              <li>
                <div class="radio_ty01">
                  <input type="radio" id="step01_01" name="step01" @change="findRatePlan = true">
                  <label for="step01_01">LG U+</label>
                </div>
              </li>
              <li>
                <div class="radio_ty01">
                  <input type="radio" id="step01_02" name="step01" @change="findRatePlan = true">
                  <label for="step01_02">KT</label>
                </div>
              </li>
              <li>
                <div class="radio_ty01">
                  <input type="radio" id="step01_03" name="step01" @change="findRatePlan = true">
                  <label for="step01_03">SKT</label>
                </div>
              </li>
              <li>
                <div class="radio_ty01">
                  <input type="radio" id="step01_04" name="step01" @change="findRatePlan = true">
                  <label for="step01_04">LG U+ 알뜰폰</label>
                </div>
              </li>
              <li>
                <div class="radio_ty01">
                  <input type="radio" id="step01_05" name="step01" @change="findRatePlan = true">
                  <label for="step01_05">KT 알뜰폰</label>
                </div>
              </li>
              <li>
                <div class="radio_ty01">
                  <input type="radio" id="step01_06" name="step01" @change="findRatePlan = true">
                  <label for="step01_06">SKT 알뜰폰</label>
                </div>
              </li>
              <li>
                <div class="radio_ty01">
                  <input type="radio" id="step01_07" name="step01" @change="findRatePlan = true">
                  <label for="step01_07">사용중인 통신사가 없어요</label>
                </div>
              </li>
            </ul>
          </div>
        </div> <!-- // section -->
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn lg c01" id="nextBtn" v-bind:disabled="findRatePlan == false">다음으로</button>
        </div>
      </div>
      <button type="button" class="pop_close" id="btn_popup01" @click="$popup.open('#popup01', '#btn_popup01');"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->

  <!-- [ALFM-PR02-PO02] 내게 맞는 요금제 찾기 : STEP2 데이터 이용량 -->
  <div class="pop_layer full" id="findRatePlan02" v-if="popup.findRatePlan02">
    <div class="pop_wrap height_fix">
      <div class="pop_header">
        <h3>내게 맞는 요금제 찾기</h3>
      </div>
      <div class="pop_content">
        <div class="page_info">
          하루에 <span class="fc01">데이터</span>는 <br>
          얼마나 사용하세요?
        </div>

        <div class="section">
          <div class="item_list radio_active"> <!-- radio_active : 라디오 리스트 활성화 제어 -->
            <ul>
              <li>
                <div class="radio_ty02">
                  <input type="radio" id="step02_01" name="step02" @change="findRatePlan = true">
                  <label for="step02_01">
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
                <div class="radio_ty02">
                  <input type="radio" id="step02_02" name="step02" @change="findRatePlan = true">
                  <label for="step02_02">
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
                <div class="radio_ty02">
                  <input type="radio" id="step02_03" name="step02" @change="findRatePlan = true">
                  <label for="step02_03">
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
                <div class="radio_ty02">
                  <input type="radio" id="step02_04" name="step02" @change="findRatePlan = true">
                  <label for="step02_04">
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
          </div>
        </div> <!-- // section -->
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn lg c01" id="nextBtn" v-bind:disabled="findRatePlan == false">다음으로</button>
        </div>
      </div>
      <button type="button" class="pop_close" id="btn_popup01" @click="$popup.open('#popup01', '#btn_popup01');"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->

  <!-- [ALFM-PR02-PO03] 내게 맞는 요금제 찾기 : STEP3 통화 이용량 -->
  <div class="pop_layer full" id="findRatePlan03" v-if="popup.findRatePlan03">
    <div class="pop_wrap  height_fix">
      <div class="pop_header">
        <h3>내게 맞는 요금제 찾기</h3>
      </div>
      <div class="pop_content">
        <div class="page_info">
          한달에 <span class="fc01">통화</span>는 <br>
          얼마나 하시나요?
        </div>

        <div class="section">
          <div class="item_list radio_active"> <!-- radio_active : 라디오 리스트 활성화 제어 -->
            <ul>
              <li>
                <div class="radio_ty01">
                  <input type="radio" id="step03_01" name="step03" @change="findRatePlan = true">
                  <label for="step03_01">3시간 이상 해요</label>
                </div>
              </li>
              <li>
                <div class="radio_ty01">
                  <input type="radio" id="step03_02" name="step03" @change="findRatePlan = true">
                  <label for="step03_02">1-2시간 정도 해요</label>
                </div>
              </li>
              <li>
                <div class="radio_ty01">
                  <input type="radio" id="step03_03" name="step03" @change="findRatePlan = true">
                  <label for="step03_03">30분을 넘지 않아요</label>
                </div>
              </li>
              <li>
                <div class="radio_ty01">
                  <input type="radio" id="step03_04" name="step03" @change="findRatePlan = true">
                  <label for="step03_04">전화는 거의 하지 않아요</label>
                </div>
              </li>
            </ul>
          </div>
        </div> <!-- // section -->
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn lg c01" id="nextBtn" v-bind:disabled="findRatePlan == false">다음으로</button>
        </div>
      </div>
      <button type="button" class="pop_close" id="btn_popup01" @click="$popup.open('#popup01', '#btn_popup01');"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->

  <!-- [ALFM-PR02-PO04] 내게 맞는 요금제 찾기 : STEP4 통신 요금 -->
  <div class="pop_layer full" id="findRatePlan04" v-if="popup.findRatePlan04">
    <div class="pop_wrap height_fix">
      <div class="pop_header">
        <h3>내게 맞는 요금제 찾기</h3>
      </div>
      <div class="pop_content">
        <div class="page_info">
          지금 월 <span class="fc01">통신요금</span>은 <br>
          얼마나 내고 있으세요?
          <div class="sub">기기 할부금 제외</div>
        </div>

        <div class="section">
          <div class="item_list radio_active"> <!-- radio_active : 라디오 리스트 활성화 제어 -->
            <ul>
              <li>
                <div class="radio_ty01">
                  <input type="radio" id="step04_01" name="step04" @change="findRatePlan = true">
                  <label for="step04_01">7만원 이상</label>
                </div>
              </li>
              <li>
                <div class="radio_ty01">
                  <input type="radio" id="step04_02" name="step04" @change="findRatePlan = true">
                  <label for="step04_02">5-6만원 대</label>
                </div>
              </li>
              <li>
                <div class="radio_ty01">
                  <input type="radio" id="step04_03" name="step04" @change="findRatePlan = true">
                  <label for="step04_03">3-4만원 대</label>
                </div>
              </li>
              <li>
                <div class="radio_ty01">
                  <input type="radio" id="step04_04" name="step04" @change="findRatePlan = true">
                  <label for="step04_04">1-2만원 대</label>
                </div>
              </li>
            </ul>
          </div>
        </div> <!-- // section -->
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn lg c01" id="nextBtn" v-bind:disabled="findRatePlan == false">다음으로</button>
        </div>
      </div>
      <button type="button" class="pop_close" id="btn_popup01" @click="$popup.open('#popup01', '#btn_popup01');"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->

  <!-- [ALFM-PR02-PO05] 내게 맞는 요금제 찾기 : STEP5 인터넷/TV 결합 -->
  <div class="pop_layer full" id="findRatePlan05" v-if="popup.findRatePlan05">
    <div class="pop_wrap height_fix">
      <div class="pop_header">
        <h3>내게 맞는 요금제 찾기</h3>
      </div>
      <div class="pop_content">
        <div class="page_info">
          혹시 <span class="fc01">인터넷/TV 결합</span>도 <br>
          필요하신가요?
        </div>

        <div class="section">
          <div class="item_list radio_active"> <!-- radio_active : 라디오 리스트 활성화 제어 -->
            <ul>
              <li>
                <div class="radio_ty01">
                  <input type="radio" id="step05_01" name="step05" @change="findRatePlan = true">
                  <label for="step05_01">필요해요!</label>
                </div>
              </li>
              <li>
                <div class="radio_ty01">
                  <input type="radio" id="step05_02" name="step05" @change="findRatePlan = true">
                  <label for="step05_02">필요하지 않아요</label>
                </div>
              </li>
            </ul>
          </div>
        </div> <!-- // section -->
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn lg c01" id="nextBtn" v-bind:disabled="findRatePlan == false">다음으로</button>
        </div>
      </div>
      <button type="button" class="pop_close" id="btn_popup01" @click="$popup.open('#popup01', '#btn_popup01');"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->

  <!-- [ALFM-PR02-PO06] 내게 맞는 요금제 찾기 : 요금제 로딩 -->
  <div class="pop_layer full" id="findRatePlan06" v-if="popup.findRatePlan06">
    <div class="pop_wrap height_fix">
      <div class="pop_header">
        <h3>내게 맞는 요금제 찾기</h3>
      </div>
      <div class="pop_content">
        <div class="page_info">
          지금 고객님의 취향에 <br>
          딱 맞는 요금제만 고르고 있어요
        </div>

        <div class="section">
          <div class="mypl_fin">
            <compLottie name="plan03" />
          </div>
        </div> <!-- // section -->
      </div>
      <div class="pop_footer" style="display:none;">
        <div class="group_btn">
          <button type="button" class="btn lg c01" disabled>다음으로</button>
        </div>
      </div>
      <button type="button" class="pop_close" id="btn_popup01" @click="$popup.open('#popup01', '#btn_popup01');"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->

  <!-- [ALFM-PR02-PO07] 내게 맞는 요금제 찾기 : step6 추천 요금제 보기 -->
  <div class="pop_layer full" id="findRatePlan07" v-if="popup.findRatePlan07">
    <div class="pop_wrap height_fix">
      <div class="pop_header">
        <h3>내게 맞는 요금제 찾기</h3>
      </div>
      <div class="pop_content">
        <div class="section">
          <div class="usage_result">
            <p class="speech_gray">1-2시간 이상 영상을 시청하고, SNS 등 사용량이 많은 편이시군요</p>
            <p class="speech_darkblue">1-2시간 정도 통화를 하시네요!</p>
            <compLottie name="plan04" />
          </div>
        </div>

        <div class="section ty02">
          <div class="page_info mgb20">
            <sup>+</sup>알파 요금제라면, <br>
            연간 <span class="fc01">최대 466,000원</span> 절약!
          </div>

          <div class="box_gray">
            <span class="bar_date">12개월 기준</span>
            <div class="bar_cmpri">
              <div class="before">
                <div class="bar">
                    <div class="bar_inner"><b>2,280,000원</b></div>
                </div>
                <span>변경 전</span>
              </div>
              <div class="after">
                <div class="bar">
                  <div class="bar_inner" style="height: 50%;"><b>979,400원</b></div>
                </div>
                <span>변경 후</span>
              </div>
            </div>
          </div>
        </div> <!-- // section -->

        <div class="section ty02">
          <div class="page_info mgb20">
            고객님에게 딱 맞는 <br>
            요금제를 추천 드려요!
          </div>

          <div class="item_list ty02">
            <compCard :cardInfo="{type: 'ty02', name: 'rateplan1'}" />
            <compCard :cardInfo="{type: 'ty02', name: 'rateplan2'}" />
            <compCard :cardInfo="{type: 'ty02', name: 'rateplan3'}" />
          </div>
        </div> <!-- // section -->
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn lg c01">추천 요금제 더 보러가기</button>
        </div>
      </div>
      <button type="button" class="pop_close" id="btn_popup01" @click="$popup.open('#popup01', '#btn_popup01');"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->

  <!-- [ALFM-PR02-PO08] 내게 맞는 요금제 찾기 : step6 추천 요금제 보기 (추천 요금제가 없을 경우) -->
  <div class="pop_layer full" id="findRatePlan08" v-if="popup.findRatePlan08">
    <div class="pop_wrap height_fix">
      <div class="pop_header">
        <h3>내게 맞는 요금제 찾기</h3>
      </div>
      <div class="pop_content">
          <div class="section">
            <div class="usage_no">
              <p class="speech_darkblue">아쉽게도 고객님에게 맞는 요금제를 찾지 못했어요</p>
              <compLottie name="plan01" />
            </div>
          </div>

          <div class="section ty02">
            <div class="page_info mgb20">
              이용하시는 <span class="fc01">데이터</span>만큼 제공하면서 <br>
              제일 저렴한 요금제를 추천드려요!
            </div>

            <div class="item_list ty02">
              <compCard :cardInfo="{type: 'ty02', name: 'rateplan1'}" />
            </div>
          </div> <!-- // section -->

          <div class="section ty02">
            <div class="page_info mgb20">
              이용하시는 <span class="fc01">통화량</span>만큼 제공하면서 <br>
              제일 저렴한 요금제를 추천드려요!
            </div>

            <div class="item_list ty02">
              <compCard :cardInfo="{type: 'ty02', name: 'rateplan2'}" />
            </div>
          </div> <!-- // section -->
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn lg c01">추천 요금제 더 보러가기</button>
        </div>
      </div>
      <button type="button" class="pop_close" id="btn_popup01" @click="$popup.open('#popup01', '#btn_popup01');"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->

  


  <!-- [ALFM-PR03-PO00] 셀프개통 불가 경우 -->
  <div class="pop_layer alert" id="ALFMPR03PO00" v-if="popup.ALFMPR03PO00">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>안내</h3>
      </div>
      <div class="pop_content">
        <div class="info_con">
          지금은 온라인 신청만 가능한 시간이에요. <br>
          신청서 접수 후, <br>
          ⁠개통이 가능할 때 알려드릴게요!
        </div>
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn sm c02" data-action="close" @click="$popup.close('#ALFMPR03PO00', '#btn_ALFMPR03PO00')">확인</button> <!-- onclick="popUp.close('#popup01', '#btn_popup01');" -->
        </div>
      </div>
    </div>
  </div> <!-- // pop_layer -->


  <!-- USIM 모델 선택 -->
  <div class="pop_layer normal" id="selectUSIMModel" v-if="popup.selectUSIMModel">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>USIM 모델 선택</h3>
      </div>
      <div class="pop_content">
        <ul class="select_list" role="listbox">
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="K3830" @click="$popup.select('#selectUSIMModel', '#btn_selectUSIMModel');">K3830</button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="K3840" @click="$popup.select('#selectUSIMModel', '#btn_selectUSIMModel');">K3840</button>
          </li>
          <li role="none">
            <button type="button" role="option" aria-selected="false" data-option="K3620" @click="$popup.select('#selectUSIMModel', '#btn_selectUSIMModel');">K3620</button>
          </li>
        </ul>
      </div>
      <button type="button" class="pop_close" data-action="close" @click="$popup.close('#selectUSIMModel', '#btn_selectUSIMModel')"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->


  <!-- [ALFM-PR03-PO04] eSIM 미지원 단말기인 경우 -->
  <div class="pop_layer alert" id="ALFMPR03PO04" v-if="popup.ALFMPR03PO04">
    <div class="pop_wrap">
      <div class="pop_header">
        <h3>안내</h3>
      </div>
      <div class="pop_content">
        <div class="info_con">
          해당 단말기는 eSIM을 지원하지 않습니다.<br>
          계속해서 가입신청 후<br>
          상담사를 통해 개통하시겠어요?
        </div>
      </div>
      <div class="pop_footer">
        <div class="btn_group">
          <button type="button" class="btn sm c07" data-action="close" @click="$popup.close('#ALFMPR03PO04', '#btn_ALFMPR03PO04')">상담받고<br>개통할래요</button>
          <button type="button" class="btn sm c02" data-action="close" @click="$popup.close('#ALFMPR03PO04', '#btn_ALFMPR03PO04')">USIM으로<br>개통할래요</button> <!-- onclick="popUp.close('#popup01', '#btn_popup01');" -->
        </div>
      </div>
    </div>
  </div> <!-- // pop_layer -->


  <!-- [ALFM-PR03-PO01] 이미지 업로드 가이드 팝업 -->
  <div class="pop_layer full" id="ALFMPR03PO01" v-if="popup.ALFMPR03PO01">
    <div class="pop_wrap height_fix">
      <div class="pop_header">
        <h3>이미지 업로드 가이드</h3>
      </div>
      <div class="pop_content">
        <div class="section">
          <div class="box_gray">
            <div class="guid_img_item">
              <strong class="fs12 fc01">step 01</strong>
              <h3 class="tit02">통화창에 *#06# 입력</h3>
              <div class="guid_img">
                <img src="@/assets/images/content/img_s_num_01.png" alt="통화창 예시">
              </div>
            </div>

            <div class="next_arrow_bott">
              <img src="@/assets/images/common/ico_arrowB03.png" alt="">
            </div>

            <div class="guid_img_item">
                <strong class="fs12 fc01">step 02</strong>
              <h3 class="tit02">이미지 캡처본 업로드</h3>
              <div class="guid_img">
                <img src="@/assets/images/content/img_s_num_02.png" alt="이미지 캡쳐 예시">
              </div>
            </div>
              
          </div>
        </div> <!-- // section -->
          
        <div class="section">
          <div class="box_gray">
            <ul class="text_list_bull">
              <li>eSIM 개통을 위해서는 가지고 계신 단말기의 EID 및 IMEI 정보 입력이 필요합니다.</li>
              <li>이미지 업로드 시 각 항목이 자동으로 입력됩니다.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <button type="button" class="pop_close" id="btn_popup02" @click="$popup.close('#ALFMPR03PO01', '#btn_ALFMPR03PO01');"><span class="blind">팝업 닫기</span></button>
    </div>
  </div> <!-- // pop_layer -->




</div>

</template>
  
<script>
import '@/assets/js/swiper-bundle.min.js';
import '@/assets/css/swiper-bundle.css';
import compLottie from "@/components/Lottie.vue";
import compCard from '@/components/Card.vue'

export default {
  name: 'compPopup',
  data(){
    return {
      value: [0, 60000],
      popup: { "popup01" : false },
      toggle08: [0],          // eSIM 활성화 방법 팝업 toggle
      findRatePlan: false,    // 내게 맞는 요금제 찾기 버튼 활성화
    }
  },
  watch: {
    toggle08(a, b){ // eSIM 활성화 방법 팝업 swiper
      if( b[1] != "1" ) setTimeout(()=>{ this.$swiper.init() }, 1);
    }
  },
  methods: {
    rangeChange(e){
      this.value[0] = e.target.getAttribute("data-min");
      this.value[1] = e.target.getAttribute("data-max");
    },
    popup06_2_termsCheck(){  // 위치정보 활용동의 checkbox 체크 여부
      const isChecked = document.querySelector("#check_01").checked;
      if( isChecked ){  this.$popup.close('#popup06_2', '#btn_popup06_2');
      } else {          this.$popup.open('#popup06_3', '#btn_popup06_3');
      }
    }
  },
  props: {
    popupItem: Array,
  },
  mounted(){
    setTimeout(() => {
      if( this.popupItem.length < 1 ) return;

      this.popupItem.forEach( a => { this.popup[a] = true;});

      // if( this.toggle08[0] == 1 ) this.$swiper.init();  // eSIM 활성화 방법 팝업 swiper
  
    }, 0);
  },
  components: {
    compLottie,
    compCard
  }
}
</script>
  