import { FaShoppingBasket } from "react-icons/fa";
import styles from "@/styles/global/cart-button.module.scss";

export default function CartButton() {
  return (
    <button className={styles.cartButton}>
      <span>Panier</span>
      <FaShoppingBasket />
    </button>
  );
}