<template>
  <div class="my-30">
    <div class="container">
      <div class="row">
        <div
          v-if="!isFetching"
          class="col-12"
        >
          <Tabs
            v-if="windowWidth >= 768"
            :tabs="sections"
            @selected="onSectionClicked"
          />
          <Accordion
            v-else
            :sections="sections"
            @selected="onSectionClicked"
          />
        </div>
        <Spinner v-else />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { types } from '@/store/modules/exercise2/actions';
import Spinner from '@/components/Spinner.vue';
import Accordion from '@/components/Accordion.vue';
import Tabs from '@/components/Tab';

const {
  mapGetters: mapExercise2Getters,
  mapActions: mapExercise2Actions,
} = createNamespacedHelpers('exercise2');

const {
  mapGetters: mapAppGetters,
} = createNamespacedHelpers('app');

export default {
  name: 'Exercise2',
  components: {
    Spinner,
    Tabs,
    Accordion,
  },
  computed: {
    ...mapExercise2Getters({
      sections: 'data',
      isFetching: 'isFetching',
      activeSection: 'activeSection',
    }),
    ...mapAppGetters({
      windowWidth: 'windowWidth',
    }),
  },
  mounted() {
    this.fetchSections();
  },
  methods: {
    ...mapExercise2Actions({
      fetchSections: types.REQUEST,
      setActiveSection: types.SET_ACTIVE_SECTION,
    }),
    onSectionClicked(section) {
      if (section.source === 'tabs') {
        this.setActiveSection(section.tab);
      } else {
        this.setActiveSection(section.tab === this.activeSection ? {} : section.tab);
      }
    },
  },
};
</script>
