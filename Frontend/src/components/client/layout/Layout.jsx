import Footer from "../../shared/footer/Footer";
import Navbars from "../../shared/navbar/Navbars";

export default function Layout({ children }) {
  return (
    <div>
      <Navbars />
      <div className="sm:pt-28  box-border font-serif">{children}</div>
      <Footer />
    </div>
  );
}
