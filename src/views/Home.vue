<template>
  home

  <div class="wrap">

    <GuideHeader :page="page" :pageOn="pageOn" @changeGuidePage="changeGuidePage" />

    <h2>Guide : v0.0</h2>

    <div class="cont">
      <table>
        <caption></caption>
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
            <td class="url"><a href="./guide/layout.html" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              layout, loading, skip menu, header, aside menu, container, footer, floating area <br>
              PC header
            </td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>popup</td>
            <td></td>
            <td></td>
            <td class="url"><a href="./guide/popup.html" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>& tooltip</td>
          </tr>
          <tr class="ing">
            <td>component</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td class="url"><a href="./guide/text.html" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>form</td>
            <td></td>
            <td></td>
            <td class="url"><a href="./guide/form.html" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>06.21 디자인 적용된 form > form etc 페이지 분리</td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>form etc</td>
            <td></td>
            <td></td>
            <td class="url"><a href="./guide/form_etc.html" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>tab</td>
            <td></td>
            <td></td>
            <td class="url"><a href="./guide/tab.html" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>filter & tag</td>
            <td></td>
            <td></td>
            <td class="url"><a href="./guide/tag.html" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>accordion</td>
            <td></td>
            <td></td>
            <td class="url"><a href="./guide/accordion.html" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>button & more</td>
            <td></td>
            <td></td>
            <td class="url"><a href="./guide/button.html" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>table</td>
            <td></td>
            <td></td>
            <td class="url"><a href="./guide/table.html" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>06.21 2단 table > dl 태그로 수정, info list 페이지 분리</td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>info list</td>
            <td></td>
            <td></td>
            <td class="url"><a href="./guide/info_list.html" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>flag</td>
            <td></td>
            <td></td>
            <td class="url"><a href="./guide/flag.html" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>list</td>
            <td></td>
            <td></td>
            <td class="url"><a href="./guide/list.html" target="_blank"></a></td>
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
            <td class="url"><a href="./guide/swiper.html" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>logo</td>
            <td></td>
            <td></td>
            <td class="url"><a href="./guide/logo.html" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>animation</td>
            <td></td>
            <td></td>
            <td class="url"><a href="./guide/animation.html" target="_blank"></a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- // table list -->

  </div>
  <!-- // wrap -->

  <hr> <!-- empty -->
</template>

<script>
import GuideHeader from '@/components/GuideHeader.vue'

export default {
  name: 'GuideHome',
  methods: {
    changeGuidePage(num){
      this.$emit('changeGuidePage', num);
    }
  },
  props : {
    page: Object,
    pageOn: Number,
  },
  components: {
    GuideHeader,
  }
}
</script>

