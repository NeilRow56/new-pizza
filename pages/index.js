import Head from 'next/head'
import Layout from './components/Layout'
import Hero from './components/Hero'


export default function Home() {
  return (
    <Layout>
    <div >
      <Head>
        <title>Fudo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Logo.png" />
      </Head>

      <main >
       
        < Hero />
      </main>

      
    </div>
    </Layout>
  )
}
