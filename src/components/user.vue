<template>
  <div>
    <div class="header">
      {{ headerText }}
    </div>
    <div class="filter">
      <el-input v-model="filter.id" style="width: 180px" size="small" placeholder="请输入id" />
      <el-input v-model="filter.name" style="width: 180px;margin-left:20px" size="small" placeholder="请输入Name" />
      <el-button type="primary" size="small" @click="gettableData" :disabled="defineProps.banReflesh"
        style="margin-left:30px">查询</el-button>
    </div>
    <div class="content">
      <el-table :data="tableData.data">
        <el-table-column prop="id" label="id" sortable />
        <el-table-column prop="name" label="Name" sortable />
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, reactive, onUpdated } from "vue";
import queryUser from "../api/user";
let defineProps: any = defineProps(['userComponentTitle', 'banReflesh', 'changeBanReflesh'])
let headerText = ref('')
let orgIdInfo: any = ref('')
let tableData: any = reactive({ data: [] })
const filter = reactive({
  id: '',
  name: ''
})

let getHeaderText = () => {
  let title = defineProps.userComponentTitle.name
  gettableData(title)
  headerText.value = title
  orgIdInfo.value = defineProps.userComponentTitle.id
}

let gettableData = (title) => {
  // params用于后端筛选
  let params = filter
  if (headerText.value !== title) {
    defineProps.changeBanReflesh()
  } else {
    return
  }
  queryUser.query(orgIdInfo.value).then((data) => {
    tableData.data = data
  })
}
onUpdated(() => {
  getHeaderText()
})


</script>

<style scope lang="less">
.header {
  height: 40px;
  width: 100%;
  padding-left: 20px;
  font-size: 14px;
  line-height: 40px;
  text-align: left;
  border-bottom: 2px solid rgb(232, 232, 232)
}

.filter {
  height: 40px;
  width: 98%;
  font-size: 14px;
  line-height: 40px;
  margin: 0 auto;
  text-align: left;
  border-bottom: 2px solid rgb(232, 232, 232)
}

.content {
  padding-left: 20px
}
</style>