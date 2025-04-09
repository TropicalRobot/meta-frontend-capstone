import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes } from "./layout/Main";
import { MemoryRouter } from "react-router";

const renderBookingForm = (props = {}) => {
  return render(
    <MemoryRouter>
      <BookingForm onSubmit={props.onSubmit || jest.fn()} />
    </MemoryRouter>
  );
};

test("Renders the BookingForm heading", () => {
  renderBookingForm();
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("shows error if date is not selected", () => {
  renderBookingForm();

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "2" },
  });
  fireEvent.click(screen.getByTestId("submit-button"));

  expect(screen.getByText(/please select a valid date/i)).toBeInTheDocument();
});

test("shows error if number of guests is less than 1 or more than 10", () => {
  renderBookingForm();

  // Set guests to 0
  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "0" },
  });

  fireEvent.click(screen.getByTestId("submit-button"));

  expect(
    screen.getByText(/please select a number of guests \(1 - 10\)/i)
  ).toBeInTheDocument();
});

test("shows error if time is not selected", () => {
  renderBookingForm();

  // Simulate clearing the time
  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "" },
  });

  fireEvent.click(screen.getByTestId("submit-button"));

  expect(screen.getByText(/please select a time/i)).toBeInTheDocument();
});

test("submits form if all fields are valid", () => {
  const mockSubmit = jest.fn(() => true);
  renderBookingForm({ onSubmit: mockSubmit });

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2025-05-01" },
  });
  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "3" },
  });

  fireEvent.click(screen.getByTestId("submit-button"));

  expect(mockSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      resDate: "2025-05-01",
      numGuests: "3",
    })
  );
});

test("submits form with valid data and no validation errors", () => {
  const mockSubmit = jest.fn(() => true); // simulate successful response
  renderBookingForm({ onSubmit: mockSubmit });

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2025-05-01" },
  });

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "4" },
  });

  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "18:00" },
  });

  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "birthday" },
  });

  fireEvent.click(screen.getByTestId("submit-button"));

  expect(mockSubmit).toHaveBeenCalledWith({
    resDate: "2025-05-01",
    numGuests: "4",
    resTime: "18:00",
    occasion: "birthday",
  });

  expect(
    screen.queryByText(/please select a valid date/i)
  ).not.toBeInTheDocument();
});

test("Initialises times in the BookingForm", () => {
  expect(
    Array.isArray(
      initializeTimes(
        [],
        ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
      )
    )
  ).toBeTruthy();
});
