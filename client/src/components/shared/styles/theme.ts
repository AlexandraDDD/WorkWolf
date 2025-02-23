import { Theme } from "@emotion/react";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '600', '700'],
});

const theme: Theme = {
    typography: {
        fontFamily: `${montserrat.style.fontFamily}`,
        fontSize: '16px',
    },
    fonts: {
        bodysmallReg:
            '400 0.75rem/1rem ' + montserrat.style.fontFamily,
        bodypresmallReg:
            '400 0.875rem/1rem ' + montserrat.style.fontFamily,
        bodyMiddleReg:
            '400 1rem/1.5rem ' + montserrat.style.fontFamily,
        bodyMiddleSemiBold:
            '600 1rem/1.5rem ' + montserrat.style.fontFamily,
        bodyMiddleMedium:
            '500 1rem/1.5rem ' + montserrat.style.fontFamily,
        titleH1SemiBold:
            '600 3rem/3.5rem ' + montserrat.style.fontFamily,
        titleH2SemiBold:
            '600 2rem/2rem ' + montserrat.style.fontFamily,
        titleH2Reg:
            '500 2rem/2rem ' + montserrat.style.fontFamily,
        titleH3Reg:
            '500 1.5rem/2rem ' + montserrat.style.fontFamily,
        titleH2Medium:
            '500 1.5rem/2rem ' + montserrat.style.fontFamily,
    },
    colors: {
        primary: '#113760',
        backgroundGradient: 'radial-gradient(79.43% 79.43% at 49.95% 64.07%, #024584 0%, #0B233D 100%)',
        secondary: '#738ebc',
        tertiary: '#0000FF',
        grey: 'rgb(86, 85, 87)',
        white: '#fff',
        secondWhite: '#b4a7b6',
        black: '#000',
        active: '#1E71BE',
        error: '#eb7586',
        silver: "",
        platinum: "",
        shadow: ""
    },
    shadows: {
        primaryShadow: '0 0 6px 0 rgba(17, 55, 96, 0.4)',
    },
    background: {
       primary: 'rgb(36, 38, 40)',
       gradient: 'radial-gradient(circle, rgba(65,73,126,1) 0%, rgba(19,16,14,1) 100%)',
    },
    spacing: {
        small: '8px',
        medium: '16px',
        large: '24px',
    },
    media: {
        small: '(max-width: 430px)',
        medium: '(max-width: 768px)',
        mediumLarge: '(max-width: 900px)',
        large: '(max-width: 1024px)',
        middle: '(max-width: 1100px)',
        xl: '(max-width: 1200px)',
        largePlus: '(max-width: 1300px)',
        extraLarge: '(max-width: 1440px)',
    },
};

export default theme;