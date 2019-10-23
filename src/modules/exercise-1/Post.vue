<template>
  <div class="post container my-30">
    <div class="row">
      <div
        v-if="!isFetching && Object.keys(data).length > 0"
        class="col-12"
      >
        <h1>{{ data[0].title }}</h1>
        {{ data[0].content }}
        <p>
          <router-link to="/exercise1">
            Back to Posts
          </router-link>
        </p>
      </div>
      <div
        v-else
        class="col-12"
      >
        <Spinner />
      </div>
    </div>
    <div />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { types } from '@/store/modules/exercise1/actions';
import Spinner from '@/components/Spinner.vue';


const {
  mapGetters: mapExercise1Getters,
  mapActions: mapExercise1Actions,
} = createNamespacedHelpers('exercise1');

export default {
  name: 'Post',
  components: {
    Spinner,
  },
  data() {
    return {
      data: {},
    };
  },
  computed: {
    ...mapExercise1Getters({
      post: 'data',
      isFetching: 'isFetching',
    }),
  },
  watch: {
    isFetching() {
      this.populateData();
    },
  },
  mounted() {
    if (this.isFetching) {
      this.fetchPosts();
    } else {
      this.populateData();
    }
  },
  methods: {
    ...mapExercise1Actions({
      fetchPosts: types.REQUEST,
    }),
    populateData() {
      this.data = this.post.filter(post => post.slug === this.$route.params.slug);
    },
  },
};
</script>
