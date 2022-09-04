import CarCard from "../../components/CarCard";
import SearchBar from "../../components/SearchBar";
import "./style.css";

const Catalog = () => {
  return (
    <div className="container catalog-container">
      <SearchBar />
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <CarCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
