import styles from '@/styles/components/checkout/checkout-form.module.scss';

import ContactForm from '@/components/checkout/ContactForm';
import ShippingAddressForm from '@/components/Checkout/ShippingAddressForm';
import ShippingMethod from '@/components/Checkout/ShippingMethod';
import PaymentForm from '@/components/Checkout/PaymentForm';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Container, Row, Col } from 'react-bootstrap';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutForm() {
    return (
        <Container className={styles.CheckoutFormWrapper}>
            <Row className='mt-4'>
              <Col>
                <div className='mb-4'>
                  <h3>Contact</h3>
                  <span> Entrez vos informations de contact </span>
                </div>
                <ContactForm />
              </Col>
            </Row>
            <Row className='mt-4'>
              <Col>
                <h3>Adresse de Livraison</h3>
                <ShippingAddressForm />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <h3>Méthode de Livraison</h3>
                <ShippingMethod />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <h3>Paiement</h3>
                <Elements stripe={stripePromise}>
                  <PaymentForm />
                </Elements>
              </Col>
            </Row>
        </Container>
    )
}