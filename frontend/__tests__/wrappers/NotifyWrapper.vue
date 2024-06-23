<script lang="ts" setup>
import * as NotifyService from "~/services/notify";

const { notifySuccess, notifyError, notifyInfo, notifyWarn } = NotifyService;

// const value = ref("");

// const success = async () => {
//   await notifySuccess(`test`);
//   value.value = "success";
// };
</script>

<template>
  <button @click="notifySuccess(`test`)">Success Button</button>
  <button @click="notifyError(`test`)">Error Button</button>
</template>
