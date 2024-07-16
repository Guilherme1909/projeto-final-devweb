<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="campeonato-card text-center">
        <div
          href="/pt/torneio/futebol/brazil/brasileirao-serie-a/325#id:58766"
          style="overflow: hidden; text-overflow: ellipsis"
        >
          Brasileirão Série A, <b></b><span> {{ game.league.round }}</span>
        </div>
      </div>
      <div>
        <div class="bloco-time">
          <div class="justify-center outer-div">
            <img
              :src="game.teams.home.logo"
              :alt="game.teams.home.name"
              height="48"
              wifth="48"
            />
            <div class="text-center justify-center inner-text-div">
              {{ game.teams.home.name }}
            </div>
          </div>
          <div display="flex" direction="column">
            <div class="text-center">
              <span style="font-size: 20px"
                ><span>{{ game.score.fulltime.home }}</span
                ><span> - </span
                ><span>{{ game.score.fulltime.away }}</span></span
              >
            </div>
            <div>
              <span>{{ game.fixture.status.long }}</span>
            </div>
          </div>
          <div class="justify-center outer-div">
            <img
              :src="game.teams.away.logo"
              :alt="game.teams.away.name"
              height="48"
              wifth="48"
            />
            <div class="text-center justify-center inner-text-div">
              {{ game.teams.away.name }}
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.my-card {
  width: 350px;
  height: 160px;
  margin-bottom: 5px;
  padding: 5px;
  border: 2px solid #c07171;
  border-radius: 10px;
  background-color: #1a2027;
  box-sizing: border-box;
  overflow: hidden;
}

.campeonato-card {
  font-size: 15px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.bloco-time {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.inner-text-div {
  position: absolute;
  bottom: -12px;
  text-align: center;
  font-size: 14px;
  max-width: 100px;
  word-wrap: break-word;
  line-height: 1;
}

.outer-div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  border-style: none;
}
</style>
