import Hero from "../components/Hero";
import ConfirmedBooking from "../components/ConfirmedBooking";

export default function BookingConfirmedPage() {
  return (
    <>
      <div>
        <Hero>
          <h1 className="display-title text-yellow">Booking</h1>
        </Hero>
        <div>
          <ConfirmedBooking />
        </div>
      </div>
    </>
  );
}
