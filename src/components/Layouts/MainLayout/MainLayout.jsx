import Footer from '../../Footer/Footer';
import TopMainNav from '../../Navigation/TopMainNav/TopMainNav';

export default function MainLayout({ children }) {
  return (
    <div>
      <TopMainNav />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
