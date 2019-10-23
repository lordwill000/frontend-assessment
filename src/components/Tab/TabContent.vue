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
  background-color: $tertiary;
  margin-top: 30px;
  padding: 8px;
}
</style>
