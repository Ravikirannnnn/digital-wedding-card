import "./EventDetails.css";
import Wed1 from '../assets/wed-ring.png'
import Wed2 from '../assets/web-flow.png'
import ring from '../assets/wedding-ring.png'
import table from '../assets/dinner-table.png'
import map from '../assets/map.png'
import border from "../assets/pngfree-divider.png"
import { useTranslation } from "react-i18next";

const EventDetails = () => {
  const {t} = useTranslation();

  return (
    <>
    <section className="events">
      <div className="event-card" style={{backgroundImage:`url(${Wed1})`}}>
      <div className="overlay-ev"></div>
      <img loading="lazy" src={table} alt="" />
        <h3>{t("b1_tit")}</h3>
        <p>{t("b1_date")}</p>
        <p>{t("b1_time")}</p>
        <h5>{t("kalyan")}</h5>
        <p>{t("address")}</p>
        <button onClick={()=>window.open("https://www.google.com/maps/place/G.G+Samudaya+Bhavana/@14.2161893,76.4057533,17z/data=!4m14!1m7!3m6!1s0x3bba7454dd047b35:0x2b2cbe247c18c13!2sG.G+Samudaya+Bhavana!8m2!3d14.2161841!4d76.4083336!16s%2Fg%2F11ckbhsmyj!3m5!1s0x3bba7454dd047b35:0x2b2cbe247c18c13!8m2!3d14.2161841!4d76.4083336!16s%2Fg%2F11ckbhsmyj?authuser=0&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D")}>
          <img className="map" src={map} alt="map" />
          Open Map</button>
      </div>
      <div className="event-card"  style={{backgroundImage:`url(${Wed2})`}}>
      <div className="overlay-ev"></div>
      <img loading="lazy" src={ring} alt="" />
      <h3>{t("b2_tit")}</h3>
        <p>{t("b2_date")}</p>
        <p>{t("b2_time")}</p>
        <h5>{t("kalyan")}</h5>
        <p>{t("address")}</p>
        <button onClick={()=>window.open("https://www.google.com/maps/place/G.G+Samudaya+Bhavana/@14.2161893,76.4057533,17z/data=!4m14!1m7!3m6!1s0x3bba7454dd047b35:0x2b2cbe247c18c13!2sG.G+Samudaya+Bhavana!8m2!3d14.2161841!4d76.4083336!16s%2Fg%2F11ckbhsmyj!3m5!1s0x3bba7454dd047b35:0x2b2cbe247c18c13!8m2!3d14.2161841!4d76.4083336!16s%2Fg%2F11ckbhsmyj?authuser=0&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D")}>
          <img className="map" src={map} alt="map" />
          Open Map</button>
      </div>
    </section>
      <div>
                  <img className="border-map-ev" src={border} alt="" />
          </div>
          </>
  );
};

export default EventDetails;
