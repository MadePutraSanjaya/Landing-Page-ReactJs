import Button from '../Button/Button';
function BannerReservation() {
  return (
    <div>
      <div className="banner_reservation py-20">
        <div className="reservation_text text-center">
          <h3 className="text-3xl text-red-200 font-semibold italic mb-2">
            Reservation
          </h3>
          <h1 className="text-4xl text-white font-semibold ">
            Pesan Tempat Untuk Keluarga Anda
          </h1>
        </div>
        <div className="reservation_button text-center mt-8">
            <Button outline className="border-white text-white hover:bg-white hover:text-slate-800"> Pesan Online </Button>
        </div>
      </div>
    </div>
  );
}
export default BannerReservation