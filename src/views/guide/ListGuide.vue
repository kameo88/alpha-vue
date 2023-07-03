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
            <tr class="ing">
              <td>layout</td>
              <td></td>
              <td></td>
              <td></td>
              <td class="url"><a href="/list/layout" target="_blank">/list/layout</a></td>
              <td class="marker"></td>
              <td class="date"></td>
              <td>
                layout, loading, skip menu, header, aside menu, container, footer, floating area <br>
                PC header
              </td>
            </tr>
            <tr class="ing">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td class="url"><a href="/list/template" target="_blank">/list/template</a></td>
              <td class="marker"></td>
              <td class="date"></td>
              <td>
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
            <tr class="ing">
              <td></td>
              <td>popup</td>
              <td></td>
              <td></td>
              <td class="url"><a href="/list/popup" target="_blank">/list/popup</a></td>
              <td class="marker"></td>
              <td class="date"></td>
              <td>
                <p><b>[06/28]</b>popup script 작업완료</p>
                <p>&amp; tooltip</p>
              </td>
            </tr>
            <tr class="ing">
              <td>component</td>
              <td>text</td>
              <td></td>
              <td></td>
              <td class="url"><a href="/list/text" target="_blank">/list/text</a></td>
              <td class="marker"></td>
              <td class="date"></td>
              <td></td>
            </tr>
            <tr class="ing">
              <td></td>
              <td>form</td>
              <td></td>
              <td></td>
              <td class="url"><a href="/list/form" target="_blank">/list/form</a></td>
              <td class="marker"></td>
              <td class="date"></td>
              <td>06.21 디자인 적용된 form &gt; form etc 페이지 분리</td>
            </tr>
            <tr class="ing">
              <td></td>
              <td>form etc</td>
              <td></td>
              <td></td>
              <td class="url"><a href="/list/form_etc" target="_blank">/list/form_etc</a></td>
              <td class="marker"></td>
              <td class="date"></td>
              <td></td>
            </tr>
            <tr class="ing">
              <td></td>
              <td>tab</td>
              <td></td>
              <td></td>
              <td class="url"><a href="/list/tab" target="_blank">/list/tab</a></td>
              <td class="marker"></td>
              <td class="date"></td>
              <td>
                <p><b>[06/28]</b> tab script 작업완료</p>
                <p><b>[06/29]</b> tab scroll script 작업완료</p>
              </td>
            </tr>
            <tr class="ing">
              <td></td>
              <td>filter &amp; tag</td>
              <td></td>
              <td></td>
              <td class="url"><a href="/list/tag" target="_blank">/list/tag</a></td>
              <td class="marker"></td>
              <td class="date"></td>
              <td>
                <p><b>[06/29]</b> tag script 작업완료</p>
                <p><b>[06/29]</b> tag variable(반응형)을 포함한 컴포넌트의 경우 mounted(){ this.$tag.variable.resize() } 필요</p>
                <p><b>[06/29]</b> Tag list02 마크업 검토 필요</p>
                <p><b>[06/29]</b> range vuetify 마이그레이션</p>
              </td>
            </tr>
            <tr class="ing">
              <td></td>
              <td>accordion</td>
              <td></td>
              <td></td>
              <td class="url"><a href="/list/accordion" target="_blank">/list/accordion</a></td>
              <td class="marker"></td>
              <td class="date"></td>
              <td></td>
            </tr>
            <tr class="ing">
              <td></td>
              <td><strong class="fc">button &amp; more</strong></td>
              <td></td>
              <td></td>
              <td class="url"><a href="/list/button" target="_blank">/list/button</a></td>
              <td class="marker"></td>
              <td class="date"></td>
              <td></td>
            </tr>
            <tr class="ing">
              <td></td>
              <td>table</td>
              <td></td>
              <td></td>
              <td class="url"><a href="/list/table" target="_blank">/list/table</a></td>
              <td class="marker"></td>
              <td class="date"></td>
              <td>06.21 2단 table &gt; dl 태그로 수정, info list 페이지 분리</td>
            </tr>
            <tr class="ing">
              <td></td>
              <td>info list</td>
              <td></td>
              <td></td>
              <td class="url"><a href="/list/info_list" target="_blank">/list/info_list</a></td>
              <td class="marker"></td>
              <td class="date"></td>
              <td></td>
            </tr>
            <tr class="ing">
              <td></td>
              <td>flag</td>
              <td></td>
              <td></td>
              <td class="url"><a href="/list/flag" target="_blank">/list/flag</a></td>
              <td class="marker"></td>
              <td class="date"></td>
              <td></td>
            </tr>
            <tr class="ing">
              <td></td>
              <td>list</td>
              <td></td>
              <td></td>
              <td class="url"><a href="/list/list" target="_blank">/list/list</a></td>
              <td class="marker"></td>
              <td class="date"></td>
              <td>
                sort, item, list, pagination
              </td>
            </tr>
            <tr class="ing">
              <td></td>
              <td>swiper</td>
              <td></td>
              <td></td>
              <td class="url"><a href="/list/swiper" target="_blank">/list/swiper</a></td>
              <td class="marker"></td>
              <td class="date"></td>
              <td></td>
            </tr>
            <tr class="ing">
              <td></td>
              <td>logo</td>
              <td></td>
              <td></td>
              <td class="url"><a href="/list/logo" target="_blank">/list/logo</a></td>
              <td class="marker"></td>
              <td class="date"></td>
              <td></td>
            </tr>
            <tr class="ing">
              <td></td>
              <td>animation</td>
              <td></td>
              <td></td>
              <td class="url"><a href="/list/animation" target="_blank">/list/animation</a></td>
              <td class="marker"></td>
              <td class="date"></td>
              <td></td>
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
