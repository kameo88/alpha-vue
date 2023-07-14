<template>

	<div class="container">
		<div class="content" id="content">
			<h2 class="title_nav">PC 페이지 nav (class="title_nav") Guide</h2>

			<div class="page_info">페이지 안내 (class="page_info") page info</div>
			
			<div class="section">
				<h3 class="tit02">sub title in section (class="tit02")</h3>
				<h3 class="tit03">sub title in section (class="tit03")</h3>

				<div class="tit_wrap">
					<h3 class="tit03">title (class="tit03")</h3>
					<a href="javascript:void(0);" class="more">더보기</a>
				</div>

				body (font-size:1.4rem; line-height:2rem; color:#222;)

				<div class="share_box">
					<span>text</span>
					<button type="button" class="btn_share" id="btn_popup12" @click="$popup.open('#popup12', '#btn_popup12');"><span class="blind">공유하기</span></button>

				</div>
			</div> <!-- // section -->

			<div class="section">
				<h3 class="tit02">text_list_bull</h3>
				<ul class="text_list_bull">
					<li>
						비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.
						<ul class="text_list_dash">
							<li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
							<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
						</ul>
					</li>
					<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
				</ul>

				<ul class="text_list_bull">
					<li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
					<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
				</ul>
			</div> <!-- // section -->

			<div class="section">
				<h3 class="tit02">text_list_dash</h3>
				<ul class="text_list_dash">
					<li>
						비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.
						<ul class="text_list_bull">
							<li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
							<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
						</ul>
					</li>
					<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
				</ul>
				<ul class="text_list_dash">
					<li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
					<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
				</ul>
			</div> <!-- // section -->

			<div class="section">
				<h3 class="tit02">text_info</h3>
				
				<div class="text_info">종료일 기준으로 최근 2개월간 지난 이벤트 조회가 가능합니다</div>
			</div> <!-- // section -->

			<div class="section">
				<h3 class="tit02">box</h3>
				<div class="box_gray">
					<ul class="text_list_bull">
						<li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
						<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
					</ul>
				</div>

				<div class="box_line">
					<ul class="text_list_bull">
						<li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
						<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
					</ul>
				</div>

				<div class="box_red">
					<ul class="text_list_bull">
						<li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
						<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
					</ul>
				</div>

				<div class="box_yellow">
					<ul class="text_list_bull">
						<li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
						<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
					</ul>
				</div>
			</div> <!-- // section -->


		</div> <!-- // content -->
	</div><!-- // container -->


</template>

<script>
export default {
  name: 'GuideText',
  emits: ['popupItem', 'setLayout'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },
      popupItem: ['popup12'],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    this.$emit('popupItem', this.popupItem);
  }
}
</script>
