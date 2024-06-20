import { Pin } from "../constants";

const GoogleMap = () => {
  return (
    <section
      className="relative w-full"
      id="contact"
    >
      <iframe
        width="100%"
        height="600"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Mulhouse,%20France+(Beergarden)&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.gps.ie/">gps systems</a>
      </iframe>
      <img
        src={Pin}
        alt="pin"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </section>
  );
};

export default GoogleMap;
