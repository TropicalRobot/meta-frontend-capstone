import Hero from "../components/Hero";
import BookingForm from "../components/BookingForm";
import { submitAPI } from "../utils/mockApi";

export default function BookingPage() {
  function submitForm(formData) {
    // Submit form data
    return submitAPI(formData);
  }

  return (
    <>
      <div>
        <Hero>
          <h1 className="display-title text-yellow">Booking</h1>
        </Hero>

        <BookingForm onSubmit={submitForm} />
      </div>
    </>
  );
}
