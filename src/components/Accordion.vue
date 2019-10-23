<template>
  <div class="accordion__wrapper">
    <div
      v-for="section in sections"
      :key="section.id"
      class="accordion"
      :class="selectedTab === section && 'selected'"
    >
      <h3
        class="accordion__header"
        @click="onSectionClick(section)"
      >
        {{ section.title }}
      </h3>
      <div
        class="accordion__content"
        v-html="section.content"
      />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const {
  mapGetters: mapExercise2Getters,
} = createNamespacedHelpers('exercise2');

export default {
  name: 'Accordion',
  props: {
    sections: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapExercise2Getters({
      selectedTab: 'activeSection',
    }),
  },
  methods: {
    onSectionClick(tab) {
      this.$emit('selected', { tab, source: 'accordion' });
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  margin-bottom: 30px;
  .accordion__header {
    background-color: $tertiary;
    border-bottom: 1px solid $secondary;
    cursor: pointer;
    padding: 8px;
    position: relative;
    transition: all 0.2s ease;
    &:after,
    &:before {
      background-color: $primary;
      content: '';
      height: 2px;
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
    }
    &:after {
      transform: rotate(90deg);
      transition: transform 0.2s $easeInOut;
    }
  }
  .accordion__content {
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s $easeInOut;
  }
  &.selected {
    .accordion__header {
      border-color:  $accent;
      color: $accent;
      &:before,
      &:after {
        background-color: $accent;
      }
      &:after {
        transform: rotate(0deg);
      }
    }
    .accordion__content {
      max-height: 300px;
      transition: all 0.4s $easeInOut;
    }
  }
}
</style>
