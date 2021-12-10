import Annuncio from "../components/Annuncio";
import Categorie from "../components/Categorie";
import Navbar from "../components/Navbar";
import Slider from '../components/Slider';
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Annuncio />
      <Navbar />
      <Slider/>
      <Banner/>
      <Categorie />
      <Footer />
    </div>
  );
};

export default Home;
