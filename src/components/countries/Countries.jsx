import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectControls } from "../../store/controls/controls-selector";
import { loadCountries } from "../../store/countries/countries-actions";
import {
  selectCountriesInfo,
  selectVisibleCountries,
} from "../../store/countries/countries-selector";
import Country from "../country/Country";
import "./countries.scss";

export default function Coutnries() {
  const dispatch = useDispatch();
  const { search, region } = useSelector(selectControls);
  const { status, error, qty } = useSelector(selectCountriesInfo);

  const countries = useSelector((state) =>
    selectVisibleCountries(state, { search, region })
  );

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return (
    <div>
      {error && <p className="container">Could not fetch the daya</p>}
      {status === "loading" && (
        <p className="container loadingHome">Loading...</p>
      )}
      {status === "received" && (
        <div className="countries">
          <div className="container">
            <div className="countries-inner">
              {countries && countries.length > 0 ? (
                countries?.map((country, index) => {
                  return <Country key={index} country={country} />;
                })
              ) : (
                <p>Can not find</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
