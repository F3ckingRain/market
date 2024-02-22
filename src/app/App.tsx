import React, { useState } from 'react';

import Input from '@/components/Input/Input';
import { useViewportWatcher } from '@/hooks/useViewportWatcher';
import AuthModel from '@/models/AuthModel/AuthModel';
import Router from '@/router/Router';
import Button from '@/ui/Button/Button';
import Loader from '@/ui/Loader/Loader';

function App() {
  const [value, setValue] = useState<string>('');
  const { openAuthModal } = AuthModel();

  useViewportWatcher();

  return (
    <>
      <div>
        <Input value={value} onChange={setValue} />

        <Button onClick={openAuthModal} type={'button'}>
          AUTH
        </Button>
      </div>

      <Router />

      <Loader />
    </>
  );
}

export default App;
