<template>
  <div>关于本站:Lianxia</br>
  <a href="https://lianxia.icu/">Lianxia</a>
  </div>
  <div></div>
  <div></div>
  <div></div>
</template>

<script setup lang="ts">
interface InfoBoxProps {
  seconds: string;
}

const props = withDefaults(defineProps<InfoBoxProps>(), {});
</script>

<style scoped></style>
