import axios from "axios";

const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

export const FetchData = async (endpoint) => {
  try {
    return await axios.get(baseUrl + endpoint, {
      params: {
        hl: "en",
        gl: "US",
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_API_KEY,
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
