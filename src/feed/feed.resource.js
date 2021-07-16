import axios from 'axios';

const LOCATION_API = 'https://jsonplaceholder.typicode.com/';

/**
 * Does GET request to get Post resources
 */

export const getPostResource = async () => {
  try {
    const response = await axios.get(`${LOCATION_API}posts`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

/**
 * Does GET request to get Comments resources
 */

export const getCommentsResource = async () => {
  try {
    const response = await axios.get(`${LOCATION_API}comments`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
