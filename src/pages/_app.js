import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/styles.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Lato } from 'next/font/google';

// Configuration de la police Roboto
const inter = Lato({
  display: 'swap',
  weight: ['100', '300', '400', '700', '900'],
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
        <ToastContainer />
      </div>
    );
  }

export default MyApp;