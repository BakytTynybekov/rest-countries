import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTheme } from "../../store/theme/theme-action";
import "./header.scss";

export default function Header() {
  const mode = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChangeMode = () => {
    dispatch(setTheme());
  };

  let headerClasses = mode ? "header lightHeader" : "header darkHeader";
  return (
    <header className={headerClasses}>
      <div className="container">
        <div className="header__inner">
          <h1 onClick={() => navigate("/")}>Where in the world?</h1>
          <div>
            <button className="mode-button" onClick={() => onChangeMode()}>
              {mode ? (
                <span className="dark">
                  <i class="fa-solid fa-moon"></i>
                </span>
              ) : (
                <span className="light">
                  <i class="fa-solid fa-sun"></i>
                </span>
              )}
              {mode ? "Light" : "Dark"} Mode
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
