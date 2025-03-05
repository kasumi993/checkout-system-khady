import Image from 'next/image';
import { FaLock } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from 'react-bootstrap';
import styles from '@/styles/components/checkout/payment-form.module.scss';

export default function PaymentForm({ selectedCountry }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    // Créer un PaymentIntent côté serveur
    const { clientSecret } = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    // Confirmer le paiement côté client
    const cardNumberElement = elements.getElement(CardNumberElement);
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardNumberElement,
      },
    });

    setLoading(false);

    if (error) {
      // Afficher un message toast en cas d'erreur
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (paymentIntent.status === 'succeeded') {
      // Rediriger vers une page de succès
      router.push('/success');
    }
  };

  return (
    <div className={styles.paymentFormWrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.paymentFormContainer}>
          <div className={styles.paymentMethod}>
            <div>
                <Image src="/credit-card.png" alt="Credit Card" width={24} height={24} />
                <span className={`ms-2 ${styles.paymentMethodName}`}>Carte de crédit</span>
            </div>
            <div className="radio-checkbox active"> </div>
          </div>
          <div className={styles.cardDetails}>
            <div>
              <label>Numéro de carte</label>
              <div className={styles.cardInputWrapper}>
                <Image
                  src={selectedCountry.flags.png}
                  alt={`Drapeau ${selectedCountry.name}`}
                  width={30}
                  height={20}
                  className={styles.flagIcon}
                />
                <CardNumberElement className={styles.cardInput} />
              </div>
            </div>
            <div className='d-flex gap-2 w-100 mt-3'>
                <div className='w-50'>
                  <label>Date d&apos;exp</label>
                  <CardExpiryElement className={styles.cardInput} />
                </div>
                <div className='w-50'>
                  <label>CVC/CVV</label>
                  <CardCvcElement className={styles.cardInput} />
                </div>
            </div>
          </div>
        </div>
      
        <Button type="submit" disabled={!stripe} className={styles.button}>
          <FaLock size={15} />
          Payer
        </Button>
      </form>

      <p className={styles.securityMessage}>
        <FaLock size={10} /> Toutes les transactions sont sécurisées et cryptées.
      </p>
    </div>
  );
}