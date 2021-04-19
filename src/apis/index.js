import axios from 'axios';

const BASE_URL = 'http://localhost:5000/lists';

export const listAPI = async () => {
  return await axios.get(BASE_URL);
};
