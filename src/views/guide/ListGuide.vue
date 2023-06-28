<template>

  <div class="wrap">

    <GuideHeader />
    
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
            <td class="url"><a href="/ListGuide/layout" target="_blank">/ListGuide/layout</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>
              layout, loading, skip menu, header, aside menu, container, footer, floating area <br>
              PC header
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
            <td class="url"><a href="/ListGuide/popup" target="_blank">/ListGuide/popup</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>&amp; tooltip</td>
          </tr>
          <tr class="ing">
            <td>component</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/ListGuide/text" target="_blank">/ListGuide/text</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>form</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/ListGuide/form" target="_blank">/ListGuide/form</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>06.21 디자인 적용된 form &gt; form etc 페이지 분리</td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>form etc</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/ListGuide/form_etc" target="_blank">/ListGuide/form_etc</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>tab</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/ListGuide/tab" target="_blank">/ListGuide/tab</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>filter &amp; tag</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/ListGuide/tag" target="_blank">/ListGuide/tag</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>accordion</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/ListGuide/accordion" target="_blank">/ListGuide/accordion</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>button &amp; more</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/ListGuide/button" target="_blank">/ListGuide/button</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>table</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/ListGuide/table" target="_blank">/ListGuide/table</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>06.21 2단 table &gt; dl 태그로 수정, info list 페이지 분리</td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>info list</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/ListGuide/info_list" target="_blank">/ListGuide/info_list</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>flag</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/ListGuide/flag" target="_blank">/ListGuide/flag</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>list</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/ListGuide/list" target="_blank">/ListGuide/list</a></td>
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
            <td class="url"><a href="/ListGuide/swiper" target="_blank">/ListGuide/swiper</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>logo</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/ListGuide/logo" target="_blank">/ListGuide/logo</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
          <tr class="ing">
            <td></td>
            <td>animation</td>
            <td></td>
            <td></td>
            <td class="url"><a href="/ListGuide/animation" target="_blank">/ListGuide/animation</a></td>
            <td class="marker"></td>
            <td class="date"></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- table list -->

  </div>
  <!-- // wrap -->

  <hr>
</template>

<script setup>
  import GuideHeader from '@/components/GuideHeader.vue'
</script>
