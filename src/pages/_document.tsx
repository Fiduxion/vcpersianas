import { Html, Head, Main, NextScript } from 'next/document'
 import Script from "next/script"; 

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11283475282" /> 
        <Script id="google-analytics"> 
          {`
            window.dataLayer = window.dataLayer || []; 
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date()); gtag('config', 'AW-11283475282');
          `}   
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}