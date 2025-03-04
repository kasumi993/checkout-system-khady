import { Form, Button } from 'react-bootstrap';

const OrderSummary = () => {
  return (
    <div className="border p-4">
      <h4 className='fw-bold'>Votre commande</h4>

      {/* Produit */}
      <div className="d-flex justify-content-between mb-3">
        <span>Montessori Multi-Usage Observation</span>
        <span>39.90 €</span>
      </div>

      {/* Code de réduction */}
      <Form.Group className="mb-3">
        <Form.Label>Code de réduction</Form.Label>
        <div className="d-flex">
          <Form.Control type="text" placeholder="Entrez votre code" />
          <Button variant="outline-secondary" className="ms-2">
            Appliquer
          </Button>
        </div>
      </Form.Group>

      {/* Sous-total */}
      <div className="d-flex justify-content-between mb-2">
        <span>Sous-total - 1 article</span>
        <span>39.90 €</span>
      </div>

      {/* Taxes estimées */}
      <div className="d-flex justify-content-between mb-3">
        <span>Taxes estimées</span>
        <span>0.00 €</span>
      </div>
    </div>
  );
};

export default OrderSummary;