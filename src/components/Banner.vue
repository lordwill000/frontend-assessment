<template>
  <div
    class="banner__wrapper"
    :style="{
      minHeight: `${windowWidth <= 767 ? mobileHeight : desktopHeight}px`,
      backgroundImage: `url(${windowWidth <= 767 ? backgroundMobileFallback : backgroundDesktop})`
    }"
  >
    <div
      v-if="overlay"
      class="banner__overlay"
    />
    <div class="content__wrapper">
      <h1>{{ heading }}</h1>
      <h3>{{ subheading }}</h3>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const {
  mapGetters: mapAppGetters,
} = createNamespacedHelpers('app');

export default {
  name: 'Banner',
  props: {
    full: {
      type: Boolean,
      default: false,
    },
    backgroundDesktop: {
      type: String,
      default: '',
    },
    backgroundMobile: {
      type: String,
      default: '',
    },
    desktopHeight: {
      type: Number,
      default: 650,
    },
    mobileHeight: {
      type: Number,
      default: 375,
    },
    heading: {
      type: String,
      default: 'Heading',
    },
    subheading: {
      type: String,
      default: 'Subheading',
    },
    overlay: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      backgroundMobileFallback: this.backgroundMobile,
    };
  },
  computed: {
    ...mapAppGetters({
      windowWidth: 'windowWidth',
    }),
  },
  mounted() {
    if (this.backgroundMobileFallback === '') {
      this.backgroundMobileFallback = this.backgroundDesktop;
    }
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.banner__wrapper {
  align-items: center;
  background-position: center;
  background-size: cover;
  display: flex;
  position: relative;
  text-align: center;
  .banner__overlay {
    background-color: rgba(0,0,0,0.4);
    bottom: 0;
    left: 0;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
  .content__wrapper {
    margin: auto;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    z-index: 1;
    & > * {
      color: #fff;
    }
  }
}
</style>
