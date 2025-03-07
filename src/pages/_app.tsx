import { useEffect, useState } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
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
  const [open, setOpen] = useState(true);

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
              <Link href="https://www.skydanceryoga.com/" className="yoga">
                <Image
                  src="/yoga-logo.png"
                  alt="SkyDancer Yoga"
                  width={120}
                  height={60}
                />
              </Link>
              <Link href="https://www.skydancerentertainment.com/dance" className="ent">
                <Image
                  src="/logo.png"
                  alt="SkyDancer Entertainment"
                  width={130}
                  height={60}
                />
              </Link>
            </div>
          </nav>
        </div>
      </header>
      {/* <div className={`${open ? 'pop-card open': 'pop-card'} `}>
        <button className='pop-card-close' onClick={() => setOpen(false)}>X</button>
        <Image
          src="/pool-ocean.jpg"
          alt="Over looking a pool"
          width={376}
          height={320}
        />
        <p>Escape the hustle and bustle of everyday life and embark on a transformative journey with our rejuvenating yoga retreats.</p>
        <a className="wtrvl-checkout_button button" id="wetravel_button_widget" data-env="https://www.wetravel.com" data-version="v0.3" data-uid="1154190" data-uuid="83061662" href="https://www.wetravel.com/checkout_embed?uuid=83061662" target="_blank">Book Now</a> 
        <Script src="https://cdn.wetravel.com/widgets/embed_checkout.js"></Script>
      </div> */}
      <Component {...pageProps} />
      <footer>
        <p>Copyright &copy; {currentYear} SkydancerEntertainment - All Rights Reserved.</p>
      </footer>
    </>
  )
}
