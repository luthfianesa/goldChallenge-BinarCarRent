import "./pages.css";
import NavigationBar from "../components/NavigationBar";
import PackageDetail from "../components/PackageDetail";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import CardDetail from "../components/CardDetail";

const CarDetail = () => {
  return (
    <div className="car-detail-container">
      <NavigationBar />
      <div className="empty-header"></div>
      <div className="card-detail-filter-container">
        <Filter />
      </div>

      <div className="detail-info-container">
        <PackageDetail />
        <CardDetail />
      </div>

      <Footer />
    </div>
  );
};

export default CarDetail;
