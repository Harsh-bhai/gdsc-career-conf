import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
      <Head />
      <body className='scrollbar-none overflow-x-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
