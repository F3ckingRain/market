import { useCallback, useEffect } from 'react';

import useConfigState from '@/store/recoil/configState/configState';
import { getViewPortByWidth } from '@/utils/viewport';

export const useViewportWatcher = () => {
  const [, setConfigState] = useConfigState();

  const viewportHandler = useCallback((e: Event) => {
    const window = e.currentTarget as Window;
    const viewport = getViewPortByWidth(window.innerWidth);

    setConfigState(s => ({ ...s, viewport }));
  }, []);

  useEffect(() => {
    window.addEventListener('resize', viewportHandler);

    return () => window.removeEventListener('resize', viewportHandler);
  }, []);
};
