import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addKeyword, searchNews as searchNewsAction } from '../../reducers/newsSlice';
import NewsSearchStyled from '../../styles/NewsSearchStyled';
import getNews from '../../api/nytimes';

function NewsSearch() {
  const [keyword, setKeyword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const wordList = useSelector((state) => state.news.wordList);
  const dispatch = useDispatch();

  const searchNews = useCallback(async () => {
    if (keyword.trim()) {
      const newsList = await getNews(keyword);
      dispatch(searchNewsAction({ nextPage: 1, newsList }));
      dispatch(addKeyword(keyword));
      setKeyword('');
    }
  }, [dispatch, keyword]);

  useEffect(() => {
    const timer = setTimeout(() => {
      searchNews();
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchNews]);

  return (
    <NewsSearchStyled>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search keyword here"
      />
      <div className={`searchBar ${!isFocused && 'hide'}`}>
        {wordList?.map((word) => (
          <span key={word} title={word}>
            {word}
          </span>
        ))}
      </div>
    </NewsSearchStyled>
  );
}

export default NewsSearch;
