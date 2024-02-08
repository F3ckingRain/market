type LoaderStateType = {
  text: string;
  active: boolean;
};

const initialLoaderState: LoaderStateType = {
  text: '',
  active: false,
};

export { LoaderStateType, initialLoaderState };
