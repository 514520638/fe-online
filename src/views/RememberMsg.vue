<template>
  <div class="context">
    <div class="org">
      <Organization :getUserComponentTitle :banReflesh :changeBanReflesh />
    </div>
    <div class="user">
      <User :userComponentTitle :banReflesh :changeBanReflesh />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Organization from "../components/organization.vue";
import User from "../components/user.vue";

let banReflesh: any = ref(false)
let userComponentTitle = ref('')
let getUserComponentTitle = (name) => {
  userComponentTitle.value = name
}
let changeBanReflesh = () => {
  if (banReflesh.value) {
    return
  }
  banReflesh.value = true
  setTimeout(() => {
    banReflesh.value = false
  }, 3000);
}
</script>

<style lang="less" scoped>
.context {
  display: flex;
  top: -1px;

  .org {
    width: 300px;
    height: calc(100vh - 40px);
    margin: 0;
    border-right: 2px solid rgb(232, 232, 232)
  }

  .user {
    width: 100%;
  }
}
</style>