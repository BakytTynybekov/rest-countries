import { useSelector } from "react-redux";
import "./country.scss";

export default function Country({ country }) {
  const mode = useSelector((state) => state.theme);
  let countryClasses = mode ? "country countryLight" : "country countryDark";
  return (
    <a href="/" className={countryClasses}>
      <img src={country.flags.png} alt="Kyrgyzstan" />
      <div className="country-info">
        <h2> {country.name.official} </h2>

        <p>
          Population: <span>{country.population}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital: <span>{country.capital}</span>
        </p>
      </div>
    </a>
  );
}
