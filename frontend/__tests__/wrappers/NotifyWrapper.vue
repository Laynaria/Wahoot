<script lang="ts" setup>
import * as NotifyService from "~/services/notify";
import { ref } from "vue";

const { notifySuccess, notifyError, notifyInfo, notifyWarn } = NotifyService;

// const value = ref("");

// const success = async () => {
//   await notifySuccess(`test`);
//   value.value = "success";
// };
</script>

<template>
  <button @click="notifySuccess(`test`)">Success Button</button>
</template>
