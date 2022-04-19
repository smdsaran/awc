import NextApp from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "../stores/auth-context";
import dynamic from "next/dynamic";

import "../styles/globals.css";

const theme = {
  primary: "green",
};
export class App extends NextApp {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthContextProvider>
    );
  }
}

export default dynamic(() => Promise.resolve(App), { ssr: false });
