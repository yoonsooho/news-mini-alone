import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addClip, removeClip } from '../../reducers/newsSlice';

const News = ({ news }) => {
  const clipList = useSelector((state) => state.news.clipList);
  const dispatch = useDispatch();

  const handleClip = () => {
    dispatch(addClip(news));
  };

  const handleUnclip = () => {
    dispatch(removeClip(news));
  };

  const handleDetail = (e) => {
    const { url } = e.target.dataset;
    window.open(url, '_blank', 'noopener noreferrer');
  };

  const isCliped = !!clipList?.find((clip) => clip._id === news._id);

  return (
    <li className={isCliped ? 'cliped' : ''}>
      <div>
        <span>{news.pub_date.substr(0, 10)}</span>
        <span>{news.news_desk || news.subsection_name}</span>
      </div>
      <h2>{news.headline.main}</h2>
      <p>{news.snippet}</p>
      <button type="button" onClick={handleDetail} data-url={news.web_url}>
        Detail
      </button>
      {isCliped ? (
        <button type="button" onClick={handleUnclip}>
          Unclip
        </button>
      ) : (
        <button type="button" onClick={handleClip}>
          Clip
        </button>
      )}
    </li>
  );
};

export default News;
