import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Select,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import Alert from "./Alert";
import { useFormik } from "formik";
import * as Yup from "yup";
import { faBookSkull } from "@fortawesome/free-solid-svg-icons";

const BookingForm = ({ handleDateChangeParent, bookingInfo, dispatch }) => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const [showAlert, setShowAlert] = useState(false);
  const [availableTimesR, setAvailableTimesR] = useState([]);

  const availableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    formik.setFieldValue("resDate", currentDate);
    handleDateChange(currentDate);
  }, []);

  const handleDateChange = (selectedDate) => {
    dispatch({ type: "INITIALIZE_TIMES", payload: { date: selectedDate, times: availableTimes } });
    setAvailableTimesR(bookingInfo[selectedDate]?.availableTimes || availableTimes);
    handleDateChangeParent(selectedDate);
  };

  const validationSchema = Yup.object().shape({
    resDate: Yup.date().required("Required"),
    resTime: Yup.string().required("Required"),
    guests: Yup.number()
      .min(1, "Must be at least 1 guest")
      .max(10, "Cannot be more than 10 guests")
      .required("Required"),
    occasion: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      resDate: "",
      resTime: "17:00",
      guests: 1,
      occasion: "Birthday",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { resDate, resTime } = values;
      try {
        if (bookingInfo[resDate].booked.includes(resTime)) {
          throw new Error("We're sorry this table Slot already taken for this date");
        }
        const res = await submit(values);
        console.log(res); // Log the response returned by submit
        dispatch({ type: "BOOK_SLOT", payload: { date: resDate, time: resTime } });
        if (res) {
          setShowAlert(true);
          onOpen("success", res.message); // Use 'res' to access the message
        }
      } catch (error) {
        setShowAlert(true);
        onOpen("error", error.message);
      }
    },
  });

  return (
    <FullScreenSection py={16} bg="white" borderWidth="1px" borderColor="gray.200" borderRadius="lg" p={6}>
      <Box w="100%">
        <form onSubmit={formik.handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
          <FormControl isInvalid={formik.touched.resDate && formik.errors.resDate}>
            <FormLabel htmlFor="res-date" aria-label="Select reservation date">Choose date</FormLabel>
            <Input
              type="date"
              id="res-date"
              name="resDate"
              value={formik.values.resDate}
              onChange={(e) => {
                formik.handleChange(e);
                handleDateChange(e.target.value);
              }}
            />
            <FormErrorMessage>{formik.errors.resDate}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.touched.resTime && formik.errors.resTime}>
            <FormLabel htmlFor="res-time" aria-label="Select reservation time">Choose time</FormLabel>
            <Select className="booking-list" id="res-time" name="resTime" value={formik.values.resTime} onChange={formik.handleChange}>
                {availableTimesR && availableTimesR.map((time) => (
                <option
                    key={time}
                    value={time}
                    disabled={bookingInfo[formik.values.resDate]?.booked.includes(time)}
                    className={bookingInfo[formik.values.resDate]?.booked.includes(time) ? 'disabled-option' : ''}
                >
                    {time}
                </option>
                ))}
            </Select>
            <FormErrorMessage>{formik.errors.resTime}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
            <FormLabel htmlFor="guests" aria-label="Select number of guests">Number of guests</FormLabel>
            <Input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              name="guests"
              value={formik.values.guests}
              onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
            <FormLabel htmlFor="occasion" aria-label="Select occasion">Occasion</FormLabel>
            <Select className="booking-list" id="occasion" name="occasion" value={formik.values.occasion} onChange={formik.handleChange}>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </Select>
            <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
          </FormControl>

          <Button isLoading={isLoading} type="submit" colorScheme="yellow" width="full" aria-label="Submit reservation">
            Make Your reservation
          </Button>
        </form>
      </Box>
      {showAlert && <Alert />}
    </FullScreenSection>
  );
};

export default BookingForm;
