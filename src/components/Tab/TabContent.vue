<template>
  <div class="tabcontent__wrapper">
    <!-- eslint-disable -->
    <div v-html="content" />
    <!-- eslint-enable -->
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
  background-color: $tertiary;
  margin-top: 30px;
  padding: 8px;
}
</style>
