<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">Info List</div>
      
      <div class="section">
        <div class="list_info_ty01">
          <dl>
            <dt>수령인</dt>
            <dd>김알파 <button type="button" class="btn xsm c07">혜택보기</button></dd>
          </dl>
          <dl>
            <dt>휴대폰번호</dt>
            <dd>010-2222-2222</dd>
          </dl>
          <dl>
            <dt>주소</dt>
            <dd>03924 서울특별시 마포구 월드컵로 416(상암동, ㈜엘지유플러스 상암사옥) 13층</dd>
          </dl>
          <dl>
            <dt>배송시 요청사항</dt>
            <dd>배송시 연락주세요.</dd>
          </dl>
        </div>

        <br>

        <div class="list_info_ty02">
          <dl>
            <dt><span class="th_ico">주소</span></dt>
            <dd>서울 마포구 월드컵북로 396, 100호(상암동 1605,누리꿈스퀘어 1F)</dd>
          </dl>
          <dl>
            <dt><span class="th_ico">전화번호</span></dt>
            <dd>070-358-3515</dd>
          </dl>
          <dl>
            <dt><span class="th_ico">영업시간</span></dt>
            <dd>
              <dl>
                <dt><b>평일</b></dt>
                <dd>오전 10:00 ~ 오후 08:00</dd>
                <dt><b>토요일</b></dt>
                <dd>오전 10:00 ~ 오후 08:00</dd>
                <dt><b>일요일</b></dt>
                <dd>오전 10:00 ~ 오후 08:00</dd>
                <dt><b>공휴일</b></dt>
                <dd>오전 10:00 ~ 오후 08:00</dd>
              </dl>
            </dd>
          </dl>
          <dl>
            <dt><span class="th_ico">매장 휴무일</span></dt>
            <dd>일요일 휴무, 명절 당일</dd>
          </dl>
        </div>

        <br>

        <div class="list_info_ty01">
          <dl>
            <dt>국내전용</dt>
            <dd class="ann_fee"><b>10,000원</b></dd>
          </dl>
          <dl>
            <dt>해외 겸용(VISA)</dt>
            <dd class="ann_fee"><b>10,000원</b></dd>
          </dl>
        </div>

      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'GuideInfoList',
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
