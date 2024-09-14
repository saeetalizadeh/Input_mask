import { useState } from "react";
import cities from "./cities.json";
import Input from "./Input.jsx";
function App() {
  const [hint, setHint] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;

    if (value) {
      const matchedCity = cities.find((city) => city.startsWith(value));
      setHint(matchedCity || "");
    } else {
      setHint("");
    }
  };
  return (
    <div>
      <Input handleChange={handleChange} hint={hint} />
    </div>
  );
}

export default App;
