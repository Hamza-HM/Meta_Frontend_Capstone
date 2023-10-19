import React, { useReducer, useState } from "react";
import BookingForm from "../components/BookingForm";
import BookedSlotsList from "../components/BookedSlotsList";
import bookingReducer from "../reducers/bookingReducer";

const BookingPage = () => {
  const [bookingInfo, dispatch] = useReducer(bookingReducer, {});
  const [selectedDate, setSelectedDate] = useState('');
  const handleDateChangeParent = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div className="container my-5 mt-5">
      <div className="row">
        <div className="col-md-6 mt-5 text-center">
          <h2 className="my-5">Make a Reservation</h2>
          <BookingForm
            bookingInfo={bookingInfo}
            handleDateChangeParent={handleDateChangeParent}
            dispatch={dispatch}
          />
        </div>
        <div className="col-md-6 mt-5 d-flex align-items-center">
          <BookedSlotsList date={selectedDate} bookingInfo={bookingInfo} />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
