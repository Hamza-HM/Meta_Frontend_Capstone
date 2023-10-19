import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { AlertProvider } from './context/alertContext';
import bookingReducer from "./reducers/bookingReducer";


test('initializeTimes function returns the correct value', () => {
  const initialState = {};
  const date = "2023-10-20";
  const times = ["17:00", "18:00", "19:00"];
  const action = {
      type: "INITIALIZE_TIMES",
      payload: {
          date,
          times,
      },
  };
  const newState = bookingReducer(initialState, action);
  expect(newState[date].availableTimes).toEqual(times);
  expect(newState[date].booked).toEqual([]);
});

test('updateTimes function returns the same value as provided in the state', () => {
  const initialState = {
      "2023-10-20": {
          availableTimes: ["17:00", "18:00"],
          booked: [],
      },
  };
  const action = {
      type: "UPDATE_TIMES", // Replace with your actual action type
      payload: {
          date: "2023-10-20",
          times: ["17:00", "18:00"],
      },
  };
  const newState = bookingReducer(initialState, action);
  expect(newState).toEqual(initialState);
});