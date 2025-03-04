import { Form } from 'react-bootstrap';
import styles from '@/styles/components/checkout/shipping-method.module.scss';

export default function ShippingMethod() {
  return (
    <div className={styles.ShippingMethodWrapper}>
      <div className={styles.title}> Information </div>
      <div className={styles.text}> Selectionnez un pays pour voir les methodes d&apos;expédition disponibles</div>
    </div>
  );
}