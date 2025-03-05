import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderSummary = () => {
  return (
    <div className="container mt-4">
      <div className="p-4">
        <h2 className="h5 fw-bold mb-3">Votre commande</h2>

        {/* Product Item */}
        <div className="d-flex mb-3">
          <div className="me-3 position-relative">
            <Image 
              src="/product-image.webp" 
              alt="Product" 
              width={70}
              height={70}
            />
          </div>
          <div className="flex-grow-1">
            <p className="mb-1 fw-bold">Montessori Multi-Usage Observation Tower</p>
            <p className="text-muted small">Default Title</p>
          </div>
          <div className="fw-bold">€39.90</div>
        </div>

        {/* Discount Code */}
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Code de réduction" />
          <button className="btn btn-outline-secondary">Appliquer</button>
        </div>

        {/* Order Summary */}
        <hr />
        <div className="d-flex justify-content-between mb-2">
          <span className="text-muted">Sous-total - 1 items</span>
          <span className="fw-medium">€39.90</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span className="text-muted">Livraison</span>
          <span className="fw-medium">-</span>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <span className="text-muted">Taxes estimées</span>
          <span className="fw-medium">€0.00</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between fw-bold mb-3">
          <span>Total</span>
          <span>€39.90</span>
        </div>

        {/* Service Features */}
        <div className="mt-3">
          {[
            { icon: "/verified.png", title: "Service Client", text: "Nous répondons à vos questions du lundi au vendredi de 9h à 18h." },
            { icon: "/return.png", title: "Satisfait ou remboursé 30 jours", text: "Insatisfait ? Remboursement facile et sans condition. Votre satisfaction est notre priorité." },
            { icon: "/truck.png", title: "Expédition en 48h", text: "Bénéficiez d'une expédition ultra-rapide avec suivi en seulement 48 heures." }
          ].map((item, index) => (
            <div className="d-flex align-items-start mb-3" key={index}>
              <Image src={item.icon} alt={item.title} width={24} height={24} className="me-2" />
              <div>
                <p className="fw-medium mb-1">{item.title}</p>
                <p className="text-muted small">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
