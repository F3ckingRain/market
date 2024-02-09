import { MOBILE_WIDTH } from '@/constants/page';

const getViewPortByWidth = (width: number) => {
  if (width > MOBILE_WIDTH) return 'desktop';

  return 'mobile';
};

export { getViewPortByWidth };
