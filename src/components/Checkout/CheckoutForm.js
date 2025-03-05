import styles from '@/styles/components/checkout/checkout-form.module.scss';

import ContactForm from '@/components/checkout/ContactForm';
import ShippingAddressForm from '@/components/Checkout/ShippingAddressForm';
import ShippingMethod from '@/components/Checkout/ShippingMethod';
import PaymentForm from '@/components/Checkout/PaymentForm';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutForm() {
    const [selectedCountry, setSelectedCountry] = useState({ name:'France', flags: { png: "https://flagcdn.com/w320/fr.png" }});

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
                <div className='mb-4'>
                  <h3>Adresse de Livraison</h3>
                  <span> Entrez votre adresse de livraison </span>
                </div>
                <ShippingAddressForm selectedCountry={selectedCountry} onCountryChange={setSelectedCountry}/>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <div className='mb-4'>
                  <h3>Méthode de Livraison</h3>
                  <span> Sélectionnez votre méthode de livraison ci-dessous</span>
                </div>
                <ShippingMethod />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <div className='mb-4'>
                  <h3>Paiement</h3>
                  <span> Sélectionnez votre méthode de paiement ci-dessous. Toutes les transactions sont sécurisées et crytées.</span>
                </div>
                <Elements stripe={stripePromise}>
                  <PaymentForm selectedCountry={selectedCountry}/>
                </Elements>
              </Col>
            </Row>
        </Container>
    )
}