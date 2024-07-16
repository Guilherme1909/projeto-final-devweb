<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <div v-if="leagueName" class="text-h6">
          {{ leagueName }} - {{ season }}
        </div>
      </q-card-section>
      <q-table :rows="standings" :columns="columns" row-key="rank">
        <template v-slot:body-cell-rank="props">
          <q-td :props="props">
            {{ props.row.rank }}
          </q-td>
        </template>
        <template v-slot:body-cell-team="props">
          <q-td :props="props">
            <img
              :src="props.row.team.logo"
              alt="Team Logo"
              width="24"
              height="24"
            />
            {{ props.row.team.name }}
          </q-td>
        </template>
        <template v-slot:body-cell-played="props">
          <q-td :props="props">
            {{ props.row.all.played }}
          </q-td>
        </template>
        <template v-slot:body-cell-win="props">
          <q-td :props="props">
            {{ props.row.all.win }}
          </q-td>
        </template>
        <template v-slot:body-cell-draw="props">
          <q-td :props="props">
            {{ props.row.all.draw }}
          </q-td>
        </template>
        <template v-slot:body-cell-lose="props">
          <q-td :props="props">
            {{ props.row.all.lose }}
          </q-td>
        </template>
        <template v-slot:body-cell-goals-for="props">
          <q-td :props="props">
            {{ props.row.all.goals.for }}
          </q-td>
        </template>
        <template v-slot:body-cell-goals-against="props">
          <q-td :props="props">
            {{ props.row.all.goals.against }}
          </q-td>
        </template>
        <template v-slot:body-cell-points="props">
          <q-td :props="props">
            {{ props.row.points }}
          </q-td>
        </template>
      </q-table>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "LeagueTable",
  props: {
    dados: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      columns: [
        { name: "rank", label: "", align: "left", field: "rank" },
        {
          name: "team",
          label: "Time",
          align: "left",
          field: (row) => row.team.name,
        },
        {
          name: "played",
          label: "Jogos",
          align: "right",
          field: (row) => row.all.played,
        },
        {
          name: "win",
          label: "Vitórias",
          align: "right",
          field: (row) => row.all.win,
        },
        {
          name: "draw",
          label: "Empates",
          align: "right",
          field: (row) => row.all.draw,
        },
        {
          name: "lose",
          label: "Derrotas",
          align: "right",
          field: (row) => row.all.lose,
        },
        {
          name: "goals-for",
          label: "GM",
          align: "right",
          field: (row) => row.all.goals.for,
        },
        {
          name: "goals-against",
          label: "GC",
          align: "right",
          field: (row) => row.all.goals.against,
        },
        { name: "points", label: "Pontos", align: "right", field: "points" },
      ],
      leagueName: "",
      season: "",
      standings: [],
    };
  },
  watch: {
    dados: {
      immediate: true,
      handler(newValue) {
        if (newValue && newValue.length > 0) {
          this.leagueName = newValue[0].league.name;
          this.season = newValue[0].league.season;
          this.standings = newValue[0].league.standings[0];
        }
      },
    },
  },
};
</script>

<style scoped>
.text-h6 {
  font-size: 1.25rem;
  font-weight: 500;
}
</style>
