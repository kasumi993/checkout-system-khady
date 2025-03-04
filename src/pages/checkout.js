import MainLayout from '../layouts/MainLayout';
import styles from '@/styles/pages/checkout.module.scss'; 


import { Row, Col } from 'react-bootstrap';


import OrderSummary from '@/components/Checkout/OrderSummary';
import CheckoutForm from '@/components/Checkout/CheckoutForm';


export default function Checkout() {
  return (
    <MainLayout>
      <div className={styles.checkoutWrapper}>
        <Row className="g-4">
          {/* Left Column */}
          <Col md={8} className={styles.leftColumn}>
            <CheckoutForm />
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