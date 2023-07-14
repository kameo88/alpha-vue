<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">Filter & Tag</div>

      <div class="tag_list">
        <ul>
          <li><button type="button" role="option" disabled @click="$tag.click">지금 HOT한</button></li>
          <li><button type="button" role="option" disabled @click="$tag.click">이달의 추천</button></li>
          <li><button type="button" role="option" disabled @click="$tag.click">데이터x통화 무제한</button></li>
          <li><button type="button" role="option" disabled @click="$tag.click">사은품 팡팡</button></li>
          <li><button type="button" role="option" disabled @click="$tag.click">인터넷 결합 요금제</button></li>
          <li><button type="button" role="option" disabled @click="$tag.click">카톡/인터넷용</button></li>
          <li><button type="button" role="option" disabled @click="$tag.click">5G 요금제</button></li>
          <li><button type="button" role="option" disabled @click="$tag.click">부모님 추천</button></li>
          <li><button type="button" role="option" disabled @click="$tag.click">초저가요금제</button></li>
          <li><button type="button" role="option" disabled @click="$tag.click">통화무제한</button></li>
        </ul>
      </div>
          
      <div class="tag_list tagList">
        <button type="button" aria-expanded="false" @click="$tag.variable.click"><span class="blind">펼쳐 보기</span></button>
        <ul>
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
      </div>

      <div class="section">
        <h3 class="tit02">Tag list</h3>
          
        <div class="tag_list tagList">
          <button type="button" aria-expanded="false" @click="$tag.variable.click"><span class="blind">펼쳐 보기</span></button>
          <ul>
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
                <li role="none" class="on"><button type="button" role="option" aria-selected="true" @click="$tag.other.select">후불유심요금제</button></li>
                <li role="none"><button type="button" role="option" aria-selected="false" @click="$tag.other.select">선불유심요금제</button></li>
              </ul>
            </div>
          </div>

          <div class="tag_list variable tagList">
            <button type="button" aria-expanded="false" @click="$tag.variable.click"><span class="blind">펼쳐 보기</span></button>
            <ul>
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
</template>



<script>

export default {
  name: "GuideTag",
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },
      popupItem: ['filterPop']
    }
  },
  mounted(){
    this.$tag.variable.resize();
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);
  }
};
</script>