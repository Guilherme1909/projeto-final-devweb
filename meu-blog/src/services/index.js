import axios from 'axios';

async function getFixtures() {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
        params: {
            league: '71',
            season: '2024',
            team: '119'
        },
        headers: {
            'x-rapidapi-key': '1b6d8b6f9cmsh53509c62459be66p163245jsn85e7861e8f4b',
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
        }
    };
      
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

export default {
  getFixtures
};
