<template>
  <div class="card">
    <img
      :src="StaticMedia"
      alt="media"
    >
    <div class="card__content">
      {{ content.content }}
    </div>
    <slot />
  </div>
</template>

<script>
import StaticMedia from '@/assets/images/400x300.png';

export default {
  name: 'Card',
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    StaticMedia,
  }),
};
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid $tertiary;
  border-radius: 8px;
  height: 100%;
  padding: 20px;
  text-align: center;
  img {
    border-radius: 8px;
    display: block;
    margin-bottom: 20px;
    max-width: 100%;
  }
  .card__content {
    margin-bottom: 72px;
    @media(max-width: 767px) {
      margin-bottom: 0;
    }
  }
}
</style>
