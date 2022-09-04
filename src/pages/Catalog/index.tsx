import CarCard from "../../components/CarCard";
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
import "./style.css";

const Catalog = () => {
  return (
    <>
      <NavBar />

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
    </>
  );
};

export default Catalog;
