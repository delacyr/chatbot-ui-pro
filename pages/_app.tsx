import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import {SessionProvider} from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps<{}>) {
  return (
    <main className={inter.className}>
        <SessionProvider>
      <Component {...pageProps} />
        </SessionProvider>
    </main>
  );
}
