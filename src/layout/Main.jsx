import { Routes, Route } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import BookingPage from "../pages/BookingPage";
import BookingConfirmedPage from "../pages/BookingConfirmedPage";

export default function Main({ children }) {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route
          path="/booking-confirmed"
          element={<BookingConfirmedPage />}
        ></Route>
      </Routes>
    </main>
  );
}

function availableTimesReducer(state, action) {
  switch (action.type) {
    case "updated":
      return updateTimes(state, action.payload);
    case "initialized":
      return initializeTimes(state, action.payload);
    default:
      return state;
  }
}

function updateTimes(state, times) {
  // Update available times
  return times;
}

function initializeTimes(state, times) {
  // Initialize available times
  return times;
}

export { availableTimesReducer, initializeTimes, updateTimes };
