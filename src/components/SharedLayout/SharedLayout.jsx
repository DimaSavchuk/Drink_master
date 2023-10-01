import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
};

export default SharedLayout;
