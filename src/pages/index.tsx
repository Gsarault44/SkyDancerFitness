import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>SkyDancer Fitness</title>
        <meta name="description" content="SkyDancer Fitness" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="home fitness">
        <div>
          <h1>Fitness Website</h1>
        </div>
      </main>
    </>
  )
}
