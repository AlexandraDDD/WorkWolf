import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme
    {
        typography: {
            fontFamily: string;
            fontSize: string;
        };
        fonts: {
            [key: string]: string
        };
        colors: {
            primary: string;
            secondary: string;
            backgroundGradient: string;
            tertiary: string;
            grey: string;
            white: string;
            black: string;
            active: string;
            silver: string;
            platinum: string;
            shadow: string;
            error: string;
            secondWhite: string;
        };
        shadows: {
            primaryShadow: string;
        };
        background: {
            primary: string;
            gradient: string;
        };
        spacing: {
            small: string;
            medium: string;
            large: string;
        };
        media: {
            small: string;
            medium: string;
            mediumLarge: string;
            large: string;
            middle: string;
            xl: string;
            largePlus: string;
            extraLarge: string;
        };
    }
}
