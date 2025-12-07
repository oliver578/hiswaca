// src/pages/_document.tsx (si vous l'avez créé)

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Assurez-vous que cette ligne pointe vers votre fichier dans public/ */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}