<template>
  <div>
    <h2>Guide : v0.0</h2>

    <div class="cont">
      <table>
        <caption>list</caption>
        <colgroup>
          <col span="1">
          <col span="1">
          <col span="1">
          <col span="1">
          <col span="1">
          <col span="1">
          <col span="1">
          <col span="1">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">1 Depth</th>
            <th scope="col">2 Depth</th>
            <th scope="col">3 Depth</th>
            <th scope="col">4 Depth</th>
            <th scope="col">URL</th>
            <th scope="col">상태</th>
            <th scope="col">Date</th>
            <th scope="col">비고</th>
          </tr>
        </thead>
        <tbody>
          <tr class="com">
            <td>list guide</td>
            <td>컨펌 진행중</td>
            <td></td>
            <td></td>
            <td class="url"><a href="" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              tr class="com" : 컨펌 진행 및 수정
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>퍼블완료</td>
            <td></td>
            <td></td>
            <td class="url"><a href="" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              tr class="end"
            </td>
          </tr>
          <tr class="mod">
            <td></td>
            <td>수정</td>
            <td></td>
            <td></td>
            <td class="url"><a href="" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              tr class="mod" : 퍼블리싱 완료 후 수정
            </td>
          </tr>
          <tr class="hid">
            <td></td>
            <td>제외</td>
            <td></td>
            <td></td>
            <td class="url"><a href="" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              tr class="hid"
            </td>
          </tr>
          <tr class="end">
            <td>layout</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="url"><a href="/guide/layout" target="_blank">/guide/layout</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[07/13]</b> aside menu 상단 버튼 고정</p>
              <p><b>[07/12]</b> Header Layout 정리</p>
              <p><b>[07/05]</b> loading (lottie player) 작업완료</p>
              <p><b>[07/04]</b> gnb, aside script, skip menu 작업완료</p>
              <p class="fc"><b>[07/03]</b> aside float 추가</p>
              layout, loading, skip menu, header, aside menu, container, footer, floating area <br>
              PC header
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="url"><a href="/guide/template" target="_blank">/guide/template</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              sample file
            </td>
          </tr>
          <!-- <tr class="">
            <td></td>
            <td>loading</td>
            <td></td>
            <td></td>
            <td class="url"><a href="" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr> -->
          <tr class="end">
            <td></td>
            <td>popup</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/guide/popup" target="_blank">/guide/popup</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[07/13]</b> tooltip 위치 오류 수정</p>
              <p><b>[07/06]</b> tooltip contained 케이스 추가</p>
              <p><b>[07/04]</b> tooltip vuetify 작업완료</p>
              <p><b>[06/28]</b> popup script 작업완료</p>
            </td>
          </tr>
          <tr class="end">
            <td>component</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/guide/text" target="_blank">/guide/text</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="end">
            <td></td>
            <td>form</td>
            <td></td>
            <td></td>
            <td class="url">
              <a href="/guide/form" target="_blank">/guide/form</a>
            </td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>06.21 디자인 적용된 form &gt; form etc 페이지 분리</td>
          </tr>
          <!-- <tr class="ing">
            <td></td>
            <td>form</td>
            <td></td>
            <td></td>
            <td class="url">
              <a href="/guide/form_vuetify" target="_blank">/guide/form_vuetify</a>
            </td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>vuetify form</td>
          </tr> -->
          <tr class="end">
            <td></td>
            <td>form etc</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/guide/form_etc" target="_blank">/guide/form_etc</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="end">
            <td></td>
            <td>tab</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/guide/tab" target="_blank">/guide/tab</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[06/28]</b> tab script 작업완료</p>
              <p><b>[06/29]</b> tab scroll script 작업완료</p>
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>filter &amp; tag</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/guide/tag" target="_blank">/guide/tag</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[06/29]</b> tag script 작업완료</p>
              <p><b>[06/29]</b> tag variable(반응형)을 포함한 컴포넌트의 경우 mounted(){ this.$tag.variable.resize() } 필요</p>
              <p><b>[06/29]</b> Tag list02 마크업 검토 필요</p>
              <p><b>[06/29]</b> range vuetify 마이그레이션</p>
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>accordion</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/guide/accordion" target="_blank">/guide/accordion</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[07/06]</b> accordion ty03 케이스 추가</p>
              <p><b>[07/03]</b> accordion, toggle vuetify 작업완료</p>
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>button &amp; more</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/guide/button" target="_blank">/guide/button</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="end">
            <td></td>
            <td>table</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/guide/table" target="_blank">/guide/table</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>06.21 2단 table &gt; dl 태그로 수정, info list 페이지 분리</td>
          </tr>
          <tr class="end">
            <td></td>
            <td>info list</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/guide/info_list" target="_blank">/guide/info_list</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="end">
            <td></td>
            <td>flag</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/guide/flag" target="_blank">/guide/flag</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[07/04]</b> flag 이벤트 처리 완료</p>
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>list</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/guide/list" target="_blank">/guide/list</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[07/07]</b> rating(vuetify) 추가</p>
              sort, item, list, pagination
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>swiper</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/guide/swiper" target="_blank">/guide/swiper</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[07/04]</b> swiper 작업완료</p>
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>logo</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/guide/logo" target="_blank">/guide/logo</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[07/06]</b> 페이지 추가</p>
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>animation</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/guide/animation" target="_blank">/guide/animation</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[07/05]</b> loading (lottie player)</p>
            </td>
          </tr>
          <tr class="end">
            <td></td>
            <td>sticky</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/guide/sticky" target="_blank">/guide/sticky</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              <p><b>[07/07]</b> 사용자 & 블로그 리뷰 팝업</p>
              <p><b>[07/05]</b> sticky script 작업완료</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- table list -->
  </div>
</template>

<script>
export default {
  name: 'ListGuide',
}
</script>
