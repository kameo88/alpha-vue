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
          <tr class="ing">
            <td></td>
            <td>popup</td>
            <td></td>
            <td></td>
            <td class="url">
              <a href="/Popup" target="_blank">Popup</a>
              </td>
            <td class="marker"></td>
            <td class="date"></td>
            <td>& tooltip</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
