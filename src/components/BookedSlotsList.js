const BookedSlotsList = ({ date, bookingInfo }) => {
    const slots = bookingInfo[date]?.booked || [];
  
    return (
      <div>
        <h2>Booked Slots for {date}</h2>
        <ul>
          {slots.map((slot) => (
            <li key={slot}>{slot}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BookedSlotsList;
  

