<template>
  <aside v-if="activeItem" class="aside">
    <div class="itemHome">
      <router-link
        v-if="hasEditRights"
        v-tooltip="$t('tooltip.editItem')"
        class="btn btn--ter btn--icon"
        :to="{ name: 'ItemAdmin' }"
        data-cy="edit_object_link"
      >
        <i class="icon fa fa-cog" />
        {{ $t('btn.editItem', { item: activeItem.name }) }}
      </router-link>
      <router-link
        v-tooltip="disabled ? $t('tooltip.emptyPeriod') : $t('tooltip.dashboard')"
        class="btn btn--ter btn--icon"
        :to="!disabled ? { name: 'Dashboard', params: { slug: activeItem.slug } } : ''"
      >
        <i class="icon fas fa-tachometer-alt" />
        {{ $t('general.dashboard') }}
      </router-link>
    </div>

    <div class="widgets">
      <widget-mission-statement v-if="activeItem" widget-id="itemHome.missionStatement" />
      <widget-progression v-if="activePeriod" widget-id="itemHome.progression" type="period" :data="activePeriod" />
      <widget-team v-if="activePeriod" widget-id="itemHome.team" />
      <widget-child-items widget-id="itemHome.children" />
    </div>
  </aside>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'WidgetsItemHome',

  components: {
    WidgetProgression: () => import('./WidgetProgression.vue'),
    WidgetMissionStatement: () => import('./WidgetMissionStatement.vue'),
    WidgetTeam: () => import('./WidgetTeam.vue'),
    WidgetChildItems: () => import('./WidgetChildItems.vue'),
  },

  data: () => ({
    disabled: false,
  }),

  computed: {
    ...mapState(['activeItem', 'activePeriod', 'user']),
    ...mapGetters(['hasEditRights']),
  },

  watch: {
    activePeriod: {
      immediate: true,
      handler() {
        this.disabled = !this.activePeriod;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.widgets > .btn {
  margin-bottom: 1.5rem;
}

.image {
  width: 100%;
  height: 20rem;
  margin-bottom: 3rem;
  object-fit: cover;
}

.itemHome {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem 0;

  & > .btn {
    width: 100%;
  }
}
</style>
