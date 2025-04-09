import React, { useState, useReducer, useEffect } from "react";
import { availableTimesReducer } from "../layout/Main";
import { fetchAPI as bookingAPIFetch } from "../utils/mockApi";
import { useNavigate } from "react-router";

export default function BookingForm({ onSubmit }) {
  const [resDate, setResDate] = useState({
    value: "",
    valid: true,
  });
  const [numGuests, setNumGuests] = useState({
    value: 1,
    valid: true,
  });
  const [resTime, setResTime] = useState({
    value: "17:00",
    valid: true,
  });
  const [occasion, setOccasion] = useState({
    value: "",
    valid: true,
  });
  const [formResponse, setFormResponse] = useState(true);
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);
  const navigate = useNavigate();

  function handleChangeDate(e) {
    const date = e.target.value;
    setResDate({ ...resDate, value: date });
    if (bookingAPIFetch) {
      const times = bookingAPIFetch(new Date(date));
      dispatch({ type: "initialized", payload: times });
    }
  }

  const validateForm = function () {
    let formValid = true;

    if (!resDate.value) {
      setResDate({ ...resDate, valid: false });
      formValid = false;
    } else {
      setResDate({ ...resDate, valid: true });
    }

    if (!numGuests.value || numGuests.value < 1 || numGuests.value > 10) {
      setNumGuests({ ...numGuests, valid: false });
      formValid = false;
    } else {
      setNumGuests({ ...numGuests, valid: true });
    }

    if (!resTime.value) {
      setResTime({ ...resTime, valid: false });
      formValid = false;
    } else {
      setResTime({ ...resTime, valid: true });
    }

    return formValid;
  };

  function handleSubmit(e) {
    e.preventDefault();

    // Validate form data
    if (validateForm() === false) {
      return;
    }

    // Create form data object
    const formData = {
      resDate: resDate.value,
      numGuests: numGuests.value,
      resTime: resTime.value,
      occasion: occasion.value,
    };

    const response = onSubmit(formData);

    if (response) {
      // navigate to the confirmation page
      setFormResponse(true);
      return navigate("/booking-confirmed");
    } else {
      setFormResponse(false);
    }
  }

  useEffect(() => {
    const intitialTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];

    dispatch({ type: "initialized", payload: intitialTimes });
  }, []);

  return (
    <section className="container section">
      <header>
        <h1>Book Now</h1>
      </header>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label id="res-date-label" htmlFor="res-date">
            Choose date
          </label>
          <input
            value={resDate.value}
            type="date"
            id="res-date"
            onChange={(e) => handleChangeDate(e)}
            aria-required="true"
            required
            aria-describedby="res-date-label"
          />
          {!resDate.valid && (
            <small className="error">Please select a valid date.</small>
          )}
        </div>

        <div className="form-group">
          <label id="res-time-label" htmlFor="res-time">
            Choose time
          </label>
          <select
            id="res-time"
            value={resTime.value}
            onChange={(e) => setResTime({ ...resTime, value: e.target.value })}
            required
            aria-required="true"
            aria-label="Choose time"
            aria-describedby="res-time-label"
          >
            {availableTimes.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
          {!resTime.valid && (
            <small className="error">Please select a time</small>
          )}
        </div>

        <div className="form-group">
          <label id="guests-label" htmlFor="guests">
            Number of guests
          </label>
          <input
            type="number"
            value={numGuests.value}
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            required
            aria-required="true"
            onChange={(e) =>
              setNumGuests({ ...numGuests, value: e.target.value })
            }
            aria-describedby="guests-label"
          />
          {!numGuests.valid && (
            <small className="error">
              Please select a number of guests (1 - 10)
            </small>
          )}
        </div>

        <div className="form-group">
          <label id="occasion-label" htmlFor="occasion">
            Occasion
          </label>
          <select
            id="occasion"
            defaultValue={occasion.value}
            onChange={(e) =>
              setOccasion({ ...occasion, value: e.target.value })
            }
            aria-describedby="occasion-label"
          >
            <option value="">None</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>

        <input
          data-testid="submit-button"
          type="submit"
          value="Make Your reservation"
          aria-label="Make Your reservation"
        />
      </form>
      {formResponse === false && (
        <div className="error">
          There has been a submission error. Please try again.{" "}
        </div>
      )}
    </section>
  );
}
