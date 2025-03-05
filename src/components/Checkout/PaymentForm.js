import Image from 'next/image';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from 'react-bootstrap';
import styles from '@/styles/components/checkout/payment-form.module.scss';

export default function PaymentForm({ selectedCountry }) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <div className={styles.paymentFormWrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.paymentMethod}>
          <label>
            <input type="radio" name="paymentMethod" value="creditCard" defaultChecked />
            Carte de crédit
          </label>
        </div>

        <div className={styles.cardDetails}>
          <label>Numéro de carte</label>
          <div className={styles.cardInputWrapper}>
            <Image
              src={selectedCountry.flags.png} // Affiche le drapeau du pays sélectionné
              alt={`Drapeau ${selectedCountry.name}`}
              width={24}
              height={18}
              className={styles.flagIcon}
            />
            <CardElement className={styles.cardElement} />
          </div>
        </div>

        <Button type="submit" disabled={!stripe} className={styles.button}>
          Payer
        </Button>
      </form>

      <p className={styles.securityMessage}>Toutes les transactions sont sécurisées et cryptées.</p>
    </div>
  );
}