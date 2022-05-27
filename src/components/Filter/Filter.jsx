import { useDispatch, useSelector } from "react-redux";
import { setRegion, setSearch } from "../../store/controls/controls-actions";
import "./filter.scss";

export default function Filter() {
  const mode = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleSelect = (e) => {
    dispatch(setRegion(e.target.value));
  };

  let filterClasses = mode ? "filter filterLight" : "filter filterDark";

  return (
    <div className={filterClasses}>
      <div className="container">
        <div className="filter-inner">
          <div className="input-box">
            <button>Search</button>
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search for the country"
            />
          </div>
          <div className="filter-box">
            <select onChange={handleSelect} name="" id="">
              <option value="">Select the option</option>
              <option value="Americas">Americas</option>
              <option value="Africa">Africa</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
              <option value="Asia">Asia</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
