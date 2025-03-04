import { useState, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import styles from '@/styles/components/checkout/shipping-address-form.module.scss';


export default function ShippingAddressForm() {
  const [countries, setCountries] = useState([]);

  // Récupérer la liste des pays depuis l'API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        // Extraire les noms des pays
        const countryNames = data.map((country) => country.name.common);
        // Trier les pays par ordre alphabétique
        countryNames.sort();
        setCountries(countryNames);
      } catch (error) {
        console.error('Erreur lors de la récupération des pays:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <Form className={styles.ShippingAddressFormWrapper}>
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
      <Form.Group className='mt-3' controlId="formAddress">
        <Form.Label>Adresse</Form.Label>
        <Form.Control placeholder="123 rue principale, ville, Pays" />
      </Form.Group>
      <Form.Group className='mt-3' controlId="formAddress2">
        <Form.Label>Adresse complémentaire (optionnel)</Form.Label>
        <Form.Control placeholder="Adresse complémentaire" />
      </Form.Group>
      <Form.Group className="mt-3" controlId="formCountry">
        <Form.Label>Pays</Form.Label>
        <Form.Select aria-label="Sélectionnez un pays">
          <option value="">Sélectionnez un pays</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Row className='mt-3'>
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
      <Form.Group className='mt-3'  controlId="formPhone">
        <Form.Label>Téléphone</Form.Label>
        <Form.Control placeholder="Indiquez votre numéro de téléphone" />
      </Form.Group>
      <Form.Group className='mt-3'  controlId="formBillingAddress">
        <Form.Check type="checkbox" label="L’adresse de facturation est différente de l’adresse de livraison" />
      </Form.Group>
    </Form>
  );
}