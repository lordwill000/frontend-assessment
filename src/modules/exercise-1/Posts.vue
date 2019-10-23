<template>
  <div class="exercise1">
    <Banner
      :background-desktop="backgroundDesktop"
      :background-mobile="backgroundMobile"
      heading="Hello Developer!"
      subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      overlay
    />
    <div class="posts__featured">
      <div class="container">
        <Spinner
          v-if="isFetching"
          center
        />
        <div
          v-else
          class="row"
        >
          <div
            v-for="post in posts"
            :key="post.id"
            class="col-md-4"
            :class="windowWidth <= 767 && 'mb-30'"
          >
            <Card
              ref="cards"
              :style="windowWidth >= 768 && cardHeight !== '' && {
                height: `${cardHeight + 72}px`
              }"
              :content="post"
            >
              <LinkButton
                class="post__link"
                label="READ MORE"
                :link-to="`/exercise1/posts/${post.slug}`"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { types } from '@/store/modules/exercise1/actions';
import backgroundDesktop from '@/assets/images/1920x650.png';
import backgroundMobile from '@/assets/images/600x600.png';
import Banner from '@/components/Banner.vue';
import Spinner from '@/components/Spinner.vue';
import Card from '@/components/Card.vue';
import LinkButton from '@/components/LinkButton.vue';

const {
  mapActions: mapExercise1Actions,
  mapGetters: mapExercise1Getters,
} = createNamespacedHelpers('exercise1');

const {
  mapGetters: mapAppGetters,
} = createNamespacedHelpers('app');

export default {
  name: 'Posts',
  components: {
    Banner,
    Spinner,
    Card,
    LinkButton,
  },
  data: () => ({
    backgroundDesktop,
    backgroundMobile,
    cardHeight: '',
    cards: [],
  }),
  computed: {
    ...mapExercise1Getters({
      posts: 'data',
      isFetching: 'isFetching',
    }),
    ...mapAppGetters({
      windowWidth: 'windowWidth',
    }),
  },
  watch: {
    isFetching(isFetching) {
      if (this.posts.length > 0 && !isFetching) {
        this.$nextTick(() => {
          setTimeout(() => {
            this.cardHeight = Math.max(...this.$refs.cards.map(card => card.$el.offsetHeight));
          }, 200);
        });
      }
    },
  },
  created() {
    window.addEventListener('resize', this.handleWindowResize);
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    ...mapExercise1Actions({
      fetchPosts: types.REQUEST,
    }),
  },
};
</script>

<style lang="scss" scoped>
.posts__featured {
  margin-top: 40px;
  .post__link {
    bottom: 20px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    @media(max-width: 767px) {
      bottom: 0;
      left: 0;
      position: relative;
      transform: none;
    }
  }
}
</style>
