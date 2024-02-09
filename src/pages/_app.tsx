import { useEffect, useState } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from "next/head";
import '@styles/app.scss';
import { Nanum_Gothic, Roboto } from 'next/font/google'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';


const inter = Nanum_Gothic({ weight: "400", subsets: ['latin'] })
const roboto = Roboto({ weight: ["400", "500"], subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const router = useRouter();
  const currentYear = new Date().getFullYear();  

  const [menuStatus, setMenuStatus] = useState(false);

  useEffect(() => {
    setMenuStatus(false); // Close the navigation panel
  }, [ pathname ]);

  return (
    <>
      <style jsx global>{`
        html nav * {
          font-family: ${inter.style.fontFamily};
        }
        html body * {
          font-family: ${roboto.style.fontFamily};
          font-weight: 200;
        }
      `}</style>
      <Head>
        <meta name="description" content="Transform Your Body, Transform Your Life."/>

        <meta property="og:url" content="https://sky-dancer-fitness.vercel.app/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="SkyDancer Fitness"/>
        <meta property="og:description" content="Transform Your Body, Transform Your Life."/>
        <meta property="og:image" content="/scissor-jump-no-shoelace.jpg"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="sky-dancer-fitness.vercel.app"/>
        <meta property="twitter:url" content="https://sky-dancer-fitness.vercel.app/"/>
        <meta name="twitter:title" content="SkyDancer Fitness"/>
        <meta name="twitter:description" content="Transform Your Body, Transform Your Life."/>
        <meta name="twitter:image" content="/scissor-jump-no-shoelace.jpg"/>
      </Head>
      <header className={`header ${router.pathname == '/' && 'home'}`}>
        <div>
          <div className="menu-button">
            <Link href="/" className="logo">
              <Image
                src="/fitness.png"
                alt="Skydance Fitness"
                width={100}
                height={50}
                priority
              />
            </Link>
            <Image
              src={`${menuStatus ? '/close.svg' : '/menu-svgrepo-com.svg'}`}
              alt='menu Icon'
              onClick={() => setMenuStatus(!menuStatus)}
              width={30}
              height={30}
            />
          </div>
          <nav className={`${menuStatus ? 'nav-open' : 'nav-closed'}`}>
            <Link href="/" className="logo">
              <Image
                src="/fitness.png"
                alt="Skydance Entertainment"
                width={200}
                height={68}
                priority
              />
            </Link>
            <div className="menu-items">
              <Link href="https://sky-dancer-yoga.vercel.app/">
                Yoga
              </Link>
              <Link href="https://sky-dancer.vercel.app/dance">
                Entertainment
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <Component {...pageProps} />
      <footer>
        <p>Copyright &copy; {currentYear} SkydancerEntertainment - All Rights Reserved.</p>
      </footer>
    </>
  )
}
