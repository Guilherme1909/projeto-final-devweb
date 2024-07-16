import axios from "axios";
import getStandingsSample from "../sampleData/getStandingsSample.js";
import { USE_SAMPLE } from "../sampleData/useSample.js";

const getStandings = (callback) => {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/standings",
    params: {
      league: "71",
      season: "2024",
    },
    headers: {
      "x-rapidapi-key": "1b6d8b6f9cmsh53509c62459be66p163245jsn85e7861e8f4b",
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    },
  };

  // if (USE_SAMPLE) {
  //   const retorno = getStandingsSample();
  //   console.log(retorno);
  //   if (callback) callback(retorno.response);
  //   return;
  // }

  // axios
  //   .request(options)
  //   .then((response) => {
  //     console.log("response do getStandings normal");
  //     console.log(response.data.response);
  //     if (callback) callback(response.data.response);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  if (USE_SAMPLE) {
    return Promise.resolve(getStandingsSample().response);
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

export default getStandings;
