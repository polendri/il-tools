<template>
  <spec-card class="spec-card-armament" icon="crosshairs" title="Armament">
    <template v-slot>
      <b-table-simple class="spec-table" small>
        <b-tbody>
          <template v-for="section in sections">
            <b-tr
              v-for="(arms, i) in section.values"
              :key="`${section.name}-${arms.name}-${arms.details}`"
            >
              <b-th v-if="i === 0" :rowspan="section.values.length">{{ section.name }}</b-th>
              <b-td v-if="arms.qty">x{{ arms.qty }}</b-td>
              <b-td v-else></b-td>
              <b-td>{{ arms.name }}</b-td>
              <b-td>{{ arms.type }}</b-td>
              <b-td v-if="'count' in arms" class="text-right">{{ arms.count }} rounds</b-td>
              <b-td :colspan="'count' in arms ? 1 : 2">{{ arms.details || '' }}</b-td>
            </b-tr>
          </template>
        </b-tbody>
      </b-table-simple>
    </template>
  </spec-card>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

import SpecCard from '@/components/specs/SpecsCard';

export default {
  name: 'ArmamentCard',
  components: { SpecCard },
  computed: {
    sections() {
      return [
        { name: 'Standard', values: this.specs.armament.forwardFiring.standard },
        { name: 'Modifications', values: this.specs.armament.forwardFiring.modifications },
        { name: 'Defensive', values: this.specs.armament.defensive },
        { name: 'Bombs', values: this.specs.armament.bombs },
        { name: 'Rockets', values: this.specs.armament.rockets },
      ].filter((s) => s.values);
    },
    ...mapGetters('specs', ['fuel', 'weight']),
    ...mapState('specs', ['specs']),
  },
};
</script>
<style lang="scss" scoped>
.spec-card-armament::v-deep .card-header {
  background-color: #ffccbc;
}
.spec-card-armament::v-deep .card-body {
  background-color: #fbe9e7;
}
</style>
