import { useCallback, useMemo } from 'react';

import { initialLoaderState } from '@/store/recoil/loaderState';
import useLoaderState from '@/store/recoil/loaderState/loaderState';

const LoaderModel = () => {
  const [state, setState] = useLoaderState();

  const startLoader = useCallback((text: string) => {
    setState({ text, active: true });
  }, []);

  const stopLoader = useCallback(() => {
    setState(initialLoaderState);
  }, []);

  const result = useMemo(
    () => ({
      loaderState: state,
      startLoader,
      stopLoader,
    }),
    [state],
  );

  return { ...result };
};

export default LoaderModel;
