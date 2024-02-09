import React from 'react';

import styles from './App.module.scss';

import { useViewportWatcher } from '@/hooks/useViewportWatcher';
import Router from '@/router/Router';
import useThemeState from '@/store/recoil/configState/configState';
import Loader from '@/ui/Loader/Loader';

function App() {
  const [{ theme }] = useThemeState();

  useViewportWatcher();

  return (
    <main className={`${styles.app} ${styles[`app__${theme}`]}`}>
      <Router />

      <Loader />
    </main>
  );
}

export default App;
