<script lang="ts" setup>
import * as NotifyService from "~/services/notify";

const { notifySuccess, notifyError, notifyInfo, notifyWarn } = NotifyService;
</script>

<template>
  <button @click="notifySuccess('test')">Success Button</button>
  <button @click="notifyError('test')">Error Button</button>
  <button @click="notifyInfo('test')">Info Button</button>
</template>
