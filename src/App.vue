<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane v-for="tab in header" :key="tab.id" :label="tab.label" :name="tab.to">
    </el-tab-pane>
    <RouterView />
  </el-tabs>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { RouterView, useRouter } from 'vue-router'
const header = reactive(
  [
    {
      id: 'rememberMsg',
      label: '成员管理',
      to: './rememberMsg',
    },
    {
      id: 'teamMsg',
      label: '团队管理',
      to: './teamMsg',
    },
    {
      id: 'portMaintain',
      label: '职位维护',
      to: './portMaintain',
    }
  ]
)
const activeName = header[0].to
let userRouter = useRouter()

const handleClick = (tab: TabsPaneContext) => {
  userRouter.push(String(tab.props.name))
}
</script>

<style lang="less">
.demo-tabs {
  margin-left: 20px;
  text-align: center;

  .el-tabs__content {
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }

  .el-tabs__header {
    margin: 0;
  }
}
</style>