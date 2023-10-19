import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setLoading(true);
    try {
      await wait(2000);
      if (data.type === 'error') {
        throw new Error("Something went wrong");
      }
      const successResponse = {
        type: 'success',
        message: `Thanks for your submission, Your table has been booked!`,
      };
      setResponse(successResponse);
      return successResponse
    } catch (error) {
      const errorResponse = {
        type: 'error',
        message: 'Something went wrong, please try again later!',
      };
      setResponse(errorResponse);
      return errorResponse
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}


export default useSubmit;
