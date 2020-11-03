import "../styles/globals.css";

import React from "react";
import { AppProps } from "next/app";
import { TreatProvider } from "react-treat";

import lightTheme from "../themes/light.treat";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <TreatProvider theme={lightTheme}>
      <Component {...pageProps} />
    </TreatProvider>
  );
};

export default App;
