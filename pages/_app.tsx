import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      )}
    </div>
  );
}

export default MyApp;
