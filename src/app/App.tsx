import React from 'react';

import styles from './App.module.scss';

import Router from '@/router/Router';
import Loader from '@/ui/Loader/Loader';

function App() {
  return (
    <main className={styles.app}>
      <Router />

      <Loader />
    </main>
  );
}

export default App;
