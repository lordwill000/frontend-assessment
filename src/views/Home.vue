<template>
  <div>
    <Landing />
    <router-view />
  </div>
</template>

<script>
import Landing from '@/modules/landing/Landing.vue';

export default {
  name: 'Home',
  components: {
    Landing,
  },
};
</script>
