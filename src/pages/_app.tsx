// src/pages/_app.tsx

import type { AppProps } from 'next/app';
import '../styles/globals.css'; 
import Layout from '../components/layout/Layout'; // <-- Importez le Layout

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Toutes les pages utiliseront désormais cette structure
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
  );
  
}

export default MyApp;