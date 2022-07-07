import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import CountryPage from "./Pages/CountryPage";
import Home from "./Pages/Home";
import "./styles.scss";

export default function App() {
  const mode = useSelector((state) => state.theme);

  let mainClasses = mode ? "App light" : "App dark";

  return (
    <div className={mainClasses}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<CountryPage />} />
      </Routes>
    </div>
  );
}
