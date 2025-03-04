import HeaderComponent from '@/components/Header/HeaderComponent';

export default function MainLayout({ children }) {
  return (
    <div>
      <HeaderComponent />
      <main>{children}</main>
    </div>
  );
}