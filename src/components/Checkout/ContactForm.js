import { Form } from 'react-bootstrap';

export default function ContactForm() {
  return (
    <Form>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Indiquez votre email" />
      </Form.Group>
      <Form.Group className="mt-2" controlId="formMarketing">
        <Form.Check type="checkbox" label="J’accepte de recevoir des emails marketing" />
      </Form.Group>
    </Form>
  );
}