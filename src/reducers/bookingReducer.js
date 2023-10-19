const bookingReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_TIMES": {
      const { date, times } = action.payload;
      
      // Check if the date entry already exists
      if (state[date]) {
        // If it does, don't change the availableTimes and booked slots
        return state;
      }

      // Initialize the date entry with availableTimes and an empty array for booked
      state[date] = {
        availableTimes: times,
        booked: [],
      };

      return { ...state };
    }
    case "BOOK_SLOT": {
      const { date, time } = action.payload;

      if (!state[date]) {
        // Initialize the date entry with availableTimes and an empty array for booked
        state[date] = {
          availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
          booked: [],
        };
      }

      // Check if the time is in availableTimes and is not already booked
      if (state[date].availableTimes.includes(time) && !state[date].booked.includes(time)) {
        // Remove the booked time slot from availableTimes
        const updatedAvailableSlots = state[date].availableTimes.filter((slot) => slot !== time);

        // Add the booked time slot to booked
        state[date].booked.push(time);

        // Update the state with the new available slots and booked slots
        return {
          ...state,
          [date]: {
            availableTimes: updatedAvailableSlots,
            booked: state[date].booked,
          },
        };
      }

      return state;
    }

    default:
      return state;
  }
};

export default bookingReducer;
