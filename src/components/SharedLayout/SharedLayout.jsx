import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Loading } from '../Loading/Loading';

const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
};

export default SharedLayout;
