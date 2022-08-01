import axios from 'axios';

const key = process.env.REACT_APP_NYTIMES_API_KEY;

const getNews = async (keyword, page = 0) => {
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${page}&q=${keyword}&api-key=${key}&sort=newest`,
    );
    return res.data.response.docs;
  } catch (e) {
    console.error(e);
  }
  return undefined;
};

export default getNews;
