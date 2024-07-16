<template>
  <div v-if="teamInfo" class="flex justify-center items-center">
    <div class="flex justify-center">
      <div>
        <div
          class="flex justify-center items-center card-team-info"
          style="height: 250px"
        >
          <div class="justify-center" style="margin-right: 20px">
            <img
              :src="teamInfo.team.logo"
              alt="TeamLogo"
              width="150"
              height="150"
              class="p-3"
            />
            <div class="text-center justify-center" style="font-size: 17px">
              {{ teamInfo.team.name }}
            </div>
          </div>
          <div class="flex justify-center items-center">
            <div class="text-center team-position">#?</div>
          </div>

          <div style="display: flex; font-size: 15px">
            <div style="margin-right: 15px">
              <div class="stats-team-info">
                <span>Partidas: </span>
                <span>{{ teamInfo.fixtures.played.total }}</span>
              </div>
              <div class="stats-team-info">
                <span>Vitórias: </span>
                <span>{{ teamInfo.fixtures.wins.total }}</span>
              </div>
              <div class="stats-team-info">
                <span>Empates: </span>
                <span>{{ teamInfo.fixtures.draws.total }}</span>
              </div>
              <div class="stats-team-info">
                <span>Derrotas: </span>
                <span>{{ teamInfo.fixtures.loses.total }}</span>
              </div>
            </div>
            <q-separator dark vertical />
            <div style="margin-left: 20px">
              <div class="stats-team-info">
                <span>Gols Marcados: </span>
                <span>{{ teamInfo.goals.for.total.total }}</span>
              </div>
              <div class="stats-team-info">
                <span>Gols Sofridos: </span>
                <span>{{ teamInfo.goals.against.total.total }}</span>
              </div>
              <span class="stats-team-info">Últimas cinco: </span>
              <div>
                <div class="flex justify-center items-center">
                  <div class="flex justify-center items-center">
                    <div
                      v-for="(char, i) in lastFiveChars"
                      :key="char + i"
                      :class="getClassForChar(char)"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <LeagueTable :dados="standings" />
        </div>
      </div>
      <div class="flex justify-center items-center" style="margin-top: 5px">
        <GamesList :games="fixtures" />
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center items-center">
    <q-circular-progress
      indeterminate
      rounded
      size="50px"
      color="lime"
      class="q-ma-md"
    />
  </div>
</template>

<script>
import getTeamInfo from "../services/getTeamInfo.js";
import getFixtures from "../services/getFixtures.js";
import getStandings from "../services/getStandings.js";
import GamesList from "../components/GamesList.vue";
import LeagueTable from "../components/LeagueTable.vue";

export default {
  name: "IndexPage",
  components: {
    GamesList,
    LeagueTable,
  },
  data() {
    return {
      teamInfo: null,
      fixtures: null,
      standings: [],
    };
  },
  computed: {
    lastFiveChars() {
      return this.teamInfo.form ? this.teamInfo.form.slice(-5).split("") : [];
    },
  },
  methods: {
    getClassForChar(char) {
      let baseClasses = "opacity-80 w-3 h-3 m-1 rounded-full";
      let colorClass = "";
      switch (char) {
        case "L":
          colorClass = "bg-red-500";
          break;
        case "D":
          colorClass = "bg-gray-500";
          break;
        case "W":
          colorClass = "bg-green-500";
          break;
      }
      return `${baseClasses} ${colorClass}`;
    },
  },
  mounted() {
    getTeamInfo()
      .then((teamInfo) => {
        this.teamInfo = teamInfo;
        return getFixtures();
      })
      .then((fixtures) => {
        this.fixtures = fixtures;
        return getStandings();
      })
      .then((standings) => {
        this.standings = standings;
      })
      .catch((error) => {
        console.error("Erro ao carregar dados:", error);
      });
  },
};
</script>

<style scoped>
.card-team-info {
  border: 2px solid #c07171;
  border-radius: 10px;
  padding: 30px;
  margin: 5px;
  background-color: #1a2027;
}

.stats-team-info {
  display: flex;
  justify-content: space-between;
  font-size: large;
  width: 150px;
  font-size: 15px;
}

.team-position {
  font-size: 30px;
  color: white;
  background-color: rgb(255, 0, 0);
  border: 1px solid black;
  border-radius: 10px;
  margin-right: 60px;
}

/* últimas 5 */
.opacity-80 {
  opacity: 0.8;
}
.w-3 {
  width: 0.75rem;
}
.h-3 {
  height: 0.75rem;
}
.m-1 {
  margin: 0.25rem;
}
.rounded-full {
  border-radius: 9999px;
}
.bg-red-500 {
  background-color: #f56565;
}
.bg-gray-500 {
  background-color: #a0aec0;
}
.bg-green-500 {
  background-color: #48bb78;
}
</style>
