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
        <Container>
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
        </Container>
    )
}