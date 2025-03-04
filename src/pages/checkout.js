import MainLayout from '../layouts/MainLayout';
import styles from '@/styles/pages/checkout.module.scss'; 

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Container, Row, Col } from 'react-bootstrap';

import ContactForm from '@/components/checkout/ContactForm';
import ShippingAddressForm from '@/components/Checkout/ShippingAddressForm';
import ShippingMethod from '@/components/Checkout/ShippingMethod';
import PaymentForm from '@/components/Checkout/PaymentForm';
import OrderSummary from '@/components/Checkout/OrderSummary';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Checkout() {
  return (
    <MainLayout>
      <div className={styles.checkoutWrapper}>
        <Row className="g-4">
          {/* Left Column */}

          <Col md={8} className={styles.leftColumn}>
            <Row className='mt-4'>
              <Col>
                <h2>Contact</h2>
                <ContactForm />
              </Col>
            </Row>
            <Row className='mt-4'>
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

          {/* Right Column */}
          <Col md={4} className={styles.rightColumn}>
            <OrderSummary />
          </Col>

        </Row>
      </div>
    </MainLayout>
  );
}