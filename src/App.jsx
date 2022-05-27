import { useSelector } from "react-redux";
import Coutnries from "./components/countries/Countries";
import Filter from "./components/Filter/Filter";
import Header from "./components/header/Header";
import "./styles.scss";

export default function App() {
  const mode = useSelector((state) => state.theme);

  let mainClasses = mode ? "App light" : "App dark";

  return (
    <div className={mainClasses}>
      <Header />
      <Filter />
      <Coutnries />
    </div>
  );
}
