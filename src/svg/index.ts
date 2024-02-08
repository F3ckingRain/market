import { ThemeType } from '@/store/recoil/themeState';

type DefaultSvgProps = {
  fillColor: string;
  pathColor: string;
};

type SvgPropsInTheme = { [key in ThemeType]: DefaultSvgProps };

const svgDefaults: SvgPropsInTheme = {
  light: {
    fillColor: '',
    pathColor: '',
  },
  dark: {
    fillColor: '',
    pathColor: '',
  },
};

export { svgDefaults };
