import axios from "axios";

export const handleAxiosError = (error: unknown): string => {
  let message = "An unexpected error occured.";

  if (axios.isAxiosError(error)) {
    if (error.code === "ECONNABORTED") {
      message = "Request time out. Please try again.";
    } else if (error.response) {
      message =
        error.response.data?.message || `Error: ${error.response.status}`;
    } else {
      message = error.message || "Network error. Please check your connection.";
    }
  }

  return message;
};
