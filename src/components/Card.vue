<template>
  <div class="plan_item" v-if="cardInfo.type == 'ty01'">
    <div class="ranking" v-if="cardInfo.lanking">
        <strong>{{ cardInfo.lanking }}위</strong>
    </div>
    <div class="card_top">
      <div class="partner">
        <img src="/src/assets/images/data/logo_s_partner06.png" alt="프리티">
        <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
      </div>
      <div class="beft">
        <img src="/src/assets/images/component/img_flag01.png" alt="특가">
        <img src="/src/assets/images/component/img_flag02.png" alt="+알파 only">
      </div>
    </div>

    <div class="card_mid">
      <span class="plan_tit">데이터안심15G+</span>
      <strong class="plan_tit_sub">
        월 11GB + 매일 2GB + 3Mbps
        <v-btn :id="`${cardInfo.name}-1`" class="tooltip_btn" :class="{on : tooltip[0]}" title="툴팁" @click="tooltip[0] = !tooltip[0]">요금제 툴팁</v-btn>
      </strong>
      <div class="plan_info">
        <span class="phone"><span class="blind">통화량</span>100분</span>
        <span class="message"><span class="blind">문자량</span>100건</span>
        <span class="cellular"><span class="blind">통신기술</span>LTE</span>
      </div>
    </div>
    <v-tooltip v-model="tooltip[0]" :activator="`#${cardInfo.name}-1`" location="top" offset="0" scroll-strategy="close" :open-on-hover="false" no-click-animation contained>
      <div class="tooltip_content">
        데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
      </div>
    </v-tooltip>

    <div class="combi">
      <div class="combi_inner">
        <strong>
          <v-btn :id="`${cardInfo.name}-2`" class="tooltip_btn" :class="{on : tooltip[1]}" title="툴팁" @click="tooltip[1] = !tooltip[1]">요금제 툴팁</v-btn>
          <span class="fc01">결합하면</span> 월 10,890원
        </strong>
        <span class="period">6개월 이후 38,900원</span>
      </div>
      <a href="javascript:void(0);" class="btn sm c02">자세히보기</a>

      <!-- <div class="choice">22,521명이 선택했어요</div> -->
    </div>
    <v-tooltip v-model="tooltip[1]" :activator="`#${cardInfo.name}-2`" location="top" offset="0" scroll-strategy="close" :open-on-hover="false" no-click-animation contained>
      <div class="tooltip_content">
        LG U+ 인터넷/IPTV 신규 가입 + 알뜰폰 결합 시, 최대 118만원의 혜택을 받을 수 있어요!
      </div>
    </v-tooltip>
      
    <div class="acdItem" :class="{ on : detail }">
      <div class="card_bot">
        <div class="paln_badge">
          <button type="button" class="btn bag c01" :class="{ on : flag[0] }" @click="flag[0] = !flag[0]"><span class="blind">찜하기</span>480</button>
          <button type="button" class="btn bag c02" :class="{ on : flag[1] }" @click="flag[1] = !flag[1]">비교하기</button>
        </div>

        <div class="gift_box">
          <div class="bag_list">
            <ul>
              <li>
                <div class="bag_git">
                  <img src="/src/assets/images/component/img_gifts01.png" alt="스타벅스 로고">
                </div>
              </li>
              <li>
                <div class="bag_git">
                  <img src="/src/assets/images/component/img_gifts02.png" alt="신세계 로고">
                </div>
              </li>
              <li>
                <div class="bag_git">
                  <img src="/src/assets/images/component/img_gifts03.png" alt="선물상자 로고">
                </div>
              </li>
              <li>
                <div class="bag_git">
                  <img src="/src/assets/images/component/img_gifts04.png" alt="네이버페이 로고">
                </div>
              </li>
              <li>
                <div class="bag_git">
                  <img src="/src/assets/images/component/img_gifts05.png" alt="데이터 로고">
                </div>
              </li>
              <li>
                <div class="bag_git">
                  +2
                </div>
              </li>
            </ul>
          </div>

          <div class="acc_box">
            <button type="button" :aria-expanded="detail" class="acc_btn" @click="detail = !detail">사은품 최대 <span>3</span>개</button>
          </div>
        </div>
      </div>
      <Transition name="cardDetail">
        <div role="region" v-if="detail">
          <ul class="acc_contents">
            <li>
              <div class="bag_git">
                <img src="/src/assets/images/component/img_gifts03.png" alt="선물상자 로고">
              </div>
              <span>일반 유심 무료 발송</span>
            </li>
            <li>
              <div class="bag_git">
                <img src="/src/assets/images/component/img_gifts04.png" alt="네이버페이 로고">
              </div>
              <span>네이버페이 5,000P 제공</span>
            </li>
            <li>
              <div class="bag_git">
                <img src="/src/assets/images/component/img_gifts02.png" alt="신세계 로고">
              </div>
              <span>신세계상품권 10,000원권 증정</span>
            </li>
            <li>
              <div class="bag_git">
                <img src="/src/assets/images/component/img_gifts01.png" alt="스타벅스 로고">
              </div>
              <span>스타벅스 아메리카노 기프티콘 2잔 제공</span>
            </li>
            <li>
              <div class="bag_git">
                <img src="/src/assets/images/component/img_gifts02.png" alt="신세계 로고">
              </div>
              <span>신세계 상품권 1만원</span>
            </li>
            <li>
              <div class="bag_git">
                <img src="/src/assets/images/component/img_gifts05.png" alt="데이터 로고">
              </div>
              <span>NFC 유심 50% 할인</span>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
    <!-- <a href="javascript:void(0);" class="link_list">
      <span class="blind">요금제 상세페이지 이동</span>
    </a> -->
  </div>

  <div class="plan_item" v-if="cardInfo.type == 'ty02'">
    <div class="card_top">
      <div class="partner">
        <img src="/src/assets/images/data/logo_s_partner06.png" alt="프리티">
        <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
      </div>
      <div class="beft siz_l">
        <img src="/src/assets/images/component/img_flag06.png" alt="+알파추천">
      </div>
    </div>
      
    <div class="card_mid">
      <strong class="plan_tit_sub">
        월 11GB + 매일 2GB + 3Mbps
        <v-btn :id="`${cardInfo.name}-1`" class="tooltip_btn" :class="{on : tooltip[2]}" title="툴팁" @click="tooltip[2] = !tooltip[2]">툴팁</v-btn>
      </strong>
      <div class="plan_info">
        <span class="phone"><span class="blind">통화량</span>100분</span>
        <span class="message"><span class="blind">문자량</span>100건</span>
        <span class="cellular"><span class="blind">통신기술</span>LTE</span>
      </div>
    </div>
    <v-tooltip v-model="tooltip[2]" :activator="`#${cardInfo.name}-1`" location="top" offset="0" scroll-strategy="close" :open-on-hover="false" no-click-animation contained>
      <div class="tooltip_content">
        데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
      </div>
    </v-tooltip>

    <div class="combi">
      <div class="combi_inner">
        <strong>월 10,890원</strong>
        <span class="period">6개월 이후 38,900원</span>
      </div>
      <a href="javascript:void(0);" class="btn sm c02">자세히보기</a>
      
      <div class="choice">22,521명이 선택했어요</div>
    </div>

    <!-- <a href="javascript:void(0);" class="link_list">
      <span class="blind">요금제 상세페이지 이동</span>
    </a> -->
  </div>

</template>

<script>
export default {
  name: 'compCard',
  data(){
    return {
      flag: [false, false],
      tooltip: [false, false],
      detail: false,
    }
  },
  mounted(){
    this.detail = (this.cardInfo.detail) ? this.cardInfo.detail : this.detail;
  },
  props: {
    cardInfo: Object
  }
}
</script>