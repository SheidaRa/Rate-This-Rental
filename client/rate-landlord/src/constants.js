export const API_URL =
  process.env.NODE_ENV === "test"
    ? "http://mocked-api-url"
    : process.env.RAILS_API_URL
