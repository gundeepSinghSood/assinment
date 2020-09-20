import Head from 'next/head'
import HomePage from './templates/Home';
import Header from './atoms/Header';


export default function Layout() {
  return (
    <div style={{ backgroundColor: '#f1f2f3' }}>
      <Head>
        <title>{'space X'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <HomePage/>

      <footer>Developed by Rishav</footer>
    </div>
  )
}
