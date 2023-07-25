import { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Document() {
  //const router = useRouter();
  
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
