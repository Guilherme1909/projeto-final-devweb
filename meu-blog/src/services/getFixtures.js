import axios from "axios";
import getFixturesSample from "../sampleData/getFixturesSample";
import { USE_SAMPLE } from "../sampleData/useSample.js";

const getFixtures = (callback) => {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
    params: {
      league: "71",
      season: "2024",
      team: "119",
    },
    headers: {
      "x-rapidapi-key": "1b6d8b6f9cmsh53509c62459be66p163245jsn85e7861e8f4b",
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    },
  };

  // if (USE_SAMPLE) {
  //   const retorno = getFixturesSample();
  //   //console.log(retorno.response);
  //   if (callback) callback(retorno.response);
  //   return;
  // }

  // axios
  //   .request(options)
  //   .then((response) => {
  //     //console.log(response.data.response);
  //     if (callback) callback(response.data.response);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  if (USE_SAMPLE) {
    console.log(getFixturesSample().response);
    return Promise.resolve(getFixturesSample().response);
  }

  return new Promise((resolve, reject) => {
    axios
      .request(options)
      .then((response) => {
        resolve(response.data.response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getFixtures;
