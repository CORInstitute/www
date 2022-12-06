import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ViewportContextProvider } from '../providers/ViewportContextProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ViewportContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ViewportContextProvider>
  )
}
