import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

// type NextPageWithLayout = NextPage &{
//   getLayout?:(page:ReactElement)=>ReactNode;
// }

// type AppPropsWithLayout =AppProps & {
//   Component: NextPageWithLayout;
// }

// //dynamic layout for components
// export default function App({ Component, pageProps }: AppPropsWithLayout) {
//   const getLayout = Component.getLayout?? ( (page) => page);
//   return getLayout(<Component {...pageProps}/> );


  //static layout for every page
export default function App({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
