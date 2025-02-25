import CentralTexas from "./components/CentralTexas/CentralTexas";
import FeaturedOptions from "./components/FeaturedOptions/FeaturedOptions";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MemberStories from "./components/MemberStories/MemberStories";
const App = () => {
  return (
    <div>
      <Header />
      <CentralTexas />
      <FeaturedOptions />
      <MemberStories />
      <Footer />
    </div>
  );
};

export default App;
