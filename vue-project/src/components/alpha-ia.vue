<template>

    <div>퍼블 현황판</div>
    <div class="table guide">
        <table>
            <caption>프로젝트 환경</caption>
            <colgroup>
                <col style="width:200px;">
                <col style="width:auto;">
            </colgroup>
            <tbody>
                <tr>
                    <th scope="row">Core</th>
                    <td>Vue 3.0</td>
                </tr>
                <tr>
                    <th scope="row">UI Framework</th>
                    <td>vuetify or Quasar</td>
                </tr>
                <tr>
                    <th scope="row">HTTP 통신관련</th>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">문법체크, 포맷터</th>
                    <td>prettier</td>
                </tr>
                <tr>
                    <th scope="row">유틸리티</th>
                    <td>prettier</td>
                </tr>
            </tbody>
        </table>
    </div>

    <br><br>
    <div class="table">
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
                    <td>Guide</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="url"><a href="guide/table.vue" target="_blank">table</a></td>
                    <td class="marker"></td>
                    <td class="date"></td>
                    <td class="desc">
                        guide 진행중
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <br><br>
    
    <ul>
        <li>{{list1}}</li>
        <li>{{list2}}</li>
    </ul>

    <button>button</button>



  <hr>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'alpha IA',
  data() {
    return {
      list1 : 'kameo1',
      list2 : 'kameo2',
    }
  },
  mounted() {
    console.log('kkkkk');
  },
}
</script>

<style>

.table.guide {border-top:2px solid #555; color:#000;}
.table.guide th,
.table.guide td {padding:12px; border:1px solid #eee; color:#000;}
.table.guide th:first-child {border-left:0;}
.table.guide th:last-child {border-right:0;}
.table.guide td:last-child {border-right:0;}
.table.guide tbody th {background-color:#f8f8f8; text-align:center;}

</style>
