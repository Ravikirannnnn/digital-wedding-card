import "./WeddingGallery.css";
import border from "../assets/pngfree-divider.png";
import Hero from '/V1.jpeg'; // Replace with your background image
import HeroBg from '/V6.jpeg'; // Replace with your background image
import img1 from '/V8.jpeg'; // Replace with your background image
import img2 from '/V4.jpeg'; // Replace with your background image
// import img3 from '/V3.jpeg'; // Replace with your background image
// import img4 from '/V2.jpeg'; // Replace with your background image
import best from '/V2.jpeg'; // Replace with your background image

export default function WeddingGallery() {
  const images = [
    HeroBg,
    best,
    Hero,
    img1,
    img2,
    // img3,
    // img4
  ];

  return (
    <section className="wedding-gallery">
      <h2 className="gallery-title">Our Beautiful Moments</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className={`gallery-item ${
              index === 0 ? "large" : ""
            }`}
          >
            <img src={img} alt="Wedding memory" />
          </div>
        ))}
      </div>
            <div>
              <img className="border-map "  src={border} alt="" />
            </div>
    </section>
  );
}