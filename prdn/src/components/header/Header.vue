<template>
    <header>
        <header-top></header-top>
        <header-bot
          :resources="resources"
        ></header-bot>
    </header>
</template>

<script>
import HeaderTop from "./header-top/HeaderTop.vue";
import HeaderBot from "./header-bottom/HeaderBot.vue";

export default {
  props: ["resources"],
  components: {
    headerTop: HeaderTop,
    headerBot: HeaderBot
  }
};
</script>

<style>
</style>
