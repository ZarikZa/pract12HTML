import axios from 'axios';

const CLIENT_ID = '615e046419b4408c96374e45950faf62';
const CLIENT_SECRET = '3ca8b868a9434cd18ae4c239101dc584';

const getToken = async () => {
  const response = await axios.post('https://accounts.spotify.com/api/token',
    'grant_type=client_credentials', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    }
  });
  return response.data.access_token;
};

const poiskTrek = async (query, token) => {
  const response = await axios.get(`https://api.spotify.com/v1/search`, {
    headers: {
      'Authorization': `Bearer ${token}`
    },
    params: {
      q: query,
      type: 'track',
      limit: 10
    }
  });
  return response.data.tracks.items;
};

export { getToken, poiskTrek };
