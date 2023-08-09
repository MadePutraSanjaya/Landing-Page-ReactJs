import "./Location.css";

function Location() {
  return (
    <div>
      <div className="map pt-16" id="map">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-slate-800">
            Our Location
          </h1>
          <div className="w-10 my-2 mb-8 h-px bg-rose-700 mx-auto mb-12"></div>
        </div>
        <div className="mapouter">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126214.34859687953!2d115.1418713279999!3d-8.672674467192252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xe27334e8ccb9374a!2sDenpasar%2C%20Kota%20Denpasar%2C%20Bali!5e0!3m2!1sid!2sid!4v1691461397450!5m2!1sid!2sid"
            width="100%"
            height="700"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Location;
