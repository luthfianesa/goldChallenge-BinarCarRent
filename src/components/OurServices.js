import "./ourServices.css"
import Woman from "../assets/img_service.png"
import Eclipse from "../assets/ellipse22.png"

const OurServices = (props) => {
  return (
    <div id="ourServices" className="ourServices-container">
      <div className="img-ourServices-container">
        <img src={Woman}></img>
      </div>
      <div className="txt-ourServices-container">
      <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
        <p className="p-1">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
        {/* Nerima data dari homepage */}
        {props.dataOurServices.map((items) => {
          return (<div className="looped-txt">
            <div><img src={Eclipse}alt="eclipse-checklist" className="eclipse"></img></div>
            <p className="p-2">{items.text}</p>
          </div>)
        })}
        </div>
    </div>
  );
};

export default OurServices;