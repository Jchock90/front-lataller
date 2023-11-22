import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';

export default function MainLayout() {
  return (
    <>
        <div className='w-full min-h-screen'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    </>
  );
}
