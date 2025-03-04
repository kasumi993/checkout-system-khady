import { Form } from 'react-bootstrap';
import styles from '@/styles/components/checkout/shipping-method.module.scss';

export default function ShippingMethod() {
  return (
    <Form className={styles.form}>
      <Form.Group controlId="formShippingMethod">
        <Form.Label>Sélectionnez votre méthode de livraison ci-dessous</Form.Label>
        <Form.Control as="select">
          <option>Option 1</option>
          <option>Option 2</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
}