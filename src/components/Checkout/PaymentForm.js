import Image from 'next/image';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
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

    const cardNumberElement = elements.getElement(CardNumberElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardNumberElement,
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
        <div className={styles.paymentFormContainer}>
          <div className={styles.paymentMethod}>
            <div className={styles.paymentMethodName}>
              <div>
                <Image src="/credit-card.png" alt="Credit Card" width={24} height={24} />
                <span className='ms-2'>Carte de crédit</span>
              </div>
              <div className="radio-checkbox active"> </div>
            </div>
          </div>
          <div className={styles.cardDetails}>
              <label>Numéro de carte</label>
              <div className={styles.cardInputWrapper}>
                <Image
                  src={selectedCountry.flags.png}
                  alt={`Drapeau ${selectedCountry.name}`}
                  width={24}
                  height={18}
                  className={styles.flagIcon}
                />
                <CardNumberElement className={styles.cardInput} />
              </div>
              <div className='d-flex gap-2 w-100 mt-4'>
                <div className={`${styles.cardInputWrapper}`}>
                  <label>
                    Date d'exp
                    <CardExpiryElement className={styles.cardInput} />
                  </label>
                </div>
                <div className={`${styles.cardInputWrapper}`}>
                  <label>
                    CVC/CVV
                    <CardCvcElement className={styles.cardInput} />
                  </label>
                </div>
              </div>
          </div>
        </div>
      
        <Button type="submit" disabled={!stripe} className={styles.button}>
          Payer
        </Button>
      </form>

      <p className={styles.securityMessage}>
        Toutes les transactions sont sécurisées et cryptées.
      </p>
    </div>
  );
}