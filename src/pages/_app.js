import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
  
    // Rediriger vers /checkout si l'utilisateur accède à la racine
    useEffect(() => {
      if (router.pathname === '/') {
        router.push('/checkout');
      }
    }, [router]);
  
    return <Component {...pageProps} />;
  }

export default MyApp;