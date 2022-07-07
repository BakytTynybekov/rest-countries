import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./country.scss";

export default function Country({ country }) {
  const mode = useSelector((state) => state.theme);
  let countryClasses = mode ? "country countryLight" : "country countryDark";
  return (
    <Link to={`/country/${country.name}`} className={countryClasses}>
      <img src={country.flags.png} alt="Kyrgyzstan" />
      <div className="country-info">
        <h2> {country.name} </h2>

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
    </Link>
  );
}
