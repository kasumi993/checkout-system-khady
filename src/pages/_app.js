import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/styles.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Roboto } from 'next/font/google';

// Configuration de la police Roboto
const inter = Roboto({
  display: 'swap',
  weights: [400, 500, 700],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
    const router = useRouter();
  
    // Rediriger vers /checkout si l'utilisateur accède à la racine
    useEffect(() => {
      if (router.pathname === '/') {
        router.push('/checkout');
      }
    }, [router]);
  
    return (
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    );
  }

export default MyApp;