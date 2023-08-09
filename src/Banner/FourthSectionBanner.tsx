import BgSection from "../Assets/bg-makanan.png"

function FourthSectionBanner() {
  return (
    <div className="section_banner">
      <div className="top_section container mx-auto mt-16">
        <div className="section_text text-center ">
          <h4 className="text-3xl text-red-700">Terbuat Dari</h4>
          <h1 className="text-4xl text-black font-bold mb-4">
            Racikan Bumbu Terbaik
          </h1>
          <p className="text-slate-600 font-light max-w-2xl mx-auto">
            Bumbu - bumbu khas Jimbaran yang kuat, sehingga rasa dan cita rasa
            tetap terjaga. Nikmati pengalaman kuliner yang tak terlupakan di
            Ikan Bakar Ala Jimbaran, di mana setiap hidangan disajikan dengan
            bumbu rempah segar yang terasa sangat autentik. Dengan pilihan menu
            yang beragam, kami menjamin kepuasan lidah Anda.
          </p>
        </div>
        <div className="section_image w-3/6 mx-auto">
          <img src={BgSection} alt="" />
        </div>
      </div>
    </div>
  );
}
export default FourthSectionBanner