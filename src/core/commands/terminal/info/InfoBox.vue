<template>
  <div>关于本站：Lianxia</br>
  <a href="https://lianxia.icu/">Lianxia</a>
  </div>
  <div>
  https://github.com/lianxia2020/yuindex
    <a href="https://github.com/liyupi/yuindex" target="_blank">
      代码开源，欢迎 star 和贡献~
    </a>
  </div>
  <div></div>
  <div>
    作者：
    <a href="https://docs.qq.com/doc/DUFFRVWladXVjeUxW" target="_blank">
      程序员鱼皮
    </a>
  </div>
</template>

<script setup lang="ts">
interface InfoBoxProps {
  seconds: string;
}

const props = withDefaults(defineProps<InfoBoxProps>(), {});
</script>

<style scoped></style>
