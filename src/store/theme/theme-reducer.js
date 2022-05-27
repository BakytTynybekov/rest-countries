import { SET_THEME } from "./theme-action";

export const themeReducer = (state = true, { type }) => {
  switch (type) {
    case SET_THEME:
      return !state;
    default:
      return state;
  }
};
