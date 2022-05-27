import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GeneralContext } from "../../context/GeneralContext";
import { setTheme } from "../../store/theme/theme-action";
import "./header.scss";

export default function Header() {
  const mode = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const onChangeMode = () => {
    dispatch(setTheme());
  };

  let headerClasses = mode ? "header lightHeader" : "header darkHeader";
  return (
    <header className={headerClasses}>
      <div className="container">
        <div className="header-inner">
          <h1>Where in the world?</h1>
          <div>
            <button onClick={() => onChangeMode()}>
              {mode ? "Dark" : "Lıght"} Mode
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
