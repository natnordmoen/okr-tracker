<template>
  <div v-if="activeKpi" class="kpi">
    <div class="main">
      <h1 class="title-1">{{ activeKpi.name }}</h1>

      <p>{{ activeKpi.description }}</p>

      <div v-if="activeKpi.valid" class="current-value">
        <div class="current-value__label">{{ $t('kpi.currentValue') }}</div>
        <div class="current-value__value">{{ activeKpi.currentValue }}</div>
      </div>
      <router-link
        v-if="hasEditRights"
        v-tooltip="$t('tooltip.editKpi')"
        class="btn btn--ghost"
        :to="{ name: 'ItemAdminKPIs' }"
      >
        {{ $t('kpi.edit') }}
      </router-link>

      <widget widget-id="kpiProgression" icon="chart-line" :title="$t('kpi.progresjon')" :collapsible="false">
        <svg ref="graph" class="graph"></svg>
      </widget>

      <div class="history">
        <h2 class="title-2">{{ $t('keyResultPage.history') }}</h2>
        <empty-state
          v-if="!progress.length"
          :icon="'history'"
          :heading="$t('empty.kpiProgress.heading')"
          :body="$t('empty.kpiProgress.body')"
        />

        <table v-if="progress.length" class="table">
          <thead>
            <tr>
              <th>{{ $t('keyres.dateAndTime') }}</th>
              <th>{{ $t('keyResultPage.table.value') }}</th>
              <th v-if="hasEditRights"></th>
            </tr>
          </thead>
          <tbody></tbody>
          <tr v-for="{ timestamp, value, id } in progress" :key="id">
            <td>{{ dateTimeShort(timestamp.toDate()) }}</td>
            <td>{{ value }}</td>
            <td v-if="hasEditRights">
              <v-popover offset="16" placement="top" show="true">
                <button class="btn btn--ter btn--icon">
                  <i class="icon far fa-trash-alt" />
                  {{ $t('btn.delete') }}
                </button>

                <template slot="popover">
                  <button class="btn btn--ter btn--negative" @click="remove(id)">
                    {{ $t('btn.confirmDeleteProgress') }}
                  </button>
                </template>
              </v-popover>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Widget from '@/components/widgets/Widget.vue';
import { db } from '@/config/firebaseConfig';
import LineChart from '@/util/LineChart';
import { dateTimeShort } from '@/util/formatDate';
import { extent } from 'd3';

export default {
  name: 'KpiHome',

  components: {
    Widget,
    EmptyState: () => import('@/components/EmptyState.vue'),
  },

  data: () => ({
    progress: [],
    graph: null,
  }),

  computed: {
    ...mapState(['activeKpi']),
    ...mapGetters(['hasEditRights']),
  },

  watch: {
    activeKpi: {
      immediate: true,
      handler({ id }) {
        this.$bind('progress', db.collection(`kpis/${id}/progress`).orderBy('timestamp', 'desc'));
      },
    },
    progress() {
      this.renderGraph();
    },
  },

  mounted() {
    if (this.$refs.graph) {
      this.graph = new LineChart(this.$refs.graph);
    }
  },

  methods: {
    dateTimeShort,

    async remove(id) {
      try {
        await db.doc(`kpis/${this.activeKpi.id}/progress/${id}`).delete();
        this.$toasted.show(this.$t('toaster.delete.progression'));
      } catch {
        this.$toasted.error(this.$t('toaster.error.deleteProgress'));
      }
    },

    renderGraph() {
      const [startValue, targetValue] = extent(this.progress.map(({ value }) => value));
      const [startDate] = extent(this.progress.map(({ timestamp }) => timestamp));

      if (!this.graph) return;

      this.graph.render(
        {
          startValue,
          targetValue,
        },
        {
          endDate: new Date(),
          startDate,
        },
        this.progress
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/_colors.scss';

.history {
  margin: 2.5rem 0 1.5rem;
}

.current-value {
  margin: 1rem 0;
  padding: 1rem;
  background: $color-yellow;
  border-radius: 2px;
  box-shadow: 0 2px 5px rgba(black, 0.1);

  @media screen and (min-width: bp(s)) {
    width: span(4, 0, span(12));
  }

  @media screen and (min-width: bp(m)) {
    width: span(3, 0, span(9));
  }

  @media screen and (min-width: bp(l)) {
    width: span(2, 0, span(7));
  }

  @media screen and (min-width: bp(xl)) {
    width: span(2, 0, span(6));
  }
}

.current-value__value {
  margin-top: 0.5rem;
  font-weight: 500;
  font-size: 2rem;
}
</style>
