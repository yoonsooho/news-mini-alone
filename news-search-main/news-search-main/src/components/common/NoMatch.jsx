import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoMatchWrapper from '../../styles/NoMatchStyle';
import PageNaming from '../hoc/PageNaming';

const NoMatch = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) {
      navigate('/');
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count, navigate]);

  return (
    <NoMatchWrapper>
      <div>
        <div>요청하신 페이지를 찾을 수 없습니다.</div>
        <div>{count}초 후 News 페이지로 이동합니다.</div>
      </div>
    </NoMatchWrapper>
  );
};

export default PageNaming(NoMatch, 'NYTimes::Requested page could not found');
