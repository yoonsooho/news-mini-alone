import { createSlice } from '@reduxjs/toolkit';

const MAX_SEARCHED_WORD_LENGTH = 5;

const initialState = {
  keyword: '',
  nextPage: 0,
  wordList: [],
  clipList: [],
  newsList: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addKeyword: (state, action) => {
      const wordList = Array.from(state.wordList);
      const keyword = action.payload;

      if (wordList.includes(keyword)) {
        const filteredWords = wordList.filter((word) => word !== keyword);
        filteredWords.unshift(keyword);
        return {
          ...state,
          keyword,
          wordList: filteredWords,
        };
      }

      if (MAX_SEARCHED_WORD_LENGTH === wordList.length) {
        wordList.pop();
      }
      wordList.unshift(keyword);

      return { ...state, keyword, wordList };
    },
    initNews: (state) => {
      return { ...state, keyword: '', nextPage: 0, newsList: [] };
    },
    searchNews: (state, action) => {
      const { nextPage, newsList } = action.payload;
      return { ...state, nextPage, newsList };
    },
    addNews: (state, action) => {
      const { nextPage, newsList } = action.payload;
      return {
        ...state,
        nextPage,
        newsList: state.newsList.concat(newsList),
      };
    },
    addClip: (state, action) => {
      const news = action.payload;
      return {
        ...state,
        clipList: state.clipList.concat(news),
      };
    },
    removeClip: (state, action) => {
      const news = action.payload;
      return {
        ...state,
        clipList: state.clipList.filter((cilp) => cilp._id !== news._id),
      };
    },
  },
});

export const { addKeyword, initNews, searchNews, addNews, addClip, removeClip } = newsSlice.actions;
export default newsSlice.reducer;
