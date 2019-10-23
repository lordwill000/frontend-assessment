<template>
  <div class="tabcontent__wrapper">
    <div v-html="content" />
  </div>
</template>

<script>
export default {
  name: 'TabContent',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.tabcontent__wrapper {
  margin-top: 30px;
}
</style>
