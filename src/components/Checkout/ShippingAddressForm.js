import { Form, Row, Col } from 'react-bootstrap';
import styles from '@/styles/components/checkout/shipping-address-form.module.scss';

export default function ShippingAddressForm() {
  return (
    <Form className={styles.form}>
      <Row>
        <Col>
          <Form.Group controlId="formFirstName">
            <Form.Label>Prénom</Form.Label>
            <Form.Control placeholder="Indiquez votre prénom" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formLastName">
            <Form.Label>Nom</Form.Label>
            <Form.Control placeholder="Indiquez votre nom" />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="formAddress">
        <Form.Label>Adresse</Form.Label>
        <Form.Control placeholder="123 rue principale, ville, Pays" />
      </Form.Group>
      <Form.Group controlId="formAddress2">
        <Form.Label>Adresse complémentaire (optionnel)</Form.Label>
        <Form.Control placeholder="Adresse complémentaire" />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group controlId="formCity">
            <Form.Label>Ville</Form.Label>
            <Form.Control placeholder="Indiquez votre ville" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formState">
            <Form.Label>État</Form.Label>
            <Form.Control placeholder="Indiquez votre état" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formZip">
            <Form.Label>Code Postal</Form.Label>
            <Form.Control placeholder="Indiquez votre code postal" />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="formPhone">
        <Form.Label>Téléphone</Form.Label>
        <Form.Control placeholder="Indiquez votre numéro de téléphone" />
      </Form.Group>
      <Form.Group controlId="formBillingAddress">
        <Form.Check type="checkbox" label="L’adresse de facturation est différente de l’adresse de livraison" />
      </Form.Group>
    </Form>
  );
}