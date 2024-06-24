<script lang="ts" setup>
import { meta } from "~/services/meta";
const props = defineProps(["test"]);

if (props.test === undefined) {
  meta("About", "en");
}
</script>

<template><h1>About Us!</h1></template>
