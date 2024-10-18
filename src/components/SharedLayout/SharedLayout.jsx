import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import css from './SharedLayout.module.css';
import { Header } from 'components/Header/Header';
import { BackTopBtn } from 'components/BackTopBtn/BackTopBtn';
import { Footer } from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <div className={css.container}>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
          <BackTopBtn />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default SharedLayout;
