import Image from "next/image";
import CartButton from "./CartButton";
import styles from "@/styles/components/header/header.module.scss";

export default function HeaderComponent() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={50}
          height={50}
        />
      </div>
      <CartButton />
    </header>
  );
}
