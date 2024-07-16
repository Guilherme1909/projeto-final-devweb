import axios from "axios";
import getTeamInfoSample from "../sampleData/getTeamInfoSample";
import { USE_SAMPLE } from "../sampleData/useSample.js";

const getTeamInfo = (callback) => {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/teams/statistics",
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
  //   const retorno = getTeamInfoSample();
  //   //console.log(retorno);
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
    return Promise.resolve(getTeamInfoSample().response);
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

export default getTeamInfo;
