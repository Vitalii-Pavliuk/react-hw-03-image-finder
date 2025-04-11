import axios from 'axios';

const API_KEY = '49427199-340d285b856a5a74b3eae3579';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImagesByValue = async (query, page = 1) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page,
    },
  });
  return response.data.hits;
};
