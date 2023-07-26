import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const testimonials = [
  {
    quote: 'Wendy is a devoted and creative personal trainer who is keenly focused on understanding and meeting the unique needs of all of her clients.  She brings to bear a broad repertoire of skills and workout genres in all of her training sessions.',
    cite: '–Neil T'
  },
  {
    quote: 'My yoga teacher and personal trainer for many years, Wendy has a remarkable ability to pinpoint problems and come up with exercises to address them.  Her attention to detail and empathetic nature make her a particularly effective yoga teacher.  She is personable and professional.  She has been a great advisor on all things physical and an engaging friend as well.',
    cite: '-Lynn M.'
  },
  {  
    quote: 'We were lucky to find Wendy&rsquo;s in-person small group yoga class before covid hit and it&rsquo;s proven to be especially restorative and helpful as we continued with zoom classes since March 2020. Wendy carefully describes poses and movements, offers adaptations for folks with different abilities or injuries, and consistently cultivates a positive, caring space — a true feat on zoom and in-person.',
    cite: 'Monique & Doug <br />Arlington, VA' 
  }
]


export default function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
        <section className="split-media">
          <div className="split-media__content">
            <h2>Meet Wendy </h2>
            <p>Your Dedicated & Creative Trainer. Tailoring workouts to your unique needs, she brings a diverse skillset to every session. Let her guide you on a transformative fitness journey.</p>
          </div>
          <Image
            src="/kick-and-punch-jump.jpg"
            alt="kick-and-punch-jump"
            width={0}
            height={0}
            priority
            sizes='100vw'
            style={{ width: '100%', height: '60vh', objectFit: 'cover', objectPosition: 'top' }}
          />
        </section>
        <section className="testimonials">
          <Carousel
            responsive={responsive}
            containerClass="carousel"
            transitionDuration={1000}
            arrows={true}
            infinite={true}
          >
          {testimonials.map((testimonial, index) => {
            return (
              <blockquote key={index}>
                <p>{testimonial.quote}</p>
                <cite dangerouslySetInnerHTML={{ __html: testimonial.cite }} />
              </blockquote>
            )
          })}
          </Carousel>
        </section>
      </main>
    </>
  )
}
