# Checkout System with Stripe Integration

This project is a checkout page implementation using Next.js, React.js, and Bootstrap with Stripe payment integration in sandbox mode.

![Checkout Page Screenshot](https://github.com/kasumi993/quoteit-front/assets/42519251/90bd63e3-2a40-46f9-a1e4-3217ed8b0a87)

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Stripe Integration](#stripe-integration)
- [Usage](#usage)
- [Testing Payments](#testing-payments)
- [Development](#development)

## Features

- Responsive checkout page built with Bootstrap
- Secure payment processing using Stripe API
- Client-side form validation
- Test payment functionality in sandbox mode

## Requirements

- Node.js 18.17+
- Stripe account (for test API keys)

### Technologies Used
- Next.js (min version 13)
- React.js
- Bootstrap
- Stripe API
- Jest

## Installation

1. **Clone the repository:**

```sh
git clone https://github.com/kasumi993/checkout-system-khady.git
cd checkout-system
```

2. **Install the dependencies:**

```sh
npm install
```

## Environment Setup

1. **Create a `.env.local` file in the root directory:**

```sh
touch .env.local
```

2. **Add your Stripe API keys to the `.env.local` file:**

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
STRIPE_SECRET_KEY=sk_test_your_secret_key
```

> **Note:** Replace 'pk_test_your_publishable_key' and 'sk_test_your_secret_key' with your personal stripe API keys. You can find your API keys in your [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)

## Stripe Integration

This project uses Stripe for payment processing in test mode. The integration is done using:

- `@stripe/react-stripe-js` for React components
- `@stripe/stripe-js` for loading the Stripe.js script

The main components handling Stripe integration are:
- `checkout.js` - Main checkout page 
- `CheckoutForm.js` - Component containing the payment form


## Usage

1. **Start the development server:**

```sh
npm run dev
```

2. **Access the checkout page:**

Open your browser and navigate to `http://localhost:3000` or `http://localhost:3000/checkout`

ps: The default route '/' redirects to '/checkout'.

## Testing Payments

To test the payment functionality:

1. Use one of the following [Stripe test cards](https://stripe.com/docs/testing#cards):
   - **Successful payment**: `4242 4242 4242 4242`
   - **Failed payment**: `4000 0000 0000 0002`

2. Enter any future expiration date (MM/YY)

3. Enter any 3-digit CVC

4. Click the "Pay" button to process the test payment

5. Verify the transaction in your [Stripe Dashboard](https://dashboard.stripe.com/test/payments)

## Development

### Linting

```sh
npm run lint
```

### Building for Production

```sh
npm run build
```

### Starting Production Server

```sh
npm start
```