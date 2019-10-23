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
      <div
        class="indicator"
        :style="indicatorStyle"
      />
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
  data: () => ({
    indicatorStyle: {
      width: '0px',
      left: '0px',
    },
  }),
  computed: {
    ...mapExercise2Getters({
      selectedTab: 'activeSection',
    }),
  },
  mounted() {
    if (Object.keys(this.selectedTab).length === 0) {
      this.$emit('selected', this.tabs[0]);
    }
  },
  methods: {
    onTabClick(tab) {
      this.$emit('selected', tab);
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
  .indicator {
    background-color: $accent;
    bottom: 0;
    height: 1px;
    position: absolute;
  }
}
</style>
