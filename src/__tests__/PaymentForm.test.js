import { render, screen } from '@testing-library/react';
import PaymentForm from '@/components/Checkout/PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Mock Stripe.js
const stripePromise = loadStripe('pk_test_12345');

// Mock next/router
jest.mock('next/router', () => ({
    useRouter: () => ({
        push: jest.fn(),
        pathname: '/',
        query: {},
        asPath: '/',
    }),
}));

describe('PaymentForm', () => {
    it('renders the payment form', () => {
        render(
            <Elements stripe={stripePromise}>
                <PaymentForm selectedCountry={{ name: 'France', flags: { png: 'https://flagcdn.com/w320/fr.png' } }} paymentAmount={3990} />
            </Elements>
        );

        // Check if the form elements are rendered
        expect(screen.getByText('Numéro de carte')).toBeInTheDocument();
        expect(screen.getByText("Date d'exp")).toBeInTheDocument();
        expect(screen.getByText("CVC/CVV")).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /payer/i })).toBeInTheDocument();
    });

    it('disables the submit button when Stripe is not loaded', () => {
        render(
            <Elements stripe={null}>
                <PaymentForm selectedCountry={{ name: 'France', flags: { png: 'https://flagcdn.com/w320/fr.png' } }} paymentAmount={3990} />
            </Elements>
        );

        // Check if the button is disabled
        expect(screen.getByRole('button', { name: /payer/i })).toBeDisabled();
    });
});