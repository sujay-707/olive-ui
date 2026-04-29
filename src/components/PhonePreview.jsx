import phoneUI from "../assets/phone-ui.png";

export default function PhonePreview() {
  return (
    <section className="phone-section">
      <div className="phone-container">

        <img
          src={phoneUI}
          alt="App preview"
          className="phone-image"
        />

      </div>
    </section>
  );
}