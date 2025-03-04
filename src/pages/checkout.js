import MainLayout from '../layouts/MainLayout';
import styles from '@/styles/pages/checkout.module.scss'; 

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Container, Row, Col } from 'react-bootstrap';

import ContactForm from '@/components/checkout/ContactForm';
import ShippingAddressForm from '@/components/Checkout/ShippingAddressForm';
import ShippingMethod from '@/components/Checkout/ShippingMethod';
import PaymentForm from '@/components/Checkout/PaymentForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Checkout() {
  return (
    <MainLayout>
      <div className={styles.checkoutContainer}>
        <Col>
          <Row>
            <Col>
              <h2>Contact</h2>
              <ContactForm />
            </Col>
          </Row>
          <Row md={6}>
            <Col>
              <h2>Adresse de Livraison</h2>
              <ShippingAddressForm />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <h2>Méthode de Livraison</h2>
              <ShippingMethod />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <h2>Paiement</h2>
              <Elements stripe={stripePromise}>
                <PaymentForm />
              </Elements>
            </Col>
          </Row>
        </Col>
        <Col>
        </Col>
      </div>
    </MainLayout>
  );
}