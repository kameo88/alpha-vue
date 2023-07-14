<template>

	<div class="container">
		<div class="content" id="content">
			<h2 class="title_nav">Guide</h2>

			<div class="page_info">Table</div>
			
      <div class="section">
        <div class="table">
          <table>
            <caption>통신요금정보</caption>
            <colgroup>
              <col style="width:26%">
              <col style="width:26%">
              <col style="width:auto;">
              <col style="width:26%">
            </colgroup>
            <thead>
              <tr>
                <th scope="colgroup" colspan="4"><b>통신요금 월 할인한도</b></th>
              </tr>
              <tr>
                <th scope="col">전월 이용 금액</th>
                <th scope="col">카드 할인</th>
                <th scope="col">추가 할인</th>
                <th scope="col">총 할인 한도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>30만원 이상~70만원 미만</td>
                <td><b>7,000원~10,000원</b></td>
                <td><b><span class="fc01">10,000</span>원</b></td>
                <td><b>17,000원~20,000원</b></td>
              </tr>
              <tr>
                <td>70만원 이상~120만원 미만</td>
                <td><b>10,000원~13,000원</b></td>
                <td><b><span class="fc01">9,000</span>원</b></td>
                <td><b>19,000원~22,000원</b></td>
              </tr>
              <tr>
                <td>120만원 미만</td>
                <td><b>13,000원~16,000원</b></td>
                <td><b><span class="fc01">6,000</span>원</b></td>
                <td><b>19,000원~22,000원</b></td>
              </tr>
            </tbody>
          </table>
        </div>

        <br><br>

        <div class="table ty02">
          <table>
            <caption>모델정보</caption>
            <colgroup>
              <col style="width:4.5rem">
              <col style="width:auto">
              <col style="width:auto">
              <col style="width:auto">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">선택</th>
                <th scope="col">모델명</th>
                <th scope="col">모델코드</th>
                <th scope="col">용량</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="radio_st">
                    <input type="radio" id="radio01_00" name="radio01">
                    <label for="radio01_00"></label>
                  </div>
                </td>
                <td>iPhone13 Pro</td>
                <td>A2538</td>
                <td>128GB</td>
              </tr>
              <tr>
                <td>
                  <div class="radio_st">
                    <input type="radio" id="radio01_02" name="radio01">
                    <label for="radio01_02"></label>
                  </div>
                </td>
                <td>iPhone13 Pro</td>
                <td>A2538</td>
                <td>128GB</td>
              </tr>
              <tr>
                <td>
                  <div class="radio_st">
                    <input type="radio" id="radio01_03" name="radio01">
                    <label for="radio01_03"></label>
                  </div>
                </td>
                <td>iPhone13 Pro</td>
                <td>A2538</td>
                <td>128GB</td>
              </tr>
              <tr>
                <td>
                  <div class="radio_st">
                    <input type="radio" id="radio01_04" name="radio01">
                    <label for="radio01_04"></label>
                  </div>
                </td>
                <td>iPhone13 Pro</td>
                <td>A2538</td>
                <td>128GB</td>
              </tr>
            </tbody>
          </table>
        </div>

        <br><br>

        <div class="table ty03">
          <table>
            <caption>매장정보</caption>
            <colgroup>
              <col style="width:30%">
              <col style="width:auto">
              <col style="width:8rem">
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">2022.10.03</th>
                <td>5G 더빠른 180GB+</td>
                <td class="tb_stat"><button type="button" class="btn xsm c07">혜택보기</button></td>
              </tr>
              <tr>
                <th scope="row">2022.10.03</th>
                <td>데이터안심무제한 7G+</td>
                <td class="tb_stat">등록완료</td>
              </tr>
              <tr>
                <th scope="row">2022.10.03</th>
                <td>인스 유심 스피드 180 1123123</td>
                <td class="tb_stat">등록완료</td>
              </tr>
              <tr>
                <th scope="row">2022.10.03</th>
                <td>데이터안심무제한 7G+</td>
                <td class="tb_stat">등록완료</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div> <!-- // section -->

		</div> <!-- // content -->
	</div><!-- // container -->

</template>

<script>
export default {
  name: 'GuideTable',
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
