import { create } from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  weather: null,
  city: "",
  loading: false,

  setCity: (city) => set({ city }),

  fetchWeather: async (city) => {
    set({ loading: true });
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=20a19963301f91d2cb6d8e4fba5e0e94&units=metric`
      );
      console.log("API Key:", process.env.REACT_APP_WEATHER_API_KEY);

      set({ weather: response.data, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));

export default useStore;
