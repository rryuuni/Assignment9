import useStore from "./store";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const setCity = useStore((state) => state.setCity);
  const fetchWeather = useStore((state) => state.fetchWeather);
  const weather = useStore((state) => state.weather);
  const loading = useStore((state) => state.loading);

  const Search = async () => {
    setCity(input);
    await fetchWeather(input);
  };

  return (
    <>
      <h1>날씨를 알려드립니다.</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="도시 이름을 영어로 검색해보세요."
      />
      <button onClick={Search}>검색</button>
      {loading && <p>로딩 중 ,,,</p>}
      {weather && weather.main && weather.weather && (
        <>
          <h3>{weather.name}</h3>
          <p>온도 : {weather.main.temp}℃</p>
          <p>날씨 : {weather.weather[0].description}</p>
        </>
      )}
    </>
  );
}

export default App;
