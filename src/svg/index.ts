import { ThemeType } from 'src/store/recoil/configState';

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
