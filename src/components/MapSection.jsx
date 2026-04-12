import border from "../assets/pngfree-divider.png";
import "./MapSection.css";

const MapSection = () => {
  const widthStyle = window.innerWidth <= 800 ? "100%" : "70%";
  return (
    <div className="map-container">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.6341162697854!2d76.40575331083316!3d14.216189286314792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba7454dd047b35%3A0x2b2cbe247c18c13!2sG.G%20Samudaya%20Bhavana!5e0!3m2!1sen!2sin!4v1775996368647!5m2!1sen!2sin"
        referrerpolicy="no-referrer-when-downgrade"
        height="300"
        width={widthStyle}
        style={{ border: "0", borderRadius: "30px" }}
        allowFullScreen
      ></iframe>


      <div>
        <img className="border-map" src={border} alt="" />
      </div>

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084.1062005424897!2d76.41891691083329!3d14.220349486215309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba75a80611c0b9%3A0xf35bc2b82ac7b13!2sSri%20Rama%20Kalyana%20Mantapa!5e1!3m2!1sen!2sin!4v1742720046282!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    </div>
  );
};

export default MapSection;
