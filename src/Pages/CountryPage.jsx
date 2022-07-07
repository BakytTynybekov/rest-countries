import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  clearDetails,
  loadCountryByName,
  loadNeighborsByBorder,
} from "../store/details/details-actions";
import {
  selectDetails,
  selectNeighbors,
} from "../store/details/details-selector";
import "./country-page.scss";

function CountryPage() {
  const { name } = useParams();
  const { currentCountry, error, status } = useSelector(selectDetails);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  const neighbors = useSelector(selectNeighbors);
  useEffect(() => {
    if (currentCountry) {
      if (currentCountry[0].borders) {
        dispatch(loadNeighborsByBorder(currentCountry[0]?.borders));
      }
    }
  }, [dispatch, currentCountry, neighbors.length]);

  return (
    <div>
      {status === "loading" && <h2 className="loading">Loading...</h2>}
      {error && <p className="error">{error}</p>}
      {currentCountry && (
        <div className="container">
          <button className="back" onClick={() => navigate(-1)}>
            <span className="arrow">
              <i class="fa-solid fa-arrow-left"></i>
            </span>
            Back
          </button>
          <div className="country-detail">
            <div className="country-flag">
              <img src={currentCountry[0]?.flags.png} alt={currentCountry[0]} />
            </div>
            <div className="country-info">
              <h2>{currentCountry[0]?.name}</h2>
              <div className="country-info__inner">
                <p>
                  {" "}
                  <strong>Native Name:</strong>
                  <span>{currentCountry[0]?.nativeName}</span>
                </p>
                <p>
                  {" "}
                  <strong>Population:</strong>
                  <span>{currentCountry[0]?.population}</span>
                </p>
                <p>
                  {" "}
                  <strong>Region:</strong>
                  <span>{currentCountry[0]?.region}</span>
                </p>
                <p>
                  {" "}
                  <strong>Sub Region:</strong>
                  <span>{currentCountry[0]?.subregion}</span>
                </p>
                <p>
                  {" "}
                  <strong>Capital:</strong>{" "}
                  <span>{currentCountry[0]?.capital}</span>
                </p>

                <p>
                  {" "}
                  <strong>Languages:</strong>
                  {currentCountry[0]?.languages?.map((lang, index) => (
                    <span>
                      {lang.name}
                      {currentCountry[0]?.languages.length - 1 === index
                        ? ""
                        : ","}
                    </span>
                  ))}
                </p>
              </div>
              <div className="country-neightbours">
                <p>Border Countries:</p>
                <ul className="borders">
                  {neighbors &&
                    neighbors?.map((item, index) => {
                      return (
                        <li
                          className="borders-item"
                          onClick={() => navigate(`/country/${item}`)}
                          key={item}
                        >
                          {item}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryPage;
