import {  ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import App, { AppContext, AppProps } from 'next/app';
import { Provider } from "react-redux";
import { ThemeProvider } from '@emotion/react';
import theme from '@/components/shared/styles/theme';
import GlobalStyle from '@/components/shared/styles/global';
import Layout from '@/components/Layout/Layout';
import { setupStore } from '@/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { muiTheme } from '@/components/shared/styles/muiTheme';



function MyApp({ Component, pageProps }: AppProps) {
    const store = setupStore();
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ToastContainer />
           <MuiThemeProvider theme={muiTheme}>  
                <GlobalStyle />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
             </MuiThemeProvider>  
            </ThemeProvider>
        </Provider >
    );
}
export default MyApp;