import { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Document() {
  //const router = useRouter();
  
  return (
    <Html lang="en">
      <Head />
      <script src="https://web3forms.com/client/script.js" async defer></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
