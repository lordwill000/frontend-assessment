<template>
  <router-link
    :to="linkTo"
    class="styled-link"
  >
    {{ label }}
  </router-link>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    linkTo: {
      type: String,
      default: '/',
    },
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.styled-link {
  border: 2px solid $primary;
  border-radius: 30px;
  color: $primary;
  font-family: 'RedHatMed';
  padding: 12px 18px;
  text-align: center;
  transition: background-color 0.2s ease, color 0.2s ease;
  width: 150px;
  &:hover {
    background-color: $primary;
    color: #fff;
    text-decoration: none;
  }
  @media(max-width: 767px) {
    margin: 20px auto 0;
  }
}

</style>
