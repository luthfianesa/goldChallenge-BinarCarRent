import "./header.css"
import Car from "../assets/img_car-2.png"
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className="header-container">
      <div className="txt-header-container">
          <h1>Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
          <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          <Link to="/searchcar"><button className="btn-header">Mulai Sewa Mobil</button></Link>
        </div>
        <div>
          <img className="img-header" src={Car}></img>
        </div>
    </div>
  );
};

export default Header;