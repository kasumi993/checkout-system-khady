import { Form } from 'react-bootstrap';
import styles from '@/styles/components/checkout/contact-form.module.scss';

export default function ContactForm() {
  return (
    <Form className={styles.form}>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Indiquez votre email" />
      </Form.Group>
      <Form.Group controlId="formMarketing">
        <Form.Check type="checkbox" label="J’accepte de recevoir des emails marketing" />
      </Form.Group>
    </Form>
  );
}