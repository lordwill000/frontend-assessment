<template>
  <div class="h-100">
    <router-view />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { types } from '@/store/modules/app/actions';

const {
  mapActions: mapAppActions,
} = createNamespacedHelpers('app');
export default {
  name: 'App',
  created() {
    window.addEventListener('resize', this.setWindowWidth);
    this.handleWindowResize(window.innerWidth);
  },
  destroyed() {
    window.removeEventListener('resize', this.setWindowWidth);
  },
  methods: {
    ...mapAppActions({
      handleWindowResize: types.SET_WINDOW_WIDTH,
    }),
    setWindowWidth() {
      this.handleWindowResize(window.innerWidth);
    },
  },
};
</script>

<style lang="scss">

</style>
