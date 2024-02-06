import React from 'react';

import styles from './App.module.scss';

import Router from '@/router/Router';

function App() {
  return (
    <main className={styles.app}>
      <Router />
    </main>
  );
}

export default App;
