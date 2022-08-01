import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import PageNaming from '../hoc/PageNaming';
import getNews from '../../api/nytimes';

import NewsWrapper from '../../styles/NewsStyle';
import NewsSearch from './NewsSearch';
import News from './News';
import { addNews as addNewsAction } from '../../reducers/newsSlice';

const NewsContainer = () => {
  const { keyword, nextPage, newsList } = useSelector((state) => state.news);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, inView } = useInView();
  const dispatch = useDispatch();

  const addNews = useCallback(async () => {
    if (keyword.trim()) {
      setIsLoading(true);
      const newsList = await getNews(keyword, nextPage);
      dispatch(addNewsAction({ nextPage: nextPage + 1, newsList }));
      setIsLoading(false);
    }
  }, [keyword, nextPage, dispatch]);

  useEffect(() => {
    if (inView && keyword && !isLoading) {
      addNews();
    }
  }, [keyword, isLoading, inView, addNews]);

  return (
    <section>
      <NewsSearch />
      <NewsWrapper>
        <ul>
          {newsList?.map((news) => {
            return <News key={news._id} news={news} />;
          })}
        </ul>
      </NewsWrapper>
      {newsList.length > 0 && !isLoading && <div ref={ref}> Element {inView.toString()}</div>}
    </section>
  );
};

export default PageNaming(NewsContainer, 'NYTimes::News Search');
