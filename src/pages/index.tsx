import * as React  from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import emailjs from '@emailjs/browser';


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
    quote: '"Wendy has taught me how to exercise smarter and helped me make lifestyle changes, she explains the reasoning behind each exercise and has helped me integrate exercise into my daily routine."',
    cite: '-Sam'
  }
]

const isEmail = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
export const ContactUs = () => {
  const [errors, setErrors] = React.useState(false);
  const [thanks, setThanks] = React.useState(false);
  const validateAndSubmitForm = (e: any) => {

 
    if (!isEmail(e)) {
      setErrors(true);
    }
    
    if (isEmail(e)) {
      setErrors(false);
    }
    console.log(errors, e)
  };
  
  const form = React.useRef() as React.MutableRefObject<HTMLFormElement>;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input1 = form.current[0] as HTMLInputElement
    const input2 = form.current[1] as HTMLInputElement 
    const input3 = form.current[2] as HTMLInputElement
    if(input1.value.length > 0 && input2.value.length > 0 && input3.value.length > 0) {
      setThanks(true);
      emailjs.sendForm('service_yz0e3ad', 'template_7nogb9a', form.current, 'SgPX_lb0_LriOGFYT')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }
      );
    }
  };

  const closeModal = () => {
    form.current.reset();
    setThanks(false)
  }

  return (
    <>
      {thanks && (
        <div className="modal-wrapper">
          <div className="catcher" onClick={closeModal}></div>
          <div className="modal-small">
            <span className="close" onClick={closeModal}>X</span>
            <h2>Thank you!</h2>
            <p>We will be in touch soon</p>
          </div>
        </div>
      )}
      <form ref={form} onSubmit={e => sendEmail(e)} className='booking-form'>
        <div className="form-flex">
          <div>
            <label htmlFor="name" className="booking-name-label">Name</label>
            <input
              id="name"
              placeholder='Full Name'
              type="text"
              name="user_name"
              onChange={() => {}}
            />
          </div>
          <div className={errors ? 'error' : 'good'}>
            <label htmlFor="email" className="booking-email-label">Email</label>
            <input
              id="email"
              placeholder='email@email.com'
              type="email"
              name="user_email"
              onBlur={(e) => validateAndSubmitForm(e.target.value)}
            />
          </div>
        </div>
        <div className="form-message">
          <label htmlFor="message">What are you looking for?</label>
          <textarea
            id="message"
            placeholder='I need intense training'
            name="message"
            onChange={() => {}}
          />
        </div>
        <input className="button" type="submit" value="Lets Get Fit" />
      </form>
    </>
  );
};

export default function Home() {
  const [domLoaded, setDomLoaded] = React.useState(false);

  React.useEffect(() => {
    setDomLoaded(true);
  }, []);

  React.useEffect(() => {
    setDomLoaded(true);
  }, []);

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

  React.useEffect(() => {
  const config = {
    root: null,
    rootMargin: '0px',
    threshold: [0.15, 0.2, 0.25, 0.3]
  };
  
  let observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      const currentY = entry.boundingClientRect.y;
      const currentRatio = entry.intersectionRatio;
      const isIntersecting = entry.isIntersecting;
      const element = entry.target;
      element.classList.remove("outview-top", "inview-top", "inview-bottom", "outview-bottom");
      if (isTopVisible(element) ){
       element.classList.add('inview-top');
      } else if (isBottomVisible(element) ) {
       element.classList.add('inview-bottom');
      }
  
    })
  }, config);
  
  function isTopVisible(element: Element) {
   const elementTop = element.getBoundingClientRect().top;
   const scrollTop = document.documentElement.scrollTop;
   return ( scrollTop > elementTop);
  }
  
  function isBottomVisible(element: Element) {
   const elementBottom = element.getBoundingClientRect().bottom;
   const scrollBottom = document.documentElement.scrollTop + document.documentElement.clientHeight;
   return (scrollBottom > elementBottom);
  }
  
  const viewbox = document.querySelectorAll('.viewme');
  viewbox.forEach(image => {
    observer.observe(image);
  });
}, []);
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
            blurDataURL="/scissor-jump-no-shoelace.jpg"
            placeholder="blur"
            style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
          />
          <h1>Transform Your Body, Transform Your Life.</h1>
        </section>
        <section className="split-media">
          <div className="split-media__content">
            <h2>Meet Wendy </h2>
            <p>Your dedicated & creative trainer. Tailoring workouts to your unique needs, she brings a diverse skillset to every session. Let her guide you on a transformative fitness journey.</p>
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
            autoPlay
            autoPlaySpeed={7500}
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
        {/* <section className="split-column">
          <div className="split-column__inner">
            <div className='viewme'>
              <Image
                src="/bicep-up-close.jpg"
                alt="bicep-up-close"
                width={0}
                height={0}
                priority
                sizes='100vw'
                style={{ width: '100%', height: '60vh', objectFit: 'cover', objectPosition: 'top' }}
              />
              <p>Unleash your full potential with Wendy! Whether you&lsquo;re aiming for sculpted arms, increased strength, or overall fitness, Wendy is here to guide and support you every step of the way. Join us on this transformative journey and conquer your fitness goals like never before!</p>
            </div>
            <div className="viewme">
              <Image
                src="/cropped-squat-jump.jpg"
                alt="squat-jump"
                width={0}
                height={0}
                priority
                sizes='100vw'
                style={{ width: '100%', height: '60vh', objectFit: 'cover', objectPosition: 'top' }}
              />
              <p>Reach new heights with Wendy! Watch in awe as our trainer showcases explosive power with dynamic squat jumps. Elevate your fitness game and unlock the full potential of your body. Join us today and experience the thrill of pushing your limits to achieve remarkable results!</p>
            </div>
          </div> 
          <div className="clip-champ">
            <iframe title="clipchamp" allow="autoplay;" allowFullScreen src="https://clipchamp.com/watch/flno9X0Q0RH/embed?loop=1"></iframe>
          </div>
        </section> */}
        {domLoaded && (
        <section className="contact">
          <div className="contact__inner">
            <div className="contact__form">
              <div>
                <div className="contact__content">
                  <h1>Ready to take your fitness journey to the next level?</h1>
                  <p>My training philosophy is to create a holistic training program that pulls from all facets of fitness for a customized program for each client. I have trained in everything from Pilates and Yoga to Crossfit, I pull exercises from every area of fitness to tailor the workout to each individual.  I love helping clients who are coming off an injury or out of physical therapy. I enjoy helping my clients out of pain and into fitness.</p> 
                </div>
                <ContactUs />
              </div>
              <div>
                <Image
                  src="/db-punch.jpg"
                  alt="Dumb Bell Punch"
                  width={0}
                  height={0}
                  priority
                  sizes='100vw'
                  style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top' }}
                />
              </div> 
            </div>
          </div>
        </section>)}
      </main>
    </>
  )
}
