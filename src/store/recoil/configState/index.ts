import { getViewPortByWidth } from '@/utils/viewport';

type ThemeType = 'light' | 'dark';
type ViewportType = 'mobile' | 'desktop';

type ConfigStateType = {
  theme: ThemeType;
  viewport: ViewportType;
};

const initialConfigState: ConfigStateType = {
  theme: (localStorage.getItem('theme') as ThemeType) || 'light',
  viewport: getViewPortByWidth(document.body.clientHeight),
};

export { initialConfigState, ThemeType, ViewportType };
