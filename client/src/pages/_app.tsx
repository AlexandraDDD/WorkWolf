import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import App, { AppContext, AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from "react-redux";
import { ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/global';
import Layout from '@/components/Layout/Layout';
import { setupStore } from '@/store';


function MyApp({ Component, pageProps }: AppProps)
{
    const store = setupStore();
    return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
{/*                     <MuiThemeProvider theme={muiTheme}> */}
                        <GlobalStyle />
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
               {/*      </MuiThemeProvider> */}
                </ThemeProvider>
            </Provider >
    );
}
export default MyApp;