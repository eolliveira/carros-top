import './style.css';
import CarImg from "../../assets/img/car-card.png";
import Button from '../Button';

const CarCard = () => {
  return (
    <div className="car-card-container base-card">
      <div className="car-card-img">
        <img src={CarImg} alt="Imagem do Carro " />
      </div>
      <div className="car-card-content">
        <h2>Audi Supra TT</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <Button />
      </div>
    </div>
  );
};

export default CarCard;
