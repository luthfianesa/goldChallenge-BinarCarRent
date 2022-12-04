import "./pages.css"
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";

const HomePage = () => {
  
  return (
    <div>
      <div className="container-for-header-and-navbar">
        <NavigationBar />
        <Header />
      </div>
    </div>
  );
};

export default HomePage;