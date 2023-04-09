import Banner from '../Components/Banner';

import '../Styles/Home.css';
import Categories from '../Components/Categories';
import Brands from '../Components/Brands';
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <div className="Home-Container">
      <Banner />
      <div className="Categories-Container">
        <h1 className="sub-title">Categories</h1>
        <Categories />
      </div>
      <div className="Brands-Container">
        <h1>Brands</h1>
        <Brands />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
