<template>
  <div class="tabs">
    <div class="tabs__wrapper">
      <h3
        v-for="tab in tabs"
        :key="tab.id"
        ref="tabs"
        :class="selectedTab === tab && 'selected'"
        @click="onTabClick(tab)"
      >
        {{ tab.title }}
      </h3>
    </div>
    <TabContent :content="selectedTab.content" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import TabContent from './TabContent.vue';

const {
  mapGetters: mapExercise2Getters,
} = createNamespacedHelpers('exercise2');

export default {
  name: 'Tabs',
  components: {
    TabContent,
  },
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapExercise2Getters({
      selectedTab: 'activeSection',
    }),
  },
  mounted() {
    if (Object.keys(this.selectedTab).length === 0) {
      this.$emit('selected', { tab: this.tabs[0], source: 'tabs' });
    }
  },
  methods: {
    onTabClick(tab) {
      this.$emit('selected', { tab, source: 'tabs' });
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs__wrapper {
  display: flex;
  h3 {
    cursor: pointer;
    transition: color 0.2s ease;
    &:not(:last-of-type) {
      margin-right: 16px;
    }
    &.selected {
      color: $accent;
    }
  }
}
</style>
