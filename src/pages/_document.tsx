import { Html, Head, Main, NextScript } from 'next/document';
import { env } from '~/env.mjs';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GOOGLE_TRACKING_ID}`} /> 
        <script id="google-analytics" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || []; 
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date()); 
            gtag('config', '${env.NEXT_PUBLIC_GOOGLE_TRACKING_ID}');
          `
        }} /> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}