import { useSelector } from 'react-redux';
import PageNaming from '../hoc/PageNaming';

import NewsWrapper from '../../styles/NewsStyle';
import News from './News';

const Clip = () => {
  const clipList = useSelector((state) => state.news.clipList);

  return (
    <NewsWrapper>
      <ul>
        {clipList?.map((news) => {
          return <News key={news._id} news={news} />;
        })}
      </ul>
    </NewsWrapper>
  );
};

export default PageNaming(Clip, 'NYTimes::News Clip');
