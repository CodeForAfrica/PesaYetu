import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import theme from 'theme';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import AppContextProvider from 'AppContext';

import 'leaflet/dist/leaflet.css';
import 'simplebar/dist/simplebar.min.css';

class PesaYetuApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>PesaYetu: Making Budget Data Easy to Use</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta charSet="utf-8" />
        </Head>
        <ThemeProvider theme={theme}>
          <AppContextProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </AppContextProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default PesaYetuApp;
