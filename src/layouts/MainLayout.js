import styles from '@/styles/layouts/main-layout.module.scss';
import HeaderComponent from '@/components/Header/HeaderComponent';

export default function MainLayout({ children }) {
  return (
    <div className={styles.mainLayout}>
      <HeaderComponent />
      <main>{children}</main>
    </div>
  );
}