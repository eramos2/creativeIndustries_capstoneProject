<template>
    <header id="app-header">
        <header-top :authenticated="authenticated"></header-top>
        <header-bot
          :resources="resources"
        ></header-bot>
    </header>
</template>

<script>
import HeaderTop from "./header-top/HeaderTop.vue";
import HeaderBot from "./header-bottom/HeaderBot.vue";

export default {
  props: ["resources", "authenticated"],
  components: {
    headerTop: HeaderTop,
    headerBot: HeaderBot
  }
};
</script>

<style>
#app-header {
  margin-bottom: 2.5rem;
}
</style>
