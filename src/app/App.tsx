import React from 'react';

import styles from './App.module.scss';

import Router from '@/router/Router';
import useThemeState from '@/store/recoil/themeState/themeState';
import Loader from '@/ui/Loader/Loader';

function App() {
  const [theme] = useThemeState();

  return (
    <main className={`${styles.app} ${styles[`app__${theme}`]}`}>
      <Router />

      <Loader />
    </main>
  );
}

export default App;
