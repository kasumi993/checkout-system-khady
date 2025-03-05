import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/checkout/order-summary.module.scss';

const OrderSummary = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Votre commande</h2>

        {/* Product Item */}
        <div className={styles.productItem}>
          <div className={styles.productImage}>
            <Image 
              src="/product-image.webp" 
              alt="Product" 
              width={70}
              height={70}
            />
          </div>
          <div className={styles.productDetails}>
            <p className={styles.productName}>Montessori Multi-Usage Observation Tower</p>
            <p className={styles.productSubtitle}>Default Title</p>
          </div>
          <div className={styles.productPrice}>€39.90</div>
        </div>

        {/* Discount Code */}
        <div className={styles.discountSection}>
          <input type="text" className={styles.input} placeholder="Code de réduction" />
          <button className={styles.applyButton}>Appliquer</button>
        </div>

        {/* Order Summary */}
        <hr />
        <div className={styles.summaryRow}>
          <span className={styles.textMuted}>Sous-total - 1 items</span>
          <span className={styles.textBold}>€39.90</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.textMuted}>Livraison</span>
          <span className={styles.textBold}>-</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.textMuted}>Taxes estimées</span>
          <span className={styles.textBold}>€0.00</span>
        </div>
        <hr />
        <div className={styles.totalRow}>
          <span>Total</span>
          <span>€39.90</span>
        </div>

        {/* Service Features */}
        <div className={styles.features}>
          {[
            { icon: "/verified.png", title: "Service Client", text: "Nous répondons à vos questions du lundi au vendredi de 9h à 18h." },
            { icon: "/return.png", title: "Satisfait ou remboursé 30 jours", text: "Insatisfait ? Remboursement facile et sans condition. Votre satisfaction est notre priorité." },
            { icon: "/truck.png", title: "Expédition en 48h", text: "Bénéficiez d'une expédition ultra-rapide avec suivi en seulement 48 heures." }
          ].map((item, index) => (
            <div className={styles.featureItem} key={index}>
              <Image src={item.icon} alt={item.title} width={24} height={24} className={styles.featureIcon} />
              <div>
                <p className={styles.featureTitle}>{item.title}</p>
                <p className={styles.featureText}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
