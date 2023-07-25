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
        <section className="hero">
          <Image
            src="/scissor-jump-no-shoelace.jpg"
            alt="scissor-jump-no-shoelace"
            width={0}
            height={0}
            priority
            sizes='100vw'
            style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
          />
          <h1>Transform Your Body, Transform Your Life.</h1>
        </section>
        <section>
          <p>Meet Wendy: Your Dedicated & Creative Personal Trainer. Tailoring workouts to your unique needs, she brings a diverse skillset to every session. Let her guide you on a transformative fitness journey.</p>
        </section>
      </main>
    </>
  )
}
