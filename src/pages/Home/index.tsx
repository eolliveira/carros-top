import "bootstrap/js/src/collapse.js";
import NavBar from "../../components/NavBar";
import ImageHeader from "../../assets/img/carHome.png";
import "./style.css";
import Button from "../../components/Button";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="home-card-image base-card">
          <div className="home-img">
            <img src={ImageHeader} alt="imagem carro" />
          </div>
          <div className="home-text">
            <h2>O carro perfeito para você</h2>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>

        <div className="home-card-text base-card">
          <Button />
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </>
  );
};

export default Home;
