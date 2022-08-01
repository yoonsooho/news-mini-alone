import React, { useEffect } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initNews } from './reducers/newsSlice';

import Header from './components/common/Header';
import RootWrapper from './styles/RootStyle';

function App() {
  const dispatch = useDispatch();

  const handleInitNews = () => {
    dispatch(initNews());
  };

  useEffect(() => {
    window.addEventListener('unload', handleInitNews);
    return () => {
      window.removeEventListener('unload', handleInitNews);
    };
  }, []);

  return (
    <RootWrapper>
      <Header />
      <Outlet />
    </RootWrapper>
  );
}

export default App;
